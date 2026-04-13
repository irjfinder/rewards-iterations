import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { rewards, STATUSES, STATUS_LABEL } from '../../data/rewards.js';
import RewardCard from './RewardCard.jsx';
import ClaimModal from './ClaimModal.jsx';
import RewardTimelineModal from './RewardTimelineModal.jsx';

const FILTERS = [
  { id: 'all', label: 'Show all' },
  { id: STATUSES.TRACKED, label: STATUS_LABEL[STATUSES.TRACKED] },
  { id: STATUSES.VALIDATED, label: STATUS_LABEL[STATUSES.VALIDATED] },
  { id: STATUSES.READY, label: STATUS_LABEL[STATUSES.READY] },
  { id: STATUSES.CLAIMED, label: STATUS_LABEL[STATUSES.CLAIMED] },
];

export default function RewardsSection() {
  const [filter, setFilter] = useState('all');
  const [claimed, setClaimed] = useState(() =>
    new Set(rewards.filter((r) => r.status === STATUSES.CLAIMED).map((r) => r.id))
  );
  const [modalReward, setModalReward] = useState(null);
  const [timelineReward, setTimelineReward] = useState(null);
  const [toast, setToast] = useState(null);

  // Mutate status client-side once user confirms a claim.
  const hydrated = useMemo(
    () =>
      rewards.map((r) =>
        claimed.has(r.id)
          ? {
              ...r,
              status: STATUSES.CLAIMED,
              body:
                r.status === STATUSES.READY
                  ? "We sent your reward to your email. It's all yours! Your gift card must be activated within 90 days. You then have 3 years to spend it."
                  : r.body,
            }
          : r
      ),
    [claimed]
  );

  const visible = hydrated.filter((r) =>
    filter === 'all' ? true : r.status === filter
  );

  const totalClaimed = hydrated
    .filter((r) => r.status === STATUSES.CLAIMED)
    .reduce((n, r) => n + Number(r.amount.replace(/[^0-9.]/g, '')), 0);

  const onConfirm = (reward) => {
    setClaimed((prev) => new Set(prev).add(reward.id));
    setModalReward(null);
    setToast(`${reward.amount} claimed — check your inbox`);
    setTimeout(() => setToast(null), 2800);
  };

  const onShare = async (reward) => {
    const shareUrl = `https://www.finder.com.au/rewards/${reward.id}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: reward.title, url: shareUrl });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setToast('Share link copied');
        setTimeout(() => setToast(null), 1800);
      }
    } catch {
      /* user cancelled */
    }
  };

  return (
    <section
      id="rewards"
      className="w-full bg-surface-tinted px-4 pb-12 pt-8"
      aria-label="Your rewards"
    >
      <h2 className="text-[24px] font-extrabold leading-[1.25] tracking-[-0.36px] text-ink-main">
        Your rewards
      </h2>

      {/* Stats row */}
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
            Total claimed:
          </span>
          <span className="text-[20px] font-extrabold leading-6 tracking-[-0.2px] text-ink-main">
            ${totalClaimed.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Filter pills */}
      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-4 pt-6">
        {FILTERS.map((f) => {
          const count =
            f.id === 'all'
              ? hydrated.length
              : hydrated.filter((r) => r.status === f.id).length;
          const isActive = f.id === filter;
          return (
            <motion.button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              whileTap={{ scale: 0.96 }}
              className={`relative inline-flex shrink-0 items-center justify-center gap-[6px] rounded-full px-3 py-[6px] text-[14px] font-medium leading-5 transition-colors ${
                isActive
                  ? 'bg-ink-main text-white'
                  : 'border border-line-normal bg-white text-ink-secondary hover:border-ink-secondary'
              }`}
            >
              {f.id === 'all' ? `${f.label} (${count})` : f.label}
            </motion.button>
          );
        })}
      </div>

      {/* Card grid */}
      <div className="flex flex-col gap-4">
        <AnimatePresence mode="popLayout">
          {visible.map((reward) => (
            <RewardCard
              key={reward.id}
              reward={reward}
              onOpen={(r) => setTimelineReward(r)}
              onClaim={(r) => setModalReward(r)}
              onShare={onShare}
              onInfo={(r) => setTimelineReward(r)}
            />
          ))}
        </AnimatePresence>

        {visible.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-xl2 border border-dashed border-line-normal bg-white p-6 text-center text-[14px] text-ink-secondary"
          >
            No rewards in this state yet. Try another filter.
          </motion.div>
        )}
      </div>

      {/* Footer controls */}
      <div className="flex flex-col items-center gap-4 pt-6">
        <p className="text-[14px] leading-5 text-ink-secondary">
          Showing {visible.length} of {rewards.length} rewards
        </p>
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center rounded-sm bg-ink-main px-3 py-[6px] text-[14px] font-medium text-white hover:bg-black"
        >
          Load more
        </motion.button>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4"
          >
            <div className="pointer-events-auto max-w-sm rounded-full bg-ink-main px-4 py-2 text-[13px] font-medium text-white shadow-card">
              {toast}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ClaimModal
        open={!!modalReward}
        reward={modalReward}
        onClose={() => setModalReward(null)}
        onConfirm={onConfirm}
      />

      <RewardTimelineModal
        open={!!timelineReward}
        reward={
          timelineReward
            ? hydrated.find((r) => r.id === timelineReward.id) || timelineReward
            : null
        }
        onClose={() => setTimelineReward(null)}
        onShare={onShare}
      />
    </section>
  );
}
