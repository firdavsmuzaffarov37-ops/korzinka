import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  MapPin,
  Search,
  Sparkles,
  ShoppingCart,
  Heart,
  User,
  LayoutGrid,
  Store,
  ShieldAlert,
  Gift,
  Truck,
  Globe,
  Home,
  CheckCircle2,
  LogIn,
  UserPlus,
  LogOut,
  X,
  ArrowLeftRight,
  Download,
  Smartphone,
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { UZBEKISTAN_CITIES } from '@shared/types';
import { formatUzs, getLocalizedTitle } from '@shared/utils/formatters';
import AiShoppingAssistantModal from '../components/AiShoppingAssistantModal';
import NotificationDropdown from '../components/NotificationDropdown';

export default function MainLayout() {
  const {
    lang,
    setLang,
    t,
    selectedCity,
    setSelectedCity,
    user,
    logout,
    categories,
    products,
    cart,
    favorites,
    compareList = [],
    bonusWallet,
    searchHistory,
    setSearchHistory,
    toast,
    openAiWithPrompt,
  } = useMarketplace();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/register');
  };

  const [searchInput, setSearchInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallApp = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
    } else {
      alert(
        lang === 'uz'
          ? "SAVDOX PWA Ilovasi: Brauzer menyusidan 'Bosh ekranga qo‘shish' (Add to Home screen) tugmasini bosing!"
          : lang === 'ru'
          ? "Приложение SAVDOX: Нажмите в меню браузера 'Установить на главный экран'!"
          : "SAVDOX PWA: Tap 'Add to Home Screen' from your browser menu!"
      );
    }
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const liveSuggestions = searchInput.trim()
    ? products
        .filter((p) => {
          const q = searchInput.toLowerCase();
          return (
            p.nameEn.toLowerCase().includes(q) ||
            p.nameUz.toLowerCase().includes(q) ||
            p.nameRu.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.categorySlug.toLowerCase().includes(q)
          );
        })
        .slice(0, 5)
    : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchInput.trim();
    if (q) {
      setSearchHistory((prev) => [q, ...prev.filter((item) => item !== q)].slice(0, 8));
    }
    setShowSuggestions(false);
    navigate(`/catalog?q=${encodeURIComponent(q)}`);
  };

  const cityName =
    lang === 'uz'
      ? selectedCity.nameUz
      : lang === 'ru'
      ? selectedCity.nameRu
      : selectedCity.nameEn;

  const renderSearchForm = (isMobile = false) => (
    <div className={`relative ${isMobile ? 'flex-1' : 'flex-1 min-w-[220px] max-w-2xl'}`}>
      <form onSubmit={handleSearchSubmit} className="relative flex items-center">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
        <input
          type="text"
          value={searchInput}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder={t.searchPlaceholder}
          className={`w-full pl-9 pr-14 sm:pr-24 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-slate-100 hover:bg-slate-100/80 focus:bg-white border border-slate-200 focus:border-emerald-600 focus:outline-none text-xs sm:text-sm text-slate-900 transition ${
            isMobile ? 'shadow-inner' : ''
          }`}
        />
        {searchInput && (
          <button
            type="button"
            onClick={() => setSearchInput('')}
            className="absolute right-12 sm:right-20 text-slate-400 hover:text-slate-600 p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
        <button
          type="submit"
          className="absolute right-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition"
        >
          <span className="hidden sm:inline">{t.searchBtn}</span>
          <Search className="w-3.5 h-3.5 sm:hidden" />
        </button>
      </form>

      {/* Dropdown Suggestions & Search History */}
      {showSuggestions && (
        <div className="absolute left-0 right-0 top-full mt-1.5 sm:mt-2 rounded-2xl bg-white border border-slate-200 shadow-xl p-2.5 sm:p-3 z-50 max-h-80 overflow-y-auto">
          {liveSuggestions.length > 0 ? (
            <div className="space-y-1.5">
              <div className="text-[11px] font-bold uppercase text-slate-400 px-2">
                {t.instantMatches}
              </div>
              {liveSuggestions.map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-emerald-50 transition"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={item.images?.[0]}
                      alt={getLocalizedTitle(item, lang)}
                      className="w-9 h-9 rounded-lg object-cover shrink-0"
                    />
                    <div className="truncate">
                      <div className="text-xs font-bold text-slate-900 truncate">
                        {getLocalizedTitle(item, lang)}
                      </div>
                      <div className="text-[11px] text-slate-500">{item.sellerName}</div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-700 shrink-0">
                    {formatUzs(item.priceUzs, lang)}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div>
              <div className="text-[11px] font-bold uppercase text-slate-400 px-2 mb-1.5">
                {t.recentSearches}
              </div>
              <div className="flex flex-wrap gap-1.5 px-1">
                {searchHistory.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onMouseDown={() => {
                      setSearchInput(term);
                      navigate(`/catalog?q=${encodeURIComponent(term)}`);
                    }}
                    className="px-3 py-1 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-xs font-medium text-slate-700 transition"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900 pb-16 md:pb-0 overflow-x-hidden w-full max-w-full">
      {/* Main Clean White Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm w-full max-w-full">
        {/* MOBILE VIEW (< md) */}
        <div className="md:hidden px-3 pt-2.5 pb-2 flex flex-col gap-2 w-full">
          {/* Top Bar on Mobile */}
          <div className="flex items-center justify-between gap-2">
            <Link to="/" className="flex items-center gap-1.5 shrink-0">
              <img
                src="/savdox-icon.png"
                alt="SAVDOX"
                className="w-8 h-8 rounded-xl object-contain shadow-xs shrink-0"
              />
              <span className="text-lg font-black tracking-tight text-emerald-950">
                SAVDO<span className="text-emerald-600">X</span>
              </span>
            </Link>

            {/* City Selector on Mobile */}
            <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-xl border border-slate-200 text-[11px] shrink-0">
              <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
              <select
                aria-label={t.deliverTo}
                value={selectedCity.id}
                onChange={(e) => {
                  const found = UZBEKISTAN_CITIES.find((c) => c.id === e.target.value);
                  if (found) setSelectedCity(found);
                }}
                className="bg-transparent text-slate-800 font-bold focus:outline-none cursor-pointer max-w-[85px] truncate"
              >
                {UZBEKISTAN_CITIES.map((city) => (
                  <option key={city.id} value={city.id}>
                    {lang === 'uz' ? city.nameUz : lang === 'ru' ? city.nameRu : city.nameEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Language & Notifications on Mobile */}
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="inline-flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
                {['uz', 'ru', 'en'].map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    className={`px-1.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase transition ${
                      lang === code
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>

              <NotificationDropdown lang={lang} />

              {user && (
                <button
                  type="button"
                  onClick={handleLogout}
                  title={t.logout}
                  className="p-1 rounded-lg text-rose-600 hover:bg-rose-50 border border-rose-200 transition shrink-0"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Search Bar & Quick AI on Mobile */}
          <div className="flex items-center gap-2 w-full">
            {renderSearchForm(true)}
            <button
              type="button"
              onClick={() => openAiWithPrompt(t.aiDefaultPrompt)}
              className="inline-flex items-center gap-1 px-2.5 py-2 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-600 text-white text-xs font-extrabold shadow-sm shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
              <span>AI</span>
            </button>
          </div>
        </div>

        {/* DESKTOP / TABLET VIEW (>= md) */}
        <div className="hidden md:flex max-w-[1536px] mx-auto px-2 sm:px-4 py-2 sm:py-2.5 items-center justify-between gap-1.5 lg:gap-2.5 w-full">
          {/* SAVDOX Brand Logo & City Selector */}
          <div className="flex items-center gap-1.5 lg:gap-2.5 shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/savdox-icon.png"
                alt="SAVDOX Icon"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl object-contain shadow-sm group-hover:scale-105 transition shrink-0"
              />
              <div>
                <span className="text-lg sm:text-xl font-black tracking-tight text-emerald-950 block leading-none">
                  SAVDO<span className="text-emerald-600">X</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-500 tracking-wide hidden lg:block">
                  {t.brandSubtitle}
                </span>
              </div>
            </Link>

            {/* Clean City Dropdown - Visible on xl and up */}
            <div className="hidden xl:flex items-center gap-1 bg-slate-100 px-2 py-1.5 rounded-xl border border-slate-200 text-xs shrink-0">
              <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <select
                aria-label={t.deliverTo}
                value={selectedCity.id}
                onChange={(e) => {
                  const found = UZBEKISTAN_CITIES.find((c) => c.id === e.target.value);
                  if (found) setSelectedCity(found);
                }}
                className="bg-transparent text-slate-800 font-bold focus:outline-none cursor-pointer max-w-[100px] truncate"
              >
                {UZBEKISTAN_CITIES.map((city) => (
                  <option key={city.id} value={city.id}>
                    {lang === 'uz' ? city.nameUz : lang === 'ru' ? city.nameRu : city.nameEn}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* All Categories Button - Visible on xl and up */}
          <Link
            to="/catalog"
            className="hidden xl:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs border border-emerald-200 transition shrink-0"
          >
            <LayoutGrid className="w-4 h-4 text-emerald-600" />
            <span>{t.categories}</span>
          </Link>

          {/* Smart Search Bar on Desktop & Notebooks */}
          {renderSearchForm(false)}

          {/* Glassmorphic AI Assistant Button */}
          <button
            type="button"
            onClick={() => openAiWithPrompt(t.aiDefaultPrompt)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 hover:from-emerald-800 hover:to-teal-700 text-white text-xs font-extrabold shadow-sm transition shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-200 animate-pulse" />
            <span className="hidden 2xl:inline">{t.aiAssistant}</span>
            <span className="2xl:hidden font-extrabold">AI</span>
          </button>

          {/* Language Switcher: UZ | RU | EN */}
          <div className="inline-flex items-center bg-slate-100 rounded-xl p-0.5 border border-slate-200 shrink-0">
            {['uz', 'ru', 'en'].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`px-1.5 py-0.5 rounded-lg text-[10px] font-extrabold uppercase transition ${
                  lang === code
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          {/* PWA Install Button */}
          <button
            type="button"
            onClick={handleInstallApp}
            title={lang === 'uz' ? "SAVDOX ilovasini o'rnatish" : lang === 'ru' ? "Установить приложение SAVDOX" : "Install SAVDOX App"}
            className="hidden 2xl:inline-flex items-center gap-1 px-2 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-700 text-xs font-bold border border-slate-200 transition shrink-0"
          >
            <Download className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {lang === 'uz' ? "Ilova" : lang === 'ru' ? "Приложение" : "App"}
            </span>
          </button>

          {/* Action Icons: Always accessible on Notebooks & Desktop */}
          <div className="flex items-center gap-1 shrink-0">
            {/* Live Notification Center Dropdown */}
            <NotificationDropdown lang={lang} />

            <NavLink
              to="/orders"
              title={t.trackShort}
              className={({ isActive }) =>
                `flex flex-col items-center px-1.5 py-1 rounded-xl text-xs font-semibold transition ${
                  isActive ? 'text-emerald-700 bg-emerald-50' : 'text-slate-600 hover:text-emerald-700'
                }`
              }
            >
              <Truck className="w-4 h-4" />
              <span className="text-[10px] mt-0.5 hidden 2xl:inline">{t.trackShort}</span>
            </NavLink>

            {/* Compare Matrix Route */}
            <NavLink
              to="/compare"
              title={lang === 'uz' ? 'Taqqos' : lang === 'ru' ? 'Сравнить' : 'Compare'}
              className={({ isActive }) =>
                `relative flex flex-col items-center px-1.5 py-1 rounded-xl text-xs font-semibold transition ${
                  isActive ? 'text-emerald-700 bg-emerald-50' : 'text-slate-600 hover:text-emerald-700'
                }`
              }
            >
              <ArrowLeftRight className="w-4 h-4" />
              <span className="text-[10px] mt-0.5 hidden 2xl:inline">
                {lang === 'uz' ? 'Taqqos' : lang === 'ru' ? 'Сравнить' : 'Compare'}
              </span>
              {compareList.length > 0 && (
                <span className="absolute -top-0.5 right-0.5 w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold flex items-center justify-center animate-pulse">
                  {compareList.length}
                </span>
              )}
            </NavLink>

            <NavLink
              to="/catalog?favorites=true"
              title={t.favorites}
              className="relative flex flex-col items-center px-1.5 py-1 rounded-xl text-xs font-semibold text-slate-600 hover:text-emerald-700 transition"
            >
              <Heart className="w-4 h-4" />
              <span className="text-[10px] mt-0.5 hidden 2xl:inline">{t.favorites}</span>
              {favorites.length > 0 && (
                <span className="absolute -top-0.5 right-0.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </NavLink>

            <NavLink
              to="/cart"
              title={t.cart}
              className={({ isActive }) =>
                `relative flex flex-col items-center px-2 py-1 rounded-xl text-xs font-semibold transition ${
                  isActive ? 'text-emerald-700 bg-emerald-50' : 'text-slate-600 hover:text-emerald-700'
                }`
              }
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="text-[10px] mt-0.5 hidden 2xl:inline">{t.cart}</span>
              {totalCartItems > 0 && (
                <span className="absolute -top-0.5 right-0.5 w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </NavLink>

            {/* Auth / Profile & Chiqish (Logout) Section */}
            {user ? (
              <div className="flex items-center gap-1.5 pl-1 shrink-0">
                <Link
                  to="/orders"
                  title={user.fullName || t.profile}
                  className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-800 text-xs font-bold transition border border-slate-200 shrink-0"
                >
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.fullName}
                      className="w-4 h-4 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <User className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  )}
                  <span className="max-w-[70px] truncate">
                    {user.fullName ? user.fullName.split(' ')[0] : t.profile}
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  title={t.logout}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 hover:text-rose-800 text-xs font-bold transition shadow-xs shrink-0 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>{t.logout}</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1 pl-1 shrink-0">
                <NavLink
                  to="/login"
                  title={t.login}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-xs font-bold transition shadow-xs shrink-0 ${
                      isActive
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                        : 'border-slate-200 hover:border-emerald-400 text-slate-800 bg-white'
                    }`
                  }
                >
                  <LogIn className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.login}</span>
                </NavLink>

                <NavLink
                  to="/register"
                  title={t.register}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition shadow-sm shrink-0 ${
                      isActive
                        ? 'bg-emerald-800 text-white'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    }`
                  }
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>{t.register}</span>
                </NavLink>
              </div>
            )}
          </div>
        </div>

        {/* Horizontal Category Bar + Quick Links */}
        <div className="border-t border-slate-100 bg-white w-full overflow-hidden">
          <div className="max-w-[1536px] mx-auto px-4 py-2 flex items-center justify-between gap-4 text-xs font-semibold text-slate-600 w-full">
            <div className="flex-1 min-w-0 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              <Link
                to="/catalog?flash=true"
                className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 font-bold shrink-0 hover:bg-rose-100 transition whitespace-nowrap"
              >
                ⚡ {t.flashSales}
              </Link>
              {categories.slice(0, 10).map((cat) => (
                <Link
                  key={cat.id}
                  to={`/catalog?category=${cat.slug}`}
                  className="shrink-0 px-2.5 py-1 rounded-full hover:bg-emerald-50 hover:text-emerald-800 whitespace-nowrap transition"
                >
                  {getLocalizedTitle(cat, lang)}
                </Link>
              ))}
            </div>

            <div className="hidden xl:flex items-center gap-3 shrink-0 border-l border-slate-200 pl-3 bg-white z-10">
              <Link
                to="/bonus"
                className="inline-flex items-center gap-1 text-amber-700 hover:text-amber-800 font-bold whitespace-nowrap"
              >
                <Gift className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{bonusWallet.pointsBalance.toLocaleString()} Bonus</span>
              </Link>
              <Link
                to="/seller"
                className="inline-flex items-center gap-1 text-slate-600 hover:text-emerald-700 font-bold whitespace-nowrap"
              >
                <Store className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{t.sellerHub}</span>
              </Link>
              <Link
                to="/admin"
                className="inline-flex items-center gap-1 text-slate-600 hover:text-emerald-700 font-bold whitespace-nowrap"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{t.adminPanel}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Compare Bar */}
      {compareList.length > 0 && (
        <aside
          aria-label={lang === 'uz' ? "Mahsulotlarni taqqoslash paneli" : lang === 'ru' ? "Панель сравнения товаров" : "Product comparison drawer"}
          className="fixed bottom-20 lg:bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900/95 backdrop-blur-md text-white px-4 sm:px-5 py-2.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 max-w-[94vw]"
        >
          <div className="flex items-center gap-2">
            <ArrowLeftRight className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold whitespace-nowrap">
              {lang === 'uz'
                ? `${compareList.length} ta mahsulot taqqosda`
                : lang === 'ru'
                ? `${compareList.length} товара в сравнении`
                : `${compareList.length} in compare`}
            </span>
          </div>
          <Link
            to="/compare"
            className="px-3 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold transition shadow-sm whitespace-nowrap shrink-0"
          >
            {lang === 'uz' ? "Koʻrish →" : lang === 'ru' ? "Смотреть →" : "View →"}
          </Link>
        </aside>
      )}

      {/* Toast Notification Banner */}
      {toast && (
        <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-emerald-950 text-white text-xs font-bold shadow-xl border border-emerald-500/40 animate-bounce max-w-[90vw]">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toast.message}</span>
        </div>
      )}

      {/* Main Route Outlet */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Outlet />
      </main>

      {/* AI Shopping Assistant Modal */}
      <AiShoppingAssistantModal />

      {/* Mobile Bottom Navigation Bar - Only on Phones (< md), Hidden on Notebooks */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5 flex items-center justify-around shadow-lg">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex flex-col items-center py-1 px-3 rounded-xl text-[11px] font-bold ${
              isActive ? 'text-emerald-600' : 'text-slate-500'
            }`
          }
        >
          <Home className="w-5 h-5" />
          <span>{t.home}</span>
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            `flex flex-col items-center py-1 px-3 rounded-xl text-[11px] font-bold ${
              isActive ? 'text-emerald-600' : 'text-slate-500'
            }`
          }
        >
          <LayoutGrid className="w-5 h-5" />
          <span>{t.categories}</span>
        </NavLink>
        <button
          type="button"
          onClick={() => openAiWithPrompt(t.aiDefaultPrompt)}
          className="flex flex-col items-center -mt-4 px-3 py-2 rounded-2xl bg-emerald-600 text-white text-[10px] font-extrabold shadow-md"
        >
          <Sparkles className="w-5 h-5" />
          <span>AI</span>
        </button>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `relative flex flex-col items-center py-1 px-3 rounded-xl text-[11px] font-bold ${
              isActive ? 'text-emerald-600' : 'text-slate-500'
            }`
          }
        >
          <ShoppingCart className="w-5 h-5" />
          <span>{t.cart}</span>
          {totalCartItems > 0 && (
            <span className="absolute top-0 right-2 w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center">
              {totalCartItems}
            </span>
          )}
        </NavLink>
        {user ? (
          <button
            type="button"
            onClick={handleLogout}
            title={t.logout}
            className="flex flex-col items-center py-1 px-3 rounded-xl text-[11px] font-bold text-rose-600 hover:text-rose-700"
          >
            <LogOut className="w-5 h-5" />
            <span>{t.logout}</span>
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `flex flex-col items-center py-1 px-3 rounded-xl text-[11px] font-bold ${
                isActive ? 'text-emerald-600' : 'text-slate-500'
              }`
            }
          >
            <User className="w-5 h-5" />
            <span>{t.login}</span>
          </NavLink>
        )}
      </nav>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-100 mt-16 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/savdox-icon.png"
                alt="SAVDOX Icon"
                className="w-10 h-10 rounded-xl object-contain bg-white p-0.5 shadow-sm"
              />
              <span className="text-xl font-black text-white tracking-tight">SAVDOX</span>
            </div>
            <p className="text-sm text-emerald-200/80 max-w-sm leading-relaxed">
              {t.tagline} {t.heroDescription}
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              {['Click', 'Payme', 'Uzum Nasiya 0%', 'Uzcard', 'Humo'].map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-lg bg-emerald-900/90 border border-emerald-800 text-[11px] font-semibold text-emerald-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-3">
              SAVDOX
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/90">
              <li><Link to="/catalog" className="hover:text-white">{t.allCategories}</Link></li>
              <li><Link to="/catalog?flash=true" className="hover:text-white">{t.flashSales}</Link></li>
              <li><Link to="/bonus" className="hover:text-white">{t.bonusProgram}</Link></li>
              <li><Link to="/orders" className="hover:text-white">{t.orders}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-3">
              {t.profile}
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/90">
              {user ? (
                <>
                  <li>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="text-rose-300 hover:text-white flex items-center gap-1.5 font-bold cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>{t.logout}</span>
                    </button>
                  </li>
                  <li><Link to="/orders" className="hover:text-white">{t.orders}</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/login" className="hover:text-white">{t.login}</Link></li>
                  <li><Link to="/register" className="hover:text-white">{t.register}</Link></li>
                </>
              )}
              <li><Link to="/seller" className="hover:text-white">{t.sellerHub}</Link></li>
              <li><Link to="/admin" className="hover:text-white">{t.adminPanel}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-3">
              {cityName}
            </h4>
            <ul className="space-y-1.5 text-xs text-emerald-200/90">
              <li>📍 Toshkent, Samarqand, Buxoro</li>
              <li>📍 Andijon, Fargʻona, Namangan, Nukus</li>
              <li className="pt-2 text-emerald-300 font-bold">24/7: +998 71 200 77 00</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
