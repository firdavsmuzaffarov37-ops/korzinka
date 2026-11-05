import React from 'react';
import { MapPin, Navigation, Truck, Store } from 'lucide-react';

/**
 * Interactive Uzbekistan Delivery & Courier Map
 * Supports click-to-pin address coordinates in Checkout + Live Courier Route in Order Tracking
 */
export default function InteractiveMap({
  city = 'Tashkent',
  lat = 41.2995,
  lng = 69.2401,
  courierLat,
  courierLng,
  originLat,
  originLng,
  onSelectLocation,
  mode = 'checkout', // 'checkout' | 'tracking'
}) {
  const handleMapClick = (e) => {
    if (!onSelectLocation) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width;
    const yRatio = (e.clientY - rect.top) / rect.height;
    const newLat = Number((41.34 - yRatio * 0.08).toFixed(5));
    const newLng = Number((69.20 + xRatio * 0.10).toFixed(5));
    onSelectLocation({ lat: newLat, lng: newLng });
  };

  return (
    <div
      onClick={handleMapClick}
      className="relative w-full h-64 rounded-2xl overflow-hidden border border-emerald-200 bg-slate-100 select-none cursor-crosshair shadow-inner"
    >
      {/* Stylized Vector Map Grid Background */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 40%, rgba(16, 185, 129, 0.14) 0%, transparent 50%),
            radial-gradient(circle at 75% 65%, rgba(5, 150, 105, 0.12) 0%, transparent 45%),
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 28px 28px, 28px 28px',
        }}
      />

      {/* Simulated Major Roads & Canals of Tashkent / Uzbekistan */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 260">
        {/* Ankhor Canal Water Line */}
        <path
          d="M 80 0 Q 220 110 310 140 T 520 260"
          stroke="#bae6fd"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />
        {/* Ring Road & Amir Temur Avenue */}
        <path
          d="M 0 130 L 600 130 M 300 0 L 300 260 M 60 220 L 540 40"
          stroke="#ffffff"
          strokeWidth="7"
          fill="none"
        />
        <path
          d="M 0 130 L 600 130 M 300 0 L 300 260"
          stroke="#cbd5e1"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          fill="none"
        />

        {mode === 'tracking' && (
          <>
            {/* Active Courier Route Line */}
            <path
              d="M 140 70 Q 270 115 440 185"
              stroke="#059669"
              strokeWidth="4"
              strokeDasharray="8 6"
              fill="none"
            />
          </>
        )}
      </svg>

      {/* District Landmarks */}
      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-200 text-[11px] font-bold text-slate-700 flex items-center gap-1.5 shadow-sm">
        <Navigation className="w-3.5 h-3.5 text-emerald-600" />
        <span>{city} Interactive GPS Map</span>
      </div>

      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/80 text-white text-[11px] font-mono">
        GPS: {lat}, {lng}
      </div>

      {mode === 'checkout' ? (
        /* Customer Pin */
        <div
          style={{
            left: `${Math.min(85, Math.max(15, ((lng - 69.2) / 0.1) * 100))}%`,
            top: `${Math.min(80, Math.max(15, ((41.34 - lat) / 0.08) * 100))}%`,
          }}
          className="absolute -translate-x-1/2 -translate-y-full transition-all duration-200"
        >
          <div className="px-2.5 py-1 rounded-full bg-emerald-700 text-white text-[10px] font-bold shadow-md mb-1 whitespace-nowrap">
            Delivery Drop-off Pin (Click map to move)
          </div>
          <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg border-2 border-white mx-auto animate-bounce">
            <MapPin className="w-5 h-5" />
          </div>
        </div>
      ) : (
        /* Live Tracking Pins: Warehouse, Courier, Customer */
        <>
          {/* Seller Hub Origin */}
          <div className="absolute left-[22%] top-[24%] -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center shadow-md border-2 border-white">
              <Store className="w-4 h-4" />
            </div>
            <span className="mt-1 block px-2 py-0.5 rounded bg-white/90 text-[10px] font-bold text-slate-800 shadow">
              SAVDOX Hub
            </span>
          </div>

          {/* Live Courier Vehicle */}
          <div className="absolute left-[52%] top-[48%] -translate-x-1/2 -translate-y-1/2">
            <div className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold shadow mb-1 whitespace-nowrap">
              Courier Live ({courierLat || 41.312}, {courierLng || 69.261})
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg border-2 border-white mx-auto animate-pulse">
              <Truck className="w-5 h-5" />
            </div>
          </div>

          {/* Customer Destination */}
          <div className="absolute left-[74%] top-[70%] -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-md border-2 border-white">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="mt-1 block px-2 py-0.5 rounded bg-white/90 text-[10px] font-bold text-rose-700 shadow">
              Your Address
            </span>
          </div>
        </>
      )}
    </div>
  );
}

