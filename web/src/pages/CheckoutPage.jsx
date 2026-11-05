import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  MapPin,
  Truck,
  CreditCard,
  ShieldCheck,
  Gift,
  CheckCircle2,
  Clock,
  Lock,
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { DELIVERY_METHODS, PAYMENT_PROVIDERS, UZBEKISTAN_CITIES } from '@shared/types';
import { formatUzs } from '@shared/utils/formatters';
import InteractiveMap from '../components/InteractiveMap';
import { initiatePaymentSession } from '../services/paymentService';

const TIME_SLOTS = [
  'ASAP (Within 60 - 90 mins)',
  'Today, 14:00 - 18:00',
  'Today, 18:00 - 22:00',
  'Tomorrow, 09:00 - 13:00',
];

export default function CheckoutPage() {
  const {
    lang,
    user,
    selectedCity,
    enrichedCart,
    cartSubtotalUzs,
    couponDiscountUzs,
    bonusWallet,
    createOrder,
  } = useMarketplace();

  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState(user?.fullName || 'Temurbek Yoqubov');
  const [customerPhone, setCustomerPhone] = useState(user?.phone || '+998 90 945 12 34');
  const [city, setCity] = useState(selectedCity?.nameEn || 'Tashkent');
  const [district, setDistrict] = useState(user?.district || 'Yunusabad');
  const [streetAddress, setStreetAddress] = useState(
    user?.streetAddress || 'Amir Temur Avenue 107B, Apt 42'
  );
  const [coords, setCoords] = useState({ lat: 41.2995, lng: 69.2401 });
  const [deliveryMethodId, setDeliveryMethodId] = useState('express_2h');
  const [deliveryTimeSlot, setDeliveryTimeSlot] = useState(TIME_SLOTS[0]);
  const [paymentMethodId, setPaymentMethodId] = useState('click');
  const [useBonusPoints, setUseBonusPoints] = useState(false);
  const [customerNotes, setCustomerNotes] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [gatewaySessionInfo, setGatewaySessionInfo] = useState(null);

  const selectedDeliveryObj =
    DELIVERY_METHODS.find((m) => m.id === deliveryMethodId) || DELIVERY_METHODS[0];

  const deliveryFeeUzs =
    cartSubtotalUzs >= selectedDeliveryObj.freeThresholdUzs &&
    selectedDeliveryObj.freeThresholdUzs > 0
      ? 0
      : selectedDeliveryObj.feeUzs;

  const bonusPointsUzs = useBonusPoints
    ? Math.min(bonusWallet.pointsBalance, Math.round(cartSubtotalUzs * 0.25))
    : 0;

  const finalTotalUzs = Math.max(
    0,
    cartSubtotalUzs + deliveryFeeUzs - couponDiscountUzs - bonusPointsUzs
  );

  if (enrichedCart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="text-2xl font-black text-slate-900">No items to checkout</h1>
        <Link
          to="/catalog"
          className="inline-block px-6 py-3 rounded-2xl bg-emerald-600 text-white text-xs font-bold"
        >
          Return to Marketplace
        </Link>
      </div>
    );
  }

  const handleCompleteCheckout = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const tempOrderRef = `SVX-${Date.now().toString().slice(-5)}`;
    const session = await initiatePaymentSession({
      orderId: tempOrderRef,
      provider: paymentMethodId,
      amountUzs: finalTotalUzs,
    });
    setGatewaySessionInfo(session);

    const createdOrder = createOrder({
      customerName,
      customerPhone,
      city,
      district,
      streetAddress,
      lat: coords.lat,
      lng: coords.lng,
      deliveryMethod: deliveryMethodId,
      deliveryTimeSlot,
      deliveryFeeUzs,
      paymentMethod: paymentMethodId,
      useBonusPointsUzs: bonusPointsUzs,
      customerNotes,
    });

    setTimeout(() => {
      setIsProcessing(false);
      navigate(`/orders?order=${createdOrder.orderNumber}`);
    }, 600);
  };

  const cityObj =
    UZBEKISTAN_CITIES.find((c) => c.nameEn === city) || UZBEKISTAN_CITIES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
          Secure Checkout & Fast Delivery
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Official Click, Payme & Uzum Bank tokenized integration — SAVDOX never stores raw card numbers or CVV
        </p>
      </div>

      <form
        onSubmit={handleCompleteCheckout}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
      >
        {/* Left Form Steps (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* STEP 1: Customer Information & Delivery Address + Map */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-4">
            <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              1. Customer & Delivery Location
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Recipient Full Name
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone Number (+998)
                </label>
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">City</label>
                <select
                  value={city}
                  onChange={(e) => {
                    const nextCity = e.target.value;
                    setCity(nextCity);
                    const found = UZBEKISTAN_CITIES.find((c) => c.nameEn === nextCity);
                    if (found) {
                      setDistrict(found.districts[0]);
                      setCoords({ lat: found.lat, lng: found.lng });
                    }
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold bg-white"
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
                  District / Tuman
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold bg-white"
                >
                  {cityObj.districts.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Street Address, Building & Apartment
              </label>
              <input
                type="text"
                required
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold"
              />
            </div>

            {/* Interactive Map Location Pin */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Interactive Map Drop-off Pin (Click anywhere on the map to move pin)
              </label>
              <InteractiveMap
                city={city}
                lat={coords.lat}
                lng={coords.lng}
                onSelectLocation={(newCoords) => setCoords(newCoords)}
                mode="checkout"
                lang={lang}
              />
            </div>
          </div>

          {/* STEP 2: Delivery Method & Time Slot */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-4">
            <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Truck className="w-5 h-5 text-emerald-600" />
              2. Delivery Method & Preferred Time
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DELIVERY_METHODS.map((method) => {
                const isFree =
                  cartSubtotalUzs >= method.freeThresholdUzs &&
                  method.freeThresholdUzs > 0;
                return (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setDeliveryMethodId(method.id)}
                    className={`p-4 rounded-2xl border-2 text-left transition flex flex-col justify-between ${
                      deliveryMethodId === method.id
                        ? 'border-emerald-600 bg-emerald-50/50'
                        : 'border-slate-200 hover:border-emerald-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-slate-900">
                          {lang === 'uz'
                            ? method.nameUz
                            : lang === 'ru'
                            ? method.nameRu
                            : method.nameEn}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                          {method.badge}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        ETA: {method.etaText}
                      </div>
                    </div>
                    <div className="mt-2 text-xs font-black text-emerald-700">
                      {isFree || method.feeUzs === 0
                        ? 'FREE'
                        : formatUzs(method.feeUzs, lang)}
                    </div>
                  </button>
                );
              })}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                Delivery Time Slot
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setDeliveryTimeSlot(slot)}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition ${
                      deliveryTimeSlot === slot
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* STEP 3: Payment Method (Click, Payme, Uzum Bank, Cash on Delivery) */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-emerald-600" />
                3. Official Uzbekistan Payment Method
              </h2>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <Lock className="w-3 h-3 text-emerald-600" />
                Sandbox Tokenized Mode • No Raw Card/CVV Stored
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PAYMENT_PROVIDERS.map((prov) => (
                <button
                  key={prov.id}
                  type="button"
                  onClick={() => setPaymentMethodId(prov.id)}
                  className={`p-4 rounded-2xl border-2 text-left transition ${
                    paymentMethodId === prov.id
                      ? 'border-emerald-600 bg-emerald-50/50 shadow-sm'
                      : 'border-slate-200 hover:border-emerald-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-black text-slate-900">
                      {prov.name}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                      style={{ backgroundColor: prov.color }}
                    >
                      {prov.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{prov.subtitle}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary & Confirm Button (4 Cols) */}
        <div className="lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-5 sticky top-28">
          <h2 className="text-lg font-extrabold text-slate-900">Order Summary</h2>

          {/* Mini Items List */}
          <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1 divide-y divide-slate-100">
            {enrichedCart.map((item) => (
              <div key={item.id} className="pt-2.5 first:pt-0 flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 min-w-0">
                  <img
                    src={item.product.images?.[0]}
                    alt=""
                    className="w-10 h-10 rounded-lg object-cover shrink-0"
                  />
                  <div className="truncate">
                    <div className="font-bold text-slate-900 truncate">
                      {item.product.nameEn}
                    </div>
                    <div className="text-slate-400">
                      {item.quantity} × {formatUzs(item.unitPriceUzs, lang)}
                    </div>
                  </div>
                </div>
                <span className="font-extrabold text-slate-900 shrink-0">
                  {formatUzs(item.lineTotalUzs, lang)}
                </span>
              </div>
            ))}
          </div>

          {/* SAVDOX Bonus Toggle */}
          <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-amber-600 shrink-0" />
              <div>
                <div className="text-xs font-extrabold text-slate-900">
                  Use SAVDOX Bonus Points
                </div>
                <div className="text-[11px] text-slate-600">
                  Available: {bonusWallet.pointsBalance.toLocaleString()} UZS
                </div>
              </div>
            </div>
            <input
              type="checkbox"
              checked={useBonusPoints}
              onChange={(e) => setUseBonusPoints(e.target.checked)}
              className="w-4 h-4 rounded text-emerald-600"
            />
          </div>

          {/* Totals */}
          <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>Products Subtotal</span>
              <span className="font-bold text-slate-900">
                {formatUzs(cartSubtotalUzs, lang)}
              </span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Delivery ({selectedDeliveryObj.nameEn})</span>
              <span className="font-bold text-emerald-700">
                {deliveryFeeUzs === 0 ? 'FREE' : formatUzs(deliveryFeeUzs, lang)}
              </span>
            </div>
            {couponDiscountUzs > 0 && (
              <div className="flex justify-between text-rose-600 font-bold">
                <span>Promo Coupon Discount</span>
                <span>-{formatUzs(couponDiscountUzs, lang)}</span>
              </div>
            )}
            {bonusPointsUzs > 0 && (
              <div className="flex justify-between text-amber-700 font-bold">
                <span>SAVDOX Bonus Redeemed</span>
                <span>-{formatUzs(bonusPointsUzs, lang)}</span>
              </div>
            )}
            <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline">
              <span className="text-sm font-extrabold text-slate-900">Total to Pay</span>
              <span className="text-xl font-black text-emerald-700">
                {formatUzs(finalTotalUzs, lang)}
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-sm font-extrabold shadow-md transition flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>
              {isProcessing
                ? 'Authorizing Sandbox Session...'
                : `Confirm & Pay via ${paymentMethodId.toUpperCase()}`}
            </span>
          </button>

          {gatewaySessionInfo && (
            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900 font-mono">
              Gateway TX: {gatewaySessionInfo.transactionId}
            </div>
          )}

          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              100% Buyer Protection: Funds are held in escrow until courier delivery is confirmed.
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

