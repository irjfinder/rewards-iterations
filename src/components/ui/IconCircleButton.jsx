import { motion } from 'framer-motion';

// Round 32px cream button used for share / info / search / bell.
export default function IconCircleButton({
  children,
  onClick,
  ariaLabel,
  withDot = false,
  className = '',
}) {
  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className={`relative inline-flex items-center justify-center rounded-full bg-surface-secondary p-[6px] text-ink-main transition-colors hover:bg-[#ecebe4] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${className}`}
    >
      {children}
      {withDot && (
        <span className="absolute right-0 top-0 block h-[10px] w-[10px] rounded-full border-2 border-white bg-accent-red" />
      )}
    </motion.button>
  );
}
