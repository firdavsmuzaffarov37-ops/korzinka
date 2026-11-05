import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Truck,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Package,
  ShieldCheck,
  AlertCircle,
  Star,
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { ORDER_STATUSES } from '@shared/types';
import { formatUzs } from '@shared/utils/formatters';
import { TRANSLATIONS } from '@shared/constants/translations';
import InteractiveMap from '../components/InteractiveMap';

export default function OrderTrackingPage() {
  const { orders, updateOrderStatus, lang, showToast } = useMarketplace();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.uz;
  const [searchParams] = useSearchParams();
  const requestedOrderNum = searchParams.get('order');

  const [selectedOrderId, setSelectedOrderId] = useState(
    () =>
      orders.find((o) => o.orderNumber === requestedOrderNum)?.id ||
      orders[0]?.id ||
      ''
  );

  const activeOrder =
    orders.find((o) => o.id === selectedOrderId || o.orderNumber === requestedOrderNum) ||
    orders[0];

  const getStatusLabel = (status) => {
    switch (status) {
      case 'Pending':
        return t.statusPending;
      case 'Confirmed':
        return t.statusConfirmed;
      case 'Preparing':
        return t.statusPreparing;
      case 'Shipped':
        return t.statusShipped;
      case 'Out for Delivery':
        return t.statusOutForDelivery;
      case 'Delivered':
        return t.statusDelivered;
      case 'Cancelled':
        return t.statusCancelled;
      default:
        return status;
    }
  };

  if (!activeOrder) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="text-2xl font-black text-slate-900">{t.noOrdersTitle}</h1>
        <Link
          to="/catalog"
          className="inline-block px-6 py-3 rounded-2xl bg-emerald-600 text-white text-xs font-bold shadow-md hover:bg-emerald-700 transition"
        >
          {t.startShoppingBtn}
        </Link>
      </div>
    );
  }

  const activeSteps = ORDER_STATUSES.filter((s) => s !== 'Cancelled');
  const currentStepIndex = activeSteps.indexOf(activeOrder.orderStatus);

  const getPaymentStatusText = (status) => {
    if (status === 'PAID') return t.paymentStatusPaid;
    return t.paymentStatusPending;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
      {/* Header & Order Selector - Fully responsive on mobile, tablet, and notebook */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] sm:text-xs font-extrabold">
            <Truck className="w-3.5 h-3.5" /> {t.trackingPartnerBadge}
          </span>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            {t.liveTrackingTitle} • <span className="text-emerald-700">{activeOrder.orderNumber}</span>
          </h1>
          <p className="text-xs text-slate-500">
            {t.trackingCodeLabel} <span className="font-mono font-bold text-slate-800">{activeOrder.trackingCode}</span>
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto w-full md:w-auto">
          <label className="text-xs font-bold text-slate-600 shrink-0">{t.selectOrderLabel}</label>
          <select
            value={activeOrder.id}
            onChange={(e) => setSelectedOrderId(e.target.value)}
            className="w-full md:w-auto px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {orders.map((o) => (
              <option key={o.id} value={o.id}>
                {o.orderNumber} — {getStatusLabel(o.orderStatus)} ({formatUzs(o.totalUzs, lang)})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 7-Stage Status Progress Bar */}
      <div className="rounded-3xl bg-white border border-slate-200 p-4 sm:p-6 shadow-soft space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="text-sm font-extrabold text-slate-900">
            {t.deliveryStatusLabel}{' '}
            <span
              className={
                activeOrder.orderStatus === 'Cancelled'
                  ? 'text-rose-600 font-black'
                  : 'text-emerald-700 font-black'
              }
            >
              {getStatusLabel(activeOrder.orderStatus)}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full self-start sm:self-auto border border-emerald-200/60">
            <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>
              {t.estimatedArrivalLabel}{' '}
              {activeOrder.orderStatus === 'Delivered'
                ? `${t.deliveredStatus} ✓`
                : `${activeOrder.courier?.etaMinutes || 20} ${t.arrivalMins} (${activeOrder.deliveryTimeSlot})`}
            </span>
          </div>
        </div>

        {/* Visual Stepper - Responsive 2 cols on mobile, 3 on tablet, 6 on notebook */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {activeSteps.map((step, index) => {
            const isCompleted =
              activeOrder.orderStatus !== 'Cancelled' && index <= currentStepIndex;
            const isCurrent = activeOrder.orderStatus === step;
            return (
              <div
                key={step}
                className={`p-2.5 sm:p-3 rounded-2xl border text-center transition-all ${
                  isCurrent
                    ? 'border-emerald-600 bg-emerald-50/90 font-black text-emerald-950 shadow-sm ring-1 ring-emerald-500'
                    : isCompleted
                    ? 'border-emerald-200 bg-emerald-50/40 text-emerald-800 font-bold'
                    : 'border-slate-200 bg-slate-50 text-slate-400 font-medium'
                }`}
              >
                <div className="w-6 h-6 rounded-full mx-auto mb-1 flex items-center justify-center text-xs font-black bg-white border border-current shadow-xs">
                  {isCompleted ? '✓' : index + 1}
                </div>
                <div className="text-xs leading-snug">{getStatusLabel(step)}</div>
              </div>
            );
          })}
        </div>

        {/* Interactive Status Simulator Controls */}
        <div className="pt-3 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <span className="text-[11px] font-bold text-slate-500">
            {t.simulateStageTitle}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {ORDER_STATUSES.map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => updateOrderStatus(activeOrder.id, st)}
                className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition shadow-xs ${
                  activeOrder.orderStatus === st
                    ? 'bg-emerald-700 text-white ring-2 ring-emerald-600'
                    : st === 'Cancelled'
                    ? 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200/60'
                    : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200/80'
                }`}
              >
                {getStatusLabel(st)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Map + Courier & Delivery Details Grid - Responsive for mobile, tablet, and notebook */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Interactive Map (7 Cols on notebook, full width on phone & tablet) */}
        <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-4 sm:p-5 shadow-soft space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900">
              {t.courierMapTitle} ({activeOrder.city})
            </h2>
            <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {t.telemetryActive}
            </span>
          </div>

          <InteractiveMap
            city={activeOrder.city}
            lat={activeOrder.courier?.destLat || 41.2995}
            lng={activeOrder.courier?.destLng || 69.2401}
            courierLat={activeOrder.courier?.currentLat}
            courierLng={activeOrder.courier?.currentLng}
            originLat={activeOrder.courier?.originLat}
            originLng={activeOrder.courier?.originLng}
            mode="tracking"
            orderStatus={activeOrder.orderStatus}
            lang={lang}
          />
        </div>

        {/* Courier & Address Info (5 Cols on notebook, full width on phone & tablet) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Courier Card */}
          <div className="rounded-3xl bg-white border border-slate-200 p-4 sm:p-5 shadow-soft space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-lg shrink-0 shadow-md">
                  {activeOrder.courier?.name?.[0] || 'A'}
                </div>
                <div className="min-w-0 truncate">
                  <div className="text-sm font-extrabold text-slate-900 truncate">
                    {activeOrder.courier?.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {activeOrder.courier?.vehicle}
                  </div>
                  <div className="text-xs font-bold text-amber-600 flex items-center gap-1 mt-0.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                    <span>{activeOrder.courier?.rating}</span>
                    <span className="text-slate-500 font-normal">• {t.verifiedCourier}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  showToast(
                    lang === 'uz'
                      ? `Kuryer bilan bogʻlanilmoqda: ${activeOrder.courier?.phone}`
                      : lang === 'ru'
                      ? `Связываемся с курьером: ${activeOrder.courier?.phone}`
                      : `Connecting to courier: ${activeOrder.courier?.phone}`
                  )
                }
                className="px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow-md transition shrink-0"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t.callCourierBtn}</span>
              </button>
            </div>
          </div>

          {/* Delivery Address & Fee Summary */}
          <div className="rounded-3xl bg-white border border-slate-200 p-4 sm:p-5 shadow-soft space-y-3 text-xs">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t.destinationAndFinancials}</span>
            </h3>
            <div className="space-y-2 text-slate-600">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-bold text-slate-700">{t.recipientLabel}</span>
                <span className="text-slate-900 font-medium">
                  {activeOrder.customerName} ({activeOrder.customerPhone})
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-bold text-slate-700">{t.orderAddressLabel}</span>
                <span className="text-slate-900 font-medium text-right">
                  {activeOrder.city}, {activeOrder.district}, {activeOrder.streetAddress}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700">{t.deliveryFeeLabel}</span>
                <span className="text-emerald-700 font-bold">
                  {activeOrder.deliveryFeeUzs === 0
                    ? t.freeExpressPromo
                    : formatUzs(activeOrder.deliveryFeeUzs, lang)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700">{t.paymentMethodLabel}</span>
                <span className="uppercase font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  {activeOrder.paymentMethod} ({getPaymentStatusText(activeOrder.paymentStatus)})
                </span>
              </div>
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-sm sm:text-base font-black text-slate-900">
                <span>{t.orderTotalLabel}</span>
                <span className="text-emerald-700">
                  {formatUzs(activeOrder.totalUzs, lang)}
                </span>
              </div>
            </div>
          </div>

          {/* Ordered Items */}
          <div className="rounded-3xl bg-white border border-slate-200 p-4 sm:p-5 shadow-soft space-y-3">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
              <Package className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {t.itemsInShipment} ({activeOrder.items?.length || 0})
              </span>
            </h3>
            <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
              {activeOrder.items?.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-3 text-xs p-2 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-11 h-11 rounded-lg object-cover shrink-0 border border-slate-200 bg-white"
                    />
                    <div className="min-w-0">
                      <div className="font-bold text-slate-900 truncate">{item.name}</div>
                      <div className="text-[11px] text-slate-500">
                        {t.sellerLabelShort} {item.sellerName} • {t.quantityShort} {item.quantity}
                      </div>
                    </div>
                  </div>
                  <span className="font-bold text-emerald-700 shrink-0 text-right">
                    {formatUzs(item.unitPriceUzs * item.quantity, lang)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
