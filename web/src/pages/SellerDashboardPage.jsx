import React, { useState } from 'react';
import {
  Store,
  Plus,
  Package,
  TrendingUp,
  ShieldCheck,
  Edit3,
  Trash2,
  MessageSquare,
  Percent,
  CheckCircle2,
  Upload,
  Truck,
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { ORDER_STATUSES } from '@shared/types';
import { formatUzs } from '@shared/utils/formatters';

export default function SellerDashboardPage() {
  const {
    lang,
    categories,
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    orders,
    updateOrderStatus,
    reviews,
    replyToReview,
    stores,
    setStores,
    showToast,
  } = useMarketplace();

  // Tabs: 'analytics' | 'products' | 'add_product' | 'orders' | 'reviews' | 'verification'
  const [activeTab, setActiveTab] = useState('products');

  // Add Product Form State
  const [nameEn, setNameEn] = useState('');
  const [nameUz, setNameUz] = useState('');
  const [nameRu, setNameRu] = useState('');
  const [brand, setBrand] = useState('Samsung');
  const [categorySlug, setCategorySlug] = useState('smartphones');
  const [priceUzs, setPriceUzs] = useState('2190000');
  const [oldPriceUzs, setOldPriceUzs] = useState('2590000');
  const [stock, setStock] = useState('35');
  const [imageUrl, setImageUrl] = useState(
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
  );
  const [descriptionEn, setDescriptionEn] = useState(
    'Official Uzbekistan warranty, UZIMEI registered, fast 90-minute delivery.'
  );
  const [isFlashSale, setIsFlashSale] = useState(true);

  // Store & Verification State
  const [storeName, setStoreName] = useState('Malika Smart Hub');
  const [companyName, setCompanyName] = useState('MALIKA DIGITAL TRADE LLC');
  const [innTaxId, setInnTaxId] = useState('309482115');
  const [bankMfo, setBankMfo] = useState('00444 (NBU Tashkent)');
  const [bankAccount, setBankAccount] = useState('20208000905412889001');
  const [verificationStatus, setVerificationStatus] = useState('Approved & Verified');

  // Reply input state
  const [replyTexts, setReplyTexts] = useState({});

  const totalRevenueUzs = orders.reduce((sum, o) => sum + o.totalUzs, 0) + 84500000;

  const handleCreateProduct = (e) => {
    e.preventDefault();
    if (!nameEn.trim()) return;
    addProduct({
      nameEn,
      nameUz: nameUz || nameEn,
      nameRu: nameRu || nameEn,
      brand,
      categorySlug,
      priceUzs: Number(priceUzs),
      oldPriceUzs: Number(oldPriceUzs),
      stock: Number(stock),
      images: [imageUrl],
      descriptionEn,
      sellerName: storeName,
      isFlashSale,
    });
    setNameEn('');
    setNameUz('');
    setNameRu('');
    setActiveTab('products');
  };

  const handleImageFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
      showToast('Product image uploaded and ready!');
    };
    reader.readAsDataURL(file);
  };

  const handleSaveVerification = (e) => {
    e.preventDefault();
    setVerificationStatus('Verified Merchant (Active)');
    setStores((prev) =>
      prev.map((s, i) => (i === 0 ? { ...s, name: storeName, isVerified: true } : s))
    );
    showToast('Store & Tax INN verification saved!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      {/* Top Seller Studio Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-900 text-white p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-2xl shadow-md">
            <Store className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black">{storeName} — Seller Studio</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                ✓ {verificationStatus}
              </span>
            </div>
            <p className="text-xs text-emerald-100/90 mt-0.5">
              Manage inventory, UZS pricing, flash discounts, orders, and store verification
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setActiveTab('add_product')}
          className="px-5 py-2.5 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-extrabold inline-flex items-center gap-1.5 shadow-md transition"
        >
          <Plus className="w-4 h-4" /> Add New Product
        </button>
      </div>

      {/* KPI Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft">
          <div className="text-xs font-bold text-slate-400 uppercase">Total Store GMV</div>
          <div className="text-xl font-black text-emerald-700 mt-1">
            {formatUzs(totalRevenueUzs, lang)}
          </div>
          <div className="text-[11px] text-emerald-600 font-semibold mt-1">
            +18.4% vs last month
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft">
          <div className="text-xs font-bold text-slate-400 uppercase">Active Catalog SKUs</div>
          <div className="text-xl font-black text-slate-900 mt-1">{products.length}</div>
          <div className="text-[11px] text-slate-500 mt-1">
            {products.filter((p) => p.isFlashSale).length} in Flash Sale
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft">
          <div className="text-xs font-bold text-slate-400 uppercase">Orders to Fulfill</div>
          <div className="text-xl font-black text-slate-900 mt-1">{orders.length}</div>
          <div className="text-[11px] text-amber-600 font-semibold mt-1">
            90-min Express SLA active
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft">
          <div className="text-xs font-bold text-slate-400 uppercase">Seller Rating</div>
          <div className="text-xl font-black text-amber-500 mt-1">★ 4.94 / 5.0</div>
          <div className="text-[11px] text-slate-500 mt-1">
            Based on {reviews.length + 3400} verified orders
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 bg-white p-2.5 rounded-2xl border border-slate-200 shadow-soft">
        {[
          { id: 'products', label: 'Inventory, Prices & Discounts', icon: Package },
          { id: 'add_product', label: 'Add New Product', icon: Plus },
          { id: 'orders', label: `Manage Orders (${orders.length})`, icon: Truck },
          { id: 'analytics', label: 'Sales Analytics', icon: TrendingUp },
          { id: 'reviews', label: `Customer Reviews (${reviews.length})`, icon: MessageSquare },
          { id: 'verification', label: 'Store & KYC Verification', icon: ShieldCheck },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-emerald-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: INVENTORY, PRICES, STOCK & DISCOUNT MANAGEMENT */}
      {activeTab === 'products' && (
        <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-soft">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-base font-extrabold text-slate-900">
              Product Catalog, Stock & Discount Manager
            </h2>
            <span className="text-xs text-slate-500">
              Edit UZS prices, stock quantities, or toggle Flash Sale discounts inline
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-500 uppercase border-b border-slate-200">
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Price (UZS)</th>
                  <th className="py-3 px-4">Old Price (UZS)</th>
                  <th className="py-3 px-4">Stock</th>
                  <th className="py-3 px-4">Flash Sale</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {products.map((prod) => (
                  <tr key={prod.id} className="hover:bg-slate-50/80">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={prod.images?.[0]}
                          alt=""
                          className="w-11 h-11 rounded-xl object-cover shrink-0 border border-slate-200"
                        />
                        <div className="max-w-xs">
                          <div className="font-bold text-slate-900 line-clamp-1">
                            {prod.nameEn}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            SKU: {prod.sku} • Discount: -{prod.discountPercent}%
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 capitalize font-semibold text-slate-600">
                      {prod.categorySlug}
                    </td>
                    <td className="py-3 px-4">
                      <input
                        type="number"
                        value={prod.priceUzs}
                        onChange={(e) =>
                          updateProduct(prod.id, { priceUzs: Number(e.target.value) })
                        }
                        className="w-28 px-2.5 py-1.5 rounded-lg border border-slate-300 font-bold text-emerald-700"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <input
                        type="number"
                        value={prod.oldPriceUzs || ''}
                        onChange={(e) =>
                          updateProduct(prod.id, { oldPriceUzs: Number(e.target.value) })
                        }
                        className="w-28 px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-500"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <input
                        type="number"
                        value={prod.stock}
                        onChange={(e) =>
                          updateProduct(prod.id, { stock: Number(e.target.value) })
                        }
                        className="w-16 px-2 py-1.5 rounded-lg border border-slate-300 font-bold text-slate-900"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <button
                        type="button"
                        onClick={() =>
                          updateProduct(prod.id, { isFlashSale: !prod.isFlashSale })
                        }
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          prod.isFlashSale
                            ? 'bg-amber-400 text-slate-950'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {prod.isFlashSale ? '⚡ Active' : 'Off'}
                      </button>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => deleteProduct(prod.id)}
                        className="p-2 rounded-lg text-rose-600 hover:bg-rose-50 transition"
                        title="Delete product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: ADD NEW PRODUCT */}
      {activeTab === 'add_product' && (
        <form
          onSubmit={handleCreateProduct}
          className="rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-4 max-w-3xl"
        >
          <h2 className="text-lg font-extrabold text-slate-900">
            Publish New Product to SAVDOX
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Product Name (English) *
              </label>
              <input
                type="text"
                required
                value={nameEn}
                onChange={(e) => setNameEn(e.target.value)}
                placeholder="Samsung Galaxy S25 Ultra 512GB"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nomi (Oʻzbekcha)
              </label>
              <input
                type="text"
                value={nameUz}
                onChange={(e) => setNameUz(e.target.value)}
                placeholder="Smartfon Samsung Galaxy S25"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Название (Русский)
              </label>
              <input
                type="text"
                value={nameRu}
                onChange={(e) => setNameRu(e.target.value)}
                placeholder="Смартфон Samsung Galaxy S25"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Category
              </label>
              <select
                value={categorySlug}
                onChange={(e) => setCategorySlug(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white font-semibold"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.nameEn}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Brand
              </label>
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Initial Stock Quantity
              </label>
              <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Selling Price in UZS *
              </label>
              <input
                type="number"
                required
                value={priceUzs}
                onChange={(e) => setPriceUzs(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-emerald-700"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Old Price in UZS (For Discount Badge)
              </label>
              <input
                type="number"
                value={oldPriceUzs}
                onChange={(e) => setOldPriceUzs(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
              />
            </div>
          </div>

          {/* Image Upload or URL */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700">
              Product Image URL or Upload File
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl border border-slate-300 text-xs"
              />
              <label className="px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold cursor-pointer inline-flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageFileSelect}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Product Description
            </label>
            <textarea
              rows={3}
              value={descriptionEn}
              onChange={(e) => setDescriptionEn(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-md"
          >
            Publish Product Now
          </button>
        </form>
      )}

      {/* TAB 3: MANAGE ORDERS */}
      {activeTab === 'orders' && (
        <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-4">
          <h2 className="text-base font-extrabold text-slate-900">
            Store Order Fulfillment Queue
          </h2>
          {orders.map((order) => (
            <div
              key={order.id}
              className="p-4 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-4"
            >
              <div>
                <div className="text-sm font-black text-slate-900">
                  {order.orderNumber} — {order.customerName} ({order.customerPhone})
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  📍 {order.city}, {order.district}, {order.streetAddress} • Total:{' '}
                  <strong className="text-emerald-700">
                    {formatUzs(order.totalUzs, lang)}
                  </strong>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">Status:</span>
                <select
                  value={order.orderStatus}
                  onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-emerald-500 bg-emerald-50 text-xs font-bold text-emerald-950"
                >
                  {ORDER_STATUSES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: SALES ANALYTICS */}
      {activeTab === 'analytics' && (
        <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-6">
          <h2 className="text-base font-extrabold text-slate-900">
            Monthly Revenue & Category Performance (UZS)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { month: 'September 2026', gmv: 62400000, ordersCount: 142, growth: '+12%' },
              { month: 'October 2026', gmv: 74900000, ordersCount: 168, growth: '+20%' },
              { month: 'November 2026 (MTD)', gmv: totalRevenueUzs, ordersCount: 194, growth: '+18.4%' },
            ].map((stat) => (
              <div
                key={stat.month}
                className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-1"
              >
                <div className="text-xs font-bold text-slate-500">{stat.month}</div>
                <div className="text-lg font-black text-emerald-800">
                  {formatUzs(stat.gmv, lang)}
                </div>
                <div className="text-xs text-slate-600">
                  {stat.ordersCount} Orders • <span className="text-emerald-600 font-bold">{stat.growth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: CUSTOMER REVIEWS */}
      {activeTab === 'reviews' && (
        <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-4">
          <h2 className="text-base font-extrabold text-slate-900">
            Customer Reviews & Seller Responses
          </h2>
          {reviews.map((rev) => (
            <div key={rev.id} className="p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between font-bold">
                <span>
                  {rev.userName} ({rev.city})
                </span>
                <span className="text-amber-500">{'★'.repeat(rev.rating)}</span>
              </div>
              <p className="text-slate-600">{rev.comment}</p>
              {rev.sellerReply ? (
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-900 font-medium">
                  <strong>Your Reply:</strong> {rev.sellerReply}
                </div>
              ) : (
                <div className="flex gap-2 pt-1">
                  <input
                    type="text"
                    placeholder="Write an official seller response..."
                    value={replyTexts[rev.id] || ''}
                    onChange={(e) =>
                      setReplyTexts((prev) => ({ ...prev, [rev.id]: e.target.value }))
                    }
                    className="flex-1 px-3 py-1.5 rounded-xl border border-slate-300"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (replyTexts[rev.id]) {
                        replyToReview(rev.id, replyTexts[rev.id]);
                      }
                    }}
                    className="px-4 py-1.5 rounded-xl bg-emerald-600 text-white font-bold"
                  >
                    Reply
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* TAB 6: STORE CREATION & SELLER VERIFICATION */}
      {activeTab === 'verification' && (
        <form
          onSubmit={handleSaveVerification}
          className="rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-4 max-w-2xl"
        >
          <h2 className="text-lg font-extrabold text-slate-900">
            Seller Verification & Uzbekistan Legal KYC
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Store Display Name</label>
              <input
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Registered Legal Entity (LLC / YATT)</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Uzbekistan Tax INN (STIR)</label>
              <input
                type="text"
                value={innTaxId}
                onChange={(e) => setInnTaxId(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Bank MFO</label>
              <input
                type="text"
                value={bankMfo}
                onChange={(e) => setBankMfo(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono"
              />
            </div>
          </div>
          <div className="text-xs">
            <label className="block font-bold text-slate-700 mb-1">20-Digit UZS Settlement Account</label>
            <input
              type="text"
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-sm"
          >
            Save & Update Verification
          </button>
        </form>
      )}
    </div>
  );
}

