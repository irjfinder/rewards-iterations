import { motion } from 'framer-motion';
import { Share2, Info } from 'lucide-react';
import StatusBadge from '../ui/StatusBadge.jsx';
import BrandLogo from '../ui/BrandLogo.jsx';
import IconCircleButton from '../ui/IconCircleButton.jsx';
import { STATUSES } from '../../data/rewards.js';

export default function RewardCard({
  reward,
  onOpen,
  onClaim,
  onShare,
  onInfo,
}) {
  const { status, amount, title, paymentDate, brand, brandColor, body } =
    reward;

  const open = () => onOpen?.(reward);
  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  };

  return (
    <motion.article
      layout
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={onKey}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      whileHover={{ y: -2 }}
      className="relative w-full cursor-pointer rounded-xl2 border border-line-normal bg-white p-6 text-left shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-shadow hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      aria-label={`View reward timeline for ${title}`}
    >
      {/* Top row: status + right-aligned icon buttons */}
      <div className="flex items-start justify-between pb-4">
        <StatusBadge status={status} />
        <div className="flex items-center gap-3">
          <IconCircleButton
            ariaLabel="Share reward"
            onClick={(e) => {
              e.stopPropagation();
              onShare?.(reward);
            }}
          >
            <Share2 className="h-5 w-5" strokeWidth={2} />
          </IconCircleButton>
          <IconCircleButton
            ariaLabel="More information"
            onClick={(e) => {
              e.stopPropagation();
              onInfo?.(reward);
            }}
          >
            <Info className="h-5 w-5" strokeWidth={2} />
          </IconCircleButton>
        </div>
      </div>

      {/* Title + metadata + brand logo */}
      <div className="flex items-start gap-4 pb-4">
        <div className="flex-1">
          <h3
            className="text-[24px] font-extrabold leading-[1.25] tracking-[-0.36px] text-ink-main"
            style={{ fontFamily: 'inherit' }}
          >
            {amount}
          </h3>
          <p className="pt-1 text-[14px] font-medium leading-5 text-ink-main">
            {title}
          </p>
          <p className="pt-1 text-[14px] leading-5 text-ink-secondary">
            Payment date: {paymentDate}
          </p>
          <button
            type="button"
            onClick={(e) => e.stopPropagation()}
            className="pt-1 text-[12px] leading-4 text-ink-tertiary underline underline-offset-2 hover:text-ink-main"
          >
            Terms &amp; conditions
          </button>
        </div>
        <BrandLogo brand={brand} color={brandColor} />
      </div>

      {/* Body + CTA (only for "ready to claim") */}
      <p className="text-[14px] leading-5 text-ink-secondary">{body}</p>

      {status === STATUSES.READY && (
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => {
            e.stopPropagation();
            onClaim?.(reward);
          }}
          className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-sm bg-brand px-3 text-[14px] font-medium text-white transition-colors hover:bg-[#1644d9] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          Claim reward
        </motion.button>
      )}
    </motion.article>
  );
}
