import React, { useState } from 'react';
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
  Database,
  X,
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { UZBEKISTAN_CITIES } from '@shared/types';
import { formatUzs, getLocalizedTitle } from '@shared/utils/formatters';
import AiShoppingAssistantModal from '../components/AiShoppingAssistantModal';

export default function MainLayout() {
  const {
    lang,
    setLang,
    t,
    selectedCity,
    setSelectedCity,
    user,
    setUser,
    isSupabaseConfigured,
    categories,
    products,
    cart,
    favorites,
    bonusWallet,
    searchHistory,
    setSearchHistory,
    toast,
    openAiWithPrompt,
  } = useMarketplace();

  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

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

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900 pb-16 lg:pb-0">
      {/* Top Utility Bar */}
      <div className="bg-emerald-950 text-emerald-50 text-xs border-b border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          {/* Left: Location Selector & Promo */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-200">{t.deliverTo}</span>
              <select
                aria-label="Select delivery city"
                value={selectedCity.id}
                onChange={(e) => {
                  const found = UZBEKISTAN_CITIES.find((c) => c.id === e.target.value);
                  if (found) setSelectedCity(found);
                }}
                className="bg-emerald-900/90 text-white font-bold px-2 py-0.5 rounded-md border border-emerald-700 focus:outline-none cursor-pointer"
              >
                {UZBEKISTAN_CITIES.map((city) => (
                  <option key={city.id} value={city.id}>
                    {lang === 'uz' ? city.nameUz : lang === 'ru' ? city.nameRu : city.nameEn}
                  </option>
                ))}
              </select>
            </div>

            <span className="hidden md:inline-block text-emerald-200/90">
              {t.freeDeliveryBanner}
            </span>
          </div>

          {/* Right: Backend Status, Role Switcher, Bonus, Language Switcher */}
          <div className="flex items-center gap-3 flex-wrap">
            <span
              title={
                isSupabaseConfigured
                  ? 'Connected to live Supabase PostgreSQL instance'
                  : 'Running with local persisted Uzbekistan marketplace dataset (Configure VITE_SUPABASE_URL for live cloud DB)'
              }
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-900/80 text-emerald-200 border border-emerald-700/70"
            >
              <Database className="w-3 h-3 text-emerald-400" />
              {isSupabaseConfigured ? 'Supabase Cloud' : 'Sandbox Dataset'}
            </span>

            <Link
              to="/bonus"
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-semibold hover:bg-amber-400/30 transition"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>{bonusWallet.pointsBalance.toLocaleString()} Bonus</span>
            </Link>

            <Link
              to="/seller"
              className="hover:text-emerald-300 font-semibold inline-flex items-center gap-1"
            >
              <Store className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.sellerHub}</span>
            </Link>

            <Link
              to="/admin"
              className="hover:text-emerald-300 font-semibold inline-flex items-center gap-1"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.adminPanel}</span>
            </Link>

            {/* Trilingual Switcher: UZ / RU / EN */}
            <div className="inline-flex items-center bg-emerald-900 rounded-lg p-0.5 border border-emerald-800">
              <Globe className="w-3.5 h-3.5 text-emerald-300 ml-1.5 mr-1" />
              {['uz', 'ru', 'en'].map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-bold uppercase transition ${
                    lang === code
                      ? 'bg-emerald-500 text-slate-950'
                      : 'text-emerald-200 hover:text-white'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Desktop Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between gap-3 lg:gap-5">
          {/* SAVDOX Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition">
              S
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-emerald-950 block leading-none">
                SAVDO<span className="text-emerald-600">X</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-wide hidden sm:block">
                UZBEKISTAN MARKETPLACE
              </span>
            </div>
          </Link>

          {/* All Categories Button */}
          <Link
            to="/catalog"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-sm border border-emerald-200 transition shrink-0"
          >
            <LayoutGrid className="w-4 h-4 text-emerald-600" />
            <span>{t.categories}</span>
          </Link>

          {/* Smart Search Bar with Suggestions & History */}
          <div className="relative flex-1 max-w-2xl">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchInput}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 pr-24 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-100/80 focus:bg-white border border-slate-200 focus:border-emerald-600 focus:outline-none text-sm text-slate-900 transition"
              />
              {searchInput && (
                <button
                  type="button"
                  onClick={() => setSearchInput('')}
                  className="absolute right-20 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="submit"
                className="absolute right-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition"
              >
                Search
              </button>
            </form>

            {/* Dropdown Suggestions & Search History */}
            {showSuggestions && (
              <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl bg-white border border-slate-200 shadow-xl p-3 z-50">
                {liveSuggestions.length > 0 ? (
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-bold uppercase text-slate-400 px-2">
                      Instant Product Matches
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
                            alt={item.nameEn}
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
                      Recent Searches & Popular
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

          {/* Glassmorphic AI Assistant Button */}
          <button
            type="button"
            onClick={() => openAiWithPrompt('I have 2,500,000 UZS. I need a good smartphone.')}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 hover:from-emerald-800 hover:to-teal-700 text-white text-xs font-extrabold shadow-md hover:shadow-emerald-glow transition shrink-0"
          >
            <Sparkles className="w-4 h-4 text-emerald-200 animate-pulse" />
            <span className="hidden xl:inline">{t.aiAssistant}</span>
            <span className="xl:hidden">AI Advisor</span>
          </button>

          {/* Action Icons: Orders, Favorites, Cart, Profile */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `flex flex-col items-center px-2.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                  isActive ? 'text-emerald-700 bg-emerald-50' : 'text-slate-600 hover:text-emerald-700'
                }`
              }
            >
              <Truck className="w-5 h-5" />
              <span className="text-[11px] mt-0.5">Track</span>
            </NavLink>

            <NavLink
              to="/catalog?favorites=true"
              className="relative flex flex-col items-center px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-emerald-700 transition"
            >
              <Heart className="w-5 h-5" />
              <span className="text-[11px] mt-0.5">{t.favorites}</span>
              {favorites.length > 0 && (
                <span className="absolute top-0.5 right-2 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative flex flex-col items-center px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                  isActive ? 'text-emerald-700 bg-emerald-50' : 'text-slate-600 hover:text-emerald-700'
                }`
              }
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="text-[11px] mt-0.5">{t.cart}</span>
              {totalCartItems > 0 && (
                <span className="absolute top-0.5 right-2 w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </NavLink>

            <NavLink
              to="/auth"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-2xl border text-xs font-bold transition ${
                  isActive
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                    : 'border-slate-200 hover:border-emerald-400 text-slate-800'
                }`
              }
            >
              <User className="w-4 h-4 text-emerald-600" />
              <span className="max-w-[90px] truncate">{user?.fullName?.split(' ')[0] || t.login}</span>
            </NavLink>
          </div>
        </div>

        {/* Horizontal Category Bar */}
        <div className="border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs font-semibold text-slate-600">
            <Link
              to="/catalog?flash=true"
              className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 font-bold shrink-0 hover:bg-rose-100 transition"
            >
              ⚡ {t.flashSales}
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/catalog?category=${cat.slug}`}
                className="px-3 py-1 rounded-full hover:bg-emerald-50 hover:text-emerald-800 whitespace-nowrap transition"
              >
                {getLocalizedTitle(cat, lang)}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Toast Notification Banner */}
      {toast && (
        <div className="fixed bottom-20 lg:bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-emerald-950 text-white text-xs font-bold shadow-xl border border-emerald-500/40 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toast.message}</span>
        </div>
      )}

      {/* Main Route Outlet */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* AI Shopping Assistant Modal */}
      <AiShoppingAssistantModal />

      {/* Mobile Bottom Navigation Bar (Home, Categories, Search, Cart, Profile) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5 flex items-center justify-around shadow-lg">
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
          <span>Home</span>
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
          onClick={() => openAiWithPrompt('I have 2,500,000 UZS. I need a good smartphone.')}
          className="flex flex-col items-center -mt-4 px-3 py-2 rounded-2xl bg-emerald-600 text-white text-[10px] font-extrabold shadow-md"
        >
          <Sparkles className="w-5 h-5" />
          <span>AI Search</span>
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
        <NavLink
          to="/auth"
          className={({ isActive }) =>
            `flex flex-col items-center py-1 px-3 rounded-xl text-[11px] font-bold ${
              isActive ? 'text-emerald-600' : 'text-slate-500'
            }`
          }
        >
          <User className="w-5 h-5" />
          <span>{t.profile}</span>
        </NavLink>
      </nav>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-100 mt-16 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-lg">
                S
              </div>
              <span className="text-xl font-black text-white tracking-tight">SAVDOX</span>
            </div>
            <p className="text-sm text-emerald-200/80 max-w-sm leading-relaxed">
              {t.tagline} Uzbekistan’s premier multi-vendor e-commerce ecosystem with 90-minute express delivery, AI budget concierge, and official IMEI-verified electronics.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              {['Click Evolution', 'Payme Business', 'Uzum Bank 0%', 'Uzcard', 'Humo', 'Cash on Delivery'].map(
                (badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 rounded-lg bg-emerald-900/90 border border-emerald-800 text-[11px] font-semibold text-emerald-200"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-3">
              Marketplace
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/90">
              <li><Link to="/catalog" className="hover:text-white">All 16 Categories</Link></li>
              <li><Link to="/catalog?flash=true" className="hover:text-white">Flash Sales</Link></li>
              <li><Link to="/bonus" className="hover:text-white">SAVDOX Bonus Loyalty</Link></li>
              <li><Link to="/orders" className="hover:text-white">Fast Delivery Tracking</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-3">
              For Partners
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/90">
              <li><Link to="/seller" className="hover:text-white">Seller Studio Dashboard</Link></li>
              <li><Link to="/seller" className="hover:text-white">Open a Store on SAVDOX</Link></li>
              <li><Link to="/admin" className="hover:text-white">Admin Console & RBAC</Link></li>
              <li><Link to="/auth" className="hover:text-white">Merchant Verification</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-3">
              Uzbekistan Hubs
            </h4>
            <ul className="space-y-1.5 text-xs text-emerald-200/90">
              <li>📍 Tashkent (Yunusabad & Chilanzar)</li>
              <li>📍 Samarkand (Registan Logistics)</li>
              <li>📍 Bukhara, Andijan, Fergana, Nukus</li>
              <li className="pt-2 text-emerald-300 font-bold">24/7 Hotline: +998 71 200 77 00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-900/80 py-4 text-center text-xs text-emerald-300/70">
          © 2026 SAVDOX Marketplace LLC (Tashkent, Uzbekistan). Built for Web, iOS & Android.
        </div>
      </footer>
    </div>
  );
}

