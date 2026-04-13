import { LOGO_BY_BRAND } from './logos.jsx';

// Resolves a brand name to the matching SVG component.
// Falls back to a text mark in the brand colour if no logo is registered.
export default function BrandLogo({
  brand,
  color = '#111',
  className = '',
  size = 'md', // 'md' = 80x48 (card), 'sm' = 56x32 (referrals)
}) {
  const Logo = LOGO_BY_BRAND[brand];
  const sizing =
    size === 'sm' ? 'h-8 w-14' : 'h-12 w-20';

  if (Logo) {
    return (
      <div
        className={`flex items-center justify-center ${sizing} ${className}`}
      >
        <Logo className="h-full w-full" />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center rounded-md px-2 ${sizing} ${className}`}
      style={{ color }}
      aria-label={brand}
    >
      <span
        className="font-extrabold leading-none"
        style={{ fontSize: brand.length > 8 ? 12 : 14, letterSpacing: '-0.2px' }}
      >
        {brand}
      </span>
    </div>
  );
}
