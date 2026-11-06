import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeftRight,
  Trash2,
  ShoppingCart,
  Star,
  Check,
  X,
  Store,
  ShieldCheck,
  Truck,
  Plus,
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { formatUzs, getLocalizedTitle } from '@shared/utils/formatters';

export default function ComparePage() {
  const {
    lang,
    products,
    compareList,
    toggleCompare,
    clearCompare,
    addToCart,
    showToast,
  } = useMarketplace();

  const comparedProducts = compareList
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  if (comparedProducts.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-5">
        <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
          <ArrowLeftRight className="w-8 h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
          {lang === 'uz'
            ? 'Solishtirish uchun mahsulotlar tanlanmagan'
            : lang === 'ru'
            ? 'Нет товаров для сравнения'
            : 'No Products in Comparison'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
          {lang === 'uz'
            ? 'Katalogdagi mahsulot kartasida tarozu belgisini bosib 4 tagacha tovarlarni yonma-yon solishtirishingiz mumkin.'
            : lang === 'ru'
            ? 'Нажмите на иконку весов в карточке товара, чтобы сравнить характеристики до 4 товаров.'
            : 'Click the compare icon on product cards to compare specifications side-by-side for up to 4 items.'}
        </p>
        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md transition"
        >
          <span>{lang === 'uz' ? 'Katalogga oʻtish' : lang === 'ru' ? 'В каталог' : 'Browse Catalog'}</span>
        </Link>
      </div>
    );
  }

  // Spec keys collected from all compared products
  const specKeys = Array.from(
    new Set(
      comparedProducts.flatMap((p) =>
        p.specifications ? Object.keys(p.specifications) : []
      )
    )
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-1">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>
              {lang === 'uz'
                ? 'Mahsulotlar taqqoslovi'
                : lang === 'ru'
                ? 'Сравнение товаров'
                : 'Product Comparison'}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">
            {lang === 'uz'
              ? `${comparedProducts.length} ta mahsulot xususiyatlari`
              : lang === 'ru'
              ? `Характеристики ${comparedProducts.length} товаров`
              : `Comparing ${comparedProducts.length} Products`}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/catalog"
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold inline-flex items-center gap-1.5 transition"
          >
            <Plus className="w-4 h-4" />
            <span>{lang === 'uz' ? 'Yana qoʻshish' : lang === 'ru' ? 'Добавить еще' : 'Add More'}</span>
          </Link>
          <button
            type="button"
            onClick={clearCompare}
            className="px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold inline-flex items-center gap-1.5 transition"
          >
            <Trash2 className="w-4 h-4" />
            <span>{lang === 'uz' ? 'Tozalash' : lang === 'ru' ? 'Очистить' : 'Clear All'}</span>
          </button>
        </div>
      </div>

      {/* Comparison Grid Table */}
      <div className="overflow-x-auto pb-4">
        <div
          className="grid gap-4 min-w-[700px]"
          style={{
            gridTemplateColumns: `repeat(${comparedProducts.length}, minmax(240px, 1fr))`,
          }}
        >
          {comparedProducts.map((p) => {
            const title = getLocalizedTitle(p, lang);
            return (
              <div
                key={p.id}
                className="rounded-3xl bg-white border-2 border-emerald-500/30 p-4 shadow-sm hover:border-emerald-500 transition relative flex flex-col justify-between"
              >
                {/* Remove button */}
                <button
                  type="button"
                  onClick={() => toggleCompare(p)}
                  title="Remove from compare"
                  className="absolute top-3 right-3 w-7 h-7 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-600 flex items-center justify-center transition"
                >
                  <X className="w-4 h-4" />
                </button>

                <div>
                  <Link to={`/product/${p.id}`} className="block mb-3">
                    <img
                      src={p.images?.[0]}
                      alt={title}
                      className="w-full h-44 object-cover rounded-2xl bg-slate-50 border border-slate-100 hover:scale-102 transition"
                    />
                  </Link>

                  <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold mb-1 truncate">
                    <Store className="w-3 h-3" />
                    <span>{p.sellerName}</span>
                    <span>• ★ {p.rating}</span>
                  </div>

                  <Link
                    to={`/product/${p.id}`}
                    className="block text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-700 line-clamp-2 leading-snug mb-2"
                  >
                    {title}
                  </Link>

                  <div className="mb-3">
                    <div className="text-base sm:text-lg font-black text-emerald-700">
                      {formatUzs(p.priceUzs, lang)}
                    </div>
                    {p.oldPriceUzs && (
                      <div className="text-xs text-slate-400 line-through">
                        {formatUzs(p.oldPriceUzs, lang)}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => addToCart(p)}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold inline-flex items-center justify-center gap-1.5 shadow-sm transition"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>{lang === 'uz' ? 'Savatga qoʻshish' : lang === 'ru' ? 'В корзину' : 'Add to Cart'}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Specifications Matrix */}
        {specKeys.length > 0 && (
          <div className="mt-8 bg-white rounded-3xl border border-slate-200 p-5 shadow-xs min-w-[700px]">
            <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>
                {lang === 'uz'
                  ? 'Batafsil texnik parametrlar'
                  : lang === 'ru'
                  ? 'Подробные технические характеристики'
                  : 'Technical Specifications'}
              </span>
            </h2>

            <div className="divide-y divide-slate-100 text-xs">
              <div
                className="grid py-2.5 font-bold text-slate-500 bg-slate-50 px-3 rounded-xl mb-1"
                style={{
                  gridTemplateColumns: `180px repeat(${comparedProducts.length}, minmax(180px, 1fr))`,
                }}
              >
                <div>Parametr</div>
                {comparedProducts.map((p) => (
                  <div key={p.id} className="truncate">
                    {p.brand} {p.nameUz?.split(' ')[1] || ''}
                  </div>
                ))}
              </div>

              {specKeys.map((key) => (
                <div
                  key={key}
                  className="grid py-3 px-3 hover:bg-emerald-50/30 transition items-center"
                  style={{
                    gridTemplateColumns: `180px repeat(${comparedProducts.length}, minmax(180px, 1fr))`,
                  }}
                >
                  <div className="font-semibold text-slate-700">{key}</div>
                  {comparedProducts.map((p) => (
                    <div key={p.id} className="text-slate-900 font-medium">
                      {p.specifications?.[key] || '—'}
                    </div>
                  ))}
                </div>
              ))}

              {/* Delivery ETA Row */}
              <div
                className="grid py-3 px-3 hover:bg-emerald-50/30 transition items-center"
                style={{
                  gridTemplateColumns: `180px repeat(${comparedProducts.length}, minmax(180px, 1fr))`,
                }}
              >
                <div className="font-semibold text-slate-700 flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Yetkazib berish</span>
                </div>
                {comparedProducts.map((p) => (
                  <div key={p.id} className="text-emerald-700 font-bold">
                    {p.sellerOffers?.[0]?.deliveryEta || '90 mins Express'}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

