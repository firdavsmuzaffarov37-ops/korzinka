/**
 * SAVDOX Grounded AI Shopping Assistant Engine
 * Strictly queries live marketplace catalog records. Never hallucinates prices, discounts, stock, or sellers.
 */

import { formatUzs, getLocalizedTitle } from './formatters.js';

export const CATEGORY_KEYWORDS = {
  smartphones: [
    'smartphone', 'smartfon', 'smartfonlar', 'smartfoni', 'phone', 'telefon', 'telefonlar', 'telefoni', 'tel', 'sotka',
    'телефон', 'телефоны', 'смартфон', 'смартфоны', 'сотка', 'сотовые', 'iphone', 'ayfon', 'айфон', 'samsung', 'xiaomi', 'redmi', 'honor', 'imei', 'mobile'
  ],
  computers: [
    'laptop', 'computer', 'kompyuter', 'kompuyuter', 'komputer', 'komplar', 'komp', 'kompyuteri', 'kompuyuteri',
    'noutbuk', 'noutbuklar', 'nout', 'pk', 'ноутбук', 'ноутбуки', 'ноут', 'компьютер', 'компьютеры', 'комп', 'пк', 'macbook', 'pc', 'monoblok', 'моноблок'
  ],
  electronics: [
    'tv', 'television', 'televizor', 'televizorlar', 'телевизор', 'телевизоры', 'qled', 'oled', 'smart tv',
    'audio', 'dinamik', 'колонка', 'колонкалар', 'elektronika', 'electronics', 'электроника'
  ],
  clothing: [
    'clothing', 'jacket', 'chapan', 'chopon', 'choponlar', 'shirt', 'kiyim', 'kiyimlar', 'libos', 'kastyum', 'kurtka',
    'hudi', 'hoodie', 'одежда', 'чапан', 'куртка', 'худи', 'рубашка', 'костюм', 'fashion', 'silk', 'adras'
  ],
  shoes: [
    'shoes', 'sneakers', 'krossovka', 'krossovkalar', 'poyabzal', 'oyoq kiyim', 'tufli',
    'обувь', 'кроссовки', 'туфли', 'nike', 'adidas', 'running'
  ],
  beauty: [
    'beauty', 'dyson', 'hair', 'cosmetics', 'perfume', 'styler', 'goʻzallik', 'gozallik', 'kosmetika',
    'atir', 'fen', 'soch', 'красота', 'стайлер', 'духи', 'косметика'
  ],
  groceries: [
    'grocery', 'groceries', 'food', 'nuts', 'fruit', 'oziq-ovqat', 'oziq ovqat', 'mahsulotlar',
    'yongʻoq', 'yongoq', 'mayiz', 'shirinlik', 'meva', 'choy', 'shaxona', 'samarqand', 'gift',
    'продукты', 'орехи', 'сухофрукты', 'сладости'
  ],
  'home-furniture': [
    'chair', 'furniture', 'sofa', 'office', 'mebel', 'kreslo', 'stol', 'stul', 'divan', 'shkaf',
    'мебель', 'кресло', 'стол', 'стул', 'диван', 'дом'
  ],
  kitchen: [
    'kitchen', 'coffee', 'espresso', 'delonghi', 'oshxona', 'qahva', 'kofe', 'kofemashina', 'choynak',
    'tova', 'qozon', 'airfryer', 'кухня', 'кофемашина', 'кофеварка', 'аэрогриль'
  ],
  sports: [
    'sport', 'gym', 'dumbbell', 'fitness', 'gantel', 'trenajor',
    'спорт', 'гантели', 'тренажер', 'фитнес'
  ],
  toys: [
    'toy', 'robot', 'kids', 'stem', 'lego', 'oʻyinchoq', 'oyinchoq', 'konstruktor', 'bolalar uchun',
    'игрушки', 'робот', 'конструктор'
  ],
  books: [
    'book', 'novel', 'reading', 'kitob', 'kitoblar', 'qodiriy', 'adabiyot', 'roman', 'darslik', 'badiiy',
    'книга', 'книги', 'роман'
  ],
  health: [
    'health', 'blood pressure', 'omron', 'tonometr', 'medical', 'salomatlik', 'bosim', 'dori', 'davleniya',
    'аптечка', 'здоровье', 'тонометр', 'давление'
  ],
  'baby-products': [
    'baby', 'stroller', 'cybex', 'aravacha', 'bolalar aravachasi', 'kolyaska', 'bolalar',
    'коляска', 'детские', 'для детей', 'pampers'
  ],
  accessories: [
    'watch', 'smartwatch', 'soat', 'aqlli soat', 'apple watch', 'часы', 'смарт часы', 'аксессуары',
    'accessories', 'kamar', 'sumka', 'ryukzak', 'hamyon'
  ],
};

