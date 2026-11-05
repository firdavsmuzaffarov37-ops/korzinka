import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  X,
  Send,
  Camera,
  ShoppingCart,
  Store,
  CheckCircle2,
  TrendingDown,
  ListChecks,
  Upload,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { runAiShoppingAssistant, runVisualProductSearch } from '@shared/utils/aiEngine';
import { formatUzs, getLocalizedTitle } from '@shared/utils/formatters';
import { TRANSLATIONS } from '@shared/constants/translations';

const VISUAL_SAMPLE_PRESETS = [
  {
    id: 'phone',
    labels: {
      uz: 'Smartfon fotosi (AMOLED)',
      ru: 'Фото смартфона (AMOLED)',
      en: 'Smartphone Photo (AMOLED)',
    },
    category: 'smartphones xiaomi redmi phone',
    previewUrl:
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'shoes',
    labels: {
      uz: 'Sport krossovkasi fotosi',
      ru: 'Фото кроссовок для бега',
      en: 'Running Sneakers Photo',
    },
    category: 'shoes sneakers nike running',
    previewUrl:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'coffee',
    labels: {
      uz: 'Qahva mashinasi fotosi',
      ru: 'Фото кофемашины эспрессо',
      en: 'Espresso Machine Photo',
    },
    category: 'kitchen coffee espresso delonghi',
    previewUrl:
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=400&q=80',
  },
];

