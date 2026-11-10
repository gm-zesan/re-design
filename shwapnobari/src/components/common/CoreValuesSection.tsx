import { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { COMPANY, CORE_VALUES, CoreValue } from '../../data/company';

export function CoreValuesSection() {
  const [selectedValue, setSelectedValue] = useState<CoreValue | null>(null);

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-[#0C0C0C] dark:bg-[#080A0D] border-y border-transparent dark:border-[#242A34] text-white">
      {/* Background Architecture Photo */}
      <img
        src={COMPANY.assets.coreValuesBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/90 via-[#0C0C0C]/75 to-[#0C0C0C]/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DA2328] mb-3">
            Our Guiding Principles
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white">
            Core Values That Define Every Mandate
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed">
            Click any principle below to read Shwapno Bari Real Estate Ltd.’s institutional commitment in full.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CORE_VALUES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedValue(item)}
              className="group text-left p-6 sm:p-7 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#DA2328] backdrop-blur-xs transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs tracking-widest text-[#DA2328]">{item.index}</span>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#DA2328] transition-colors" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed line-clamp-3">{item.description}</p>
              </div>
              <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-white/90 group-hover:text-[#DA2328]">
                Read Statement →
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedValue && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/75 backdrop-blur-xs" onClick={() => setSelectedValue(null)} />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="core-value-modal-title"
            className="relative z-10 w-full max-w-lg bg-white dark:bg-[#14181F] text-[#111418] dark:text-[#F5F3EE] p-7 sm:p-9 border border-[#E5E2DC] dark:border-[#2A303A] shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#F2EFE9] dark:border-[#242A34] pb-4">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#DA2328]">
                  CORE VALUE {selectedValue.index}
                </span>
                <h3 id="core-value-modal-title" className="font-serif text-3xl sm:text-4xl font-semibold mt-1">
                  {selectedValue.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedValue(null)}
                aria-label="Close Core Value Modal"
                className="p-2 border border-[#E5E2DC] dark:border-[#2A303A] hover:bg-[#FAFAF8] dark:hover:bg-[#1C212A] text-[#111418] dark:text-[#F5F3EE] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-6 text-base text-[#363B42] dark:text-[#C5C8CE] leading-relaxed">
              {selectedValue.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