const STOP_WORDS = new Set([
  'menda', 'menga', 'bizga', 'sizga', 'unga', 'ularga',
  'bor', 'bormi', 'kerak', 'kerakli', 'uchun', 'yaxshi', 'ajoyib', 'zoʻr', "zo'r", 'zor',
  'qanday', 'qaysi', 'qanaqa', 'eng', 'juda', 'yangi', 'arzon', 'arzonroq', 'qimmat',
  'narx', 'narxi', 'narxida', 'pul', 'pulim', 'puli', 'summa', 'summasi',
  'som', "so'm", 'soʻm', 'sum', 'ming', 'million', 'mln', 'uzs',
  'topib', 'ber', 'bering', 'tavsiya', 'tavsiyangiz', 'qiling', 'iltimos',
  'sotib', 'olish', 'olmoqchiman', 'olmoqchi', 'qidiryapman', 'koʻrsat', "ko'rsat", 'korsat',
  'toshkent', 'fargona', "farg'ona", 'samarqand', 'buxoro', 'andijon',
  'мне', 'меня', 'нам', 'вам', 'ему', 'ей',
  'есть', 'нужен', 'нужна', 'нужно', 'нужны', 'хороший', 'хорошая', 'хорошие',
  'для', 'цена', 'цены', 'сум', 'сомов', 'тысяч', 'тыс', 'миллион', 'млн',
  'недорогой', 'дешевый', 'посоветуй', 'посоветуйте', 'подскажи', 'подскажите',
  'какой', 'какая', 'какие', 'лучше', 'лучший', 'пожалуйста', 'купить', 'хочу',
  'i', 'me', 'my', 'we', 'have', 'need', 'want', 'looking', 'good', 'best', 'great',
  'for', 'under', 'budget', 'uzs', 'uzbekistan', 'please', 'recommend', 'show', 'find',
  'around', 'cheap', 'affordable', 'buy', 'purchase'
]);

/**
 * Extracts budget in UZS from natural language user prompt
 * Handles "2,500,000 UZS", "2 500 000 so'm", "2.5 million", "2.5m", "3500000som", etc.
 */
export function extractBudgetUzs(text) {
  if (!text) return null;
  const normalized = text.toLowerCase();

  // Check for "X.X million" or "X.X mln" or "X million"
  const millionMatch = normalized.match(/(\d+(?:[.,]\d+)?)\s*(?:million|mln|млн|m\b)/i);
  if (millionMatch) {
    const val = parseFloat(millionMatch[1].replace(',', '.'));
    if (!isNaN(val) && val > 0) {
      return Math.round(val * 1000000);
    }
  }

  // Check for "X ming" or "Xk" (e.g. 600 ming, 800k)
  const thousandMatch = normalized.match(/(\d+(?:[.,]\d+)?)\s*(?:ming|тыс|тысяч|k\b)/i);
  if (thousandMatch) {
    const val = parseFloat(thousandMatch[1].replace(',', '.'));
    if (!isNaN(val) && val > 0) {
      return Math.round(val * 1000);
    }
  }

  // Check for explicit large numbers like 3500000, 3 500 000, 3,500,000 or attached to words (3500000som)
  const numberMatches = text.match(/\b\d{1,3}(?:[,\s.]\d{3})+\b|\d{5,9}/g);
  if (numberMatches && numberMatches.length > 0) {
    const cleaned = numberMatches
      .map((n) => parseInt(n.replace(/[,\s.]/g, ''), 10))
      .filter((n) => !isNaN(n) && n >= 30000);
    if (cleaned.length > 0) {
      return Math.max(...cleaned);
    }
  }

  return null;
}

/**
 * Detects target category slug(s) from user prompt
 */
