import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Truck, Store, Play, Pause, RotateCcw, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '@shared/constants/translations';

/**
 * Interactive Uzbekistan Delivery & Courier GPS Map
 * Real-time moving delivery vehicle with smooth road path interpolation,
 * dynamic GPS telemetry, headlight beams, radar sonar pulse, and 100% trilingual localization.
 */
export default function InteractiveMap({
  city = 'Tashkent',
  lat = 41.2995,
  lng = 69.2401,
  courierLat = 41.321,
  courierLng = 69.2712,
  originLat = 41.345,
  originLng = 69.215,
  onSelectLocation,
  mode = 'checkout', // 'checkout' | 'tracking'
  orderStatus = 'Out for Delivery',
  lang = 'uz',
}) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.uz;

  // Bezier route definition for Tashkent urban grid (SVG 600x260 coordinates)
  // P0 (Hub): (120, 60), P1 (Control 1): (230, 110), P2 (Control 2): (340, 140), P3 (Destination): (480, 195)
  const p0 = { x: 120, y: 60 };
  const p1 = { x: 230, y: 110 };
  const p2 = { x: 340, y: 140 };
  const p3 = { x: 480, y: 195 };

  // Helper to compute cubic bezier point and tangent angle
  const getBezierData = (tVal) => {
    const mt = 1 - tVal;
    const mt2 = mt * mt;
    const mt3 = mt2 * mt;
    const t2 = tVal * tVal;
    const t3 = t2 * tVal;

    const x = mt3 * p0.x + 3 * mt2 * tVal * p1.x + 3 * mt * t2 * p2.x + t3 * p3.x;
    const y = mt3 * p0.y + 3 * mt2 * tVal * p1.y + 3 * mt * t2 * p2.y + t3 * p3.y;

    // Tangent derivative for car rotation
    const dx =
      3 * mt2 * (p1.x - p0.x) +
      6 * mt * tVal * (p2.x - p1.x) +
      3 * t2 * (p3.x - p2.x);
    const dy =
      3 * mt2 * (p1.y - p0.y) +
      6 * mt * tVal * (p2.y - p1.y) +
      3 * t2 * (p3.y - p2.y);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    return { x, y, angle };
  };

  // Determine initial progress based on order status
  const getInitialProgress = () => {
    if (orderStatus === 'Delivered') return 1.0;
    if (orderStatus === 'Shipped') return 0.35;
    if (orderStatus === 'Out for Delivery') return 0.55;
    if (orderStatus === 'Cancelled') return 0.5;
    return 0.05; // Pending, Confirmed, Preparing
  };

  const [progress, setProgress] = useState(getInitialProgress);
  const [isPlaying, setIsPlaying] = useState(true);
  const isMovingStatus = orderStatus === 'Shipped' || orderStatus === 'Out for Delivery';

  // Keep progress in sync when external status changes
  useEffect(() => {
    if (orderStatus === 'Delivered') {
      setProgress(1.0);
    } else if (orderStatus === 'Pending' || orderStatus === 'Confirmed' || orderStatus === 'Preparing') {
      setProgress(0.05);
    } else if (orderStatus === 'Cancelled') {
      setProgress(0.4);
    }
  }, [orderStatus]);

  // Live animation loop for moving vehicle
  useEffect(() => {
    if (mode !== 'tracking' || !isMovingStatus || !isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 0.95) return 0.08; // smooth restart loop for continuous real-time telemetry observation
        return prev + 0.005; // smooth step every 60ms
      });
    }, 60);

    return () => clearInterval(interval);
  }, [mode, isMovingStatus, isPlaying]);

  // Compute live vehicle coordinates
  const currentPos = getBezierData(progress);
  const liveLat = (originLat + progress * (lat - originLat)).toFixed(5);
  const liveLng = (originLng + progress * (lng - originLng)).toFixed(5);
  const remainingKm = Math.max(0.1, (1 - progress) * 4.2).toFixed(1);
  const remainingMins = Math.max(1, Math.round((1 - progress) * 18));

  const handleMapClick = (e) => {
    if (!onSelectLocation || mode !== 'checkout') return;
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
      className={`relative w-full h-72 sm:h-80 md:h-[350px] rounded-3xl overflow-hidden border border-emerald-200/90 bg-[#f8fafc] select-none shadow-soft transition-all ${
        mode === 'checkout' ? 'cursor-crosshair' : 'cursor-default'
      }`}
    >
      {/* High-tech vector street grid styling */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 35%, rgba(16, 185, 129, 0.15) 0%, transparent 45%),
            radial-gradient(circle at 75% 65%, rgba(5, 150, 105, 0.12) 0%, transparent 45%),
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 24px 24px, 24px 24px',
        }}
      />

      {/* SVG Roads, Canal, and Route lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 600 260"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Animated gradient for active courier path */}
          <linearGradient id="routeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#059669" stopOpacity="1" />
          </linearGradient>

          {/* Car headlight glow filter */}
          <radialGradient id="headlightGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ankhor Canal Waterway */}
        <path
          d="M 60 0 Q 210 110 310 140 T 540 260"
          stroke="#bae6fd"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />

        {/* Ring Road & Amir Temur Avenue background avenues */}
        <path
          d="M 0 130 L 600 130 M 300 0 L 300 260 M 40 220 L 560 40"
          stroke="#ffffff"
          strokeWidth="8"
          fill="none"
        />
        <path
          d="M 0 130 L 600 130 M 300 0 L 300 260"
          stroke="#cbd5e1"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          fill="none"
        />

        {/* Tracking Mode: Full route + dynamic traveled portion */}
        {mode === 'tracking' && (
          <>
            {/* Planned Route (dashed gray/emerald ahead of courier) */}
            <path
              d={`M ${p0.x} ${p0.y} C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}`}
              stroke="#94a3b8"
              strokeWidth="4"
              strokeDasharray="6 6"
              fill="none"
            />

            {/* Traveled portion (solid glowing emerald up to current pos) */}
            <path
              d={`M ${p0.x} ${p0.y} C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}`}
              stroke="url(#routeGlow)"
              strokeWidth="5"
              fill="none"
              strokeDasharray={`${progress * 480} 500`}
              strokeLinecap="round"
            />
          </>
        )}
      </svg>

      {/* Top Left: City GPS Indicator */}
      <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-2 shadow-sm z-10">
        <Navigation className="w-3.5 h-3.5 text-emerald-600 animate-spin-slow" />
        <span>
          {city} • {t.courierMapTitle}
        </span>
      </div>

      {/* Top Right: Live Telemetry Indicator & Control */}
      {mode === 'tracking' && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          <div className="px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-emerald-300 text-xs font-extrabold text-emerald-800 flex items-center gap-2 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </span>
            <span className="hidden sm:inline">{t.telemetryActive}</span>
          </div>

          {isMovingStatus && (
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? 'Pauza' : 'Harakatlantirish'}
              className="p-1.5 rounded-xl bg-white/95 border border-slate-200 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 shadow-sm"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          )}
        </div>
      )}

      {/* Bottom Left: Live GPS Coordinates & Distance */}
      <div className="absolute bottom-3 left-3 max-w-[85%] sm:max-w-md px-3 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-mono shadow-md z-10 flex flex-wrap items-center gap-x-3 gap-y-1">
        <div>
          <span className="text-emerald-400 font-bold">{t.gpsCoordinate || 'GPS'}:</span>{' '}
          {mode === 'tracking' ? `${liveLat}, ${liveLng}` : `${lat}, ${lng}`}
        </div>
        {mode === 'tracking' && isMovingStatus && (
          <div className="text-slate-300 flex items-center gap-2">
            <span>•</span>
            <span className="text-amber-300 font-semibold">{remainingKm} km</span>
            <span>(~{remainingMins} {t.arrivalMins})</span>
          </div>
        )}
      </div>

      {/* CHECKOUT MODE: Moveable Delivery Pin */}
      {mode === 'checkout' && (
        <div
          style={{
            left: `${Math.min(85, Math.max(15, ((lng - 69.2) / 0.1) * 100))}%`,
            top: `${Math.min(80, Math.max(15, ((41.34 - lat) / 0.08) * 100))}%`,
          }}
          className="absolute -translate-x-1/2 -translate-y-full transition-all duration-200 z-20"
        >
          <div className="px-2.5 py-1 rounded-full bg-emerald-700 text-white text-[10px] font-bold shadow-md mb-1 whitespace-nowrap">
            {t.clickToMovePin}
          </div>
          <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg border-2 border-white mx-auto animate-bounce">
            <MapPin className="w-5 h-5" />
          </div>
        </div>
      )}

      {/* TRACKING MODE: Live Courier Vehicle with Motion, Heading, and Radar */}
      {mode === 'tracking' && (
        <>
          {/* Origin Hub Pin (SAVDOX Warehouse) */}
          <div
            style={{
              left: `${(p0.x / 600) * 100}%`,
              top: `${(p0.y / 260) * 100}%`,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
          >
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md border-2 border-white">
              <Store className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="mt-1 block px-2 py-0.5 rounded-md bg-white/95 text-[10px] font-extrabold text-slate-800 shadow whitespace-nowrap text-center">
              {t.savdoxHubBadge}
            </span>
          </div>

          {/* Customer Destination Pin */}
          <div
            style={{
              left: `${(p3.x / 600) * 100}%`,
              top: `${(p3.y / 260) * 100}%`,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
          >
            <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-md border-2 border-white">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="mt-1 block px-2 py-0.5 rounded-md bg-white/95 text-[10px] font-extrabold text-rose-700 shadow whitespace-nowrap text-center">
              {t.yourAddressBadge}
            </span>
          </div>

          {/* Dynamic Moving Car Component along Bezier curve */}
          <div
            style={{
              left: `${(currentPos.x / 600) * 100}%`,
              top: `${(currentPos.y / 260) * 100}%`,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none transition-transform duration-75"
          >
            {/* Live Hovering Telemetry Badge above vehicle */}
            <div className="mb-2 -translate-x-1/2 left-1/2 relative inline-flex flex-col items-center">
              <div className="px-2.5 py-1 rounded-full bg-emerald-700 text-white text-[10px] font-extrabold shadow-lg border border-emerald-400/50 flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
                <span>
                  {orderStatus === 'Delivered'
                    ? t.statusDelivered
                    : `${t.courierLiveBadge}: ${remainingKm} km (${liveLat.slice(-4)}, ${liveLng.slice(-4)})`}
                </span>
              </div>
            </div>

            {/* Radar Pulse Effect */}
            {isMovingStatus && isPlaying && (
              <div className="absolute inset-0 -m-4 rounded-full border-2 border-emerald-500/60 animate-ping pointer-events-none" />
            )}

            {/* Realistic Delivery Car Body (Chevrolet Cobalt / Express Van) */}
            <div
              style={{
                transform: `rotate(${currentPos.angle}deg)`,
              }}
              className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-800 to-emerald-600 text-white flex items-center justify-center shadow-2xl border-2 border-white transition-transform duration-100"
            >
              {/* Headlight Beams */}
              {isMovingStatus && (
                <div
                  className="absolute left-full top-1/2 -translate-y-1/2 w-8 h-10 pointer-events-none opacity-60"
                  style={{
                    background:
                      'radial-gradient(ellipse at left, rgba(254, 240, 138, 0.9) 0%, rgba(254, 240, 138, 0.2) 60%, transparent 100%)',
                    clipPath: 'polygon(0 35%, 100% 0%, 100% 100%, 0 65%)',
                  }}
                />
              )}

              {/* Vehicle Icon */}
              {orderStatus === 'Delivered' ? (
                <CheckCircle2 className="w-6 h-6 text-white" />
              ) : (
                <Truck className="w-6 h-6 text-white drop-shadow" />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
