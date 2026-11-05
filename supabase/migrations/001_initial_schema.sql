-- ============================================================================
-- SAVDOX — PREMIUM MULTI-VENDOR E-COMMERCE MARKETPLACE
-- Complete PostgreSQL Schema, Relationships, Indexes, and RLS Policies
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- 1. PROFILES
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE,
  phone TEXT UNIQUE,
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  role TEXT NOT NULL DEFAULT 'customer' CHECK (role IN ('customer', 'seller', 'admin')),
  preferred_language TEXT NOT NULL DEFAULT 'uz' CHECK (preferred_language IN ('uz', 'ru', 'en')),
  city TEXT NOT NULL DEFAULT 'Tashkent',
  referral_code TEXT UNIQUE DEFAULT UPPER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 8)),
  referred_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  is_verified BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. ADDRESSES
CREATE TABLE IF NOT EXISTS public.addresses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  label TEXT NOT NULL DEFAULT 'Home',
  recipient_name TEXT NOT NULL,
  recipient_phone TEXT NOT NULL,
  city TEXT NOT NULL DEFAULT 'Tashkent',
  district TEXT NOT NULL,
  street_address TEXT NOT NULL,
  apartment TEXT,
  entrance TEXT,
  floor TEXT,
  latitude NUMERIC(10, 7) NOT NULL DEFAULT 41.2995,
  longitude NUMERIC(10, 7) NOT NULL DEFAULT 69.2401,
  delivery_notes TEXT,
  is_default BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. STORES
CREATE TABLE IF NOT EXISTS public.stores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  owner_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  logo_url TEXT,
  banner_url TEXT,
  city TEXT NOT NULL DEFAULT 'Tashkent',
  address TEXT,
  phone TEXT,
  email TEXT,
  rating NUMERIC(3, 2) NOT NULL DEFAULT 5.00 CHECK (rating >= 0 AND rating <= 5),
  review_count INTEGER NOT NULL DEFAULT 0,
  total_sales INTEGER NOT NULL DEFAULT 0,
  is_verified BOOLEAN NOT NULL DEFAULT FALSE,
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'suspended')),
  commission_rate NUMERIC(5, 2) NOT NULL DEFAULT 8.00,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. SELLER VERIFICATIONS
CREATE TABLE IF NOT EXISTS public.seller_verifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID NOT NULL REFERENCES public.stores(id) ON DELETE CASCADE,
  seller_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  inn_tax_id TEXT NOT NULL,
  bank_account_mfo TEXT NOT NULL,
  bank_account_number TEXT NOT NULL,
  license_document_url TEXT,
  passport_document_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  admin_notes TEXT,
  reviewed_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. CATEGORIES
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  parent_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  slug TEXT NOT NULL UNIQUE,
  name_uz TEXT NOT NULL,
  name_ru TEXT NOT NULL,
  name_en TEXT NOT NULL,
  description_uz TEXT,
  description_ru TEXT,
  description_en TEXT,
  image_url TEXT NOT NULL,
  icon_name TEXT NOT NULL DEFAULT 'Package',
  product_count INTEGER NOT NULL DEFAULT 0,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 6. PRODUCTS
CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID NOT NULL REFERENCES public.stores(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES public.categories(id) ON DELETE RESTRICT,
  subcategory_slug TEXT,
  slug TEXT NOT NULL UNIQUE,
  sku TEXT NOT NULL UNIQUE,
  name_uz TEXT NOT NULL,
  name_ru TEXT NOT NULL,
  name_en TEXT NOT NULL,
  description_uz TEXT NOT NULL,
  description_ru TEXT NOT NULL,
  description_en TEXT NOT NULL,
  brand TEXT NOT NULL,
  price_uzs BIGINT NOT NULL CHECK (price_uzs >= 0),
  old_price_uzs BIGINT CHECK (old_price_uzs IS NULL OR old_price_uzs >= price_uzs),
  discount_percent INTEGER GENERATED ALWAYS AS (
    CASE
      WHEN old_price_uzs IS NOT NULL AND old_price_uzs > price_uzs AND old_price_uzs > 0
      THEN ROUND(((old_price_uzs - price_uzs)::NUMERIC / old_price_uzs::NUMERIC) * 100)::INTEGER
      ELSE 0
    END
  ) STORED,
  rating NUMERIC(3, 2) NOT NULL DEFAULT 4.80 CHECK (rating >= 0 AND rating <= 5),
  review_count INTEGER NOT NULL DEFAULT 0,
  sold_count INTEGER NOT NULL DEFAULT 0,
  specifications JSONB NOT NULL DEFAULT '{}'::JSONB,
  visual_tags TEXT[] NOT NULL DEFAULT '{}',
  is_flash_sale BOOLEAN NOT NULL DEFAULT FALSE,
  flash_sale_ends_at TIMESTAMPTZ,
  is_popular BOOLEAN NOT NULL DEFAULT FALSE,
  is_best_seller BOOLEAN NOT NULL DEFAULT FALSE,
  is_recommended BOOLEAN NOT NULL DEFAULT FALSE,
  approval_status TEXT NOT NULL DEFAULT 'approved' CHECK (approval_status IN ('pending', 'approved', 'rejected')),
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 7. PRODUCT IMAGES
CREATE TABLE IF NOT EXISTS public.product_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  is_primary BOOLEAN NOT NULL DEFAULT FALSE,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 8. PRODUCT VARIANTS
CREATE TABLE IF NOT EXISTS public.product_variants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  sku_variant TEXT NOT NULL UNIQUE,
  color_name TEXT,
  color_hex TEXT,
  size_label TEXT,
  storage_label TEXT,
  price_override_uzs BIGINT CHECK (price_override_uzs IS NULL OR price_override_uzs >= 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 9. INVENTORY
CREATE TABLE IF NOT EXISTS public.inventory (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  variant_id UUID REFERENCES public.product_variants(id) ON DELETE CASCADE,
  warehouse_city TEXT NOT NULL DEFAULT 'Tashkent',
  stock_quantity INTEGER NOT NULL DEFAULT 0 CHECK (stock_quantity >= 0),
  reserved_quantity INTEGER NOT NULL DEFAULT 0 CHECK (reserved_quantity >= 0),
  low_stock_threshold INTEGER NOT NULL DEFAULT 5,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(product_id, variant_id, warehouse_city)
);

-- 10. CARTS
CREATE TABLE IF NOT EXISTS public.carts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL UNIQUE REFERENCES public.profiles(id) ON DELETE CASCADE,
  coupon_code TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 11. CART ITEMS
CREATE TABLE IF NOT EXISTS public.cart_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  cart_id UUID NOT NULL REFERENCES public.carts(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  variant_id UUID REFERENCES public.product_variants(id) ON DELETE SET NULL,
  selected_color TEXT,
  selected_size TEXT,
  quantity INTEGER NOT NULL DEFAULT 1 CHECK (quantity > 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(cart_id, product_id, selected_color, selected_size)
);

-- 12. FAVORITES
CREATE TABLE IF NOT EXISTS public.favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

-- 13. COUPONS
CREATE TABLE IF NOT EXISTS public.coupons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code TEXT NOT NULL UNIQUE,
  title_uz TEXT NOT NULL,
  title_ru TEXT NOT NULL,
  title_en TEXT NOT NULL,
  discount_type TEXT NOT NULL CHECK (discount_type IN ('percentage', 'fixed')),
  discount_value BIGINT NOT NULL CHECK (discount_value > 0),
  min_order_uzs BIGINT NOT NULL DEFAULT 0,
  max_discount_uzs BIGINT,
  store_id UUID REFERENCES public.stores(id) ON DELETE CASCADE,
  usage_limit INTEGER,
  used_count INTEGER NOT NULL DEFAULT 0,
  starts_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 14. ORDERS
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number TEXT NOT NULL UNIQUE,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
  address_id UUID REFERENCES public.addresses(id) ON DELETE SET NULL,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  delivery_address_snapshot JSONB NOT NULL,
  delivery_method TEXT NOT NULL CHECK (delivery_method IN ('express_2h', 'same_day', 'standard', 'pickup')),
  delivery_time_slot TEXT NOT NULL,
  payment_method TEXT NOT NULL CHECK (payment_method IN ('click', 'payme', 'uzum', 'cod')),
  payment_status TEXT NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
  order_status TEXT NOT NULL DEFAULT 'Pending' CHECK (
    order_status IN ('Pending', 'Confirmed', 'Preparing', 'Shipped', 'Out for Delivery', 'Delivered', 'Cancelled')
  ),
  subtotal_uzs BIGINT NOT NULL CHECK (subtotal_uzs >= 0),
  delivery_fee_uzs BIGINT NOT NULL DEFAULT 0 CHECK (delivery_fee_uzs >= 0),
  discount_uzs BIGINT NOT NULL DEFAULT 0 CHECK (discount_uzs >= 0),
  bonus_points_used BIGINT NOT NULL DEFAULT 0 CHECK (bonus_points_used >= 0),
  total_uzs BIGINT NOT NULL CHECK (total_uzs >= 0),
  coupon_code TEXT,
  customer_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 15. ORDER ITEMS
CREATE TABLE IF NOT EXISTS public.order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
  store_id UUID NOT NULL REFERENCES public.stores(id) ON DELETE RESTRICT,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE RESTRICT,
  variant_id UUID REFERENCES public.product_variants(id) ON DELETE SET NULL,
  product_name_snapshot TEXT NOT NULL,
  product_image_snapshot TEXT NOT NULL,
  selected_color TEXT,
  selected_size TEXT,
  unit_price_uzs BIGINT NOT NULL CHECK (unit_price_uzs >= 0),
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  line_total_uzs BIGINT NOT NULL CHECK (line_total_uzs >= 0),
  fulfillment_status TEXT NOT NULL DEFAULT 'Pending' CHECK (
    fulfillment_status IN ('Pending', 'Confirmed', 'Preparing', 'Shipped', 'Out for Delivery', 'Delivered', 'Cancelled')
  ),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 16. PAYMENTS
CREATE TABLE IF NOT EXISTS public.payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
  provider TEXT NOT NULL CHECK (provider IN ('click', 'payme', 'uzum', 'cod')),
  provider_transaction_id TEXT UNIQUE,
  amount_uzs BIGINT NOT NULL CHECK (amount_uzs >= 0),
  currency TEXT NOT NULL DEFAULT 'UZS',
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'authorized', 'paid', 'failed', 'cancelled', 'refunded')),
  is_sandbox BOOLEAN NOT NULL DEFAULT TRUE,
  redirect_url TEXT,
  metadata JSONB NOT NULL DEFAULT '{}'::JSONB,
  paid_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 17. DELIVERIES
CREATE TABLE IF NOT EXISTS public.deliveries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL UNIQUE REFERENCES public.orders(id) ON DELETE CASCADE,
  tracking_code TEXT NOT NULL UNIQUE,
  delivery_partner TEXT NOT NULL DEFAULT 'SAVDOX Express',
  courier_name TEXT NOT NULL DEFAULT 'Azizbek Karimov',
  courier_phone TEXT NOT NULL DEFAULT '+998 90 123 45 67',
  courier_vehicle TEXT NOT NULL DEFAULT 'Chevrolet Damas / Electro Scooter',
  courier_rating NUMERIC(3, 2) NOT NULL DEFAULT 4.95,
  status TEXT NOT NULL DEFAULT 'Pending' CHECK (
    status IN ('Pending', 'Confirmed', 'Preparing', 'Shipped', 'Out for Delivery', 'Delivered', 'Cancelled')
  ),
  origin_lat NUMERIC(10, 7) NOT NULL DEFAULT 41.3111,
  origin_lng NUMERIC(10, 7) NOT NULL DEFAULT 69.2797,
  current_lat NUMERIC(10, 7) NOT NULL DEFAULT 41.3050,
  current_lng NUMERIC(10, 7) NOT NULL DEFAULT 69.2600,
  destination_lat NUMERIC(10, 7) NOT NULL DEFAULT 41.2995,
  destination_lng NUMERIC(10, 7) NOT NULL DEFAULT 69.2401,
  estimated_arrival TIMESTAMPTZ NOT NULL,
  delivered_at TIMESTAMPTZ,
  status_history JSONB NOT NULL DEFAULT '[]'::JSONB,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 18. REVIEWS
CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  store_id UUID NOT NULL REFERENCES public.stores(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  order_id UUID REFERENCES public.orders(id) ON DELETE SET NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  pros TEXT,
  cons TEXT,
  images TEXT[] NOT NULL DEFAULT '{}',
  seller_reply TEXT,
  seller_replied_at TIMESTAMPTZ,
  is_verified_purchase BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 19. LOYALTY POINTS (SAVDOX BONUS)
CREATE TABLE IF NOT EXISTS public.loyalty_points (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL UNIQUE REFERENCES public.profiles(id) ON DELETE CASCADE,
  points_balance BIGINT NOT NULL DEFAULT 25000 CHECK (points_balance >= 0),
  lifetime_points BIGINT NOT NULL DEFAULT 25000 CHECK (lifetime_points >= 0),
  tier_level TEXT NOT NULL DEFAULT 'Silver' CHECK (tier_level IN ('Bronze', 'Silver', 'Gold', 'Platinum')),
  cashback_percent NUMERIC(4, 2) NOT NULL DEFAULT 2.00,
  referrals_count INTEGER NOT NULL DEFAULT 0,
  transactions JSONB NOT NULL DEFAULT '[]'::JSONB,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 20. NOTIFICATIONS
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'order' CHECK (type IN ('order', 'promo', 'bonus', 'system', 'seller')),
  action_url TEXT,
  is_read BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 21. COMPLAINTS
CREATE TABLE IF NOT EXISTS public.complaints (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  order_id UUID REFERENCES public.orders(id) ON DELETE SET NULL,
  store_id UUID REFERENCES public.stores(id) ON DELETE SET NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
  subject TEXT NOT NULL,
  description TEXT NOT NULL,
  priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'in_review', 'resolved', 'dismissed')),
  resolution_notes TEXT,
  resolved_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  resolved_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================================
-- INDEXES FOR HIGH-PERFORMANCE SEARCH & FILTERING
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_products_category ON public.products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_store ON public.products(store_id);
CREATE INDEX IF NOT EXISTS idx_products_price ON public.products(price_uzs);
CREATE INDEX IF NOT EXISTS idx_products_rating ON public.products(rating DESC);
CREATE INDEX IF NOT EXISTS idx_products_flash ON public.products(is_flash_sale) WHERE is_flash_sale = TRUE;
CREATE INDEX IF NOT EXISTS idx_products_name_trgm ON public.products USING gin (name_en gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_orders_user ON public.orders(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_order_items_store ON public.order_items(store_id);
CREATE INDEX IF NOT EXISTS idx_deliveries_tracking ON public.deliveries(tracking_code);
CREATE INDEX IF NOT EXISTS idx_reviews_product ON public.reviews(product_id, created_at DESC);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) & POLICIES
-- ============================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.stores ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seller_verifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.carts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deliveries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.loyalty_points ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.complaints ENABLE ROW LEVEL SECURITY;

-- Public read access for catalog tables
CREATE POLICY "Public read categories" ON public.categories FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Public read active stores" ON public.stores FOR SELECT USING (status = 'active');
CREATE POLICY "Public read approved products" ON public.products FOR SELECT USING (is_active = TRUE AND approval_status = 'approved');
CREATE POLICY "Public read product images" ON public.product_images FOR SELECT USING (TRUE);
CREATE POLICY "Public read product variants" ON public.product_variants FOR SELECT USING (TRUE);
CREATE POLICY "Public read inventory" ON public.inventory FOR SELECT USING (TRUE);
CREATE POLICY "Public read reviews" ON public.reviews FOR SELECT USING (TRUE);
CREATE POLICY "Public read active coupons" ON public.coupons FOR SELECT USING (is_active = TRUE);

-- User-scoped policies
CREATE POLICY "Users read own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users manage own addresses" ON public.addresses FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own cart" ON public.carts FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own cart items" ON public.cart_items FOR ALL USING (
  EXISTS (SELECT 1 FROM public.carts c WHERE c.id = cart_id AND c.user_id = auth.uid())
);
CREATE POLICY "Users manage own favorites" ON public.favorites FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users view own orders" ON public.orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users create own orders" ON public.orders FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users view own order items" ON public.order_items FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.orders o WHERE o.id = order_id AND o.user_id = auth.uid())
);
CREATE POLICY "Users view own payments" ON public.payments FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users view own deliveries" ON public.deliveries FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.orders o WHERE o.id = order_id AND o.user_id = auth.uid())
);
CREATE POLICY "Users create reviews" ON public.reviews FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users view own loyalty points" ON public.loyalty_points FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users manage own notifications" ON public.notifications FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own complaints" ON public.complaints FOR ALL USING (auth.uid() = user_id);

-- Seller policies
CREATE POLICY "Sellers manage own store" ON public.stores FOR ALL USING (auth.uid() = owner_id);
CREATE POLICY "Sellers manage own verifications" ON public.seller_verifications FOR ALL USING (auth.uid() = seller_id);
CREATE POLICY "Sellers manage own products" ON public.products FOR ALL USING (
  EXISTS (SELECT 1 FROM public.stores s WHERE s.id = store_id AND s.owner_id = auth.uid())
);
CREATE POLICY "Sellers view store order items" ON public.order_items FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.stores s WHERE s.id = store_id AND s.owner_id = auth.uid())
);

-- Admin full access helper
CREATE OR REPLACE FUNCTION public.is_admin() RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'
  );
$$ LANGUAGE sql SECURITY DEFINER;

CREATE POLICY "Admins full access profiles" ON public.profiles FOR ALL USING (public.is_admin());
CREATE POLICY "Admins full access stores" ON public.stores FOR ALL USING (public.is_admin());
CREATE POLICY "Admins full access verifications" ON public.seller_verifications FOR ALL USING (public.is_admin());
CREATE POLICY "Admins full access categories" ON public.categories FOR ALL USING (public.is_admin());
CREATE POLICY "Admins full access products" ON public.products FOR ALL USING (public.is_admin());
CREATE POLICY "Admins full access orders" ON public.orders FOR ALL USING (public.is_admin());
CREATE POLICY "Admins full access coupons" ON public.coupons FOR ALL USING (public.is_admin());
CREATE POLICY "Admins full access complaints" ON public.complaints FOR ALL USING (public.is_admin());

