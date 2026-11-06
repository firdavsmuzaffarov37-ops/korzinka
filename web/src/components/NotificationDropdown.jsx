import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Truck, Zap, Gift, Check, ArrowRight, X } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

const INITIAL_NOTIFICATIONS = [
  {
    id: 'notif-1',
    type: 'delivery',
    titleUz: 'Kuryer Azizbek Karimov yoʻlda!',
    titleRu: 'Курьер Азизбек Каримов уже в пути!',
    titleEn: 'Courier Azizbek Karimov is on the way!',
    descUz: 'Chevrolet Cobalt • 01 A 774 KA. Taxminiy yetkazib berish: 25 daqiqa.',
    descRu: 'Chevrolet Cobalt • 01 A 774 KA. Примерное время доставки: 25 мин.',
    descEn: 'Chevrolet Cobalt • 01 A 774 KA. Estimated arrival: 25 mins.',
    time: '12 min',
    link: '/orders',
    unread: true,
  },
  {
    id: 'notif-2',
    type: 'discount',
    titleUz: 'Chaqmoq chegirmalar boshlandi!',
    titleRu: 'Стартовали Молниеносные скидки!',
    titleEn: 'Flash Sale is live!',
    descUz: 'Bugun barcha toifalarda 25% gacha haqiqiy chegirmalar mavjud.',
    descRu: 'Скидки до 25% на электронику, одежду и обувь во всех магазинах.',
    descEn: 'Up to 25% verified discounts across smartphones and electronics.',
    time: '1 hour',
    link: '/catalog?flash=true',
    unread: true,
  },
  {
    id: 'notif-3',
    type: 'bonus',
    titleUz: 'Xush kelibsiz bonusi: +50 000 soʻm!',
    titleRu: 'Приветственный бонус: +50 000 сум!',
    titleEn: 'Welcome Bonus: +50,000 UZS credited!',
    descUz: 'SAVDOX hamyoningizga keyingi xaridlar uchun bonus ochildi.',
    descRu: 'На ваш бонусный счет начислены баллы для оплаты покупок.',
    descEn: 'Use your SAVDOX bonus points on checkout to save on orders.',
    time: 'Today',
    link: '/bonus',
    unread: true,
  },
];

export default function NotificationDropdown({ lang = 'uz' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const dropdownRef = useRef(null);

  const unreadCount = notifications.filter((n) => n.unread).length;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
    sounds.playNotificationPing();
  };

  const getIcon = (type) => {
    switch (type) {
      case 'delivery':
        return <Truck className="w-4 h-4 text-emerald-600" />;
      case 'discount':
        return <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />;
      case 'bonus':
        return <Gift className="w-4 h-4 text-rose-500" />;
      default:
        return <Bell className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          sounds.playClickSound?.();
        }}
        title="Bildirishnomalar"
        className="relative p-2 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 transition"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-600 text-white text-[10px] font-black flex items-center justify-center animate-pulse shadow-xs">
            {unreadCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute right-0 mt-2 w-80 sm:w-96 rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden z-50 text-slate-900"
          >
            {/* Header */}
            <div className="p-4 bg-emerald-950 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-emerald-400" />
                <span className="text-xs sm:text-sm font-extrabold">
                  {lang === 'uz'
                    ? 'Bildirishnomalar'
                    : lang === 'ru'
                    ? 'Уведомления'
                    : 'Notifications'}
                </span>
                {unreadCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-700 text-white">
                    {unreadCount} yangi
                  </span>
                )}
              </div>

              {unreadCount > 0 && (
                <button
                  type="button"
                  onClick={markAllRead}
                  className="text-[11px] font-semibold text-emerald-300 hover:text-white transition"
                >
                  {lang === 'uz' ? 'Oʻqilgan qilish' : lang === 'ru' ? 'Прочитать все' : 'Mark all read'}
                </button>
              )}
            </div>

            {/* List */}
            <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
              {notifications.map((n) => {
                const title = lang === 'uz' ? n.titleUz : lang === 'ru' ? n.titleRu : n.titleEn;
                const desc = lang === 'uz' ? n.descUz : lang === 'ru' ? n.descRu : n.descEn;

                return (
                  <Link
                    key={n.id}
                    to={n.link}
                    onClick={() => setIsOpen(false)}
                    className={`block p-3.5 hover:bg-slate-50 transition ${
                      n.unread ? 'bg-emerald-50/40' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                        {getIcon(n.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="text-xs font-bold text-slate-900 truncate">{title}</h4>
                          <span className="text-[10px] text-slate-400 shrink-0">{n.time}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 line-clamp-2 mt-0.5 leading-snug">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
