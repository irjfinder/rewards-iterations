import { motion } from 'framer-motion';
import { Share2 } from 'lucide-react';
import BrandLogo from '../ui/BrandLogo.jsx';
import IconCircleButton from '../ui/IconCircleButton.jsx';
import { moreRewards } from '../../data/rewards.js';

export default function MoreRewards() {
  return (
    <section
      id="more-rewards"
      className="w-full bg-white px-4 py-12"
      aria-label="More Finder Rewards"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-[24px] font-extrabold leading-[1.25] tracking-[-0.36px] text-ink-main">
          More Finder Rewards
        </h2>
        <a
          href="#"
          className="self-start text-[14px] font-medium text-brand underline underline-offset-2"
        >
          Advertiser disclosure
        </a>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-6">
        {moreRewards.map((r) => (
          <RewardBanner key={r.id} reward={r} />
        ))}
      </div>

      <motion.button
        type="button"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-sm bg-brand px-3 text-[14px] font-medium text-white hover:bg-[#1644d9]"
      >
        View all rewards
      </motion.button>
    </section>
  );
}

function RewardBanner({ reward }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -2 }}
      className="flex flex-col gap-2"
    >
      {/* Yellow header with tilted "finder card" + reward amount */}
      <div className="aspect-[16/9] w-full overflow-hidden rounded-sm">
        <div className="flex h-7 w-full items-center justify-center gap-1 rounded-t-sm border-b-0 border-l border-r border-t border-line-normal bg-accent-yellow px-2">
          <FinderCardMark amount={reward.amount} />
          <span className="text-[14px] font-black italic leading-4 tracking-[-0.14px] text-ink-main">
            {reward.amount.toUpperCase()} REWARD
          </span>
        </div>
        {/* White logo tile */}
        <div className="relative flex h-[calc(100%-1.75rem)] w-full items-center justify-center rounded-b-sm border-b border-l border-r border-line-normal bg-white px-4">
          <BrandLogo
            brand={reward.brand}
            color={reward.brandColor}
          />
          <div className="absolute bottom-2 right-2">
            <IconCircleButton ariaLabel="Share">
              <Share2 className="h-5 w-5" strokeWidth={2} />
            </IconCircleButton>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[2px]">
        <p className="text-[12px] leading-[18px] text-ink-secondary">
          {reward.category}
        </p>
        <p className="text-[14px] font-extrabold leading-[18px] text-ink-main">
          {reward.title}
        </p>
        <p className="text-[12px] font-medium leading-[18px] text-accent-red">
          {reward.endsOn}
        </p>
      </div>
    </motion.a>
  );
}

/** Miniature tilted Finder-branded "Visa card" graphic from the Figma. */
function FinderCardMark({ amount }) {
  return (
    <span
      className="inline-flex h-6 w-[34px] items-center justify-center"
      aria-hidden
    >
      <span className="flex h-[20px] w-8 -rotate-[8deg] flex-col items-center justify-between rounded-[2px] bg-brand px-[2px] py-[2px]">
        <span className="text-[5px] font-extrabold leading-none text-white">
          finder
        </span>
        <span className="flex w-full items-center justify-between">
          <span className="text-[5px] font-black leading-none text-white">
            {amount}
          </span>
          <span className="text-[5px] font-black italic leading-none text-white">
            VISA
          </span>
        </span>
      </span>
    </span>
  );
}
