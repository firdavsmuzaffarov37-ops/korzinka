import React, { createContext, useContext, useState, useMemo } from 'react';
import { CATEGORIES } from '../../../shared/constants/categories';
import {
  INITIAL_PRODUCTS,
  FEATURED_STORES,
  ACTIVE_COUPONS,
  INITIAL_ORDERS,
} from '../../../shared/constants/catalog';
import { TRANSLATIONS } from '../../../shared/constants/translations';
import { UZBEKISTAN_CITIES } from '../../../shared/types';

const MobileMarketplaceContext = createContext(null);

export function MobileMarketplaceProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [selectedCity, setSelectedCity] = useState(UZBEKISTAN_CITIES[0]);
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [categories] = useState(CATEGORIES);
  const [stores] = useState(FEATURED_STORES);
  const [coupons] = useState(ACTIVE_COUPONS);
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [favorites, setFavorites] = useState(['prod-redmi-note-13']);
  const [cart, setCart] = useState([
    {
      id: 'm-ci-1',
      productId: 'prod-redmi-note-13',
      selectedColor: 'Mint Green',
      selectedSize: '8GB / 256GB',
      quantity: 1,
    },
  ]);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [bonusPoints, setBonusPoints] = useState(45000);
  const [userProfile, setUserProfile] = useState({
    fullName: 'Temurbek Yoqubov',
    phone: '+998 90 945 12 34',
    email: 'temurbek@savdox.uz',
    city: 'Tashkent',
    district: 'Yunusabad',
    streetAddress: 'Amir Temur Avenue 107B, Apt 42',
    role: 'customer',
  });

  const t = useMemo(() => TRANSLATIONS[lang] || TRANSLATIONS.en, [lang]);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [productId, ...prev]
    );
  };

  const addToCart = (product, options = {}) => {
    const selectedColor = options.selectedColor || product.colors?.[0]?.name || 'Default';
    const selectedSize = options.selectedSize || product.sizes?.[0] || 'Standard';
    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.productId === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: `m-ci-${Date.now()}`,
          productId: product.id,
          selectedColor,
          selectedSize,
          quantity: 1,
        },
      ];
    });
  };

  const updateCartQuantity = (itemId, nextQty) => {
    if (nextQty <= 0) {
      setCart((prev) => prev.filter((i) => i.id !== itemId));
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.id === itemId ? { ...i, quantity: nextQty } : i))
    );
  };

  const enrichedCart = useMemo(() => {
    return cart
      .map((item) => {
        const product = products.find((p) => p.id === item.productId);
        if (!product) return null;
        return {
          ...item,
          product,
          unitPriceUzs: product.priceUzs,
          lineTotalUzs: product.priceUzs * item.quantity,
        };
      })
      .filter(Boolean);
  }, [cart, products]);

  const cartSubtotalUzs = useMemo(
    () => enrichedCart.reduce((sum, item) => sum + item.lineTotalUzs, 0),
    [enrichedCart]
  );

  const placeMobileOrder = ({ paymentMethod = 'click', deliveryMethod = 'express_2h' }) => {
    const orderNumber = `SVX-2026-${Math.floor(10000 + Math.random() * 89999)}`;
    const newOrder = {
      id: `ord-${Date.now()}`,
      orderNumber,
      createdAt: new Date().toISOString(),
      customerName: userProfile.fullName,
      customerPhone: userProfile.phone,
      city: selectedCity.nameEn,
      district: userProfile.district,
      streetAddress: userProfile.streetAddress,
      deliveryMethod,
      deliveryTimeSlot: '60 - 90 mins Express',
      paymentMethod,
      paymentStatus: paymentMethod === 'cod' ? 'pending' : 'paid',
      orderStatus: 'Confirmed',
      subtotalUzs: cartSubtotalUzs,
      deliveryFeeUzs: 0,
      discountUzs: appliedCoupon ? 50000 : 0,
      totalUzs: Math.max(0, cartSubtotalUzs - (appliedCoupon ? 50000 : 0)),
      trackingCode: `SVX-TRK-${Math.floor(10000 + Math.random() * 89999)}`,
      courier: {
        name: 'Azizbek Karimov',
        phone: '+998 90 123 45 67',
        vehicle: 'Chevrolet Cobalt • 01 A 774 KA',
        rating: 4.96,
        etaMinutes: 25,
      },
      items: enrichedCart.map((ci) => ({
        productId: ci.productId,
        name: ci.product.nameEn,
        image: ci.product.images[0],
        sellerName: ci.product.sellerName,
        unitPriceUzs: ci.unitPriceUzs,
        quantity: ci.quantity,
      })),
    };
    setOrders((prev) => [newOrder, ...prev]);
    setBonusPoints((prev) => prev + Math.round(cartSubtotalUzs * 0.03));
    setCart([]);
    return newOrder;
  };

  return (
    <MobileMarketplaceContext.Provider
      value={{
        lang,
        setLang,
        t,
        selectedCity,
        setSelectedCity,
        products,
        setProducts,
        categories,
        stores,
        coupons,
        orders,
        setOrders,
        favorites,
        toggleFavorite,
        cart,
        enrichedCart,
        cartSubtotalUzs,
        addToCart,
        updateCartQuantity,
        appliedCoupon,
        setAppliedCoupon,
        bonusPoints,
        userProfile,
        setUserProfile,
        placeMobileOrder,
      }}
    >
      {children}
    </MobileMarketplaceContext.Provider>
  );
}

export function useMobileMarketplace() {
  return useContext(MobileMarketplaceContext);
}

