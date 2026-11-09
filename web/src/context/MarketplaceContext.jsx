import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { CATEGORIES as INITIAL_CATEGORIES } from '@shared/constants/categories';
import {
  INITIAL_PRODUCTS,
  FEATURED_STORES,
  ACTIVE_COUPONS,
  INITIAL_REVIEWS,
  INITIAL_ORDERS,
} from '@shared/constants/catalog';
import { TRANSLATIONS } from '@shared/constants/translations';
import { UZBEKISTAN_CITIES, LOYALTY_TIERS } from '@shared/types';
import {
  supabase,
  isSupabaseConfigured,
  supabaseUrl,
  checkSupabaseHealth,
} from '../services/supabaseClient';
import { sounds } from '../utils/soundEffects';

const MarketplaceContext = createContext(null);

const STORAGE_KEYS = {
  USER: 'savdox_user_v2',
  LANG: 'savdox_lang_v1',
  CITY: 'savdox_city_v1',
  CART: 'savdox_cart_v1',
  FAVORITES: 'savdox_favs_v1',
  RECENT: 'savdox_recent_v1',
  PRODUCTS: 'savdox_products_v2',
  CATEGORIES: 'savdox_categories_v1',
  STORES: 'savdox_stores_v1',
  ORDERS: 'savdox_orders_v1',
  REVIEWS: 'savdox_reviews_v1',
  COUPONS: 'savdox_coupons_v1',
  BONUS: 'savdox_bonus_v1',
  SEARCH_HISTORY: 'savdox_search_history_v1',
  COMPLAINTS: 'savdox_complaints_v1',
  COMPARE: 'savdox_compare_v1',
};

export const DEFAULT_USER = {
  id: 'usr-savdox-001',
  fullName: 'Temurbek Yoqubov',
  email: 'temurbek@savdox.uz',
  phone: '+998 90 945 12 34',
  role: 'customer', // 'customer' | 'seller' | 'admin'
  city: 'Tashkent',
  district: 'Yunusabad',
  streetAddress: 'Amir Temur Avenue 107B, Apt 42',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
  isVerified: true,
  referralCode: 'SAVDOX777',
  storeId: 'store-malika-mobile',
};

const INITIAL_COMPLAINTS = [
  {
    id: 'cmp-101',
    userId: 'usr-savdox-002',
    userName: 'Otabek Nazarov',
    orderNumber: 'SVX-2026-88910',
    storeName: 'Orient Home & Comfort',
    subject: 'Requested evening delivery slot change',
    description: 'Courier arrived at 15:00 while I selected 18:00-22:00 slot. Redelivered same evening.',
    priority: 'medium',
    status: 'open',
    createdAt: '2026-11-03',
  },
  {
    id: 'cmp-102',
    userId: 'usr-savdox-003',
    userName: 'Malika Umarova',
    orderNumber: 'SVX-2026-87412',
    storeName: 'Malika Smart Hub',
    subject: 'Promo coupon SAVDOX10 question',
    description: 'Forgot to apply coupon code during Click checkout.',
    priority: 'low',
    status: 'resolved',
    resolutionNotes: 'Credited 50,000 SAVDOX Bonus points to customer wallet.',
    createdAt: '2026-11-01',
  },
];

function loadFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function MarketplaceProvider({ children }) {
  const [lang, setLang] = useState(() => loadFromStorage(STORAGE_KEYS.LANG, 'uz'));
  const [selectedCity, setSelectedCity] = useState(() =>
    loadFromStorage(STORAGE_KEYS.CITY, UZBEKISTAN_CITIES[0])
  );
  const [user, setUser] = useState(() => loadFromStorage(STORAGE_KEYS.USER, null));
  const [categories, setCategories] = useState(() => {
    const cached = loadFromStorage(STORAGE_KEYS.CATEGORIES, null);
    if (
      !cached ||
      cached.length !== INITIAL_CATEGORIES.length ||
      cached.some((c) => c.slug === 'automotive' || c.slug === 'health') ||
      !cached[0]?.subcategoriesUz
    ) {
      return INITIAL_CATEGORIES;
    }
    return cached;
  });
  const [products, setProducts] = useState(() => {
    const cached = loadFromStorage(STORAGE_KEYS.PRODUCTS, null);
    if (
      !cached ||
      cached.some(
        (p) =>
          p.categoryId === 'cat-automotive' ||
          p.categorySlug === 'automotive' ||
          p.categoryId === 'cat-health' ||
          p.categorySlug === 'health'
      ) ||
      cached.length !== INITIAL_PRODUCTS.length
    ) {
      return INITIAL_PRODUCTS;
    }
    return cached;
  });
  const [stores, setStores] = useState(() =>
    loadFromStorage(STORAGE_KEYS.STORES, FEATURED_STORES)
  );
  const [cart, setCart] = useState(() =>
    loadFromStorage(STORAGE_KEYS.CART, [
      {
        id: 'ci-initial-1',
        productId: 'prod-redmi-note-13',
        selectedColor: 'Mint Green',
        selectedSize: '8GB / 256GB',
        quantity: 1,
      },
      {
        id: 'ci-initial-2',
        productId: 'prod-samarkand-royal-nuts-box',
        selectedColor: 'Carved Cedar Box',
        selectedSize: '1.5 kg Royal Box',
        quantity: 1,
      },
    ])
  );
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [favorites, setFavorites] = useState(() =>
    loadFromStorage(STORAGE_KEYS.FAVORITES, ['prod-redmi-note-13', 'prod-dyson-airwrap-emerald'])
  );
  const [compareList, setCompareList] = useState(() =>
    loadFromStorage(STORAGE_KEYS.COMPARE, ['prod-redmi-note-13', 'prod-redmi-note-13-pro'])
  );
  const [recentlyViewed, setRecentlyViewed] = useState(() =>
    loadFromStorage(STORAGE_KEYS.RECENT, [
      'prod-redmi-note-13',
      'prod-galaxy-a15',
      'prod-macbook-air-m3',
      'prod-samarkand-royal-nuts-box',
    ])
  );
  const [orders, setOrders] = useState(() =>
    loadFromStorage(STORAGE_KEYS.ORDERS, INITIAL_ORDERS)
  );
  const [reviews, setReviews] = useState(() =>
    loadFromStorage(STORAGE_KEYS.REVIEWS, INITIAL_REVIEWS)
  );
  const [coupons, setCoupons] = useState(() =>
    loadFromStorage(STORAGE_KEYS.COUPONS, ACTIVE_COUPONS)
  );
  const [complaints, setComplaints] = useState(() =>
    loadFromStorage(STORAGE_KEYS.COMPLAINTS, INITIAL_COMPLAINTS)
  );
  const [searchHistory, setSearchHistory] = useState(() =>
    loadFromStorage(STORAGE_KEYS.SEARCH_HISTORY, [
      'Xiaomi Redmi Note 13',
      'Samsung Galaxy A15',
      'Samarkand Nuts',
      'Dyson Airwrap',
    ])
  );
  const [bonusWallet, setBonusWallet] = useState(() =>
    loadFromStorage(STORAGE_KEYS.BONUS, {
      pointsBalance: 45000,
      lifetimePoints: 68000,
      tier: 'Gold',
      cashbackPercent: 3.5,
      referralsCount: 3,
      history: [
        { id: 'bh-1', title: 'Welcome Bonus Credited', points: +25000, date: '2026-10-01' },
        { id: 'bh-2', title: 'Referral Reward (Friend +998 90 *** 44 12)', points: +15000, date: '2026-10-15' },
        { id: 'bh-3', title: '3.5% Cashback on Order SVX-2026-90421', points: +28000, date: '2026-11-04' },
        { id: 'bh-4', title: 'Redeemed for Express Delivery Discount', points: -23000, date: '2026-11-04' },
      ],
    })
  );

  const [supabaseStatus, setSupabaseStatus] = useState({
    connected: isSupabaseConfigured,
    schemaReady: false,
    projectUrl: supabaseUrl,
    message: 'Connecting to zbyfrluhowfmhlkjmyff.supabase.co...',
  });

  const [toast, setToast] = useState(null);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [aiInitialPrompt, setAiInitialPrompt] = useState('');

  // Connect to Live Supabase Auth, Database & Realtime
  useEffect(() => {
    if (!supabase) return;

    let realtimeChannel = null;

    async function initSupabaseSync() {
      const health = await checkSupabaseHealth();
      setSupabaseStatus({
        ...health,
        projectUrl: supabaseUrl,
      });

      // Check active Supabase Auth session
      const { data: sessionData } = await supabase.auth.getSession();
      if (sessionData?.session?.user) {
        const sbUser = sessionData.session.user;
        setUser((prev) => ({
          ...prev,
          id: sbUser.id,
          email: sbUser.email || prev.email,
          phone: sbUser.phone || prev.phone,
          fullName: sbUser.user_metadata?.full_name || prev.fullName,
          isVerified: true,
        }));
      }

      // If database tables are migrated and populated, merge live rows
      if (health.schemaReady) {
        const { data: dbProducts } = await supabase
          .from('products')
          .select('*, product_images(image_url), stores(name, rating)')
          .eq('is_active', true);

        if (dbProducts && dbProducts.length > 0) {
          const normalized = dbProducts.map((row) => ({
            id: row.id,
            slug: row.slug,
            sku: row.sku,
            categoryId: row.category_id,
            categorySlug: row.subcategory_slug || 'smartphones',
            subcategory: row.subcategory_slug || 'Featured',
            storeId: row.store_id,
            sellerName: row.stores?.name || 'SAVDOX Official Partner',
            sellerRating: Number(row.stores?.rating) || 4.9,
            brand: row.brand,
            nameUz: row.name_uz,
            nameRu: row.name_ru,
            nameEn: row.name_en,
            descriptionUz: row.description_uz,
            descriptionRu: row.description_ru,
            descriptionEn: row.description_en,
            priceUzs: Number(row.price_uzs),
            oldPriceUzs: row.old_price_uzs ? Number(row.old_price_uzs) : null,
            discountPercent: row.discount_percent || 0,
            rating: Number(row.rating) || 4.9,
            reviewCount: row.review_count || 12,
            soldCount: row.sold_count || 50,
            stock: 25,
            images:
              row.product_images?.length > 0
                ? row.product_images.map((img) => img.image_url)
                : ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'],
            colors: [{ name: 'Official Edition', hex: '#059669' }],
            sizes: ['Standard'],
            specifications: row.specifications || {},
            visualTags: row.visual_tags || [],
            isFlashSale: row.is_flash_sale,
            isPopular: row.is_popular,
            isBestSeller: row.is_best_seller,
            isRecommended: row.is_recommended,
            approvalStatus: row.approval_status,
          }));
          setProducts((prev) => {
            const existingIds = new Set(normalized.map((p) => p.id));
            return [...normalized, ...prev.filter((p) => !existingIds.has(p.id))];
          });
        }
      }

      // Subscribe to Supabase Realtime channel
      realtimeChannel = supabase
        .channel('savdox-live-marketplace')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'orders' },
          () => {
            showToast('Live order update received from Supabase Realtime!');
          }
        )
        .subscribe();
    }

    initSupabaseSync();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const sbUser = session.user;
        setUser((prev) => ({
          ...prev,
          id: sbUser.id,
          email: sbUser.email || prev.email,
          phone: sbUser.phone || prev.phone,
          fullName: sbUser.user_metadata?.full_name || prev.fullName,
          isVerified: true,
        }));
      }
    });

    return () => {
      authListener?.subscription?.unsubscribe();
      if (realtimeChannel) {
        supabase.removeChannel(realtimeChannel);
      }
    };
  }, []);

  // Persist to localStorage
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.LANG, JSON.stringify(lang)); }, [lang]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.CITY, JSON.stringify(selectedCity)); }, [selectedCity]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user)); }, [user]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories)); }, [categories]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products)); }, [products]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.STORES, JSON.stringify(stores)); }, [stores]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites)); }, [favorites]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPARE, JSON.stringify(compareList)); }, [compareList]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.RECENT, JSON.stringify(recentlyViewed)); }, [recentlyViewed]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders)); }, [orders]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews)); }, [reviews]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COUPONS, JSON.stringify(coupons)); }, [coupons]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.COMPLAINTS, JSON.stringify(complaints)); }, [complaints]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify(searchHistory)); }, [searchHistory]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.BONUS, JSON.stringify(bonusWallet)); }, [bonusWallet]);

  const showToast = (message, type = 'success') => {
    setToast({ id: Date.now(), message, type });
    setTimeout(() => {
      setToast((prev) => (prev && Date.now() - prev.id >= 2900 ? null : prev));
    }, 3000);
  };

  const t = useMemo(() => TRANSLATIONS[lang] || TRANSLATIONS.en, [lang]);

  const recordProductView = (productId) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((id) => id !== productId);
      return [productId, ...filtered].slice(0, 8);
    });
  };

  const toggleFavorite = (productId) => {
    setFavorites((prev) => {
      const exists = prev.includes(productId);
      const next = exists ? prev.filter((id) => id !== productId) : [productId, ...prev];
      const toastMsg = exists
        ? lang === 'uz'
          ? 'Saralanganlardan oʻchirildi'
          : lang === 'ru'
          ? 'Удалено из избранного'
          : 'Removed from Favorites'
        : lang === 'uz'
        ? 'Saralanganlarga saqlandi ❤️'
        : lang === 'ru'
        ? 'Добавлено в избранное ❤️'
        : 'Saved to Favorites ❤️';
      showToast(toastMsg);
      return next;
    });
  };

  const addToCart = (product, options = {}) => {
    const selectedColor = options.selectedColor || product.colors?.[0]?.name || 'Standard';
    const selectedSize = options.selectedSize || product.sizes?.[0] || 'Default';
    const quantity = options.quantity || 1;
    const priceOverrideUzs = options.priceOverrideUzs || product.priceUzs;
    const sellerNameOverride = options.sellerNameOverride || product.sellerName;

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.productId === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
          priceOverrideUzs,
          sellerNameOverride,
        };
        return updated;
      }
      return [
        ...prev,
        {
          id: `ci-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          productId: product.id,
          selectedColor,
          selectedSize,
          quantity,
          priceOverrideUzs,
          sellerNameOverride,
        },
      ];
    });

    const prodTitle = getLocalizedTitle(product, lang);
    const toastMsg =
      lang === 'uz'
        ? `"${prodTitle.slice(0, 24)}..." savatga qoʻshildi! 🛒`
        : lang === 'ru'
        ? `"${prodTitle.slice(0, 24)}..." добавлен в корзину! 🛒`
        : `Added "${prodTitle.slice(0, 24)}..." to Cart! 🛒`;
    sounds.playCartChime();
    showToast(toastMsg);
  };

  const toggleCompare = (product) => {
    if (!product) return;
    const prodId = typeof product === 'string' ? product : product.id;
    setCompareList((prev) => {
      const exists = prev.includes(prodId);
      if (exists) {
        sounds.playCompareChime();
        showToast(lang === 'uz' ? 'Solishtirishdan olib tashlandi' : lang === 'ru' ? 'Удалено из сравнения' : 'Removed from comparison');
        return prev.filter((id) => id !== prodId);
      }
      if (prev.length >= 4) {
        showToast(lang === 'uz' ? 'Koʻpi bilan 4 ta mahsulotni solishtirish mumkin' : lang === 'ru' ? 'Можно сравнивать максимум 4 товара' : 'You can compare up to 4 products', 'info');
        return prev;
      }
      sounds.playCompareChime();
      showToast(lang === 'uz' ? 'Solishtirishga qoʻshildi ⚖️' : lang === 'ru' ? 'Добавлено в сравнение ⚖️' : 'Added to comparison ⚖️');
      return [...prev, prodId];
    });
  };

  const isInCompare = (productId) => {
    return compareList.includes(productId);
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const updateCartItemQuantity = (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const updateCartItemVariant = (cartItemId, { selectedColor, selectedSize }) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === cartItemId
          ? {
              ...item,
              selectedColor: selectedColor ?? item.selectedColor,
              selectedSize: selectedSize ?? item.selectedSize,
            }
          : item
      )
    );
  };

  const removeFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
    showToast(
      lang === 'uz'
        ? 'Mahsulot savatdan olib tashlandi'
        : lang === 'ru'
        ? 'Товар удален из корзины'
        : 'Item removed from cart',
      'info'
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const enrichedCart = useMemo(() => {
    return cart
      .map((item) => {
        const product = products.find((p) => p.id === item.productId);
        if (!product) return null;
        const unitPriceUzs = item.priceOverrideUzs || product.priceUzs;
        return {
          ...item,
          product,
          sellerName: item.sellerNameOverride || product.sellerName,
          storeId: product.storeId,
          unitPriceUzs,
          lineTotalUzs: unitPriceUzs * item.quantity,
        };
      })
      .filter(Boolean);
  }, [cart, products]);

  const cartGroupedBySeller = useMemo(() => {
    const groups = {};
    enrichedCart.forEach((item) => {
      const key = item.sellerName || 'SAVDOX Direct';
      if (!groups[key]) {
        groups[key] = {
          sellerName: key,
          storeId: item.storeId,
          items: [],
          sellerSubtotalUzs: 0,
        };
      }
      groups[key].items.push(item);
      groups[key].sellerSubtotalUzs += item.lineTotalUzs;
    });
    return Object.values(groups);
  }, [enrichedCart]);

  const cartSubtotalUzs = useMemo(
    () => enrichedCart.reduce((sum, item) => sum + item.lineTotalUzs, 0),
    [enrichedCart]
  );

  const applyCouponCode = (rawCode) => {
    const clean = (rawCode || '').trim().toUpperCase();
    const found = coupons.find((c) => c.code.toUpperCase() === clean);
    if (!found) {
      showToast('Invalid or expired coupon code', 'error');
      return { success: false, message: 'Invalid coupon code' };
    }
    if (cartSubtotalUzs < found.minOrderUzs) {
      const msg = `Minimum order of ${found.minOrderUzs.toLocaleString()} UZS required for ${found.code}`;
      showToast(msg, 'error');
      return { success: false, message: msg };
    }
    setAppliedCoupon(found);
    showToast(`Coupon ${found.code} applied!`);
    return { success: true, coupon: found };
  };

  const couponDiscountUzs = useMemo(() => {
    if (!appliedCoupon) return 0;
    if (cartSubtotalUzs < appliedCoupon.minOrderUzs) return 0;
    if (appliedCoupon.discountType === 'percentage') {
      const raw = Math.round((cartSubtotalUzs * appliedCoupon.discountValue) / 100);
      return appliedCoupon.maxDiscountUzs ? Math.min(raw, appliedCoupon.maxDiscountUzs) : raw;
    }
    return Math.min(cartSubtotalUzs, appliedCoupon.discountValue);
  }, [appliedCoupon, cartSubtotalUzs]);

  const createOrder = ({
    customerName,
    customerPhone,
    city,
    district,
    streetAddress,
    lat,
    lng,
    deliveryMethod,
    deliveryTimeSlot,
    deliveryFeeUzs,
    paymentMethod,
    useBonusPointsUzs = 0,
    customerNotes = '',
  }) => {
    const orderNumber = `SVX-2026-${Math.floor(10000 + Math.random() * 89999)}`;
    const trackingCode = `SVX-TRK-${Math.floor(10000 + Math.random() * 89999)}`;
    const totalUzs = Math.max(
      0,
      cartSubtotalUzs + deliveryFeeUzs - couponDiscountUzs - useBonusPointsUzs
    );

    const newOrder = {
      id: `ord-${Date.now()}`,
      orderNumber,
      createdAt: new Date().toISOString(),
      customerName,
      customerPhone,
      city,
      district,
      streetAddress,
      deliveryMethod,
      deliveryTimeSlot,
      paymentMethod,
      paymentStatus: paymentMethod === 'cod' ? 'pending' : 'paid',
      orderStatus: 'Confirmed',
      subtotalUzs: cartSubtotalUzs,
      deliveryFeeUzs,
      discountUzs: couponDiscountUzs,
      bonusPointsUsed: useBonusPointsUzs,
      totalUzs,
      trackingCode,
      customerNotes,
      courier: {
        name: 'Azizbek Karimov',
        phone: '+998 90 123 45 67',
        vehicle: 'Chevrolet Damas / Electro Express • 01 M 552 SV',
        rating: 4.97,
        etaMinutes: deliveryMethod === 'express_2h' ? 45 : 180,
        originLat: 41.3275,
        originLng: 69.2810,
        currentLat: 41.3120,
        currentLng: 69.2610,
        destLat: lat || 41.2995,
        destLng: lng || 69.2401,
      },
      items: enrichedCart.map((ci) => ({
        productId: ci.productId,
        name: ci.product.nameEn,
        image: ci.product.images[0],
        sellerName: ci.sellerName,
        storeId: ci.storeId,
        selectedColor: ci.selectedColor,
        selectedSize: ci.selectedSize,
        unitPriceUzs: ci.unitPriceUzs,
        quantity: ci.quantity,
      })),
    };

    setOrders((prev) => [newOrder, ...prev]);
    sounds.playSuccessChime();

    const earnedPoints = Math.round((totalUzs * bonusWallet.cashbackPercent) / 100);
    setBonusWallet((prev) => {
      const nextBalance = Math.max(0, prev.pointsBalance - useBonusPointsUzs + earnedPoints);
      const nextLifetime = prev.lifetimePoints + earnedPoints;
      const tierObj =
        [...LOYALTY_TIERS].reverse().find((t) => nextLifetime >= t.minPoints) || LOYALTY_TIERS[0];

      const nextHistory = [
        {
          id: `bh-${Date.now()}`,
          title: `Cashback (${prev.cashbackPercent}%) on Order ${orderNumber}`,
          points: +earnedPoints,
          date: new Date().toISOString().slice(0, 10),
        },
        ...prev.history,
      ];
      if (useBonusPointsUzs > 0) {
        nextHistory.unshift({
          id: `bh-spend-${Date.now()}`,
          title: `Redeemed on Order ${orderNumber}`,
          points: -useBonusPointsUzs,
          date: new Date().toISOString().slice(0, 10),
        });
      }

      return {
        ...prev,
        pointsBalance: nextBalance,
        lifetimePoints: nextLifetime,
        tier: tierObj.name,
        cashbackPercent: tierObj.cashbackPercent,
        history: nextHistory,
      };
    });

    clearCart();
    showToast(`Order ${orderNumber} Confirmed! Earned +${earnedPoints.toLocaleString()} Bonus Points!`);
    return newOrder;
  };

  const updateOrderStatus = (orderId, nextStatus) => {
    setOrders((prev) =>
      prev.map((o) => {
        if (o.id !== orderId && o.orderNumber !== orderId) return o;
        const progressMap = {
          Pending: 0.1,
          Confirmed: 0.25,
          Preparing: 0.4,
          Shipped: 0.65,
          'Out for Delivery': 0.85,
          Delivered: 1.0,
          Cancelled: 0,
        };
        const ratio = progressMap[nextStatus] ?? 0.5;
        const currentLat =
          o.courier.originLat + (o.courier.destLat - o.courier.originLat) * ratio;
        const currentLng =
          o.courier.originLng + (o.courier.destLng - o.courier.originLng) * ratio;

        return {
          ...o,
          orderStatus: nextStatus,
          courier: {
            ...o.courier,
            currentLat: Number(currentLat.toFixed(5)),
            currentLng: Number(currentLng.toFixed(5)),
            etaMinutes: nextStatus === 'Delivered' ? 0 : Math.max(5, Math.round((1 - ratio) * 60)),
          },
        };
      })
    );
    showToast(`Order status updated to "${nextStatus}"`);
  };

  const addProduct = (newProductData) => {
    const priceUzs = Number(newProductData.priceUzs) || 100000;
    const oldPriceUzs = Number(newProductData.oldPriceUzs) || Math.round(priceUzs * 1.15);
    const discountPercent =
      oldPriceUzs > priceUzs ? Math.round(((oldPriceUzs - priceUzs) / oldPriceUzs) * 100) : 0;

    const categoryObj =
      categories.find((c) => c.slug === newProductData.categorySlug) || categories[0];

    const created = {
      id: `prod-${Date.now()}`,
      slug: `${(newProductData.nameEn || 'product').toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now().toString().slice(-4)}`,
      sku: `SVX-${Date.now().toString().slice(-5)}`,
      categoryId: categoryObj.id,
      categorySlug: categoryObj.slug,
      subcategory: newProductData.subcategory || categoryObj.subcategories[0] || 'General',
      storeId: user?.storeId || 'store-malika-mobile',
      sellerName: newProductData.sellerName || 'Malika Smart Hub',
      sellerRating: 4.92,
      brand: newProductData.brand || 'SAVDOX Partner',
      nameUz: newProductData.nameUz || newProductData.nameEn,
      nameRu: newProductData.nameRu || newProductData.nameEn,
      nameEn: newProductData.nameEn,
      descriptionUz: newProductData.descriptionUz || newProductData.descriptionEn || '',
      descriptionRu: newProductData.descriptionRu || newProductData.descriptionEn || '',
      descriptionEn: newProductData.descriptionEn || 'Official marketplace product with Uzbekistan warranty.',
      priceUzs,
      oldPriceUzs,
      discountPercent,
      rating: 5.0,
      reviewCount: 1,
      soldCount: 0,
      stock: Number(newProductData.stock) || 25,
      images:
        newProductData.images?.length > 0
          ? newProductData.images
          : ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80'],
      colors: newProductData.colors || [{ name: 'Emerald Edition', hex: '#059669' }],
      sizes: newProductData.sizes || ['Standard'],
      specifications: newProductData.specifications || {
        Origin: 'Official Uzbekistan Partner',
        Warranty: '12 Months Official Service',
      },
      sellerOffers: [
        {
          storeId: user?.storeId || 'store-malika-mobile',
          sellerName: newProductData.sellerName || 'Malika Smart Hub',
          priceUzs,
          deliveryEta: '90 mins Express',
          rating: 4.92,
          warranty: '1 Year Official',
        },
      ],
      visualTags: [categoryObj.slug, (newProductData.brand || '').toLowerCase()],
      isFlashSale: Boolean(newProductData.isFlashSale),
      isPopular: true,
      isBestSeller: false,
      isRecommended: true,
      approvalStatus: newProductData.approvalStatus || 'approved',
    };

    setProducts((prev) => [created, ...prev]);
    showToast(`Product "${created.nameEn}" published to catalog!`);
    return created;
  };

  const updateProduct = (productId, updates) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id !== productId) return p;
        const priceUzs = updates.priceUzs !== undefined ? Number(updates.priceUzs) : p.priceUzs;
        const oldPriceUzs =
          updates.oldPriceUzs !== undefined ? Number(updates.oldPriceUzs) : p.oldPriceUzs;
        const discountPercent =
          oldPriceUzs && oldPriceUzs > priceUzs
            ? Math.round(((oldPriceUzs - priceUzs) / oldPriceUzs) * 100)
            : 0;
        return {
          ...p,
          ...updates,
          priceUzs,
          oldPriceUzs,
          discountPercent,
        };
      })
    );
    showToast('Product updated successfully');
  };

  const deleteProduct = (productId) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
    showToast('Product deleted from catalog', 'info');
  };

  const addReview = ({ productId, rating, pros, cons, comment }) => {
    const newRev = {
      id: `rev-${Date.now()}`,
      productId,
      userName: user?.fullName || 'Verified Shopper',
      city: selectedCity.nameEn,
      rating: Number(rating) || 5,
      date: new Date().toISOString().slice(0, 10),
      verified: true,
      pros,
      cons,
      comment,
    };
    setReviews((prev) => [newRev, ...prev]);
    showToast('Thank you! Your verified review has been posted.');
  };

  const replyToReview = (reviewId, sellerReply) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === reviewId ? { ...r, sellerReply } : r))
    );
    showToast('Seller reply published');
  };

  const addCategory = (catData) => {
    const created = {
      id: `cat-${Date.now()}`,
      slug: catData.nameEn.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      nameUz: catData.nameUz || catData.nameEn,
      nameRu: catData.nameRu || catData.nameEn,
      nameEn: catData.nameEn,
      icon: 'Package',
      image:
        catData.image ||
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      productCount: 120,
      subcategories: catData.subcategories || ['Featured', 'New Arrivals'],
      filterOptions: ['Brand', 'Price', 'Rating', 'Warranty'],
    };
    setCategories((prev) => [...prev, created]);
    showToast(`Category "${created.nameEn}" added`);
  };

  const addCoupon = (couponData) => {
    const created = {
      code: couponData.code.toUpperCase().trim(),
      titleUz: couponData.titleEn,
      titleRu: couponData.titleEn,
      titleEn: couponData.titleEn,
      discountType: couponData.discountType || 'fixed',
      discountValue: Number(couponData.discountValue) || 50000,
      minOrderUzs: Number(couponData.minOrderUzs) || 200000,
      maxDiscountUzs: Number(couponData.maxDiscountUzs) || 500000,
      expiresAt: '2027-12-31T00:00:00Z',
    };
    setCoupons((prev) => [created, ...prev]);
    showToast(`Promo code ${created.code} created!`);
  };

  const resolveComplaint = (complaintId, resolutionNotes) => {
    setComplaints((prev) =>
      prev.map((c) =>
        c.id === complaintId ? { ...c, status: 'resolved', resolutionNotes } : c
      )
    );
    showToast('Complaint marked as resolved');
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(null));
    } catch {}
    if (supabase) {
      supabase.auth.signOut().catch(() => {});
    }
    showToast(
      lang === 'uz'
        ? 'Hisobdan chiqildi'
        : lang === 'ru'
        ? 'Вы вышли из системы'
        : 'Signed out'
    );
  };

  const openAiWithPrompt = (promptText = '') => {
    setAiInitialPrompt(promptText);
    setIsAiAssistantOpen(true);
  };

  // Live dynamic category counts strictly synchronized with actual catalog products
  const categoriesWithLiveCounts = useMemo(() => {
    return categories.map((cat) => {
      const actualCount = products.filter(
        (p) => p.categorySlug === cat.slug && p.approvalStatus !== 'rejected'
      ).length;
      return {
        ...cat,
        productCount: actualCount,
      };
    });
  }, [categories, products]);

  const value = {
    lang,
    setLang,
    t,
    selectedCity,
    setSelectedCity,
    user,
    setUser,
    logout,
    isSupabaseConfigured,
    supabase,
    supabaseStatus,
    categories: categoriesWithLiveCounts,
    rawCategories: categories,
    addCategory,
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    stores,
    setStores,
    cart,
    enrichedCart,
    cartGroupedBySeller,
    cartSubtotalUzs,
    addToCart,
    updateCartItemQuantity,
    updateCartItemVariant,
    removeFromCart,
    clearCart,
    appliedCoupon,
    setAppliedCoupon,
    applyCouponCode,
    couponDiscountUzs,
    coupons,
    addCoupon,
    favorites,
    toggleFavorite,
    compareList,
    toggleCompare,
    isInCompare,
    clearCompare,
    recentlyViewed,
    recordProductView,
    orders,
    createOrder,
    updateOrderStatus,
    reviews,
    addReview,
    replyToReview,
    complaints,
    resolveComplaint,
    bonusWallet,
    setBonusWallet,
    searchHistory,
    setSearchHistory,
    toast,
    showToast,
    isAiAssistantOpen,
    setIsAiAssistantOpen,
    aiInitialPrompt,
    openAiWithPrompt,
  };

  return (
    <MarketplaceContext.Provider value={value}>
      {children}
    </MarketplaceContext.Provider>
  );
}

export function useMarketplace() {
  const ctx = useContext(MarketplaceContext);
  if (!ctx) throw new Error('useMarketplace must be used within a MarketplaceProvider');
  return ctx;
}
