/**
 * SAVDOX Multi-Vendor Expanded Product Catalog
 * Adds realistic, diverse products across all 16 official marketplace categories
 * with authentic localized names, diverse price points, specifications, and seller offers.
 */

export const EXPANDED_PRODUCTS = [
  // ==========================================
  // SHOES / POYABZALLAR (cat-shoes)
  // ==========================================
  {
    id: 'prod-shoe-puma-smash',
    slug: 'puma-smash-v2-leather-sneakers-white',
    sku: 'SVX-SHOE-003',
    categoryId: 'cat-shoes',
    categorySlug: 'shoes',
    subcategory: 'Running Sneakers',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'Puma',
    nameUz: 'Krossovka Puma Smash V2 haqiqiy charm (Oq / Toʻq koʻk)',
    nameRu: 'Кроссовки Puma Smash V2 из натуральной кожи (Белый / Синий)',
    nameEn: 'Puma Smash V2 Classic Leather Low-Top Sneakers (White / Navy)',
    descriptionUz: 'Kundalik kiyish uchun qulay va bardoshli haqiqiy charmdan tayyorlangan klassik Puma krossovkasi. Yumshoq SoftFoam+ tagligi bilan.',
    descriptionRu: 'Классические кеды из натуральной кожи для повседневной носки. Мягкая стелька SoftFoam+ для максимального комфорта.',
    descriptionEn: 'Timeless court-inspired silhouette crafted with smooth genuine leather and cushioned SoftFoam+ sockliner.',
    priceUzs: 490000,
    oldPriceUzs: 620000,
    discountPercent: 21,
    rating: 4.88,
    reviewCount: 94,
    soldCount: 380,
    stock: 45,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'White Navy', hex: '#FFFFFF' }, { name: 'Triple Black', hex: '#111827' }],
    sizes: ['40', '41', '42', '43', '44'],
    specifications: { Upper: 'Genuine Leather', Insole: 'SoftFoam+ Memory Cushion', Sole: 'Durable Rubber' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 490000, deliveryEta: 'Same-Day Delivery', rating: 4.94, warranty: '100% Original Guarantee' },
      { storeId: 'store-malika-mobile', sellerName: 'Malika Smart Hub', priceUzs: 510000, deliveryEta: '90 mins Express', rating: 4.88, warranty: 'Original' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-shoe-nb-574',
    slug: 'new-balance-574-core-heritage-grey',
    sku: 'SVX-SHOE-004',
    categoryId: 'cat-shoes',
    categorySlug: 'shoes',
    subcategory: 'Running Sneakers',
    storeId: 'store-malika-mobile',
    sellerName: 'Malika Smart Hub',
    sellerRating: 4.88,
    brand: 'New Balance',
    nameUz: 'Krossovka New Balance 574 Core kulrang zamsh (Klassik model)',
    nameRu: 'Кроссовки New Balance 574 Core замшевые серые (Классика)',
    nameEn: 'New Balance 574 Core Heritage Suede Running Sneakers (Grey / White)',
    descriptionUz: 'New Balance ning eng mashhur 574 modeli. Tabiiy zamsh va toʻrli mato, ENCAP oraliq tagligi butun kun davomida oyoqni charchatmaydi.',
    descriptionRu: 'Легендарная модель 574 из натуральной замши и дышащей сетки. Технология амортизации ENCAP для комфорта на весь день.',
    descriptionEn: 'The iconic 574 silhouette with premium suede and mesh upper, supported by lightweight ENCAP midsole cushioning.',
    priceUzs: 890000,
    oldPriceUzs: 1150000,
    discountPercent: 22,
    rating: 4.93,
    reviewCount: 156,
    soldCount: 520,
    stock: 28,
    images: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Heritage Grey', hex: '#6B7280' }, { name: 'Navy Blue', hex: '#1E3A8A' }],
    sizes: ['41', '42', '43', '44', '45'],
    specifications: { Material: 'Suede & Breathable Mesh', Cushioning: 'ENCAP Technology', Outsole: 'Carbon Rubber' },
    sellerOffers: [
      { storeId: 'store-malika-mobile', sellerName: 'Malika Smart Hub', priceUzs: 890000, deliveryEta: '90 mins Express', rating: 4.88, warranty: 'Original' },
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 920000, deliveryEta: 'Same-Day Courier', rating: 4.94, warranty: 'Original with Box' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-shoe-reebok-classic',
    slug: 'reebok-classic-leather-white',
    sku: 'SVX-SHOE-005',
    categoryId: 'cat-shoes',
    categorySlug: 'shoes',
    subcategory: 'Running Sneakers',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'Reebok',
    nameUz: 'Krossovka Reebok Classic Leather sof oq charm',
    nameRu: 'Кроссовки Reebok Classic Leather чисто белая кожа',
    nameEn: 'Reebok Classic Leather Triple White Low-Top Shoes',
    descriptionUz: 'Yumshoq kiyinuvchi tabiiy charm, yengil EVA amortizatsiyasi va qulay klassik dizayn.',
    descriptionRu: 'Мягкая натуральная кожа, легкая амортизация EVA и проверенный временем силуэт.',
    descriptionEn: 'Soft garment leather upper delivers superior comfort with lightweight die-cut EVA midsole cushioning.',
    priceUzs: 750000,
    oldPriceUzs: 920000,
    discountPercent: 18,
    rating: 4.89,
    reviewCount: 82,
    soldCount: 290,
    stock: 35,
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Triple White', hex: '#FFFFFF' }],
    sizes: ['40', '41', '42', '43'],
    specifications: { Upper: 'Garment Leather', Midsole: 'Die-cut EVA', Outsole: 'High-abrasion Rubber' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 750000, deliveryEta: 'Same-Day Courier', rating: 4.94, warranty: 'Official Original' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-shoe-oxford-leather',
    slug: 'classic-mens-leather-oxford-brogues-brown',
    sku: 'SVX-SHOE-006',
    categoryId: 'cat-shoes',
    categorySlug: 'shoes',
    subcategory: 'Classic Leather Shoes',
    storeId: 'store-samarkand-bazaar',
    sellerName: 'Samarkand Silk & Crafts House',
    sellerRating: 4.97,
    brand: 'Artisan Crafted',
    nameUz: 'Erkaklar uchun qoʻlda tikilgan tabiiy charmdan Oksford tufli (Jigarrang)',
    nameRu: 'Классические туфли Оксфорды из натуральной кожи ручной работы (Коричневый)',
    nameEn: 'Handcrafted Men’s Full-Grain Leather Oxford Brogues (Rich Cognac Brown)',
    descriptionUz: '100% tabiiy italyan charmidan qoʻlda tikilgan hashamatli klassik tufli. Toʻy, ofis va bayram tantanalari uchun mukammal tanlov.',
    descriptionRu: 'Элегантные классические туфли оксфорды из 100% итальянской кожи ручной работы. Идеально под костюм.',
    descriptionEn: 'Hand-burnished full-grain calfskin leather dress shoes with Goodyear welted construction for timeless elegance.',
    priceUzs: 620000,
    oldPriceUzs: 780000,
    discountPercent: 20,
    rating: 4.96,
    reviewCount: 110,
    soldCount: 340,
    stock: 22,
    images: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Cognac Brown', hex: '#78350F' }, { name: 'Classic Black', hex: '#000000' }],
    sizes: ['39', '40', '41', '42', '43', '44'],
    specifications: { Material: '100% Full-Grain Calfskin', Construction: 'Goodyear Welted', Sole: 'Leather & Rubber Grip' },
    sellerOffers: [
      { storeId: 'store-samarkand-bazaar', sellerName: 'Samarkand Silk & Crafts House', priceUzs: 620000, deliveryEta: 'Same-Day Courier', rating: 4.97, warranty: 'Handmade Guarantee' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-shoe-chelsea-boots',
    slug: 'mens-suede-chelsea-boots-sand',
    sku: 'SVX-SHOE-007',
    categoryId: 'cat-shoes',
    categorySlug: 'shoes',
    subcategory: 'Winter Boots',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'Zara Style',
    nameUz: 'Erkaklar tabiiy zamsh Chelsi etigi (Qumrang / Sand Suede)',
    nameRu: 'Мужские замшевые ботинки Челси (Песочный оттенок)',
    nameEn: 'Men’s Premium Water-Resistant Suede Chelsea Boots (Sand Beige)',
    descriptionUz: 'Zamonaviy Chelsi uslubidagi tabiiy zamsh etik. Yon elastik kiritmalar va yumshoq krepli taglik bilan kiyish juda oson.',
    descriptionRu: 'Стильные ботинки челси из натуральной бархатистой замши. Удобные эластичные боковые вставки и прочная подошва.',
    descriptionEn: 'Sleek slip-on silhouette with water-repellent suede leather upper and durable crepe rubber lug sole.',
    priceUzs: 840000,
    oldPriceUzs: 1050000,
    discountPercent: 20,
    rating: 4.91,
    reviewCount: 68,
    soldCount: 210,
    stock: 19,
    images: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Sand Beige', hex: '#D7C4A5' }, { name: 'Dark Charcoal', hex: '#374151' }],
    sizes: ['40', '41', '42', '43', '44'],
    specifications: { Material: 'Hydrophobic Suede', Insole: 'Cushioned Leather', Outsole: 'Crepe Rubber' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 840000, deliveryEta: 'Same-Day Delivery', rating: 4.94, warranty: '1 Year Warranty' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-shoe-timberland-6in',
    slug: 'timberland-premium-6-inch-waterproof-wheat',
    sku: 'SVX-SHOE-008',
    categoryId: 'cat-shoes',
    categorySlug: 'shoes',
    subcategory: 'Winter Boots',
    storeId: 'store-malika-mobile',
    sellerName: 'Malika Smart Hub',
    sellerRating: 4.88,
    brand: 'Timberland',
    nameUz: 'Qishki etik Timberland Premium 6-Inch suv oʻtkazmaydigan (Bugʻdoyrang / Sariq)',
    nameRu: 'Зимние водонепроницаемые ботинки Timberland Premium 6-Inch (Желтые)',
    nameEn: 'Timberland Premium 6-Inch Waterproof Nubuck Leather Boots (Wheat)',
    descriptionUz: 'Afsonaviy suv oʻtkazmaydigan sariq etik. Primaloft 400g issiqlik izolyatsiyasi, zanglamas metall teshiklar va qalin traktor tagligi.',
    descriptionRu: 'Легендарные непромокаемые ботинки из нубука с утеплителем PrimaLoft 400 г для холодной зимы.',
    descriptionEn: 'Iconic waterproof nubuck boots packed with 400 grams of warm PrimaLoft insulation and rugged rubber lug outsole.',
    priceUzs: 1450000,
    oldPriceUzs: 1850000,
    discountPercent: 21,
    rating: 4.97,
    reviewCount: 230,
    soldCount: 640,
    stock: 25,
    images: [
      'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Wheat Yellow', hex: '#D4A373' }, { name: 'Black Nubuck', hex: '#1C1917' }],
    sizes: ['40', '41', '42', '43', '44', '45'],
    specifications: { Waterproof: 'Seam-sealed Waterproof Nubuck', Insulation: '400g PrimaLoft', Outsole: 'Rugged Lug' },
    sellerOffers: [
      { storeId: 'store-malika-mobile', sellerName: 'Malika Smart Hub', priceUzs: 1450000, deliveryEta: '90 mins Express', rating: 4.88, warranty: 'Original Timberland' },
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 1490000, deliveryEta: 'Same-Day Courier', rating: 4.94, warranty: 'Official Warranty' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-shoe-jordan-1-mid',
    slug: 'nike-air-jordan-1-mid-bred-red-black',
    sku: 'SVX-SHOE-009',
    categoryId: 'cat-shoes',
    categorySlug: 'shoes',
    subcategory: 'Running Sneakers',
    storeId: 'store-malika-mobile',
    sellerName: 'Malika Smart Hub',
    sellerRating: 4.88,
    brand: 'Nike',
    nameUz: 'Krossovka Nike Air Jordan 1 Mid afsonaviy Qizil / Qora (Bred)',
    nameRu: 'Кроссовки Nike Air Jordan 1 Mid легендарный цвет (Bred Красно-Черный)',
    nameEn: 'Nike Air Jordan 1 Mid High-Top Basketball Sneakers (Bred Gym Red / Black)',
    descriptionUz: 'Basketbol va shahar koʻchalari afsonasi. Air-Sole yostiqchasi, qalin yuqori sifatli charm va taniqli Wings logotipi.',
    descriptionRu: 'Культовые кроссовки Jordan с амортизацией Air-Sole в фирменной красно-черной расцветке.',
    descriptionEn: 'The legendary silhouette inspired by MJ’s rookie season with encapsulated Air-Sole unit and durable cupsole.',
    priceUzs: 1590000,
    oldPriceUzs: 1950000,
    discountPercent: 18,
    rating: 4.98,
    reviewCount: 310,
    soldCount: 890,
    stock: 20,
    images: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Gym Red Black', hex: '#DC2626' }],
    sizes: ['41', '42', '43', '44', '45'],
    specifications: { Cushioning: 'Encapsulated Nike Air-Sole', Upper: 'Full Leather', Outsole: 'Solid Rubber with Pivot Circle' },
    sellerOffers: [
      { storeId: 'store-malika-mobile', sellerName: 'Malika Smart Hub', priceUzs: 1590000, deliveryEta: '90 mins Express', rating: 4.88, warranty: '100% Authentic' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-shoe-summer-slipon',
    slug: 'lightweight-breathable-mesh-slip-ons-black',
    sku: 'SVX-SHOE-010',
    categoryId: 'cat-shoes',
    categorySlug: 'shoes',
    subcategory: 'Running Sneakers',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'Skechers Fit',
    nameUz: 'Yozgi yengil nafas oluvchi toʻrli sliplar (Bogsiz, Qora)',
    nameRu: 'Летние легкие дышащие слипоны без шнурков (Черный)',
    nameEn: 'Ultra-Lightweight Breathable Mesh Slip-On Walking Shoes (All-Black)',
    descriptionUz: 'Issiq kunlarda kiyishga moʻljallangan bogsiz yengil oyoq kiyim. Havo oʻtkazuvchi toʻr va egiluvchan taglik.',
    descriptionRu: 'Невесомые дышащие слипоны без шнурков. Отличная вентиляция и мягкая эластичная подошва для жары.',
    descriptionEn: 'Slip-on convenience paired with cooling mesh upper and ultra-responsive flexible cushioning.',
    priceUzs: 290000,
    oldPriceUzs: 380000,
    discountPercent: 23,
    rating: 4.86,
    reviewCount: 54,
    soldCount: 270,
    stock: 50,
    images: [
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'All Black', hex: '#000000' }, { name: 'Space Grey', hex: '#4B5563' }],
    sizes: ['39', '40', '41', '42', '43', '44'],
    specifications: { Upper: '3D Air Mesh', Closure: 'Slip-On Elastic Collar', Weight: '210g Superlight' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 290000, deliveryEta: 'Same-Day Delivery', rating: 4.94, warranty: 'Quality Check' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-shoe-asics-kayano',
    slug: 'asics-gel-kayano-30-running-shoes',
    sku: 'SVX-SHOE-011',
    categoryId: 'cat-shoes',
    categorySlug: 'shoes',
    subcategory: 'Running Sneakers',
    storeId: 'store-malika-mobile',
    sellerName: 'Malika Smart Hub',
    sellerRating: 4.88,
    brand: 'Asics',
    nameUz: 'Krossovka Asics Gel-Kayano 30 professional yugurish krossovkasi',
    nameRu: 'Беговые кроссовки Asics Gel-Kayano 30 с системой амортизации PureGEL',
    nameEn: 'Asics Gel-Kayano 30 Stability Distance Running Shoes (French Blue / Glow)',
    descriptionUz: 'Marafon va uzoq masofalarga yugurish uchun dunyodagi eng qulay barqaror krossovka. PureGEL va FF BLAST PLUS ECO koʻpigi.',
    descriptionRu: 'Премиальные беговые кроссовки с максимальной поддержкой стопы, технологией PureGEL и пеной FF BLAST+ ECO.',
    descriptionEn: 'Industry-leading stability trainer engineered with 4D GUIDANCE SYSTEM and PureGEL cushioning for plush distance runs.',
    priceUzs: 1290000,
    oldPriceUzs: 1590000,
    discountPercent: 18,
    rating: 4.95,
    reviewCount: 112,
    soldCount: 390,
    stock: 24,
    images: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'French Blue', hex: '#1E40AF' }],
    sizes: ['41', '42', '43', '44', '45'],
    specifications: { Technology: 'PureGEL & 4D Guidance System', Cushioning: 'FF BLAST PLUS ECO', Drop: '10mm' },
    sellerOffers: [
      { storeId: 'store-malika-mobile', sellerName: 'Malika Smart Hub', priceUzs: 1290000, deliveryEta: '90 mins Express', rating: 4.88, warranty: 'Asics Original' },
    ],
    approvalStatus: 'approved',
  },

  // ==========================================
  // CLOTHING / KIYIM-KECHAK (cat-clothing)
  // ==========================================
  {
    id: 'prod-cloth-levis-jacket',
    slug: 'levis-original-denim-trucker-jacket',
    sku: 'SVX-CLO-005',
    categoryId: 'cat-clothing',
    categorySlug: 'clothing',
    subcategory: 'Men’s Apparel',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'Levi’s',
    nameUz: 'Jinsi kurtka Leviʼs Original Trucker qalin paxta (Klassik koʻk)',
    nameRu: 'Джинсовая куртка Leviʼs Original Trucker из плотного денима (Синий)',
    nameEn: 'Levi’s Original Denim Trucker Jacket 100% Cotton (Classic Stonewash)',
    descriptionUz: '100% sifatli paxta jinsidan tikilgan klassik Leviʼs kurtkasi. Metall tugmalar va 4 ta qulay choʻntak.',
    descriptionRu: 'Культовая джинсовка прямого кроя из 100% плотного хлопка с брендовыми металлическими пуговицами.',
    descriptionEn: 'The original jean jacket since 1967, featuring non-stretch heavyweight denim and iconic chest flap pockets.',
    priceUzs: 680000,
    oldPriceUzs: 850000,
    discountPercent: 20,
    rating: 4.92,
    reviewCount: 88,
    soldCount: 290,
    stock: 30,
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Stonewash Blue', hex: '#3B82F6' }, { name: 'Black Denim', hex: '#18181B' }],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    specifications: { Material: '100% Heavyweight Cotton Denim', Fit: 'Regular Classic', Pockets: '2 Chest Flap, 2 Side Welt' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 680000, deliveryEta: 'Same-Day Courier', rating: 4.94, warranty: 'Original' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-cloth-polo-shirt',
    slug: 'polo-ralph-lauren-classic-cotton-shirt',
    sku: 'SVX-CLO-006',
    categoryId: 'cat-clothing',
    categorySlug: 'clothing',
    subcategory: 'Men’s Apparel',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'Ralph Lauren',
    nameUz: 'Erkaklar klassik koʻylagi Polo Ralph Lauren 100% sof paxta',
    nameRu: 'Классическая рубашка Polo Ralph Lauren из 100% хлопка оксфорд',
    nameEn: 'Polo Ralph Lauren Classic Fit Cotton Oxford Button-Down Shirt',
    descriptionUz: 'Nafas oluvchi paxtali Oksford toʻqimasi, qulay yoqa va kashtali Polo ramzi.',
    descriptionRu: 'Премиальный дышащий хлопок оксфорд, безупречный крой и вышитый логотип пони на груди.',
    descriptionEn: 'Signature button-down collar shirt tailored in breathable cotton oxford with multicolored embroidered pony.',
    priceUzs: 420000,
    oldPriceUzs: 540000,
    discountPercent: 22,
    rating: 4.89,
    reviewCount: 76,
    soldCount: 310,
    stock: 40,
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Sky Blue', hex: '#BAE6FD' }, { name: 'Pure White', hex: '#FFFFFF' }],
    sizes: ['M', 'L', 'XL', 'XXL'],
    specifications: { Fabric: '100% Cotton Oxford', Collar: 'Button-Down', Wash: 'Machine Washable' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 420000, deliveryEta: 'Same-Day Courier', rating: 4.94, warranty: 'Original' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-cloth-linen-trousers',
    slug: 'summer-breathable-linen-pants-beige',
    sku: 'SVX-CLO-007',
    categoryId: 'cat-clothing',
    categorySlug: 'clothing',
    subcategory: 'Men’s Apparel',
    storeId: 'store-samarkand-bazaar',
    sellerName: 'Samarkand Silk & Crafts House',
    sellerRating: 4.97,
    brand: 'Orient Home & Comfort',
    nameUz: 'Yozgi tabiiy zigʻir (Linen) shimi (Och bej, Belli elastik bogʻichli)',
    nameRu: 'Летние льняные брюки свободного кроя (Светло-бежевый)',
    nameEn: 'Men’s Summer Breathable 100% Pure Linen Drawstring Trousers (Beige)',
    descriptionUz: 'Issiq Oʻzbekiston yozida salqinlik beruvchi 100% tabiiy zigʻir matosi. Bogʻichli elastik bel qismi.',
    descriptionRu: 'Натуральный 100% лен для жаркого климата. Эластичный пояс на шнурке и свободная посадка.',
    descriptionEn: 'Crafted from pure lightweight flax linen to keep you cool and stylish in the warm climate.',
    priceUzs: 320000,
    oldPriceUzs: 390000,
    discountPercent: 18,
    rating: 4.91,
    reviewCount: 62,
    soldCount: 220,
    stock: 35,
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Natural Beige', hex: '#E5E7EB' }, { name: 'Navy', hex: '#1E3A8A' }],
    sizes: ['M', 'L', 'XL', 'XXL'],
    specifications: { Material: '100% Pure Flax Linen', Waist: 'Elastic Drawstring', Pockets: '2 Front, 1 Back' },
    sellerOffers: [
      { storeId: 'store-samarkand-bazaar', sellerName: 'Samarkand Silk & Crafts House', priceUzs: 320000, deliveryEta: 'Same-Day Delivery', rating: 4.97, warranty: '100% Linen' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-cloth-adras-dress',
    slug: 'margilan-pure-silk-adras-traditional-dress',
    sku: 'SVX-CLO-008',
    categoryId: 'cat-clothing',
    categorySlug: 'clothing',
    subcategory: 'Traditional Atlas & Adras',
    storeId: 'store-samarkand-bazaar',
    sellerName: 'Samarkand Silk & Crafts House',
    sellerRating: 4.97,
    brand: 'Margilan Silk Artisans',
    nameUz: 'Margʻilon tabiiy ipak va adras ayollar milliy libosi (Nafis naqshli)',
    nameRu: 'Традиционное женское платье из натурального маргиланского шелкового адраса',
    nameEn: 'Handwoven Margilan Silk & Cotton Adras Traditional Uzbek Dress',
    descriptionUz: 'Qoʻlda toʻqilgan Margʻilon adrasi. Tabiiy ipak va paxta iplaridan yaratilgan milliylik va zamonaviylik uygʻunligi.',
    descriptionRu: 'Аутентичный наряд из сотканного вручную маргиланского адраса из натурального шелка и хлопка.',
    descriptionEn: 'Authentic handcrafted ikat adras woven with silk and cotton threads by master weavers of the Fergana Valley.',
    priceUzs: 550000,
    oldPriceUzs: 690000,
    discountPercent: 20,
    rating: 4.98,
    reviewCount: 92,
    soldCount: 240,
    stock: 18,
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Royal Ikat Multi', hex: '#BE185D' }],
    sizes: ['38', '40', '42', '44'],
    specifications: { Weave: 'Handwoven Ikat Adras', Composition: '60% Silk, 40% Cotton', Origin: 'Margilan, Fergana' },
    sellerOffers: [
      { storeId: 'store-samarkand-bazaar', sellerName: 'Samarkand Silk & Crafts House', priceUzs: 550000, deliveryEta: 'Same-Day Courier', rating: 4.97, warranty: 'Artisan Certified' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-cloth-fleece-tracksuit',
    slug: 'warm-winter-fleece-unisex-tracksuit-black',
    sku: 'SVX-CLO-009',
    categoryId: 'cat-clothing',
    categorySlug: 'clothing',
    subcategory: 'Activewear',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'Nike Sportswear',
    nameUz: 'Qishki qalin flisli sport kastyumi (Hudi va shim toʻplami, Qora)',
    nameRu: 'Зимний утепленный спортивный костюм с начесом (Худи и джоггеры, Черный)',
    nameEn: 'Warm Winter Heavyweight Fleece Tracksuit Set (Hoodie & Joggers, Black)',
    descriptionUz: '330 GSM qalin paxtali ichki naqshli flis mato. Qishda issiq saqlovchi qulay hudi va sport shimi.',
    descriptionRu: 'Теплый комплект из плотного футера с мягким начесом (330 г/м²). Худи с капюшоном и удобные джоггеры.',
    descriptionEn: 'Cozy matching set made from 330 GSM brushed-back fleece for maximum warmth and athletic leisure.',
    priceUzs: 490000,
    oldPriceUzs: 620000,
    discountPercent: 21,
    rating: 4.90,
    reviewCount: 84,
    soldCount: 420,
    stock: 50,
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Jet Black', hex: '#000000' }, { name: 'Heather Grey', hex: '#9CA3AF' }],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    specifications: { Fabric: '80% Cotton, 20% Polyester Fleece (330 GSM)', Hood: 'Double-layered', Pockets: 'Kangaroo & Zippered' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 490000, deliveryEta: 'Same-Day Courier', rating: 4.94, warranty: '100% Quality' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-cloth-heavy-tshirt',
    slug: 'oversized-heavyweight-cotton-t-shirt-260gsm',
    sku: 'SVX-CLO-010',
    categoryId: 'cat-clothing',
    categorySlug: 'clothing',
    subcategory: 'Men’s Apparel',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'Urban Culture',
    nameUz: 'Oversize qalin paxtali futbolka 260 GSM (Oq / Qora)',
    nameRu: 'Плотная оверсайз футболка из премиального хлопка 260 г/м²',
    nameEn: 'Oversized Heavyweight Premium Cotton Boxy T-Shirt (260 GSM)',
    descriptionUz: 'Formasini yoʻqotmaydigan qalin 260 GSM toza paxta, tushirilgan yelkali zamonaviy bichim.',
    descriptionRu: 'Плотный хлопковый трикотаж пенье 260 г/м², держит форму после множества стирок.',
    descriptionEn: 'Thick, structured 260 GSM combed cotton tee designed with relaxed dropped shoulders and a durable ribbed collar.',
    priceUzs: 180000,
    oldPriceUzs: 240000,
    discountPercent: 25,
    rating: 4.87,
    reviewCount: 140,
    soldCount: 650,
    stock: 80,
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Pure White', hex: '#FFFFFF' }, { name: 'Pitch Black', hex: '#000000' }, { name: 'Olive Green', hex: '#3F6212' }],
    sizes: ['M', 'L', 'XL'],
    specifications: { Density: '260 GSM Combed Cotton', Fit: 'Boxy Oversized', Neckline: 'Reinforced Ribbed Crewneck' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 180000, deliveryEta: 'Same-Day Delivery', rating: 4.94, warranty: 'Cotton Certified' },
    ],
    approvalStatus: 'approved',
  },

  // ==========================================
  // ELECTRONICS (cat-electronics)
  // ==========================================
  {
    id: 'prod-elec-jbl-charge-5',
    slug: 'jbl-charge-5-waterproof-portable-bluetooth-speaker',
    sku: 'SVX-ELC-004',
    categoryId: 'cat-electronics',
    categorySlug: 'electronics',
    subcategory: 'Audio & Headphones',
    storeId: 'store-malika-mobile',
    sellerName: 'Malika Smart Hub',
    sellerRating: 4.88,
    brand: 'JBL',
    nameUz: 'Portativ akustik kolonka JBL Charge 5 IP67 (Powerbank funksiyasi bilan)',
    nameRu: 'Портативная водонепроницаемая колонка JBL Charge 5 IP67 с функцией повербанка',
    nameEn: 'JBL Charge 5 Portable Waterproof Bluetooth Speaker with Built-in Powerbank',
    descriptionUz: 'Boy JBL Original Pro ovozi, alohida tvitter va ikkita kuchli passiv radiator. 20 soatgacha batareya va telefonni zaryadlash imkoni.',
    descriptionRu: 'Глубокий фирменный бас JBL, защита от воды и пыли IP67, до 20 часов воспроизведения и зарядка смартфона.',
    descriptionEn: 'Bold JBL Original Pro Sound with long-excursion driver and dual passive radiators. IP67 waterproof and 20 hours of playtime.',
    priceUzs: 1490000,
    oldPriceUzs: 1790000,
    discountPercent: 17,
    rating: 4.96,
    reviewCount: 220,
    soldCount: 710,
    stock: 35,
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Squad Camo', hex: '#4B5563' }, { name: 'Black', hex: '#000000' }, { name: 'Blue', hex: '#1D4ED8' }],
    sizes: ['Standard'],
    specifications: { BatteryLife: 'Up to 20 Hours', WaterResistance: 'IP67 Waterproof & Dustproof', PowerBank: 'Built-in USB-A Out' },
    sellerOffers: [
      { storeId: 'store-malika-mobile', sellerName: 'Malika Smart Hub', priceUzs: 1490000, deliveryEta: '90 mins Express', rating: 4.88, warranty: '1 Year Official' },
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 1540000, deliveryEta: 'Same-Day Courier', rating: 4.94, warranty: '1 Year Warranty' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-elec-marshall-emberton',
    slug: 'marshall-emberton-ii-portable-bluetooth-speaker',
    sku: 'SVX-ELC-005',
    categoryId: 'cat-electronics',
    categorySlug: 'electronics',
    subcategory: 'Audio & Headphones',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'Marshall',
    nameUz: 'Simsiz stereo kolonka Marshall Emberton II Black & Brass (30+ soat musiqa)',
    nameRu: 'Портативная акустика Marshall Emberton II Black and Brass (30+ часов звука)',
    nameEn: 'Marshall Emberton II Portable Bluetooth Speaker with True Stereophonic 360° Sound',
    descriptionUz: 'Afsonaviy Marshall rok uslubi va 360 darajali True Stereophonic ovoz. IP67 suvga chidamli va 30 soatdan ortiq quvvat.',
    descriptionRu: 'Культовый винтажный дизайн Marshall, всенаправленный объемный звук на 360° и более 30 часов работы без подзарядки.',
    descriptionEn: 'True Stereophonic multi-directional 360-degree sound, tough IP67 build, and 30+ hours of portable playtime.',
    priceUzs: 1890000,
    oldPriceUzs: 2250000,
    discountPercent: 16,
    rating: 4.98,
    reviewCount: 165,
    soldCount: 480,
    stock: 22,
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Black and Brass', hex: '#1C1917' }],
    sizes: ['Compact'],
    specifications: { Sound: 'True Stereophonic 360°', Battery: '30+ Hours', Charging: 'Quick Charge 20m = 4h' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 1890000, deliveryEta: 'Same-Day Courier', rating: 4.94, warranty: '1 Year Warranty' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-elec-mi-tv-box-s',
    slug: 'xiaomi-tv-box-s-2nd-gen-4k-google-tv',
    sku: 'SVX-ELC-006',
    categoryId: 'cat-electronics',
    categorySlug: 'electronics',
    subcategory: 'Smart TVs',
    storeId: 'store-malika-mobile',
    sellerName: 'Malika Smart Hub',
    sellerRating: 4.88,
    brand: 'Xiaomi',
    nameUz: 'Smart TV pristavka Xiaomi TV Box S (2nd Gen) 4K Ultra HD Google TV',
    nameRu: 'Медиаплеер Xiaomi TV Box S (2nd Gen) 4K Ultra HD с Google TV',
    nameEn: 'Xiaomi TV Box S (2nd Gen) 4K Ultra HD Streaming Media Player Google TV',
    descriptionUz: 'Oddiy televizorni eng soʻnggi Google TV ga aylantiradi. 4K Ultra HD, Dolby Vision, HDR10+ va Bluetooth ovozli pult.',
    descriptionRu: 'Превращает любой ТВ в современный Smart TV: поддержка 4K 60fps, Dolby Vision, Dolby Atmos и голосовой поиск Google.',
    descriptionEn: 'Powered by Google TV with 4K UHD streaming, Dolby Vision, HDR10+, and dual-band Wi-Fi with Bluetooth voice remote.',
    priceUzs: 650000,
    oldPriceUzs: 780000,
    discountPercent: 16,
    rating: 4.92,
    reviewCount: 310,
    soldCount: 1100,
    stock: 60,
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Matte Black', hex: '#000000' }],
    sizes: ['2GB RAM + 8GB Storage'],
    specifications: { Resolution: '4K (3840 x 2160) 60fps', OS: 'Google TV', Audio: 'Dolby Atmos & DTS-HD' },
    sellerOffers: [
      { storeId: 'store-malika-mobile', sellerName: 'Malika Smart Hub', priceUzs: 650000, deliveryEta: '90 mins Express', rating: 4.88, warranty: '1 Year Official' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-elec-wanbo-projector',
    slug: 'wanbo-t2-max-fhd-smart-projector-android',
    sku: 'SVX-ELC-007',
    categoryId: 'cat-electronics',
    categorySlug: 'electronics',
    subcategory: 'Projectors',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'Wanbo',
    nameUz: 'Portativ aqlli lazer proyektor Wanbo T2 Max FHD 1080p Android Wi-Fi',
    nameRu: 'Портативный проектор Wanbo T2 Max Full HD 1080p со встроенным Android',
    nameEn: 'Wanbo T2 Max New 1080P Full HD Smart Portable Projector with Auto Focus',
    descriptionUz: 'Uy kinoteatri uchun qulay ixcham proyektor. Avtofokus, 450 ANSI lyumen yorugʻlik va 120 dyuymgacha ulkan tasvir.',
    descriptionRu: 'Компактный домашний кинотеатр: четкое разрешение 1080p, автофокус, встроенный Android и тихая система охлаждения.',
    descriptionEn: 'Native 1080p Full HD resolution, 450 ANSI lumens, AI auto-focus, and dual stereo speakers for immersive movie nights.',
    priceUzs: 1650000,
    oldPriceUzs: 1990000,
    discountPercent: 17,
    rating: 4.90,
    reviewCount: 95,
    soldCount: 340,
    stock: 20,
    images: [
      'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Snow White', hex: '#F9FAFB' }],
    sizes: ['1080P New Version'],
    specifications: { Resolution: '1920x1080 Native FHD', Brightness: '450 ANSI Lumens', ScreenSize: '40" to 140"' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 1650000, deliveryEta: 'Same-Day Courier', rating: 4.94, warranty: '1 Year Warranty' },
    ],
    approvalStatus: 'approved',
  },

  // ==========================================
  // BEAUTY / GO'ZALLIK VA PARVARISH (cat-beauty)
  // ==========================================
  {
    id: 'prod-beauty-dyson-supersonic',
    slug: 'dyson-supersonic-hd08-hair-dryer',
    sku: 'SVX-BTY-002',
    categoryId: 'cat-beauty',
    categorySlug: 'beauty',
    subcategory: 'Hair Styling Tools',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'Dyson',
    nameUz: 'Professional fen Dyson Supersonic HD08 (Ionli tez quritish, 5 xil nasadka)',
    nameRu: 'Профессиональный фен Dyson Supersonic HD08 (5 насадок в комплекте)',
    nameEn: 'Dyson Supersonic Hair Dryer HD08 with 5 Styling Attachments (Iron/Fuchsia)',
    descriptionUz: 'Sochga haddan ortiq issiqlik bermasdan tez qurituvchi V9 dvigateli va aqlli harorat nazorati.',
    descriptionRu: 'Быстрая сушка без экстремального перегрева благодаря цифровому двигателю V9 и умному контролю температуры.',
    descriptionEn: 'Fast drying with no extreme heat engineered for different hair types, including the Flyaway smoothing attachment.',
    priceUzs: 4890000,
    oldPriceUzs: 5600000,
    discountPercent: 12,
    rating: 4.98,
    reviewCount: 180,
    soldCount: 540,
    stock: 18,
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Iron Fuchsia', hex: '#D946EF' }, { name: 'Nickel Copper', hex: '#B45309' }],
    sizes: ['Complete Set'],
    specifications: { Motor: 'Dyson V9 Digital Motor', HeatSettings: '4 Precise Temperatures', Attachments: '5 Magnetic Heads' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 4890000, deliveryEta: 'Same-Day Courier', rating: 4.94, warranty: '2 Years Official' },
      { storeId: 'store-malika-mobile', sellerName: 'Malika Smart Hub', priceUzs: 4950000, deliveryEta: '90 mins Express', rating: 4.88, warranty: '2 Years Official' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-beauty-laneige-lip',
    slug: 'laneige-lip-sleeping-mask-berry-20g',
    sku: 'SVX-BTY-003',
    categoryId: 'cat-beauty',
    categorySlug: 'beauty',
    subcategory: 'K-Beauty Skincare',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'Laneige',
    nameUz: 'Tungi lab niqobi Laneige Lip Sleeping Mask Berry 20g (Koreya Original)',
    nameRu: 'Ночная маска для губ Laneige Lip Sleeping Mask Berry 20 г (Корея)',
    nameEn: 'Laneige Lip Sleeping Mask Berry 20g Deep Hydrating Balm (Original Korea)',
    descriptionUz: 'Koreyaning eng mashhur lab niqobi. C vitamini va rezavorlar mevali kompleksi lablarni chuqur oziqlantiradi.',
    descriptionRu: 'Культовая корейская маска с ягодами и витамином C для невероятной мягкости и восстановления губ за ночь.',
    descriptionEn: 'Enriched with Berry Fruit Complex, Murumuru seed, and Shea butter to deliver intense moisture while you sleep.',
    priceUzs: 1450000 / 10, // 145,000 UZS
    oldPriceUzs: 190000,
    discountPercent: 23,
    rating: 4.95,
    reviewCount: 240,
    soldCount: 920,
    stock: 65,
    images: [
      'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Berry Pink', hex: '#F43F5E' }],
    sizes: ['20g Full Size'],
    specifications: { Volume: '20g', Origin: 'South Korea (100% Authentic)', Type: 'Overnight Lip Treatment' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 145000, deliveryEta: 'Same-Day Delivery', rating: 4.94, warranty: 'Original Korea' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-beauty-chanel-bleu',
    slug: 'chanel-bleu-de-chanel-eau-de-parfum-100ml',
    sku: 'SVX-BTY-004',
    categoryId: 'cat-beauty',
    categorySlug: 'beauty',
    subcategory: 'Luxury Perfumes',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'Chanel',
    nameUz: 'Erkaklar parfyumi Chanel Bleu de Chanel Eau de Parfum 100ml (Fransiya Original)',
    nameRu: 'Мужской парфюм Chanel Bleu de Chanel Eau de Parfum 100 мл (Франция)',
    nameEn: 'Bleu de Chanel Eau de Parfum Pour Homme 100ml (Authentic France Import)',
    descriptionUz: 'Aristokratik va jozibali yogʻochli-sitrusli ifor. Kedr daraxti, ambra va yangi greypfrut notalari.',
    descriptionRu: 'Благородный древесно-пряный аромат с нотами сандала, кедра и искрящегося грейпфрута. 100% оригинал.',
    descriptionEn: 'An aromatic-woody fragrance with an intensely captivating trail of New Caledonian sandalwood and amber cedar.',
    priceUzs: 2190000,
    oldPriceUzs: 2600000,
    discountPercent: 15,
    rating: 4.99,
    reviewCount: 145,
    soldCount: 420,
    stock: 20,
    images: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Midnight Navy Glass', hex: '#0F172A' }],
    sizes: ['100ml EDP'],
    specifications: { Concentration: 'Eau de Parfum', Volume: '100 ml', Origin: 'France' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 2190000, deliveryEta: 'Same-Day VIP Courier', rating: 4.94, warranty: 'Original French Perfume' },
    ],
    approvalStatus: 'approved',
  },

  // ==========================================
  // GROCERIES / OZIQ-OVQAT MAHSULOTLARI (cat-groceries)
  // ==========================================
  {
    id: 'prod-groc-fergana-honey',
    slug: 'fergana-mountain-pure-wild-honey-1kg',
    sku: 'SVX-GRC-002',
    categoryId: 'cat-groceries',
    categorySlug: 'groceries',
    subcategory: 'Samarkand Dried Fruits & Nuts',
    storeId: 'store-samarkand-bazaar',
    sellerName: 'Samarkand Silk & Crafts House',
    sellerRating: 4.97,
    brand: 'Fergana Valley Apiary',
    nameUz: 'Fargʻona togʻ toza tabiiy gul asali 1 kg (Hech qanday qoʻshimchalarsiz)',
    nameRu: 'Чистый натуральный горный мед из Ферганской долины 1 кг',
    nameEn: 'Pure Raw Fergana Mountain Wildflower Honey 1kg (100% Natural)',
    descriptionUz: 'Fargʻona va Shoximardon togʻlaridan yigʻilgan tabiiy dorivor gul asali. Immunitetni oshiradi.',
    descriptionRu: 'Натуральный горный мед с разнотравья Ферганской долины. Без сахара и примесей, насыщен витаминами.',
    descriptionEn: 'Harvested from high-altitude alpine wildflowers in the Fergana mountains, raw, unheated, and unfiltered.',
    priceUzs: 110000,
    oldPriceUzs: 140000,
    discountPercent: 21,
    rating: 4.98,
    reviewCount: 165,
    soldCount: 780,
    stock: 90,
    images: [
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Golden Amber', hex: '#F59E0B' }],
    sizes: ['1 kg Glass Jar'],
    specifications: { Purity: '100% Raw Natural Honey', Origin: 'Fergana Valley, Uzbekistan', Weight: '1000g' },
    sellerOffers: [
      { storeId: 'store-samarkand-bazaar', sellerName: 'Samarkand Silk & Crafts House', priceUzs: 110000, deliveryEta: 'Same-Day Delivery', rating: 4.97, warranty: '100% Pure Guarantee' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-groc-bukhara-pistachios',
    slug: 'bukhara-roasted-salted-pistachios-500g',
    sku: 'SVX-GRC-003',
    categoryId: 'cat-groceries',
    categorySlug: 'groceries',
    subcategory: 'Samarkand Dried Fruits & Nuts',
    storeId: 'store-samarkand-bazaar',
    sellerName: 'Samarkand Silk & Crafts House',
    sellerRating: 4.97,
    brand: 'Bukhara Sweets',
    nameUz: 'Buxoro qovurilgan va yengil tuzlangan yirik pistasi 500g',
    nameRu: 'Бухарские жареные соленые фисташки высшего сорта 500 г',
    nameEn: 'Premium Roasted & Lightly Salted Bukhara Jumbo Pistachios 500g',
    descriptionUz: 'Toʻliq ochilgan eng oliy navli yirik Buxoro pistasi. Oʻtin olovida qovurilgan tabiiy taʼm.',
    descriptionRu: 'Крупные отборные фисташки натурального раскрытия, бережно обжаренные с морской солью.',
    descriptionEn: 'Sun-dried jumbo pistachios from ancient orchards, roasted to perfection with subtle sea salt.',
    priceUzs: 95000,
    oldPriceUzs: 120000,
    discountPercent: 20,
    rating: 4.96,
    reviewCount: 130,
    soldCount: 620,
    stock: 75,
    images: [
      'https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Natural Pistachio Green', hex: '#84CC16' }],
    sizes: ['500g Eco-Pouch'],
    specifications: { Grade: 'Jumbo Open 18/20', Weight: '500g', Processing: 'Fire-Roasted with Sea Salt' },
    sellerOffers: [
      { storeId: 'store-samarkand-bazaar', sellerName: 'Samarkand Silk & Crafts House', priceUzs: 95000, deliveryEta: 'Same-Day Courier', rating: 4.97, warranty: 'Fresh Guaranteed' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-groc-greenfield-tea-box',
    slug: 'greenfield-tea-collection-gift-box-96-bags',
    sku: 'SVX-GRC-004',
    categoryId: 'cat-groceries',
    categorySlug: 'groceries',
    subcategory: 'Beverages & Tea',
    storeId: 'store-samarkand-bazaar',
    sellerName: 'Samarkand Silk & Crafts House',
    sellerRating: 4.97,
    brand: 'Greenfield',
    nameUz: 'Greenfield Choy Toʻplami maxsus sovgʻabop yogʻoch qutida (96 xil paket)',
    nameRu: 'Подарочный набор чая Greenfield в деревянной шкатулке (96 пакетиков, 24 сорта)',
    nameEn: 'Greenfield Premium Tea Selection Wooden Gift Hamper 96 Foil Bags',
    descriptionUz: '24 xil dunyo choylari kolleksiyasi: qora, koʻk va mevali oʻtli choylar. Mehmonlar va sovgʻa uchun mukammal.',
    descriptionRu: '24 изысканных сорта черного, зеленого и травяного чая в презентабельной деревянной шкатулке.',
    descriptionEn: 'An exquisite collection of 24 rare varieties of black, green, and herbal infusions in a collector wooden case.',
    priceUzs: 185000,
    oldPriceUzs: 230000,
    discountPercent: 19,
    rating: 4.94,
    reviewCount: 95,
    soldCount: 430,
    stock: 45,
    images: [
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Rich Mahogany Wood', hex: '#451A03' }],
    sizes: ['96 Tea Bags (24 Blends)'],
    specifications: { Varieties: '24 Blends x 4 Bags = 96 Total', Packaging: 'Craft Wooden Chest', Origin: 'Ceylon & India' },
    sellerOffers: [
      { storeId: 'store-samarkand-bazaar', sellerName: 'Samarkand Silk & Crafts House', priceUzs: 185000, deliveryEta: 'Same-Day Delivery', rating: 4.97, warranty: 'Fresh Expiry 2027' },
    ],
    approvalStatus: 'approved',
  },

  // ==========================================
  // HOME & FURNITURE (cat-home-furniture)
  // ==========================================
  {
    id: 'prod-furn-scandi-sofa',
    slug: 'scandinavian-3-seater-fabric-sofa-grey',
    sku: 'SVX-FUR-002',
    categoryId: 'cat-home-furniture',
    categorySlug: 'home-furniture',
    subcategory: 'Living Room Sofas',
    storeId: 'store-orient-home',
    sellerName: 'Orient Home & Comfort',
    sellerRating: 4.91,
    brand: 'Orient Living',
    nameUz: 'Skandinaviya uslubidagi 3 kishilik qulay yumshoq divan (Kulrang)',
    nameRu: 'Трехместный скандинавский диван из износостойкого микровелюра (Серый)',
    nameEn: 'Scandinavian 3-Seater Comfort Sofa in Stain-Resistant Heather Grey Fabric',
    descriptionUz: 'Zamonaviy ixcham dizayn, mustahkam qaragʻay yogʻochi karkasi va dogʻ yuqmaydigan yumshoq mato.',
    descriptionRu: 'Лаконичный европейский дизайн, массив натурального дерева и водоотталкивающая ткань легкой чистки.',
    descriptionEn: 'Solid pine wood frame with high-resilience foam and stain-repellent performance fabric.',
    priceUzs: 3890000,
    oldPriceUzs: 4600000,
    discountPercent: 15,
    rating: 4.93,
    reviewCount: 88,
    soldCount: 160,
    stock: 12,
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Heather Grey', hex: '#6B7280' }, { name: 'Deep Emerald', hex: '#065F46' }],
    sizes: ['210 x 90 x 85 cm'],
    specifications: { Frame: 'Kiln-Dried Solid Pine', Seating: 'High-Density Pocket Spring + Foam', Warranty: '2 Years' },
    sellerOffers: [
      { storeId: 'store-orient-home', sellerName: 'Orient Home & Comfort', priceUzs: 3890000, deliveryEta: 'Same-Day Truck Delivery & Assembly', rating: 4.91, warranty: '2 Years Guarantee' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-furn-bukhara-carpet',
    slug: 'bukhara-hand-woven-wool-carpet-200x300',
    sku: 'SVX-FUR-003',
    categoryId: 'cat-home-furniture',
    categorySlug: 'home-furniture',
    subcategory: 'Bukhara Carpets & Rugs',
    storeId: 'store-samarkand-bazaar',
    sellerName: 'Samarkand Silk & Crafts House',
    sellerRating: 4.97,
    brand: 'Bukhara Craftsmen',
    nameUz: 'Buxoro qoʻlda toʻqilgan 100% tabiiy jun gilam (200 x 300 sm)',
    nameRu: 'Бухарский ковер ручной работы из 100% натуральной шерсти (200 x 300 см)',
    nameEn: 'Authentic Bukhara Hand-Knotted 100% Pure Wool Heritage Carpet (2x3m)',
    descriptionUz: 'Afsonaviy qadimiy Buxoro guli naqshlari bilan tabiiy boʻyoqlardan toʻqilgan haqiqiy jun gilam.',
    descriptionRu: 'Шедевр восточного ковроткачества из чистой овечьей шерсти с традиционным орнаментом.',
    descriptionEn: 'Masterpiece hand-knotted carpet using plant-based natural dyes and high-density wool pile.',
    priceUzs: 2450000,
    oldPriceUzs: 3100000,
    discountPercent: 21,
    rating: 4.99,
    reviewCount: 45,
    soldCount: 85,
    stock: 8,
    images: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Crimson Burgundy Red', hex: '#881337' }],
    sizes: ['200 x 300 cm'],
    specifications: { Material: '100% Mountain Wool', Knots: '400,000 knots/m²', Origin: 'Bukhara, Uzbekistan' },
    sellerOffers: [
      { storeId: 'store-samarkand-bazaar', sellerName: 'Samarkand Silk & Crafts House', priceUzs: 2450000, deliveryEta: 'Same-Day Delivery', rating: 4.97, warranty: 'Artisan Heritage Certificate' },
    ],
    approvalStatus: 'approved',
  },

  // ==========================================
  // KITCHEN (cat-kitchen)
  // ==========================================
  {
    id: 'prod-kit-rishtan-tea-set',
    slug: 'rishtan-hand-painted-ceramic-tea-set-6-person',
    sku: 'SVX-KIT-003',
    categoryId: 'cat-kitchen',
    categorySlug: 'kitchen',
    subcategory: 'Rishtan Ceramic Tableware',
    storeId: 'store-samarkand-bazaar',
    sellerName: 'Samarkand Silk & Crafts House',
    sellerRating: 4.97,
    brand: 'Rishtan Pottery Guild',
    nameUz: 'Rishton kulolchilik qoʻlda chizilgan 6 kishilik choy toʻplami (Lagan, Choynak, 6 Piyola)',
    nameRu: 'Риштанский керамический чайный сервиз ручной росписи на 6 персон (Ляган, Чайник, 6 Пиал)',
    nameEn: 'Rishtan Hand-Painted Traditional Glazed Ceramic Tea Set for 6 (Platter, Teapot, 6 Bowls)',
    descriptionUz: 'Rishtonning mashhur lojuvard koʻk siri bilan qoʻlda chizilgan shohona milliy toʻplam.',
    descriptionRu: 'Настоящая риштанская керамика с традиционной бирюзовой глазурью и тонким орнаментом ишкор.',
    descriptionEn: 'Glazed with natural Ishkor mineral pigments, each piece is uniquely hand-thrown and painted by master potters.',
    priceUzs: 290000,
    oldPriceUzs: 380000,
    discountPercent: 23,
    rating: 4.97,
    reviewCount: 140,
    soldCount: 510,
    stock: 40,
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Lapis Lazuli Blue', hex: '#1E3A8A' }],
    sizes: ['8 Pieces (1 Platter, 1 Teapot, 6 Bowls)'],
    specifications: { Craft: 'Wheel-thrown & Hand-glazed', Mineral: 'Natural Ishkor Glaze', LeadFree: '100% Food Safe' },
    sellerOffers: [
      { storeId: 'store-samarkand-bazaar', sellerName: 'Samarkand Silk & Crafts House', priceUzs: 290000, deliveryEta: 'Same-Day Courier', rating: 4.97, warranty: 'Authentic Rishtan' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-kit-namangan-kazan',
    slug: 'namangan-authentic-heavy-cast-iron-kazan-12l',
    sku: 'SVX-KIT-004',
    categoryId: 'cat-kitchen',
    categorySlug: 'kitchen',
    subcategory: 'Cast Iron Kazans',
    storeId: 'store-samarkand-bazaar',
    sellerName: 'Samarkand Silk & Crafts House',
    sellerRating: 4.97,
    brand: 'Namangan Crafts',
    nameUz: 'Namangan haqiqiy qalin choʻyan qozon 12 litr (Silliqlangan ichki qism, Alyuminiy qopqoq)',
    nameRu: 'Настоящий наманганский толстостенный чугунный казан 12 литров с крышкой',
    nameEn: 'Namangan Heavy-Duty Authentic Cast Iron Kazan 12 Litres with Polished Interior',
    descriptionUz: 'Toʻyona va bayram palovlari uchun qalin devorli choʻyan qozon. Issiqlikni uzoq saqlaydi va bir tekis pishiradi.',
    descriptionRu: 'Тяжелый чугунный казан с идеально шлифованной внутренней поверхностью для приготовления настоящего узбекского плова.',
    descriptionEn: 'Thick-walled cast iron cauldron engineered for high-heat retention and perfect heat distribution for traditional plov.',
    priceUzs: 340000,
    oldPriceUzs: 420000,
    discountPercent: 19,
    rating: 4.99,
    reviewCount: 320,
    soldCount: 980,
    stock: 55,
    images: [
      'https://images.unsplash.com/photo-1584990347449-3079b7b75225?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Raw Cast Iron Black', hex: '#18181B' }],
    sizes: ['12 Litres'],
    specifications: { Material: 'Heavy Gray Cast Iron', WallThickness: '8 mm', Capacity: '12 L (Ideal for 15-20 persons)' },
    sellerOffers: [
      { storeId: 'store-samarkand-bazaar', sellerName: 'Samarkand Silk & Crafts House', priceUzs: 340000, deliveryEta: 'Same-Day Delivery', rating: 4.97, warranty: 'Lifetime Cast Iron' },
    ],
    approvalStatus: 'approved',
  },

  // ==========================================
  // SPORTS / SPORT VA FAOL DAM OLISH (cat-sports)
  // ==========================================
  {
    id: 'prod-spt-treadmill-foldable',
    slug: 'home-folding-motorized-treadmill-lcd-12kmh',
    sku: 'SVX-SPT-002',
    categoryId: 'cat-sports',
    categorySlug: 'sports',
    subcategory: 'Treadmills & Bikes',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'FitPro Nordic',
    nameUz: 'Buklanuvchi uy yugurish yoʻlakchasi (12 km/soat, LCD monitor, Yurak urish datchigi)',
    nameRu: 'Складная домашняя электрическая беговая дорожка (12 км/ч, LCD дисплей, датчики пульса)',
    nameEn: 'Motorized Compact Folding Home Treadmill with LCD Monitor & Heart Rate Sensors',
    descriptionUz: 'Uy sharoitida ixcham saqlanuvchi sokin motorli yugurish yoʻlagi. 12 xil avtomatik mashgʻulot dasturi.',
    descriptionRu: 'Тихий энергоэффективный двигатель, амортизация суставов, компактное складывание и датчики пульса.',
    descriptionEn: 'Whisper-quiet 2.5HP motor with anti-shock running deck, hydraulic quick-fold design, and multi-program console.',
    priceUzs: 3890000,
    oldPriceUzs: 4800000,
    discountPercent: 19,
    rating: 4.92,
    reviewCount: 65,
    soldCount: 140,
    stock: 14,
    images: [
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Carbon Black', hex: '#111827' }],
    sizes: ['Foldable Home Edition'],
    specifications: { Motor: '2.5 HP Peak Silent Motor', MaxSpeed: '12 km/h', MaxUserWeight: '120 kg' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 3890000, deliveryEta: 'Same-Day Delivery & Setup', rating: 4.94, warranty: '1 Year Warranty' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-spt-chimgan-tent',
    slug: 'chimgan-waterproof-4-person-camping-tent',
    sku: 'SVX-SPT-003',
    categoryId: 'cat-sports',
    categorySlug: 'sports',
    subcategory: 'Chimgan Camping Gear',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'Chimgan Outdoor',
    nameUz: 'Chimyon 4 kishilik suv oʻtkazmaydigan sayohat chodiri (Ikki qavatli, Shamolga chidamli)',
    nameRu: 'Водонепроницаемая двухслойная туристическая палатка Чимган на 4 человека',
    nameEn: 'Chimgan 4-Person Double-Layer Waterproof Windproof Camping & Trekking Tent',
    descriptionUz: 'Chorvoq, Chimyon va Zomin togʻlarida sayohat qilish uchun ajoyib engil va mustahkam chodir. 3000 mm suv himoyasi.',
    descriptionRu: 'Надежная палатка для походов по горам Узбекистана с защитой от дождя 3000 мм и прочным алюминиевым каркасом.',
    descriptionEn: 'Double-layer storm-tested tent with 3000mm hydrostatic head, bug-proof mesh windows, and lightweight alloy poles.',
    priceUzs: 690000,
    oldPriceUzs: 890000,
    discountPercent: 22,
    rating: 4.95,
    reviewCount: 78,
    soldCount: 260,
    stock: 25,
    images: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Forest Green', hex: '#15803D' }, { name: 'Sunset Orange', hex: '#EA580C' }],
    sizes: ['4-Person (240x210x135 cm)'],
    specifications: { WaterproofRating: '3000 mm PU', Poles: 'Aviation Aluminum', Weight: '3.6 kg' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 690000, deliveryEta: 'Same-Day Courier', rating: 4.94, warranty: '1 Year Warranty' },
    ],
    approvalStatus: 'approved',
  },

  // ==========================================
  // TOYS / O'YINCHOQLAR (cat-toys)
  // ==========================================
  {
    id: 'prod-toy-lego-technic',
    slug: 'lego-technic-mclaren-racing-car-kit',
    sku: 'SVX-TOY-002',
    categoryId: 'cat-toys',
    categorySlug: 'toys',
    subcategory: 'Building Blocks',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'LEGO',
    nameUz: 'Konstruktor LEGO Technic McLaren Formula 1 poyga mashinasi (1432 detal)',
    nameRu: 'Конструктор LEGO Technic гоночный болид McLaren F1 (1432 детали)',
    nameEn: 'LEGO Technic McLaren Formula 1 Race Car Building Set (1432 Pieces)',
    descriptionUz: 'Harakatlanuvchi porshenli V6 silindrli motor, differensial va boshqariladigan gʻildiraklar bilan aniq nusxa.',
    descriptionRu: 'Высокодетализированная модель формульного болида с рабочим двигателем V6, подвеской и рулевым управлением.',
    descriptionEn: 'Authentic replica featuring a V6 cylinder engine with moving pistons, steering, suspension, and differential.',
    priceUzs: 1490000,
    oldPriceUzs: 1850000,
    discountPercent: 19,
    rating: 4.98,
    reviewCount: 130,
    soldCount: 380,
    stock: 22,
    images: [
      'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Papaya Orange & Blue', hex: '#F97316' }],
    sizes: ['1432 Pieces'],
    specifications: { Age: '18+', Pieces: '1432', Dimensions: '65 x 27 x 13 cm' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 1490000, deliveryEta: 'Same-Day Delivery', rating: 4.94, warranty: 'Original LEGO' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-toy-rc-drone',
    slug: 'kids-friendly-hd-camera-quadcopter-drone-wifi',
    sku: 'SVX-TOY-003',
    categoryId: 'cat-toys',
    categorySlug: 'toys',
    subcategory: 'RC Cars & Drones',
    storeId: 'store-malika-mobile',
    sellerName: 'Malika Smart Hub',
    sellerRating: 4.88,
    brand: 'SkyPhantom',
    nameUz: 'Bolalar uchun HD kamerali kvadrokopter dron (Wi-Fi FPV, Pult va telefon orqali boshqaruv)',
    nameRu: 'Детский квадрокоптер дрон с HD камерой и управлением со смартфона',
    nameEn: 'Kids Friendly HD Camera RC Quadcopter Drone with Wi-Fi FPV & Altitude Hold',
    descriptionUz: 'Oson boshqariluvchi, balandlikni avtomatik ushlab turuvchi va 360 daraja buriluvchi xavfsiz bolalar droni.',
    descriptionRu: 'Простой в управлении дрон с удержанием высоты, защитой пропеллеров и трансляцией видео на телефон.',
    descriptionEn: 'Equipped with altitude hold, one-key takeoff/landing, propeller guards, and live Wi-Fi camera feed.',
    priceUzs: 590000,
    oldPriceUzs: 750000,
    discountPercent: 21,
    rating: 4.89,
    reviewCount: 95,
    soldCount: 420,
    stock: 30,
    images: [
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Matte Grey', hex: '#4B5563' }],
    sizes: ['Complete Set with 2 Batteries'],
    specifications: { Camera: '720P HD Wi-Fi', FlightTime: '2x 15 mins (2 Batteries)', ControlRange: '100m' },
    sellerOffers: [
      { storeId: 'store-malika-mobile', sellerName: 'Malika Smart Hub', priceUzs: 590000, deliveryEta: '90 mins Express', rating: 4.88, warranty: '6 Months Warranty' },
    ],
    approvalStatus: 'approved',
  },

  // ==========================================
  // BOOKS / KITOBLAR (cat-books)
  // ==========================================
  {
    id: 'prod-book-cholpon',
    slug: 'abdulhamid-cholpon-kecha-va-kunduz-hardcover',
    sku: 'SVX-BOK-002',
    categoryId: 'cat-books',
    categorySlug: 'books',
    subcategory: 'Uzbek Literature Classics',
    storeId: 'store-samarkand-bazaar',
    sellerName: 'Samarkand Silk & Crafts House',
    sellerRating: 4.97,
    brand: 'Oʻzbekiston Milliy Nashriyoti',
    nameUz: 'Abdulhamid Choʻlpon — "Kecha va kunduz" (Qattiq muqovali durdona nashr)',
    nameRu: 'Абдулхамид Чулпан — «Ночь и день» (Классика узбекской литературы, Твердый переплет)',
    nameEn: 'Abdulhamid Cholpon — "Night and Day" (Masterpiece of Uzbek Literature, Deluxe Hardcover)',
    descriptionUz: 'Oʻzbek jadid adabiyotining yuksak choʻqqisi. Zebixon fojiasi va xalq maʼrifati haqidagi abadiy roman.',
    descriptionRu: 'Бессмертный роман выдающегося просветителя Чулпана о судьбе узбекского народа в роскошном издании.',
    descriptionEn: 'A foundational masterpiece of modern Central Asian literature, bound in a gilded collector’s hardcover edition.',
    priceUzs: 75000,
    oldPriceUzs: 95000,
    discountPercent: 21,
    rating: 4.99,
    reviewCount: 280,
    soldCount: 940,
    stock: 85,
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Burgundy Gold Foil', hex: '#881337' }],
    sizes: ['416 Pages Hardcover'],
    specifications: { Language: 'Uzbek (Lotin)', Pages: '416', Cover: 'Hardcover Gold Foil' },
    sellerOffers: [
      { storeId: 'store-samarkand-bazaar', sellerName: 'Samarkand Silk & Crafts House', priceUzs: 75000, deliveryEta: 'Same-Day Delivery', rating: 4.97, warranty: 'Official Edition' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-book-atomic-habits',
    slug: 'james-clear-atom-odatlar-uzbek-edition',
    sku: 'SVX-BOK-003',
    categoryId: 'cat-books',
    categorySlug: 'books',
    subcategory: 'Business & Finance',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'Asaxiy Books',
    nameUz: 'Jeyms Klir — "Atom odatlar" (Oʻzbek tilidagi rasmiy litsenziyalangan nashr)',
    nameRu: 'Джеймс Клир — «Атомные привычки» (Официальный перевод на узбекский язык)',
    nameEn: 'James Clear — "Atomic Habits" (Official Uzbek Translated Bestseller Edition)',
    descriptionUz: 'Kichik oʻzgarishlar qanday qilib ulkan natijalarga olib kelishini oʻrgatuvchi jahon bestselleri.',
    descriptionRu: 'Мировой бестселлер о том, как крошечные изменения приводят к грандиозным результатам в жизни и карьере.',
    descriptionEn: 'The definitive handbook on breaking bad habits and building remarkable daily routines that compound over time.',
    priceUzs: 68000,
    oldPriceUzs: 85000,
    discountPercent: 20,
    rating: 4.98,
    reviewCount: 350,
    soldCount: 1450,
    stock: 90,
    images: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'White & Gold', hex: '#F3F4F6' }],
    sizes: ['320 Pages'],
    specifications: { Language: 'Uzbek', Genre: 'Self-Improvement / Productivity', Publisher: 'Asaxiy Books' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 68000, deliveryEta: 'Same-Day Courier', rating: 4.94, warranty: 'Original Print' },
    ],
    approvalStatus: 'approved',
  },

  // ==========================================
  // BABY PRODUCTS / BOLALAR MAHSULOTLARI (cat-baby)
  // ==========================================
  {
    id: 'prod-baby-pampers-jumbo',
    slug: 'pampers-premium-care-size-3-jumbo-box-120pcs',
    sku: 'SVX-BAB-002',
    categoryId: 'cat-baby',
    categorySlug: 'baby-products',
    subcategory: 'Diapers & Hygiene',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'Pampers',
    nameUz: 'Tagliklar Pampers Premium Care 3-oʻlcham (6-10 kg) gigant quti 120 dona',
    nameRu: 'Подгузники Pampers Premium Care размер 3 (6-10 кг) джамбо-бокс 120 шт',
    nameEn: 'Pampers Premium Care Hypoallergenic Diapers Size 3 (6-10kg) Jumbo Box 120ct',
    descriptionUz: 'Eng nozik terilar uchun ipakdek yumshoq himoya. Nafas oluvchi qatlamlar va 12 soatgacha quruqlik kafolati.',
    descriptionRu: 'Премиальные дышащие подгузники с индикатором влажности и защитой от протеканий на всю ночь.',
    descriptionEn: 'Silky soft breathable materials equipped with unique absorb-away layer and wetness indicator.',
    priceUzs: 290000,
    oldPriceUzs: 350000,
    discountPercent: 17,
    rating: 4.97,
    reviewCount: 310,
    soldCount: 1650,
    stock: 95,
    images: [
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Mint White', hex: '#F0FDF4' }],
    sizes: ['Size 3 (120 Diapers)'],
    specifications: { WeightRange: '6 - 10 kg', Count: '120 Diapers', Hypoallergenic: 'Dermatologically Tested' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 290000, deliveryEta: 'Same-Day Courier', rating: 4.94, warranty: 'Fresh Lot 2026' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-baby-maxi-cosi-seat',
    slug: 'maxi-cosi-cabriofix-isofix-infant-car-seat',
    sku: 'SVX-BAB-003',
    categoryId: 'cat-baby',
    categorySlug: 'baby-products',
    subcategory: 'Strollers & Car Seats',
    storeId: 'store-malika-mobile',
    sellerName: 'Malika Smart Hub',
    sellerRating: 4.88,
    brand: 'Maxi-Cosi',
    nameUz: 'Yangi tugʻilgan chaqaloqlar uchun avtokreslo Maxi-Cosi CabrioFix (0-13 kg, ISOFIX)',
    nameRu: 'Детское автокресло-люлька Maxi-Cosi CabrioFix (0-13 кг, стандарт ISOFIX)',
    nameEn: 'Maxi-Cosi CabrioFix i-Size Infant Car Seat Carrier (0-13kg, ECE R129)',
    descriptionUz: 'Yevropa xavfsizlik standarti boʻyicha sinovdan oʻtgan qulay avtolulka. Yon zarbalardan himoya (Side Protection System).',
    descriptionRu: 'Безопасное и легкое автокресло для новорожденных с мягким вкладышем и надежной боковой защитой.',
    descriptionEn: 'Lightweight infant car seat featuring reinforced Side Protection System and ergonomic newborn inlay.',
    priceUzs: 1450000,
    oldPriceUzs: 1750000,
    discountPercent: 17,
    rating: 4.98,
    reviewCount: 92,
    soldCount: 280,
    stock: 18,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Essential Black', hex: '#1F2937' }],
    sizes: ['Group 0+ (0-13kg)'],
    specifications: { Standard: 'ECE R129 i-Size Approved', WeightLimit: 'Up to 13 kg', Weight: '3.2 kg' },
    sellerOffers: [
      { storeId: 'store-malika-mobile', sellerName: 'Malika Smart Hub', priceUzs: 1450000, deliveryEta: '90 mins Express', rating: 4.88, warranty: '2 Years European Warranty' },
    ],
    approvalStatus: 'approved',
  },

  // ==========================================
  // ACCESSORIES / AKSESSUARLAR (cat-accessories)
  // ==========================================
  {
    id: 'prod-acc-galaxy-watch-6',
    slug: 'samsung-galaxy-watch-6-classic-47mm-lte',
    sku: 'SVX-ACC-003',
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    subcategory: 'Smartwatches & Bands',
    storeId: 'store-malika-mobile',
    sellerName: 'Malika Smart Hub',
    sellerRating: 4.88,
    brand: 'Samsung',
    nameUz: 'Aqlli soat Samsung Galaxy Watch 6 Classic 47mm LTE (Aylanuvchi bezel, Qora)',
    nameRu: 'Смарт-часы Samsung Galaxy Watch 6 Classic 47 мм LTE (Вращающийся безель)',
    nameEn: 'Samsung Galaxy Watch 6 Classic 47mm LTE with Rotating Bezel & Sapphire Glass',
    descriptionUz: 'Klassik aylanuvchi bezel, sapfir oyna, EKG, arterial bosim va tana tarkibini oʻlchash funksiyalari.',
    descriptionRu: 'Премиальный стальной корпус, вращающийся безель, сапфировое стекло и полный мониторинг здоровья.',
    descriptionEn: 'Iconic rotating bezel paired with sapphire crystal glass, BioActive sensor suite, and advanced sleep coaching.',
    priceUzs: 3450000,
    oldPriceUzs: 3990000,
    discountPercent: 14,
    rating: 4.94,
    reviewCount: 160,
    soldCount: 490,
    stock: 24,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Black Stainless Steel', hex: '#111827' }, { name: 'Silver Steel', hex: '#CBD5E1' }],
    sizes: ['47mm LTE'],
    specifications: { Screen: '1.5" Super AMOLED Sapphire', Case: 'Stainless Steel', Battery: '425 mAh Fast Charge' },
    sellerOffers: [
      { storeId: 'store-malika-mobile', sellerName: 'Malika Smart Hub', priceUzs: 3450000, deliveryEta: '90 mins Express', rating: 4.88, warranty: '1 Year Samsung Official' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-acc-leather-belt',
    slug: 'mens-reversible-italian-full-grain-leather-belt',
    sku: 'SVX-ACC-004',
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    subcategory: 'Leather Bags & Backpacks',
    storeId: 'store-texnomart-pro',
    sellerName: 'TexnoPark Tashkent Official',
    sellerRating: 4.94,
    brand: 'Monti Italy',
    nameUz: 'Erkaklar haqiqiy Italiya charmidan ikki tomonlama klassik kamari (Qora / Jigarrang)',
    nameRu: 'Мужской двухсторонний ремень из натуральной итальянской кожи (Черный / Коричневый)',
    nameEn: 'Men’s Reversible Genuine Full-Grain Italian Leather Belt with Brushed Metal Buckle',
    descriptionUz: 'Bir tomondan qora, ikkinchi tomondan jigarrang qilib taqiluvchi 100% tabiiy italyan charmidan kamar.',
    descriptionRu: 'Удобный поворотный механизм пряжки: одна сторона классическая черная, другая — элегантная коричневая.',
    descriptionEn: 'Crafted from solid full-grain Italian leather with a durable twist buckle mechanism for dual versatility.',
    priceUzs: 280000,
    oldPriceUzs: 350000,
    discountPercent: 20,
    rating: 4.92,
    reviewCount: 88,
    soldCount: 390,
    stock: 50,
    images: [
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Reversible Black Brown', hex: '#262626' }],
    sizes: ['115 cm', '125 cm', '135 cm'],
    specifications: { Material: '100% Full-Grain Italian Cowhide', Buckle: 'Rotatable Brushed Zinc Alloy', Width: '3.5 cm' },
    sellerOffers: [
      { storeId: 'store-texnomart-pro', sellerName: 'TexnoPark Tashkent Official', priceUzs: 280000, deliveryEta: 'Same-Day Delivery', rating: 4.94, warranty: 'Genuine Leather' },
    ],
    approvalStatus: 'approved',
  },
  {
    id: 'prod-acc-laptop-backpack',
    slug: 'waterproof-anti-theft-laptop-backpack-15-6',
    sku: 'SVX-ACC-005',
    categoryId: 'cat-accessories',
    categorySlug: 'accessories',
    subcategory: 'Leather Bags & Backpacks',
    storeId: 'store-malika-mobile',
    sellerName: 'Malika Smart Hub',
    sellerRating: 4.88,
    brand: 'Bange Pro',
    nameUz: 'Suv oʻtkazmaydigan oʻgʻirlikka qarshi 15.6" noutbuk ryukzaki (USB portli, Qora)',
    nameRu: 'Водоотталкивающий городской рюкзак для ноутбука 15.6" с USB портом (Черный)',
    nameEn: 'Waterproof Anti-Theft Business Laptop Backpack 15.6" with USB Charging Port',
    descriptionUz: 'Yomgʻir oʻtkazmaydigan Oksford matosi, maxfiy TSA qulf, noutbuk uchun yumshoq boʻlma va USB port.',
    descriptionRu: 'Надежный городской рюкзак с защитой от влаги, скрытыми карманами, кодовым замком и выходом USB.',
    descriptionEn: 'High-density water-resistant fabric engineered with shockproof laptop sleeve and integrated charging port.',
    priceUzs: 320000,
    oldPriceUzs: 420000,
    discountPercent: 24,
    rating: 4.95,
    reviewCount: 175,
    soldCount: 620,
    stock: 45,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',
    ],
    colors: [{ name: 'Onyx Black', hex: '#000000' }],
    sizes: ['25L Capacity (Fits 15.6" Laptop)'],
    specifications: { Material: 'Waterproof Ballistic Oxford', Capacity: '25 Litres', LaptopCompartment: 'Up to 15.6"' },
    sellerOffers: [
      { storeId: 'store-malika-mobile', sellerName: 'Malika Smart Hub', priceUzs: 320000, deliveryEta: '90 mins Express', rating: 4.88, warranty: '1 Year Warranty' },
    ],
    approvalStatus: 'approved',
  },

  {
    "id": "prod-samsung-s24-ultra",
    "slug": "samsung-galaxy-s24-ultra-12-512gb-titanium",
    "sku": "SVX-PHN-010",
    "categoryId": "cat-smartphones",
    "categorySlug": "smartphones",
    "subcategory": "Flagship Phones",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Samsung",
    "nameUz": "Smartfon Samsung Galaxy S24 Ultra 12/512 GB (Titanium Gray, Rasmiy IMEI)",
    "nameRu": "Смартфон Samsung Galaxy S24 Ultra 12/512 ГБ (Titanium Gray, Официальный IMEI)",
    "nameEn": "Samsung Galaxy S24 Ultra 12/512GB (Titanium Gray, Official IMEI)",
    "descriptionUz": "Galaxy AI intellektual tizimi, 200 MP kamera, oʻrnatilgan S-Pen va titan korpusli eng kuchli flagman smartfon.",
    "descriptionRu": "Флагман со встроенным искусственным интеллектом Galaxy AI, камерой 200 Мп, стилусом S-Pen и титановым корпусом.",
    "descriptionEn": "The ultimate Galaxy flagship powered by Galaxy AI, 200MP camera, built-in S-Pen, and titanium frame.",
    "priceUzs": 14800000,
    "oldPriceUzs": 16500000,
    "discountPercent": 10,
    "rating": 4.99,
    "reviewCount": 280,
    "soldCount": 950,
    "stock": 20,
    "images": [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Titanium Gray",
        "hex": "#6B7280"
      },
      {
        "name": "Titanium Black",
        "hex": "#111827"
      }
    ],
    "sizes": [
      "12GB / 512GB"
    ],
    "specifications": {
      "Screen": "6.8\" Dynamic AMOLED 2X 120Hz",
      "Processor": "Snapdragon 8 Gen 3 for Galaxy",
      "Camera": "200MP + 50MP + 12MP + 10MP",
      "Battery": "5000 mAh"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 14800000,
        "deliveryEta": "90 mins Express",
        "rating": 4.94,
        "warranty": "1 Year Samsung Warranty"
      },
      {
        "storeId": "store-malika-mobile",
        "sellerName": "Malika Smart Hub",
        "priceUzs": 14950000,
        "deliveryEta": "Same-Day Courier",
        "rating": 4.88,
        "warranty": "Official"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-iphone-15-128",
    "slug": "apple-iphone-15-128gb-blue-official",
    "sku": "SVX-PHN-011",
    "categoryId": "cat-smartphones",
    "categorySlug": "smartphones",
    "subcategory": "Flagship Phones",
    "storeId": "store-malika-mobile",
    "sellerName": "Malika Smart Hub",
    "sellerRating": 4.88,
    "brand": "Apple",
    "nameUz": "Smartfon Apple iPhone 15 128 GB Moviy (Rasmiy Kafolat va IMEI)",
    "nameRu": "Смартфон Apple iPhone 15 128 ГБ Синий (Официальный IMEI и Гарантия)",
    "nameEn": "Apple iPhone 15 128GB Blue (Official IMEI & Warranty)",
    "descriptionUz": "Dynamic Island, 48 MP asosiy kamera, USB-C port va rangli bardoshli orqa shishali original iPhone 15.",
    "descriptionRu": "Инновационный Dynamic Island, основная камера 48 Мп, порт USB-C и надежное матовое стекло.",
    "descriptionEn": "Featuring Dynamic Island, 48MP main camera, USB-C, and durable color-infused back glass.",
    "priceUzs": 9900000,
    "oldPriceUzs": 11200000,
    "discountPercent": 11,
    "rating": 4.96,
    "reviewCount": 420,
    "soldCount": 1540,
    "stock": 35,
    "images": [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Blue",
        "hex": "#93C5FD"
      },
      {
        "name": "Black",
        "hex": "#111827"
      }
    ],
    "sizes": [
      "128GB"
    ],
    "specifications": {
      "Screen": "6.1\" Super Retina XDR OLED",
      "Chip": "A16 Bionic",
      "Port": "USB-C",
      "Camera": "48MP Dual Camera"
    },
    "sellerOffers": [
      {
        "storeId": "store-malika-mobile",
        "sellerName": "Malika Smart Hub",
        "priceUzs": 9900000,
        "deliveryEta": "90 mins Express",
        "rating": 4.88,
        "warranty": "1 Year Apple Official"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-poco-x6-pro",
    "slug": "poco-x6-pro-5g-12-512gb-yellow",
    "sku": "SVX-PHN-012",
    "categoryId": "cat-smartphones",
    "categorySlug": "smartphones",
    "subcategory": "5G Phones",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Xiaomi",
    "nameUz": "Smartfon POCO X6 Pro 5G 12/512 GB (Sariq Ekocharm, Dimensity 8300-Ultra)",
    "nameRu": "Смартфон POCO X6 Pro 5G 12/512 ГБ (Желтый экокожа, Официальный IMEI)",
    "nameEn": "POCO X6 Pro 5G 12/512GB (Yellow Vegan Leather, Dimensity 8300-Ultra)",
    "descriptionUz": "Flagman tezligidagi Dimensity 8300-Ultra protsessori, 1.5K 120Hz Flow AMOLED ekran va 67W tezkor zaryad.",
    "descriptionRu": "Мощнейший чипсет Dimensity 8300-Ultra, экран 1.5K 120 Гц Flow AMOLED и быстрая зарядка 67 Вт.",
    "descriptionEn": "Flagship Dimensity 8300-Ultra performance paired with 1.5K 120Hz Flow AMOLED display.",
    "priceUzs": 4200000,
    "oldPriceUzs": 4800000,
    "discountPercent": 12,
    "rating": 4.92,
    "reviewCount": 310,
    "soldCount": 1100,
    "stock": 40,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Yellow Leather",
        "hex": "#FACC15"
      },
      {
        "name": "Black",
        "hex": "#111827"
      }
    ],
    "sizes": [
      "12GB / 512GB"
    ],
    "specifications": {
      "Screen": "6.67\" CrystalRes 1.5K Flow AMOLED 120Hz",
      "CPU": "MediaTek Dimensity 8300-Ultra",
      "Battery": "5000 mAh + 67W Turbo"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 4200000,
        "deliveryEta": "Same-Day Courier",
        "rating": 4.94,
        "warranty": "1 Year Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-sony-wh1000xm5",
    "slug": "sony-wh-1000xm5-wireless-noise-cancelling-headphones-black",
    "sku": "SVX-ELC-008",
    "categoryId": "cat-electronics",
    "categorySlug": "electronics",
    "subcategory": "Audio & Headphones",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Sony",
    "nameUz": "Simsiz shovqinni bekor qiluvchi quloqchin Sony WH-1000XM5 (Qora)",
    "nameRu": "Беспроводные наушники с шумоподавлением Sony WH-1000XM5 (Черный)",
    "nameEn": "Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones",
    "descriptionUz": "Sanoatdagi eng ilgʻor shovqinni soʻndirish texnologiyasi, 30 soatlik batareya va Hi-Res Audio ovoz.",
    "descriptionRu": "Лучшее в отрасли активное шумоподавление, непревзойденный звук высокой четкости и до 30 часов работы.",
    "descriptionEn": "Industry-leading noise canceling with two processors and 8 microphones for superior call and sound quality.",
    "priceUzs": 3850000,
    "oldPriceUzs": 4500000,
    "discountPercent": 14,
    "rating": 4.98,
    "reviewCount": 190,
    "soldCount": 680,
    "stock": 25,
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#111827"
      },
      {
        "name": "Silver",
        "hex": "#E5E7EB"
      }
    ],
    "sizes": [
      "Standard Over-Ear"
    ],
    "specifications": {
      "Battery": "30 Hours with ANC",
      "Drivers": "30mm Carbon Fiber",
      "Codec": "LDAC / Hi-Res Wireless",
      "Weight": "250g"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 3850000,
        "deliveryEta": "90 mins Express",
        "rating": 4.94,
        "warranty": "1 Year Sony Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-lg-oled-55-c3",
    "slug": "lg-oled55c3-4k-smart-tv-120hz-webos",
    "sku": "SVX-ELC-009",
    "categoryId": "cat-electronics",
    "categorySlug": "electronics",
    "subcategory": "Smart TVs",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "LG",
    "nameUz": "Smart televizor LG OLED 55\" C3 4K 120Hz Dolby Vision & Atmos",
    "nameRu": "Телевизор LG OLED 55\" C3 4K 120Hz Dolby Vision & Atmos (webOS)",
    "nameEn": "LG OLED evo C3 55\" 4K Smart TV 120Hz Gaming TV (webOS)",
    "descriptionUz": "Cheksiz kontrast va mukammal qora rang beruvchi OLED evo matritsa, 120Hz G-Sync oʻyinlar uchun qulay.",
    "descriptionRu": "Самоподсвечивающиеся пиксели OLED evo, бесконечная контрастность, процессор a9 AI 4K Gen6 и 120 Гц.",
    "descriptionEn": "LG OLED evo C3 powered by the a9 AI Processor Gen6 with infinite contrast and 0.1ms response time.",
    "priceUzs": 16900000,
    "oldPriceUzs": 19500000,
    "discountPercent": 13,
    "rating": 4.97,
    "reviewCount": 140,
    "soldCount": 420,
    "stock": 12,
    "images": [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Titan Dark Gray",
        "hex": "#374151"
      }
    ],
    "sizes": [
      "55 Inch"
    ],
    "specifications": {
      "Panel": "OLED evo 4K (3840 x 2160)",
      "RefreshRate": "120Hz Native",
      "HDR": "Dolby Vision / HDR10",
      "Audio": "40W Dolby Atmos"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 16900000,
        "deliveryEta": "Same-Day Courier",
        "rating": 4.91,
        "warranty": "3 Years LG Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-dji-mini-4-pro",
    "slug": "dji-mini-4-pro-fly-more-combo-rc2-drone",
    "sku": "SVX-ELC-010",
    "categoryId": "cat-electronics",
    "categorySlug": "electronics",
    "subcategory": "Cameras & Drones",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "DJI",
    "nameUz": "Kvadrokopter dron DJI Mini 4 Pro Fly More Combo (DJI RC 2 pulti bilan)",
    "nameRu": "Квадрокоптер дрон DJI Mini 4 Pro Fly More Combo с пультом DJI RC 2",
    "nameEn": "DJI Mini 4 Pro Fly More Combo Drone with DJI RC 2 Smart Controller",
    "descriptionUz": "4K/60fps HDR video, har tomonlama toʻsiqlarni sezish, 34 daqiqa parvoz vaqti va 249 gramm vazn.",
    "descriptionRu": "Съемка 4K/60fps HDR, всенаправленное распознавание препятствий и до 34 минут полета при весе до 249 грамм.",
    "descriptionEn": "Under 249g ultra-lightweight drone with omnidirectional obstacle sensing and 4K/60fps HDR true vertical shooting.",
    "priceUzs": 12500000,
    "oldPriceUzs": 14000000,
    "discountPercent": 11,
    "rating": 4.99,
    "reviewCount": 88,
    "soldCount": 310,
    "stock": 15,
    "images": [
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Light Gray",
        "hex": "#E5E7EB"
      }
    ],
    "sizes": [
      "Fly More Combo + RC 2"
    ],
    "specifications": {
      "Weight": "249g",
      "Camera": "48MP 1/1.3-inch CMOS 4K/60fps HDR",
      "FlightTime": "Up to 34 mins per battery",
      "Transmission": "O4 20km FHD"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 12500000,
        "deliveryEta": "Same-Day Courier",
        "rating": 4.94,
        "warranty": "1 Year DJI Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-xiaomi-air-purifier-4",
    "slug": "xiaomi-smart-air-purifier-4-pro-hepa",
    "sku": "SVX-ELC-011",
    "categoryId": "cat-electronics",
    "categorySlug": "electronics",
    "subcategory": "Smart Home",
    "storeId": "store-malika-mobile",
    "sellerName": "Malika Smart Hub",
    "sellerRating": 4.88,
    "brand": "Xiaomi",
    "nameUz": "Aqlli havo tozalagich Xiaomi Smart Air Purifier 4 (HEPA filtrli, Wi-Fi)",
    "nameRu": "Умный очиститель воздуха Xiaomi Smart Air Purifier 4 с HEPA фильтром",
    "nameEn": "Xiaomi Smart Air Purifier 4 with True HEPA Filter and OLED Display",
    "descriptionUz": "Xonadagi chang, allergen va yoqimsiz hidlarni 99.97% tozalaydi. Mi Home ilovasi orqali boshqariladi.",
    "descriptionRu": "Эффективно удаляет 99.97% пыли, аллергенов и запахов. Управление со смартфона через приложение Mi Home.",
    "descriptionEn": "High-efficiency particle filter providing 400m3/h CADR, purifying rooms up to 48m2 quietly and efficiently.",
    "priceUzs": 1850000,
    "oldPriceUzs": 2200000,
    "discountPercent": 16,
    "rating": 4.93,
    "reviewCount": 220,
    "soldCount": 840,
    "stock": 45,
    "images": [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "Floor Standing"
    ],
    "specifications": {
      "Coverage": "Up to 48 m2",
      "CADR": "400 m3/h",
      "Filter": "3-in-1 True HEPA",
      "Connectivity": "Wi-Fi IEEE 802.11 b/g/n"
    },
    "sellerOffers": [
      {
        "storeId": "store-malika-mobile",
        "sellerName": "Malika Smart Hub",
        "priceUzs": 1850000,
        "deliveryEta": "90 mins Express",
        "rating": 4.88,
        "warranty": "1 Year Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-jbl-partybox-120",
    "slug": "jbl-partybox-club-120-bluetooth-speaker",
    "sku": "SVX-ELC-012",
    "categoryId": "cat-electronics",
    "categorySlug": "electronics",
    "subcategory": "Audio & Headphones",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "JBL",
    "nameUz": "Kuchli portativ akustik tizim JBL PartyBox Club 120 (160W, Chiroq shou)",
    "nameRu": "Портативная акустическая колонка JBL PartyBox Club 120 (160 Вт, Светомузыка)",
    "nameEn": "JBL PartyBox Club 120 Portable Bluetooth Party Speaker (160W, Lightshow)",
    "descriptionUz": "160W kuchli bas va tiniq ovoz, musiqaga moslashuvchi yorugʻlik shousi va 12 soatlik almashtiriladigan batareya.",
    "descriptionRu": "Мощный фирменный звук JBL Pro Sound 160 Вт, динамическое световое шоу и до 12 часов автономной работы.",
    "descriptionEn": "Powerful 160W JBL Pro Sound with dynamic light show and splash-proof IPX4 construction for ultimate celebrations.",
    "priceUzs": 4600000,
    "oldPriceUzs": 5300000,
    "discountPercent": 13,
    "rating": 4.96,
    "reviewCount": 165,
    "soldCount": 520,
    "stock": 22,
    "images": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Classic Black",
        "hex": "#111827"
      }
    ],
    "sizes": [
      "160W RMS"
    ],
    "specifications": {
      "Power": "160W RMS",
      "BatteryLife": "12 Hours (Swappable Battery)",
      "Protection": "IPX4 Splashproof",
      "Inputs": "Mic & Guitar Input"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 4600000,
        "deliveryEta": "Same-Day Courier",
        "rating": 4.94,
        "warranty": "1 Year Official JBL"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-lenovo-legion-pro-5",
    "slug": "lenovo-legion-pro-5-16-i7-14700hx-rtx4070",
    "sku": "SVX-CMP-005",
    "categoryId": "cat-computers",
    "categorySlug": "computers",
    "subcategory": "Gaming Laptops",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Lenovo",
    "nameUz": "Oʻyin noutbuki Lenovo Legion Pro 5 16\" WQXGA 240Hz, i7-14700HX, RTX 4070 8GB, 32GB/1TB",
    "nameRu": "Игровой ноутбук Lenovo Legion Pro 5 16\" 240Hz, i7-14700HX, RTX 4070 8GB, 32GB/1TB",
    "nameEn": "Lenovo Legion Pro 5 16\" 240Hz WQXGA, Intel Core i7-14700HX, RTX 4070, 32GB RAM, 1TB SSD",
    "descriptionUz": "Eng ogʻir zamonaviy oʻyinlar va 3D grafika uchun kuchli sovutish tizimi va 240Hz PureSight ekranli legion.",
    "descriptionRu": "Экстремальная производительность для киберспорта и 3D рендеринга с процессором 14-го поколения и RTX 4070.",
    "descriptionEn": "Dominate the arena with 14th Gen Intel Core processing, AI-tuned Legion Coldfront 5.0 cooling, and RTX 4070 graphics.",
    "priceUzs": 21500000,
    "oldPriceUzs": 24000000,
    "discountPercent": 10,
    "rating": 4.98,
    "reviewCount": 85,
    "soldCount": 290,
    "stock": 14,
    "images": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Onyx Grey",
        "hex": "#4B5563"
      }
    ],
    "sizes": [
      "16\" 240Hz (32GB / 1TB SSD)"
    ],
    "specifications": {
      "CPU": "Intel Core i7-14700HX 20 Cores",
      "GPU": "NVIDIA GeForce RTX 4070 8GB GDDR6 140W",
      "RAM": "32GB DDR5 5600MHz",
      "Display": "16\" WQXGA 240Hz 500 nits"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 21500000,
        "deliveryEta": "Same-Day Courier",
        "rating": 4.94,
        "warranty": "2 Years Official Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-asus-rog-strix-g16",
    "slug": "asus-rog-strix-g16-16-i7-13650hx-rtx4060",
    "sku": "SVX-CMP-006",
    "categoryId": "cat-computers",
    "categorySlug": "computers",
    "subcategory": "Gaming Laptops",
    "storeId": "store-malika-mobile",
    "sellerName": "Malika Smart Hub",
    "sellerRating": 4.88,
    "brand": "ASUS",
    "nameUz": "Noutbuk ASUS ROG Strix G16 16\" FHD 165Hz, Core i7-13650HX, RTX 4060 8GB, 16GB/512GB",
    "nameRu": "Ноутбук ASUS ROG Strix G16 16\" 165Hz, Core i7-13650HX, RTX 4060 8GB, 16GB/512GB",
    "nameEn": "ASUS ROG Strix G16 16\" 165Hz, Intel Core i7-13650HX, RTX 4060, 16GB RAM, 512GB SSD",
    "descriptionUz": "Aura Sync RGB yoritgich, suyuq metall sovutish tizimi va oʻyinlar uchun qulay 165Hz ROG Nebula ekran.",
    "descriptionRu": "Стильный игровой ноутбук с охлаждением жидким металлом, RGB подсветкой и видеокартой RTX 4060.",
    "descriptionEn": "Unleash your gaming potential with ROG Intelligent Cooling, Tri-Fan technology, and high-refresh display.",
    "priceUzs": 16800000,
    "oldPriceUzs": 18900000,
    "discountPercent": 11,
    "rating": 4.95,
    "reviewCount": 115,
    "soldCount": 380,
    "stock": 18,
    "images": [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Eclipse Gray",
        "hex": "#374151"
      }
    ],
    "sizes": [
      "16\" 165Hz (16GB / 512GB)"
    ],
    "specifications": {
      "CPU": "Intel Core i7-13650HX 14 Cores",
      "GPU": "NVIDIA RTX 4060 8GB 140W",
      "RAM": "16GB DDR5",
      "Display": "16\" FHD+ 165Hz 100% sRGB"
    },
    "sellerOffers": [
      {
        "storeId": "store-malika-mobile",
        "sellerName": "Malika Smart Hub",
        "priceUzs": 16800000,
        "deliveryEta": "90 mins Express",
        "rating": 4.88,
        "warranty": "1 Year ASUS Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-acer-nitro-v15",
    "slug": "acer-nitro-v-15-15-6-144hz-i5-13420h-rtx3050",
    "sku": "SVX-CMP-007",
    "categoryId": "cat-computers",
    "categorySlug": "computers",
    "subcategory": "Gaming Laptops",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Acer",
    "nameUz": "Oʻyin noutbuki Acer Nitro V 15 15.6\" 144Hz, Core i5-13420H, RTX 3050 6GB, 16GB/512GB",
    "nameRu": "Игровой ноутбук Acer Nitro V 15 15.6\" 144Hz, Core i5-13420H, RTX 3050 6GB, 16GB/512GB",
    "nameEn": "Acer Nitro V 15 15.6\" 144Hz FHD, Intel Core i5-13420H, RTX 3050 6GB, 16GB RAM, 512GB SSD",
    "descriptionUz": "Hamyonbop oʻyin noutbuki: 144Hz tezkor ekran, yangilangan 6GB RTX 3050 va ikkita sovutish ventilyatori.",
    "descriptionRu": "Доступный игровой баланс: процессор Intel 13-го поколения, видеокарта RTX 3050 6GB и экран 144 Гц.",
    "descriptionEn": "Engineered for gamers and creators with 144Hz FHD IPS display, dual fans, and dual exhaust ports.",
    "priceUzs": 9500000,
    "oldPriceUzs": 10800000,
    "discountPercent": 12,
    "rating": 4.89,
    "reviewCount": 145,
    "soldCount": 520,
    "stock": 25,
    "images": [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#1F2937"
      }
    ],
    "sizes": [
      "15.6\" 144Hz"
    ],
    "specifications": {
      "CPU": "Intel Core i5-13420H 8 Cores",
      "GPU": "NVIDIA RTX 3050 6GB GDDR6",
      "RAM": "16GB DDR5",
      "Storage": "512GB PCIe 4.0 SSD"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 9500000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.94,
        "warranty": "1 Year Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-dell-xps-13",
    "slug": "dell-xps-13-9315-13-4-fhd-i7-1250u-16gb-512gb",
    "sku": "SVX-CMP-008",
    "categoryId": "cat-computers",
    "categorySlug": "computers",
    "subcategory": "Ultrabooks",
    "storeId": "store-malika-mobile",
    "sellerName": "Malika Smart Hub",
    "sellerRating": 4.88,
    "brand": "Dell",
    "nameUz": "Premial ultrabuk Dell XPS 13 9315 13.4\" FHD+ InfinityEdge, Core i7, 16GB/512GB (Sky Blue)",
    "nameRu": "Ультрабук Dell XPS 13 9315 13.4\" FHD+ InfinityEdge, Core i7, 16GB/512GB (Sky Blue)",
    "nameEn": "Dell XPS 13 9315 13.4\" FHD+ InfinityEdge, Intel Core i7-1250U, 16GB RAM, 512GB SSD",
    "descriptionUz": "Yupqa va yengil alyuminiy korpus (1.17 kg), 12 soatgacha batareya va romsiz chiroyli InfinityEdge displey.",
    "descriptionRu": "Тончайший алюминиевый корпус весом всего 1.17 кг, экран с микрорамками и длительное время работы.",
    "descriptionEn": "Thin, light, and durable premium aluminum chassis with stunning 500-nit InfinityEdge display.",
    "priceUzs": 13500000,
    "oldPriceUzs": 15200000,
    "discountPercent": 11,
    "rating": 4.94,
    "reviewCount": 65,
    "soldCount": 210,
    "stock": 12,
    "images": [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Sky Blue",
        "hex": "#BAE6FD"
      }
    ],
    "sizes": [
      "13.4\" Ultrabook (1.17 kg)"
    ],
    "specifications": {
      "Weight": "1.17 kg",
      "Display": "13.4\" FHD+ 1920x1200 500 nits Anti-Glare",
      "CPU": "Intel Core i7-1250U",
      "RAM": "16GB LPDDR5"
    },
    "sellerOffers": [
      {
        "storeId": "store-malika-mobile",
        "sellerName": "Malika Smart Hub",
        "priceUzs": 13500000,
        "deliveryEta": "90 mins Express",
        "rating": 4.88,
        "warranty": "1 Year Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-mac-mini-m2",
    "slug": "apple-mac-mini-m2-8cpu-10gpu-8gb-256gb",
    "sku": "SVX-CMP-009",
    "categoryId": "cat-computers",
    "categorySlug": "computers",
    "subcategory": "Desktops & All-in-One",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Apple",
    "nameUz": "Stol kompyuteri Apple Mac mini M2 (8 yadroli CPU, 10 yadroli GPU, 8GB / 256GB SSD)",
    "nameRu": "Компактный компьютер Apple Mac mini M2 (8C CPU, 10C GPU, 8GB / 256GB SSD)",
    "nameEn": "Apple Mac mini Desktop Computer with M2 Chip (8-Core CPU, 10-Core GPU, 8GB RAM, 256GB SSD)",
    "descriptionUz": "Ixcham oʻlchamda professional quvvat: video montaj, dasturlash va ofis ishlari uchun jim va tejamkor.",
    "descriptionRu": "Компактный системный блок на чипе M2 для монтажа видео, программирования и ресурсоемких задач.",
    "descriptionEn": "More speed and versatility with next-generation M2 chip, packed into an iconic 7.7-inch-square frame.",
    "priceUzs": 7800000,
    "oldPriceUzs": 8900000,
    "discountPercent": 12,
    "rating": 4.97,
    "reviewCount": 110,
    "soldCount": 450,
    "stock": 20,
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Silver Aluminum",
        "hex": "#E5E7EB"
      }
    ],
    "sizes": [
      "Mac mini M2"
    ],
    "specifications": {
      "Chip": "Apple M2 8-Core CPU, 10-Core GPU",
      "Ports": "2x Thunderbolt 4, 2x USB-A, HDMI, Gigabit Ethernet",
      "Dimensions": "19.7 x 19.7 x 3.58 cm"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 7800000,
        "deliveryEta": "Same-Day Courier",
        "rating": 4.94,
        "warranty": "1 Year Apple Official"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-samsung-odyssey-g5",
    "slug": "samsung-odyssey-g5-27-curved-2k-165hz-1ms-monitor",
    "sku": "SVX-CMP-010",
    "categoryId": "cat-computers",
    "categorySlug": "computers",
    "subcategory": "Monitors",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Samsung",
    "nameUz": "Kavisli oʻyin monitori Samsung Odyssey G5 27\" 2K QHD 165Hz 1ms (1000R, HDR10)",
    "nameRu": "Изогнутый игровой монитор Samsung Odyssey G5 27\" 2K QHD 165Hz 1ms (1000R)",
    "nameEn": "Samsung Odyssey G5 27\" Curved Gaming Monitor 2K QHD 165Hz 1ms AMD FreeSync Premium",
    "descriptionUz": "Inson koʻziga mos 1000R kavisli ekran, 2560x1440 2K aniqlik, 165Hz chastota va 1ms tezkor javob vaqti.",
    "descriptionRu": "Глубокий изгиб 1000R, четкое разрешение WQHD, частота обновления 165 Гц и поддержка FreeSync Premium.",
    "descriptionEn": "Surround your senses with 1000R curvature, ultra-fast 165Hz refresh rate, and 1ms response time.",
    "priceUzs": 3450000,
    "oldPriceUzs": 4100000,
    "discountPercent": 15,
    "rating": 4.92,
    "reviewCount": 95,
    "soldCount": 380,
    "stock": 25,
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#111827"
      }
    ],
    "sizes": [
      "27 Inch (2560 x 1440)"
    ],
    "specifications": {
      "Resolution": "2560 x 1440 WQHD 16:9",
      "Curvature": "1000R",
      "RefreshRate": "165Hz",
      "ResponseTime": "1ms (MPRT)"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 3450000,
        "deliveryEta": "Same-Day Courier",
        "rating": 4.91,
        "warranty": "2 Years Samsung Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-logitech-mx-master-3s",
    "slug": "logitech-mx-master-3s-performance-wireless-mouse",
    "sku": "SVX-CMP-011",
    "categoryId": "cat-computers",
    "categorySlug": "computers",
    "subcategory": "PC Components",
    "storeId": "store-malika-mobile",
    "sellerName": "Malika Smart Hub",
    "sellerRating": 4.88,
    "brand": "Logitech",
    "nameUz": "Simsiz professional sichqoncha Logitech MX Master 3S (8000 DPI, Shovqinsiz tugmalar)",
    "nameRu": "Беспроводная мышь Logitech MX Master 3S (8000 DPI, Бесшумные клики, Bluetooth)",
    "nameEn": "Logitech MX Master 3S Performance Wireless Ergonomic Mouse with Quiet Clicks",
    "descriptionUz": "Dasturchilar va dizaynerlar uchun ideal ergonomik sichqoncha: MagSpeed elektromagnit skroll va shishada ishlovchi 8K datchik.",
    "descriptionRu": "Флагманская эргономичная мышь для продуктивной работы с колесом MagSpeed и сенсором 8000 DPI на любой поверхности.",
    "descriptionEn": "An iconic master with 8K DPI any-surface tracking and 90% quieter clicks for seamless focus and productivity.",
    "priceUzs": 1350000,
    "oldPriceUzs": 1600000,
    "discountPercent": 15,
    "rating": 4.98,
    "reviewCount": 240,
    "soldCount": 920,
    "stock": 35,
    "images": [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Graphite Black",
        "hex": "#1F2937"
      },
      {
        "name": "Pale Grey",
        "hex": "#F3F4F6"
      }
    ],
    "sizes": [
      "Ergonomic Right-Handed"
    ],
    "specifications": {
      "Sensor": "Darkfield 8000 DPI",
      "Battery": "Up to 70 days (USB-C Fast Charge)",
      "Connectivity": "Bluetooth + Logi Bolt USB"
    },
    "sellerOffers": [
      {
        "storeId": "store-malika-mobile",
        "sellerName": "Malika Smart Hub",
        "priceUzs": 1350000,
        "deliveryEta": "90 mins Express",
        "rating": 4.88,
        "warranty": "1 Year Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-kingston-nv2-1tb",
    "slug": "kingston-nv2-1tb-m2-2280-nvme-pcie4-ssd",
    "sku": "SVX-CMP-012",
    "categoryId": "cat-computers",
    "categorySlug": "computers",
    "subcategory": "PC Components",
    "storeId": "store-malika-mobile",
    "sellerName": "Malika Smart Hub",
    "sellerRating": 4.88,
    "brand": "Kingston",
    "nameUz": "Tezkor SSD toʻplagich Kingston NV2 1 TB M.2 2280 NVMe PCIe 4.0 (3500 MB/s)",
    "nameRu": "Твердотельный накопитель Kingston NV2 1 ТБ M.2 NVMe PCIe 4.0 (3500 МБ/с)",
    "nameEn": "Kingston NV2 1TB M.2 2280 NVMe PCIe 4.0 Internal SSD (Read up to 3500MB/s)",
    "descriptionUz": "Noutbuk va shaxsiy kompyuterlarni tezlashtirish uchun tejamkor va ishonchli 1TB hajmdagi PCIe 4.0 SSD.",
    "descriptionRu": "Надежное и быстрое хранилище данных со скоростью чтения до 3500 МБ/с для апгрейда ПК и ноутбуков.",
    "descriptionEn": "Substantial storage solution offering Gen 4x4 NVMe PCIe performance in a compact M.2 design.",
    "priceUzs": 790000,
    "oldPriceUzs": 950000,
    "discountPercent": 16,
    "rating": 4.91,
    "reviewCount": 310,
    "soldCount": 1450,
    "stock": 50,
    "images": [
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Standard Blue PCB",
        "hex": "#2563EB"
      }
    ],
    "sizes": [
      "1TB M.2 2280"
    ],
    "specifications": {
      "FormFactor": "M.2 2280",
      "Interface": "PCIe 4.0 x4 NVMe",
      "ReadSpeed": "Up to 3500 MB/s",
      "WriteSpeed": "Up to 2100 MB/s"
    },
    "sellerOffers": [
      {
        "storeId": "store-malika-mobile",
        "sellerName": "Malika Smart Hub",
        "priceUzs": 790000,
        "deliveryEta": "90 mins Express",
        "rating": 4.88,
        "warranty": "3 Years Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-cloth-zara-wool-coat",
    "slug": "zara-man-wool-blend-tailored-coat-camel",
    "sku": "SVX-CLT-011",
    "categoryId": "cat-clothing",
    "categorySlug": "clothing",
    "subcategory": "Outerwear",
    "storeId": "store-samarkand-bazaar",
    "sellerName": "Samarkand Silk & Crafts House",
    "sellerRating": 4.97,
    "brand": "Zara",
    "nameUz": "Klassik erkaklar jun paltosi Zara Man Premium (Qumrang / Camel)",
    "nameRu": "Классическое мужское шерстяное пальто Zara Man (Цвет верблюжьей шерсти / Camel)",
    "nameEn": "Zara Man Tailored Wool-Blend Coat (Classic Camel Tone)",
    "descriptionUz": "Italiya bichimi asosidagi nafis qishki palto: 65% tabiiy jun, ipaksimon astar va mustahkam tugmalar.",
    "descriptionRu": "Элегантное пальто прямого кроя из высококачественной смесовой шерсти для делового и повседневного гардероба.",
    "descriptionEn": "Refined structured silhouette crafted from a rich wool blend with notch lapels and back vent.",
    "priceUzs": 1650000,
    "oldPriceUzs": 2100000,
    "discountPercent": 21,
    "rating": 4.93,
    "reviewCount": 45,
    "soldCount": 160,
    "stock": 20,
    "images": [
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Camel",
        "hex": "#C19A6B"
      },
      {
        "name": "Black",
        "hex": "#111827"
      }
    ],
    "sizes": [
      "M (48)",
      "L (50)",
      "XL (52)",
      "XXL (54)"
    ],
    "specifications": {
      "Material": "65% Wool, 35% Polyamide",
      "Lining": "100% Viscose",
      "Style": "Single-Breasted Notch Lapel"
    },
    "sellerOffers": [
      {
        "storeId": "store-samarkand-bazaar",
        "sellerName": "Samarkand Silk & Crafts House",
        "priceUzs": 1650000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.97,
        "warranty": "100% Quality Assurance"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-cloth-tommy-polo",
    "slug": "tommy-hilfiger-classic-fit-pique-polo-navy",
    "sku": "SVX-CLT-012",
    "categoryId": "cat-clothing",
    "categorySlug": "clothing",
    "subcategory": "Men’s Apparel",
    "storeId": "store-samarkand-bazaar",
    "sellerName": "Samarkand Silk & Crafts House",
    "sellerRating": 4.97,
    "brand": "Tommy Hilfiger",
    "nameUz": "Klassik erkaklar polo koʻylagi Tommy Hilfiger 100% sof paxta (Toʻq koʻk / Navy)",
    "nameRu": "Классическая футболка поло Tommy Hilfiger из 100% хлопка пике (Темно-синий)",
    "nameEn": "Tommy Hilfiger Classic Fit 100% Organic Pique Cotton Polo Shirt (Navy)",
    "descriptionUz": "Nafas oluvchi paxta pike matosi, naqshli TH bayroqcha logotipi va qulay klassik bichim.",
    "descriptionRu": "Воздухопроницаемый хлопок пике с вышитым фирменным логотипом-флажком на груди.",
    "descriptionEn": "Cut from breathable organic cotton pique, finished with signature tipping and iconic flag embroidery.",
    "priceUzs": 620000,
    "oldPriceUzs": 780000,
    "discountPercent": 20,
    "rating": 4.91,
    "reviewCount": 110,
    "soldCount": 420,
    "stock": 35,
    "images": [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Navy",
        "hex": "#1E3A8A"
      },
      {
        "name": "White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "specifications": {
      "Fabric": "100% Organic Cotton Pique",
      "Fit": "Custom Slim Fit",
      "Collar": "Ribbed 2-Button Placket"
    },
    "sellerOffers": [
      {
        "storeId": "store-samarkand-bazaar",
        "sellerName": "Samarkand Silk & Crafts House",
        "priceUzs": 620000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.97,
        "warranty": "Original Garment"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-cosrx-snail-mucin",
    "slug": "cosrx-advanced-snail-96-mucin-power-essence-100ml",
    "sku": "SVX-BTY-005",
    "categoryId": "cat-beauty",
    "categorySlug": "beauty",
    "subcategory": "K-Beauty Skincare",
    "storeId": "store-samarkand-bazaar",
    "sellerName": "Samarkand Silk & Crafts House",
    "sellerRating": 4.97,
    "brand": "COSRX",
    "nameUz": "Koreya tiklovchi essensiyasi COSRX Advanced Snail 96 Mucin 100ml (Original)",
    "nameRu": "Увлажняющая эссенция с муцином улитки COSRX Advanced Snail 96 Mucin 100мл",
    "nameEn": "COSRX Advanced Snail 96 Mucin Power Essence 100ml (Authentic K-Beauty)",
    "descriptionUz": "96% shilliqqurt mutsini bilan boyitilgan, quruq va shikastlangan terini chuqur oziqlantiruvchi yoshartiruvchi essensiya.",
    "descriptionRu": "Культовая корейская эссенция на 96% состоящая из муцина улитки, восстанавливает сияние и упругость кожи.",
    "descriptionEn": "Lightweight essence formulated with 96.3% snail secretion filtrate to soothe and repair damaged skin barriers.",
    "priceUzs": 195000,
    "oldPriceUzs": 260000,
    "discountPercent": 25,
    "rating": 4.97,
    "reviewCount": 380,
    "soldCount": 1820,
    "stock": 60,
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Clear Essence",
        "hex": "#F9FAFB"
      }
    ],
    "sizes": [
      "100 ml Pump Bottle"
    ],
    "specifications": {
      "SnailMucin": "96.3%",
      "Origin": "Republic of Korea",
      "SkinType": "All Skin Types (Hypoallergenic)"
    },
    "sellerOffers": [
      {
        "storeId": "store-samarkand-bazaar",
        "sellerName": "Samarkand Silk & Crafts House",
        "priceUzs": 195000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.97,
        "warranty": "100% Authentic Korean"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-dior-sauvage-edp",
    "slug": "christian-dior-sauvage-eau-de-parfum-100ml",
    "sku": "SVX-BTY-006",
    "categoryId": "cat-beauty",
    "categorySlug": "beauty",
    "subcategory": "Luxury Perfumes",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Dior",
    "nameUz": "Erkaklar mashhur parfyumi Christian Dior Sauvage EDP 100ml (Fransiya Original)",
    "nameRu": "Мужской парфюм Christian Dior Sauvage Eau de Parfum 100мл (Оригинал Франция)",
    "nameEn": "Christian Dior Sauvage Eau de Parfum 100ml (Authentic France)",
    "descriptionUz": "Kalabriya bergamoti, vanil va yogʻochli ambra notalariga ega afsonaviy erkaklar hidi. 24 soatdan ortiq saqlanadi.",
    "descriptionRu": "Чувственный и мощный шлейф бергамота, папуасской ванили и амброксана. 100% французский оригинал.",
    "descriptionEn": "An iconic fresh and noble composition enriched with spicy Calabrian bergamot and Papua New Guinean vanilla.",
    "priceUzs": 1850000,
    "oldPriceUzs": 2200000,
    "discountPercent": 15,
    "rating": 4.99,
    "reviewCount": 410,
    "soldCount": 1650,
    "stock": 25,
    "images": [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Midnight Gradient",
        "hex": "#1E1B4B"
      }
    ],
    "sizes": [
      "100 ml EDP Spray"
    ],
    "specifications": {
      "Volume": "100 ml",
      "Type": "Eau de Parfum",
      "Longevity": "24+ Hours",
      "Country": "France"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 1850000,
        "deliveryEta": "90 mins Express",
        "rating": 4.94,
        "warranty": "Original Batch Code Guarantee"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-the-ordinary-niacinamide",
    "slug": "the-ordinary-niacinamide-10-zinc-1-30ml",
    "sku": "SVX-BTY-007",
    "categoryId": "cat-beauty",
    "categorySlug": "beauty",
    "subcategory": "K-Beauty Skincare",
    "storeId": "store-samarkand-bazaar",
    "sellerName": "Samarkand Silk & Crafts House",
    "sellerRating": 4.97,
    "brand": "The Ordinary",
    "nameUz": "Yuz zardobi The Ordinary Niacinamide 10% + Zinc 1% 30ml (Yogʻlanish va poralarga qarshi)",
    "nameRu": "Сыворотка The Ordinary Niacinamide 10% + Zinc 1% 30мл для сужения пор",
    "nameEn": "The Ordinary Niacinamide 10% + Zinc 1% High-Strength Vitamin Mineral Serum 30ml",
    "descriptionUz": "Yuz terisi yogʻ balansini tartibga soladi, qora nuqtalar va husnbuzar izlarini sezilarli darajada kamaytiradi.",
    "descriptionRu": "Эффективная сыворотка против высыпаний, расширенных пор и жирного блеска. Канадский оригинал.",
    "descriptionEn": "High-strength vitamin and mineral blemish formula with 10% pure Niacinamide and 1% Zinc PCA.",
    "priceUzs": 125000,
    "oldPriceUzs": 160000,
    "discountPercent": 22,
    "rating": 4.88,
    "reviewCount": 520,
    "soldCount": 2400,
    "stock": 75,
    "images": [
      "https://images.unsplash.com/photo-1608248597359-216259021a8b?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Dropper Bottle",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "30 ml"
    ],
    "specifications": {
      "Ingredients": "Niacinamide 10%, Zinc PCA 1%",
      "PH": "5.0 - 6.5",
      "AlcoholFree": "Yes"
    },
    "sellerOffers": [
      {
        "storeId": "store-samarkand-bazaar",
        "sellerName": "Samarkand Silk & Crafts House",
        "priceUzs": 125000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.97,
        "warranty": "Original"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-cerave-foaming-cleanser",
    "slug": "cerave-foaming-facial-cleanser-normal-oily-skin-473ml",
    "sku": "SVX-BTY-008",
    "categoryId": "cat-beauty",
    "categorySlug": "beauty",
    "subcategory": "Organic Care",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "CeraVe",
    "nameUz": "Yuz yuvish koʻpikli geli CeraVe Foaming Cleanser 473ml (Keramidlar va gialuron kislota)",
    "nameRu": "Очищающий пенящийся гель для нормальной и жирной кожи CeraVe 473мл",
    "nameEn": "CeraVe Foaming Facial Cleanser for Normal to Oily Skin with 3 Essential Ceramides 473ml",
    "descriptionUz": "Dermatologlar tomonidan ishlab chiqilgan: 3 xil muhim keramid bilan terini quritmasdan chuqur tozalaydi.",
    "descriptionRu": "Глубоко очищает от макияжа и излишков себума, сохраняя естественный защитный барьер кожи.",
    "descriptionEn": "Formulated with three essential ceramides, hyaluronic acid, and niacinamide to restore protective skin barrier.",
    "priceUzs": 240000,
    "oldPriceUzs": 310000,
    "discountPercent": 22,
    "rating": 4.95,
    "reviewCount": 310,
    "soldCount": 1420,
    "stock": 50,
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Teal Dispenser",
        "hex": "#14B8A6"
      }
    ],
    "sizes": [
      "473 ml (16 FL OZ)"
    ],
    "specifications": {
      "Ceramides": "1, 3, 6-II",
      "NonComedogenic": "Yes",
      "FragranceFree": "Yes"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 240000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.94,
        "warranty": "Authentic USA Formula"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-armani-si-passione",
    "slug": "giorgio-armani-si-passione-eau-de-parfum-100ml",
    "sku": "SVX-BTY-009",
    "categoryId": "cat-beauty",
    "categorySlug": "beauty",
    "subcategory": "Luxury Perfumes",
    "storeId": "store-samarkand-bazaar",
    "sellerName": "Samarkand Silk & Crafts House",
    "sellerRating": 4.97,
    "brand": "Giorgio Armani",
    "nameUz": "Ayollar parfyumi Giorgio Armani Sì Passione EDP 100ml (Qizil quti, Fransiya)",
    "nameRu": "Парфюмерная вода Giorgio Armani Sì Passione 100мл (Оригинал Франция)",
    "nameEn": "Giorgio Armani Sì Passione Eau de Parfum Spray 100ml",
    "descriptionUz": "Qora smorodina, shirin nok, atirgul va vanil notalari uygʻunlashgan maftunkor ayollar hidi.",
    "descriptionRu": "Яркий и чувственный цветочный фруктовый аромат с акцентами черной смородины, розы и ванили.",
    "descriptionEn": "An intoxicating floral-fruity scent opening with blackcurrant nectar and sparkling pear.",
    "priceUzs": 1750000,
    "oldPriceUzs": 2100000,
    "discountPercent": 16,
    "rating": 4.96,
    "reviewCount": 190,
    "soldCount": 780,
    "stock": 20,
    "images": [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Passione Red",
        "hex": "#DC2626"
      }
    ],
    "sizes": [
      "100 ml EDP"
    ],
    "specifications": {
      "Volume": "100 ml",
      "Type": "Eau de Parfum",
      "Family": "Floral Fruity",
      "Country": "France"
    },
    "sellerOffers": [
      {
        "storeId": "store-samarkand-bazaar",
        "sellerName": "Samarkand Silk & Crafts House",
        "priceUzs": 1750000,
        "deliveryEta": "Same-Day Courier",
        "rating": 4.97,
        "warranty": "100% Authentic"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-maybelline-sky-high",
    "slug": "maybelline-lash-sensational-sky-high-mascara-black",
    "sku": "SVX-BTY-010",
    "categoryId": "cat-beauty",
    "categorySlug": "beauty",
    "subcategory": "Makeup",
    "storeId": "store-malika-mobile",
    "sellerName": "Malika Smart Hub",
    "sellerRating": 4.88,
    "brand": "Maybelline",
    "nameUz": "Kipriklar uchun tush Maybelline Lash Sensational Sky High (Cheksiz hajm va uzaytirish)",
    "nameRu": "Тушь для ресниц Maybelline Lash Sensational Sky High (Экстремальная длина и объем)",
    "nameEn": "Maybelline Lash Sensational Sky High Lengthening Washable Mascara (Very Black)",
    "descriptionUz": "Bambuk ekstrakti bilan boyitilgan egiluvchan choʻtka kipriklarni tomiridan uchigacha maksimal darajada uzaytiradi.",
    "descriptionRu": "Инновационная конусообразная щеточка захватывает каждую ресницу, создавая головокружительный объем.",
    "descriptionEn": "Delivers full volume and limitless length with exclusive Flex Tower brush and bamboo extract.",
    "priceUzs": 135000,
    "oldPriceUzs": 170000,
    "discountPercent": 20,
    "rating": 4.91,
    "reviewCount": 460,
    "soldCount": 2200,
    "stock": 65,
    "images": [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Very Black",
        "hex": "#000000"
      }
    ],
    "sizes": [
      "7.2 ml"
    ],
    "specifications": {
      "Shade": "Very Black 801",
      "AllergyTested": "Ophthalmologist Tested",
      "Formula": "Bamboo Extract Infused"
    },
    "sellerOffers": [
      {
        "storeId": "store-malika-mobile",
        "sellerName": "Malika Smart Hub",
        "priceUzs": 135000,
        "deliveryEta": "90 mins Express",
        "rating": 4.88,
        "warranty": "Original"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-shiseido-sun-protector",
    "slug": "shiseido-expert-sun-protector-lotion-spf50-150ml",
    "sku": "SVX-BTY-011",
    "categoryId": "cat-beauty",
    "categorySlug": "beauty",
    "subcategory": "Organic Care",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Shiseido",
    "nameUz": "Quyoshdan himoyalovchi krem-losyon Shiseido Expert Sun Protector SPF50+ 150ml (SynchroShield)",
    "nameRu": "Солнцезащитный крем-лосьон Shiseido Expert Sun Protector SPF50+ 150мл (Япония)",
    "nameEn": "Shiseido Expert Sun Protector Face & Body Lotion SPF50+ with SynchroShield 150ml",
    "descriptionUz": "Issiqlik va suv taʼsirida himoyasi kuchayuvchi Yaponiya texnologiyasi. Yuz va tana uchun oq iz qoldirmaydi.",
    "descriptionRu": "Инновационная технология SynchroShield усиливает защиту при контакте с водой и теплом. Без белых следов.",
    "descriptionEn": "Invisible broad-spectrum SPF 50+ sunscreen powered by WetForce and HeatForce technology.",
    "priceUzs": 540000,
    "oldPriceUzs": 680000,
    "discountPercent": 20,
    "rating": 4.97,
    "reviewCount": 140,
    "soldCount": 580,
    "stock": 30,
    "images": [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Blue Bottle",
        "hex": "#1D4ED8"
      }
    ],
    "sizes": [
      "150 ml"
    ],
    "specifications": {
      "Protection": "SPF 50+ / PA++++",
      "WaterResistant": "80 Minutes",
      "Country": "Japan"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 540000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.94,
        "warranty": "Original Japan"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-olaplex-no3",
    "slug": "olaplex-no-3-hair-perfector-repairing-treatment-100ml",
    "sku": "SVX-BTY-012",
    "categoryId": "cat-beauty",
    "categorySlug": "beauty",
    "subcategory": "Hair Styling Tools",
    "storeId": "store-samarkand-bazaar",
    "sellerName": "Samarkand Silk & Crafts House",
    "sellerRating": 4.97,
    "brand": "Olaplex",
    "nameUz": "Sochni ichki bogʻlamlaridan tiklovchi eliksir Olaplex No. 3 Hair Perfector 100ml",
    "nameRu": "Эликсир для совершенства и восстановления волос Olaplex No. 3 Hair Perfector 100мл",
    "nameEn": "Olaplex No. 3 Hair Perfector Bond Building Repair Treatment 100ml",
    "descriptionUz": "Boʻyalgan, kuygan va shikastlangan sochlarning disulfid bogʻlarini tiklovchi xalqaro salon standartidagi vosita.",
    "descriptionRu": "Глубокое восстановление поврежденных дисульфидных связей волос в домашних условиях. Мировой бестселлер.",
    "descriptionEn": "At-home bond-building treatment proven to repair and strengthen damaged, compromised hair.",
    "priceUzs": 380000,
    "oldPriceUzs": 480000,
    "discountPercent": 20,
    "rating": 4.95,
    "reviewCount": 290,
    "soldCount": 1100,
    "stock": 40,
    "images": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "White Bottle",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "100 ml"
    ],
    "specifications": {
      "Formula": "Patented Bis-Aminopropyl Diglycol Dimaleate",
      "SulfateFree": "Yes",
      "ParabenFree": "Yes"
    },
    "sellerOffers": [
      {
        "storeId": "store-samarkand-bazaar",
        "sellerName": "Samarkand Silk & Crafts House",
        "priceUzs": 380000,
        "deliveryEta": "Same-Day Courier",
        "rating": 4.97,
        "warranty": "Original USA"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-ferrero-rocher-collection",
    "slug": "ferrero-rocher-grand-collection-chocolate-box-24pcs",
    "sku": "SVX-GRC-005",
    "categoryId": "cat-groceries",
    "categorySlug": "groceries",
    "subcategory": "Samarkand Dried Fruits & Nuts",
    "storeId": "store-samarkand-bazaar",
    "sellerName": "Samarkand Silk & Crafts House",
    "sellerRating": 4.97,
    "brand": "Ferrero",
    "nameUz": "Shokoladli konfetlar Ferrero Rocher Grand Collection (24 dona, Sovgʻabop quti)",
    "nameRu": "Шоколадные конфеты Ferrero Rocher Grand Collection 24 шт (Подарочная коробка)",
    "nameEn": "Ferrero Rocher Grand Collection Fine Hazelnut Chocolates Box (24 Pieces)",
    "descriptionUz": "Butun oʻrmon yongʻogʻi, kremsi nozik shokolad va qarsildoq vafli bilan qoplangan premium sovgʻabop shirinlik.",
    "descriptionRu": "Премиальные итальянские конфеты с цельным лесным орехом, молочным шоколадом и нежной ореховой начинкой.",
    "descriptionEn": "A tempting combination of luscious creamy chocolaty filling surrounding a whole hazelnut within a delicate crisp wafer.",
    "priceUzs": 165000,
    "oldPriceUzs": 210000,
    "discountPercent": 21,
    "rating": 4.98,
    "reviewCount": 320,
    "soldCount": 1640,
    "stock": 80,
    "images": [
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Gold Wrapped",
        "hex": "#EAB308"
      }
    ],
    "sizes": [
      "300g (24 Pieces)"
    ],
    "specifications": {
      "Weight": "300g",
      "Origin": "Italy",
      "Packaging": "Clear Gift Box with Gold Bow"
    },
    "sellerOffers": [
      {
        "storeId": "store-samarkand-bazaar",
        "sellerName": "Samarkand Silk & Crafts House",
        "priceUzs": 165000,
        "deliveryEta": "90 mins Express",
        "rating": 4.97,
        "warranty": "100% Fresh & Authentic"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-samarkand-halva",
    "slug": "samarkand-traditional-fig-almond-halva-500g",
    "sku": "SVX-GRC-006",
    "categoryId": "cat-groceries",
    "categorySlug": "groceries",
    "subcategory": "Samarkand Dried Fruits & Nuts",
    "storeId": "store-samarkand-bazaar",
    "sellerName": "Samarkand Silk & Crafts House",
    "sellerRating": 4.97,
    "brand": "Samarkand Sweets",
    "nameUz": "Samarqand anjir va bodomli yumshoq asal holvasi 500g (Qoʻlda tayyorlangan)",
    "nameRu": "Самаркандская нежная инжирно-миндальная халва с медом 500г",
    "nameEn": "Traditional Samarkand Fig & Almond Soft Honey Halva 500g (Handcrafted)",
    "descriptionUz": "Tabiiy Samarqand anjiri, togʻ asalari va saralangan qovurilgan bodomdan tayyorlangan ogʻizda eriydigan milliy shirinlik.",
    "descriptionRu": "Знаменитая самаркандская халва ручной работы на натуральном меде со спелым инжиром и отборным миндалем.",
    "descriptionEn": "Authentic Silk Road delicacy handmade from organic dried figs, mountain honey, and roasted almonds.",
    "priceUzs": 85000,
    "oldPriceUzs": 110000,
    "discountPercent": 22,
    "rating": 4.99,
    "reviewCount": 240,
    "soldCount": 1200,
    "stock": 90,
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Natural Honey Gold",
        "hex": "#D97706"
      }
    ],
    "sizes": [
      "500g Wooden Box"
    ],
    "specifications": {
      "Weight": "500g",
      "Ingredients": "Dried Figs, Almonds, Mountain Honey, Ghee",
      "NoPreservatives": "Yes"
    },
    "sellerOffers": [
      {
        "storeId": "store-samarkand-bazaar",
        "sellerName": "Samarkand Silk & Crafts House",
        "priceUzs": 85000,
        "deliveryEta": "Same-Day Courier",
        "rating": 4.97,
        "warranty": "Fresh Bazaar Batch"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-barilla-pasta-set",
    "slug": "barilla-spaghetti-n5-500g-pesto-genovese-190g-bundle",
    "sku": "SVX-GRC-007",
    "categoryId": "cat-groceries",
    "categorySlug": "groceries",
    "subcategory": "Pantry Staples",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Barilla",
    "nameUz": "Italiya pastasi toʻplami: Barilla Spaghetti No. 5 (500g) + Pesto Genovese sousi (190g)",
    "nameRu": "Итальянский набор: Паста Barilla Спагетти No. 5 (500г) + соус Песто Дженовезе (190г)",
    "nameEn": "Italian Culinary Set: Barilla Spaghetti No. 5 (500g) + Pesto Genovese Basil Sauce (190g)",
    "descriptionUz": "Qattiq bugʻdoy navidan tayyorlangan asl italyancha spagetti va xushboʻy rayhonli Pesto sousi toʻplami.",
    "descriptionRu": "Идеальный ужин по-итальянски: классические спагетти из твердых сортов пшеницы и ароматный генуэзский соус песто.",
    "descriptionEn": "The quintessential Italian dinner combo: bronze-die cut durum wheat spaghetti paired with authentic basil pesto.",
    "priceUzs": 72000,
    "oldPriceUzs": 95000,
    "discountPercent": 24,
    "rating": 4.94,
    "reviewCount": 180,
    "soldCount": 950,
    "stock": 65,
    "images": [
      "https://images.unsplash.com/photo-1621996346565-e3d5d6281729?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Italian Pack",
        "hex": "#15803D"
      }
    ],
    "sizes": [
      "500g Pasta + 190g Sauce"
    ],
    "specifications": {
      "PastaWeight": "500g Durum Wheat Semolina",
      "SauceWeight": "190g Genovese Basil & Pine Nuts",
      "Country": "Italy"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 72000,
        "deliveryEta": "90 mins Express",
        "rating": 4.91,
        "warranty": "100% Original Italy"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-monini-olive-oil",
    "slug": "monini-extra-virgin-olive-oil-classico-1-litre",
    "sku": "SVX-GRC-008",
    "categoryId": "cat-groceries",
    "categorySlug": "groceries",
    "subcategory": "Pantry Staples",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Monini",
    "nameUz": "Zaytun moyi Monini Extra Virgin Classico 1 litr (Sovuq press, Italiya)",
    "nameRu": "Оливковое масло первого холодного отжима Monini Extra Virgin Classico 1л (Италия)",
    "nameEn": "Monini Classico Extra Virgin Cold Pressed Olive Oil 1 Litre (Italy)",
    "descriptionUz": "Birinchi sovuq presslash orqali olingan boy vitaminli toza zaytun moyi. Salatlar va pishiriqlar uchun ideal.",
    "descriptionRu": "Сбалансированный гармоничный вкус с легкой горчинкой свежих оливок. Идеально для заправки салатов.",
    "descriptionEn": "Balanced, harmonious full-flavoured extra virgin olive oil obtained directly from fresh olives.",
    "priceUzs": 165000,
    "oldPriceUzs": 210000,
    "discountPercent": 21,
    "rating": 4.96,
    "reviewCount": 210,
    "soldCount": 880,
    "stock": 55,
    "images": [
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Dark Green Glass",
        "hex": "#166534"
      }
    ],
    "sizes": [
      "1 Litre Dark Glass Bottle"
    ],
    "specifications": {
      "Volume": "1000 ml",
      "Acidity": "Max 0.4%",
      "ExtractionMethod": "First Cold Extraction",
      "Origin": "Italy"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 165000,
        "deliveryEta": "Same-Day Courier",
        "rating": 4.91,
        "warranty": "Direct Italian Import"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-lavazza-qualita-oro",
    "slug": "lavazza-qualita-oro-100-arabica-coffee-beans-1kg",
    "sku": "SVX-GRC-009",
    "categoryId": "cat-groceries",
    "categorySlug": "groceries",
    "subcategory": "Beverages & Tea",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Lavazza",
    "nameUz": "Donli tabiiy kofe Lavazza Qualità Oro 100% Arabica 1 kg (Italiya Original)",
    "nameRu": "Кофе в зернах Lavazza Qualità Oro 100% Арабика 1 кг (Оригинал Италия)",
    "nameEn": "Lavazza Qualità Oro 100% Premium Arabica Whole Bean Coffee 1kg",
    "descriptionUz": "Markaziy Amerika va Braziliya plantatsiyalarining oltin aralashmasi: gulli va mevali nafis taʼm, oltin koʻpik.",
    "descriptionRu": "Золотой стандарт итальянского эспрессо: 100% высокогорная арабика с цветочно-фруктовыми нотками.",
    "descriptionEn": "A unique blend of 6 varieties of Arabica beans from finest plantations of Central and South America.",
    "priceUzs": 295000,
    "oldPriceUzs": 380000,
    "discountPercent": 22,
    "rating": 4.98,
    "reviewCount": 340,
    "soldCount": 1480,
    "stock": 45,
    "images": [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Golden Foil Bag",
        "hex": "#CA8A04"
      }
    ],
    "sizes": [
      "1 kg Whole Beans"
    ],
    "specifications": {
      "Roast": "Medium (Intensity 5/10)",
      "Composition": "100% Arabica",
      "Origin": "Torino, Italy"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 295000,
        "deliveryEta": "90 mins Express",
        "rating": 4.94,
        "warranty": "Fresh Roasted Guarantee"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-ahmad-royal-breakfast",
    "slug": "ahmad-tea-royal-english-breakfast-tin-caddy-200g",
    "sku": "SVX-GRC-010",
    "categoryId": "cat-groceries",
    "categorySlug": "groceries",
    "subcategory": "Beverages & Tea",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Ahmad Tea",
    "nameUz": "Elit qora choy Ahmad Tea Royal English Breakfast 200g (Litsenziyali sovgʻabop tunuka quti)",
    "nameRu": "Листовой черный чай Ahmad Tea Royal English Breakfast 200г в жестяной банке",
    "nameEn": "Ahmad Tea Royal English Breakfast Loose Leaf Black Tea 200g in Embossed Metal Tin Caddy",
    "descriptionUz": "Assam, Seylon va Keniya choylarining tetiklashtiruvchi toʻq tillarang damlamasi. Sut va limon bilan ajoyib.",
    "descriptionRu": "Богатый, терпкий и бодрящий купаж отборного цейлонского и ассамского чая в винтажной жестяной банке.",
    "descriptionEn": "A full-bodied, robust English blend combining maltiness of Assam with brightness of Ceylon.",
    "priceUzs": 88000,
    "oldPriceUzs": 115000,
    "discountPercent": 23,
    "rating": 4.93,
    "reviewCount": 195,
    "soldCount": 920,
    "stock": 70,
    "images": [
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Royal Crimson Gold",
        "hex": "#991B1B"
      }
    ],
    "sizes": [
      "200g Embossed Metal Tin"
    ],
    "specifications": {
      "Type": "Loose Leaf Black Tea",
      "Blend": "Assam, Ceylon & Kenyan Pekoe",
      "Origin": "United Kingdom Pack"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 88000,
        "deliveryEta": "Same-Day Courier",
        "rating": 4.91,
        "warranty": "100% Genuine"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-samarkand-raisin-almond",
    "slug": "samarkand-sun-dried-golden-raisins-shelled-almonds-1kg",
    "sku": "SVX-GRC-011",
    "categoryId": "cat-groceries",
    "categorySlug": "groceries",
    "subcategory": "Samarkand Dried Fruits & Nuts",
    "storeId": "store-samarkand-bazaar",
    "sellerName": "Samarkand Silk & Crafts House",
    "sellerRating": 4.97,
    "brand": "Samarkand Bazaar",
    "nameUz": "Samarqand quyoshda quritilgan yirik oq mayizi va tozalangan bodomi 1 kg (Eko toʻplam)",
    "nameRu": "Самаркандский отборный золотистый изюм и очищенный горный миндаль 1 кг",
    "nameEn": "Samarkand Sun-Dried Jumbo Golden Sultana Raisins & Raw Shelled Almonds 1kg",
    "descriptionUz": "Kimyoviy ishlovsiz tabiiy oftobda quritilgan shirin Oʻzbekiston mayizi va yangi mavsum shirin bodomi.",
    "descriptionRu": "100% натуральный горный миндаль и сочный янтарный изюм без консервантов и серы. Полезный перекус.",
    "descriptionEn": "Direct from Samarkand orchards: naturally dehydrated sweet raisins and raw vitamin-rich almonds.",
    "priceUzs": 135000,
    "oldPriceUzs": 175000,
    "discountPercent": 23,
    "rating": 4.99,
    "reviewCount": 380,
    "soldCount": 1950,
    "stock": 110,
    "images": [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Kraft Bag",
        "hex": "#78350F"
      }
    ],
    "sizes": [
      "1 kg (500g + 500g)"
    ],
    "specifications": {
      "Raisins": "Soyaki Jumbo Golden",
      "Almonds": "Sweet Mountain Thin-Shell",
      "ChemicalFree": "Yes"
    },
    "sellerOffers": [
      {
        "storeId": "store-samarkand-bazaar",
        "sellerName": "Samarkand Silk & Crafts House",
        "priceUzs": 135000,
        "deliveryEta": "90 mins Express",
        "rating": 4.97,
        "warranty": "Fresh Harvest"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-alsafi-mountain-honey",
    "slug": "al-safi-zaamin-pure-mountain-honey-with-comb-1kg",
    "sku": "SVX-GRC-012",
    "categoryId": "cat-groceries",
    "categorySlug": "groceries",
    "subcategory": "Fresh Produce",
    "storeId": "store-samarkand-bazaar",
    "sellerName": "Samarkand Silk & Crafts House",
    "sellerRating": 4.97,
    "brand": "Al-Safi",
    "nameUz": "Zomin togʻ toza tabiiy asalari va asal mumi toʻplami Al-Safi 1 kg (Shisha bankada)",
    "nameRu": "Зааминский горный натуральный мед с кусочком соты Al-Safi 1 кг (Стеклянная банка)",
    "nameEn": "Zaamin Mountains Raw Floral Honey with Natural Honeycomb Slice 1kg",
    "descriptionUz": "Zomin qoʻriqxonasining shifobaxsh togʻ giyohlaridan yigʻilgan qalin, xushboʻy va 100% toza asal.",
    "descriptionRu": "Экологически чистый полифлорный горный мед с предгорий Заамина. Насыщен ферментами и минералами.",
    "descriptionEn": "Pure raw mountain honey harvested from pristine alpine meadows, packaged with an authentic honeycomb chunk.",
    "priceUzs": 145000,
    "oldPriceUzs": 190000,
    "discountPercent": 24,
    "rating": 4.98,
    "reviewCount": 260,
    "soldCount": 1350,
    "stock": 75,
    "images": [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Amber Gold Glass",
        "hex": "#F59E0B"
      }
    ],
    "sizes": [
      "1000g Glass Jar"
    ],
    "specifications": {
      "HarvestRegion": "Zaamin National Park (2200m)",
      "Purity": "100% Unpasteurized Raw",
      "Moisture": "Under 18%"
    },
    "sellerOffers": [
      {
        "storeId": "store-samarkand-bazaar",
        "sellerName": "Samarkand Silk & Crafts House",
        "priceUzs": 145000,
        "deliveryEta": "Same-Day Courier",
        "rating": 4.97,
        "warranty": "Laboratory Lab Tested"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-furn-ikea-strandmon",
    "slug": "ikea-strandmon-velvet-wing-chair-mustard-yellow",
    "sku": "SVX-FRN-004",
    "categoryId": "cat-home-furniture",
    "categorySlug": "home-furniture",
    "subcategory": "Living Room Furniture",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "IKEA",
    "nameUz": "IKEA Strandmon quloqli qulay velyur kreslo (Sariq xantallik, Shvetsiya)",
    "nameRu": "Кресло с \"ушами\" IKEA Strandmon велюровое (Горчично-желтый, Швеция)",
    "nameEn": "IKEA Strandmon Wing Chair Velvet (Mustard Yellow, Scandinavian Design)",
    "descriptionUz": "Klassik shved dizaynidagi baland suyanchiq va qulay quloqli kreslo. Qalin va yumshoq baxmal qoplama, qattiq qora yogʻoch oyoqlar.",
    "descriptionRu": "Культовое шведское кресло с высокой спинкой и мягкими \"ушами\". Бархатистая износостойкая ткань и массив бука.",
    "descriptionEn": "An iconic Scandinavian wing chair featuring high backrest, enveloping sides, and deep foam seat cushion.",
    "priceUzs": 2450000,
    "oldPriceUzs": 2990000,
    "discountPercent": 18,
    "rating": 4.96,
    "reviewCount": 145,
    "soldCount": 520,
    "stock": 18,
    "images": [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Mustard Yellow",
        "hex": "#EAB308"
      },
      {
        "name": "Dark Green",
        "hex": "#166534"
      }
    ],
    "sizes": [
      "82 x 96 x 101 cm"
    ],
    "specifications": {
      "Material": "Velvet Fabric & Solid Beech",
      "MaxWeight": "130 kg",
      "Origin": "Sweden"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 2450000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "2 Years Manufacturer Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-furn-loft-bookshelf",
    "slug": "loft-industrial-oak-metal-5-tier-bookshelf",
    "sku": "SVX-FRN-005",
    "categoryId": "cat-home-furniture",
    "categorySlug": "home-furniture",
    "subcategory": "Office Furniture",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "LoftCraft",
    "nameUz": "Loft uslubidagi 5 qavatli metall va tabiiy eman yogʻoch kitob javoni",
    "nameRu": "Стеллаж книжный 5-ярусный в стиле Лофт из металла и массива дуба",
    "nameEn": "Industrial Loft 5-Tier Bookshelf with Black Metal Frame and Natural Oak",
    "descriptionUz": "Mustahkam qora kukunli poʻlat karkas va tabiiy eman laminatsiyasi. Kitoblar, gullar va dekorlar uchun ideal.",
    "descriptionRu": "Стильный открытый стеллаж с прочным металлическим каркасом и полками под массив натурального дуба.",
    "descriptionEn": "Sturdy 5-tier industrial shelving unit combining matte black powder-coated steel with textured oak shelves.",
    "priceUzs": 1190000,
    "oldPriceUzs": 1450000,
    "discountPercent": 18,
    "rating": 4.92,
    "reviewCount": 98,
    "soldCount": 380,
    "stock": 24,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Rustic Oak / Black Metal",
        "hex": "#78350F"
      }
    ],
    "sizes": [
      "180 x 80 x 30 cm"
    ],
    "specifications": {
      "ShelfLoad": "25 kg per shelf",
      "Frame": "Carbon Steel 20x20mm",
      "Tiers": "5 Levels"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 1190000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "1 Year Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-furn-ortho-mattress",
    "slug": "askona-ortho-sleep-160x200-pocket-spring-mattress",
    "sku": "SVX-FRN-006",
    "categoryId": "cat-home-furniture",
    "categorySlug": "home-furniture",
    "subcategory": "Bedroom Furniture",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Askona",
    "nameUz": "Ortopedik matras Askona Ortho Sleep 160x200 sm (Mustaqil prujinalar, Kokos tolali)",
    "nameRu": "Ортопедический матрас Askona Ortho Sleep 160x200 см (Независимые пружины, Кокос)",
    "nameEn": "Askona Ortho Sleep 160x200cm Pocket Spring Orthopedic Mattress with Coconut Coir",
    "descriptionUz": "Umurtqa pogʻonasini toʻgʻri ushlab turuvchi 7 zonali mustaqil prujinalar bloki va tabiiy kokos qatlami bilan sokin uyqu.",
    "descriptionRu": "Премиальный 7-зональный анатомический блок независимых пружин с натуральной кокосовой койрой.",
    "descriptionEn": "Advanced 7-zone pocket spring mattress offering medium-firm orthopedic support with hypoallergenic quilted cover.",
    "priceUzs": 3600000,
    "oldPriceUzs": 4300000,
    "discountPercent": 16,
    "rating": 4.98,
    "reviewCount": 210,
    "soldCount": 640,
    "stock": 12,
    "images": [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Ivory White Quilted",
        "hex": "#F8FAFC"
      }
    ],
    "sizes": [
      "160 x 200 x 24 cm"
    ],
    "specifications": {
      "Firmness": "Medium-Firm (4/5)",
      "SpringCount": "1000 per bed",
      "MaxLoad": "140 kg/side"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 3600000,
        "deliveryEta": "Express Freight Delivery",
        "rating": 4.91,
        "warranty": "10 Years Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-furn-marble-coffee-table",
    "slug": "luxury-round-calacatta-marble-coffee-table-gold",
    "sku": "SVX-FRN-007",
    "categoryId": "cat-home-furniture",
    "categorySlug": "home-furniture",
    "subcategory": "Living Room Furniture",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Noble Casa",
    "nameUz": "Oltin oyoqli tabiiy Calacatta marmar kofe va jurnal stoli (80 sm diametr)",
    "nameRu": "Журнальный стол из натурального мрамора Calacatta с золотым подстольем (80 см)",
    "nameEn": "Luxury Round Calacatta Natural Marble Coffee Table with Brushed Brass Gold Base (80cm)",
    "descriptionUz": "Tabiiy oq marmar tosh yuzasi va zanglamaydigan sargʻish jez qoplamali oyoqlar. Har qanday mehmonxonaga boy koʻrk bagʻishlaydi.",
    "descriptionRu": "Столешница из итальянского натурального мрамора Calacatta с защитной полировкой и латунным каркасом.",
    "descriptionEn": "Genuine Calacatta white marble top with unique grey veining paired with a brushed electroplated gold steel base.",
    "priceUzs": 1850000,
    "oldPriceUzs": 2300000,
    "discountPercent": 20,
    "rating": 4.94,
    "reviewCount": 76,
    "soldCount": 290,
    "stock": 15,
    "images": [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "White Marble / Gold",
        "hex": "#F1F5F9"
      }
    ],
    "sizes": [
      "Diameter 80cm x Height 45cm"
    ],
    "specifications": {
      "TopMaterial": "Natural Polished Marble 20mm",
      "Base": "Electroplated Stainless Steel",
      "Weight": "28 kg"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 1850000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "1 Year Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-furn-nordic-floor-lamp",
    "slug": "nordic-minimalist-dimmable-led-floor-lamp-black",
    "sku": "SVX-FRN-008",
    "categoryId": "cat-home-furniture",
    "categorySlug": "home-furniture",
    "subcategory": "Living Room Furniture",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "NordicLight",
    "nameUz": "Skandinavcha minimalistik torcher LED chiroq (Pultli, yorugʻlik regulyatori bilan)",
    "nameRu": "Скандинавский напольный LED торшер с пультом и плавной регулировкой яркости",
    "nameEn": "Nordic Minimalist Corner Dimmable LED Floor Lamp with Remote Control",
    "descriptionUz": "Xona burchagiga sigʻuvchi nozik va nafis chiziqli torcher. 3 xil rang harorati (issiq, tabiiy, sovuq) va tungi rejim.",
    "descriptionRu": "Элегантный угловой торшер с рассеянным светом, 3 режимами цветовой температуры и управлением с пульта.",
    "descriptionEn": "Sleek corner standing LED lamp featuring step-less dimming, 3000K-6500K color range, and magnetic wireless remote.",
    "priceUzs": 420000,
    "oldPriceUzs": 560000,
    "discountPercent": 25,
    "rating": 4.89,
    "reviewCount": 160,
    "soldCount": 710,
    "stock": 35,
    "images": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#18181B"
      },
      {
        "name": "Brushed Silver",
        "hex": "#E4E4E7"
      }
    ],
    "sizes": [
      "Height 140cm x Base 20cm"
    ],
    "specifications": {
      "Power": "24W High-CRI LED",
      "Lumen": "2200 lm",
      "Control": "Touch & 2.4G RF Remote"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 420000,
        "deliveryEta": "90 mins Express",
        "rating": 4.91,
        "warranty": "1 Year Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-furn-egypt-bedding-set",
    "slug": "egyptian-cotton-600tc-luxury-king-bedding-set-sage",
    "sku": "SVX-FRN-009",
    "categoryId": "cat-home-furniture",
    "categorySlug": "home-furniture",
    "subcategory": "Bedroom Furniture",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Satin Royale",
    "nameUz": "100% Misr paxtasidan premium 2 kishilik yotoq toʻplami 600TC (Evro oʻlcham, Zaytun rangi)",
    "nameRu": "Комплект постельного белья из 100% египетского хлопка сатин 600TC (Евро, Оливковый)",
    "nameEn": "100% Long-Staple Egyptian Cotton 600TC Luxury King Sateen Bedding Set (Sage Green)",
    "descriptionUz": "Ipakdek mayin va nafas oluvchi uzun tolali Misr paxtasi. Yuvishdan keyin rangini yoʻqotmaydi, mato gʻijimlanmaydi.",
    "descriptionRu": "Атласный блеск и шелковистая мягкость элитного длинноволокнистого египетского хлопка плотностью 600 нитей.",
    "descriptionEn": "Breathable, ultra-soft long-staple cotton woven in a lustrous sateen finish for hotel-grade luxury sleep.",
    "priceUzs": 780000,
    "oldPriceUzs": 990000,
    "discountPercent": 21,
    "rating": 4.97,
    "reviewCount": 185,
    "soldCount": 840,
    "stock": 40,
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#84A98C"
      },
      {
        "name": "Snow White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "Duvet 200x220cm, Sheet 240x260cm, 2x Pillowcases 50x70cm"
    ],
    "specifications": {
      "ThreadCount": "600 TC Sateen",
      "Fabric": "100% Giza Egyptian Cotton",
      "Zipper": "Concealed YKK"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 780000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "Certified OEKO-TEX Standard 100"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-furn-velvet-curtains",
    "slug": "luxury-heavy-velvet-blackout-window-curtains-2pcs",
    "sku": "SVX-FRN-010",
    "categoryId": "cat-home-furniture",
    "categorySlug": "home-furniture",
    "subcategory": "Living Room Furniture",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Tashkent Textile",
    "nameUz": "Yorugʻlik va ovoz oʻtkazmaydigan ogʻir baxmal parda toʻplami (2 dona 150x270 sm, Zumrad rang)",
    "nameRu": "Плотные бархатные шторы блэкаут с шумоизоляцией (2 шт 150x270 см, Изумрудный)",
    "nameEn": "Heavy Velvet Blackout Thermal & Noise Insulating Window Curtains (Set of 2, Emerald Green)",
    "descriptionUz": "Xonani 95% qorongʻi qiluvchi qalin sifatli baxmal mato. Sovuq va issiqlikni ushlaydi, koʻchadan kelayotgan shovqinni pasaytiradi.",
    "descriptionRu": "Элегантные портьеры из плотного микробархата плотностью 320 г/м². Защищают от яркого солнца и уличного шума.",
    "descriptionEn": "Thick velvety blackout drapes engineered to block 95% of incoming light while boosting room insulation.",
    "priceUzs": 540000,
    "oldPriceUzs": 690000,
    "discountPercent": 22,
    "rating": 4.93,
    "reviewCount": 130,
    "soldCount": 560,
    "stock": 28,
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Emerald Green",
        "hex": "#064E3B"
      },
      {
        "name": "Royal Navy",
        "hex": "#1E3A8A"
      }
    ],
    "sizes": [
      "2 panels x (150 x 270 cm)"
    ],
    "specifications": {
      "ShadingRate": "95% Full Blackout",
      "Density": "320 g/m²",
      "Header": "Multi-functional Tape & Hooks"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 540000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "1 Year Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-furn-dining-table-set",
    "slug": "scandinavian-solid-oak-dining-table-with-6-chairs",
    "sku": "SVX-FRN-011",
    "categoryId": "cat-home-furniture",
    "categorySlug": "home-furniture",
    "subcategory": "Kitchen & Dining Furniture",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "LoftCraft",
    "nameUz": "6 kishilik tabiiy eman oshxona stoli va yumshoq ergonomik stullar toʻplami",
    "nameRu": "Обеденная группа из массива дуба стол 160 см и 6 мягких стульев",
    "nameEn": "Scandinavian Solid Oak Dining Table (160cm) with 6 Fabric Upholstered Chairs",
    "descriptionUz": "Tabiiy mustahkam yogʻochdan ishlangan keng stol va orqa qismi qulay yumshoq matoli 6 dona stul. Qaynoq oilaviy dasturxonlar uchun.",
    "descriptionRu": "Надежный обеденный стол из отборного кавказского дуба в комплекте с шестью эргономичными мягкими стульями.",
    "descriptionEn": "Hand-finished solid oak dining ensemble featuring a 160cm rectangular table and six foam-padded dining chairs.",
    "priceUzs": 4800000,
    "oldPriceUzs": 5900000,
    "discountPercent": 19,
    "rating": 4.98,
    "reviewCount": 92,
    "soldCount": 310,
    "stock": 8,
    "images": [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Natural Oak / Light Grey",
        "hex": "#D1D5DB"
      }
    ],
    "sizes": [
      "Table: 160 x 85 x 75 cm, 6x Chairs"
    ],
    "specifications": {
      "Wood": "100% Solid Oak",
      "Finish": "Matte Protective Hardwax Oil",
      "ChairCapacity": "150 kg"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 4800000,
        "deliveryEta": "Express Freight Delivery",
        "rating": 4.91,
        "warranty": "5 Years Wood Structure Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-furn-hallway-wardrobe",
    "slug": "modern-hallway-coat-hanger-and-shoe-bench-mirror",
    "sku": "SVX-FRN-012",
    "categoryId": "cat-home-furniture",
    "categorySlug": "home-furniture",
    "subcategory": "Hallway Furniture",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Modern Hall",
    "nameUz": "Katta oynali, kiyim ilgich va poyabzal sandigʻi boʻlgan zamonaviy dahliz garnituri",
    "nameRu": "Прихожая с ростовым зеркалом, вешалкой и мягкой банкеткой для обуви",
    "nameEn": "Modern Hallway Coat Rack, Shoe Storage Bench, and Full-Length Mirror Unit",
    "descriptionUz": "Ixcham joy egallovchi toʻliq dahliz yechimi: 8 ta kiyim kancasi, oʻtirib oyoq kiyim kiyish uchun yumshoq oʻrindiq va keng oyna.",
    "descriptionRu": "Компактная модульная прихожая с мягким сиденьем, вместительной обувницей и высоким зеркалом.",
    "descriptionEn": "All-in-one entryway organizer uniting a full-length mirror, cushioned shoe bench, and coat hooks.",
    "priceUzs": 1650000,
    "oldPriceUzs": 2100000,
    "discountPercent": 21,
    "rating": 4.91,
    "reviewCount": 110,
    "soldCount": 420,
    "stock": 16,
    "images": [
      "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "White Ash / Oak",
        "hex": "#E5E7EB"
      }
    ],
    "sizes": [
      "195 x 100 x 38 cm"
    ],
    "specifications": {
      "Body": "E1 Eco Laminated MDF",
      "Cushion": "Waterproof Eco-Leather",
      "Mirror": "High-clarity Safety Film"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 1650000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "2 Years Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-kit-bosch-kettle",
    "slug": "bosch-serie-6-temperature-control-kettle-1-7l-black",
    "sku": "SVX-KIT-005",
    "categoryId": "cat-kitchen",
    "categorySlug": "kitchen",
    "subcategory": "Kitchen Appliances",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Bosch",
    "nameUz": "Elektr choynak Bosch Serie 6 TemperatureControl 1.7L (70°-100°C, KeepWarm)",
    "nameRu": "Электрочайник Bosch Serie 6 с выбором температуры 1.7 л (KeepWarm)",
    "nameEn": "Bosch Serie 6 Variable Temperature Control Electric Kettle 1.7L (KeepWarm 30min)",
    "descriptionUz": "Choy turlari (koʻk, qora, oq) va bolalar ovqati uchun 70°C dan 100°C gacha 4 xil harorat tanlash imkoniyati va issiq saqlash funksiyasi.",
    "descriptionRu": "Чайник с выбором оптимальной температуры для разных сортов чая и функцией поддержания тепла KeepWarm.",
    "descriptionEn": "Precision temperature kettle with four heat settings (70°C to 100°C) and 30-minute KeepWarm function.",
    "priceUzs": 890000,
    "oldPriceUzs": 1120000,
    "discountPercent": 21,
    "rating": 4.96,
    "reviewCount": 310,
    "soldCount": 1280,
    "stock": 35,
    "images": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Black Stainless Steel",
        "hex": "#18181B"
      }
    ],
    "sizes": [
      "1.7 Litres (2400W)"
    ],
    "specifications": {
      "Power": "2400W Fast Boil",
      "Temperatures": "70°C, 80°C, 90°C, 100°C",
      "Filter": "Removable Stainless Mesh"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 890000,
        "deliveryEta": "90 mins Express",
        "rating": 4.94,
        "warranty": "2 Years Bosch Official Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-kit-tefal-ingenio-set",
    "slug": "tefal-ingenio-emotion-10-piece-induction-cookware-set",
    "sku": "SVX-KIT-006",
    "categoryId": "cat-kitchen",
    "categorySlug": "kitchen",
    "subcategory": "Cookware & Tableware",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Tefal",
    "nameUz": "Tefal Ingenio Emotion 10 qismli olinadigan tutqichli tosh idishlar toʻplami",
    "nameRu": "Набор посуды Tefal Ingenio Emotion 10 предметов со съемной ручкой",
    "nameEn": "Tefal Ingenio Emotion 10-Piece Induction Stainless Steel Cookware Set with Detachable Handle",
    "descriptionUz": "Bitta klik bilan yechiladigan xavfsiz tutqich. Plitadan duxovkaga va muzlatgichga toʻgʻridan-toʻgʻri qoʻyish mumkin, javonda 50% joy tejaydi.",
    "descriptionRu": "Премиальная нержавеющая сталь 18/10, надежная съемная ручка с фиксацией до 10 кг и антипригарное покрытие Titanium.",
    "descriptionEn": "Stackable 10-piece cookware featuring 3-point safety detachable handle, Titanium anti-scratch coating, and induction base.",
    "priceUzs": 2150000,
    "oldPriceUzs": 2650000,
    "discountPercent": 19,
    "rating": 4.98,
    "reviewCount": 220,
    "soldCount": 790,
    "stock": 22,
    "images": [
      "https://images.unsplash.com/photo-1584990347449-389f41b2e5a7?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Polished Steel / Black",
        "hex": "#64748B"
      }
    ],
    "sizes": [
      "10-Piece Set (22/26cm Frypans, 16/20cm Saucepans, Lids + Handle)"
    ],
    "specifications": {
      "Compatibility": "Gas, Induction, Electric, Oven",
      "Material": "18/10 Stainless Steel",
      "Warranty": "10-Year Handle"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 2150000,
        "deliveryEta": "90 mins Express",
        "rating": 4.94,
        "warranty": "2 Years Tefal Official"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-kit-ninja-blender",
    "slug": "ninja-professional-1200w-blender-and-smoothie-maker",
    "sku": "SVX-KIT-007",
    "categoryId": "cat-kitchen",
    "categorySlug": "kitchen",
    "subcategory": "Kitchen Appliances",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Ninja",
    "nameUz": "Kuchli statsionar blender Ninja Professional Plus 1200W (Muz maydalagich, 2.1L idish)",
    "nameRu": "Профессиональный стационарный блендер Ninja Professional Plus 1200 Вт (Чаша 2.1 л)",
    "nameEn": "Ninja Professional Plus 1200W High-Powered Blender with Auto-iQ and Total Crushing Pitcher",
    "descriptionUz": "1200W dvigatel va 6 tigʻli Total Crushing texnologiyasi bilan muzni bir necha soniyada qorga aylantiradi. Smuzi va shoʻrvalar uchun ideal.",
    "descriptionRu": "Мощный мотор 1200 Вт легко колет лед, измельчает орехи и готовит кремовые смузи за считанные секунды.",
    "descriptionEn": "Heavy-duty 1200-watt powerhouse engineered with stacked stainless blades to crush ice to snow in seconds.",
    "priceUzs": 1480000,
    "oldPriceUzs": 1850000,
    "discountPercent": 20,
    "rating": 4.95,
    "reviewCount": 190,
    "soldCount": 880,
    "stock": 25,
    "images": [
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Gunmetal Silver / Black",
        "hex": "#334155"
      }
    ],
    "sizes": [
      "2.1L BPA-Free Pitcher"
    ],
    "specifications": {
      "Power": "1200W Peak",
      "Programs": "Smoothie, Ice Crush, Extract, Manual 3 Speeds",
      "Blades": "6-Blade Stainless"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 1480000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.94,
        "warranty": "1 Year Full Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-kit-kitchenaid-artisan",
    "slug": "kitchenaid-artisan-4-8l-tilt-head-stand-mixer-empire-red",
    "sku": "SVX-KIT-008",
    "categoryId": "cat-kitchen",
    "categorySlug": "kitchen",
    "subcategory": "Kitchen Appliances",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "KitchenAid",
    "nameUz": "Sayyoraviy oshxona mikseri KitchenAid Artisan 4.8L (Empire Red, AQSH)",
    "nameRu": "Планетарный миксер KitchenAid Artisan 4.8 л (Empire Red, США)",
    "nameEn": "KitchenAid Artisan 4.8L Tilt-Head Stand Mixer (Empire Red, Die-Cast Metal)",
    "descriptionUz": "Afsonaviy metall korpusli Amerika sayyoraviy mikseri. Xamir qorish, krem koʻpirtirish va qandolat pishiriqlari uchun eng yuqori standart.",
    "descriptionRu": "Культовый планетарный миксер из литого металла с чашей 4.8 л. Непревзойденная надежность и совершенное взбивание.",
    "descriptionEn": "The benchmark of professional baking: 10 speeds, planetary mixing action, 4.8L stainless bowl with handle, and 3 accessories.",
    "priceUzs": 6900000,
    "oldPriceUzs": 7800000,
    "discountPercent": 12,
    "rating": 4.99,
    "reviewCount": 380,
    "soldCount": 910,
    "stock": 10,
    "images": [
      "https://images.unsplash.com/photo-1594385208974-2fed0391d4a0?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Empire Red",
        "hex": "#B91C1C"
      },
      {
        "name": "Onyx Black",
        "hex": "#111827"
      }
    ],
    "sizes": [
      "4.8L Bowl Capacity"
    ],
    "specifications": {
      "Motor": "Direct Drive 300W",
      "Speeds": "10 Levels",
      "Body": "Solid Zinc Die-Cast"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 6900000,
        "deliveryEta": "90 mins Express",
        "rating": 4.94,
        "warranty": "5 Years KitchenAid Official"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-kit-wmf-chef-knife",
    "slug": "wmf-grand-gourmet-20cm-german-steel-chef-knife",
    "sku": "SVX-KIT-009",
    "categoryId": "cat-kitchen",
    "categorySlug": "kitchen",
    "subcategory": "Kitchen Knives & Cutlery",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "WMF",
    "nameUz": "WMF Grand Gourmet 20 sm professional nemis poʻlat oshpaz pichogʻi (Germaniya)",
    "nameRu": "Шеф-нож WMF Grand Gourmet 20 см из кованой немецкой стали Cromargan",
    "nameEn": "WMF Grand Gourmet 20cm Forged German Special Blade Steel Chef Knife (Made in Germany)",
    "descriptionUz": "Butun bir boʻlak Cromargan 18/10 maxsus poʻlatdan quyilgan. Lazerli charxlash texnologiyasi pichoqni uzoq yillar oʻtkir saqlaydi.",
    "descriptionRu": "Кованый клинок ручной работы из специальной ножевой стали с лазерной заточкой Performance Cut.",
    "descriptionEn": "Engineered in Germany: forged from high-grade Cromargan steel with seamless hygienic handle and laser-measured sharpness.",
    "priceUzs": 950000,
    "oldPriceUzs": 1200000,
    "discountPercent": 21,
    "rating": 4.97,
    "reviewCount": 165,
    "soldCount": 640,
    "stock": 28,
    "images": [
      "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Silver Steel",
        "hex": "#CBD5E1"
      }
    ],
    "sizes": [
      "20cm Blade (Total 33cm)"
    ],
    "specifications": {
      "Steel": "Forged Cromargan 18/10 Stainless",
      "RockwellHardness": "57 HRC",
      "Origin": "Hayingen, Germany"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 950000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "Lifetime Sharpness Guarantee"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-kit-xiaomi-induction",
    "slug": "xiaomi-mijia-ultra-thin-smart-induction-cooker-2100w",
    "sku": "SVX-KIT-010",
    "categoryId": "cat-kitchen",
    "categorySlug": "kitchen",
    "subcategory": "Kitchen Appliances",
    "storeId": "store-malika-mobile",
    "sellerName": "Malika Smart Hub",
    "sellerRating": 4.88,
    "brand": "Xiaomi",
    "nameUz": "Smart yupqa induksion plita Xiaomi Mijia 2100W (99 xil harorat, OLED displey)",
    "nameRu": "Ультратонкая умная индукционная плита Xiaomi Mijia 2100W (OLED дисплей)",
    "nameEn": "Xiaomi Mijia Ultra-Thin Smart Induction Cooker 2100W with 99 Heat Levels & OLED Knob",
    "descriptionUz": "Atigi 23 mm qalinlikdagi ultra-yupqa qora shisha keramika, 99 darajali nozik harorat boshqaruvi va telefon orqali boshqaruv.",
    "descriptionRu": "Сверхкомпактная индукционная плита толщиной 23 мм с поворотным OLED-экраном и 99 уровнями нагрева.",
    "descriptionEn": "Futuristic slim induction cooktop packing 2100W power into a 23mm frame with fine heat control from low simmer to high sear.",
    "priceUzs": 620000,
    "oldPriceUzs": 790000,
    "discountPercent": 22,
    "rating": 4.93,
    "reviewCount": 240,
    "soldCount": 1150,
    "stock": 35,
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#09090B"
      }
    ],
    "sizes": [
      "35 x 28 x 2.3 cm"
    ],
    "specifications": {
      "Power": "2100W",
      "Display": "OLED Rotary Knob",
      "Connectivity": "Wi-Fi / Mi Home App"
    },
    "sellerOffers": [
      {
        "storeId": "store-malika-mobile",
        "sellerName": "Malika Smart Hub",
        "priceUzs": 620000,
        "deliveryEta": "90 mins Express",
        "rating": 4.88,
        "warranty": "1 Year Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-kit-tefal-optigrill",
    "slug": "tefal-optigrill-elite-xl-smart-contact-grill-2200w",
    "sku": "SVX-KIT-011",
    "categoryId": "cat-kitchen",
    "categorySlug": "kitchen",
    "subcategory": "Kitchen Appliances",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Tefal",
    "nameUz": "Aqlli kontaktli elektr gril Tefal OptiGrill Elite XL 2200W (16 ta dastur, Goʻsht sensori)",
    "nameRu": "Умный электрогриль Tefal OptiGrill Elite XL 2200 Вт (16 автопрограмм, Сенсор толщины)",
    "nameEn": "Tefal OptiGrill Elite XL 2200W Smart Electric Grill with Automatic Thickness Sensor",
    "descriptionUz": "Goʻsht qalinligini oʻzi oʻlchab, pishish darajasini (Rare, Medium, Well-Done) avtomatik aniqlovchi aqlli katta oilaviy gril.",
    "descriptionRu": "Интеллектуальный гриль XL с цифровым экраном и цветным помощником прожарки мяса от стейка с кровью до полной прожарки.",
    "descriptionEn": "Equipped with patented sensors measuring meat thickness and automatically adapting cooking cycles across 16 presets.",
    "priceUzs": 3200000,
    "oldPriceUzs": 3900000,
    "discountPercent": 18,
    "rating": 4.97,
    "reviewCount": 280,
    "soldCount": 920,
    "stock": 18,
    "images": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Brushed Inox Stainless Steel",
        "hex": "#64748B"
      }
    ],
    "sizes": [
      "XL 800 cm² (Serves 6-8 People)"
    ],
    "specifications": {
      "Power": "2200W",
      "Programs": "16 Automatic Cooking Modes",
      "Plates": "Dishwasher Safe Die-Cast Aluminum"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 3200000,
        "deliveryEta": "90 mins Express",
        "rating": 4.94,
        "warranty": "2 Years Tefal Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-kit-villeroy-dinnerware",
    "slug": "villeroy-and-boch-fine-porcelain-18-piece-dinner-set",
    "sku": "SVX-KIT-012",
    "categoryId": "cat-kitchen",
    "categorySlug": "kitchen",
    "subcategory": "Cookware & Tableware",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Villeroy & Boch",
    "nameUz": "Villeroy & Boch nemis nozik chinni 18 qismli dasturxon likopchalar toʻplami",
    "nameRu": "Обеденный сервиз из фарфора премиум-класса Villeroy & Boch 18 предметов",
    "nameEn": "Villeroy & Boch Royal Premium White Porcelain 18-Piece Dining Plate Set",
    "descriptionUz": "Germaniyaning 275 yillik chinni ishlab chiqarish anʼanasi. Nafis oq sirlangan premium chinni, mikrotoʻlqinli pech va idish yuvish mashinasiga mos.",
    "descriptionRu": "Элитный немецкий фарфор Royal от Villeroy & Boch: кристально белая глазурь, изящные классические формы.",
    "descriptionEn": "Pure timeless elegance: 18-piece premium porcelain dining ensemble for 6 people, made in Germany.",
    "priceUzs": 2750000,
    "oldPriceUzs": 3400000,
    "discountPercent": 19,
    "rating": 4.99,
    "reviewCount": 140,
    "soldCount": 460,
    "stock": 14,
    "images": [
      "https://images.unsplash.com/photo-1614735241165-6756e1df61ab?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Royal Pure White",
        "hex": "#FAFAFA"
      }
    ],
    "sizes": [
      "18-Piece (6 Dinner 27cm, 6 Soup 24cm, 6 Salad 22cm)"
    ],
    "specifications": {
      "Material": "Premium Hard Porcelain",
      "Care": "Dishwasher & Microwave Safe",
      "Origin": "Germany"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 2750000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "Authentic German Porcelain"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-spt-adidas-ucl-ball",
    "slug": "adidas-uefa-champions-league-pro-official-match-ball-size-5",
    "sku": "SVX-SPT-004",
    "categoryId": "cat-sports",
    "categorySlug": "sports",
    "subcategory": "Outdoor Sports",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Adidas",
    "nameUz": "Futbol toʻpi Adidas UEFA Champions League Pro (Rasmiy FIFA Quality Pro, 5-oʻlcham)",
    "nameRu": "Футбольный мяч Adidas UEFA Champions League Pro (Официальный матч-бол FIFA Quality Pro)",
    "nameEn": "Adidas UEFA Champions League Pro Official Match Football (FIFA Quality Pro, Size 5)",
    "descriptionUz": "Chempionlar Ligasi rasmiy match toʻpi. Choksiz termal biriktirish texnologiyasi, mukammal aerodinamika va suv oʻtkazmaslik.",
    "descriptionRu": "Официальный игровой мяч Лиги Чемпионов с бесшовной термосклеенной поверхностью и сертификатом FIFA Pro.",
    "descriptionEn": "Thermally bonded seamless construction engineered with textured surface for predictable trajectory and true flight.",
    "priceUzs": 1250000,
    "oldPriceUzs": 1600000,
    "discountPercent": 22,
    "rating": 4.98,
    "reviewCount": 290,
    "soldCount": 950,
    "stock": 25,
    "images": [
      "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "White / Star Blue / Orange",
        "hex": "#2563EB"
      }
    ],
    "sizes": [
      "Official Size 5"
    ],
    "specifications": {
      "Certification": "FIFA Quality Pro",
      "Construction": "Thermally Bonded Polyurethane",
      "Bladder": "Butyl"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 1250000,
        "deliveryEta": "90 mins Express",
        "rating": 4.94,
        "warranty": "100% Original Adidas Match Ball"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-spt-xiaomi-walkingpad",
    "slug": "xiaomi-kingsmith-walkingpad-r2-smart-foldable-treadmill",
    "sku": "SVX-SPT-005",
    "categoryId": "cat-sports",
    "categorySlug": "sports",
    "subcategory": "Fitness & Gym",
    "storeId": "store-malika-mobile",
    "sellerName": "Malika Smart Hub",
    "sellerRating": 4.88,
    "brand": "Xiaomi",
    "nameUz": "Buklanuvchi aqlli yugurish yoʻlakchasi Xiaomi KingSmith WalkingPad R2 (12 km/soat)",
    "nameRu": "Складная умная беговая дорожка Xiaomi KingSmith WalkingPad R2 (До 12 км/ч)",
    "nameEn": "Xiaomi KingSmith WalkingPad R2 Smart 2-in-1 Foldable Running & Walking Treadmill",
    "descriptionUz": "180 gradusga buklanadigan va divan tagiga sigʻadigan patentlangan karkas. 0.5 dan 12 km/soatgacha tezlik, shovqinsiz choʻtkasiz motor.",
    "descriptionRu": "Инновационная складная дорожка 2-в-1 для дома и офиса. Занимает менее 0.2 м² в сложенном виде, тихий мотор.",
    "descriptionEn": "Patented 180° folding aluminum frame with brushless motor, EVA shock-cushioned running deck, and smart app sync.",
    "priceUzs": 4900000,
    "oldPriceUzs": 5800000,
    "discountPercent": 16,
    "rating": 4.96,
    "reviewCount": 175,
    "soldCount": 540,
    "stock": 14,
    "images": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Space Grey / Red Accent",
        "hex": "#4B5563"
      }
    ],
    "sizes": [
      "145 x 72 x 103 cm (Folded: 100 x 72 x 16 cm)"
    ],
    "specifications": {
      "SpeedRange": "0.5 - 12 km/h",
      "MaxLoad": "110 kg",
      "Motor": "1.25 HP Ultra-Quiet Brushless"
    },
    "sellerOffers": [
      {
        "storeId": "store-malika-mobile",
        "sellerName": "Malika Smart Hub",
        "priceUzs": 4900000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.88,
        "warranty": "1 Year Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-spt-manduka-yoga-mat",
    "slug": "manduka-pro-6mm-premium-high-density-yoga-mat-black-sage",
    "sku": "SVX-SPT-006",
    "categoryId": "cat-sports",
    "categorySlug": "sports",
    "subcategory": "Fitness & Gym",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Manduka",
    "nameUz": "Professional yoga va fitnes gilamchasi Manduka PRO 6 mm (Sirpanmas, Umrbod kafolat)",
    "nameRu": "Профессиональный коврик для йоги Manduka PRO 6 мм (Пожизненная гарантия)",
    "nameEn": "Manduka PRO 6mm High-Density Cushioning Non-Slip Yoga Mat (Standard 180cm)",
    "descriptionUz": "Dunyodagi yetakchi yoga instruktorlarining birinchi tanlovi. Boʻgʻimlarni asrovchi 6 mm zichlik, yopiq gʻovakli antibakterial tuzilma.",
    "descriptionRu": "Золотой стандарт ковриков для йоги: непревзойденная амортизация суставов, износостойкость и сцепление.",
    "descriptionEn": "High-density closed-cell material prevents sweat absorption, delivering unparalleled joint protection and floor grip.",
    "priceUzs": 1100000,
    "oldPriceUzs": 1390000,
    "discountPercent": 21,
    "rating": 4.98,
    "reviewCount": 160,
    "soldCount": 620,
    "stock": 25,
    "images": [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Black Sage",
        "hex": "#1C1917"
      }
    ],
    "sizes": [
      "180 x 66 cm x 6 mm"
    ],
    "specifications": {
      "Thickness": "6 mm High-Density",
      "Material": "OEKO-TEX Certified Eco PVC",
      "Weight": "3.4 kg"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 1100000,
        "deliveryEta": "90 mins Express",
        "rating": 4.91,
        "warranty": "Manduka Lifetime Guarantee"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-spt-shimano-mtb",
    "slug": "trinx-m1000-pro-29-hydraulic-disc-mountain-bike",
    "sku": "SVX-SPT-007",
    "categoryId": "cat-sports",
    "categorySlug": "sports",
    "subcategory": "Cycling & Bikes",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Trinx",
    "nameUz": "Togʻ velosipedi Trinx M1000 Pro 29\" (Shimano 30 tezlik, Gidravlik tormozlar)",
    "nameRu": "Горный велосипед Trinx M1000 Pro 29\" (Трансмиссия Shimano 30 скоростей, Гидравлика)",
    "nameEn": "Trinx M1000 Pro 29\" Aluminum Mountain Bike with Shimano 30-Speed and Hydraulic Disc Brakes",
    "descriptionUz": "Alyuminiy yengil karkas, bloklanuvchi gidravlik amortizatorli old vilkasi va Shimano Deore uzatmalar tizimi bilan har qanday togʻ yoʻllariga tayyor.",
    "descriptionRu": "Надежный горный байк с колесами 29 дюймов, алюминиевой рамой с внутренней проводкой и мощными гидравлическими тормозами.",
    "descriptionEn": "Trail-ready 29er boasting an ultralight alloy frame, lockable suspension fork, and precision Shimano 30-speed drivetrain.",
    "priceUzs": 3850000,
    "oldPriceUzs": 4600000,
    "discountPercent": 16,
    "rating": 4.95,
    "reviewCount": 135,
    "soldCount": 410,
    "stock": 12,
    "images": [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Matte Stealth Black / Cyan",
        "hex": "#0F172A"
      }
    ],
    "sizes": [
      "Wheel 29\", Frame 19\" L (For 175-195cm)"
    ],
    "specifications": {
      "Frame": "Hydroformed Alloy 6061",
      "Drivetrain": "Shimano 30-Speed",
      "Brakes": "X-Spark Hydraulic Disc"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 3850000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.94,
        "warranty": "2 Years Frame Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-spt-garmin-forerunner",
    "slug": "garmin-forerunner-265-amoled-gps-running-smartwatch",
    "sku": "SVX-SPT-008",
    "categoryId": "cat-sports",
    "categorySlug": "sports",
    "subcategory": "Sport Electronics",
    "storeId": "store-malika-mobile",
    "sellerName": "Malika Smart Hub",
    "sellerRating": 4.88,
    "brand": "Garmin",
    "nameUz": "Professional yugurish GPS soati Garmin Forerunner 265 AMOLED (Yurak urishi, HRV)",
    "nameRu": "Спортивные беговые часы с AMOLED-экраном Garmin Forerunner 265 GPS",
    "nameEn": "Garmin Forerunner 265 AMOLED Touchscreen Running GPS Smartwatch (13-day Battery)",
    "descriptionUz": "Yorqin AMOLED sensorli ekran, koʻp polosali aniq GPS, trenirovka tayyorgarligi indeksi va 13 kungacha yetuvchi batareya.",
    "descriptionRu": "Профессиональный инструмент триатлетов и бегунов: детальная метрика бега, готовность к тренировке и сатурация.",
    "descriptionEn": "Brilliant 1.3\" AMOLED touchscreen with multi-band GNSS satellite positioning, training readiness score, and music storage.",
    "priceUzs": 5400000,
    "oldPriceUzs": 6200000,
    "discountPercent": 13,
    "rating": 4.98,
    "reviewCount": 190,
    "soldCount": 680,
    "stock": 18,
    "images": [
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Black / Slate Gray",
        "hex": "#111827"
      }
    ],
    "sizes": [
      "46mm Display (Standard)"
    ],
    "specifications": {
      "Screen": "1.3\" AMOLED (416x416)",
      "Battery": "Up to 13 Days Smartwatch, 20h GPS",
      "WaterRating": "5 ATM (50m)"
    },
    "sellerOffers": [
      {
        "storeId": "store-malika-mobile",
        "sellerName": "Malika Smart Hub",
        "priceUzs": 5400000,
        "deliveryEta": "90 mins Express",
        "rating": 4.88,
        "warranty": "1 Year Garmin Official"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-spt-everlast-gloves",
    "slug": "everlast-powerlock-2-pro-hook-loop-leather-boxing-gloves-12oz",
    "sku": "SVX-SPT-009",
    "categoryId": "cat-sports",
    "categorySlug": "sports",
    "subcategory": "Combat & Martial Arts",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Everlast",
    "nameUz": "Haqiqiy charm boks qoʻlqoplari Everlast Powerlock 2 Pro 12oz (Birlashgan Qirollik)",
    "nameRu": "Профессиональные боксерские перчатки из натуральной кожи Everlast Powerlock 2 Pro 12oz",
    "nameEn": "Everlast Powerlock 2 Pro Premium Full-Grain Leather Boxing Gloves 12oz",
    "descriptionUz": "Toʻliq tabiiy charmdan tikilgan professional sparring qoʻlqopi. Qoʻl bilagini mahkam himoyalovchi ergonomik Turnback qulf tizimi.",
    "descriptionRu": "Элитные боксерские перчатки из премиальной воловьей кожи с пятислойной пенной защитой кулака.",
    "descriptionEn": "Constructed from rich full-grain leather, five layers of layered foam core, and revolutionary Turnback wrist strap system.",
    "priceUzs": 720000,
    "oldPriceUzs": 890000,
    "discountPercent": 19,
    "rating": 4.94,
    "reviewCount": 150,
    "soldCount": 730,
    "stock": 24,
    "images": [
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Matte Black / Gold",
        "hex": "#18181B"
      }
    ],
    "sizes": [
      "12 oz (Ideal for Sparring & Bag Work)"
    ],
    "specifications": {
      "Material": "100% Genuine Full-Grain Leather",
      "Padding": "5-Layer Contoured Foam",
      "WristSupport": "Powerlock Turnback"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 720000,
        "deliveryEta": "90 mins Express",
        "rating": 4.94,
        "warranty": "100% Original Everlast"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-spt-wilson-racket",
    "slug": "wilson-pro-staff-97-v14-professional-tennis-racket",
    "sku": "SVX-SPT-010",
    "categoryId": "cat-sports",
    "categorySlug": "sports",
    "subcategory": "Outdoor Sports",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Wilson",
    "nameUz": "Professional katta tennis raketkasi Wilson Pro Staff 97 v14 (315g, Grafit)",
    "nameRu": "Профессиональная теннисная ракетка Wilson Pro Staff 97 v14 (315г, Графит)",
    "nameEn": "Wilson Pro Staff 97 v14 Precision Tennis Racket (315g Unstrung, Braid 45 Carbon)",
    "descriptionUz": "Rojer Federer tomonidan tanlangan afsonaviy seriya. Braid 45 texnologiyasi orqali zarba ustidan mutlaq nazorat va his etish.",
    "descriptionRu": "Выбор профессиональных игроков мирового тура: безупречный контроль, стабильность и культовый латунный перелив.",
    "descriptionEn": "Precision control machine engineered with Braid 45 carbon construction for maximum torsional stability and ball pocketing.",
    "priceUzs": 2350000,
    "oldPriceUzs": 2850000,
    "discountPercent": 18,
    "rating": 4.96,
    "reviewCount": 88,
    "soldCount": 320,
    "stock": 15,
    "images": [
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Bronze / Copper Iridescent",
        "hex": "#92400E"
      }
    ],
    "sizes": [
      "Grip 3 (4 3/8\")",
      "Grip 2 (4 1/4\")"
    ],
    "specifications": {
      "HeadSize": "97 sq in / 626 cm²",
      "Weight": "315g (Unstrung)",
      "StringPattern": "16x19"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 2350000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.94,
        "warranty": "Official Wilson Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-spt-kettler-dumbbells",
    "slug": "kettler-20kg-chrome-cast-iron-adjustable-dumbbell-set-in-case",
    "sku": "SVX-SPT-011",
    "categoryId": "cat-sports",
    "categorySlug": "sports",
    "subcategory": "Fitness & Gym",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Kettler",
    "nameUz": "Xromlangan terma gantellar toʻplami Kettler 20 kg (Chamadonda, Germaniya)",
    "nameRu": "Набор разборных хромированных гантелей Kettler 20 кг в ударопрочном кейсе",
    "nameEn": "Kettler 20kg Heavy-Duty Chrome Cast Iron Adjustable Dumbbell Set with Hard Case",
    "descriptionUz": "20 kg lik xromlangan poʻlat disklardan iborat toʻplam. Sirpanmaydigan riflangan tutqichlar va mahkam buriluvchi gaykalar.",
    "descriptionRu": "Классический набор из высококачественного чугуна с хромовым покрытием, устойчивым к коррозии и сколам.",
    "descriptionEn": "Complete home training set packed into a heavy-duty carry case with ergonomic knurled handles and spinlock collars.",
    "priceUzs": 650000,
    "oldPriceUzs": 820000,
    "discountPercent": 21,
    "rating": 4.92,
    "reviewCount": 220,
    "soldCount": 940,
    "stock": 35,
    "images": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Polished Chrome",
        "hex": "#CBD5E1"
      }
    ],
    "sizes": [
      "20 kg Total (2x 10kg Dumbbells + Case)"
    ],
    "specifications": {
      "Plates": "4x 2.5kg, 4x 1.25kg, 4x 0.5kg",
      "Bars": "2x Solid Chrome 35cm",
      "Collars": "4x Star Spinlock"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 650000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.94,
        "warranty": "Lifetime Cast Iron Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-spt-stanley-thermos",
    "slug": "stanley-classic-legendary-vacuum-insulated-bottle-1-4l-hammertone-green",
    "sku": "SVX-SPT-012",
    "categoryId": "cat-sports",
    "categorySlug": "sports",
    "subcategory": "Camping & Hiking",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Stanley",
    "nameUz": "Afsonaviy vakuumli zanglamas termos Stanley Classic Legendary 1.4L (40 soat issiq)",
    "nameRu": "Термос Stanley Classic Legendary 1.4 л из нержавеющей стали (40 часов горячее)",
    "nameEn": "Stanley Classic Legendary 1.4L Vacuum Insulated Bottle (Hammertone Green, Keeps 40h Hot)",
    "descriptionUz": "1913 yildan beri sinovdan oʻtgan afsonaviy mustahkamlik. 1.4 litr sigʻim, 40 soat issiq va 45 soat muzdek ushlaydi. Piyola boʻluvchi qopqoq.",
    "descriptionRu": "Культовый американский термос с двойной вакуумной изоляцией. Держит тепло до 40 часов, холод — до 45 часов.",
    "descriptionEn": "Built like a battleship: double-wall vacuum insulation keeps liquids piping hot for 40 hours or iced for 6 days.",
    "priceUzs": 580000,
    "oldPriceUzs": 720000,
    "discountPercent": 19,
    "rating": 4.99,
    "reviewCount": 340,
    "soldCount": 1420,
    "stock": 45,
    "images": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Hammertone Green",
        "hex": "#1E3A2B"
      }
    ],
    "sizes": [
      "1.4 Litres (48 oz)"
    ],
    "specifications": {
      "Steel": "18/8 BPA-Free Stainless",
      "HeatRetention": "40 Hours Hot, 45 Hours Cold",
      "Warranty": "Lifetime Stanley Warranty"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 580000,
        "deliveryEta": "90 mins Express",
        "rating": 4.91,
        "warranty": "Lifetime Stanley Guarantee"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-toy-lego-falcon",
    "slug": "lego-star-wars-millennium-falcon-75257-starship-building-set",
    "sku": "SVX-TOY-004",
    "categoryId": "cat-toys",
    "categorySlug": "toys",
    "subcategory": "Building Sets & LEGO",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "LEGO",
    "nameUz": "Konstruktor LEGO Star Wars Falakiy Falcon 75257 (1351 detal, 7 ta minifigura)",
    "nameRu": "Конструктор LEGO Star Wars Сокол Тысячелетия 75257 (1351 деталь, 7 минифигурок)",
    "nameEn": "LEGO Star Wars Millennium Falcon 75257 Starship Collector Building Set (1,351 Pieces)",
    "descriptionUz": "Yulduzlar jangi afsonasi: aylanuvchi lazer toʻplari, ochiluvchi kabina va ichki yuk boʻlmasi bilan jihozlangan katta toʻplam.",
    "descriptionRu": "Детализированная копия культового звездолета Хана Соло с вращающимися турелями, пружинными шутерами и интерьером.",
    "descriptionEn": "Inspire kids and collectors with the iconic Millennium Falcon featuring rotating gun turrets and detailed interior.",
    "priceUzs": 2450000,
    "oldPriceUzs": 2950000,
    "discountPercent": 17,
    "rating": 4.99,
    "reviewCount": 310,
    "soldCount": 880,
    "stock": 18,
    "images": [
      "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Classic Star Wars Grey",
        "hex": "#94A3B8"
      }
    ],
    "sizes": [
      "1351 Pieces (44 x 32 x 14 cm)"
    ],
    "specifications": {
      "Age": "9+",
      "PieceCount": "1351 pcs",
      "Minifigures": "7 (Finn, Chewbacca, Lando, C-3PO, Boolio, D-O, R2-D2)"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 2450000,
        "deliveryEta": "90 mins Express",
        "rating": 4.94,
        "warranty": "100% Genuine LEGO Denmark"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-toy-dji-tello",
    "slug": "dji-ryze-tello-edu-programmable-mini-drone-hd-camera",
    "sku": "SVX-TOY-005",
    "categoryId": "cat-toys",
    "categorySlug": "toys",
    "subcategory": "Electronic & Remote Toys",
    "storeId": "store-malika-mobile",
    "sellerName": "Malika Smart Hub",
    "sellerRating": 4.88,
    "brand": "DJI Ryze",
    "nameUz": "Bolalar va oʻsmirlar uchun dasturlanadigan mini dron DJI Tello Edu (720p HD kamera)",
    "nameRu": "Обучающий программируемый квадрокоптер DJI Ryze Tello Edu с HD камерой 720p",
    "nameEn": "DJI Ryze Tello Edu Programmable Educational Mini Drone with 720p HD Camera & Scratch/Python",
    "descriptionUz": "Scratch, Swift va Python tillarida kod yozish orqali boshqarish mumkin boʻlgan aqlli taʼlim droni. 13 daqiqa parvoz va elektron stabilizatsiya.",
    "descriptionRu": "Безопасный квадрокоптер от DJI для изучения робототехники и программирования с кувырками 8D Flips и HD видео.",
    "descriptionEn": "Powered by DJI flight tech, an educational programmable drone supporting Scratch, Python, and automated aerial tricks.",
    "priceUzs": 1450000,
    "oldPriceUzs": 1750000,
    "discountPercent": 17,
    "rating": 4.94,
    "reviewCount": 180,
    "soldCount": 650,
    "stock": 22,
    "images": [
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "White / Black",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "Weight: 80g (No FAA Registration Required)"
    ],
    "specifications": {
      "FlightTime": "13 Minutes",
      "Camera": "5MP Stills / 720p Video",
      "CodingSupport": "Scratch, Swift, Python"
    },
    "sellerOffers": [
      {
        "storeId": "store-malika-mobile",
        "sellerName": "Malika Smart Hub",
        "priceUzs": 1450000,
        "deliveryEta": "90 mins Express",
        "rating": 4.88,
        "warranty": "1 Year DJI Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-toy-monopoly-uz",
    "slug": "monopoly-uzbekistan-official-bilingual-economic-board-game",
    "sku": "SVX-TOY-006",
    "categoryId": "cat-toys",
    "categorySlug": "toys",
    "subcategory": "Board Games & Puzzles",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Hasbro Gaming",
    "nameUz": "Monopoliya Oʻzbekiston rasmiy ikki tilli stol oʻyini (Toshkent, Samarqand, Buxoro koʻchalari)",
    "nameRu": "Монополия Узбекистан официальная двуязычная настольная игра",
    "nameEn": "Monopoly Uzbekistan Edition Official Bilingual Economic Board Game (UZ / RU)",
    "descriptionUz": "Butun oila va doʻstlar uchun eng mashhur iqtisodiy oʻyin: Chorsu, Registon, Amir Temur xiyoboni kabi milliy maskanlar bilan boyitilgan.",
    "descriptionRu": "Эксклюзивная версия культовой Монополии с городами и достопримечательностями Узбекистана.",
    "descriptionEn": "Official regional edition featuring famous landmarks of Uzbekistan: Tashkent City, Samarkand Registan, and Bukhara Ark.",
    "priceUzs": 290000,
    "oldPriceUzs": 380000,
    "discountPercent": 24,
    "rating": 4.97,
    "reviewCount": 340,
    "soldCount": 1650,
    "stock": 55,
    "images": [
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Uzbekistan Edition Green",
        "hex": "#059669"
      }
    ],
    "sizes": [
      "40 x 27 x 5 cm Box"
    ],
    "specifications": {
      "Players": "2 to 6 Players",
      "Languages": "Uzbek & Russian Included",
      "Age": "8+"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 290000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "Original Hasbro License"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-toy-hotwheels-track",
    "slug": "hot-wheels-city-ultimate-garage-with-t-rex-attack-track-set",
    "sku": "SVX-TOY-007",
    "categoryId": "cat-toys",
    "categorySlug": "toys",
    "subcategory": "Toy Cars & Vehicles",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Hot Wheels",
    "nameUz": "Avtotrek Hot Wheels City Katta garaj T-Rex dinozavr hujumi bilan (100+ mashina sigʻimi)",
    "nameRu": "Игровой трек Hot Wheels Сити Мега-гараж с нападением Т-Рекса (Вмещает 100+ машинок)",
    "nameEn": "Hot Wheels City Ultimate Garage Multi-Level Playset with T-Rex Attack & 2 Die-Cast Cars",
    "descriptionUz": "Balandligi 90 sm dan ortiq 4 qavatli ulkan garaj, harakatlanuvchi lift, ikki polosali poyga yoʻli va ochkoʻz T-Rex dinozavr.",
    "descriptionRu": "Огромный четырехуровневый паркинг на 100 машинок с вертикальным механическим лифтом и опасным динозавром.",
    "descriptionEn": "Towering multi-level garage holding over 100 vehicles, featuring twin-car motorized lift and an attacking mechanical T-Rex.",
    "priceUzs": 1650000,
    "oldPriceUzs": 2100000,
    "discountPercent": 21,
    "rating": 4.96,
    "reviewCount": 195,
    "soldCount": 720,
    "stock": 16,
    "images": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "City Garage Multi-color",
        "hex": "#DC2626"
      }
    ],
    "sizes": [
      "90 cm Tall (Over 3 Feet)"
    ],
    "specifications": {
      "Capacity": "Stores 100+ 1:64 cars",
      "Age": "5-8 Years",
      "CarsIncluded": "2 Die-Cast Cars"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 1650000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "100% Mattel Genuine"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-toy-barbie-dreamhouse",
    "slug": "barbie-3-story-deluxe-dreamhouse-pool-and-spiral-slide",
    "sku": "SVX-TOY-008",
    "categoryId": "cat-toys",
    "categorySlug": "toys",
    "subcategory": "Dolls & Stuffed Animals",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Barbie",
    "nameUz": "Barbie Dreamhouse 3 qavatli orzu uyi (Baland spiral gorka, hovuz va 75+ aksessuar)",
    "nameRu": "Дом мечты Barbie Dreamhouse 3-этажный со спиральной горкой и бассейном (75+ предметов)",
    "nameEn": "Barbie Deluxe 3-Story Dreamhouse Playset with Spiral Slide, Pool, Lights & Sounds",
    "descriptionUz": "Balandligi 110 sm li 3 qavatli 10 xonali hashamatli qoʻgʻirchoq uyi. Katta spiral suv gorkasi, ishlaydigan lift, chiroq va tovush effektlari.",
    "descriptionRu": "Грандиозный 3-этажный особняк Барби с 10 игровыми зонами, винтовой горкой прямо в бассейн и интерактивным светом.",
    "descriptionEn": "The iconic Dreamhouse featuring 10 indoor and outdoor play areas, working elevator, party room with DJ booth, and 75+ pieces.",
    "priceUzs": 2750000,
    "oldPriceUzs": 3400000,
    "discountPercent": 19,
    "rating": 4.98,
    "reviewCount": 160,
    "soldCount": 510,
    "stock": 12,
    "images": [
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Signature Barbie Pink",
        "hex": "#EC4899"
      }
    ],
    "sizes": [
      "114 x 104 cm (3-Story)"
    ],
    "specifications": {
      "Dimensions": "114cm H x 104cm W",
      "Accessories": "75+ pieces",
      "Effects": "Integrated Lights & Sounds"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 2750000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "Mattel Official License"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-toy-nerf-commander",
    "slug": "nerf-elite-2-0-commander-rd-6-blaster-with-12-darts",
    "sku": "SVX-TOY-009",
    "categoryId": "cat-toys",
    "categorySlug": "toys",
    "subcategory": "Outdoor Active Toys",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Nerf",
    "nameUz": "Blaster Nerf Elite 2.0 Commander RD-6 aylanma barabanli (12 dona oʻq bilan)",
    "nameRu": "Бластер Nerf Elite 2.0 Commander RD-6 с барабаном на 6 стрел (12 стрел в наборе)",
    "nameEn": "Nerf Elite 2.0 Commander RD-6 Rotating Drum Blaster with 12 Official Darts",
    "descriptionUz": "6 ta oʻq sigʻuvchi tez aylanuvchi baraban, 27 metrgacha uchish masofasi va aksessuarlar ulash uchun 3 ta taktik rels.",
    "descriptionRu": "Быстрострельный тактический бластер Nerf с дальностью выстрела до 27 метров и барабаном быстрого перезаряда.",
    "descriptionEn": "Customize for battle with 3 tactical rails, barrel attachment point, stock point, and a 6-dart rotating drum firing up to 90 feet.",
    "priceUzs": 260000,
    "oldPriceUzs": 350000,
    "discountPercent": 26,
    "rating": 4.91,
    "reviewCount": 280,
    "soldCount": 1390,
    "stock": 45,
    "images": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Teal Blue / Orange",
        "hex": "#0284C7"
      }
    ],
    "sizes": [
      "Length: 36 cm"
    ],
    "specifications": {
      "Range": "Up to 27 Meters (90 ft)",
      "DartsIncluded": "12 Official Nerf Elite Darts",
      "DrumCapacity": "6 Darts"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 260000,
        "deliveryEta": "90 mins Express",
        "rating": 4.94,
        "warranty": "Hasbro Genuine"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-toy-playdoh-mega",
    "slug": "play-doh-super-colour-20-can-modelling-compound-multipack",
    "sku": "SVX-TOY-010",
    "categoryId": "cat-toys",
    "categorySlug": "toys",
    "subcategory": "Craft & Learning Toys",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Play-Doh",
    "nameUz": "Play-Doh Super Colour 20 xil rangli yumshoq modellashtirish plastilin toʻplami",
    "nameRu": "Набор пластилина для лепки Play-Doh Super Colour 20 баночек (Яркие цвета)",
    "nameEn": "Play-Doh Super Colour Pack of 20 Assorted Bright Cans Non-Toxic Modelling Compound",
    "descriptionUz": "Bolalarning ijodiy tasavvurini va mayda motorikasini rivojlantiruvchi zaharli boʻlmagan tabiiy bugʻdoy asosidagi xavfsiz yumshoq plastilin.",
    "descriptionRu": "Безопасная масса для лепки на пшеничной основе. 20 насыщенных оттенков, не липнет к рукам и приятно пахнет.",
    "descriptionEn": "Unlock endless imagination with 20 cans of squishy, moldable, non-toxic Play-Doh compound in vibrant rainbow colors.",
    "priceUzs": 240000,
    "oldPriceUzs": 310000,
    "discountPercent": 23,
    "rating": 4.98,
    "reviewCount": 420,
    "soldCount": 1950,
    "stock": 65,
    "images": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "20 Vibrant Rainbow Shades",
        "hex": "#F59E0B"
      }
    ],
    "sizes": [
      "20 Cans x 84g (1.68 kg Total)"
    ],
    "specifications": {
      "Safety": "Non-Toxic ASTM D-4236",
      "Base": "Natural Wheat Starch",
      "Age": "2+"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 240000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "Hasbro Authentic"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-toy-dualsense-white",
    "slug": "sony-playstation-5-dualsense-wireless-controller-white",
    "sku": "SVX-TOY-011",
    "categoryId": "cat-toys",
    "categorySlug": "toys",
    "subcategory": "Electronic & Remote Toys",
    "storeId": "store-malika-mobile",
    "sellerName": "Malika Smart Hub",
    "sellerRating": 4.88,
    "brand": "Sony",
    "nameUz": "Simsiz geympad Sony PlayStation 5 DualSense (Haptic Feedback, Oq)",
    "nameRu": "Беспроводной геймпад Sony PlayStation 5 DualSense (Тактильная отдача, Белый)",
    "nameEn": "Sony PlayStation 5 DualSense Wireless Controller (Haptic Feedback, Adaptive Triggers, White)",
    "descriptionUz": "Oʻyin olamiga toʻliq shoʻngʻish: nozik tebranishli Haptic fikr-mulohaza, barmoq qarshiligini his ettiruvchi adaptiv triggerlar va mikrofon.",
    "descriptionRu": "Инновационный контроллер для PS5 и ПК с реалистичной тактильной отдачей и адаптивными курками.",
    "descriptionEn": "Discover a deeper gaming experience with tactile feedback, dynamic adaptive triggers, and an integrated microphone.",
    "priceUzs": 890000,
    "oldPriceUzs": 1050000,
    "discountPercent": 15,
    "rating": 4.98,
    "reviewCount": 540,
    "soldCount": 2200,
    "stock": 40,
    "images": [
      "https://images.unsplash.com/photo-1606318801954-d46846591573?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Classic White / Black",
        "hex": "#F8FAFC"
      }
    ],
    "sizes": [
      "DualSense Standard"
    ],
    "specifications": {
      "Connectivity": "Bluetooth 5.1 & USB-C",
      "Battery": "Built-in 1560 mAh Li-ion",
      "Compatibility": "PS5, PC, iOS, Android"
    },
    "sellerOffers": [
      {
        "storeId": "store-malika-mobile",
        "sellerName": "Malika Smart Hub",
        "priceUzs": 890000,
        "deliveryEta": "90 mins Express",
        "rating": 4.88,
        "warranty": "1 Year Sony Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-toy-wooden-chess",
    "slug": "handcrafted-carved-walnut-wooden-chess-and-backgammon-set",
    "sku": "SVX-TOY-012",
    "categoryId": "cat-toys",
    "categorySlug": "toys",
    "subcategory": "Board Games & Puzzles",
    "storeId": "store-samarkand-bazaar",
    "sellerName": "Samarkand Silk & Crafts House",
    "sellerRating": 4.97,
    "brand": "Samarkand Crafts",
    "nameUz": "Qoʻlda oʻyilgan yongʻoq yogʻochidan eksklyuziv shaxmat va narda toʻplami (50x50 sm)",
    "nameRu": "Эксклюзивные резные шахматы и нарды из массива грецкого ореха ручной работы (50x50 см)",
    "nameEn": "Handcrafted Carved Walnut Wooden 2-in-1 Chess and Backgammon Set (50x50cm)",
    "descriptionUz": "Samarqandlik usta hunarmandlar tomonidan asrlik yongʻoq daraxtidan yoʻnib yasalgan, baxmal asosli ogʻir figuralar va oʻyma naqshli doska.",
    "descriptionRu": "Шедевр прикладного искусства: доска из цельного массива грецкого ореха с ручной чеканной резьбой и утяжеленными фигурами.",
    "descriptionEn": "Artisanal walnut timber board intricately carved with traditional motifs, paired with weighted felt-bottomed chessmen.",
    "priceUzs": 1100000,
    "oldPriceUzs": 1450000,
    "discountPercent": 24,
    "rating": 4.99,
    "reviewCount": 170,
    "soldCount": 530,
    "stock": 15,
    "images": [
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Natural Dark Walnut",
        "hex": "#57300A"
      }
    ],
    "sizes": [
      "50 x 50 cm Foldable Board (King 10cm)"
    ],
    "specifications": {
      "Wood": "100% Mountain Walnut",
      "Coating": "Natural Linseed Oil & Beeswax",
      "Includes": "32 Chessmen + 30 Checkers"
    },
    "sellerOffers": [
      {
        "storeId": "store-samarkand-bazaar",
        "sellerName": "Samarkand Silk & Crafts House",
        "priceUzs": 1100000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.97,
        "warranty": "Handmade Artisan Certificate"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-book-rich-dad",
    "slug": "robert-kiyosaki-rich-dad-poor-dad-uzbek-hardcover",
    "sku": "SVX-BOK-004",
    "categoryId": "cat-books",
    "categorySlug": "books",
    "subcategory": "Business & Economics",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Asaxiy Books",
    "nameUz": "Robert Kiyosaki \"Boy ota, kambagʻal ota\" (Qattiq muqova, Oʻzbek tilida)",
    "nameRu": "Роберт Кийосаки \"Богатый папа, бедный папа\" (Твердый переплет, Узбекский язык)",
    "nameEn": "Robert Kiyosaki \"Rich Dad Poor Dad\" (Hardcover, Uzbek Translation Best-seller)",
    "descriptionUz": "Moliyaviy erkinlik va investitsiyalar haqida butun dunyoda millionlab nusxada sotilgan 1-raqamli qoʻllanma. Oʻzbek tilidagi sifatli tarjima.",
    "descriptionRu": "Мировой бестселлер по финансовой грамотности, изменивший мышление миллионов людей. Твердый качественный переплет.",
    "descriptionEn": "The #1 personal finance book of all time that teaches cash flow, assets, and building long-term generational wealth.",
    "priceUzs": 65000,
    "oldPriceUzs": 85000,
    "discountPercent": 24,
    "rating": 4.99,
    "reviewCount": 460,
    "soldCount": 3100,
    "stock": 90,
    "images": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Purple Hardcover",
        "hex": "#6B21A8"
      }
    ],
    "sizes": [
      "336 Pages (A5 Format, Hardcover)"
    ],
    "specifications": {
      "Author": "Robert T. Kiyosaki",
      "Pages": "336 pages",
      "Cover": "Hardcover with Gold Embossing"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 65000,
        "deliveryEta": "90 mins Express",
        "rating": 4.91,
        "warranty": "Official Asaxiy Books Print"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-book-harry-potter",
    "slug": "jk-rowling-harry-potter-and-the-philosophers-stone-uzbek-edition",
    "sku": "SVX-BOK-005",
    "categoryId": "cat-books",
    "categorySlug": "books",
    "subcategory": "Children Books & Fiction",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Ilm Ziyo",
    "nameUz": "J.K. Rouling \"Garri Potter va hikmatlar toshi\" (1-kitob, Nafis qattiq muqova)",
    "nameRu": "Дж. К. Роулинг \"Гарри Поттер и философский камень\" (Книга 1, Твердый переплет)",
    "nameEn": "J.K. Rowling \"Harry Potter and the Philosopher's Stone\" (Book 1, Deluxe Hardcover in Uzbek)",
    "descriptionUz": "Sehrgarlar olamiga sehrli sayohat: Garri Potter haqidagi ilk durdona kitob. Qalin sargʻish ofset qogʻozi va nafis zarhal muqova.",
    "descriptionRu": "Первая глава всемирно известной саги о юном волшебнике Хогвартса на узбекском языке в подарочном оформлении.",
    "descriptionEn": "The magic begins here: official hardcover edition introducing the young wizard Harry Potter and Hogwarts school.",
    "priceUzs": 85000,
    "oldPriceUzs": 110000,
    "discountPercent": 23,
    "rating": 4.99,
    "reviewCount": 390,
    "soldCount": 2450,
    "stock": 75,
    "images": [
      "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Burgundy / Gold",
        "hex": "#831843"
      }
    ],
    "sizes": [
      "352 Pages (Hardcover)"
    ],
    "specifications": {
      "Author": "J.K. Rowling",
      "Language": "Uzbek (Latin)",
      "Paper": "Cream High-Grade Offset 80g"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 85000,
        "deliveryEta": "90 mins Express",
        "rating": 4.91,
        "warranty": "Licensed Translation"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-book-steve-jobs",
    "slug": "walter-isaacson-steve-jobs-exclusive-biography-uzbek",
    "sku": "SVX-BOK-006",
    "categoryId": "cat-books",
    "categorySlug": "books",
    "subcategory": "Biographies & History",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Asaxiy Books",
    "nameUz": "Uolter Ayzekson \"Stiv Jobs\" toʻliq biografiyasi (Qattiq muqova, 720 sahifa)",
    "nameRu": "Уолтер Айзексон \"Стив Джобс\" полная официальная биография (Твердый переплет)",
    "nameEn": "Walter Isaacson \"Steve Jobs: The Exclusive Biography\" (720 Pages Hardcover)",
    "descriptionUz": "Apple asoschisining hayoti, feʼl-atvori, texnologik inqiloblari va shaxsiy ziddiyatlari haqidagi yagona rasmiy xolis biografiya.",
    "descriptionRu": "Бескомпромиссная история гения, перевернувшего мир персональных компьютеров, музыки и телефонов.",
    "descriptionEn": "Based on more than forty interviews with Jobs conducted over two years, an unvarnished look at an iconic innovator.",
    "priceUzs": 125000,
    "oldPriceUzs": 160000,
    "discountPercent": 22,
    "rating": 4.97,
    "reviewCount": 310,
    "soldCount": 1850,
    "stock": 60,
    "images": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Minimalist White / Black",
        "hex": "#111827"
      }
    ],
    "sizes": [
      "720 Pages (Hardcover Deluxe)"
    ],
    "specifications": {
      "Author": "Walter Isaacson",
      "Format": "165x240 mm",
      "Photos": "Includes 32 Glossy Plates"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 125000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "Official Authorized Edition"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-book-navoiy-xamsa",
    "slug": "alisher-navoiy-khamsa-5-volume-collector-academic-gift-box",
    "sku": "SVX-BOK-007",
    "categoryId": "cat-books",
    "categorySlug": "books",
    "subcategory": "Uzbek Classical Literature",
    "storeId": "store-samarkand-bazaar",
    "sellerName": "Samarkand Silk & Crafts House",
    "sellerRating": 4.97,
    "brand": "Gʻafur Gʻulom Nashriyoti",
    "nameUz": "Alisher Navoiy \"Xamsa\" 5 jildli toʻliq akademik sovgʻabop toʻplam (Qutida, Zarhal nashr)",
    "nameRu": "Алишер Навои \"Хамса\" полное академическое собрание в 5 томах в подарочном футляре",
    "nameEn": "Alisher Navoiy \"Khamsa\" Complete 5-Volume Academic Collector Boxed Gift Set",
    "descriptionUz": "Buyuk mutafakkir Alisher Navoiyning besh dostoni: \"Hayrat ul-abror\", \"Farhod va Shirin\", \"Layli va Majnun\", \"Sabʼai sayyor\", \"Saddi Iskandariy\". Zarhal charm muqovada.",
    "descriptionRu": "Вершина тюркской классической поэзии: 5 бессмертных поэм великого мыслителя в роскошном кожаном переплете с тиснением золотом.",
    "descriptionEn": "The monumental masterpiece of Turkic literature: the Quintet of Alisher Navoi in five gilded hardbound volumes.",
    "priceUzs": 490000,
    "oldPriceUzs": 650000,
    "discountPercent": 25,
    "rating": 5,
    "reviewCount": 120,
    "soldCount": 430,
    "stock": 25,
    "images": [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Emerald Velvet & Gold Foil",
        "hex": "#064E3B"
      }
    ],
    "sizes": [
      "5 Volumes in Wooden/Velvet Slipcase (1800 Pages)"
    ],
    "specifications": {
      "Author": "Nizomiddin Mir Alisher Navoiy",
      "Volumes": "5 Books Set",
      "Paper": "Luxurious Ivory Finish"
    },
    "sellerOffers": [
      {
        "storeId": "store-samarkand-bazaar",
        "sellerName": "Samarkand Silk & Crafts House",
        "priceUzs": 490000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.97,
        "warranty": "Academy of Sciences Edition"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-book-thinking-fast",
    "slug": "daniel-kahneman-thinking-fast-and-slow-uzbek-hardcover",
    "sku": "SVX-BOK-008",
    "categoryId": "cat-books",
    "categorySlug": "books",
    "subcategory": "Psychology & Self-Help",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Nihol Books",
    "nameUz": "Daniel Kahneman \"Fikrla, tez va sekin\" (Nobel mukofoti laureati, Qattiq muqova)",
    "nameRu": "Даниэль Канеман \"Думай медленно... решай быстро\" (Лауреат Нобелевской премии)",
    "nameEn": "Daniel Kahneman \"Thinking, Fast and Slow\" (Nobel Prize Winner, Hardcover in Uzbek)",
    "descriptionUz": "Inson miyasi qanday qaror qabul qiladi? Tez instinktiv Tizim 1 va sekin mantiqiy Tizim 2 toʻqnashuvi haqidagi psixologiya shohasari.",
    "descriptionRu": "Фундаментальный труд лауреата Нобелевской премии по поведенческой экономике о двух системах мышления.",
    "descriptionEn": "A tour de force on cognitive biases, irrational decision-making, and understanding the human mind by Nobel laureate Daniel Kahneman.",
    "priceUzs": 95000,
    "oldPriceUzs": 125000,
    "discountPercent": 24,
    "rating": 4.98,
    "reviewCount": 270,
    "soldCount": 1450,
    "stock": 50,
    "images": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Graphic Yellow / Black",
        "hex": "#EAB308"
      }
    ],
    "sizes": [
      "620 Pages (Hardcover)"
    ],
    "specifications": {
      "Author": "Daniel Kahneman",
      "Award": "Nobel Memorial Prize in Economics",
      "Genre": "Cognitive Psychology"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 95000,
        "deliveryEta": "90 mins Express",
        "rating": 4.91,
        "warranty": "100% Original Book"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-book-little-prince",
    "slug": "antoine-de-saint-exupery-the-little-prince-deluxe-color-illustrations",
    "sku": "SVX-BOK-009",
    "categoryId": "cat-books",
    "categorySlug": "books",
    "subcategory": "Children Books & Fiction",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Sharq Nashriyoti",
    "nameUz": "Antuan de Sent-Ekzyuperi \"Kichkina shahzoda\" (Muallifning original rangli illyustratsiyalari bilan)",
    "nameRu": "Антуан де Сент-Экзюпери \"Маленький принц\" с авторскими цветными рисунками",
    "nameEn": "Antoine de Saint-Exupéry \"The Little Prince\" (Deluxe Gift Hardcover with Author's Watercolors)",
    "descriptionUz": "\"Eng muhim narsani koʻz bilan koʻrib boʻlmaydi, uni faqat qalb bilan his qilish mumkin.\" Har bir yoshdagi inson qayta oʻqiydigan nafis durdona.",
    "descriptionRu": "Бессмертная философская сказка-притча с оригинальными акварельными иллюстрациями самого автора.",
    "descriptionEn": "The beloved timeless fable celebrating friendship, wonder, and humanity, featuring Saint-Exupéry's iconic watercolor artwork.",
    "priceUzs": 55000,
    "oldPriceUzs": 75000,
    "discountPercent": 27,
    "rating": 4.99,
    "reviewCount": 380,
    "soldCount": 2900,
    "stock": 80,
    "images": [
      "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Sky Blue Cloth Hardcover",
        "hex": "#38BDF8"
      }
    ],
    "sizes": [
      "128 Pages (Chalk Overlay Paper, Full Color)"
    ],
    "specifications": {
      "Author": "Antoine de Saint-Exupéry",
      "Illustrations": "Full-Color Original Watercolors",
      "Binding": "Hardcover"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 55000,
        "deliveryEta": "90 mins Express",
        "rating": 4.91,
        "warranty": "Authentic Publication"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-book-1984-orwell",
    "slug": "george-orwell-1984-dystopian-classic-hardcover-uzbek",
    "sku": "SVX-BOK-010",
    "categoryId": "cat-books",
    "categorySlug": "books",
    "subcategory": "World Classics",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Asaxiy Books",
    "nameUz": "Jorj Oruell \"1984\" jahon antiutopiya durdonasi (Qattiq muqova, Oʻzbek tilida)",
    "nameRu": "Джордж Оруэлл \"1984\" культовая антиутопия (Твердый переплет, Узбекский перевод)",
    "nameEn": "George Orwell \"1984\" Dystopian Masterpiece (Collector Hardcover Edition in Uzbek)",
    "descriptionUz": "Katta Ogʻa sizni kuzatib turibdi. Totalitarizm, fikr erkinligi va haqiqat haqidagi XX asrning eng taʼsirli va dolzarb romani.",
    "descriptionRu": "Культовый роман-предостережение о тотальном контроле, цензуре и ценности человеческой свободы.",
    "descriptionEn": "The definitive 20th-century political dystopia exploring mass surveillance, truth manipulation, and ideological control.",
    "priceUzs": 60000,
    "oldPriceUzs": 80000,
    "discountPercent": 25,
    "rating": 4.97,
    "reviewCount": 340,
    "soldCount": 2150,
    "stock": 65,
    "images": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Matte Crimson / Black",
        "hex": "#991B1B"
      }
    ],
    "sizes": [
      "320 Pages (Hardcover)"
    ],
    "specifications": {
      "Author": "George Orwell",
      "Genre": "Political Dystopian Fiction",
      "YearWritten": "1949"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 60000,
        "deliveryEta": "90 mins Express",
        "rating": 4.91,
        "warranty": "Official Asaxiy Print"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-book-outliers-gladwell",
    "slug": "malcolm-gladwell-outliers-the-story-of-success-uzbek",
    "sku": "SVX-BOK-011",
    "categoryId": "cat-books",
    "categorySlug": "books",
    "subcategory": "Business & Economics",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Nihol Books",
    "nameUz": "Malkolm Gladuell \"Zukkolar va landavurlar: Muvaffaqiyat sirlari\" (10 000 soat qoidasi)",
    "nameRu": "Малкольм Гладуэлл \"Гении и аутсайдеры: Почему одним все, а другим ничего?\"",
    "nameEn": "Malcolm Gladwell \"Outliers: The Story of Success\" (The 10,000-Hour Rule Hardcover)",
    "descriptionUz": "Nima uchun ayrim insonlar boshqalarga qaraganda ancha muvaffaqiyatli? 10 000 soatlik mashaqqat qoidasi va imkoniyatlar siri.",
    "descriptionRu": "Увлекательное исследование природы гениальности, роли окружения и закона 10 000 часов практики.",
    "descriptionEn": "Why do some people succeed far more than others? Gladwell investigates rock stars, software billionaires, and elite athletes.",
    "priceUzs": 70000,
    "oldPriceUzs": 90000,
    "discountPercent": 22,
    "rating": 4.96,
    "reviewCount": 210,
    "soldCount": 1320,
    "stock": 45,
    "images": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Glossy White / Orange",
        "hex": "#EA580C"
      }
    ],
    "sizes": [
      "304 Pages (Hardcover)"
    ],
    "specifications": {
      "Author": "Malcolm Gladwell",
      "KeyConcept": "10,000-Hour Rule",
      "Format": "145x215 mm"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 70000,
        "deliveryEta": "90 mins Express",
        "rating": 4.91,
        "warranty": "100% Genuine"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-book-otamdan-qolgan-dalalar",
    "slug": "toghay-murod-fields-inherited-from-my-father-novel",
    "sku": "SVX-BOK-012",
    "categoryId": "cat-books",
    "categorySlug": "books",
    "subcategory": "Uzbek Classical Literature",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Oʻzbekiston Milliy Nashriyoti",
    "nameUz": "Togʻay Murod \"Otamdan qolgan dalalar\" milliy roman (Qattiq muqova, Nafis nashr)",
    "nameRu": "Тогай Мурод \"Поля, оставшиеся от отца\" национальный роман (Твердый переплет)",
    "nameEn": "Toghay Murod \"Fields Inherited from My Father\" Classic Uzbek Novel (Deluxe Hardcover)",
    "descriptionUz": "Oʻzbek xalqining milliy oʻzligini, mehnati va ozodlikka boʻlgan intilishini aks ettirgan XX asr oʻzbek adabiyotining eng buyuk asarlaridan biri.",
    "descriptionRu": "Глубокий и пронзительный шедевр узбекской литературы, воспевающий дух, землю и историю родного народа.",
    "descriptionEn": "A seminal work of contemporary Uzbek literature portraying national identity, endurance, and devotion to the ancestral land.",
    "priceUzs": 58000,
    "oldPriceUzs": 75000,
    "discountPercent": 23,
    "rating": 5,
    "reviewCount": 310,
    "soldCount": 2200,
    "stock": 70,
    "images": [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Golden Brown / Gold Lettering",
        "hex": "#78350F"
      }
    ],
    "sizes": [
      "288 Pages (A5 Hardcover)"
    ],
    "specifications": {
      "Author": "Togʻay Murod (Oʻzbekiston Xalq Yozuvchisi)",
      "Award": "Abdulla Qodiriy Davlat Mukofoti",
      "Cover": "Laminated Hardcover"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 58000,
        "deliveryEta": "90 mins Express",
        "rating": 4.91,
        "warranty": "Official National Publication"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-baby-chicco-crib",
    "slug": "chicco-next2me-magic-co-sleeping-bedside-baby-crib-cool-grey",
    "sku": "SVX-BBY-004",
    "categoryId": "cat-baby-products",
    "categorySlug": "baby-products",
    "subcategory": "Nursery & Baby Furniture",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Chicco",
    "nameUz": "Kattalar karavotiga ulanadigan chaqaloq beshigi Chicco Next2Me Magic (Italiya)",
    "nameRu": "Приставная колыбель для новорожденных Chicco Next2Me Magic (Качание, Италия)",
    "nameEn": "Chicco Next2Me Magic Bedside Co-Sleeping Crib with 11-Height Positions and Rocking Mode",
    "descriptionUz": "Bir qoʻl bilan ochiladigan yon toʻsiq, tebranish rejimi, 11 xil balandlik va havoni yaxshi aylantiruvchi 3D toʻrli qoplama.",
    "descriptionRu": "Инновационная приставная кроватка с функцией укачивания и механизмом опускания бортика одной рукой.",
    "descriptionEn": "Enables safe co-sleeping with sliding side panel, tilt mode for reflux reduction, and 3D mesh breathable mattress.",
    "priceUzs": 2850000,
    "oldPriceUzs": 3400000,
    "discountPercent": 16,
    "rating": 4.98,
    "reviewCount": 195,
    "soldCount": 680,
    "stock": 14,
    "images": [
      "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Cool Grey",
        "hex": "#64748B"
      },
      {
        "name": "Warm Sand",
        "hex": "#D6D3D1"
      }
    ],
    "sizes": [
      "99.5 x 73 x 66.5-82.5 cm (Birth up to 9kg)"
    ],
    "specifications": {
      "HeightLevels": "11 Adjustments",
      "Mattress": "Breathable 3D Mesh Included",
      "Origin": "Italy"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 2850000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "2 Years Chicco Official"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-baby-avent-pump",
    "slug": "philips-avent-premium-single-electric-breast-pump-rechargeable",
    "sku": "SVX-BBY-005",
    "categoryId": "cat-baby-products",
    "categorySlug": "baby-products",
    "subcategory": "Feeding & Nursing",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Philips Avent",
    "nameUz": "Elektr koʻkrak suti sogʻgichi Philips Avent Natural Motion (Akkumulyatorli, Qulay yostiqcha)",
    "nameRu": "Электронный молокоотсос Philips Avent Natural Motion с аккумулятором и массажной насадкой",
    "nameEn": "Philips Avent Single Electric Breast Pump with Natural Motion Technology & Rechargeable Battery",
    "descriptionUz": "Chaqaloqning tabiiy emish harakatlarini takrorlovchi Natural Motion texnologiyasi. Egilmasdan qulay oʻtirgan holda sut sogʻish imkoni.",
    "descriptionRu": "Быстрое сцеживание без наклона вперед. Мягкая силиконовая подушечка адаптируется под любую форму груди.",
    "descriptionEn": "Inspired by baby’s natural suckling: combines gentle suction and nipple stimulation for faster milk flow.",
    "priceUzs": 1650000,
    "oldPriceUzs": 2050000,
    "discountPercent": 20,
    "rating": 4.97,
    "reviewCount": 240,
    "soldCount": 890,
    "stock": 22,
    "images": [
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Soft Pearl White",
        "hex": "#F8FAFC"
      }
    ],
    "sizes": [
      "Rechargeable Portable Unit with 125ml Natural Bottle"
    ],
    "specifications": {
      "Settings": "8 Stimulation + 16 Expression Levels",
      "Battery": "Rechargeable Micro-USB",
      "BPAFree": "100% BPA Free"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 1650000,
        "deliveryEta": "90 mins Express",
        "rating": 4.94,
        "warranty": "2 Years Philips Guarantee"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-baby-stokke-chair",
    "slug": "stokke-tripp-trapp-adjustable-high-chair-natural-beech",
    "sku": "SVX-BBY-006",
    "categoryId": "cat-baby-products",
    "categorySlug": "baby-products",
    "subcategory": "Nursery & Baby Furniture",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Stokke",
    "nameUz": "Stokke Tripp Trapp koʻp yillik bolalar yogʻoch stuli (Kattalargacha oʻsadigan ergonomik stul)",
    "nameRu": "Растущий эргономичный детский стул Stokke Tripp Trapp из массива бука (Норвегия)",
    "nameEn": "Stokke Tripp Trapp Height-Adjustable Ergonomic High Chair (Natural European Beech Wood)",
    "descriptionUz": "Norvegiyaning afsonaviy oʻsuvchi stuli: bolalikdan voyaga yetguncha (136 kg gacha) oʻrindiq va oyoq tayanchini sozlash mumkin.",
    "descriptionRu": "Культовый скандинавский стул, растущий вместе с ребенком от полугода до взрослого возраста.",
    "descriptionEn": "The chair that grows with the child from birth to adulthood. Deep ergonomic adjustments bring baby right to dining table.",
    "priceUzs": 2950000,
    "oldPriceUzs": 3500000,
    "discountPercent": 16,
    "rating": 4.99,
    "reviewCount": 160,
    "soldCount": 540,
    "stock": 12,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Natural Beech",
        "hex": "#E2D9C8"
      },
      {
        "name": "Hazy Grey",
        "hex": "#6B7280"
      }
    ],
    "sizes": [
      "49 x 46 x 79 cm (Supports up to 136 kg)"
    ],
    "specifications": {
      "Material": "Cultivated European Solid Beech",
      "MaxWeight": "136 kg (300 lbs)",
      "Warranty": "7-Year Stokke Warranty"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 2950000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "7 Years Manufacturer Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-baby-tommee-tippee",
    "slug": "tommee-tippee-closer-to-nature-anti-colic-feeding-bottle-starter-set",
    "sku": "SVX-BBY-007",
    "categoryId": "cat-baby-products",
    "categorySlug": "baby-products",
    "subcategory": "Feeding & Nursing",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Tommee Tippee",
    "nameUz": "Tommee Tippee Closer to Nature yangi tugʻilgan chaqaloqlar uchun 6 ta butilka toʻplami",
    "nameRu": "Стартовый набор антиколиковых бутылочек Tommee Tippee Closer to Nature (6 предметов)",
    "nameEn": "Tommee Tippee Closer to Nature Anti-Colic Newborn Baby Feeding Bottle Starter Set (6-Pack)",
    "descriptionUz": "Ona koʻkragi kabi egiluvchan yumshoq silikon soʻrgʻich va chaqaloq qornida gaz yigʻilishiga yoʻl qoʻymaydigan antikolik klapan.",
    "descriptionRu": "Мягкая соска в форме материнской груди облегчает совмещение грудного и бутылочного вскармливания.",
    "descriptionEn": "Award-winning breast-like nipple for natural latch and seamless transition between breast and bottle feeding.",
    "priceUzs": 380000,
    "oldPriceUzs": 490000,
    "discountPercent": 22,
    "rating": 4.95,
    "reviewCount": 310,
    "soldCount": 1580,
    "stock": 50,
    "images": [
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Clear BPA-Free Polypropylene",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "Set: 2x 150ml, 2x 260ml, 1x Soother, 1x Brush"
    ],
    "specifications": {
      "Valves": "Sensitive Anti-Colic Valve",
      "Material": "100% BPA & Phthalate Free",
      "Age": "0m+ Newborn"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 380000,
        "deliveryEta": "90 mins Express",
        "rating": 4.91,
        "warranty": "100% Original UK Brand"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-baby-braun-thermo",
    "slug": "braun-thermoscan-7-age-precision-infrared-ear-thermometer-irt6520",
    "sku": "SVX-BBY-008",
    "categoryId": "cat-baby-products",
    "categorySlug": "baby-products",
    "subcategory": "Baby Health & Care",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Braun",
    "nameUz": "Bolalar infraqizil quloq termometri Braun ThermoScan 7 (Yoshga qarab tana harorati ekrani)",
    "nameRu": "Инфракрасный ушной термометр Braun ThermoScan 7 с технологией Age Precision IRT6520",
    "nameEn": "Braun ThermoScan 7 Age Precision Infrared Ear Thermometer (IRT6520 with Night Light)",
    "descriptionUz": "Shifokor-pediatrlar tomonidan eng koʻp tavsiya etiladigan termometr. 1 soniyada bolaning yoshiga qarab yashil/sariq/qizil rangda haroratni koʻrsatadi.",
    "descriptionRu": "Клинически доказанная точность №1 среди педиатров Европы. Измерение температуры за секунду с подогреваемым наконечником.",
    "descriptionEn": "The #1 ear thermometer brand among doctors: Age Precision guidance adjusts fever definitions to child age with color-coded display.",
    "priceUzs": 780000,
    "oldPriceUzs": 950000,
    "discountPercent": 18,
    "rating": 4.99,
    "reviewCount": 380,
    "soldCount": 1720,
    "stock": 35,
    "images": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Medical White / Teal",
        "hex": "#0D9488"
      }
    ],
    "sizes": [
      "Compact Handheld with 21 Lens Filters & Cradle"
    ],
    "specifications": {
      "Speed": "1-Second Instant Reading",
      "Technology": "Pre-Warmed Tip + ExacTemp Guidance",
      "Display": "Backlit Color LCD"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 780000,
        "deliveryEta": "90 mins Express",
        "rating": 4.94,
        "warranty": "2 Years Braun Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-baby-mustela-set",
    "slug": "mustela-bebe-gentle-cleansing-and-hydrating-skincare-5-piece-gift-set",
    "sku": "SVX-BBY-009",
    "categoryId": "cat-baby-products",
    "categorySlug": "baby-products",
    "subcategory": "Baby Health & Care",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Mustela",
    "nameUz": "Mustela Bébé yangi tugʻilgan chaqaloqlar parvarishi 5 qismli sovgʻa toʻplami (Fransiya)",
    "nameRu": "Подарочный набор детской гипоаллергенной косметики Mustela Bébé 5 предметов (Франция)",
    "nameEn": "Mustela Bébé Newborn Gentle Cleansing Gel & Hydrating Care 5-Piece Gift Set (Made in France)",
    "descriptionUz": "97% tabiiy organik avokado perseoz moddasi asosida tayyorlangan hipoallergen chaqaloq sovunlari, kremi va massaj yogʻi.",
    "descriptionRu": "Французская дерматологическая забота с первых дней жизни. Не щиплет глазки, питает и защищает нежную кожу.",
    "descriptionEn": "Formulated with organic Avocado Perseose to protect baby's delicate skin barrier from day one.",
    "priceUzs": 480000,
    "oldPriceUzs": 620000,
    "discountPercent": 23,
    "rating": 4.98,
    "reviewCount": 290,
    "soldCount": 1340,
    "stock": 45,
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Baby Blue / White",
        "hex": "#60A5FA"
      }
    ],
    "sizes": [
      "5 Items (Gel 500ml, Lotion 300ml, Barrier Cream 100ml, Oil 100ml, Bag)"
    ],
    "specifications": {
      "Origin": "Epernon, France",
      "Ingredients": "97% Natural Origin",
      "Hypoallergenic": "Dermatologist Tested"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 480000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "100% French Original"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-baby-babybjorn-bouncer",
    "slug": "babybjorn-bouncer-bliss-ergonomic-cotton-baby-bouncer-anthracite",
    "sku": "SVX-BBY-010",
    "categoryId": "cat-baby-products",
    "categorySlug": "baby-products",
    "subcategory": "Nursery & Baby Furniture",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "BabyBjörn",
    "nameUz": "Ergonomik chaqaloq shezlongi BabyBjörn Bouncer Bliss (Tabiiy paxta, Shvetsiya)",
    "nameRu": "Эргономичный детский шезлонг BabyBjörn Bouncer Bliss из мягкого хлопка (Швеция)",
    "nameEn": "BabyBjörn Bouncer Bliss Ergonomic Cotton Baby Bouncer (Anthracite, Natural Rocking)",
    "descriptionUz": "Batareyasiz, chaqaloqning oʻz harakati bilan sokin tebranadi. Bola boʻyni va umurtqasini toʻgʻri ushlab turadi, osongina buklanib yigʻiladi.",
    "descriptionRu": "Культовый шведский шезлонг с естественным покачиванием от движений малыша. Разработан совместно с педиатрами.",
    "descriptionEn": "Classic ergonomic bouncer where baby's own movements generate gentle rocking. No batteries, lightweight and folds flat for travel.",
    "priceUzs": 2450000,
    "oldPriceUzs": 2950000,
    "discountPercent": 17,
    "rating": 4.99,
    "reviewCount": 320,
    "soldCount": 1100,
    "stock": 18,
    "images": [
      "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Anthracite Cotton",
        "hex": "#374151"
      },
      {
        "name": "Dusty Pink",
        "hex": "#F472B6"
      }
    ],
    "sizes": [
      "Birth to 2 Years (3.5kg to 13kg)"
    ],
    "specifications": {
      "Fabric": "100% Oeko-Tex Certified Quilted Cotton",
      "Positions": "Play, Rest, Sleep & Transport",
      "Weight": "2.1 kg"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 2450000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "2 Years Official Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-baby-huggies-4",
    "slug": "huggies-extra-care-size-4-mega-box-132-diapers",
    "sku": "SVX-BBY-011",
    "categoryId": "cat-baby-products",
    "categorySlug": "baby-products",
    "subcategory": "Diapering & Potty",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Huggies",
    "nameUz": "Gigiyenik chaqaloq tagliklari Huggies Extra Care 4-oʻlcham (9-14 kg) 132 dona",
    "nameRu": "Подгузники детские Huggies Extra Care 4 (9-14 кг) мегабокс 132 шт",
    "nameEn": "Huggies Extra Care Size 4 (9-14kg) Breathable Hypoallergenic Diapers Mega Pack 132 Count",
    "descriptionUz": "Yumshoq 3D yostiqchalari bilan terini 12 soat quruq va himoyalangan saqlaydi. Nafas oluvchi mikrogʻovaklar qizarishga yoʻl qoʻymaydi.",
    "descriptionRu": "Мягкие дышащие подушечки мгновенно впитывают влагу, эластичный поясок предотвращает протекания со спинки.",
    "descriptionEn": "Crafted with soft absorbent pillows and an elasticated waistband designed to protect against back leaks for 12 hours.",
    "priceUzs": 285000,
    "oldPriceUzs": 360000,
    "discountPercent": 21,
    "rating": 4.96,
    "reviewCount": 450,
    "soldCount": 3100,
    "stock": 95,
    "images": [
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "White with Disney Motifs",
        "hex": "#F3F4F6"
      }
    ],
    "sizes": [
      "Size 4 (9-14 kg) 132 Diapers"
    ],
    "specifications": {
      "Protection": "12-Hour Dryness Guarantee",
      "Dermatological": "Hypoallergenic & Chlorine Free",
      "Indicator": "Wetness Line"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 285000,
        "deliveryEta": "90 mins Express",
        "rating": 4.91,
        "warranty": "100% Original Sealed Box"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-baby-activity-walker",
    "slug": "chicco-1-2-3-activity-walker-and-first-steps-push-toy",
    "sku": "SVX-BBY-012",
    "categoryId": "cat-baby-products",
    "categorySlug": "baby-products",
    "subcategory": "Baby Toys & Gear",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Chicco",
    "nameUz": "Chicco 1-2-3 interaktiv transformatsiyalanuvchi xodunok (Musiqiy oʻyin paneli bilan)",
    "nameRu": "Развивающий ходунок-трансформер Chicco 1-2-3 с музыкальной панелью (Италия)",
    "nameEn": "Chicco 1-2-3 Multi-Stage Interactive Baby Walker, Push Toy and Ride-On with Musical Lights",
    "descriptionUz": "6 oylikdan 3 yoshgacha xizmat qiladi: 1-bosqich klassik xodunok, 2-bosqich yurishni oʻrgatuvchi aravacha, 3-bosqich kichik skuter velosiped.",
    "descriptionRu": "Универсальный центр активности 3-в-1: безопасные ходунки, толкатель первых шагов и первая машинка-каталка.",
    "descriptionEn": "Grows with baby: starts as a walker from 6 months, transforms to first steps pusher at 9 months, and ride-on at 18 months.",
    "priceUzs": 1190000,
    "oldPriceUzs": 1450000,
    "discountPercent": 18,
    "rating": 4.94,
    "reviewCount": 180,
    "soldCount": 780,
    "stock": 20,
    "images": [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Silver White / Bright Orange",
        "hex": "#F97316"
      }
    ],
    "sizes": [
      "68 x 50 x 75 cm (Adjustable 2-Height)"
    ],
    "specifications": {
      "Stages": "Walker (6m+) / Push Along (9m+) / Ride-on (18m+)",
      "Audio": "Removable Interactive Lights & Melodies",
      "Safety": "6 Safety Stopper Pads"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 1190000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "1 Year Chicco Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-acc-apple-watch-s9",
    "slug": "apple-watch-series-9-45mm-gps-midnight-aluminum-sport-band",
    "sku": "SVX-ACC-006",
    "categoryId": "cat-accessories",
    "categorySlug": "accessories",
    "subcategory": "Smartwatches",
    "storeId": "store-malika-mobile",
    "sellerName": "Malika Smart Hub",
    "sellerRating": 4.88,
    "brand": "Apple",
    "nameUz": "Aqlli soat Apple Watch Series 9 45mm GPS (Midnight alyuminiy korpus, Sport tasma)",
    "nameRu": "Умные часы Apple Watch Series 9 45 мм GPS (Midnight алюминий, Спортивный ремешок)",
    "nameEn": "Apple Watch Series 9 45mm GPS (Midnight Aluminum Case with Midnight Sport Band)",
    "descriptionUz": "Kuchli S9 SiP chipi, teginmasdan boshqaruvchi Double Tap imo-ishorasi va 2000 nitgacha yorugʻ doimo yoqiq Retina displey.",
    "descriptionRu": "Новый процессор S9, удобный жест Double Tap без касания экрана и точный мониторинг пульса, кислорода и ЭКГ.",
    "descriptionEn": "Powered by the S9 chip, featuring Double Tap gesture control, precision finding for iPhone, and advanced health sensors.",
    "priceUzs": 5100000,
    "oldPriceUzs": 5800000,
    "discountPercent": 12,
    "rating": 4.98,
    "reviewCount": 390,
    "soldCount": 1620,
    "stock": 25,
    "images": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Midnight Dark Navy",
        "hex": "#0F172A"
      },
      {
        "name": "Starlight Silver",
        "hex": "#F1F5F9"
      }
    ],
    "sizes": [
      "45mm Aluminum Case"
    ],
    "specifications": {
      "Chip": "Apple S9 SiP 64-bit Dual Core",
      "Brightness": "Up to 2000 nits OLED",
      "WaterResistance": "50m Swimproof WR50"
    },
    "sellerOffers": [
      {
        "storeId": "store-malika-mobile",
        "sellerName": "Malika Smart Hub",
        "priceUzs": 5100000,
        "deliveryEta": "90 mins Express",
        "rating": 4.88,
        "warranty": "1 Year Apple Official"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-acc-rayban-aviator",
    "slug": "ray-ban-aviator-classic-rb3025-polarized-sunglasses-gold-green",
    "sku": "SVX-ACC-007",
    "categoryId": "cat-accessories",
    "categorySlug": "accessories",
    "subcategory": "Sunglasses & Eyewear",
    "storeId": "store-texnomart-pro",
    "sellerName": "TexnoPark Tashkent Official",
    "sellerRating": 4.94,
    "brand": "Ray-Ban",
    "nameUz": "Klassik quyoshdan himoyalovchi koʻzoynak Ray-Ban Aviator RB3025 Polarized (Oltin / Yashil G-15 shisha)",
    "nameRu": "Солнцезащитные поляризационные очки Ray-Ban Aviator Classic RB3025 (Золото / Зеленое стекло G-15)",
    "nameEn": "Ray-Ban Aviator Classic RB3025 Polarized Sunglasses (Polished Gold Frame / Green Classic G-15 Lens)",
    "descriptionUz": "1937 yildan beri aviaklassika: haqiqiy Italiya ishlab chiqarishi, 100% UV400 quyosh nuridan himoya va mineral qoraytirilgan shisha.",
    "descriptionRu": "Культовая модель очков-авиаторов с поляризационными минеральными линзами G-15 и легкой металлической оправой.",
    "descriptionEn": "Timeless tear-drop metal silhouette fitted with polarized crystal lenses blocking 99% of reflected light glare.",
    "priceUzs": 1850000,
    "oldPriceUzs": 2300000,
    "discountPercent": 20,
    "rating": 4.97,
    "reviewCount": 260,
    "soldCount": 940,
    "stock": 20,
    "images": [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Polished Gold / Crystal Green G-15",
        "hex": "#D97706"
      }
    ],
    "sizes": [
      "Standard 58mm Lens (Bridge 14mm, Temple 135mm)"
    ],
    "specifications": {
      "Frame": "Electroplated Stainless Steel",
      "Lens": "Polarized Crystal Glass (Category 3P)",
      "Origin": "Italy"
    },
    "sellerOffers": [
      {
        "storeId": "store-texnomart-pro",
        "sellerName": "TexnoPark Tashkent Official",
        "priceUzs": 1850000,
        "deliveryEta": "90 mins Express",
        "rating": 4.94,
        "warranty": "100% Luxottica Original Italy"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-acc-anker-737-powerbank",
    "slug": "anker-737-power-bank-powercore-24k-140w-fast-charging",
    "sku": "SVX-ACC-008",
    "categoryId": "cat-accessories",
    "categorySlug": "accessories",
    "subcategory": "Tech Accessories",
    "storeId": "store-malika-mobile",
    "sellerName": "Malika Smart Hub",
    "sellerRating": 4.88,
    "brand": "Anker",
    "nameUz": "Tezkor portativ zaryadlovchi Anker 737 Power Bank 24000mAh 140W (Smart rangli displey, PD 3.1)",
    "nameRu": "Внешний аккумулятор Anker 737 Power Bank 24000 мАч 140W (Цветной умный экран, PD 3.1)",
    "nameEn": "Anker 737 Power Bank (PowerCore 24K) 140W Two-Way Fast Charging with Smart Digital Display",
    "descriptionUz": "Eng kuchli noutbuk va telefonlarni toʻliq quvvatlovchi flagman powerbank. 140W oʻta tez quvvat uzatish va batareya holatini koʻrsatuvchi rangli ekran.",
    "descriptionRu": "Флагманский аккумулятор емкостью 24 000 мАч способный заряжать даже MacBook Pro 16\" на максимальной мощности 140 Вт.",
    "descriptionEn": "Equipped with Power Delivery 3.1 bidirectional tech to output up to 140W and an informative smart display showing power draw.",
    "priceUzs": 1450000,
    "oldPriceUzs": 1790000,
    "discountPercent": 19,
    "rating": 4.99,
    "reviewCount": 380,
    "soldCount": 1680,
    "stock": 35,
    "images": [
      "https://images.unsplash.com/photo-1609592424079-50c19e59329c?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Space Gray / Black",
        "hex": "#1E293B"
      }
    ],
    "sizes": [
      "24,000 mAh Capacity (15.5 x 5.5 x 5 cm)"
    ],
    "specifications": {
      "MaxOutput": "140W USB-C PD 3.1",
      "Ports": "2x USB-C (140W) + 1x USB-A (18W)",
      "Display": "Full Color Smart Screen"
    },
    "sellerOffers": [
      {
        "storeId": "store-malika-mobile",
        "sellerName": "Malika Smart Hub",
        "priceUzs": 1450000,
        "deliveryEta": "90 mins Express",
        "rating": 4.88,
        "warranty": "18 Months Anker Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-acc-samsonite-backpack",
    "slug": "samsonite-pro-dlx-6-premium-17-3-business-laptop-backpack",
    "sku": "SVX-ACC-009",
    "categoryId": "cat-accessories",
    "categorySlug": "accessories",
    "subcategory": "Leather Bags & Backpacks",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Samsonite",
    "nameUz": "Samsonite Pro-DLX 6 biznes erkaklar noutbuk ryukzaki 17.3\" (Haqiqiy charm detallar, RFID himoya)",
    "nameRu": "Бизнес-рюкзак для ноутбука 17.3\" Samsonite Pro-DLX 6 (Натуральная кожа, RFID защита)",
    "nameEn": "Samsonite Pro-DLX 6 Expandable 17.3\" Executive Laptop Backpack with RFID Pocket",
    "descriptionUz": "Samsonite kompaniyasining eng yetakchi biznes ryukzaki: ballistik neylon, yumshoq noutbuk boʻlmasi, chamadon tutqichiga ulanish va Easy Pass sim oʻtkazgich.",
    "descriptionRu": "Премиальный рюкзак для руководителей и командировок из баллистического нейлона с кожаными элементами.",
    "descriptionEn": "The flagship business collection crafted from armored nylon, featuring expandable capacity, TSA cable lock, and RFID protection.",
    "priceUzs": 2650000,
    "oldPriceUzs": 3200000,
    "discountPercent": 17,
    "rating": 4.97,
    "reviewCount": 145,
    "soldCount": 520,
    "stock": 15,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Executive Black",
        "hex": "#0B0F19"
      }
    ],
    "sizes": [
      "33 Litres Expandable (46 x 32 x 18 cm)"
    ],
    "specifications": {
      "Material": "Armored Ballistic Nylon & Nappa Leather",
      "LaptopSize": "Up to 17.3\" Screen",
      "Warranty": "5-Year Global Samsonite"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 2650000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "5 Years Global Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-acc-casio-casioak",
    "slug": "casio-g-shock-ga-2100-1a1-casioak-carbon-core-guard-all-black",
    "sku": "SVX-ACC-010",
    "categoryId": "cat-accessories",
    "categorySlug": "accessories",
    "subcategory": "Watches",
    "storeId": "store-malika-mobile",
    "sellerName": "Malika Smart Hub",
    "sellerRating": 4.88,
    "brand": "Casio",
    "nameUz": "Qoʻl soati Casio G-Shock GA-2100-1A1 \"CasiOak\" (Zarbalarga chidamli, 200m suvga chidamli)",
    "nameRu": "Ударопрочные японские часы Casio G-Shock GA-2100-1A1 CasiOak (All Black, 200m)",
    "nameEn": "Casio G-Shock GA-2100-1A1 \"CasiOak\" Carbon Core Guard Octagonal Watch (All Black)",
    "descriptionUz": "Sakkizburchakli afsonaviy korpus, uglerod tolali Carbon Core Guard mustahkamligi va 20 bar chuqurlikdagi suvga chidamlilik.",
    "descriptionRu": "Культовая модель в матовом черном исполнении с ультратонким корпусом 11.8 мм и карбоновой защитой модуля.",
    "descriptionEn": "The modern icon nicknamed CasiOak: combines vintage octagonal bezel with ultra-light carbon-reinforced resin casing.",
    "priceUzs": 1350000,
    "oldPriceUzs": 1650000,
    "discountPercent": 18,
    "rating": 4.99,
    "reviewCount": 520,
    "soldCount": 2400,
    "stock": 35,
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Matte Stealth All-Black",
        "hex": "#111827"
      }
    ],
    "sizes": [
      "48.5 x 45.4 x 11.8 mm (Weight: 51g)"
    ],
    "specifications": {
      "WaterResistance": "200 Meters (20 Bar)",
      "ShockResistance": "Carbon Core Guard",
      "Glass": "Mineral Crystal"
    },
    "sellerOffers": [
      {
        "storeId": "store-malika-mobile",
        "sellerName": "Malika Smart Hub",
        "priceUzs": 1350000,
        "deliveryEta": "90 mins Express",
        "rating": 4.88,
        "warranty": "2 Years Official Casio Warranty"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-acc-montblanc-pen",
    "slug": "montblanc-meisterstuck-classique-platinum-coated-ballpoint-pen",
    "sku": "SVX-ACC-011",
    "categoryId": "cat-accessories",
    "categorySlug": "accessories",
    "subcategory": "Stationery & Luxury Gifts",
    "storeId": "store-orient-home",
    "sellerName": "Orient Home & Comfort",
    "sellerRating": 4.91,
    "brand": "Montblanc",
    "nameUz": "Klassik sharikli ruchka Montblanc Meisterstück Classique (Platina qoplamali, Germaniya)",
    "nameRu": "Шариковая ручка Montblanc Meisterstück Classique с платиновым напылением (Германия)",
    "nameEn": "Montblanc Meisterstück Classique Platinum-Coated Ballpoint Pen (Precious Black Resin)",
    "descriptionUz": "Muvaffaqiyat va nafosat timsoli: qora qimmatbaho qatron, platina suvi yuritilgan metall detallar va oq qor choʻqqisi logotipi.",
    "descriptionRu": "Символ высокого статуса и безупречного вкуса: глубокая черная драгоценная смола с платиновым покрытием зажима.",
    "descriptionEn": "An icon of writing culture crafted in deep black precious resin with platinum-coated clip and individual serial number.",
    "priceUzs": 3800000,
    "oldPriceUzs": 4500000,
    "discountPercent": 16,
    "rating": 4.99,
    "reviewCount": 110,
    "soldCount": 390,
    "stock": 12,
    "images": [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Precious Black / Platinum",
        "hex": "#111827"
      }
    ],
    "sizes": [
      "Length: 137.1 mm, Weight: 23g"
    ],
    "specifications": {
      "Barrel": "Black Precious Resin",
      "Clip": "Platinum-Coated with Individual Serial",
      "Origin": "Hamburg, Germany"
    },
    "sellerOffers": [
      {
        "storeId": "store-orient-home",
        "sellerName": "Orient Home & Comfort",
        "priceUzs": 3800000,
        "deliveryEta": "Same-Day Delivery",
        "rating": 4.91,
        "warranty": "Official Montblanc Certificate & Box"
      }
    ],
    "approvalStatus": "approved"
  },

  {
    "id": "prod-acc-silver-bracelet",
    "slug": "italian-925-sterling-silver-cuban-curb-chain-bracelet-21cm",
    "sku": "SVX-ACC-012",
    "categoryId": "cat-accessories",
    "categorySlug": "accessories",
    "subcategory": "Jewelry & Watches",
    "storeId": "store-samarkand-bazaar",
    "sellerName": "Samarkand Silk & Crafts House",
    "sellerRating": 4.97,
    "brand": "Argento Italia",
    "nameUz": "925 probali Italiya kumush erkaklar bilaguzugi (Kuba zanjiri, 21 sm, 18 gramm)",
    "nameRu": "Мужской браслет из итальянского серебра 925 пробы (Плетение панцирное/кубинское, 21 см)",
    "nameEn": "Italian 925 Sterling Silver Cuban Curb Link Bracelet (21cm Length, 7mm Width, 18g)",
    "descriptionUz": "Arezzo (Italiya) shahrida quyilgan original 925 probali kumush. Yaltiroq olmosli qirralash, qorayishdan asrovchi rodiy qoplama va mustahkam qulf.",
    "descriptionRu": "Настоящее итальянское серебро 925 пробы с родиевым антикоррозийным покрытием и надежным карабином.",
    "descriptionEn": "Expertly crafted in Italy from solid 925 sterling silver with diamond-cut bevelled edges and protective rhodium finish.",
    "priceUzs": 680000,
    "oldPriceUzs": 890000,
    "discountPercent": 24,
    "rating": 4.96,
    "reviewCount": 220,
    "soldCount": 880,
    "stock": 30,
    "images": [
      "https://images.unsplash.com/photo-1611591475879-1582e66657c9?auto=format&fit=crop&w=900&q=80"
    ],
    "colors": [
      {
        "name": "Polished Rhodium Silver",
        "hex": "#E2E8F0"
      }
    ],
    "sizes": [
      "Length: 21 cm (Width: 7 mm, Weight: 18.2g)"
    ],
    "specifications": {
      "Metal": "100% Solid 925 Sterling Silver",
      "Clasp": "Heavy-Duty Lobster Claw",
      "Hallmarking": "925 Italy Stamped"
    },
    "sellerOffers": [
      {
        "storeId": "store-samarkand-bazaar",
        "sellerName": "Samarkand Silk & Crafts House",
        "priceUzs": 680000,
        "deliveryEta": "90 mins Express",
        "rating": 4.97,
        "warranty": "Certificate of Authenticity"
      }
    ],
    "approvalStatus": "approved"
  },
];
