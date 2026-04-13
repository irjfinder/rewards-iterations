// Reward data matching the Figma prototype.
// Status determines badge color + card CTA/body content.

export const STATUSES = {
  CLAIMED: 'claimed',
  READY: 'ready',
  VALIDATED: 'validated',
  TRACKED: 'tracked',
};

export const STATUS_LABEL = {
  [STATUSES.CLAIMED]: 'Claimed',
  [STATUSES.READY]: 'Ready to claim',
  [STATUSES.VALIDATED]: 'Validated',
  [STATUSES.TRACKED]: 'Tracked visit',
};

export const rewards = [
  {
    id: 'r-hbf-health',
    status: STATUSES.CLAIMED,
    amount: '$500',
    title: 'HBF health insurance',
    paymentDate: '14/08/2026',
    brand: 'HBF',
    brandColor: '#0A6E7E',
    body: "We sent your reward to your email. It's all yours! Your gift card must be activated within 90 days. You then have 3 years to spend it.",
  },
  {
    id: 'r-unloan',
    status: STATUSES.READY,
    amount: '$1,000',
    title: 'Unloan home loan',
    paymentDate: '02/07/2026',
    brand: 'unloan',
    brandColor: '#0A1F44',
    body: 'Your reward is ready and waiting for you. Click the button to claim.',
  },
  {
    id: 'r-optus',
    status: STATUSES.VALIDATED,
    amount: '$350',
    title: 'Optus Internet plan reward',
    paymentDate: '18/09/2026',
    brand: 'Optus',
    brandColor: '#FFD02E',
    body: 'High five! You met the eligibility criteria. Stay with your Optus plan to get rewarded on the payment date.',
  },
  {
    id: 'r-dodo',
    status: STATUSES.TRACKED,
    amount: '$50',
    title: 'Dodo internet plan reward',
    paymentDate: '30/09/2026',
    brand: 'dodo',
    brandColor: '#E6007E',
    body: 'We tracked your visit to Dodo.',
  },
];

export const referrals = [
  {
    id: 'ref-optus',
    brand: 'Optus',
    brandColor: '#FFD02E',
    title: 'Optus Internet plan referral',
    offerDate: '12/03/2026',
    perReferral: '$25',
    paymentDate: '25/04/2026',
    status: '2 referral clicks detected',
  },
  {
    id: 'ref-hbf-1',
    brand: 'HBF',
    brandColor: '#0A6E7E',
    title: 'HBF health insurance referral',
    offerDate: '18/03/2026',
    perReferral: '$25',
    paymentDate: '02/05/2026',
    status: '2 referral clicks detected',
  },
  {
    id: 'ref-hbf-2',
    brand: 'HBF',
    brandColor: '#0A6E7E',
    title: 'HBF health insurance referral',
    offerDate: '28/03/2026',
    perReferral: '$25',
    paymentDate: '12/05/2026',
    status: '2 referral clicks detected',
  },
];

export const moreRewards = [
  {
    id: 'm-dodo',
    category: 'Internet plan',
    title: 'Get $50 with Dodo',
    amount: '$50',
    brand: 'dodo',
    brandColor: '#FF0073',
    endsOn: 'Ends 24 Feb 2026',
  },
  {
    id: 'm-crypto',
    category: 'Cryptocurrency',
    title: 'Get $100 with Crypto.com',
    amount: '$100',
    brand: 'Crypto.com',
    brandColor: '#0A1F44',
    endsOn: 'Ends 27 Feb 2026',
  },
  {
    id: 'm-unloan',
    category: 'Home loans',
    title: 'Get $1,000 with Unloan',
    amount: '$1,000',
    brand: 'unloan',
    brandColor: '#0A1F44',
    endsOn: 'Ends 28 Feb 2026',
  },
  {
    id: 'm-now-finance',
    category: 'Personal loans',
    title: 'Get $500 with Now Finance',
    amount: '$500',
    brand: 'Now Finance',
    brandColor: '#111111',
    endsOn: 'Ends 28 Feb 2026',
  },
];

export const faqs = [
  {
    q: 'Does it cost anything?',
    a: "No. Finder Rewards is completely free for members. We get paid by our partners when you take up an offer — there's no cost passed on to you.",
  },
  {
    q: 'Where will I see these offers?',
    a: "You'll see personalised rewards in your Finder app dashboard, in the Rewards tab, and occasionally by email when a new offer matches a product you're comparing.",
  },
  {
    q: 'Are these endorsements?',
    a: "No — a reward isn't a recommendation. We show rewards alongside our editorial comparisons so you can still evaluate each product on its merits.",
  },
  {
    q: 'What about my personal information?',
    a: 'Your details are only shared with a partner when you choose to take up a specific offer. See our privacy policy for full detail.',
  },
  {
    q: 'Who is this for?',
    a: 'Any signed-in Finder member in Australia. Eligibility for individual rewards may vary — the terms on each card will tell you.',
  },
  {
    q: 'Are exclusives endorsements?',
    a: 'Exclusive offers are negotiated by Finder for our members. That doesn\'t make them an endorsement — compare them against alternatives before deciding.',
  },
  {
    q: "I'm a Finder Partner and would like to work with Finder on a Finder Reward. How do I get in touch?",
    a: "Reach out to your Finder account manager, or email partnerships@finder.com.au and we'll route you to the right team.",
  },
];
