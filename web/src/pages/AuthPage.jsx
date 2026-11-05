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
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { UZBEKISTAN_CITIES } from '@shared/types';

export default function AuthPage({ defaultMode = 'login' }) {
  const { setUser, lang, setLang, t, showToast, supabase, toast } = useMarketplace();
  const navigate = useNavigate();
  const location = useLocation();

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
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('Tashkent');
  const [streetAddress, setStreetAddress] = useState('');
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
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
              ...prev,
              email,
              fullName: fullName || prev.fullName,
              isVerified: true,
            }));
            showToast(lang === 'uz' ? 'Tizimga muvaffaqiyatli kirdingiz!' : 'Signed in!');
            setIsLoading(false);
            navigate('/');
            return;
          }
        }
      }

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

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const code = otpDigits.join('');
    if (code.length < 6) {
      showToast(
        lang === 'uz' ? '6 xonali kodni toʻliq kiriting' : 'Enter all 6 digits',
        'error'
      );
      return;
    }

    setUser((prev) => ({
      ...prev,
      fullName: fullName || prev.fullName,
      phone: phone || prev.phone,
      email: email || prev.email,
      city: city || prev.city,
      streetAddress: streetAddress || prev.streetAddress,
      isVerified: true,
    }));

    showToast(
      lang === 'uz'
        ? 'Xush kelibsiz! Hisobingiz tasdiqlandi.'
        : lang === 'ru'
        ? 'Добро пожаловать! Аккаунт подтвержден.'
        : 'Welcome! Account verified.'
    );
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 px-4 py-8">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-emerald-950 text-white text-xs font-bold shadow-xl border border-emerald-500/40 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toast.message}</span>
        </div>
      )}

      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl">
        {/* Left Brand Panel */}
        <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white p-8 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-200 hover:text-white transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.home}</span>
              </Link>

              {/* Compact Language Pill */}
              <div className="inline-flex items-center bg-emerald-900/90 rounded-lg p-0.5 border border-emerald-700">
                {['uz', 'ru', 'en'].map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase transition ${
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

            <div className="flex items-center gap-3 pt-2">
              <img
                src="/savdox-icon.png"
                alt="SAVDOX Icon"
                className="w-14 h-14 rounded-2xl object-contain bg-white p-1 shadow-lg"
              />
              <div>
                <div className="text-xl font-black tracking-tight">SAVDOX</div>
                <div className="inline-flex items-center gap-1 text-emerald-300 text-xs font-bold">
                  <Sparkles className="w-3 h-3" /> SAVDOX ID
                </div>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              {t.tagline}
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              {t.heroDescription}
            </p>
          </div>

          <div className="space-y-3 pt-8 border-t border-emerald-800/80 mt-8 text-xs text-emerald-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.trustExpress}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>25 000 {t.uzsCurrency} SAVDOX Bonus</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.trustPay}</span>
            </div>
          </div>
        </div>

        {/* Right Form Area */}
        <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-center">
          {/* Top Switcher Tabs: Login vs Register */}
          <div className="flex rounded-2xl bg-slate-100 p-1 mb-6">
            <Link
              to="/login"
              onClick={() => setView('login')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-extrabold text-center flex items-center justify-center gap-1.5 transition ${
                view === 'login'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>{t.login}</span>
            </Link>
            <Link
              to="/register"
              onClick={() => setView('register')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-extrabold text-center flex items-center justify-center gap-1.5 transition ${
                view === 'register'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>{t.register}</span>
            </Link>
          </div>

          {(view === 'login' || view === 'register') && (
            <form onSubmit={handleLoginOrRegisterSubmit} className="space-y-4">
              <div>
                <h2 className="text-xl font-black text-slate-900">
                  {view === 'login' ? t.loginTitle : t.registerTitle}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  {view === 'login' ? t.loginSubtitle : t.registerSubtitle}
                </p>
              </div>

              {/* Phone vs Email Method Toggle */}
              <div className="inline-flex rounded-xl bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() => setLoginMethod('phone')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                    loginMethod === 'phone'
                      ? 'bg-white text-emerald-700 shadow-sm'
                      : 'text-slate-600'
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
                      : 'text-slate-600'
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
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-emerald-600 focus:outline-none"
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
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-emerald-600 focus:outline-none"
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
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-emerald-600 focus:outline-none"
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
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-emerald-600 focus:outline-none"
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
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-sm font-extrabold shadow-md transition"
              >
                {view === 'login' ? t.signInBtn : t.signUpBtn}
              </button>

              <div className="text-center text-xs text-slate-600 pt-2">
                {view === 'login' ? (
                  <>
                    {t.noAccountText}{' '}
                    <Link
                      to="/register"
                      onClick={() => setView('register')}
                      className="font-extrabold text-emerald-700 hover:underline"
                    >
                      {t.register}
                    </Link>
                  </>
                ) : (
                  <>
                    {t.haveAccountText}{' '}
                    <Link
                      to="/login"
                      onClick={() => setView('login')}
                      className="font-extrabold text-emerald-700 hover:underline"
                    >
                      {t.login}
                    </Link>
                  </>
                )}
              </div>
            </form>
          )}

          {view === 'otp' && (
            <form onSubmit={handleVerifyOtp} className="space-y-5 py-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <KeyRound className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-extrabold text-slate-900">
                {t.otpTitle}
              </h2>
              <p className="text-xs text-slate-600">
                {t.otpSubtitle} <strong>{loginMethod === 'phone' ? phone : email}</strong>
              </p>

              <div className="flex gap-2.5">
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
                    }}
                    className="w-11 sm:w-12 h-14 text-center text-lg font-extrabold rounded-xl border-2 border-emerald-500 bg-emerald-50/40 focus:outline-none"
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md"
                >
                  {t.verifyOtpBtn}
                </button>
                <button
                  type="button"
                  onClick={() => showToast('SMS OTP sent!')}
                  className="px-4 py-3 rounded-2xl bg-slate-100 text-slate-700 text-xs font-bold"
                >
                  {t.resendOtpBtn}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