export default function AiShoppingAssistantModal() {
  const {
    isAiAssistantOpen,
    setIsAiAssistantOpen,
    aiInitialPrompt,
    products,
    lang,
    addToCart,
    showToast,
  } = useMarketplace();

  const t = TRANSLATIONS[lang] || TRANSLATIONS.uz;

  const [activeTab, setActiveTab] = useState('chat'); // 'chat' | 'visual'
  const [inputPrompt, setInputPrompt] = useState(t.aiDefaultPrompt);
  const [aiResult, setAiResult] = useState(null);

  // Visual Search State
  const [uploadedPreview, setUploadedPreview] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [visualMatches, setVisualMatches] = useState([]);
  const fileInputRef = useRef(null);

  const quickPrompts = [
    t.aiPrompt1,
    t.aiPrompt2,
    t.aiPrompt3,
    lang === 'uz'
      ? 'Toshkent doʻkonlarida eng arzon noutbuklar'
      : lang === 'ru'
      ? 'Сравнить цены на ноутбуки в магазинах Ташкента'
      : 'Compare laptop prices across Tashkent sellers',
  ];

  useEffect(() => {
    if (isAiAssistantOpen) {
      const queryToRun =
        aiInitialPrompt && aiInitialPrompt.trim().length > 0
          ? aiInitialPrompt
          : t.aiDefaultPrompt;
      setInputPrompt(queryToRun);
      const res = runAiShoppingAssistant({ prompt: queryToRun, products, lang });
      setAiResult(res);
    }
  }, [isAiAssistantOpen, aiInitialPrompt, products, lang, t.aiDefaultPrompt]);

  if (!isAiAssistantOpen) return null;

  const handleRunQuery = (e, customText) => {
    if (e) e.preventDefault();
    const query = (customText ?? inputPrompt).trim();
    if (!query) return;
    setInputPrompt(query);
    const res = runAiShoppingAssistant({ prompt: query, products, lang });
    setAiResult(res);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedPreview(reader.result);
      setUploadedFileName(file.name);
      const matches = runVisualProductSearch({
        fileName: file.name,
        visualCategory: file.name,
        products,
      });
      setVisualMatches(matches);
      showToast(
        lang === 'uz'
          ? `Rasm orqali ${matches.length} ta mahsulot topildi`
          : lang === 'ru'
          ? `По фото найдено ${matches.length} товаров`
          : `Visual AI matched ${matches.length} products`
      );
    };
    reader.readAsDataURL(file);
  };

  const handleSelectVisualPreset = (preset) => {
    const label = preset.labels[lang] || preset.labels.uz;
    setUploadedPreview(preset.previewUrl);
    setUploadedFileName(label);
    const matches = runVisualProductSearch({
      fileName: label,
      visualCategory: preset.category,
      products,
    });
    setVisualMatches(matches);
  };

  const handleAddShoppingListToCart = () => {
    if (!aiResult?.shoppingList?.items) return;
    aiResult.shoppingList.items.forEach((item) => {
      addToCart(item.product, { quantity: item.quantity });
    });
    showToast(
      lang === 'uz'
        ? `Roʻyxatdagi barcha ${aiResult.shoppingList.items.length} ta mahsulot savatga qoʻshildi!`
        : lang === 'ru'
        ? `Все ${aiResult.shoppingList.items.length} товаров добавлены в корзину!`
        : `Added all ${aiResult.shoppingList.items.length} items to cart!`
    );
    setIsAiAssistantOpen(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl rounded-3xl ai-glass shadow-2xl border border-emerald-300/50 overflow-hidden my-auto max-h-[92vh] sm:max-h-[88vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 text-white px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/25 shrink-0">
                <Sparkles className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-base sm:text-lg font-extrabold tracking-tight">
                    {t.aiAssistant}
                  </h2>
                  <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                    {lang === 'uz'
                      ? '100% Katalog asosida'
                      : lang === 'ru'
                      ? '100% на базе каталога'
                      : '100% Catalog Grounded'}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-emerald-100/90 hidden sm:block">
                  {lang === 'uz'
                    ? 'Haqiqiy narxlar tahlili, doʻkonlarni solishtirish va rasm orqali qidiruv'
                    : lang === 'ru'
                    ? 'Анализ бюджета в сумах, сравнение цен продавцов и поиск по фото'
                    : 'Real-time UZS budget analyzer, multi-seller price comparator & visual search'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsAiAssistantOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mode Switch Tabs */}
          <div className="bg-emerald-950/5 px-4 sm:px-6 py-2.5 border-b border-emerald-100 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('chat')}
                className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-xl text-xs font-bold transition ${
                  activeTab === 'chat'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-emerald-50'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {lang === 'uz'
                    ? 'Byudjet va narx maslahatchisi'
                    : lang === 'ru'
                    ? 'Советник по бюджету и ценам'
                    : 'Budget & Price Advisor'}
                </span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('visual');
                  if (visualMatches.length === 0) {
                    handleSelectVisualPreset(VISUAL_SAMPLE_PRESETS[0]);
                  }
                }}
                className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-xl text-xs font-bold transition ${
                  activeTab === 'visual'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-emerald-50'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>{t.visualSearch}</span>
              </button>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-[11px] font-medium text-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>
                {lang === 'uz'
                  ? 'Narxlar va doʻkon maʼlumotlarini toʻqib chiqarmaydi'
                  : lang === 'ru'
                  ? 'Не придумывает цены и скидки'
                  : 'Never invents prices, discounts, or seller data'}
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6 flex-1 bg-white/80">
            {activeTab === 'chat' ? (
              <>
                {/* Search Input & Presets */}
                <form onSubmit={handleRunQuery} className="space-y-3">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={inputPrompt}
                      onChange={(e) => setInputPrompt(e.target.value)}
                      placeholder={t.aiDefaultPrompt}
                      className="w-full pl-4 pr-24 sm:pr-28 py-3 rounded-2xl border-2 border-emerald-500/40 focus:border-emerald-600 focus:outline-none text-xs sm:text-sm font-medium text-slate-900 bg-white shadow-sm"
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 sm:right-2 inline-flex items-center gap-1 px-3 sm:px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>
                        {lang === 'uz' ? 'Tahlil' : lang === 'ru' ? 'Анализ' : 'Analyze'}
                      </span>
                    </button>
                  </div>

                  {/* Quick Prompt Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {quickPrompts.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => handleRunQuery(null, q)}
                        className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 transition text-left"
                      >
                        "{q}"
                      </button>
                    ))}
                  </div>
                </form>

                {aiResult && (
                  <div className="space-y-5 sm:space-y-6">
                    {/* AI Grounded Explanation Box */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 border border-emerald-200 shadow-sm">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          {lang === 'uz'
                            ? 'AI Marketpleys tavsiyasi'
                            : lang === 'ru'
                            ? 'Рекомендация AI маркетплейса'
                            : 'AI Marketplace Recommendation'}
                        </span>
                        {aiResult.budgetUzs && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-700 text-white">
                            {lang === 'uz'
                              ? 'Aniqlangan byudjet:'
                              : lang === 'ru'
                              ? 'Определённый бюджет:'
                              : 'Detected Budget:'}{' '}
                            {formatUzs(aiResult.budgetUzs, lang)}
                          </span>
                        )}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-800 whitespace-pre-line leading-relaxed">
                        {aiResult.summaryText.replace(/\*\*/g, '')}
                      </div>
                    </div>

                    {/* Recommended Products Grid */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-3">
                        {lang === 'uz'
                          ? 'Mos kelgan mahsulotlar'
                          : lang === 'ru'
                          ? 'Подходящие товары'
                          : 'Matching Marketplace Products'}{' '}
                        ({aiResult.recommendedProducts.length})
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {aiResult.recommendedProducts.map((prod) => (
                          <div
                            key={prod.id}
                            className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 transition shadow-sm"
                          >
                            <img
                              src={prod.images?.[0]}
                              alt={getLocalizedTitle(prod, lang)}
                              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0 bg-slate-100"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                                <Store className="w-3 h-3 shrink-0" />
                                <span className="truncate">{prod.sellerName}</span>
                                <span>• ★ {prod.rating}</span>
                              </div>
                              <Link
                                to={`/product/${prod.id}`}
                                onClick={() => setIsAiAssistantOpen(false)}
                                className="text-xs font-bold text-slate-900 hover:text-emerald-700 line-clamp-2 mt-0.5"
                              >
                                {getLocalizedTitle(prod, lang)}
                              </Link>
                              <div className="mt-1.5 flex items-center justify-between gap-2">
                                <div>
                                  <span className="text-xs sm:text-sm font-extrabold text-emerald-700">
                                    {formatUzs(prod.priceUzs, lang)}
                                  </span>
                                  {prod.oldPriceUzs > prod.priceUzs && (
                                    <span className="ml-1.5 text-[10px] text-slate-400 line-through">
                                      {formatUzs(prod.oldPriceUzs, lang)}
                                    </span>
                                  )}
                                </div>
                                <button
                                  type="button"
                                  onClick={() => addToCart(prod)}
                                  className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold inline-flex items-center gap-1 shrink-0"
                                >
                                  <ShoppingCart className="w-3 h-3" />
                                  <span>{t.addToCart}</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Multi-Seller Price Comparison & Cheaper Alternative */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Multi-Seller Comparison */}
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                          <Store className="w-4 h-4 text-emerald-600" />
                          {t.priceComparison}
                        </h4>
                        {aiResult.priceComparisons.slice(0, 2).map((comp) => (
                          <div key={comp.productId} className="mb-3 last:mb-0">
                            <div className="text-xs font-bold text-slate-900 mb-1.5 truncate">
                              {comp.productName}
                            </div>
                            <div className="space-y-1.5">
                              {comp.offers.map((offer, idx) => (
                                <div
                                  key={idx}
                                  className={`flex items-center justify-between text-xs p-2 rounded-xl border ${
                                    idx === 0
                                      ? 'bg-emerald-50 border-emerald-300 font-semibold'
                                      : 'bg-white border-slate-200'
                                  }`}
                                >
                                  <div>
                                    <span className="text-slate-900">{offer.sellerName}</span>
                                    <span className="block text-[10px] text-slate-500">
                                      {offer.deliveryEta} • ★ {offer.rating}
                                    </span>
                                  </div>
                                  <div className="text-right">
                                    <span className="text-emerald-700 font-bold">
                                      {formatUzs(offer.priceUzs, lang)}
                                    </span>
                                    {idx === 0 && (
                                      <span className="block text-[10px] text-emerald-600 font-bold">
                                        {lang === 'uz'
                                          ? 'Eng arzon narx'
                                          : lang === 'ru'
                                          ? 'Лучшая цена'
                                          : 'Lowest Price'}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Cheaper Alternative & Smart Shopping List */}
                      <div className="space-y-3">
                        {aiResult.cheapestAlternative && (
                          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                            <div className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5 mb-2">
                              <TrendingDown className="w-4 h-4 text-amber-600" />
                              {lang === 'uz'
                                ? 'Byudjetga mos tejamkor variant'
                                : lang === 'ru'
                                ? 'Выгодная альтернатива'
                                : 'Best Value Cheaper Alternative'}
                            </div>
                            <div className="flex items-center justify-between gap-2">
                              <div>
                                <Link
                                  to={`/product/${aiResult.cheapestAlternative.id}`}
                                  onClick={() => setIsAiAssistantOpen(false)}
                                  className="text-xs font-bold text-slate-900 hover:text-emerald-700"
                                >
                                  {getLocalizedTitle(aiResult.cheapestAlternative, lang)}
                                </Link>
                                <div className="text-sm font-extrabold text-emerald-700 mt-0.5">
                                  {formatUzs(aiResult.cheapestAlternative.priceUzs, lang)}
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => addToCart(aiResult.cheapestAlternative)}
                                className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold shrink-0 shadow-sm"
                              >
                                {t.addToCart}
                              </button>
                            </div>
                          </div>
                        )}

                        {aiResult.shoppingList?.items?.length > 0 && (
                          <div className="p-4 rounded-2xl bg-emerald-950 text-white">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                                <ListChecks className="w-4 h-4" />
                                {lang === 'uz'
                                  ? 'AI xaridlar roʻyxati'
                                  : lang === 'ru'
                                  ? 'Список покупок от AI'
                                  : 'AI Generated Shopping List'}
                              </span>
                              <span className="text-xs font-bold text-emerald-200">
                                {formatUzs(aiResult.shoppingList.totalUzs, lang)}
                              </span>
                            </div>
                            <ul className="space-y-1 text-xs text-emerald-100 mb-3 max-h-36 overflow-y-auto">
                              {aiResult.shoppingList.items.map((entry, idx) => (
                                <li key={idx} className="flex justify-between gap-2">
                                  <span className="truncate">
                                    • {getLocalizedTitle(entry.product, lang)}
                                  </span>
                                  <span className="font-semibold shrink-0">
                                    {formatUzs(entry.priceUzs, lang)}
                                  </span>
                                </li>
                              ))}
                            </ul>
                            <button
                              type="button"
                              onClick={handleAddShoppingListToCart}
                              className="w-full py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition shadow-sm"
                            >
                              {lang === 'uz'
                                ? `Barcha ${aiResult.shoppingList.items.length} ta tovarlarni savatga qoʻshish`
                                : lang === 'ru'
                                ? `Добавить все ${aiResult.shoppingList.items.length} товаров в корзину`
                                : `Add All ${aiResult.shoppingList.items.length} Items to Cart`}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* VISUAL PRODUCT SEARCH TAB */
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-emerald-400 rounded-2xl p-6 text-center cursor-pointer bg-emerald-50/50 hover:bg-emerald-50 transition"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <Upload className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <div className="text-sm font-bold text-slate-900">
                      {lang === 'uz'
                        ? 'Mahsulot rasmini yuklang'
                        : lang === 'ru'
                        ? 'Загрузите фото товара'
                        : 'Upload a Product Photo'}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {lang === 'uz'
                        ? 'PNG, JPG yoki WEBP — AI toifa va rang boʻyicha taqqoslaydi'
                        : lang === 'ru'
                        ? 'PNG, JPG или WEBP — AI подберёт товар по фото и характеристикам'
                        : 'PNG, JPG, or WEBP — AI matches visual tags, category & color profile'}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-700">
                      {lang === 'uz'
                        ? 'Yoki tayyor kamera namunalarini tanlang:'
                        : lang === 'ru'
                        ? 'Или выберите готовые образцы:'
                        : 'Or try instant visual camera presets:'}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {VISUAL_SAMPLE_PRESETS.map((preset) => {
                        const presetLabel = preset.labels[lang] || preset.labels.uz;
                        return (
                          <button
                            key={preset.id}
                            type="button"
                            onClick={() => handleSelectVisualPreset(preset)}
                            className="p-2 rounded-xl border border-slate-200 hover:border-emerald-500 bg-white text-left transition shadow-xs"
                          >
                            <img
                              src={preset.previewUrl}
                              alt={presetLabel}
                              className="w-full h-14 object-cover rounded-lg mb-1"
                            />
                            <div className="text-[10px] sm:text-[11px] font-semibold text-slate-800 line-clamp-1">
                              {presetLabel}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {uploadedPreview && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
                      <img
                        src={uploadedPreview}
                        alt="Uploaded query"
                        className="w-14 h-14 rounded-xl object-cover border border-emerald-300"
                      />
                      <div>
                        <div className="text-xs font-bold text-emerald-950">
                          {lang === 'uz'
                            ? 'Rasm boʻyicha qidiruv:'
                            : lang === 'ru'
                            ? 'Поиск по фото:'
                            : 'Visual Query:'}{' '}
                          {uploadedFileName}
                        </div>
                        <div className="text-xs text-emerald-700">
                          {lang === 'uz'
                            ? `SAVDOX katalogidan ${visualMatches.length} ta oʻxshash mahsulot topildi`
                            : lang === 'ru'
                            ? `В каталоге SAVDOX найдено ${visualMatches.length} похожих товаров`
                            : `Found ${visualMatches.length} visually similar products in SAVDOX inventory`}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {visualMatches.map(({ product, similarityPercent }) => (
                        <div
                          key={product.id}
                          className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200 shadow-sm"
                        >
                          <img
                            src={product.images?.[0]}
                            alt={getLocalizedTitle(product, lang)}
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 mb-1">
                              {similarityPercent}%{' '}
                              {lang === 'uz'
                                ? 'Moslik'
                                : lang === 'ru'
                                ? 'Совпадение'
                                : 'Visual Match'}
                            </span>
                            <Link
                              to={`/product/${product.id}`}
                              onClick={() => setIsAiAssistantOpen(false)}
                              className="block text-xs font-bold text-slate-900 hover:text-emerald-700 truncate"
                            >
                              {getLocalizedTitle(product, lang)}
                            </Link>
                            <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                              <span>{product.rating}</span>
                              <span>• {product.sellerName}</span>
                            </div>
                            <div className="mt-1.5 flex items-center justify-between">
                              <span className="text-xs sm:text-sm font-extrabold text-emerald-700">
                                {formatUzs(product.priceUzs, lang)}
                              </span>
                              <button
                                type="button"
                                onClick={() => addToCart(product)}
                                className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
                              >
                                + {t.cart}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
