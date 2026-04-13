// Simple wordmark that approximates the Finder logo for the prototype.
// The real logo is a licensed mark — this standalone SVG renders cleanly
// and matches the Figma silhouette (blue square + black "finder" wordmark).
export default function FinderLogo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-[6px] ${className}`}>
      <span
        className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-[4px] bg-brand font-extrabold text-white"
        style={{ fontSize: 12, lineHeight: 1 }}
        aria-hidden
      >
        f
      </span>
      <span
        className="font-extrabold tracking-tight text-ink-main"
        style={{ fontSize: 16, lineHeight: '18px' }}
      >
        finder
      </span>
    </span>
  );
}
