import { STATUSES, STATUS_LABEL } from '../../data/rewards.js';

// Map status -> pill fill + border.
const STYLES = {
  [STATUSES.CLAIMED]: {
    bg: 'bg-accent-green',
    border: 'border-accent-green',
    text: 'text-ink-main',
  },
  [STATUSES.READY]: {
    bg: 'bg-accent-greenSubtle',
    border: 'border-accent-green',
    text: 'text-ink-main',
  },
  [STATUSES.VALIDATED]: {
    bg: 'bg-accent-yellowSubtle',
    border: 'border-accent-yellow',
    text: 'text-ink-main',
  },
  [STATUSES.TRACKED]: {
    bg: 'bg-accent-skySubtle',
    border: 'border-accent-sky',
    text: 'text-ink-main',
  },
};

export default function StatusBadge({ status }) {
  const s = STYLES[status];
  return (
    <span
      className={`inline-flex h-5 items-center justify-center rounded-full border px-2 text-[12px] font-extrabold uppercase leading-4 tracking-[0.24px] ${s.bg} ${s.border} ${s.text}`}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}
