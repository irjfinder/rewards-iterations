import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

export default function ClaimModal({ open, reward, onClose, onConfirm }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
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
            aria-labelledby="claim-title"
            className="relative z-10 w-full max-w-md rounded-t-2xl bg-white p-6 sm:rounded-xl2"
            initial={{ y: 48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 48, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 380, damping: 34 }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-1 text-ink-tertiary hover:bg-surface-secondary"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3 pb-2">
              <CheckCircle2 className="h-7 w-7 text-accent-green" />
              <h2
                id="claim-title"
                className="text-[20px] font-extrabold tracking-[-0.2px] text-ink-main"
              >
                Claim your reward
              </h2>
            </div>
            <p className="text-[14px] leading-5 text-ink-secondary">
              We&rsquo;ll send your <strong>{reward.amount}</strong> reward for{' '}
              <strong>{reward.title}</strong> to the email on your account. Your
              gift card must be activated within 90 days — you then have 3
              years to spend it.
            </p>

            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 flex-1 items-center justify-center rounded-sm border border-line-normal bg-white px-4 text-[14px] font-medium text-ink-main hover:bg-surface-secondary"
              >
                Not now
              </button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onConfirm(reward)}
                className="inline-flex h-10 flex-1 items-center justify-center rounded-sm bg-brand px-4 text-[14px] font-medium text-white hover:bg-[#1644d9]"
              >
                Confirm claim
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
