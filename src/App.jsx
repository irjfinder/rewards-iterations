import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TopNav from './components/sections/TopNav.jsx';
import BottomTabs from './components/sections/BottomTabs.jsx';
import RewardsSection from './components/sections/RewardsSection.jsx';
import ReferralsSection from './components/sections/ReferralsSection.jsx';
import MoreRewards from './components/sections/MoreRewards.jsx';
import FAQ from './components/sections/FAQ.jsx';
import Footer from './components/sections/Footer.jsx';

export default function App() {
  // Active tab drives which "page" the user sees.
  // The Figma prototype starts on Rewards.
  const [tab, setTab] = useState('rewards');

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col bg-white shadow-[0_0_32px_rgba(0,0,0,0.04)]">
      <TopNav />
      <BottomTabs active={tab} onChange={setTab} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {tab === 'rewards' && (
              <>
                <RewardsSection />
                <ReferralsSection />
                <MoreRewards />
                <FAQ />
              </>
            )}
            {tab === 'dashboard' && <Placeholder title="Dashboard" />}
            {tab === 'credit' && <Placeholder title="Credit Score" />}
            {tab === 'products' && <Placeholder title="My Products" />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

function Placeholder({ title }) {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-surface-tinted px-4 py-16 text-center">
      <h2 className="text-[24px] font-extrabold tracking-[-0.36px] text-ink-main">
        {title}
      </h2>
      <p className="pt-2 text-[14px] leading-5 text-ink-secondary">
        This prototype focuses on the Rewards flow. Tap the Rewards tab to
        return.
      </p>
    </section>
  );
}
