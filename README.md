# Rewards Iterations — Finder Rewards Hub V2

A production-ready, hand-coded recreation of the
[Finder Rewards Hub V2 Figma prototype](https://www.figma.com/proto/6nUDTFROLI7RBwELk3BWMq/Rewards-Iterations?node-id=4863-34992).

## Stack

- **React 18** + **Vite** (JSX)
- **Tailwind CSS** 3 (design tokens mapped to the Figma `color/*` variables)
- **Framer Motion** for all transitions (filter pills, card enter/exit, modal, accordion, tab switch)
- **lucide-react** for the icon set (1-to-1 matches with the Figma iconography)

## Interactive flow

| Action | Result |
| --- | --- |
| Tap a filter pill (`Show all` / `Tracked visit` / `Validated` / `Ready to claim` / `Claimed`) | Reward grid animates to show only matching cards |
| Tap **Claim reward** on a "Ready to claim" card | Opens a confirmation modal — tap **Confirm claim** to flip the card to **Claimed**, update the "Total claimed" stat, and show a toast |
| Tap the **share** icon on any card | Uses the Web Share API if available, otherwise copies a share link and shows a toast |
| Tap the **info** icon on any card | Shows a toast with the reward body copy |
| Tap **Copy link** in *Refer a friend* | Copies the referral URL and flips the button to a "Copied" state |
| Tap a **Dashboard / Rewards / Credit / My Products** tab | Cross-fades to the matching page (Rewards = full content; others = placeholder) |
| Tap any **FAQ** question | Smoothly expands the answer; only one open at a time |

Hover and tap states are wired everywhere — the CTA buttons use spring-based `whileHover` / `whileTap` scaling, and the tab underline uses `layoutId` so the indicator morphs between tabs.

## Local development

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build into ./dist
npm run preview # serve the built bundle
```

## File layout

```
rewards-iterations/
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ App.jsx                # Shell + tab routing
   ├─ main.jsx               # Vite entry
   ├─ index.css              # Tailwind layers + base resets
   ├─ data/
   │  └─ rewards.js          # Rewards, referrals, more-rewards, FAQ data
   └─ components/
      ├─ ui/                 # Atoms: FinderLogo, BrandLogo, StatusBadge, IconCircleButton
      └─ sections/           # Molecules/Organisms: TopNav, BottomTabs,
                             # RewardsSection, RewardCard, ClaimModal,
                             # ReferralsSection, MoreRewards, FAQ, Footer
```

## Ship it to GitHub

```bash
cd rewards-iterations
git init
git add .
git commit -m "feat: recreate Finder Rewards Hub V2 prototype"

# Create the remote repo with GitHub CLI (recommended)
gh repo create rewards-iterations --public --source=. --remote=origin --push

# —or— push to a repo you've already created in the UI
git branch -M main
git remote add origin git@github.com:<your-user>/rewards-iterations.git
git push -u origin main
```

## Deploy

The built output is a static bundle, so any of these work with zero config:

```bash
# Vercel
npx vercel --prod

# Netlify (connect the GitHub repo, build command: `npm run build`, publish: `dist`)

# GitHub Pages (via vite-plugin + gh-pages branch)
npm run build
npx gh-pages -d dist
```

## Design fidelity notes

- Colour tokens in `tailwind.config.js` map directly to the Figma variables: `color/foreground/*`, `color/background/*`, `color/brand/normal`, `color/green/normal`, etc.
- Status-badge colours (claimed green fill, ready-to-claim green subtle, validated yellow subtle, tracked-visit sky subtle) are one-to-one with the prototype.
- Brand marks (HBF, Optus, Dodo, Unloan, Crypto.com, Now Finance) are rendered as type-based placeholders in brand colours. The source Figma references raster logos hosted on a short-lived CDN; swapping in the real SVGs is a 2-line change in `BrandLogo.jsx`.
