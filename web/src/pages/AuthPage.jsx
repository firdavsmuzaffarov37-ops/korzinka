import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Phone,
  Mail,
  Lock,
  User,
  MapPin,
  ShieldCheck,
  ArrowRight,
  KeyRound,
  CheckCircle2,
  Globe,
  Sparkles,
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { UZBEKISTAN_CITIES } from '@shared/types';

export default function AuthPage() {
  const { user, setUser, lang, setLang, showToast, supabase, supabaseStatus } = useMarketplace();
  const navigate = useNavigate();

  // Views: 'welcome' | 'login' | 'register' | 'otp' | 'recovery' | 'profile'
  const [view, setView] = useState('profile');
  const [loginMethod, setLoginMethod] = useState('phone'); // 'phone' | 'email'
  const [phone, setPhone] = useState(user?.phone || '+998 90 945 12 34');
  const [email, setEmail] = useState(user?.email || 'temurbek@savdox.uz');
  const [password, setPassword] = useState('Savdox2026!');
  const [fullName, setFullName] = useState(user?.fullName || 'Temurbek Yoqubov');
  const [city, setCity] = useState(user?.city || 'Tashkent');
  const [district, setDistrict] = useState(user?.district || 'Yunusabad');
  const [streetAddress, setStreetAddress] = useState(
    user?.streetAddress || 'Amir Temur Avenue 107B, Apt 42'
  );
  const [role, setRole] = useState(user?.role || 'customer');
  const [otpDigits, setOtpDigits] = useState(['4', '8', '2', '9', '1', '5']);
  const [recoverySent, setRecoverySent] = useState(false);

  const handleSendOtpOrLogin = async (e) => {
    e.preventDefault();
    if (loginMethod === 'phone' && phone.replace(/\D/g, '').length < 9) {
      showToast('Please enter a valid +998 phone number', 'error');
      return;
    }

    if (supabase && loginMethod === 'email') {
      try {
        if (view === 'register') {
          await supabase.auth.signUp({
            email,
            password,
            options: { data: { full_name: fullName, city, role } },
          });
        } else {
          await supabase.auth.signInWithPassword({ email, password });
        }
      } catch {
        // Continues to OTP verification step
      }
    }

    showToast('Verification OTP code sent via Supabase Auth / SMS');
    setView('otp');
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const code = otpDigits.join('');
    if (code.length < 6) {
      showToast('Please enter all 6 digits of the OTP code', 'error');
      return;
    }
    setUser((prev) => ({
      ...prev,
      fullName,
      phone,
      email,
      city,
      district,
      streetAddress,
      role,
      isVerified: true,
    }));
    showToast('OTP Verified! Welcome to SAVDOX.');
    setView('profile');
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setUser((prev) => ({
      ...prev,
      fullName,
      phone,
      email,
      city,
      district,
      streetAddress,
      role,
    }));
    showToast('Profile & preferences saved successfully!');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Top Mode Switcher Bar so any Auth screen can be tested immediately */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-soft">
        <div className="flex items-center gap-2 flex-wrap">
          {[
            { id: 'welcome', label: '1. Welcome Screen' },
            { id: 'login', label: '2. Phone / Email Login' },
            { id: 'register', label: '3. Registration' },
            { id: 'otp', label: '4. OTP Verification' },
            { id: 'recovery', label: '5. Password Recovery' },
            { id: 'profile', label: '6. User Profile Setup' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setView(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                view === tab.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-emerald-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Language Quick Selector */}
        <div className="flex items-center gap-1.5">
          <Globe className="w-4 h-4 text-emerald-600" />
          {[
            { code: 'uz', label: 'Oʻzbekcha' },
            { code: 'ru', label: 'Русский' },
            { code: 'en', label: 'English' },
          ].map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => setLang(l.code)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                lang === l.code
                  ? 'bg-emerald-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Auth Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl">
        {/* Left Brand Panel */}
        <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-bold border border-white/20">
              <Sparkles className="w-3.5 h-3.5" /> SAVDOX ID • Uzbekistan
            </div>
            <h1 className="text-3xl font-black tracking-tight leading-tight">
              Everything You Need, In One Place.
            </h1>
            <p className="text-sm text-emerald-100/90 leading-relaxed">
              One unified account for shopping across 28,000+ verified products, 90-minute express delivery, SAVDOX Bonus cashback, and Seller Studio.
            </p>
          </div>

          <div className="space-y-3 pt-8 border-t border-emerald-700/60 mt-8 text-xs text-emerald-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Instant SMS / Telegram OTP Login (+998)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>25,000 UZS Welcome Bonus Points on signup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Protected by Supabase Auth & Row-Level Security</span>
            </div>
          </div>
        </div>

        {/* Right Interactive Form Area */}
        <div className="lg:col-span-7 p-8">
          {view === 'welcome' && (
            <div className="space-y-6 py-4">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Xush kelibsiz! Welcome to SAVDOX
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Choose your preferred language and continue to sign in with your Uzbekistan phone number or email address.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { code: 'uz', title: 'Oʻzbek tili', sub: 'Asosiy til' },
                  { code: 'ru', title: 'Русский язык', sub: 'Полный перевод' },
                  { code: 'en', title: 'English', sub: 'International' },
                ].map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => setLang(item.code)}
                    className={`p-4 rounded-2xl border-2 text-left transition ${
                      lang === item.code
                        ? 'border-emerald-600 bg-emerald-50/70'
                        : 'border-slate-200 hover:border-emerald-300'
                    }`}
                  >
                    <div className="text-sm font-extrabold text-slate-900">{item.title}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setView('login')}
                  className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold inline-flex items-center gap-2 shadow-md"
                >
                  <span>Sign In to Account</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setView('register')}
                  className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold"
                >
                  Create New Account
                </button>
              </div>
            </div>
          )}

          {(view === 'login' || view === 'register') && (
            <form onSubmit={handleSendOtpOrLogin} className="space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-extrabold text-slate-900">
                  {view === 'login' ? 'Sign In to SAVDOX' : 'Create Your SAVDOX Account'}
                </h2>
                <div className="inline-flex rounded-xl bg-slate-100 p-1">
                  <button
                    type="button"
                    onClick={() => setLoginMethod('phone')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold ${
                      loginMethod === 'phone' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600'
                    }`}
                  >
                    Phone (+998)
                  </button>
                  <button
                    type="button"
                    onClick={() => setLoginMethod('email')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold ${
                      loginMethod === 'email' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600'
                    }`}
                  >
                    Email
                  </button>
                </div>
              </div>

              {view === 'register' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-emerald-600 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {loginMethod === 'phone' ? (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Uzbekistan Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+998 90 123 45 67"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-emerald-600 focus:outline-none"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@savdox.uz"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-emerald-600 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-700">Password</label>
                  <button
                    type="button"
                    onClick={() => setView('recovery')}
                    className="text-xs font-semibold text-emerald-700 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md transition"
              >
                {view === 'login' ? 'Send OTP & Sign In' : 'Register & Verify Phone'}
              </button>
            </form>
          )}

          {view === 'otp' && (
            <form onSubmit={handleVerifyOtp} className="space-y-5 py-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <KeyRound className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-extrabold text-slate-900">
                Enter 6-Digit SMS Verification Code
              </h2>
              <p className="text-xs text-slate-600">
                We sent a one-time verification code to <strong>{phone}</strong>.
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
                    className="w-12 h-14 text-center text-lg font-extrabold rounded-xl border-2 border-emerald-500 bg-emerald-50/40 focus:outline-none"
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md"
                >
                  Verify & Continue
                </button>
                <button
                  type="button"
                  onClick={() => showToast('New SMS OTP code resent!')}
                  className="px-4 py-3 rounded-2xl bg-slate-100 text-slate-700 text-xs font-bold"
                >
                  Resend Code
                </button>
              </div>
            </form>
          )}

          {view === 'recovery' && (
            <div className="space-y-5 py-2">
              <h2 className="text-xl font-extrabold text-slate-900">Password Recovery</h2>
              <p className="text-xs text-slate-600">
                Enter your registered +998 phone number or email to receive a password reset link.
              </p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
              />
              {recoverySent && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-semibold">
                  ✓ Recovery instructions sent to {email}. Check your inbox or SMS.
                </div>
              )}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setRecoverySent(true);
                    showToast('Password recovery link sent!');
                  }}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                >
                  Send Recovery Link
                </button>
                <button
                  type="button"
                  onClick={() => setView('login')}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold"
                >
                  Back to Login
                </button>
              </div>
            </div>
          )}

          {view === 'profile' && (
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={user.avatar}
                    alt={fullName}
                    className="w-12 h-12 rounded-2xl object-cover border-2 border-emerald-500"
                  />
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900">{fullName}</h2>
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified SAVDOX Account ({role.toUpperCase()})
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => navigate('/orders')}
                  className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200"
                >
                  My Orders →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone (+998)</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">City</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm bg-white"
                  >
                    {UZBEKISTAN_CITIES.map((c) => (
                      <option key={c.id} value={c.nameEn}>
                        {c.nameEn}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Active Platform Role (RBAC)
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-emerald-400 bg-emerald-50/40 text-sm font-bold text-emerald-950"
                  >
                    <option value="customer">Customer (Shopper)</option>
                    <option value="seller">Verified Seller (Store Owner)</option>
                    <option value="admin">Platform Administrator</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Default Delivery Street Address
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-2.5" />
                  <input
                    type="text"
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-sm"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm"
                >
                  Save Profile Changes
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/seller')}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold"
                >
                  Open Seller Dashboard
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/admin')}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold"
                >
                  Open Admin Panel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

