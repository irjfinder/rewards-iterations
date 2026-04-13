import { LayoutGrid, Gift, Gauge, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const TABS = [
  { id: 'dashboard', label: 'Dashboard', Icon: LayoutGrid },
  { id: 'rewards', label: 'Rewards', Icon: Gift },
  { id: 'credit', label: 'Credit Score', Icon: Gauge },
  { id: 'products', label: 'My Products', Icon: Package },
];

export default function BottomTabs({ active, onChange }) {
  return (
    <nav
      className="sticky top-[56px] z-30 w-full border-t border-line-normal bg-white shadow-navTop"
      aria-label="Primary"
    >
      <div className="relative flex items-stretch">
        {TABS.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onChange(id)}
              className="relative flex flex-1 flex-col items-center justify-center gap-[2px] px-2 py-2 outline-none"
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon
                className={`h-5 w-5 ${isActive ? 'text-ink-main' : 'text-ink-tertiary'}`}
                strokeWidth={isActive ? 2.25 : 1.75}
              />
              <span
                className={`text-[12px] leading-4 ${
                  isActive
                    ? 'font-extrabold text-ink-main'
                    : 'font-medium text-ink-tertiary'
                }`}
              >
                {label}
              </span>
              {isActive && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute inset-x-0 bottom-0 h-[3px] bg-ink-main"
                  transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
