import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  Lock,
  User,
  MapPin,
  KeyRound,
  CheckCircle2,
  Sparkles,
  LogIn,
  UserPlus,
  ArrowLeft,
  ArrowRight,
  ShoppingCart,
  Eye,
  EyeOff,
  ShieldCheck,
  Zap,
  Globe,
} from 'lucide-react';
import { useMarketplace, DEFAULT_USER } from '../context/MarketplaceContext';
import { UZBEKISTAN_CITIES } from '@shared/types';
import { formatUzs } from '@shared/utils/formatters';

export default function AuthPage({ defaultMode = 'login' }) {
  const {
    setUser,
    lang,
    setLang,
    t,
    showToast,
    supabase,
    toast,
    cart,
  } = useMarketplace();

  const navigate = useNavigate();
  const location = useLocation();

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const routeMode = location.pathname.includes('register')
    ? 'register'
    : location.pathname.includes('login')
    ? 'login'
    : defaultMode;

  const [view, setView] = useState(routeMode); // 'login' | 'register' | 'otp'
  const [loginMethod, setLoginMethod] = useState('phone'); // 'phone' | 'email'
  const [phone, setPhone] = useState('+998 90 ');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('Tashkent');
  const [streetAddress, setStreetAddress] = useState('');
  const [otpDigits, setOtpDigits] = useState(['4', '8', '2', '9', '1', '5']);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setView(routeMode);
  }, [routeMode]);

  const handleLoginOrRegisterSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (supabase && loginMethod === 'email' && email) {
        if (view === 'register') {
          const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
              data: {
                full_name: fullName,
                phone,
                city,
                street_address: streetAddress,
              },
            },
          });
          if (error) {
            showToast(error.message, 'error');
            setIsLoading(false);
            return;
          }
        } else {
          const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
          });
          if (!error) {
            setUser((prev) => ({
              ...(prev || DEFAULT_USER),
              email,
              fullName: fullName || prev?.fullName || DEFAULT_USER.fullName,
              isVerified: true,
            }));
            showToast(
              lang === 'uz'
                ? 'Tizimga muvaffaqiyatli kirdingiz!'
                : lang === 'ru'
                ? 'Вы успешно вошли в аккаунт!'
                : 'Signed in successfully!'
            );
            setIsLoading(false);
            navigate('/');
            return;
          }
        }
      }

      // Default mock flow or SMS OTP verification
      setOtpDigits(['4', '8', '2', '9', '1', '5']);
      showToast(
        lang === 'uz'
          ? 'Tasdiqlash kodi yuborildi!'
          : lang === 'ru'
          ? 'Код подтверждения отправлен!'
          : 'Verification code sent!'
      );
      setView('otp');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = () => {
    setUser(DEFAULT_USER);
    showToast(
      lang === 'uz'
        ? `Xush kelibsiz, ${DEFAULT_USER.fullName}!`
        : lang === 'ru'
        ? `Добро пожаловать, ${DEFAULT_USER.fullName}!`
        : `Welcome, ${DEFAULT_USER.fullName}!`
    );
    navigate('/');
  };

  const handleGuestLogin = () => {
    setUser({
      id: 'usr-guest-' + Date.now(),
      fullName: lang === 'uz' ? 'Mehmon xaridor' : lang === 'ru' ? 'Гость' : 'Guest Shopper',
      phone: '',
      email: '',
      avatar: '',
      city: 'Toshkent',
      loyaltyTier: 'Standard',
      points: 0,
      isGuest: true,
    });
    showToast(
      lang === 'uz'
        ? 'Mehmon sifatida saytga kirdingiz'
        : lang === 'ru'
        ? 'Вы вошли как гость'
        : 'Browsing as guest'
    );
    navigate('/');
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const code = otpDigits.join('');
    if (code.length < 6) {
      showToast(
        lang === 'uz'
          ? '6 xonali kodni toʻliq kiriting'
          : lang === 'ru'
          ? 'Введите 6-значный код полностью'
          : 'Enter all 6 digits',
        'error'
      );
      return;
    }

    setUser((prev) => ({
      ...(prev || DEFAULT_USER),
      fullName: fullName || prev?.fullName || (phone ? `Foydalanuvchi (${phone.slice(-4)})` : DEFAULT_USER.fullName),
      phone: phone || prev?.phone || DEFAULT_USER.phone,
      email: email || prev?.email || DEFAULT_USER.email,
      city: city || prev?.city || DEFAULT_USER.city,
      streetAddress: streetAddress || prev?.streetAddress || DEFAULT_USER.streetAddress,
      isVerified: true,
    }));

    showToast(
      lang === 'uz'
        ? 'Xush kelibsiz! SAVDOX hisobingiz tasdiqlandi. 25 000 soʻm bonus berildi!'
        : lang === 'ru'
        ? 'Добро пожаловать! Аккаунт подтвержден. Начислено 25 000 бонусов!'
        : 'Welcome! Account verified. 25,000 UZS bonus awarded!'
    );
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-gradient-to-b from-slate-50 via-slate-100/70 to-emerald-50/30 px-4 py-4 sm:py-6">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-emerald-950 text-white text-xs font-bold shadow-xl border border-emerald-500/40 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toast.message}</span>
        </div>
      )}

      {/* Top Navbar: Home, Brand, Live Cart Pill, and Language Switcher */}
      <header className="max-w-5xl w-full mx-auto flex items-center justify-between gap-3 py-2 px-2">
        <button
          type="button"
          onClick={handleGuestLogin}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-emerald-700 hover:border-emerald-300 shadow-xs transition"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-600" />
          <span>{t.home}</span>
        </button>

        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/savdox-icon.png"
            alt="SAVDOX"
            className="w-9 h-9 rounded-xl object-contain shadow-xs group-hover:scale-105 transition"
          />
          <span className="text-lg font-black text-emerald-950 tracking-tight">
            SAVDO<span className="text-emerald-600">X</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Cart Link with Live Counter Badge */}
          <Link
            to="/cart"
            title={t.cart}
            className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 text-xs font-bold text-slate-700 shadow-xs transition"
          >
            <ShoppingCart className="w-4 h-4 text-emerald-600" />
            <span className="hidden sm:inline">{t.cart}</span>
            {totalCartItems > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-emerald-600 text-white text-[10px] font-black">
                {totalCartItems}
              </span>
            )}
          </Link>

          {/* Language Selector */}
          <div className="inline-flex items-center bg-white rounded-xl p-0.5 border border-slate-200 shadow-xs">
            {['uz', 'ru', 'en'].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`px-2 py-1 rounded-lg text-[10px] font-extrabold uppercase transition ${
                  lang === code
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Glassmorphic Auth Card */}
      <div className="w-full max-w-5xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl">
        {/* Left Brand Panel */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#03261e] via-[#064e3b] to-[#0f766e] text-white p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative radial glows */}
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-teal-400/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/savdox-icon.png"
                alt="SAVDOX Icon"
                className="w-14 h-14 rounded-2xl object-contain bg-white/10 p-1.5 shadow-xl border border-white/20 backdrop-blur-md"
              />
              <div>
                <div className="text-2xl font-black tracking-tight leading-none">
                  SAVDO<span className="text-emerald-400">X</span>
                </div>
                <div className="inline-flex items-center gap-1 text-emerald-300 text-xs font-bold mt-1">
                  <Sparkles className="w-3.5 h-3.5" /> SAVDOX ID
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                {t.tagline}
              </h1>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                {t.heroDescription}
              </p>
            </div>

            {/* Welcome Bonus Callout Banner */}
            <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-lg shrink-0 shadow-md">
                🎁
              </div>
              <div>
                <div className="text-xs font-black text-amber-200">
                  +25 000 {t.uzsCurrency} SAVDOX Bonus
                </div>
                <div className="text-[11px] text-emerald-100">
                  {lang === 'uz'
                    ? 'Yangi roʻyxatdan oʻtganingiz uchun darhol beriladi'
                    : lang === 'ru'
                    ? 'Начисляется сразу при первой регистрации'
                    : 'Awarded immediately upon account registration'}
                </div>
              </div>
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="relative z-10 space-y-2.5 pt-6 border-t border-emerald-800/80 mt-8 text-xs text-emerald-100">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.trustExpress} (90 daqiqa)</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.trustImei} (100% Rasmiy kafolat)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.trustPay} (0% Nasiya)</span>
            </div>
          </div>
        </div>

        {/* Right Form Area */}
        <div className="lg:col-span-7 p-6 sm:p-9 flex flex-col justify-center bg-white">
          {/* Top Switcher Tabs: Login vs Register */}
          <div className="flex rounded-2xl bg-slate-100 p-1 mb-6 border border-slate-200/80">
            <button
              type="button"
              onClick={() => {
                setView('login');
                navigate('/login');
              }}
              className={`flex-1 py-2.5 rounded-xl text-xs font-black text-center flex items-center justify-center gap-1.5 transition ${
                view === 'login'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LogIn className="w-4 h-4" />
              <span>{t.login}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setView('register');
                navigate('/register');
              }}
              className={`flex-1 py-2.5 rounded-xl text-xs font-black text-center flex items-center justify-center gap-1.5 transition ${
                view === 'register'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              <span>{t.register}</span>
            </button>
          </div>

          {(view === 'login' || view === 'register') && (
            <form onSubmit={handleLoginOrRegisterSubmit} className="space-y-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {view === 'login' ? t.loginTitle : t.registerTitle}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  {view === 'login' ? t.loginSubtitle : t.registerSubtitle}
                </p>
              </div>

              {/* Phone vs Email Method Toggle */}
              <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200/80">
                <button
                  type="button"
                  onClick={() => setLoginMethod('phone')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                    loginMethod === 'phone'
                      ? 'bg-white text-emerald-700 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.phoneTab}
                </button>
                <button
                  type="button"
                  onClick={() => setLoginMethod('email')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                    loginMethod === 'email'
                      ? 'bg-white text-emerald-700 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.emailTab}
                </button>
              </div>

              {view === 'register' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.fullNameLabel} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ism Familiya"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                </div>
              )}

              {loginMethod === 'phone' ? (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.phoneLabel} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+998 90 123 45 67"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.emailLabel} *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                </div>
              )}

              {view === 'register' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.cityLabel}
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white"
                    >
                      {UZBEKISTAN_CITIES.map((c) => (
                        <option key={c.id} value={c.nameEn}>
                          {lang === 'uz' ? c.nameUz : lang === 'ru' ? c.nameRu : c.nameEn}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.addressLabel}
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                        placeholder="Yunusobod, 12-daha"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-700">
                    {t.passwordLabel} *
                  </label>
                  {view === 'login' && (
                    <button
                      type="button"
                      onClick={() =>
                        showToast(
                          lang === 'uz'
                            ? 'Parolni tiklash havolasi telefoningizga yuborildi'
                            : 'Password reset link sent to your phone'
                        )
                      }
                      className="text-[11px] font-bold text-emerald-700 hover:underline"
                    >
                      {t.forgotPassword}
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] disabled:opacity-50 text-white text-sm font-black shadow-lg shadow-emerald-600/30 transition"
              >
                {isLoading ? (
                  <span className="animate-pulse">Tekshirilmoqda...</span>
                ) : view === 'login' ? (
                  t.signInBtn
                ) : (
                  t.signUpBtn
                )}
              </button>

              {/* Instant Social Auth Options */}
              <div className="pt-2">
                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-slate-200"></div>
                  <span className="flex-shrink mx-3 text-[11px] font-bold text-slate-400 uppercase">
                    {lang === 'uz'
                      ? 'Yoki tezkor usul bilan'
                      : lang === 'ru'
                      ? 'Или быстрый вход'
                      : 'Or continue with'}
                  </span>
                  <div className="flex-grow border-t border-slate-200"></div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-1">
                  <button
                    type="button"
                    onClick={() => {
                      showToast(
                        lang === 'uz'
                          ? 'Google orqali tizimga kirilmoqda...'
                          : 'Signing in via Google...'
                      );
                      setTimeout(() => {
                        setUser((prev) => ({
                          ...prev,
                          fullName: 'Google User',
                          email: 'user@gmail.com',
                          isVerified: true,
                        }));
                        navigate('/');
                      }, 700);
                    }}
                    className="py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold inline-flex items-center justify-center gap-2 shadow-xs transition"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>Google</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      showToast(
                        lang === 'uz'
                          ? 'Telegram orqali tizimga kirilmoqda...'
                          : 'Signing in via Telegram...'
                      );
                      setTimeout(() => {
                        setUser((prev) => ({
                          ...prev,
                          fullName: 'Telegram User',
                          phone: '+998 90 999 88 77',
                          isVerified: true,
                        }));
                        navigate('/');
                      }, 700);
                    }}
                    className="py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold inline-flex items-center justify-center gap-2 shadow-xs transition"
                  >
                    <svg className="w-4 h-4 fill-[#229ED9]" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.196 1.006.128.832.941z" />
                    </svg>
                    <span>Telegram</span>
                  </button>
                </div>
              </div>

              <div className="text-center text-xs text-slate-600 pt-3">
                {view === 'login' ? (
                  <>
                    {t.noAccountText}{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setView('register');
                        navigate('/register');
                      }}
                      className="font-extrabold text-emerald-700 hover:underline ml-1"
                    >
                      {t.register}
                    </button>
                  </>
                ) : (
                  <>
                    {t.haveAccountText}{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setView('login');
                        navigate('/login');
                      }}
                      className="font-extrabold text-emerald-700 hover:underline ml-1"
                    >
                      {t.login}
                    </button>
                  </>
                )}
              </div>

              {/* Quick Demo and Guest Browsing Options */}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleDemoLogin}
                  className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition flex items-center justify-center gap-2 border border-emerald-200"
                >
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>
                    {lang === 'uz'
                      ? '1-bosishda tezkor kirish (Temurbek Yoqubov)'
                      : lang === 'ru'
                      ? 'Быстрый вход в 1 клик (Темурбек Якубов)'
                      : 'Quick 1-Click Demo Login'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleGuestLogin}
                  className="w-full py-2 rounded-xl text-slate-500 hover:text-emerald-700 hover:bg-slate-50 text-xs font-semibold transition flex items-center justify-center gap-1.5"
                >
                  <span>
                    {lang === 'uz'
                      ? 'Mehmon sifatida davom etish (Roʻyxatdan oʻtmasdan)'
                      : lang === 'ru'
                      ? 'Продолжить как гость (Без регистрации)'
                      : 'Continue as Guest'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

          {view === 'otp' && (
            <form onSubmit={handleVerifyOtp} className="space-y-5 py-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
                <KeyRound className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {t.otpTitle}
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  {t.otpSubtitle}{' '}
                  <strong className="text-slate-900 font-mono">
                    {loginMethod === 'phone' ? phone : email}
                  </strong>
                </p>
              </div>

              <div className="flex justify-between gap-2 sm:gap-2.5 max-w-sm">
                {otpDigits.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => {
                      const next = [...otpDigits];
                      next[index] = e.target.value.replace(/\D/g, '');
                      setOtpDigits(next);
                      if (e.target.value && e.target.nextElementSibling) {
                        e.target.nextElementSibling.focus();
                      }
                    }}
                    className="w-10 sm:w-12 h-14 text-center text-xl font-black rounded-xl border-2 border-emerald-500 bg-emerald-50/50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 shadow-xs"
                  />
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs sm:text-sm font-black shadow-md transition"
                >
                  {t.verifyOtpBtn}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    showToast(
                      lang === 'uz'
                        ? 'Tasdiqlash kodi qayta yuborildi!'
                        : 'Verification code resent!'
                    )
                  }
                  className="px-4 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
                >
                  {t.resendOtpBtn}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Footer copyright */}
      <footer className="text-center py-2 text-xs text-slate-400">
        © 2026 SAVDOX. {t.brandSubtitle} • {t.tagline}
      </footer>
    </div>
  );
}
