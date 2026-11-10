import { useState, useMemo } from 'react';
import { Calculator } from 'lucide-react';

interface MortgageCalculatorProps {
  defaultPriceBdt: number;
  propertyTitle: string;
}

function formatBdt(amount: number): string {
  if (!Number.isFinite(amount) || amount <= 0) return '0';
  return Math.round(amount).toLocaleString('en-IN');
}

export function MortgageCalculator({ defaultPriceBdt, propertyTitle }: MortgageCalculatorProps) {
  const initialPrice = defaultPriceBdt > 0 ? defaultPriceBdt : 15000000;
  const [price, setPrice] = useState<number>(initialPrice);
  const [downPayment, setDownPayment] = useState<number>(Math.round(initialPrice * 0.3));
  const [years, setYears] = useState<number>(15);
  const [interestRate, setInterestRate] = useState<number>(9.5);

  const calc = useMemo(() => {
    const safePrice = Math.max(0, price);
    const safeDown = Math.min(Math.max(0, downPayment), safePrice);
    const principal = Math.max(0, safePrice - safeDown);
    const months = Math.max(1, years * 12);
    const monthlyRate = Math.max(0, interestRate) / 100 / 12;

    let monthlyPayment = 0;
    if (principal > 0) {
      if (monthlyRate === 0) {
        monthlyPayment = principal / months;
      } else {
        const pow = Math.pow(1 + monthlyRate, months);
        monthlyPayment = (principal * monthlyRate * pow) / (pow - 1);
      }
    }

    const totalRepayment = monthlyPayment * months;
    const totalInterest = Math.max(0, totalRepayment - principal);
    const principalPct = totalRepayment > 0 ? Math.round((principal / totalRepayment) * 100) : 100;
    const interestPct = totalRepayment > 0 ? 100 - principalPct : 0;

    return {
      principal,
      monthlyPayment,
      totalRepayment,
      totalInterest,
      principalPct,
      interestPct,
    };
  }, [price, downPayment, years, interestRate]);

  const setDownPct = (pct: number) => {
    setDownPayment(Math.round(price * pct));
  };

  return (
    <section
      className="bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] p-6 sm:p-8"
      aria-labelledby="mortgage-heading"
    >
      <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-[#F2EFE9] dark:border-[#242A34]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#DA2328] flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" /> Financial Planner (BDT)
          </p>
          <h2 id="mortgage-heading" className="font-serif text-3xl font-semibold text-[#111418] dark:text-[#F5F3EE] mt-1">
            Mortgage Calculator
          </h2>
          <p className="text-sm text-[#5E646C] dark:text-[#A4A8AE] mt-1">
            Estimate monthly home-finance installments for {propertyTitle} in Bangladeshi Taka (BDT).
          </p>
        </div>
        {defaultPriceBdt === 0 && (
          <span className="text-xs bg-[#F2EFE9] dark:bg-[#1C212A] text-[#111418] dark:text-[#F5F3EE] px-3 py-1.5 font-medium">
            Quote-based listing — enter target BDT budget below
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Inputs */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="calc-price"
              className="block text-xs font-semibold uppercase tracking-wider text-[#111418] dark:text-[#EAE7E1] mb-2"
            >
              Property Price (BDT)
            </label>
            <input
              id="calc-price"
              type="number"
              min={0}
              step={100000}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value) || 0)}
              className="w-full px-4 py-2.5 border border-[#E5E2DC] dark:border-[#2A303A] bg-[#FAFAF8] dark:bg-[#191E27] text-sm font-semibold tabular-nums text-[#111418] dark:text-[#F5F3EE] focus:outline-none focus:border-[#0C0C0C] dark:focus:border-[#DA2328]"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="calc-down"
                className="text-xs font-semibold uppercase tracking-wider text-[#111418] dark:text-[#EAE7E1]"
              >
                Down Payment (BDT)
              </label>
              <div className="flex gap-1">
                {[0.2, 0.3, 0.4].map((pct) => (
                  <button
                    key={pct}
                    type="button"
                    onClick={() => setDownPct(pct)}
                    className="text-[10px] font-semibold px-1.5 py-0.5 border border-[#E5E2DC] dark:border-[#2A303A] text-[#111418] dark:text-[#EAE7E1] hover:border-[#DA2328] hover:text-[#DA2328] cursor-pointer"
                  >
                    {pct * 100}%
                  </button>
                ))}
              </div>
            </div>
            <input
              id="calc-down"
              type="number"
              min={0}
              max={price}
              step={100000}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value) || 0)}
              className="w-full px-4 py-2.5 border border-[#E5E2DC] dark:border-[#2A303A] bg-[#FAFAF8] dark:bg-[#191E27] text-sm font-semibold tabular-nums text-[#111418] dark:text-[#F5F3EE] focus:outline-none focus:border-[#0C0C0C] dark:focus:border-[#DA2328]"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="calc-years"
                className="text-xs font-semibold uppercase tracking-wider text-[#111418] dark:text-[#EAE7E1]"
              >
                Loan Period (Years)
              </label>
              <span className="text-xs font-bold text-[#DA2328] tabular-nums">{years} Years</span>
            </div>
            <input
              id="calc-years"
              type="range"
              min={1}
              max={25}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full accent-[#DA2328] cursor-pointer"
            />
          </div>

          <div>
            <label
              htmlFor="calc-rate"
              className="block text-xs font-semibold uppercase tracking-wider text-[#111418] dark:text-[#EAE7E1] mb-2"
            >
              Interest Rate (% / yr)
            </label>
            <input
              id="calc-rate"
              type="number"
              min={0}
              max={30}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value) || 0)}
              className="w-full px-4 py-2.5 border border-[#E5E2DC] dark:border-[#2A303A] bg-[#FAFAF8] dark:bg-[#191E27] text-sm font-semibold tabular-nums text-[#111418] dark:text-[#F5F3EE] focus:outline-none focus:border-[#0C0C0C] dark:focus:border-[#DA2328]"
            />
          </div>
        </div>

        {/* Summary Output */}
        <div className="lg:col-span-5 bg-[#FAFAF8] dark:bg-[#10141A] border border-[#E5E2DC] dark:border-[#242A34] p-5 flex flex-col justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5E646C] dark:text-[#A4A8AE]">
              Estimated Monthly Payment
            </p>
            <p className="font-serif text-3xl sm:text-4xl font-semibold text-[#111418] dark:text-[#F5F3EE] mt-1 tabular-nums">
              BDT {formatBdt(calc.monthlyPayment)}
              <span className="text-sm font-sans font-normal text-[#5E646C] dark:text-[#A4A8AE]"> / month</span>
            </p>

            <div className="mt-5 space-y-2 text-xs border-t border-[#E5E2DC] dark:border-[#242A34] pt-4">
              <div className="flex items-center justify-between">
                <span className="text-[#5E646C] dark:text-[#A4A8AE]">Principal Loan Financed</span>
                <span className="font-semibold text-[#111418] dark:text-[#F5F3EE] tabular-nums">
                  BDT {formatBdt(calc.principal)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#5E646C] dark:text-[#A4A8AE]">Total Interest Payable</span>
                <span className="font-semibold text-[#DA2328] tabular-nums">
                  BDT {formatBdt(calc.totalInterest)}
                </span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[#E5E2DC] dark:border-[#242A34]">
                <span className="font-semibold text-[#111418] dark:text-[#F5F3EE]">
                  Total Payment ({years * 12} mo)
                </span>
                <span className="font-bold text-[#111418] dark:text-[#F5F3EE] tabular-nums">
                  BDT {formatBdt(calc.totalRepayment)}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Breakdown Progress Bar */}
          <div className="mt-5">
            <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider mb-1.5">
              <span className="text-[#111418] dark:text-[#EAE7E1] tabular-nums">
                Principal {calc.principalPct}%
              </span>
              <span className="text-[#DA2328] tabular-nums">Interest {calc.interestPct}%</span>
            </div>
            <div className="w-full h-2.5 bg-[#E5E2DC] dark:bg-[#242A34] overflow-hidden flex">
              <div
                style={{ width: `${calc.principalPct}%` }}
                className="bg-[#0C0C0C] dark:bg-[#F5F3EE] h-full transition-all duration-300"
              />
              <div
                style={{ width: `${calc.interestPct}%` }}
                className="bg-[#DA2328] h-full transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

