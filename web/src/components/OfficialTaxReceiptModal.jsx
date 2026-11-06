import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Printer, Download, X, CheckCircle2, ShieldCheck, QrCode } from 'lucide-react';
import { formatUzs } from '@shared/utils/formatters';

export default function OfficialTaxReceiptModal({ isOpen, onClose, order, lang = 'uz' }) {
  if (!isOpen || !order) return null;

  const total = order.totalUzs || 0;
  const vatUzs = Math.round((total * 12) / 112); // 12% QQS ichida
  const dateFormatted = order.createdAt ? new Date(order.createdAt).toLocaleString('uz-UZ') : new Date().toLocaleString('uz-UZ');

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto print:shadow-none print:border-none print:max-w-full"
        >
          {/* Header Action Bar (Hidden when printing) */}
          <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between print:hidden">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold">Rasmiy Elektron Fiskal Chek</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold inline-flex items-center gap-1.5 transition shadow-sm"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Chop etish / PDF</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Receipt Paper Body */}
          <div className="p-6 sm:p-8 space-y-4 font-mono text-slate-800 text-xs bg-white">
            {/* National Fiscal Header */}
            <div className="text-center border-b border-dashed border-slate-300 pb-4 space-y-1">
              <div className="font-bold text-[10px] tracking-widest text-slate-500 uppercase">
                Oʻzbekiston Respublikasi Davlat Soliq Qoʻmitasi
              </div>
              <div className="text-base font-black text-slate-950 tracking-tight">
                SAVDOX MARKETPLACE MCHJ
              </div>
              <div className="text-[11px] text-slate-600">
                Toshkent sh., Yunusobod t., Amir Temur shox koʻchasi, 107B
              </div>
              <div className="text-[10px] text-slate-500 flex justify-center gap-3 pt-1">
                <span>INN: 309482115</span>
                <span>Fiskal rejim: ONLAYN</span>
              </div>
            </div>

            {/* Receipt Metadata */}
            <div className="space-y-1 border-b border-dashed border-slate-300 pb-3 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-500">Chek raqami:</span>
                <span className="font-bold text-slate-900">{order.orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Sana va vaqt:</span>
                <span>{dateFormatted}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Xaridor:</span>
                <span className="font-bold text-slate-900">{order.customerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Telefon:</span>
                <span>{order.customerPhone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Manzil:</span>
                <span className="truncate max-w-[65%]">{order.city}, {order.streetAddress}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Kuryer:</span>
                <span className="text-emerald-800 font-bold">
                  {order.courier?.name || 'Azizbek Karimov'} (Chevrolet Cobalt)
                </span>
              </div>
            </div>

            {/* Items Table */}
            <div className="space-y-2 border-b border-dashed border-slate-300 pb-3">
              <div className="font-bold uppercase text-[10px] text-slate-500 flex justify-between">
                <span>Tovar / Xizmat</span>
                <span>Summasi</span>
              </div>

              {order.items?.map((item, idx) => {
                const itemTotal = (item.unitPriceUzs || item.price || 0) * (item.quantity || 1);
                return (
                  <div key={idx} className="space-y-0.5">
                    <div className="font-bold text-slate-900 leading-snug">
                      {idx + 1}. {item.name || item.nameEn}
                    </div>
                    <div className="flex justify-between text-slate-500 text-[11px]">
                      <span>
                        {item.quantity} dona x {formatUzs(item.unitPriceUzs || item.price || 0, lang)}
                      </span>
                      <span className="font-bold text-slate-900">
                        {formatUzs(itemTotal, lang)}
                      </span>
                    </div>
                  </div>
                );
              })}

              {order.deliveryFeeUzs > 0 && (
                <div className="flex justify-between text-slate-600 text-[11px] pt-1">
                  <span>Ekspress yetkazib berish xizmati:</span>
                  <span className="font-bold">{formatUzs(order.deliveryFeeUzs, lang)}</span>
                </div>
              )}
            </div>

            {/* Financial Totals */}
            <div className="space-y-1.5 border-b border-dashed border-slate-300 pb-3 text-[11px]">
              <div className="flex justify-between text-slate-600">
                <span>Shu jumladan QQS (12%):</span>
                <span>{formatUzs(vatUzs, lang)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Toʻlov usuli:</span>
                <span className="font-bold uppercase text-emerald-800">
                  {order.paymentMethod || 'CLICK (TOʻLANGAN)'}
                </span>
              </div>
              <div className="flex justify-between text-base font-black text-slate-950 pt-1">
                <span>JAMI TOʻLANDI:</span>
                <span className="text-emerald-700">{formatUzs(total, lang)}</span>
              </div>
            </div>

            {/* Fiscal QR Code & Verification footer */}
            <div className="pt-2 flex items-center justify-between gap-4">
              <div className="space-y-0.5 text-[10px] text-slate-500">
                <div className="font-bold text-slate-900">Fiskal belgi (FM):</div>
                <div className="font-mono">8492 0192 8471 2026</div>
                <div className="text-[9px] text-slate-400">
                  soliq.uz orqali chekni haqiqiyligini tekshirishingiz mumkin.
                </div>
              </div>

              {/* Vector Fiscal QR Code */}
              <div className="p-2 border border-slate-300 rounded-xl bg-white shrink-0 text-center">
                <svg className="w-16 h-16" viewBox="0 0 100 100" fill="currentColor">
                  {/* Stylized QR Code Pattern */}
                  <rect x="0" y="0" width="30" height="30" rx="3" />
                  <rect x="6" y="6" width="18" height="18" fill="white" />
                  <rect x="10" y="10" width="10" height="10" />

                  <rect x="70" y="0" width="30" height="30" rx="3" />
                  <rect x="76" y="6" width="18" height="18" fill="white" />
                  <rect x="80" y="10" width="10" height="10" />

                  <rect x="0" y="70" width="30" height="30" rx="3" />
                  <rect x="6" y="76" width="18" height="18" fill="white" />
                  <rect x="10" y="80" width="10" height="10" />

                  <rect x="38" y="12" width="8" height="8" />
                  <rect x="52" y="12" width="8" height="8" />
                  <rect x="38" y="26" width="8" height="8" />
                  <rect x="42" y="42" width="16" height="16" rx="2" />
                  <rect x="12" y="42" width="8" height="8" />
                  <rect x="26" y="48" width="8" height="8" />
                  <rect x="68" y="42" width="8" height="8" />
                  <rect x="82" y="52" width="8" height="8" />
                  <rect x="38" y="72" width="8" height="8" />
                  <rect x="52" y="82" width="8" height="8" />
                  <rect x="72" y="72" width="16" height="8" />
                  <rect x="72" y="86" width="8" height="8" />
                </svg>
                <div className="text-[8px] font-bold text-slate-400 mt-0.5">DSQ QR</div>
              </div>
            </div>

            <div className="text-center text-[10px] text-slate-400 pt-2 border-t border-slate-100">
              SAVDOX rasmiy kafolati va xarid uchun tashakkur!
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

