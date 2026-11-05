import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  Truck,
  CreditCard,
  Copy,
  Check,
  Camera,
  Star,
  Clock,
  Tag,
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import ProductCard from '../components/ProductCard';
import { formatUzs, getLocalizedTitle } from '@shared/utils/formatters';

export default function HomePage() {
  const {
    lang,
    t,
    selectedCity,
    categories,
    products,
    stores,
    coupons,
    recentlyViewed,
    openAiWithPrompt,
    applyCouponCode,
    showToast,
  } = useMarketplace();

  const [aiHeroQuery, setAiHeroQuery] = useState(t.aiDefaultPrompt);
  const [copiedCode, setCopiedCode] = useState('');
  const [countdown, setCountdown] = useState({ hours: 4, minutes: 38, seconds: 45 });

  // Update default AI prompt when language changes
  useEffect(() => {
    setAiHeroQuery(t.aiDefaultPrompt);
  }, [lang, t.aiDefaultPrompt]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 5, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const flashSaleProducts = products.filter((p) => p.isFlashSale).slice(0, 4);
  const popularProducts = products.filter((p) => p.isPopular).slice(0, 8);
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);
  const recommendedProducts = products.filter((p) => p.isRecommended).slice(0, 4);
  const recentProducts = recentlyViewed
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)
    .slice(0, 4);

  const cityName =
    lang === 'uz'
      ? selectedCity.nameUz
      : lang === 'ru'
      ? selectedCity.nameRu
      : selectedCity.nameEn;

  const handleCopyCoupon = (code) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    applyCouponCode(code);
    showToast(`${code} — ${t.appliedBtn}!`);
    setTimeout(() => setCopiedCode(''), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-12">
      {/* 1. PROMOTIONAL HERO BANNER + GLASSMORPHIC AI SHOPPING ASSISTANT */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Main Promotional Hero Card */}
        <div className="lg:col-span-7 relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white p-7 sm:p-10 flex flex-col justify-between shadow-xl">
          <div className="relative z-10 space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 border border-emerald-400/30 text-emerald-200 text-xs font-bold">
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>
                {t.heroExpressBadge} {cityName}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12]">
              SAVDO<span className="text-emerald-400">X</span> — {t.tagline}
            </h1>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              {t.heroDescription}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/catalog"
                className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm inline-flex items-center gap-2 shadow-lg transition"
              >
                <span>{t.heroExploreBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/catalog?category=smartphones"
                className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition"
              >
                {t.heroPhonesBtn}
              </Link>
            </div>
          </div>

          {/* Trust Micro-Bar */}
          <div className="relative z-10 mt-8 pt-5 border-t border-white/15 grid grid-cols-3 gap-3 text-xs text-emerald-100">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.trustExpress}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.trustImei}</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.trustPay}</span>
            </div>
          </div>
        </div>

        {/* Glassmorphic AI Shopping Assistant Hero Widget */}
        <div className="lg:col-span-5 rounded-3xl ai-glass p-6 sm:p-7 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-extrabold shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                {t.aiAssistant}
              </span>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                {t.aiHeroBadge}
              </span>
            </div>

            <h2 className="text-xl font-extrabold text-slate-900 leading-snug">
              {t.aiHeroTitle}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t.aiSubtitle}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                openAiWithPrompt(aiHeroQuery);
              }}
              className="space-y-2.5 pt-1"
            >
              <textarea
                rows={2}
                value={aiHeroQuery}
                onChange={(e) => setAiHeroQuery(e.target.value)}
                className="w-full p-3 rounded-2xl border-2 border-emerald-500/40 focus:border-emerald-600 bg-white text-xs font-semibold text-slate-900 focus:outline-none resize-none"
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold inline-flex items-center justify-center gap-1.5 shadow-md transition"
                >
                  <Sparkles className="w-4 h-4" />
                  {t.aiFindBestBtn}
                </button>
                <button
                  type="button"
                  onClick={() => openAiWithPrompt('')}
                  title={t.visualSearch}
                  className="px-3.5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-bold inline-flex items-center gap-1"
                >
                  <Camera className="w-4 h-4 text-emerald-600" />
                  <span>{t.aiPhotoBtn}</span>
                </button>
              </div>
            </form>
          </div>

          <div className="mt-4 pt-3 border-t border-emerald-200/70">
            <div className="text-[11px] font-bold text-slate-500 mb-1.5">
              {t.aiSmartPromptsTitle}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[t.aiPrompt1, t.aiPrompt2, t.aiPrompt3].map((sample) => (
                <button
                  key={sample}
                  type="button"
                  onClick={() => {
                    setAiHeroQuery(sample);
                    openAiWithPrompt(sample);
                  }}
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-white hover:bg-emerald-50 text-emerald-900 border border-emerald-200 font-medium transition truncate max-w-full"
                >
                  "{sample}"
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. ALL 16 PRODUCT CATEGORIES GRID */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {t.categoriesCountTitle}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {t.categoriesSubtitle}
            </p>
          </div>
          <Link
            to="/catalog"
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
          >
            <span>{t.allCategories}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((cat) => (
            <motion.div key={cat.id} whileHover={{ y: -3 }}>
              <Link
                to={`/catalog?category=${cat.slug}`}
                className="group flex flex-col items-center text-center p-3 rounded-2xl bg-white border border-slate-100 hover:border-emerald-300 shadow-soft transition h-full"
              >
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 mb-2.5 border border-slate-200/60">
                  <img
                    src={cat.image}
                    alt={getLocalizedTitle(cat, lang)}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 line-clamp-1">
                  {getLocalizedTitle(cat, lang)}
                </span>
                <span className="text-[10px] text-slate-400 font-medium mt-0.5">
                  {cat.productCount.toLocaleString()} {t.itemsCount}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FLASH SALES SECTION WITH COUNTDOWN */}
      <section className="rounded-3xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 p-6 sm:p-8 text-white shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Zap className="w-6 h-6 text-amber-200 fill-amber-200" />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tight">{t.flashSales}</h2>
              <p className="text-xs text-rose-100">
                {t.flashSubtitle}
              </p>
            </div>
          </div>

          {/* Live Countdown Timer */}
          <div className="flex items-center gap-2 bg-slate-950/30 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20">
            <Clock className="w-4 h-4 text-amber-300" />
            <span className="text-xs font-bold">{t.endsIn}</span>
            <span className="font-mono text-sm font-black bg-white text-slate-950 px-2 py-0.5 rounded-lg">
              {String(countdown.hours).padStart(2, '0')} :{' '}
              {String(countdown.minutes).padStart(2, '0')} :{' '}
              {String(countdown.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {flashSaleProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* 4. SPECIAL OFFERS & INTERACTIVE COUPONS */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Tag className="w-5 h-5 text-emerald-600" />
            {t.specialOffers}
          </h2>
          <Link to="/bonus" className="text-xs font-bold text-emerald-700 hover:underline">
            {t.viewBonusWallet}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {coupons.map((coupon) => (
            <div
              key={coupon.code}
              className="p-5 rounded-2xl bg-white border-2 border-dashed border-emerald-300 flex items-center justify-between gap-4 shadow-soft"
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-900 text-xs font-black tracking-wider">
                  {coupon.code}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-1.5">
                  {lang === 'uz'
                    ? coupon.titleUz
                    : lang === 'ru'
                    ? coupon.titleRu
                    : coupon.titleEn}
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {t.minOrder} {formatUzs(coupon.minOrderUzs, lang)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleCopyCoupon(coupon.code)}
                className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold inline-flex items-center gap-1.5 shrink-0 shadow-sm transition"
              >
                {copiedCode === coupon.code ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> {t.appliedBtn}
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> {t.applyBtn}
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. POPULAR PRODUCTS */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {t.popularProducts}
            </h2>
            <p className="text-xs text-slate-500">
              {t.popularSubtitle}
            </p>
          </div>
          <Link
            to="/catalog?sort=popular"
            className="text-xs font-bold text-emerald-700 hover:underline inline-flex items-center gap-1"
          >
            {t.viewAll} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {popularProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* 6. BEST SELLERS */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {t.bestSellers}
            </h2>
            <p className="text-xs text-slate-500">
              {t.bestSellersSubtitle}
            </p>
          </div>
          <Link
            to="/catalog?sort=rating"
            className="text-xs font-bold text-emerald-700 hover:underline inline-flex items-center gap-1"
          >
            {t.seeTopRated} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bestSellers.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* 7. FEATURED VERIFIED STORES */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {t.featuredStores}
            </h2>
            <p className="text-xs text-slate-500">
              {t.featuredStoresSubtitle}
            </p>
          </div>
          <Link
            to="/seller"
            className="text-xs font-bold text-emerald-700 hover:underline inline-flex items-center gap-1"
          >
            {t.becomeSeller} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stores.map((store) => (
            <div
              key={store.id}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-soft hover:border-emerald-300 transition flex flex-col justify-between"
            >
              <div>
                <div className="h-24 relative bg-slate-100">
                  <img
                    src={store.banner}
                    alt={store.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950/85 text-emerald-200 backdrop-blur-sm">
                    {store.badge}
                  </span>
                </div>
                <div className="p-4 pt-0">
                  <div className="flex items-end gap-3 -mt-6 mb-2 relative z-10">
                    <img
                      src={store.logo}
                      alt={store.name}
                      className="w-12 h-12 rounded-xl object-cover border-2 border-white shadow-md bg-white"
                    />
                    <div className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {store.rating} ({store.reviewCount})
                    </div>
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-1">
                    <span>{store.name}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {store.description}
                  </p>
                </div>
              </div>
              <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">📍 {store.city}</span>
                <Link
                  to={`/catalog?seller=${encodeURIComponent(store.name)}`}
                  className="font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                >
                  {t.visitStore} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. RECOMMENDED PRODUCTS */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {t.recommendedForYou}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {recommendedProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* 9. RECENTLY VIEWED PRODUCTS */}
      {recentProducts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {t.recentlyViewed}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {recentProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
