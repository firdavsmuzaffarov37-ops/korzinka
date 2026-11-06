/**
 * SAVDOX Shared Formatting & Localization Helpers
 */

export function formatUzs(amount, lang = 'en') {
  const num = Number(amount) || 0;
  const formatted = num.toLocaleString('en-US');
  if (lang === 'uz') return `${formatted} soʻm`;
  if (lang === 'ru') return `${formatted} сум`;
  return `${formatted} UZS`;
}

export function getLocalizedTitle(item, lang = 'en') {
  if (!item) return '';
  if (lang === 'uz' && item.nameUz) return item.nameUz;
  if (lang === 'ru' && item.nameRu) return item.nameRu;
  return item.nameEn || item.name || item.titleEn || '';
}

export function getLocalizedDescription(item, lang = 'en') {
  if (!item) return '';
  if (lang === 'uz' && item.descriptionUz) return item.descriptionUz;
  if (lang === 'ru' && item.descriptionRu) return item.descriptionRu;
  return item.descriptionEn || item.description || '';
}

export function calculateInstallmentUzs(priceUzs, months = 6) {
  const num = Number(priceUzs) || 0;
  return Math.round(num / months);
}

export const COLOR_TRANSLATIONS = {
  'Midnight Black': { uz: 'Tungi qora', ru: 'Глубокий чёрный', en: 'Midnight Black' },
  'Mint Green': { uz: 'Yalpiz yashil', ru: 'Мятно-зеленый', en: 'Mint Green' },
  'Ice Blue': { uz: 'Muzdek koʻk', ru: 'Ледяной синий', en: 'Ice Blue' },
  'Titanium Gray': { uz: 'Titan kulrang', ru: 'Титановый серый', en: 'Titanium Gray' },
  'Obsidian Black': { uz: 'Obsidian qora', ru: 'Обсидиановый черный', en: 'Obsidian Black' },
  'Emerald Green': { uz: 'Zumrad yashil', ru: 'Изумрудно-зеленый', en: 'Emerald Green' },
  'Silver White': { uz: 'Kumushrang oq', ru: 'Серебристо-белый', en: 'Silver White' },
  'Deep Navy': { uz: 'Toʻq koʻk', ru: 'Темно-синий', en: 'Deep Navy' },
  'Space Gray': { uz: 'Kosmik kulrang', ru: 'Серый космос', en: 'Space Gray' },
  'Starlight': { uz: 'Yulduz nuri', ru: 'Сияющая звезда', en: 'Starlight' },
  'Midnight': { uz: 'Tungi qorongʻu', ru: 'Темная ночь', en: 'Midnight' },
  'Natural Titanium': { uz: 'Tabiiy titan', ru: 'Натуральный титан', en: 'Natural Titanium' },
  'Black Titanium': { uz: 'Qora titan', ru: 'Черный титан', en: 'Black Titanium' },
  'White Titanium': { uz: 'Oq titan', ru: 'Белый титан', en: 'White Titanium' },
  'Desert Titanium': { uz: 'Sahro titani', ru: 'Пустынный титан', en: 'Desert Titanium' },
  'Carved Cedar Box': { uz: 'Oʻymakor sadr quti', ru: 'Резная шкатулка из кедра', en: 'Carved Cedar Box' },
  'Traditional Craft Gift Bag': { uz: 'Milliy hunarmandchilik sovgʻa xaltasi', ru: 'Подарочный крафтовый мешок', en: 'Traditional Craft Gift Bag' },
  'Classic Black': { uz: 'Klassik qora', ru: 'Классический черный', en: 'Classic Black' },
  'Arctic White': { uz: 'Arktika oq', ru: 'Арктический белый', en: 'Arctic White' },
  'Burgundy Red': { uz: 'Toʻq qizil (Burgundiya)', ru: 'Бордовый', en: 'Burgundy Red' },
  'Graphite': { uz: 'Grafit', ru: 'Графит', en: 'Graphite' },
  'Gold': { uz: 'Tilla rang', ru: 'Золотистый', en: 'Gold' },
  'Silver': { uz: 'Kumushrang', ru: 'Серебристый', en: 'Silver' },
  'Default': { uz: 'Standart', ru: 'Стандартный', en: 'Default' },
};