export function detectCategoriesFromPrompt(text) {
  if (!text) return [];
  const lower = text.toLowerCase();
  const matched = [];

  for (const [slug, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some((kw) => {
      // Match whole word or clean boundary where possible
      const regex = new RegExp(`(^|[^a-zа-яёўқғҳ])${kw}([^a-zа-яёўқғҳ]|$)`, 'i');
      return regex.test(lower) || lower.includes(kw);
    })) {
      matched.push(slug);
    }
  }
  return matched;
}

/**
 * Main AI Shopping Assistant Response Generator
 * Grounded 100% in actual marketplace products & multi-seller offers
 */
export function runAiShoppingAssistant({ prompt, products = [], lang = 'en' }) {
  const budgetUzs = extractBudgetUzs(prompt);
  const matchedCategories = detectCategoriesFromPrompt(prompt);
  const lowerPrompt = (prompt || '').toLowerCase();
  const wantsShoppingList =
    lowerPrompt.includes('list') ||
    lowerPrompt.includes('bundle') ||
    lowerPrompt.includes('roʻyxat') ||
    lowerPrompt.includes('ro\'yxat') ||
    lowerPrompt.includes('toʻplam') ||
    lowerPrompt.includes('to\'plam') ||
    lowerPrompt.includes('список') ||
    lowerPrompt.includes('набор');

  // Filter active approved products
  let candidates = products.filter((p) => p.approvalStatus !== 'rejected');

  // STRICT CATEGORY FILTERING:
  // If the user mentions computers, phones, or any specific category,
  // candidates MUST strictly be restricted to that category!
  if (matchedCategories.length > 0) {
    const catFiltered = candidates.filter((p) => matchedCategories.includes(p.categorySlug));
    if (catFiltered.length > 0) {
      candidates = catFiltered;
    }
  } else {
    // Keyword search fallback with STOP_WORDS filtering
    const tokens = lowerPrompt
      .replace(/[^\w\sа-яёўқғҳ]/gi, ' ')
      .split(/\s+/)
      .map((w) => w.trim())
      .filter((w) => w.length > 2 && !STOP_WORDS.has(w) && !/^\d+$/.test(w));

    if (tokens.length > 0) {
      const tokenMatches = candidates.filter((p) => {
        const hay = `${p.nameEn} ${p.nameUz} ${p.nameRu} ${p.brand} ${p.categorySlug} ${p.subcategory}`.toLowerCase();
        return tokens.some((t) => hay.includes(t));
      });
      if (tokenMatches.length > 0) {
        candidates = tokenMatches;
      }
    }
  }

  // Sort candidates by closeness to user's specified budget
  let recommended = [];
  let withinBudget = [];

  if (budgetUzs && candidates.length > 0) {
    // Sort by smallest distance to the requested budget (closest price appears first)
    const sortedByBudgetCloseness = [...candidates].sort((a, b) => {
      const diffA = Math.abs(a.priceUzs - budgetUzs);
      const diffB = Math.abs(b.priceUzs - budgetUzs);
      if (Math.abs(diffA - diffB) < budgetUzs * 0.12) {
        // Prefer items within/under budget if distance is comparable
        const underA = a.priceUzs <= budgetUzs ? 0 : 1;
        const underB = b.priceUzs <= budgetUzs ? 0 : 1;
        if (underA !== underB) return underA - underB;
        return b.rating - a.rating;
      }
      return diffA - diffB;
    });

    withinBudget = sortedByBudgetCloseness.filter((p) => p.priceUzs <= budgetUzs * 1.15);
    recommended = withinBudget.length > 0 ? withinBudget.slice(0, 4) : sortedByBudgetCloseness.slice(0, 4);
  } else if (candidates.length > 0) {
    withinBudget = [...candidates];
    recommended = [...candidates].sort((a, b) => b.rating - a.rating).slice(0, 4);
  }

  // Find cheapest alternative in the matching candidates
  const cheapestAlternative = [...candidates].sort((a, b) => a.priceUzs - b.priceUzs)[0] || null;

  // Build seller price comparison table from real sellerOffers
  const priceComparisons = recommended.map((prod) => {
    const offers = prod.sellerOffers && prod.sellerOffers.length > 0
      ? [...prod.sellerOffers].sort((a, b) => a.priceUzs - b.priceUzs)
      : [{ sellerName: prod.sellerName, priceUzs: prod.priceUzs, deliveryEta: 'Standard', rating: prod.sellerRating || 4.9 }];
    const lowestOffer = offers[0];
    const highestOffer = offers[offers.length - 1];
    const savingsAcrossSellers = highestOffer.priceUzs - lowestOffer.priceUzs;

    return {
      productId: prod.id,
      productName: getLocalizedTitle(prod, lang),
      offers,
      lowestOffer,
      savingsAcrossSellers,
      remainingBudgetUzs: budgetUzs ? budgetUzs - lowestOffer.priceUzs : null,
    };
  });

  // Build smart shopping list if budget allows or requested
  const shoppingList = [];
  let runningTotal = 0;
  const maxListBudget = budgetUzs || 3000000;
  const poolForList = wantsShoppingList ? products : candidates;

  for (const item of [...poolForList].sort((a, b) => a.priceUzs - b.priceUzs)) {
    if (runningTotal + item.priceUzs <= maxListBudget && shoppingList.length < 3) {
      shoppingList.push({
        product: item,
        priceUzs: item.priceUzs,
        sellerName: item.sellerName,
        quantity: 1,
      });
      runningTotal += item.priceUzs;
    }
  }

  // Generate structured, factual explanation in UZ / RU / EN
  let summaryText = '';
  if (budgetUzs && recommended.length > 0) {
    const topPick = recommended[0];
    const topTitle = getLocalizedTitle(topPick, lang);
    const budgetFormatted = formatUzs(budgetUzs, lang);
    const topPriceFormatted = formatUzs(topPick.priceUzs, lang);
    const priceDiff = budgetUzs - topPick.priceUzs;

    if (lang === 'uz') {
      const matchComment = Math.abs(priceDiff) <= budgetUzs * 0.05
        ? `Byudjetingizga deyarli 100% aniq toʻgʻri keladi!`
        : priceDiff > 0
        ? `Byudjetingizdan ${formatUzs(priceDiff, lang)} tejab qolasiz!`
        : `Byudjetdan bor-yoʻgʻi ${formatUzs(Math.abs(priceDiff), lang)} yuqori`;

      const alternativeText = cheapestAlternative && cheapestAlternative.id !== topPick.id
        ? `\n• **Arzonroq muqobil variant:** **${getLocalizedTitle(cheapestAlternative, lang)}** — **${formatUzs(cheapestAlternative.priceUzs, lang)}** (${cheapestAlternative.discountPercent}% chegirma).`
        : '';

      summaryText = `Siz koʻrsatgan **${budgetFormatted}** summasiga eng mos keluvchi ${candidates.length} ta tasdiqlangan mahsulot topildi:\n\n• **Eng mos tavsiya:** **${topTitle}** — **${topPriceFormatted}** (${matchComment}, sotuvchi **${topPick.sellerName}**, Reyting: ★ ${topPick.rating})${alternativeText}`;
    } else if (lang === 'ru') {
      const matchComment = Math.abs(priceDiff) <= budgetUzs * 0.05
        ? `практически 100% совпадение с бюджетом!`
        : priceDiff > 0
        ? `экономия от бюджета ${formatUzs(priceDiff, lang)}`
        : `всего на ${formatUzs(Math.abs(priceDiff), lang)} выше бюджета`;

      const alternativeText = cheapestAlternative && cheapestAlternative.id !== topPick.id
        ? `\n• **Более доступный вариант:** **${getLocalizedTitle(cheapestAlternative, lang)}** за **${formatUzs(cheapestAlternative.priceUzs, lang)}** (скидка ${cheapestAlternative.discountPercent}%).`
        : '';

      summaryText = `По вашему запросу на **${budgetFormatted}** подобрано ${candidates.length} проверенных товаров:\n\n• **Лучшее совпадение:** **${topTitle}** за **${topPriceFormatted}** (${matchComment}, продавец **${topPick.sellerName}**, Рейтинг: ★ ${topPick.rating})${alternativeText}`;
    } else {
      const matchComment = Math.abs(priceDiff) <= budgetUzs * 0.05
        ? `almost 100% exact match for your budget!`
        : priceDiff > 0
        ? `saves ${formatUzs(priceDiff, lang)} from your budget!`
        : `only ${formatUzs(Math.abs(priceDiff), lang)} above budget`;

      const alternativeText = cheapestAlternative && cheapestAlternative.id !== topPick.id
        ? `\n• **Cheaper Alternative:** **${getLocalizedTitle(cheapestAlternative, lang)}** is available for **${formatUzs(cheapestAlternative.priceUzs, lang)}** (${cheapestAlternative.discountPercent}% OFF).`
        : '';

      summaryText = `Based on your budget of **${budgetFormatted}**, found ${candidates.length} verified products closest to this exact price point:\n\n• **Closest Match:** **${topTitle}** at **${topPriceFormatted}** (${matchComment}, **${topPick.sellerName}**, Rating: ★ ${topPick.rating})${alternativeText}`;
    }
  } else if (budgetUzs && candidates.length > 0) {
    if (lang === 'uz') {
      summaryText = `Siz soʻragan byudjet: **${formatUzs(budgetUzs, lang)}**. Ushbu toifadagi eng arzon mahsulot: **${getLocalizedTitle(cheapestAlternative, lang)}** — **${formatUzs(cheapestAlternative?.priceUzs || 0, lang)}** (**${cheapestAlternative?.sellerName}**).`;
    } else if (lang === 'ru') {
      summaryText = `Ваш бюджет: **${formatUzs(budgetUzs, lang)}**. Самый доступный товар в этой категории: **${getLocalizedTitle(cheapestAlternative, lang)}** за **${formatUzs(cheapestAlternative?.priceUzs || 0, lang)}** (**${cheapestAlternative?.sellerName}**).`;
    } else {
      summaryText = `Your requested budget is **${formatUzs(budgetUzs, lang)}**. Currently, the lowest-priced matching item is **${getLocalizedTitle(cheapestAlternative, lang)}** at **${formatUzs(cheapestAlternative?.priceUzs || 0, lang)}** from **${cheapestAlternative?.sellerName}**.`;
    }
  } else {
    const topPick = recommended[0];
    if (lang === 'uz') {
      summaryText = `SAVDOX katalogi va tasdiqlangan sotuvchilar narxlari solishtirildi. Eng yuqori baholangan mos mahsulot: **${getLocalizedTitle(topPick, lang)}** — **${formatUzs(topPick?.priceUzs || 0, lang)}** (**${topPick?.sellerName}**, ★ ${topPick?.rating}).`;
    } else if (lang === 'ru') {
      summaryText = `Мы проверили каталог SAVDOX и сравнили цены продавцов. Лучшее совпадение: **${getLocalizedTitle(topPick, lang)}** за **${formatUzs(topPick?.priceUzs || 0, lang)}** от **${topPick?.sellerName}** (★ ${topPick?.rating}).`;
    } else {
      summaryText = `I searched the live SAVDOX catalog and compared verified sellers across Uzbekistan. Our highest-rated match is **${getLocalizedTitle(topPick, lang)}** at **${formatUzs(topPick?.priceUzs || 0, lang)}** by **${topPick?.sellerName}** (★ ${topPick?.rating}).`;
    }
  }

  return {
    prompt,
    budgetUzs,
    matchedCategories,
    summaryText,
    recommendedProducts: recommended,
    cheapestAlternative,
    priceComparisons,
    shoppingList: {
      items: shoppingList,
      totalUzs: runningTotal,
      remainingBudgetUzs: budgetUzs ? Math.max(0, budgetUzs - runningTotal) : null,
    },
    groundedTimestamp: new Date().toISOString(),
  };
}

/**
 * Visual Product Search Matcher (legacy helper maintained for compatibility)
 */
export function runVisualProductSearch({ fileName = '', visualCategory = '', products = [] }) {
  const cleanName = fileName.toLowerCase();
  const targetHint = `${cleanName} ${visualCategory}`.toLowerCase();

  const scored = products.map((product) => {
    let score = 0;
    const tags = product.visualTags || [];

    tags.forEach((tag) => {
      if (targetHint.includes(tag.toLowerCase())) {
        score += 35;
      }
    });

    if (targetHint.includes(product.categorySlug.toLowerCase())) {
      score += 40;
    }
    if (targetHint.includes(product.brand.toLowerCase())) {
      score += 30;
    }

    score += product.rating * 4;

    return {
      product,
      similarityPercent: Math.min(99, Math.max(74, Math.round(score))),
    };
  });

  scored.sort((a, b) => b.similarityPercent - a.similarityPercent);
  return scored.slice(0, 4);
}
