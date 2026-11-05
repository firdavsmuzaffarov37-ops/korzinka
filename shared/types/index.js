/**
 * SAVDOX Shared Domain Models & Constants
 * Reusable across Web (React) and Mobile (React Native / Expo)
 */

export const ORDER_STATUSES = [
  'Pending',
  'Confirmed',
  'Preparing',
  'Shipped',
  'Out for Delivery',
  'Delivered',
  'Cancelled',
];

export const PAYMENT_PROVIDERS = [
  {
    id: 'click',
    name: 'Click Evolution',
    subtitle: 'Instant payment via Click Up / USSD *880#',
    badge: 'Official API • Sandbox Ready',
    color: '#00AEEF',
    feePercent: 0,
  },
  {
    id: 'payme',
    name: 'Payme',
    subtitle: 'Secure checkout via Payme Business API',
    badge: 'Official API • Sandbox Ready',
    color: '#14C9C9',
    feePercent: 0,
  },
  {
    id: 'uzum',
    name: 'Uzum Bank / Nasiya',
    subtitle: 'Pay in full or 3/6/12 month installment plan',
    badge: '0% Overpayment Promo',
    color: '#7000FF',
    feePercent: 0,
  },
  {
    id: 'cod',
    name: 'Cash or Terminal on Delivery',
    subtitle: 'Pay courier in UZS cash, Uzcard, or Humo upon receipt',
    badge: 'No Prepayment',
    color: '#059669',
    feePercent: 0,
  },
];

export const DELIVERY_METHODS = [
  {
    id: 'express_2h',
    nameUz: 'SAVDOX Tezkor (90 daqiqa)',
    nameRu: 'SAVDOX Экспресс (90 минут)',
    nameEn: 'SAVDOX Express (90 Minutes)',
    etaText: '60 - 90 mins',
    feeUzs: 25000,
    freeThresholdUzs: 1000000,
    badge: 'Fastest',
  },
  {
    id: 'same_day',
    nameUz: 'Bugun yetkazib berish',
    nameRu: 'Доставка сегодня',
    nameEn: 'Same-Day Courier Delivery',
    etaText: 'Today, 18:00 - 22:00',
    feeUzs: 15000,
    freeThresholdUzs: 500000,
    badge: 'Popular',
  },
  {
    id: 'standard',
    nameUz: 'Standart yetkazib berish (Ertaga)',
    nameRu: 'Стандартная доставка (Завтра)',
    nameEn: 'Standard Next-Day Delivery',
    etaText: 'Tomorrow, 10:00 - 18:00',
    feeUzs: 10000,
    freeThresholdUzs: 300000,
    badge: 'Free over 300k UZS',
  },
  {
    id: 'pickup',
    nameUz: 'SAVDOX topshirish punktidan olish',
    nameRu: 'Самовывоз из пункта выдачи SAVDOX',
    nameEn: 'SAVDOX Pickup Point',
    etaText: 'Ready in 2 hours',
    feeUzs: 0,
    freeThresholdUzs: 0,
    badge: 'Always Free',
  },
];

export const UZBEKISTAN_CITIES = [
  { id: 'tashkent', nameUz: 'Toshkent', nameRu: 'Ташкент', nameEn: 'Tashkent', lat: 41.2995, lng: 69.2401, districts: ['Yunusabad', 'Chilanzar', 'Mirzo Ulugbek', 'Yakkasaray', 'Shaykhantakhur', 'Mirobod', 'Sergeli', 'Olmazor'] },
  { id: 'samarkand', nameUz: 'Samarqand', nameRu: 'Самарканд', nameEn: 'Samarkand', lat: 39.6542, lng: 66.9597, districts: ['Siab', 'Bagishamal', 'Temiryul', 'Registan Center'] },
  { id: 'bukhara', nameUz: 'Buxoro', nameRu: 'Бухара', nameEn: 'Bukhara', lat: 39.7747, lng: 64.4286, districts: ['Old City', 'Kogon', 'Gijduvan Road'] },
  { id: 'andijan', nameUz: 'Andijon', nameRu: 'Андижан', nameEn: 'Andijan', lat: 40.7821, lng: 72.3442, districts: ['Boburshoh', 'Mustaqillik', 'New City'] },
  { id: 'namangan', nameUz: 'Namangan', nameRu: 'Наманган', nameEn: 'Namangan', lat: 40.9983, lng: 71.6726, districts: ['Davlatobod', 'Chorsu', 'Yangi Namangan'] },
  { id: 'fergana', nameUz: 'Fargʻona', nameRu: 'Фергана', nameEn: 'Fergana', lat: 40.3842, lng: 71.7843, districts: ['Margilan', 'Kokand Road', 'Al-Fergani'] },
  { id: 'nukus', nameUz: 'Nukus', nameRu: 'Нукус', nameEn: 'Nukus', lat: 42.4619, lng: 59.6166, districts: ['Karakalpakstan Center', 'Doslik'] },
];

export const LOYALTY_TIERS = [
  { name: 'Bronze', minPoints: 0, cashbackPercent: 1, perk: '1% Cashback on all orders' },
  { name: 'Silver', minPoints: 15000, cashbackPercent: 2, perk: '2% Cashback + Free Pickup Priority' },
  { name: 'Gold', minPoints: 50000, cashbackPercent: 3.5, perk: '3.5% Cashback + Free Standard Delivery' },
  { name: 'Platinum', minPoints: 150000, cashbackPercent: 5, perk: '5% Cashback + Free Express 90m Delivery + VIP Support' },
];
