# SAVDOX — Premium Multi-Vendor E-Commerce Marketplace

**Tagline:** *Everything You Need, In One Place.*

SAVDOX is a full-stack, multi-vendor e-commerce marketplace engineered for Uzbekistan (`UZS` currency, 7 regional hubs, official `Click`, `Payme`, `Uzum Bank` checkout architecture, 90-minute express delivery, and trilingual `Uzbek / Russian / English` support) with international expansion readiness.

---

## Architecture & Directory Structure

```text
savdox/
├── web/                  # Responsive React + Tailwind CSS + Framer Motion + React Router Web App
│   ├── public/
│   ├── src/
│   │   ├── components/   # ProductCard, AiShoppingAssistantModal, InteractiveMap
│   │   ├── context/      # MarketplaceContext (Persisted Auth, Cart, Orders, Bonus, Seller, Admin)
│   │   ├── layouts/      # MainLayout (Desktop Sticky Header + Mobile Bottom Navigation)
│   │   ├── pages/        # Home, Catalog, ProductDetails, Cart, Checkout, OrderTracking, Seller, Admin, Bonus, Auth
│   │   ├── services/     # Supabase client & Tokenized Payment Gateway Service
│   │   └── styles/       # Tailwind CSS + Glassmorphism AI utilities
│   ├── index.html
│   └── tailwind.config.js
├── mobile/               # Native Android & iOS App (React Native + Expo + Expo Router + NativeWind + Reanimated)
│   ├── app/
│   │   ├── (tabs)/       # Native Bottom Navigation: Home, Categories, Search/AI, Cart, Profile
│   │   └── product/[id].jsx
│   ├── src/
│   │   ├── components/   # NativeProductCard (100% React Native primitives, zero HTML tags)
│   │   ├── hooks/        # useMobileMarketplace
│   │   └── services/     # mobileSupabase (AsyncStorage session persistence)
│   └── app.json
├── shared/               # Cross-platform reusable business logic & constants
│   ├── constants/        # 16 Categories, Multi-Vendor Catalog, Trilingual UZ/RU/EN Dictionary
│   ├── types/            # Order statuses, Payment providers, Delivery methods, Loyalty tiers
│   └── utils/            # UZS formatters & Grounded AI Shopping Assistant + Visual Search Engine
└── supabase/             # Backend PostgreSQL Database & Edge Functions
    ├── migrations/       # 001_initial_schema.sql (All 21 tables, FKs, Indexes & RLS policies)
    └── functions/        # ai-shopping-assistant & payment-gateway Edge Functions
```

---

## Quick Start

### 1. Run the Web Application
```bash
cd web
npm.cmd install
npm.cmd run dev
```

### 2. Run the Mobile Application (Android & iOS via Expo)
```bash
cd mobile
npm.cmd install
npx.cmd expo start
```

### 3. Connect Supabase Backend (Optional — Sandbox Dataset Built-in)
Copy `web/.env.example` to `web/.env` and add your Supabase project URL and public anon key:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-public-anon-key-here
VITE_PAYMENT_SANDBOX_MODE=true
```
Apply the SQL schema in `supabase/migrations/001_initial_schema.sql` via the Supabase SQL Editor or `supabase db push`.