export const SPEC_LABELS = {
  'Display': { uz: 'Displey / Ekran', ru: 'Дисплей / Экран', en: 'Display' },
  'Processor': { uz: 'Protsessor', ru: 'Процессор', en: 'Processor' },
  'Camera': { uz: 'Kamera tizimi', ru: 'Система камер', en: 'Camera System' },
  'Battery': { uz: 'Akkumulyator quvvati', ru: 'Емкость аккумулятора', en: 'Battery' },
  'IMEI': { uz: 'UZIMEI holati', ru: 'Статус UZIMEI', en: 'IMEI Status' },
  'Warranty': { uz: 'Rasmiy kafolat', ru: 'Официальная гарантия', en: 'Warranty' },
  'Storage': { uz: 'Doimiy xotira (ROM)', ru: 'Встроенная память', en: 'Storage' },
  'RAM': { uz: 'Tezkor xotira (RAM)', ru: 'Оперативная память', en: 'RAM' },
  'OS': { uz: 'Operatsion tizim', ru: 'Операционная система', en: 'Operating System' },
  'Weight': { uz: 'Ogʻirligi', ru: 'Вес', en: 'Weight' },
  'Material': { uz: 'Materiali', ru: 'Материал', en: 'Material' },
  'Wireless': { uz: 'Simsiz ulanish', ru: 'Беспроводная связь', en: 'Wireless' },
  'Sound': { uz: 'Ovoz tizimi', ru: 'Аудиосистема', en: 'Sound System' },
  'Connectivity': { uz: 'Portlar va ulanish', ru: 'Интерфейсы подключения', en: 'Connectivity' },
};

export function getLocalizedColor(colorName, lang = 'en') {
  if (!colorName) return '';
  const match = COLOR_TRANSLATIONS[colorName];
  if (match && match[lang]) return match[lang];
  return colorName;
}

export function getLocalizedSpecLabel(key, lang = 'en') {
  if (!key) return '';
  const match = SPEC_LABELS[key];
  if (match && match[lang]) return match[lang];
  return key;
}

export function getLocalizedDeliveryEta(eta, lang = 'en') {
  if (!eta) return '';
  const lower = eta.toLowerCase();
  if (lower.includes('90 min') || lower.includes('express')) {
    if (lang === 'uz') return '90 daqiqada Tezkor';
    if (lang === 'ru') return 'Экспресс за 90 минут';
    return '90 mins Express';
  }
  if (lower.includes('same-day') || lower.includes('today')) {
    if (lang === 'uz') return 'Bugun yetkazib berish';
    if (lang === 'ru') return 'Доставка сегодня';
    return 'Same-Day Courier';
  }
  if (lower.includes('tomorrow')) {
    if (lang === 'uz') return 'Ertaga yetkazib berish';
    if (lang === 'ru') return 'Доставка завтра';
    return 'Tomorrow';
  }
  if (lower.includes('standard')) {
    if (lang === 'uz') return 'Standart (1-2 kun)';
    if (lang === 'ru') return 'Стандарт (1-2 дня)';
    return 'Standard';
  }
  return eta;
}

export function getLocalizedWarranty(warranty, lang = 'en') {
  if (!warranty) return '';
  const lower = warranty.toLowerCase();
  if (lower.includes('1 year') || lower.includes('12 month')) {
    if (lang === 'uz') return '1 yil rasmiy kafolat';
    if (lang === 'ru') return '1 год официальной гарантии';
    return '1 Year Official Warranty';
  }
  if (lower.includes('2 year')) {
    if (lang === 'uz') return '2 yil rasmiy kafolat';
    if (lang === 'ru') return '2 года официальной гарантии';
    return '2 Years Official Warranty';
  }
  if (lower.includes('6 month')) {
    if (lang === 'uz') return '6 oy kafolat';
    if (lang === 'ru') return '6 месяцев гарантии';
    return '6 Months Warranty';
  }
  return warranty;
}


