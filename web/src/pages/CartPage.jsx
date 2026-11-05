import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShoppingCart,
  Trash2,
  Store,
  Tag,
  ArrowRight,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { formatUzs, getLocalizedTitle } from '@shared/utils/formatters';

export default function CartPage() {
  const {
    lang,
    t,
    enrichedCart,
    cartGroupedBySeller,
    cartSubtotalUzs,
    updateCartItemQuantity,
    updateCartItemVariant,
    removeFromCart,
    clearCart,
    appliedCoupon,
    setAppliedCoupon,
    applyCouponCode,
    couponDiscountUzs,
    coupons,
  } = useMarketplace();

  const navigate = useNavigate();
  const [couponInput, setCouponInput] = useState(appliedCoupon?.code || 'SAVDOX10');

  const estimatedDeliveryUzs =
    cartSubtotalUzs === 0 ? 0 : cartSubtotalUzs >= 500000 ? 0 : 15000;
  const finalTotalUzs = Math.max(
    0,
    cartSubtotalUzs + estimatedDeliveryUzs - couponDiscountUzs
  );

  if (enrichedCart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
          <ShoppingCart className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-black text-slate-900">Your SAVDOX Cart is Empty</h1>
        <p className="text-sm text-slate-500 max-w-md mx-auto">
          Explore 16 categories of verified products or ask our AI Shopping Assistant to build a shopping list within your UZS budget.
        </p>
        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md transition"
        >
          <span>Browse Products</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            Shopping Cart ({enrichedCart.reduce((s, i) => s + i.quantity, 0)} Items)
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Items are automatically grouped by verified seller for transparent fulfillment
          </p>
        </div>
        <button
          type="button"
          onClick={clearCart}
          className="text-xs font-bold text-rose-600 hover:underline inline-flex items-center gap-1"
        >
          <Trash2 className="w-3.5 h-3.5" /> Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Items Grouped by Seller (8 Cols) */}
        <div className="lg:col-span-8 space-y-5">
          {cartGroupedBySeller.map((group) => (
            <div
              key={group.sellerName}
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-soft"
            >
              {/* Seller Group Header */}
              <div className="bg-emerald-50/70 px-5 py-3 border-b border-emerald-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Store className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-extrabold text-slate-900">
                    Seller: {group.sellerName}
                  </span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-xs font-bold text-emerald-800">
                  Store Subtotal: {formatUzs(group.sellerSubtotalUzs, lang)}
                </span>
              </div>

              {/* Seller Items */}
              <div className="divide-y divide-slate-100">
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <Link to={`/product/${item.productId}`} className="shrink-0">
                        <img
                          src={item.product.images?.[0]}
                          alt={item.product.nameEn}
                          className="w-20 h-20 rounded-2xl object-cover border border-slate-200"
                        />
                      </Link>
                      <div className="min-w-0 flex-1 space-y-1.5">
                        <Link
                          to={`/product/${item.productId}`}
                          className="text-sm font-bold text-slate-900 hover:text-emerald-700 line-clamp-2"
                        >
                          {getLocalizedTitle(item.product, lang)}
                        </Link>

                        {/* Variant Selectors Inside Cart */}
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          {item.product.colors?.length > 0 && (
                            <select
                              value={item.selectedColor}
                              onChange={(e) =>
                                updateCartItemVariant(item.id, {
                                  selectedColor: e.target.value,
                                })
                              }
                              className="px-2 py-1 rounded-lg border border-slate-200 bg-slate-50 text-[11px] font-semibold"
                            >
                              {item.product.colors.map((c) => (
                                <option key={c.name} value={c.name}>
                                  Color: {c.name}
                                </option>
                              ))}
                            </select>
                          )}

                          {item.product.sizes?.length > 0 && (
                            <select
                              value={item.selectedSize}
                              onChange={(e) =>
                                updateCartItemVariant(item.id, {
                                  selectedSize: e.target.value,
                                })
                              }
                              className="px-2 py-1 rounded-lg border border-slate-200 bg-slate-50 text-[11px] font-semibold"
                            >
                              {item.product.sizes.map((s) => (
                                <option key={s} value={s}>
                                  {s}
                                </option>
                              ))}
                            </select>
                          )}
                        </div>

                        <div className="text-xs text-slate-500">
                          Unit Price: <strong className="text-slate-800">{formatUzs(item.unitPriceUzs, lang)}</strong>
                        </div>
                      </div>
                    </div>

                    {/* Quantity Controls & Line Price */}
                    <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                      <div className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-50">
                        <button
                          type="button"
                          onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1.5 text-xs font-extrabold hover:bg-slate-200 rounded-l-xl"
                        >
                          −
                        </button>
                        <span className="px-3 text-xs font-bold">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1.5 text-xs font-extrabold hover:bg-slate-200 rounded-r-xl"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right min-w-[115px]">
                        <div className="text-sm font-extrabold text-emerald-700">
                          {formatUzs(item.lineTotalUzs, lang)}
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-[11px] font-semibold text-rose-500 hover:underline mt-0.5"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Order Summary & Promo Code (4 Cols) */}
        <div className="lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-5 sticky top-28">
          <h2 className="text-lg font-extrabold text-slate-900">Order Summary</h2>

          {/* Coupon Input */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700">
              Promo / Coupon Code
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
                placeholder="SAVDOX10"
                className="flex-1 px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold uppercase"
              />
              <button
                type="button"
                onClick={() => applyCouponCode(couponInput)}
                className="px-4 py-2 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-bold"
              >
                Apply
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {coupons.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => {
                    setCouponInput(c.code);
                    applyCouponCode(c.code);
                  }}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold"
                >
                  <Tag className="w-3 h-3 inline mr-1" />
                  {c.code}
                </button>
              ))}
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>Items Subtotal ({cartGroupedBySeller.length} stores)</span>
              <span className="font-bold text-slate-900">
                {formatUzs(cartSubtotalUzs, lang)}
              </span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Estimated Delivery Fee</span>
              <span className="font-bold text-emerald-700">
                {estimatedDeliveryUzs === 0
                  ? 'FREE (Over 500k UZS)'
                  : formatUzs(estimatedDeliveryUzs, lang)}
              </span>
            </div>
            {couponDiscountUzs > 0 && (
              <div className="flex justify-between text-rose-600 font-bold">
                <span className="flex items-center gap-1">
                  Discount ({appliedCoupon?.code})
                  <button
                    type="button"
                    onClick={() => setAppliedCoupon(null)}
                    className="text-[10px] underline ml-1"
                  >
                    remove
                  </button>
                </span>
                <span>-{formatUzs(couponDiscountUzs, lang)}</span>
              </div>
            )}

            <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline">
              <span className="text-sm font-extrabold text-slate-900">Final Total</span>
              <span className="text-xl font-black text-emerald-700">
                {formatUzs(finalTotalUzs, lang)}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/checkout')}
            className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-extrabold inline-flex items-center justify-center gap-2 shadow-md transition"
          >
            <span>{t.checkout}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="p-3 rounded-xl bg-slate-50 text-[11px] text-slate-500 flex items-center gap-2">
            <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              90-Minute Express & Same-Day Delivery available across Uzbekistan at next step.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

