import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Star,
  Heart,
  ShoppingCart,
  ShieldCheck,
  Truck,
  Store,
  Check,
  Sparkles,
  MessageSquare,
  ArrowLeft,
  Award,
  ArrowLeftRight,
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import ProductCard from '../components/ProductCard';
import {
  formatUzs,
  getLocalizedTitle,
  getLocalizedDescription,
  calculateInstallmentUzs,
  getLocalizedColor,
  getLocalizedSpecLabel,
  getLocalizedDeliveryEta,
  getLocalizedWarranty,
} from '@shared/utils/formatters';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    lang,
    t,
    selectedCity,
    products,
    favorites,
    toggleFavorite,
    toggleCompare,
    isInCompare,
    addToCart,
    recordProductView,
    reviews,
    addReview,
    openAiWithPrompt,
  } = useMarketplace();

  const product = products.find((p) => p.id === id) || products[0];

  const [activeImage, setActiveImage] = useState(product?.images?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0]?.name || 'Default'
  );
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || 'Standard'
  );
  const [quantity, setQuantity] = useState(1);

  // Review Form State
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewPros, setReviewPros] = useState('');
  const [reviewCons, setReviewCons] = useState('');
  const [reviewComment, setReviewComment] = useState('');

  useEffect(() => {
    if (product) {
      setActiveImage(product.images?.[0] || '');
      setSelectedColor(product.colors?.[0]?.name || 'Default');
      setSelectedSize(product.sizes?.[0] || 'Standard');
      recordProductView(product.id);
    }
  }, [id]);

  if (!product) return null;

  const isFavorite = favorites.includes(product.id);
  const title = getLocalizedTitle(product, lang);
  const description = getLocalizedDescription(product, lang);
  const productReviews = reviews.filter((r) => r.productId === product.id);
  const similarProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const fallbackSimilar =
    similarProducts.length > 0
      ? similarProducts
      : products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!reviewComment.trim()) return;
    addReview({
      productId: product.id,
      rating: reviewRating,
      pros: reviewPros || 'Great quality and fast courier delivery',
      cons: reviewCons || 'None',
      comment: reviewComment,
    });
    setReviewPros('');
    setReviewCons('');
    setReviewComment('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between flex-wrap gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1 font-bold text-slate-700 hover:text-emerald-700"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </button>
          <span>/</span>
          <Link to={`/catalog?category=${product.categorySlug}`} className="hover:text-emerald-700 capitalize font-semibold">
            {product.categorySlug}
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold truncate max-w-xs">{title}</span>
        </div>

        <button
          type="button"
          onClick={() =>
            openAiWithPrompt(`Compare sellers and alternatives for ${product.nameEn}`)
          }
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 hover:bg-emerald-100"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          Ask AI About This Product
        </button>
      </div>

      {/* Main Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 bg-white rounded-3xl border border-slate-200 p-4 sm:p-6 lg:p-8 shadow-soft">
        {/* 1. Product Image Gallery (5 Cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
            <img
              src={activeImage}
              alt={title}
              className="w-full h-full object-cover"
            />
            {product.discountPercent > 0 && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-extrabold">
                -{product.discountPercent}% OFF
              </span>
            )}
          </div>

          <div className="flex gap-2.5 overflow-x-auto pb-1">
            {product.images?.map((imgUrl, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(imgUrl)}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition ${
                  activeImage === imgUrl
                    ? 'border-emerald-600 scale-105 shadow-sm'
                    : 'border-slate-200 opacity-75 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* 2. Product Details, Variants & Purchase Controls (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Brand, SKU & Rating */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-extrabold border border-emerald-200">
                  {product.brand}
                </span>
                <span className="text-slate-400 font-mono">SKU: {product.sku}</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-slate-800">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
                <span className="text-slate-400">({product.reviewCount} {t.reviewsCountLabel || (lang === 'uz' ? 'ta sharh' : lang === 'ru' ? 'отзывов' : 'reviews')})</span>
                <span>•</span>
                <span className="text-emerald-700">{product.soldCount} {lang === 'uz' ? 'ta xarid' : lang === 'ru' ? 'продано' : 'sold'}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {title}
            </h1>

            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
              <div>
                {product.oldPriceUzs > product.priceUzs && (
                  <div className="text-xs text-slate-400 line-through">
                    {formatUzs(product.oldPriceUzs, lang)}
                  </div>
                )}
                <div className="text-2xl sm:text-3xl font-black text-emerald-700">
                  {formatUzs(product.priceUzs, lang)}
                </div>
              </div>

              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded-xl bg-emerald-100 text-emerald-900 text-xs font-extrabold">
                  {lang === 'uz' ? '0% Muddatli toʻlov:' : lang === 'ru' ? '0% Рассрочка:' : '0% Installment:'} {formatUzs(calculateInstallmentUzs(product.priceUzs, 6), lang)} {t.perMonth}
                </span>
                <div className="text-[11px] text-slate-500 mt-1">
                  {lang === 'uz' ? 'Uzum Nasiya, Click yoki Payme orqali' : lang === 'ru' ? 'Через Uzum Nasiya, Click или Payme' : 'Via Uzum Nasiya, Click, or Payme'}
                </div>
              </div>
            </div>

            {/* Color Variants */}
            {product.colors?.length > 0 && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  {t.availableColorsLabel || (lang === 'uz' ? 'Mavjud ranglar:' : 'Available Colors:')} <span className="text-emerald-700 font-bold">{getLocalizedColor(selectedColor, lang)}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold transition ${
                        selectedColor === c.name
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-950 shadow-sm'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-slate-300"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{getLocalizedColor(c.name, lang)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size / Configuration Variants */}
            {product.sizes?.length > 0 && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  {t.availableSizesLabel || (lang === 'uz' ? 'Oʻlcham / Konfiguratsiya:' : 'Size / Configuration:')} <span className="text-emerald-700 font-bold">{selectedSize}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3.5 py-1.5 rounded-xl border text-xs font-bold transition ${
                        selectedSize === sz
                          ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-300'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center rounded-2xl border border-slate-300 bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 sm:px-3.5 py-2.5 text-sm font-black text-slate-700 hover:bg-slate-100 rounded-l-2xl"
                >
                  −
                </button>
                <span className="px-3 sm:px-4 text-sm font-bold">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 sm:px-3.5 py-2.5 text-sm font-black text-slate-700 hover:bg-slate-100 rounded-r-2xl"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={() =>
                  addToCart(product, { selectedColor, selectedSize, quantity })
                }
                className="flex-1 min-w-[130px] py-3.5 px-4 sm:px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-extrabold inline-flex items-center justify-center gap-2 shadow-md transition"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>{t.addToCart}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  addToCart(product, { selectedColor, selectedSize, quantity });
                  navigate('/checkout');
                }}
                className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-emerald-950 hover:bg-emerald-900 text-white text-xs sm:text-sm font-extrabold transition text-center"
              >
                {t.buyNow}
              </button>

              <button
                type="button"
                onClick={() => toggleCompare(product)}
                title={lang === 'uz' ? 'Taqqoslashga qo‘shish' : lang === 'ru' ? 'Сравнить товар' : 'Compare product'}
                className={`p-3.5 rounded-2xl border transition inline-flex items-center gap-1.5 ${
                  isInCompare(product.id)
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700 font-bold'
                    : 'border-slate-200 hover:border-emerald-300 text-slate-600'
                }`}
              >
                <ArrowLeftRight className="w-5 h-5" />
                <span className="text-xs font-bold hidden sm:inline">
                  {isInCompare(product.id)
                    ? (lang === 'uz' ? 'Taqqosda' : lang === 'ru' ? 'В сравнении' : 'In Compare')
                    : (lang === 'uz' ? 'Taqqoslash' : lang === 'ru' ? 'Сравнить' : 'Compare')}
                </span>
              </button>

              <button
                type="button"
                onClick={() => toggleFavorite(product.id)}
                className={`p-3.5 rounded-2xl border transition ${
                  isFavorite
                    ? 'border-rose-300 bg-rose-50 text-rose-600'
                    : 'border-slate-200 hover:border-rose-300 text-slate-600'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-rose-600' : ''}`} />
              </button>
            </div>
          </div>

          {/* Seller Information & Delivery Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
            <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900 flex items-center gap-1">
                    {product.sellerName}
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-[11px] text-slate-600">
                    Seller Rating: ★ {product.sellerRating} • Official Partner
                  </div>
                </div>
              </div>
              <Link
                to={`/catalog?seller=${encodeURIComponent(product.sellerName)}`}
                className="text-xs font-bold text-emerald-700 hover:underline"
              >
                {lang === 'uz' ? 'Doʻkonga oʻtish →' : lang === 'ru' ? 'В магазин →' : 'Store →'}
              </Link>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900">
                  {t.fastDeliveryPrefix || (lang === 'uz' ? 'Tezkor yetkazish:' : 'Fast Delivery to')} {lang === 'uz' ? selectedCity.nameUz : lang === 'ru' ? selectedCity.nameRu : selectedCity.nameEn}
                </div>
                <div className="text-[11px] text-slate-600">
                  {lang === 'uz' ? '90 daqiqada Express • Bugun kuryer • Bepul punkt' : lang === 'ru' ? 'Экспресс 90 мин • Сегодня курьером • Самовывоз' : 'Express 90 mins • Same-Day Courier • Free Pickup'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MULTI-SELLER PRICE COMPARISON TABLE */}
      {product.sellerOffers?.length > 0 && (
        <section className="rounded-3xl bg-white border border-slate-200 p-6 shadow-soft">
          <h2 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600" />
            {t.priceComparison} ({product.sellerOffers.length} {lang === 'uz' ? 'ta doʻkon taklifi' : lang === 'ru' ? 'предложений' : 'Verified Sellers'})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {product.sellerOffers.map((offer, index) => (
              <div
                key={index}
                className={`p-4 rounded-2xl border flex flex-col justify-between gap-3 ${
                  index === 0
                    ? 'border-emerald-500 bg-emerald-50/40'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-slate-900">
                      {offer.sellerName}
                    </span>
                    <span className="text-xs font-bold text-amber-600">
                      ★ {offer.rating}
                    </span>
                  </div>
                  <div className="text-lg font-black text-emerald-700 mt-1">
                    {formatUzs(offer.priceUzs, lang)}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    🚚 {getLocalizedDeliveryEta(offer.deliveryEta, lang)} • 🛡️ {getLocalizedWarranty(offer.warranty, lang)}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    addToCart(product, {
                      selectedColor,
                      selectedSize,
                      quantity: 1,
                      priceOverrideUzs: offer.priceUzs,
                      sellerNameOverride: offer.sellerName,
                    })
                  }
                  className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition"
                >
                  {t.selectOfferAndCart || (lang === 'uz' ? 'Taklifni tanlash va savatga' : 'Select Offer & Add to Cart')}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. DESCRIPTION & SPECIFICATIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-3">
          <h2 className="text-lg font-extrabold text-slate-900">{t.productDescriptionTitle || (lang === 'uz' ? 'Mahsulot tavsifi' : 'Product Description')}</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
          <div className="pt-3 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
              ✓ {lang === 'uz' ? '100% Asl qadoqlangan tovar' : lang === 'ru' ? '100% Оригинальный запечатанный товар' : '100% Original Sealed Product'}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
              ✓ {t.officialWarrantyPill || (lang === 'uz' ? 'Rasmiy servis kafolati' : 'Official Service Warranty')}
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 rounded-3xl bg-white border border-slate-200 p-6 shadow-soft">
          <h2 className="text-lg font-extrabold text-slate-900 mb-3">
            {t.technicalSpecsTitle || (lang === 'uz' ? 'Texnik xususiyatlar' : 'Technical Specifications')}
          </h2>
          <dl className="divide-y divide-slate-100 text-xs">
            {Object.entries(product.specifications || {}).map(([key, val]) => (
              <div key={key} className="py-2.5 flex justify-between gap-4">
                <dt className="font-semibold text-slate-500">{getLocalizedSpecLabel(key, lang)}</dt>
                <dd className="font-bold text-slate-900 text-right">{val}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* 5. CUSTOMER REVIEWS & WRITE A REVIEW */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-4">
          <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-emerald-600" />
            {t.customerReviewsTitle || (lang === 'uz' ? 'Tasdiqlangan xaridorlar sharhlari' : 'Verified Customer Reviews')} ({productReviews.length})
          </h2>

          {productReviews.length > 0 ? (
            <div className="space-y-4">
              {productReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-extrabold text-slate-900">
                        {rev.userName}
                      </span>
                      <span className="ml-2 text-[11px] text-emerald-700 font-semibold">
                        ✓ {lang === 'uz' ? 'Tasdiqlangan xarid' : lang === 'ru' ? 'Проверенная покупка' : 'Verified Purchase'} ({rev.city})
                      </span>
                    </div>
                    <span className="text-xs font-bold text-amber-500">
                      {'★'.repeat(rev.rating)}
                    </span>
                  </div>
                  {rev.pros && (
                    <div className="text-xs text-slate-700">
                      <strong className="text-emerald-700">{lang === 'uz' ? 'Afzalliklari:' : lang === 'ru' ? 'Плюсы:' : 'Pros:'}</strong> {rev.pros}
                    </div>
                  )}
                  <p className="text-xs text-slate-600 leading-relaxed">{rev.comment}</p>
                  {rev.sellerReply && (
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950">
                      <strong>{lang === 'uz' ? 'Sotuvchi javobi' : lang === 'ru' ? 'Ответ продавца' : 'Seller Reply'} ({product.sellerName}):</strong> {rev.sellerReply}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500">
              {lang === 'uz' ? 'Ushbu mahsulotga birinchi boʻlib sharh qoldiring!' : lang === 'ru' ? 'Станьте первым, кто оставит отзыв об этом товаре!' : 'Be the first verified shopper to review this product!'}
            </p>
          )}
        </div>

        {/* Add Review Form */}
        <form
          onSubmit={handleSubmitReview}
          className="lg:col-span-5 rounded-3xl bg-white border border-slate-200 p-6 shadow-soft space-y-3"
        >
          <h3 className="text-base font-extrabold text-slate-900">
            {t.writeReviewTitle || (lang === 'uz' ? 'Sharh qoldirish' : 'Write a Customer Review')}
          </h3>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.yourRatingLabel || (lang === 'uz' ? 'Bahoingiz:' : 'Rating')}
            </label>
            <select
              value={reviewRating}
              onChange={(e) => setReviewRating(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white"
            >
              <option value={5}>★★★★★ (5/5 {lang === 'uz' ? 'Aʼlo' : lang === 'ru' ? 'Отлично' : 'Excellent'})</option>
              <option value={4}>★★★★☆ (4/5 {lang === 'uz' ? 'Yaxshi' : lang === 'ru' ? 'Хорошо' : 'Good'})</option>
              <option value={3}>★★★☆☆ (3/5 {lang === 'uz' ? 'Oʻrtacha' : lang === 'ru' ? 'Средне' : 'Average'})</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {lang === 'uz' ? 'Afzalliklari' : lang === 'ru' ? 'Преимущества' : 'Pros'}
            </label>
            <input
              type="text"
              value={reviewPros}
              onChange={(e) => setReviewPros(e.target.value)}
              placeholder={lang === 'uz' ? 'Tez yetkazildi, rasmiy kafolat...' : lang === 'ru' ? 'Быстрая доставка, официальная гарантия...' : 'Fast delivery, original warranty...'}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {lang === 'uz' ? 'Sizning sharhingiz' : lang === 'ru' ? 'Ваш отзыв' : 'Your Review'}
            </label>
            <textarea
              rows={3}
              required
              value={reviewComment}
              onChange={(e) => setReviewComment(e.target.value)}
              placeholder={t.reviewTextPlaceholder || (lang === 'uz' ? 'Mahsulot sifati, yetkazish tezligi haqida fikringizni yozing...' : 'Share your experience with this product...')}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition"
          >
            {t.sendReviewBtn || (lang === 'uz' ? 'Sharhni yuborish' : 'Submit Verified Review')}
          </button>
        </form>
      </section>

      {/* 6. SIMILAR PRODUCTS */}
      <section>
        <h2 className="text-xl font-extrabold text-slate-900 mb-4">
          {lang === 'uz' ? 'Oʻxshash mahsulotlar' : lang === 'ru' ? 'Похожие товары' : 'Similar Products'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {fallbackSimilar.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

