import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CreditCard,
  Lock,
  CheckCircle2,
  X,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { formatUzs } from '@shared/utils/formatters';
import { sounds } from '../utils/soundEffects';

export default function PaymentModal({
  isOpen,
  onClose,
  onSuccess,
  amountUzs,
  paymentMethod = 'click',
  customerPhone = '+998 90 945 12 34',
  lang = 'uz',
}) {
  const [step, setStep] = useState('card'); // 'card' | 'otp' | 'success'
  const [cardNumber, setCardNumber] = useState('8600 4820 9182 3450');
  const [expiry, setExpiry] = useState('08/28');
  const [otpCode, setOtpCode] = useState('777123');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const providerNames = {
    click: 'Click Evolution',
    payme: 'Payme Uzbekistan',
    uzum: 'Uzum Bank (0% Nasiya)',
  };

  const handleCardFormat = (e) => {
    let val = e.target.value.replace(/\D/g, '').slice(0, 16);
    let formatted = val.match(/.{1,4}/g)?.join(' ') || val;
    setCardNumber(formatted);
  };

  const handleExpiryFormat = (e) => {
    let val = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (val.length >= 2) {
      val = val.slice(0, 2) + '/' + val.slice(2);
    }
    setExpiry(val);
  };

  const handleCardSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('otp');
      sounds.playNotificationPing();
    }, 600);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
      sounds.playSuccessChime();
      setTimeout(() => {
        onSuccess({
          paymentRef: `PAY-${Date.now().toString().slice(-6)}`,
          provider: paymentMethod,
          paidAmountUzs: amountUzs,
        });
      }, 1200);
    }, 700);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        >
          {/* Top Provider Header */}
          <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 p-5 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm sm:text-base">
                  {providerNames[paymentMethod] || 'Xavfsiz toʻlov'}
                </h3>
                <span className="text-[11px] text-emerald-200 flex items-center gap-1 font-medium">
                  <Lock className="w-3 h-3" /> 256-bit SSL Shifrlash
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Amount Badge */}
          <div className="bg-emerald-50 px-6 py-3 border-b border-emerald-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">Toʻlov summasi:</span>
            <span className="text-base font-black text-emerald-800">
              {formatUzs(amountUzs, lang)}
            </span>
          </div>

          <div className="p-6">
            {step === 'card' && (
              <form onSubmit={handleCardSubmit} className="space-y-4">
                {/* Visual Card Preview */}
                <div className="rounded-2xl p-4 bg-gradient-to-tr from-slate-900 via-slate-800 to-emerald-950 text-white shadow-md space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-slate-400">
                    <span>SAVDOX PAY</span>
                    <span>UZCARD / HUMO</span>
                  </div>
                  <div className="text-base sm:text-lg font-mono tracking-wider font-bold">
                    {cardNumber || '•••• •••• •••• ••••'}
                  </div>
                  <div className="flex justify-between items-end text-xs font-mono text-slate-300">
                    <div>
                      <div className="text-[9px] uppercase text-slate-400">Amal qilish muddati</div>
                      <div>{expiry || 'MM/YY'}</div>
                    </div>
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Karta raqami (Uzcard / Humo)
                  </label>
                  <input
                    type="text"
                    required
                    value={cardNumber}
                    onChange={handleCardFormat}
                    placeholder="8600 •••• •••• ••••"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-600 focus:outline-none text-xs sm:text-sm font-mono font-bold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Muddati (OO/YY)
                    </label>
                    <input
                      type="text"
                      required
                      value={expiry}
                      onChange={handleExpiryFormat}
                      placeholder="12/28"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-600 focus:outline-none text-xs sm:text-sm font-mono text-center font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Telefon raqami
                    </label>
                    <input
                      type="text"
                      disabled
                      value={customerPhone}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-500 text-xs font-mono"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md transition flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Ulanmoqda...</span>
                  ) : (
                    <>
                      <span>SMS Kodni olish</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {step === 'otp' && (
              <form onSubmit={handleOtpSubmit} className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-slate-700 flex items-start gap-2.5">
                  <Smartphone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">SMS Kod yuborildi</div>
                    <div className="text-slate-600 mt-0.5">
                      Telefoningizga ({customerPhone}) 6 xonali tasdiqlash kodi joʻnatildi.
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 text-center">
                    SMS orqali kelgan kodni kiriting
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    required
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    className="w-full py-3 rounded-2xl border-2 border-emerald-500 text-center text-xl font-mono tracking-widest font-black focus:outline-none bg-emerald-50/30"
                  />
                  <div className="text-[11px] text-center text-slate-400 mt-1.5 flex items-center justify-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Kod amal qilish vaqti: 01:58</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md transition flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Toʻlov tekshirilmoqda...</span>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Toʻlovni tasdiqlash</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setStep('card')}
                  className="w-full text-center text-xs text-slate-500 hover:text-slate-800 font-semibold"
                >
                  Karta maʼlumotlarini oʻzgartirish
                </button>
              </form>
            )}

            {step === 'success' && (
              <div className="py-6 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-lg font-black text-slate-900">Toʻlov muvaffaqiyatli oʻtdi!</h4>
                <p className="text-xs text-slate-500">
                  Buyurtmangiz tasdiqlandi va kuryer xizmatiga yoʻnaltirildi.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
