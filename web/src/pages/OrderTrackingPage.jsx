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
import InteractiveMap from '../components/InteractiveMap';

export default function OrderTrackingPage() {
  const { orders, updateOrderStatus, lang, showToast } = useMarketplace();
  const [searchParams] = useSearchParams();
  const requestedOrderNum = searchParams.get('order');

  const [selectedOrderId, setSelectedOrderId] = useState(
    () =>
      orders.find((o) => o.orderNumber === requestedOrderNum)?.id ||
      orders[0]?.id ||
      ''
  );

  const activeOrder =
    orders.find((o) => o.id === selectedOrderId || o.orderNumber === selectedOrderNum) ||
    orders[0];

  if (!activeOrder) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="text-2xl font-black text-slate-900">No Active Orders Yet</h1>
        <Link
          to="/catalog"
          className="inline-block px-6 py-3 rounded-2xl bg-emerald-600 text-white text-xs font-bold"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  const activeSteps = ORDER_STATUSES.filter((s) => s !== 'Cancelled');
  const currentStepIndex = activeSteps.indexOf(activeOrder.orderStatus);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      {/* Header & Order Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold mb-2">
            <Truck className="w-3.5 h-3.5" /> SAVDOX Fast Delivery Partner Network
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            Live Order Tracking • {activeOrder.orderNumber}
          </h1>
          <p className="text-xs text-slate-500">
            Tracking Code: <span className="font-mono font-bold text-slate-700">{activeOrder.trackingCode}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-slate-600">Select Order:</label>
          <select
            value={activeOrder.id}
            onChange={(e) => setSelectedOrderId(e.target.value)}
            className="px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-white"
          >
            {orders.map((o) => (
              <option key={o.id} value={o.id}>
                {o.orderNumber} — {o.orderStatus} ({formatUzs(o.totalUzs, lang)})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 7-Stage Status Progress Bar */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm font-extrabold text-slate-900">
            Delivery Status:{' '}
            <span
              className={
                activeOrder.orderStatus === 'Cancelled'
                  ? 'text-rose-600'
                  : 'text-emerald-700'
              }
            >
              {activeOrder.orderStatus}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              Estimated Arrival:{' '}
              {activeOrder.orderStatus === 'Delivered'
                ? 'Delivered ✓'
                : `${activeOrder.courier?.etaMinutes || 20} mins (${activeOrder.deliveryTimeSlot})`}
            </span>
          </div>
        </div>

        {/* Visual Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
          {activeSteps.map((step, index) => {
            const isCompleted =
              activeOrder.orderStatus !== 'Cancelled' && index <= currentStepIndex;
            const isCurrent = activeOrder.orderStatus === step;
            return (
              <div
                key={step}
                className={`p-3 rounded-2xl border text-center transition ${
                  isCurrent
                    ? 'border-emerald-600 bg-emerald-50 font-extrabold text-emerald-950 shadow-sm'
                    : isCompleted
                    ? 'border-emerald-200 bg-emerald-50/40 text-emerald-800 font-bold'
                    : 'border-slate-200 bg-slate-50 text-slate-400 font-medium'
                }`}
              >
                <div className="w-6 h-6 rounded-full mx-auto mb-1 flex items-center justify-center text-xs font-black bg-white border border-current">
                  {isCompleted ? '✓' : index + 1}
                </div>
                <div className="text-xs">{step}</div>
              </div>
            );
          })}
        </div>

        {/* Interactive Status Simulator Controls */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] font-bold text-slate-500">
            Simulate Live Dispatch Stage (All 7 Statuses):
          </span>
          <div className="flex flex-wrap gap-1.5">
            {ORDER_STATUSES.map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => updateOrderStatus(activeOrder.id, st)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                  activeOrder.orderStatus === st
                    ? 'bg-emerald-700 text-white'
                    : st === 'Cancelled'
                    ? 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                    : 'bg-slate-100 text-slate-700 hover:bg-emerald-50'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Map + Courier & Delivery Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Interactive Map (7 Cols) */}
        <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-5 shadow-soft space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-extrabold text-slate-900">
              Interactive Courier GPS Map ({activeOrder.city})
            </h2>
            <span className="text-xs text-emerald-700 font-semibold">
              Real-time Telemetry Active
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
          />
        </div>

        {/* Courier & Address Info (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Courier Card */}
          <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-soft space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-lg">
                  {activeOrder.courier?.name?.[0] || 'A'}
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">
                    {activeOrder.courier?.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {activeOrder.courier?.vehicle}
                  </div>
                  <div className="text-xs font-bold text-amber-600 flex items-center gap-1 mt-0.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {activeOrder.courier?.rating} VerifiedSAVDOX Courier
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  showToast(`Calling courier ${activeOrder.courier?.phone}...`)
                }
                className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" /> Call
              </button>
            </div>
          </div>

          {/* Delivery Address & Fee Summary */}
          <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-soft space-y-3 text-xs">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-600" />
              Delivery Destination & Financials
            </h3>
            <div className="space-y-1.5 text-slate-600">
              <div>
                <strong>Recipient:</strong> {activeOrder.customerName} ({activeOrder.customerPhone})
              </div>
              <div>
                <strong>Address:</strong> {activeOrder.city}, {activeOrder.district},{' '}
                {activeOrder.streetAddress}
              </div>
              <div>
                <strong>Delivery Fee:</strong>{' '}
                {activeOrder.deliveryFeeUzs === 0
                  ? 'FREE Express Promo'
                  : formatUzs(activeOrder.deliveryFeeUzs, lang)}
              </div>
              <div>
                <strong>Payment Method:</strong>{' '}
                <span className="uppercase font-bold text-emerald-800">
                  {activeOrder.paymentMethod} ({activeOrder.paymentStatus})
                </span>
              </div>
              <div className="pt-2 border-t border-slate-100 flex justify-between text-sm font-black text-slate-900">
                <span>Order Total</span>
                <span className="text-emerald-700">
                  {formatUzs(activeOrder.totalUzs, lang)}
                </span>
              </div>
            </div>
          </div>

          {/* Ordered Items */}
          <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-soft space-y-2.5">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
              <Package className="w-4 h-4 text-emerald-600" />
              Items in Shipment ({activeOrder.items?.length || 0})
            </h3>
            {activeOrder.items?.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5 min-w-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-lg object-cover shrink-0"
                  />
                  <div className="truncate">
                    <div className="font-bold text-slate-900 truncate">{item.name}</div>
                    <div className="text-slate-500">
                      Seller: {item.sellerName} • Qty: {item.quantity}
                    </div>
                  </div>
                </div>
                <span className="font-bold text-emerald-700 shrink-0">
                  {formatUzs(item.unitPriceUzs * item.quantity, lang)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

