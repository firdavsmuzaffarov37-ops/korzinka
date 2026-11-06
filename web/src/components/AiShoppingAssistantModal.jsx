import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  X,
  Send,
  ShoppingCart,
  Store,
  CheckCircle2,
  TrendingDown,
  ListChecks,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { runAiShoppingAssistant } from '@shared/utils/aiEngine';
import { formatUzs, getLocalizedTitle } from '@shared/utils/formatters';
import { TRANSLATIONS } from '@shared/constants/translations';

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

  const [inputPrompt, setInputPrompt] = useState(t.aiDefaultPrompt);
  const [aiResult, setAiResult] = useState(null);

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
                    ? 'Haqiqiy narxlar tahlili, bozor narxlarini solishtirish va byudjet maslahatchisi'
                    : lang === 'ru'
                    ? 'Анализ бюджета в сумах и точное сравнение цен продавцов'
                    : 'Real-time UZS budget analyzer and multi-seller price comparator'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsAiAssistantOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition shrink-0"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Subheader status bar */}
          <div className="bg-emerald-950/5 px-4 sm:px-6 py-2.5 border-b border-emerald-100 flex items-center justify-between flex-wrap gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {lang === 'uz'
                  ? 'Byudjet va narx maslahatchisi'
                  : lang === 'ru'
                  ? 'Советник по бюджету и ценам'
                  : 'Budget & Price Advisor'}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-800">
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
                          ? `Aniqlangan byudjet: ${formatUzs(aiResult.budgetUzs, lang)}`
                          : lang === 'ru'
                          ? `Бюджет: ${formatUzs(aiResult.budgetUzs, lang)}`
                          : `Detected Budget: ${formatUzs(aiResult.budgetUzs, lang)}`}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line font-medium">
                    {aiResult.summaryText}
                  </p>
                </div>

                {/* Recommended Products Carousel / Grid */}
                {aiResult.recommendedProducts?.length > 0 && (
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>
                        {lang === 'uz'
                          ? `Mos kelgan mahsulotlar (${aiResult.recommendedProducts.length})`
                          : lang === 'ru'
                          ? `Подходящие товары (${aiResult.recommendedProducts.length})`
                          : `Matching Marketplace Products (${aiResult.recommendedProducts.length})`}
                      </span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {aiResult.recommendedProducts.map((product) => (
                        <div
                          key={product.id}
                          className="flex gap-3 p-3 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 shadow-sm transition"
                        >
                          <Link
                            to={`/product/${product.id}`}
                            onClick={() => setIsAiAssistantOpen(false)}
                            className="shrink-0"
                          >
                            <img
                              src={product.images?.[0]}
                              alt={getLocalizedTitle(product, lang)}
                              className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover bg-slate-100 border border-slate-100"
                            />
                          </Link>
                          <div className="flex-1 min-w-0 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold truncate mb-0.5">
                                <Store className="w-3 h-3" />
                                <span>{product.sellerName}</span>
                                <span>• ★ {product.sellerRating || product.rating}</span>
                              </div>
                              <Link
                                to={`/product/${product.id}`}
                                onClick={() => setIsAiAssistantOpen(false)}
                                className="block text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-700 line-clamp-2 leading-snug"
                              >
                                {getLocalizedTitle(product, lang)}
                              </Link>
                            </div>

                            <div className="mt-2 flex items-center justify-between gap-2">
                              <div>
                                <div className="text-xs sm:text-sm font-extrabold text-emerald-700">
                                  {formatUzs(product.priceUzs, lang)}
                                </div>
                                {product.oldPriceUzs && (
                                  <div className="text-[10px] text-slate-400 line-through">
                                    {formatUzs(product.oldPriceUzs, lang)}
                                  </div>
                                )}
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  addToCart(product);
                                  showToast(
                                    lang === 'uz'
                                      ? 'Savatga qoʻshildi!'
                                      : lang === 'ru'
                                      ? 'Добавлено в корзину!'
                                      : 'Added to cart!'
                                  );
                                }}
                                className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold inline-flex items-center gap-1 transition shadow-xs"
                              >
                                <ShoppingCart className="w-3.5 h-3.5" />
                                <span>{t.cart}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Seller Price Comparison Table */}
                {aiResult.priceComparisons?.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <Store className="w-4 h-4 text-emerald-600" />
                      <span>{t.priceComparison}</span>
                    </h3>
                    <div className="space-y-2.5">
                      {aiResult.priceComparisons.map((item) => (
                        <div
                          key={item.productId}
                          className="p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2"
                        >
                          <div className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">
                            {item.productName}
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {item.offers.map((offer, idx) => (
                              <div
                                key={offer.sellerName + idx}
                                className={`flex items-center justify-between p-2.5 rounded-xl border text-xs ${
                                  idx === 0
                                    ? 'bg-emerald-50/70 border-emerald-300'
                                    : 'bg-slate-50 border-slate-200'
                                }`}
                              >
                                <div>
                                  <div className="font-bold text-slate-900 flex items-center gap-1">
                                    <span>{offer.sellerName}</span>
                                    {idx === 0 && (
                                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-600 text-white font-extrabold">
                                        {lang === 'uz'
                                          ? 'Eng arzon narx'
                                          : lang === 'ru'
                                          ? 'Лучшая цена'
                                          : 'Best Price'}
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-[11px] text-slate-500">
                                    {offer.deliveryEta} • ★ {offer.rating || 4.9}
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="font-extrabold text-slate-900">
                                    {formatUzs(offer.priceUzs, lang)}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cheapest Alternative & Smart Shopping List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {aiResult.cheapestAlternative && (
                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                      <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                        <TrendingDown className="w-4 h-4 text-amber-600" />
                        <span>
                          {lang === 'uz'
                            ? 'Byudjetga mos tejamkor variant'
                            : lang === 'ru'
                            ? 'Экономный вариант по бюджету'
                            : 'Budget Saver Alternative'}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-slate-800 line-clamp-2">
                        {getLocalizedTitle(aiResult.cheapestAlternative, lang)}
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-sm font-extrabold text-amber-900">
                          {formatUzs(aiResult.cheapestAlternative.priceUzs, lang)}
                        </span>
                        <button
                          type="button"
                          onClick={() => addToCart(aiResult.cheapestAlternative)}
                          className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition"
                        >
                          {t.cart}
                        </button>
                      </div>
                    </div>
                  )}

                  {aiResult.shoppingList?.items?.length > 0 && (
                    <div className="p-4 rounded-2xl bg-emerald-950 text-white space-y-2.5">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="flex items-center gap-1.5 text-emerald-300">
                          <ListChecks className="w-4 h-4" />
                          {lang === 'uz'
                            ? 'AI Xaridlar roʻyxati'
                            : lang === 'ru'
                            ? 'AI Список покупок'
                            : 'AI Curated Bundle'}
                        </span>
                        <span className="text-emerald-400 font-extrabold">
                          {formatUzs(aiResult.shoppingList.totalUzs, lang)}
                        </span>
                      </div>
                      <ul className="text-xs space-y-1 text-emerald-100">
                        {aiResult.shoppingList.items.map((entry) => (
                          <li
                            key={entry.product.id}
                            className="flex items-center justify-between gap-2"
                          >
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
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
