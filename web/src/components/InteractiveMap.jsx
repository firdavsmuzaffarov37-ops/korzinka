import React, { useState, useEffect, useMemo } from 'react';
import {
  MapPin,
  Navigation,
  Truck,
  Store,
  Play,
  Pause,
  Layers,
  Compass,
  CheckCircle2,
  Crosshair,
} from 'lucide-react';
import { TRANSLATIONS } from '@shared/constants/translations';
import { UZBEKISTAN_CITIES } from '@shared/types';

/**
 * Republic of Uzbekistan Complete Interactive GPS Map
 * - Visualizes the entire geographic territory of Uzbekistan with all 14 provinces / cities
 * - Real GPS coordinate projection (37.1°N - 45.6°N, 56.0°E - 73.2°E)
 * - Toggleable between Full Uzbekistan Country Map & Urban City GPS Telemetry
 * - Live animated courier vehicle with road path interpolation & radar telemetry
 * - Fully responsive across Phone (<640px), Tablet (640px-1024px), and Notebook (>1024px)
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

  // View state: 'country' (Full Uzbekistan) or 'city' (Urban GPS zoom)
  const [mapView, setMapView] = useState('country');
  const [selectedCityId, setSelectedCityId] = useState(() => {
    const found = UZBEKISTAN_CITIES.find(
      (c) =>
        c.nameEn.toLowerCase() === city.toLowerCase() ||
        c.nameUz.toLowerCase() === city.toLowerCase() ||
        c.nameRu.toLowerCase() === city.toLowerCase()
    );
    return found ? found.id : 'tashkent';
  });

  const activeCityObj = useMemo(
    () => UZBEKISTAN_CITIES.find((c) => c.id === selectedCityId) || UZBEKISTAN_CITIES[0],
    [selectedCityId]
  );

  // Synchronize when prop city changes
  useEffect(() => {
    if (city) {
      const found = UZBEKISTAN_CITIES.find(
        (c) =>
          c.nameEn.toLowerCase() === city.toLowerCase() ||
          c.nameUz.toLowerCase() === city.toLowerCase() ||
          c.nameRu.toLowerCase() === city.toLowerCase()
      );
      if (found) setSelectedCityId(found.id);
    }
  }, [city]);

  // Coordinate projection from GPS (lat, lng) to SVG 800x420 country view
  // Uzbekistan bounds: Lng ~56.0 to ~73.2, Lat ~37.1 to ~45.6
  const projectGpsToSvg = (targetLat, targetLng) => {
    const minLng = 56.0;
    const maxLng = 73.2;
    const minLat = 37.1;
    const maxLat = 45.6;

    const x = ((targetLng - minLng) / (maxLng - minLng)) * 740 + 30;
    const y = 390 - ((targetLat - minLat) / (maxLat - minLat)) * 360;
    return { x: Math.max(25, Math.min(775, x)), y: Math.max(25, Math.min(395, y)) };
  };

  // Convert SVG click back to real GPS in checkout mode
  const handleMapClick = (e) => {
    if (mode !== 'checkout' || !onSelectLocation) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width;
    const yRatio = (e.clientY - rect.top) / rect.height;

    let computedLat, computedLng;
    if (mapView === 'country') {
      const minLng = 56.0;
      const maxLng = 73.2;
      const minLat = 37.1;
      const maxLat = 45.6;
      computedLng = Number((minLng + xRatio * (maxLng - minLng)).toFixed(4));
      computedLat = Number((maxLat - yRatio * (maxLat - minLat)).toFixed(4));
    } else {
      // Local city zoom: ±0.06 degree around active city center
      computedLat = Number((activeCityObj.lat + 0.05 - yRatio * 0.1).toFixed(4));
      computedLng = Number((activeCityObj.lng - 0.06 + xRatio * 0.12).toFixed(4));
    }

    onSelectLocation({ lat: computedLat, lng: computedLng });
  };

  // Route points: Origin (Hub) to Destination (Customer)
  const originCoord = { lat: originLat || 41.345, lng: originLng || 69.215 };
  const destCoord = { lat: lat || activeCityObj.lat, lng: lng || activeCityObj.lng };

  const originSvg = projectGpsToSvg(originCoord.lat, originCoord.lng);
  const destSvg = projectGpsToSvg(destCoord.lat, destCoord.lng);

  // Live courier movement progress
  const isMoving = orderStatus === 'Shipped' || orderStatus === 'Out for Delivery';
  const [progress, setProgress] = useState(
    orderStatus === 'Delivered' ? 1.0 : isMoving ? 0.45 : 0.08
  );
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (orderStatus === 'Delivered') setProgress(1.0);
    else if (orderStatus === 'Cancelled') setProgress(0.5);
    else if (!isMoving) setProgress(0.08);
  }, [orderStatus, isMoving]);

  useEffect(() => {
    if (mode !== 'tracking' || !isMoving || !isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 0.96) return 0.08;
        return prev + 0.005;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [mode, isMoving, isPlaying]);

  // Current interpolated courier coordinates
  const currentCourierLat = Number(
    (originCoord.lat + progress * (destCoord.lat - originCoord.lat)).toFixed(4)
  );
  const currentCourierLng = Number(
    (originCoord.lng + progress * (destCoord.lng - originCoord.lng)).toFixed(4)
  );

  const courierSvg =
    mapView === 'country'
      ? projectGpsToSvg(currentCourierLat, currentCourierLng)
      : {
          x: 200 + progress * 400,
          y: 260 - Math.sin(progress * Math.PI) * 70,
        };

  const remainingKm = Math.max(0.2, (1 - progress) * 5.4).toFixed(1);
  const remainingMins = Math.max(1, Math.round((1 - progress) * 22));

  return (
    <div className="space-y-2">
      {/* City & View Switcher Bar (Responsive on Phone, Tablet & Notebook) */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-100 p-2 rounded-2xl border border-slate-200 text-xs">
        {/* Horizontal scroll of all Uzbekistan regions */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar max-w-full sm:max-w-[70%] py-0.5">
          <span className="font-bold text-slate-500 text-[11px] shrink-0 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            <span>Viloyatlar:</span>
          </span>
          {UZBEKISTAN_CITIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setSelectedCityId(c.id);
                if (mode === 'checkout' && onSelectLocation) {
                  onSelectLocation({ lat: c.lat, lng: c.lng });
                }
              }}
              className={`px-2.5 py-1 rounded-xl text-[11px] font-bold shrink-0 transition whitespace-nowrap ${
                selectedCityId === c.id
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200/80'
              }`}
            >
              {lang === 'uz' ? c.nameUz : lang === 'ru' ? c.nameRu : c.nameEn}
            </button>
          ))}
        </div>

        {/* View Toggle: Full Country Map vs Urban Zoom */}
        <div className="flex items-center gap-1 shrink-0 self-end sm:self-auto ml-auto">
          <button
            type="button"
            onClick={() => setMapView('country')}
            className={`px-2.5 py-1 rounded-xl text-[11px] font-extrabold flex items-center gap-1 transition ${
              mapView === 'country'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-emerald-50 border border-slate-200'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>{lang === 'uz' ? '🇺🇿 Butun Oʻzbekiston' : lang === 'ru' ? '🇺🇿 Вся карта' : '🇺🇿 Uzbekistan'}</span>
          </button>
          <button
            type="button"
            onClick={() => setMapView('city')}
            className={`px-2.5 py-1 rounded-xl text-[11px] font-extrabold flex items-center gap-1 transition ${
              mapView === 'city'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-emerald-50 border border-slate-200'
            }`}
          >
            <Crosshair className="w-3 h-3" />
            <span>{lang === 'uz' ? 'Shahar GPS' : lang === 'ru' ? 'Город GPS' : 'City GPS'}</span>
          </button>
        </div>
      </div>

      {/* Main Map Canvas */}
      <div
        onClick={handleMapClick}
        className={`relative w-full h-80 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden border-2 border-emerald-300/80 bg-[#0f172a] select-none shadow-soft transition-all ${
          mode === 'checkout' ? 'cursor-crosshair' : 'cursor-default'
        }`}
      >
        {/* Subtle Satellite Vector Grid Background */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `
              radial-gradient(circle at 60% 40%, rgba(16, 185, 129, 0.18) 0%, transparent 55%),
              radial-gradient(circle at 20% 70%, rgba(56, 189, 248, 0.12) 0%, transparent 45%),
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 100% 100%, 32px 32px, 32px 32px',
          }}
        />

        {/* SVG Vector Map Rendering */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 800 420"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* National Border Glow Filter */}
            <filter id="borderGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#10b981" floodOpacity="0.5" />
            </filter>

            {/* Glowing route line gradient */}
            <linearGradient id="routeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>

          {mapView === 'country' ? (
            /* ================= FULL REPUBLIC OF UZBEKISTAN VIEW ================= */
            <>
              {/* Amudarya & Syrdarya Rivers Vector */}
              <path
                d="M 120 180 Q 240 220 380 260 T 560 360"
                stroke="#0284c7"
                strokeWidth="5"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M 520 130 Q 600 170 740 180"
                stroke="#0284c7"
                strokeWidth="4"
                fill="none"
                opacity="0.6"
              />

              {/* Geographic Contour of the Republic of Uzbekistan (Karakalpakstan to Fergana Valley) */}
              <path
                d="
                  M 50 140
                  C 80 80, 160 50, 240 60
                  C 320 70, 390 100, 470 120
                  C 530 110, 580 90, 630 110
                  C 680 125, 760 140, 770 170
                  C 775 195, 730 225, 680 215
                  C 640 205, 590 220, 560 250
                  C 540 290, 520 350, 480 375
                  C 430 400, 380 340, 330 300
                  C 280 270, 210 240, 150 230
                  C 90 220, 40 190, 50 140 Z
                "
                fill="#064e3b"
                fillOpacity="0.45"
                stroke="#10b981"
                strokeWidth="2.5"
                filter="url(#borderGlow)"
              />

              {/* Karakalpakstan (Aral / Ustyurt) Internal Regional Boundary */}
              <path
                d="M 230 60 L 210 238"
                stroke="#059669"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                opacity="0.5"
              />

              {/* Major National Silk Road Highways (M39, M37, A373 Kamchik) */}
              <path
                d="M 640 120 L 530 195 L 440 235 L 360 210 L 220 160 L 140 120"
                stroke="#ffffff"
                strokeWidth="2"
                strokeDasharray="6 4"
                opacity="0.45"
                fill="none"
              />
              <path
                d="M 640 120 Q 700 150 740 170"
                stroke="#ffffff"
                strokeWidth="2"
                strokeDasharray="6 4"
                opacity="0.45"
                fill="none"
              />

              {/* Courier Active Route Line */}
              {mode === 'tracking' && (
                <>
                  <path
                    d={`M ${originSvg.x} ${originSvg.y} Q ${(originSvg.x + destSvg.x) / 2} ${
                      Math.min(originSvg.y, destSvg.y) - 40
                    } ${destSvg.x} ${destSvg.y}`}
                    stroke="#94a3b8"
                    strokeWidth="3.5"
                    strokeDasharray="6 6"
                    fill="none"
                    opacity="0.7"
                  />
                  <path
                    d={`M ${originSvg.x} ${originSvg.y} Q ${(originSvg.x + destSvg.x) / 2} ${
                      Math.min(originSvg.y, destSvg.y) - 40
                    } ${destSvg.x} ${destSvg.y}`}
                    stroke="url(#routeGlow)"
                    strokeWidth="4.5"
                    fill="none"
                    strokeDasharray={`${progress * 500} 500`}
                    strokeLinecap="round"
                  />
                </>
              )}
            </>
          ) : (
            /* ================= URBAN CITY GPS TELEMETRY VIEW ================= */
            <>
              {/* City Canal */}
              <path
                d="M 80 0 Q 260 160 400 200 T 720 420"
                stroke="#38bdf8"
                strokeWidth="16"
                fill="none"
                opacity="0.6"
              />
              {/* Ring Roads & Main Avenues */}
              <path
                d="M 0 210 L 800 210 M 400 0 L 400 420 M 80 360 L 720 60"
                stroke="#ffffff"
                strokeWidth="9"
                fill="none"
                opacity="0.25"
              />
              <path
                d="M 0 210 L 800 210 M 400 0 L 400 420"
                stroke="#10b981"
                strokeWidth="2"
                strokeDasharray="8 6"
                fill="none"
                opacity="0.7"
              />

              {mode === 'tracking' && (
                <path
                  d="M 180 120 C 320 180, 480 160, 640 300"
                  stroke="url(#routeGlow)"
                  strokeWidth="6"
                  strokeDasharray={`${progress * 600} 650`}
                  fill="none"
                  strokeLinecap="round"
                />
              )}
            </>
          )}
        </svg>

        {/* Top-Left: Map Status & Province Info */}
        <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-emerald-500/40 text-xs font-bold text-white flex items-center gap-2 shadow-lg z-10">
          <Navigation className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
          <span>
            {mapView === 'country'
              ? (lang === 'uz' ? 'Oʻzbekiston Respublikasi' : lang === 'ru' ? 'Республика Узбекистан' : 'Republic of Uzbekistan')
              : (lang === 'uz' ? activeCityObj.nameUz : lang === 'ru' ? activeCityObj.nameRu : activeCityObj.nameEn)} • {lang === 'uz' ? 'GPS Faol' : lang === 'ru' ? 'GPS Активен' : 'GPS Active'}
          </span>
        </div>

        {/* Top-Right: Telemetry Status & Pause Toggle */}
        <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
          <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-emerald-500/50 text-[11px] font-black text-emerald-300 flex items-center gap-1.5 shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>
              {isMoving
                ? (lang === 'uz' ? 'GPS Harakatda' : lang === 'ru' ? 'GPS в пути' : 'GPS Moving')
                : (lang === 'uz' ? 'GPS Aloqada' : lang === 'ru' ? 'GPS на связи' : 'GPS Connected')}
            </span>
          </div>

          {mode === 'tracking' && isMoving && (
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white hover:bg-emerald-600 transition shadow-md"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          )}
        </div>

        {/* Bottom Bar: Real GPS Coordinates & Telemetry */}
        <div className="absolute bottom-3 left-3 max-w-[92%] px-3.5 py-2 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-700 text-white text-[11px] font-mono shadow-xl z-10 flex flex-wrap items-center gap-x-3 gap-y-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-emerald-400 font-bold">GPS:</span>
            <span>
              {mode === 'tracking'
                ? `${currentCourierLat}° N, ${currentCourierLng}° E`
                : `${lat}° N, ${lng}° E`}
            </span>
          </div>
          {mode === 'tracking' && isMoving && (
            <div className="text-slate-300 flex items-center gap-2">
              <span>•</span>
              <span className="text-amber-300 font-bold">
                {remainingKm} {lang === 'uz' ? 'km qoldi' : lang === 'ru' ? 'км осталось' : 'km left'}
              </span>
              <span>(~{remainingMins} {lang === 'uz' ? 'daqiqa' : lang === 'ru' ? 'мин' : 'mins'})</span>
              <span>•</span>
              <span className="text-emerald-300">
                {lang === 'uz' ? 'Tezlik' : lang === 'ru' ? 'Скорость' : 'Speed'}: {mapView === 'country' ? '74 km/soat' : '42 km/soat'}
              </span>
            </div>
          )}
        </div>

        {/* MAP LABELS & PINS FOR ALL UZBEKISTAN CITIES */}
        {mapView === 'country' &&
          UZBEKISTAN_CITIES.map((c) => {
            const pos = projectGpsToSvg(c.lat, c.lng);
            const isSelected = c.id === selectedCityId;
            return (
              <div
                key={c.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCityId(c.id);
                  if (mode === 'checkout' && onSelectLocation) {
                    onSelectLocation({ lat: c.lat, lng: c.lng });
                  }
                }}
                style={{
                  left: `${(pos.x / 800) * 100}%`,
                  top: `${(pos.y / 420) * 100}%`,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 group"
              >
                <div
                  className={`w-3.5 h-3.5 rounded-full border-2 transition-all flex items-center justify-center ${
                    isSelected
                      ? 'bg-amber-400 border-white scale-125 shadow-lg shadow-amber-400/50'
                      : 'bg-emerald-500 border-slate-900 group-hover:scale-110'
                  }`}
                />
                <span
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-0.5 px-1.5 py-0.2 rounded text-[9px] font-bold whitespace-nowrap shadow-xs transition ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 font-black'
                      : 'bg-slate-900/80 text-slate-200 group-hover:bg-slate-900 group-hover:text-white'
                  }`}
                >
                  {c.nameUz.split(' ')[0]}
                </span>
              </div>
            );
          })}

        {/* CHECKOUT MODE: Moveable Interactive Drop-off Pin */}
        {mode === 'checkout' && (
          <div
            style={{
              left:
                mapView === 'country'
                  ? `${(projectGpsToSvg(lat, lng).x / 800) * 100}%`
                  : '50%',
              top:
                mapView === 'country'
                  ? `${(projectGpsToSvg(lat, lng).y / 420) * 100}%`
                  : '50%',
            }}
            className="absolute -translate-x-1/2 -translate-y-full transition-all duration-300 z-30 pointer-events-none"
          >
            <div className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold shadow-lg mb-1 whitespace-nowrap border border-white/40">
              {t.clickToMovePin}
            </div>
            <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xl border-2 border-white mx-auto animate-bounce">
              <MapPin className="w-5 h-5 fill-white text-emerald-700" />
            </div>
          </div>
        )}

        {/* TRACKING MODE: Live Courier Vehicle with Real-Time Motion, Heading & Radar */}
        {mode === 'tracking' && (
          <>
            {/* Origin Hub */}
            <div
              style={{
                left:
                  mapView === 'country'
                    ? `${(originSvg.x / 800) * 100}%`
                    : '22%',
                top:
                  mapView === 'country'
                    ? `${(originSvg.y / 420) * 100}%`
                    : '30%',
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
            >
              <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md border-2 border-white">
                <Store className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <span className="mt-0.5 block px-1.5 py-0.2 rounded bg-slate-900/90 text-[9px] font-bold text-white shadow text-center whitespace-nowrap">
                SAVDOX Hub
              </span>
            </div>

            {/* Destination Pin */}
            <div
              style={{
                left:
                  mapView === 'country'
                    ? `${(destSvg.x / 800) * 100}%`
                    : '78%',
                top:
                  mapView === 'country'
                    ? `${(destSvg.y / 420) * 100}%`
                    : '72%',
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
            >
              <div className="w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-md border-2 border-white">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <span className="mt-0.5 block px-1.5 py-0.2 rounded bg-rose-950/90 text-[9px] font-bold text-rose-200 shadow text-center whitespace-nowrap">
                {activeCityObj.nameUz.split(' ')[0]}
              </span>
            </div>

            {/* Dynamic Moving Vehicle */}
            <div
              style={{
                left: `${(courierSvg.x / 800) * 100}%`,
                top: `${(courierSvg.y / 420) * 100}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none transition-transform duration-100"
            >
              {/* Telemetry pill above vehicle */}
              <div className="mb-1.5 -translate-x-1/2 left-1/2 relative inline-flex flex-col items-center">
                <div className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-black shadow-lg border border-emerald-300 flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
                  <span>
                    {orderStatus === 'Delivered'
                      ? (lang === 'uz' ? 'Yetkazildi ✓' : lang === 'ru' ? 'Доставлено ✓' : 'Delivered ✓')
                      : `Cobalt: ${remainingKm} km (${currentCourierLat.toString().slice(-4)}, ${currentCourierLng.toString().slice(-4)})`}
                  </span>
                </div>
              </div>

              {/* Radar pulse */}
              {isMoving && isPlaying && (
                <div className="absolute inset-0 -m-3 rounded-full border-2 border-emerald-400 animate-ping pointer-events-none" />
              )}

              {/* Vehicle Body */}
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-800 to-emerald-500 text-white flex items-center justify-center shadow-xl border-2 border-white">
                {orderStatus === 'Delivered' ? (
                  <CheckCircle2 className="w-5 h-5 text-white" />
                ) : (
                  <Truck className="w-5 h-5 text-white drop-shadow" />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
