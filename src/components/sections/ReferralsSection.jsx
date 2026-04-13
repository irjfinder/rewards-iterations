import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HelpCircle, Gift, Check } from 'lucide-react';
import BrandLogo from '../ui/BrandLogo.jsx';
import { referrals } from '../../data/rewards.js';

const REFERRAL_URL =
  'https://www.finder.com.au/personal-loans/personal-loan-deals-loyalty?t=1769037862003';

export default function ReferralsSection() {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(REFERRAL_URL);
    } catch {
      // fall through — still show confirmation for prototype
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="referrals"
      className="w-full bg-surface-tinted px-4 pb-12"
      aria-label="Your referrals"
    >
      <h2 className="text-[24px] font-extrabold leading-[1.25] tracking-[-0.36px] text-ink-main">
        Your referrals
      </h2>

      {/* Refer a friend card */}
      <div className="pt-4">
        <div className="rounded-sm border border-accent-sky bg-accent-skySubtle p-4">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
              <Gift className="h-5 w-5 text-brand" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <p className="text-[16px] font-extrabold leading-5 text-ink-main">
                Refer a friend
              </p>
              <p className="pt-[2px] text-[14px] leading-5 text-ink-secondary">
                Share your unique link with a friend and get up to{' '}
                <strong className="text-ink-main">$50</strong> if they sign up!
              </p>
            </div>
          </div>

          <div className="flex items-stretch gap-2 pt-4">
            <div className="flex h-8 flex-1 items-center overflow-hidden rounded-sm border border-line-normal bg-white px-3">
              <span className="truncate text-[14px] text-ink-secondary">
                {REFERRAL_URL}
              </span>
            </div>
            <motion.button
              type="button"
              onClick={onCopy}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-8 shrink-0 items-center justify-center gap-1 rounded-sm bg-brand px-3 text-[14px] font-medium text-white hover:bg-[#1644d9]"
            >
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="flex items-center gap-1"
                  >
                    <Check className="h-4 w-4" strokeWidth={2.5} /> Copied
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                  >
                    Copy link
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between pt-4">
        <button
          type="button"
          className="inline-flex items-center gap-[6px] rounded-ten border border-line-normal bg-white px-[10px] py-[6px] text-[14px] font-medium text-ink-main hover:bg-surface-secondary"
        >
          <HelpCircle className="h-4 w-4" strokeWidth={2} />
          How it works
        </button>
        <div className="flex items-end gap-1 whitespace-nowrap">
          <span className="text-[14px] leading-5 text-ink-secondary">
            Total paid:
          </span>
          <span className="text-[20px] font-extrabold leading-6 tracking-[-0.2px] text-ink-main">
            $0
          </span>
        </div>
      </div>

      {/* Referral rows */}
      <div className="flex flex-col gap-4 pt-4">
        {referrals.map((r) => (
          <article
            key={r.id}
            className="rounded-xl2 border border-line-normal bg-white p-6"
          >
            <div className="flex items-center gap-4 pb-3">
              <BrandLogo
                brand={r.brand}
                color={r.brandColor}
                className="!h-8 !w-14"
              />
              <p className="flex-1 text-[14px] font-medium leading-5 text-ink-main">
                {r.title}
              </p>
            </div>
            <dl className="flex flex-col gap-1 text-[14px] leading-5">
              <Row label="Offer date" value={r.offerDate} />
              <Row label="Per referral" value={r.perReferral} />
              <Row label="Payment date" value={r.paymentDate} />
              <Row label="Status" value={r.status} />
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex gap-3">
      <dt className="w-[90px] shrink-0 font-medium text-ink-main">{label}</dt>
      <dd className="flex-1 text-ink-secondary">{value}</dd>
    </div>
  );
}
