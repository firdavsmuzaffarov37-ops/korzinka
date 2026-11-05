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

