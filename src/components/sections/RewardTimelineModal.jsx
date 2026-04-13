import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Share2, Check } from 'lucide-react';
import BrandLogo from '../ui/BrandLogo.jsx';
import StatusBadge from '../ui/StatusBadge.jsx';
import IconCircleButton from '../ui/IconCircleButton.jsx';
import { STATUSES } from '../../data/rewards.js';

// Ordered progression of a reward's lifecycle.
const STEPS = [
  {
    id: STATUSES.TRACKED,
    label: 'Tracked visit',
    description:
      'We saw you click through to the partner — your reward journey has started.',
  },
  {
    id: STATUSES.VALIDATED,
    label: 'Validated',
    description:
      "High five! You met the eligibility criteria. Stay with the plan to get rewarded on the payment date.",
  },
  {
    id: STATUSES.READY,
    label: 'Ready to claim',
    description:
      'Your reward is ready and waiting for you. Tap Claim to receive it.',
  },
  {
    id: STATUSES.CLAIMED,
    label: 'Claimed',
    description:
      "We sent your reward to your email. It's all yours! Your gift card must be activated within 90 days. You then have 3 years to spend it.",
  },
];

export default function RewardTimelineModal({ open, reward, onClose, onShare }) {
  // Close on Escape and lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && reward && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="timeline-title"
            className="relative z-10 flex max-h-[92vh] w-full max-w-md flex-col overflow-hidden rounded-t-2xl bg-white sm:rounded-xl2"
            initial={{ y: 48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 48, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 380, damping: 34 }}
          >
            {/* Close button */}
            <div className="flex items-center justify-end px-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="rounded-full p-1 text-ink-main hover:bg-surface-secondary"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            <div className="overflow-y-auto px-5 pb-6 pt-1">
              {/* Mini reward card */}
              <div className="rounded-xl2 border border-line-normal bg-white p-5">
                <div className="flex items-start justify-between pb-3">
                  <StatusBadge status={reward.status} />
                  <IconCircleButton
                    ariaLabel="Share reward"
                    onClick={(e) => {
                      e.stopPropagation();
                      onShare?.(reward);
                    }}
                  >
                    <Share2 className="h-5 w-5" strokeWidth={2} />
                  </IconCircleButton>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <h2
                      id="timeline-title"
                      className="text-[28px] font-extrabold leading-[1.2] tracking-[-0.4px] text-ink-main"
                    >
                      {reward.amount}
                    </h2>
                    <p className="pt-1 text-[15px] font-medium leading-5 text-ink-main">
                      {reward.title}
                    </p>
                    <p className="pt-1 text-[14px] leading-5 text-ink-secondary">
                      Payment date: {reward.paymentDate}
                    </p>
                    <button
                      type="button"
                      className="pt-1 text-[13px] leading-4 text-ink-tertiary underline underline-offset-2 hover:text-ink-main"
                    >
                      Terms &amp; conditions
                    </button>
                  </div>
                  <BrandLogo brand={reward.brand} color={reward.brandColor} />
                </div>
              </div>

              {/* Timeline */}
              <ol
                className="relative mt-6 flex flex-col"
                aria-label="Reward progress"
              >
                {STEPS.map((step, idx) => {
                  const currentIdx = STEPS.findIndex(
                    (s) => s.id === reward.status
                  );
                  const state =
                    idx < currentIdx
                      ? 'complete'
                      : idx === currentIdx
                      ? 'current'
                      : 'upcoming';
                  const isLast = idx === STEPS.length - 1;
                  const nextState =
                    idx + 1 <= currentIdx
                      ? 'complete'
                      : idx + 1 === currentIdx
                      ? 'reaches-current'
                      : 'upcoming';
                  return (
                    <TimelineRow
                      key={step.id}
                      step={step}
                      state={state}
                      isLast={isLast}
                      connectorState={nextState}
                      index={idx}
                    />
                  );
                })}
              </ol>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TimelineRow({ step, state, isLast, connectorState, index }) {
  // Visual tokens per state
  const dotClasses =
    state === 'current'
      ? 'h-8 w-8 bg-accent-green text-white'
      : state === 'complete'
      ? 'h-4 w-4 bg-accent-green text-white mt-2 ml-2'
      : 'h-4 w-4 bg-white border-2 border-line-normal text-transparent mt-2 ml-2';

  const labelClasses =
    state === 'current'
      ? 'text-[17px] font-extrabold text-ink-main'
      : state === 'complete'
      ? 'text-[16px] font-bold text-ink-secondary'
      : 'text-[16px] font-bold text-ink-tertiary';

  const connectorColor =
    connectorState === 'complete' || connectorState === 'reaches-current'
      ? 'bg-accent-green'
      : 'bg-line-normal';

  return (
    <motion.li
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.05 + index * 0.06, duration: 0.25 }}
      className="relative flex gap-4 pb-4 last:pb-0"
    >
      {/* Dot column */}
      <div className="relative flex w-8 flex-col items-center">
        <div
          className={`flex shrink-0 items-center justify-center rounded-full ${dotClasses}`}
        >
          {state === 'current' && (
            <Check className="h-4 w-4" strokeWidth={3} />
          )}
        </div>
        {!isLast && (
          <div
            className={`mt-1 w-[2px] flex-1 rounded-full ${connectorColor}`}
            style={{ minHeight: 24 }}
          />
        )}
      </div>

      {/* Text column */}
      <div className="flex-1 pb-2">
        <p className={labelClasses}>{step.label}</p>
        {state === 'current' && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.2 }}
            className="pt-2 text-[14px] leading-5 text-ink-secondary"
          >
            {step.description}
          </motion.p>
        )}
      </div>
    </motion.li>
  );
}
