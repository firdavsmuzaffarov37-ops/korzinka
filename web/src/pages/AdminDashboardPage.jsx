import React, { useState } from 'react';
import {
  ShieldAlert,
  Users,
  Store,
  CheckCircle2,
  Layers,
  Tag,
  AlertTriangle,
  Settings,
  BarChart3,
  Lock,
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { formatUzs } from '@shared/utils/formatters';

export default function AdminDashboardPage() {
  const {
    lang,
    user,
    setUser,
    categories,
    addCategory,
    products,
    updateProduct,
    stores,
    setStores,
    orders,
    coupons,
    addCoupon,
    complaints,
    resolveComplaint,
    showToast,
  } = useMarketplace();

  // Tabs: 'overview' | 'users_sellers' | 'products_categories' | 'coupons_complaints' | 'settings'
  const [activeTab, setActiveTab] = useState('overview');

  // New Category Form
  const [newCatName, setNewCatName] = useState('');
  const [newCatSubs, setNewCatSubs] = useState('Smart Devices, Accessories');

  // New Coupon Form
  const [newCouponCode, setNewCouponCode] = useState('');
  const [newCouponTitle, setNewCouponTitle] = useState('');
  const [newCouponValue, setNewCouponValue] = useState('75000');
  const [newCouponMin, setNewCouponMin] = useState('400000');

  // Platform Settings
  const [commissionRate, setCommissionRate] = useState(8.0);
  const [expressFreeThreshold, setExpressFreeThreshold] = useState(1000000);

  const [managedUsers, setManagedUsers] = useState([
    { id: 'u1', name: 'Temurbek Yoqubov', phone: '+998 90 945 12 34', role: 'admin', city: 'Tashkent', status: 'active' },
    { id: 'u2', name: 'Javohir Rustamov', phone: '+998 93 511 22 88', role: 'customer', city: 'Samarkand', status: 'active' },
    { id: 'u3', name: 'Dilnoza Karimova', phone: '+998 97 701 44 19', role: 'seller', city: 'Bukhara', status: 'active' },
    { id: 'u4', name: 'Sardorbek Alimov', phone: '+998 90 321 90 11', role: 'customer', city: 'Andijan', status: 'active' },
  ]);

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCatName.trim()) return;
    addCategory({
      nameEn: newCatName,
      subcategories: newCatSubs.split(',').map((s) => s.trim()),
    });
    setNewCatName('');
  };

  const handleCreateCoupon = (e) => {
    e.preventDefault();
    if (!newCouponCode.trim()) return;
    addCoupon({
      code: newCouponCode,
      titleEn: newCouponTitle || `${newCouponValue} UZS Promo Discount`,
      discountType: 'fixed',
      discountValue: Number(newCouponValue),
      minOrderUzs: Number(newCouponMin),
    });
    setNewCouponCode('');
    setNewCouponTitle('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      {/* RBAC Security Header */}
      <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4 shadow-xl border border-emerald-500/30">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black">SAVDOX Admin Command Center</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                RBAC Role: {user?.role?.toUpperCase()}
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Platform-wide governance: users, verified stores, product moderation, categories, coupons, complaints & analytics
            </p>
          </div>
        </div>

        {user?.role !== 'admin' && (
          <button
            type="button"
            onClick={() => {
              setUser((prev) => ({ ...prev, role: 'admin' }));
              showToast('RBAC Role elevated to Platform Administrator');
            }}
            className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 text-xs font-extrabold inline-flex items-center gap-1.5"
          >
            <Lock className="w-3.5 h-3.5" /> Activate Admin Role
          </button>
        )}
      </div>

      {/* Admin Navigation Tabs */}
      <div className="flex flex-wrap gap-2 bg-white p-2.5 rounded-2xl border border-slate-200 shadow-soft">
        {[
          { id: 'overview', label: 'Platform Analytics & Orders', icon: BarChart3 },
          { id: 'users_sellers', label: 'Users & Seller Management', icon: Users },
          { id: 'products_categories', label: 'Product Approval & Categories', icon: Layers },
          { id: 'coupons_complaints', label: 'Coupons & Complaints', icon: Tag },
          { id: 'settings', label: 'Platform Settings', icon: Settings },
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

      {/* TAB 1: PLATFORM ANALYTICS, SALES STATISTICS & ORDER MANAGEMENT */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft">
              <div className="text-xs font-bold text-slate-400 uppercase">Marketplace GMV (UZS)</div>
              <div className="text-xl font-black text-emerald-700 mt-1">
                {formatUzs(428950000, lang)}
              </div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                +24.6% MoM across 7 cities
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft">
              <div className="text-xs font-bold text-slate-400 uppercase">Verified Stores</div>
              <div className="text-xl font-black text-slate-900 mt-1">{stores.length}</div>
              <div className="text-[11px] text-slate-500 mt-1">100% Tax INN verified</div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft">
              <div className="text-xs font-bold text-slate-400 uppercase">Active Categories</div>
              <div className="text-xl font-black text-slate-900 mt-1">{categories.length}</div>
              <div className="text-[11px] text-slate-500 mt-1">{products.length} Live SKUs</div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft">
              <div className="text-xs font-bold text-slate-400 uppercase">Open Complaints</div>
              <div className="text-xl font-black text-rose-600 mt-1">
                {complaints.filter((c) => c.status === 'open').length}
              </div>
              <div className="text-[11px] text-slate-500 mt-1">Avg resolution: 14 mins</div>
            </div>
          </div>

          {/* Regional Sales Breakdown & User Reports */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-4">
            <h2 className="text-base font-extrabold text-slate-900">
              Uzbekistan Regional Sales Statistics & User Reports
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
              {[
                { region: 'Tashkent City', share: '58%', gmv: 248791000, users: '18,420 shoppers' },
                { region: 'Samarkand', share: '18%', gmv: 77211000, users: '5,610 shoppers' },
                { region: 'Bukhara & Navoi', share: '12%', gmv: 51474000, users: '3,890 shoppers' },
                { region: 'Fergana Valley', share: '12%', gmv: 51474000, users: '4,120 shoppers' },
              ].map((r) => (
                <div key={r.region} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex justify-between font-extrabold text-slate-900">
                    <span>{r.region}</span>
                    <span className="text-emerald-700">{r.share}</span>
                  </div>
                  <div className="text-sm font-black text-emerald-700">
                    {formatUzs(r.gmv, lang)}
                  </div>
                  <div className="text-slate-500">{r.users}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: USER MANAGEMENT & SELLER MANAGEMENT */}
      {activeTab === 'users_sellers' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Management */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-4">
            <h2 className="text-base font-extrabold text-slate-900">User Management</h2>
            <div className="space-y-2.5">
              {managedUsers.map((u) => (
                <div
                  key={u.id}
                  className="p-3.5 rounded-2xl border border-slate-200 flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-bold text-slate-900">{u.name}</div>
                    <div className="text-slate-500">
                      {u.phone} • {u.city}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <select
                      value={u.role}
                      onChange={(e) => {
                        const nextRole = e.target.value;
                        setManagedUsers((prev) =>
                          prev.map((item) =>
                            item.id === u.id ? { ...item, role: nextRole } : item
                          )
                        );
                        showToast(`Updated ${u.name}'s role to ${nextRole}`);
                      }}
                      className="px-2.5 py-1 rounded-lg border border-slate-300 font-bold bg-white"
                    >
                      <option value="customer">customer</option>
                      <option value="seller">seller</option>
                      <option value="admin">admin</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seller Management */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-4">
            <h2 className="text-base font-extrabold text-slate-900">
              Seller & Store Verification Management
            </h2>
            <div className="space-y-2.5">
              {stores.map((st) => (
                <div
                  key={st.id}
                  className="p-3.5 rounded-2xl border border-slate-200 flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-bold text-slate-900">{st.name}</div>
                    <div className="text-slate-500">
                      📍 {st.city} • ★ {st.rating} ({st.totalSales} sales)
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setStores((prev) =>
                        prev.map((item) =>
                          item.id === st.id
                            ? { ...item, isVerified: !item.isVerified }
                            : item
                        )
                      );
                      showToast(`Toggled verification status for ${st.name}`);
                    }}
                    className={`px-3 py-1.5 rounded-xl font-bold ${
                      st.isVerified
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {st.isVerified ? '✓ Verified Active' : 'Pending Review'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PRODUCT APPROVAL & CATEGORY MANAGEMENT */}
      {activeTab === 'products_categories' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Product Approval Queue */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-4">
            <h2 className="text-base font-extrabold text-slate-900">
              Product Moderation & Approval Queue
            </h2>
            <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
              {products.map((prod) => (
                <div
                  key={prod.id}
                  className="p-3 rounded-2xl border border-slate-200 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={prod.images?.[0]}
                      alt=""
                      className="w-10 h-10 rounded-lg object-cover shrink-0"
                    />
                    <div className="truncate">
                      <div className="font-bold text-slate-900 truncate">{prod.nameEn}</div>
                      <div className="text-slate-500">
                        {prod.sellerName} • {formatUzs(prod.priceUzs, lang)}
                      </div>
                    </div>
                  </div>
                  <select
                    value={prod.approvalStatus || 'approved'}
                    onChange={(e) =>
                      updateProduct(prod.id, { approvalStatus: e.target.value })
                    }
                    className="px-2.5 py-1 rounded-lg border border-slate-300 font-bold bg-white shrink-0"
                  >
                    <option value="approved">✓ Approved</option>
                    <option value="pending">⏳ Pending</option>
                    <option value="rejected">✕ Rejected</option>
                  </select>
                </div>
              ))}
            </div>
          </div>

          {/* Category Management */}
          <form
            onSubmit={handleAddCategory}
            className="lg:col-span-5 rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-4"
          >
            <h2 className="text-base font-extrabold text-slate-900">
              Category Management ({categories.length} Active)
            </h2>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                New Category Title
              </label>
              <input
                type="text"
                required
                value={newCatName}
                onChange={(e) => setNewCatName(e.target.value)}
                placeholder="e.g., Musical Instruments"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Subcategories (comma-separated)
              </label>
              <input
                type="text"
                value={newCatSubs}
                onChange={(e) => setNewCatSubs(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold"
            >
              Add Category to Marketplace
            </button>
          </form>
        </div>
      )}

      {/* TAB 4: COUPON MANAGEMENT & COMPLAINT MANAGEMENT */}
      {activeTab === 'coupons_complaints' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Create Coupon */}
          <form
            onSubmit={handleCreateCoupon}
            className="lg:col-span-5 rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-3"
          >
            <h2 className="text-base font-extrabold text-slate-900">
              Coupon Management ({coupons.length})
            </h2>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Promo Code
              </label>
              <input
                type="text"
                required
                value={newCouponCode}
                onChange={(e) => setNewCouponCode(e.target.value)}
                placeholder="TASHKENT75K"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs uppercase font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Discount Amount (UZS)
              </label>
              <input
                type="number"
                value={newCouponValue}
                onChange={(e) => setNewCouponValue(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Minimum Order (UZS)
              </label>
              <input
                type="number"
                value={newCouponMin}
                onChange={(e) => setNewCouponMin(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold"
            >
              Create Promo Code
            </button>
          </form>

          {/* Complaint Management */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-4">
            <h2 className="text-base font-extrabold text-slate-900">
              Customer & Order Complaint Resolution
            </h2>
            <div className="space-y-3">
              {complaints.map((cmp) => (
                <div
                  key={cmp.id}
                  className="p-4 rounded-2xl border border-slate-200 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-slate-900">
                      {cmp.subject} ({cmp.orderNumber})
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-bold ${
                        cmp.status === 'resolved'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {cmp.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-slate-600">
                    {cmp.userName} ({cmp.storeName}): {cmp.description}
                  </p>
                  {cmp.status !== 'resolved' && (
                    <button
                      type="button"
                      onClick={() =>
                        resolveComplaint(
                          cmp.id,
                          'Resolved by Admin Support & credited bonus points.'
                        )
                      }
                      className="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white font-bold"
                    >
                      Mark Resolved & Compensate
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: PLATFORM SETTINGS */}
      {activeTab === 'settings' && (
        <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-4 max-w-xl text-xs">
          <h2 className="text-base font-extrabold text-slate-900">
            SAVDOX Platform Global Settings
          </h2>
          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Default Marketplace Seller Commission Rate (%)
            </label>
            <input
              type="number"
              step="0.5"
              value={commissionRate}
              onChange={(e) => setCommissionRate(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold"
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Free 90-Minute Express Delivery Threshold (UZS)
            </label>
            <input
              type="number"
              value={expressFreeThreshold}
              onChange={(e) => setExpressFreeThreshold(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold"
            />
          </div>
          <button
            type="button"
            onClick={() => showToast('Global platform settings saved!')}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold"
          >
            Save Platform Settings
          </button>
        </div>
      )}
    </div>
  );
}

