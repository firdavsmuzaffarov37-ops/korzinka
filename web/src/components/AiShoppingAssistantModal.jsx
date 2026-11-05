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

const QUICK_PROMPTS = [
  'I have 2,500,000 UZS. I need a good smartphone.',
  'I have 2,000,000 UZS. Recommend an ergonomic office chair or home setup.',
  'Show me a Samarkand gift shopping list under 800,000 UZS.',
  'Compare prices for Apple Watch Series 10 across Tashkent sellers.',
];

const VISUAL_SAMPLE_PRESETS = [
  {
    label: 'Smartphone Photo (AMOLED)',
    category: 'smartphones xiaomi redmi phone',
    previewUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80',
  },
  {
    label: 'Running Sneakers Photo',
    category: 'shoes sneakers nike running',
    previewUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80',
  },
  {
    label: 'Espresso Machine Photo',
    category: 'kitchen coffee espresso delonghi',
    previewUrl: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=400&q=80',
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

  const [activeTab, setActiveTab] = useState('chat'); // 'chat' | 'visual'
  const [inputPrompt, setInputPrompt] = useState('I have 2,500,000 UZS. I need a good smartphone.');
  const [aiResult, setAiResult] = useState(null);

  // Visual Search State
  const [uploadedPreview, setUploadedPreview] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [visualMatches, setVisualMatches] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isAiAssistantOpen) {
      const queryToRun =
        aiInitialPrompt && aiInitialPrompt.trim().length > 0
          ? aiInitialPrompt
          : 'I have 2,500,000 UZS. I need a good smartphone.';
      setInputPrompt(queryToRun);
      const res = runAiShoppingAssistant({ prompt: queryToRun, products, lang });
      setAiResult(res);
    }
  }, [isAiAssistantOpen, aiInitialPrompt, products, lang]);

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
      showToast(`Visual AI matched ${matches.length} marketplace products`);
    };
    reader.readAsDataURL(file);
  };

  const handleSelectVisualPreset = (preset) => {
    setUploadedPreview(preset.previewUrl);
    setUploadedFileName(preset.label);
    const matches = runVisualProductSearch({
      fileName: preset.label,
      visualCategory: preset.category,
      products,
    });
    setVisualMatches(matches);
  };

  const handleAddShoppingListToCart = () => {
    if (!aiResult?.shoppingList?.items?.length) return;
    aiResult.shoppingList.items.forEach((entry) => {
      addToCart(entry.product);
    });
    showToast(`Added ${aiResult.shoppingList.items.length} bundle items to cart!`);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl rounded-3xl ai-glass shadow-2xl border border-emerald-300/50 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/25">
                <Sparkles className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-extrabold tracking-tight">SAVDOX AI Shopping Assistant</h2>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                    100% Catalog Grounded
                  </span>
                </div>
                <p className="text-xs text-emerald-100/90">
                  Real-time UZS budget analyzer, multi-seller price comparator & visual search
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsAiAssistantOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mode Switch Tabs */}
          <div className="bg-emerald-950/5 px-6 py-2.5 border-b border-emerald-100 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('chat')}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-bold transition ${
                  activeTab === 'chat'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-emerald-50'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Budget & Price Advisor
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('visual');
                  if (visualMatches.length === 0) {
                    handleSelectVisualPreset(VISUAL_SAMPLE_PRESETS[0]);
                  }
                }}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-bold transition ${
                  activeTab === 'visual'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-emerald-50'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                Visual Product Search
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Never invents prices, discounts, or seller data</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-white/80">
            {activeTab === 'chat' ? (
              <>
                {/* Search Input & Presets */}
                <form onSubmit={handleRunQuery} className="space-y-3">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={inputPrompt}
                      onChange={(e) => setInputPrompt(e.target.value)}
                      placeholder='e.g., "I have 2,500,000 UZS. I need a good smartphone."'
                      className="w-full pl-4 pr-28 py-3.5 rounded-2xl border-2 border-emerald-500/40 focus:border-emerald-600 focus:outline-none text-sm font-medium text-slate-900 bg-white shadow-sm"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Analyze
                    </button>
                  </div>

                  {/* Quick Prompt Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {QUICK_PROMPTS.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => handleRunQuery(null, q)}
                        className="text-xs px-3 py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 transition"
                      >
                        "{q}"
                      </button>
                    ))}
                  </div>
                </form>

                {aiResult && (
                  <div className="space-y-6">
                    {/* AI Grounded Explanation Box */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 border border-emerald-200 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          AI Marketplace Recommendation
                        </span>
                        {aiResult.budgetUzs && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-700 text-white">
                            Detected Budget: {formatUzs(aiResult.budgetUzs, lang)}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-slate-800 whitespace-pre-line leading-relaxed">
                        {aiResult.summaryText.replace(/\*\*/g, '')}
                      </div>
                    </div>

                    {/* Recommended Products Grid */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-3">
                        Matching Marketplace Products ({aiResult.recommendedProducts.length})
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {aiResult.recommendedProducts.map((prod) => (
                          <div
                            key={prod.id}
                            className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 transition shadow-sm"
                          >
                            <img
                              src={prod.images?.[0]}
                              alt={prod.nameEn}
                              className="w-20 h-20 rounded-xl object-cover shrink-0 bg-slate-100"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                                <Store className="w-3 h-3" />
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
                                  <span className="text-sm font-extrabold text-emerald-700">
                                    {formatUzs(prod.priceUzs, lang)}
                                  </span>
                                  {prod.oldPriceUzs > prod.priceUzs && (
                                    <span className="ml-1.5 text-[11px] text-slate-400 line-through">
                                      {formatUzs(prod.oldPriceUzs, lang)}
                                    </span>
                                  )}
                                </div>
                                <button
                                  type="button"
                                  onClick={() => addToCart(prod)}
                                  className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold inline-flex items-center gap-1"
                                >
                                  <ShoppingCart className="w-3 h-3" /> Add
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
                          Multi-Seller Price Comparison
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
                                        Lowest Price
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
                              Best Value Cheaper Alternative
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
                                className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold shrink-0"
                              >
                                Add Saver
                              </button>
                            </div>
                          </div>
                        )}

                        {aiResult.shoppingList?.items?.length > 0 && (
                          <div className="p-4 rounded-2xl bg-emerald-950 text-white">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                                <ListChecks className="w-4 h-4" />
                                AI Generated Shopping List
                              </span>
                              <span className="text-xs font-bold text-emerald-200">
                                Total: {formatUzs(aiResult.shoppingList.totalUzs, lang)}
                              </span>
                            </div>
                            <ul className="space-y-1 text-xs text-emerald-100 mb-3">
                              {aiResult.shoppingList.items.map((entry, idx) => (
                                <li key={idx} className="flex justify-between gap-2">
                                  <span className="truncate">• {getLocalizedTitle(entry.product, lang)}</span>
                                  <span className="font-semibold shrink-0">
                                    {formatUzs(entry.priceUzs, lang)}
                                  </span>
                                </li>
                              ))}
                            </ul>
                            <button
                              type="button"
                              onClick={handleAddShoppingListToCart}
                              className="w-full py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition"
                            >
                              Add All {aiResult.shoppingList.items.length} Items to Cart
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
                      Upload a Product Photo
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      PNG, JPG, or WEBP — AI matches visual tags, category & color profile
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-700">
                      Or try instant visual camera presets:
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {VISUAL_SAMPLE_PRESETS.map((preset) => (
                        <button
                          key={preset.label}
                          type="button"
                          onClick={() => handleSelectVisualPreset(preset)}
                          className="p-2 rounded-xl border border-slate-200 hover:border-emerald-500 bg-white text-left transition"
                        >
                          <img
                            src={preset.previewUrl}
                            alt={preset.label}
                            className="w-full h-14 object-cover rounded-lg mb-1"
                          />
                          <div className="text-[11px] font-semibold text-slate-800 line-clamp-1">
                            {preset.label}
                          </div>
                        </button>
                      ))}
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
                          Visual Query: {uploadedFileName}
                        </div>
                        <div className="text-xs text-emerald-700">
                          Found {visualMatches.length} visually similar products in SAVDOX inventory
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
                            alt={product.nameEn}
                            className="w-20 h-20 rounded-xl object-cover shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 mb-1">
                              {similarityPercent}% Visual Match
                            </span>
                            <Link
                              to={`/product/${product.id}`}
                              onClick={() => setIsAiAssistantOpen(false)}
                              className="block text-xs font-bold text-slate-900 hover:text-emerald-700 truncate"
                            >
                              {getLocalizedTitle(product, lang)}
                            </Link>
                            <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                              {product.rating} • {product.sellerName}
                            </div>
                            <div className="mt-1.5 flex items-center justify-between">
                              <span className="text-sm font-extrabold text-emerald-700">
                                {formatUzs(product.priceUzs, lang)}
                              </span>
                              <button
                                type="button"
                                onClick={() => addToCart(product)}
                                className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-xs font-bold"
                              >
                                + Cart
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

