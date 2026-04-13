import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/rewards.js';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section
      id="faq"
      className="w-full bg-white px-4 pb-12"
      aria-label="Frequently asked questions"
    >
      <h2 className="text-[24px] font-extrabold leading-[1.25] tracking-[-0.36px] text-ink-main">
        Frequently asked questions
      </h2>

      <div className="mt-6 flex flex-col">
        {faqs.map((item, idx) => {
          const isOpen = idx === openIdx;
          const isLast = idx === faqs.length - 1;
          return (
            <div
              key={item.q}
              className={`border-t border-line-normal ${
                isLast ? 'border-b' : ''
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="flex w-full items-center gap-2 py-4 text-left"
              >
                <span className="flex-1 text-[16px] font-extrabold leading-6 text-ink-main">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-ink-main"
                >
                  <ChevronDown className="h-5 w-5" strokeWidth={2} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-[14px] leading-5 text-ink-secondary">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
