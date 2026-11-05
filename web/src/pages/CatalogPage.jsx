import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  SlidersHorizontal,
  RotateCcw,
  Sparkles,
  Layers,
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import ProductCard from '../components/ProductCard';
import { getLocalizedTitle } from '@shared/utils/formatters';

export default function CatalogPage() {
  const {
    lang,
    t,
    categories,
    products,
    favorites,
    openAiWithPrompt,
  } = useMarketplace();

  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.get('category') || 'all';
  const initialQuery = searchParams.get('q') || '';
  const initialSeller = searchParams.get('seller') || 'all';
  const initialFlash = searchParams.get('flash') === 'true';
  const initialFavs = searchParams.get('favorites') === 'true';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedSeller, setSelectedSeller] = useState(initialSeller);
  const [minRating, setMinRating] = useState(0);
  const [onlyFlash, setOnlyFlash] = useState(initialFlash);
  const [onlyFavorites, setOnlyFavorites] = useState(initialFavs);
  const [sortBy, setSortBy] = useState('popular');

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'all');
    setSearchQuery(searchParams.get('q') || '');
    setSelectedSeller(searchParams.get('seller') || 'all');
    setOnlyFlash(searchParams.get('flash') === 'true');
    setOnlyFavorites(searchParams.get('favorites') === 'true');
    setSelectedSubcategory('all');
  }, [searchParams]);

  const activeCategoryObj = useMemo(
    () => categories.find((c) => c.slug === selectedCategory) || null,
    [categories, selectedCategory]
  );

  const allBrands = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand))).sort(),
    [products]
  );

  const allSellers = useMemo(
    () => Array.from(new Set(products.map((p) => p.sellerName))).sort(),
    [products]
  );

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => p.approvalStatus !== 'rejected')
      .filter((p) => {
        if (selectedCategory !== 'all' && p.categorySlug !== selectedCategory) return false;
        if (selectedSubcategory !== 'all' && p.subcategory !== selectedSubcategory) return false;
        if (selectedBrand !== 'all' && p.brand !== selectedBrand) return false;
        if (selectedSeller !== 'all' && p.sellerName !== selectedSeller) return false;
        if (minRating > 0 && p.rating < minRating) return false;
        if (onlyFlash && !p.isFlashSale) return false;
        if (onlyFavorites && !favorites.includes(p.id)) return false;

        const min = Number(minPrice);
        const max = Number(maxPrice);
        if (!isNaN(min) && min > 0 && p.priceUzs < min) return false;
        if (!isNaN(max) && max > 0 && p.priceUzs > max) return false;

        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const match =
            p.nameEn.toLowerCase().includes(q) ||
            p.nameUz.toLowerCase().includes(q) ||
            p.nameRu.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.sellerName.toLowerCase().includes(q) ||
            p.subcategory?.toLowerCase().includes(q);
          if (!match) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price_asc') return a.priceUzs - b.priceUzs;
        if (sortBy === 'price_desc') return b.priceUzs - a.priceUzs;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'newest') return b.id.localeCompare(a.id);
        return (b.soldCount || 0) - (a.soldCount || 0);
      });
  }, [
    products,
    selectedCategory,
    selectedSubcategory,
    selectedBrand,
    selectedSeller,
    minRating,
    onlyFlash,
    onlyFavorites,
    minPrice,
    maxPrice,
    searchQuery,
    sortBy,
    favorites,
  ]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSearchQuery('');
    setMinPrice('');
    setMaxPrice('');
    setSelectedBrand('all');
    setSelectedSeller('all');
    setMinRating(0);
    setOnlyFlash(false);
    setOnlyFavorites(false);
    setSortBy('popular');
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      {/* Category Header Banner */}
      {activeCategoryObj ? (
        <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={activeCategoryObj.image}
              alt={getLocalizedTitle(activeCategoryObj, lang)}
              className="w-20 h-20 rounded-2xl object-cover border border-emerald-200 shrink-0"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-slate-900">
                  {getLocalizedTitle(activeCategoryObj, lang)}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  {activeCategoryObj.productCount.toLocaleString()} {t.itemsCount}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedSubcategory('all')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                    selectedSubcategory === 'all'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-emerald-50'
                  }`}
                >
                  {t.allSubcategories}
                </button>
                {activeCategoryObj.subcategories.map((sub) => (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => setSelectedSubcategory(sub)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                      selectedSubcategory === sub
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-emerald-50'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-emerald-50/70 rounded-2xl p-3.5 border border-emerald-100 max-w-xs w-full">
            <div className="text-[11px] font-bold uppercase text-emerald-900 mb-1.5 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              {t.categoryFacets}
            </div>
            <div className="flex flex-wrap gap-1">
              {activeCategoryObj.filterOptions.map((opt) => (
                <span
                  key={opt}
                  className="px-2 py-0.5 rounded-md bg-white text-[11px] font-medium text-emerald-800 border border-emerald-200"
                >
                  {opt}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl font-black text-slate-900">
              {t.categoriesCountTitle}
            </h1>
            <span className="text-xs font-semibold text-slate-500">
              {t.categoriesSubtitle}
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                className="flex items-center gap-2 p-2 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 text-left transition"
              >
                <img
                  src={cat.image}
                  alt={getLocalizedTitle(cat, lang)}
                  className="w-9 h-9 rounded-lg object-cover shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900 truncate">
                    {getLocalizedTitle(cat, lang)}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {cat.productCount}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content Layout: Left Filter Sidebar + Right Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <aside className="lg:col-span-3 rounded-3xl bg-white border border-slate-200 p-5 shadow-soft space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
              {t.filters}
            </span>
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-xs font-bold text-rose-600 hover:underline inline-flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> {t.clearFilters}
            </button>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {t.keywordSearch}
            </label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Redmi, Samsung, Dyson..."
                className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-emerald-600 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {t.department} ({categories.length})
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedSubcategory('all');
              }}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
            >
              <option value="all">{t.allCategories}</option>
              {categories.map((c) => (
                <option key={c.id} value={c.slug}>
                  {getLocalizedTitle(c, lang)} ({c.productCount})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {t.priceRange}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full px-2.5 py-2 rounded-xl border border-slate-200 text-xs"
              />
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full px-2.5 py-2 rounded-xl border border-slate-200 text-xs"
              />
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {[
                { label: '≤ 500 000', max: 500000 },
                { label: '≤ 2 500 000', max: 2500000 },
                { label: '≤ 7 000 000', max: 7000000 },
              ].map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => {
                    setMinPrice('');
                    setMaxPrice(String(chip.max));
                  }}
                  className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-[11px] font-bold border border-emerald-200"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">{t.brandLabel}</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
            >
              <option value="all">{t.allBrands} ({allBrands.length})</option>
              {allBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {t.sellerLabel}
            </label>
            <select
              value={selectedSeller}
              onChange={(e) => setSelectedSeller(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
            >
              <option value="all">{t.allSellers}</option>
              {allSellers.map((seller) => (
                <option key={seller} value={seller}>
                  {seller}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {t.minRating}
            </label>
            <div className="flex gap-1.5">
              {[0, 4.5, 4.8, 4.9].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setMinRating(r)}
                  className={`flex-1 py-1.5 rounded-xl text-xs font-bold border transition ${
                    minRating === r
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  {r === 0 ? t.anyRating : `★ ${r}+`}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-1 border-t border-slate-100">
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyFlash}
                onChange={(e) => setOnlyFlash(e.target.checked)}
                className="rounded text-emerald-600 focus:ring-emerald-500"
              />
              <span>⚡ {t.onlyFlashSales}</span>
            </label>
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyFavorites}
                onChange={(e) => setOnlyFavorites(e.target.checked)}
                className="rounded text-emerald-600 focus:ring-emerald-500"
              />
              <span>❤️ {t.onlyFavorites}</span>
            </label>
          </div>
        </aside>

        {/* Right Column: Sort Bar + Product Grid */}
        <div className="lg:col-span-9 space-y-5">
          <div className="rounded-2xl bg-white border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-3 shadow-soft">
            <div className="text-xs font-semibold text-slate-600">
              {t.showingItems} <strong className="text-slate-900">{filteredProducts.length}</strong>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => openAiWithPrompt(t.aiDefaultPrompt)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 transition"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                {t.aiAssistant}
              </button>

              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-500 font-semibold">{t.sortBy}</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 bg-white focus:outline-none"
                >
                  <option value="popular">{t.sortPopular}</option>
                  <option value="price_asc">{t.sortPriceAsc}</option>
                  <option value="price_desc">{t.sortPriceDesc}</option>
                  <option value="rating">{t.sortRating}</option>
                  <option value="newest">{t.sortNewest}</option>
                </select>
              </div>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl bg-white border border-slate-200 p-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">
                {t.noProductsFound}
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                {t.noProductsSub}
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-sm"
              >
                {t.clearFilters}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
