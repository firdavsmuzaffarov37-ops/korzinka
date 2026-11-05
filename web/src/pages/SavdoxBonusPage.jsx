import React from 'react';
import { Link } from 'react-router-dom';
import {
  Gift,
  Award,
  Share2,
  Copy,
  Sparkles,
  Tag,
  History,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { LOYALTY_TIERS } from '@shared/types';
import { formatUzs } from '@shared/utils/formatters';

export default function SavdoxBonusPage() {
  const {
    lang,
    user,
    bonusWallet,
    setBonusWallet,
    coupons,
    applyCouponCode,
    showToast,
  } = useMarketplace();

  const handleSimulateReferral = () => {
    setBonusWallet((prev) => ({
      ...prev,
      pointsBalance: prev.pointsBalance + 15000,
      lifetimePoints: prev.lifetimePoints + 15000,
      referralsCount: prev.referralsCount + 1,
      history: [
        {
          id: `bh-ref-${Date.now()}`,
          title: 'Friend Referral Bonus (+15,000 UZS Points)',
          points: +15000,
          date: new Date().toISOString().slice(0, 10),
        },
        ...prev.history,
      ],
    }));
    showToast('Earned +15,000 SAVDOX Bonus points from referral!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Loyalty Card */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-900 text-white p-7 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-extrabold border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" /> SAVDOX BONUS LOYALTY PROGRAM
          </span>
          <h1 className="text-3xl sm:text-4xl font-black">
            {bonusWallet.pointsBalance.toLocaleString()} UZS Bonus Balance
          </h1>
          <p className="text-sm text-emerald-100/90 max-w-xl">
            1 Bonus Point = 1 UZS. Spend your points directly at checkout or unlock higher loyalty tiers for up to 5% instant cashback on every marketplace order.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              to="/checkout"
              className="px-5 py-2.5 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-extrabold inline-flex items-center gap-1.5 shadow-md"
            >
              <span>Use Points at Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={handleSimulateReferral}
              className="px-5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20"
            >
              + Claim 15,000 UZS Referral Reward
            </button>
          </div>
        </div>

        {/* Referral Share Box */}
        <div className="lg:col-span-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-200 flex items-center gap-1.5">
              <Share2 className="w-4 h-4 text-emerald-300" /> Invite Friends & Earn
            </span>
            <span className="text-xs font-bold text-amber-300">
              {bonusWallet.referralsCount} Friends Joined
            </span>
          </div>
          <p className="text-xs text-emerald-100">
            Share your personal code. Your friend gets 25,000 UZS welcome points and you receive 15,000 UZS points!
          </p>
          <div className="flex items-center justify-between bg-slate-950/50 px-4 py-2.5 rounded-xl border border-white/15">
            <span className="font-mono text-sm font-black tracking-widest text-emerald-300">
              {user?.referralCode || 'SAVDOX777'}
            </span>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard?.writeText(user?.referralCode || 'SAVDOX777');
                showToast('Referral code SAVDOX777 copied!');
              }}
              className="text-xs font-bold text-white hover:text-emerald-300 inline-flex items-center gap-1"
            >
              <Copy className="w-3.5 h-3.5" /> Copy Code
            </button>
          </div>
        </div>
      </div>

      {/* 4 Loyalty Levels */}
      <section>
        <h2 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-emerald-600" />
          SAVDOX Loyalty Levels & Cashback Tiers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LOYALTY_TIERS.map((tier) => {
            const isCurrent = bonusWallet.tier === tier.name;
            return (
              <div
                key={tier.name}
                className={`p-5 rounded-3xl border-2 transition ${
                  isCurrent
                    ? 'border-emerald-600 bg-emerald-50/60 shadow-md'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base font-black text-slate-900">{tier.name}</span>
                  {isCurrent && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold">
                      Current Level
                    </span>
                  )}
                </div>
                <div className="text-2xl font-black text-emerald-700">
                  {tier.cashbackPercent}% Cashback
                </div>
                <p className="text-xs text-slate-600 mt-2">{tier.perk}</p>
                <div className="text-[11px] text-slate-400 font-semibold mt-3">
                  Unlocks at {tier.minPoints.toLocaleString()} lifetime pts
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Coupons & Points Transaction History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-4">
          <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <Tag className="w-4 h-4 text-emerald-600" />
            Exclusive Member Discount Coupons
          </h3>
          <div className="space-y-3">
            {coupons.map((c) => (
              <div
                key={c.code}
                className="p-4 rounded-2xl border border-dashed border-emerald-300 bg-emerald-50/40 flex items-center justify-between gap-3"
              >
                <div>
                  <span className="text-xs font-black text-emerald-800">{c.code}</span>
                  <div className="text-xs font-bold text-slate-900 mt-0.5">{c.titleEn}</div>
                </div>
                <button
                  type="button"
                  onClick={() => applyCouponCode(c.code)}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shrink-0"
                >
                  Apply to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-4">
          <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <History className="w-4 h-4 text-emerald-600" />
            Bonus Points & Cashback History
          </h3>
          <div className="divide-y divide-slate-100 text-xs">
            {bonusWallet.history.map((item) => (
              <div key={item.id} className="py-3 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">{item.title}</div>
                  <div className="text-slate-400">{item.date}</div>
                </div>
                <span
                  className={`font-extrabold ${
                    item.points >= 0 ? 'text-emerald-700' : 'text-rose-600'
                  }`}
                >
                  {item.points >= 0 ? `+${item.points.toLocaleString()}` : item.points.toLocaleString()} pts
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

