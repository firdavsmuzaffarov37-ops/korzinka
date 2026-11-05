import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, Store, Zap, Check } from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { formatUzs, getLocalizedTitle, calculateInstallmentUzs } from '@shared/utils/formatters';

export default function ProductCard({ product }) {
  const { lang, t, favorites, toggleFavorite, addToCart, cart } = useMarketplace();
  if (!product) return null;

  const isFavorite = favorites.includes(product.id);
  const inCartCount = cart
    .filter((item) => item.productId === product.id)
    .reduce((sum, item) => sum + item.quantity, 0);

  const title = getLocalizedTitle(product, lang);
  const monthlyUzs = calculateInstallmentUzs(product.priceUzs, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-emerald-glow hover:border-emerald-200 transition-all duration-300 overflow-hidden"
    >
      {/* Top Image & Badges */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.images?.[0]}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Discount & Flash Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.discountPercent > 0 && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-rose-600 text-white shadow-sm">
              -{product.discountPercent}%
            </span>
          )}
          {product.isFlashSale && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-400 text-slate-950 shadow-sm">
              <Zap className="w-3 h-3 fill-current" /> Flash
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(product.id);
          }}
          aria-label="Toggle favorite"
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-sm ${
            isFavorite
              ? 'bg-rose-50 text-rose-600 border border-rose-200'
              : 'bg-white/90 text-slate-600 hover:text-rose-600 hover:bg-white'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-600 text-rose-600' : ''}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-3">
        <div>
          {/* Seller & Rating Row */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
            <span className="inline-flex items-center gap-1 font-medium text-emerald-800 truncate max-w-[65%]">
              <Store className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">{product.sellerName}</span>
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-slate-700 shrink-0">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {product.rating}
              <span className="text-slate-400 font-normal">({product.reviewCount})</span>
            </span>
          </div>

          {/* Product Name */}
          <Link
            to={`/product/${product.id}`}
            className="text-sm font-semibold text-slate-900 hover:text-emerald-700 line-clamp-2 leading-snug min-h-[2.5rem] transition-colors"
          >
            {title}
          </Link>

          {/* 0% Installment Pill */}
          <div className="mt-2">
            <span className="inline-block px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-medium border border-emerald-100">
              {monthlyUzs.toLocaleString('en-US')} {t.perMonth}
            </span>
          </div>
        </div>

        {/* Price & Add to Cart Row */}
        <div className="pt-2 border-t border-slate-100 flex items-end justify-between gap-2">
          <div>
            {product.oldPriceUzs && product.oldPriceUzs > product.priceUzs && (
              <div className="text-xs text-slate-400 line-through">
                {formatUzs(product.oldPriceUzs, lang)}
              </div>
            )}
            <div className="text-base font-extrabold text-emerald-700 tracking-tight">
              {formatUzs(product.priceUzs, lang)}
            </div>
          </div>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
              inCartCount > 0
                ? 'bg-emerald-900 text-white hover:bg-emerald-800'
                : 'bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95'
            }`}
          >
            {inCartCount > 0 ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>{t.addedToCart} ({inCartCount})</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>{t.addToCart}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

