// Inline SVG brand marks sized for the 80x48 Figma logo slot.
// Each component accepts a `className` for flexible sizing.
// Marks are stylised wordmarks using each brand's primary colour —
// close to the real mark for prototype purposes while remaining
// original artwork (no raster copies of licensed trademarks).

export function HbfLogo({ className = '' }) {
  // Teal lowercase "hbf" with a curved swoosh off the "f".
  return (
    <svg
      viewBox="0 0 140 48"
      className={className}
      role="img"
      aria-label="HBF"
    >
      <text
        x="4"
        y="38"
        fontFamily="Inter, Helvetica, Arial, sans-serif"
        fontSize="38"
        fontWeight="700"
        fill="#0A6E7E"
        letterSpacing="-1"
      >
        hbf
      </text>
      <path
        d="M84 20 C 104 8, 122 8, 136 14"
        stroke="#0A6E7E"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M112 22 C 120 18, 128 18, 134 20"
        stroke="#3FB1C0"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function OptusLogo({ className = '' }) {
  // Yellow roundel + dark "optus" wordmark.
  return (
    <svg
      viewBox="0 0 160 48"
      className={className}
      role="img"
      aria-label="Optus"
    >
      <circle cx="20" cy="24" r="14" fill="#FFD02E" />
      <circle cx="20" cy="24" r="5" fill="#141414" />
      <text
        x="44"
        y="33"
        fontFamily="Inter, Helvetica, Arial, sans-serif"
        fontSize="26"
        fontWeight="800"
        fill="#141414"
        letterSpacing="-0.5"
      >
        optus
      </text>
    </svg>
  );
}

export function DodoLogo({ className = '' }) {
  // Hot-pink "dodo" lowercase with a dot over the second "o".
  return (
    <svg
      viewBox="0 0 140 48"
      className={className}
      role="img"
      aria-label="Dodo"
    >
      <text
        x="4"
        y="36"
        fontFamily="Inter, Helvetica, Arial, sans-serif"
        fontSize="30"
        fontWeight="800"
        fill="#E6007E"
        letterSpacing="-1"
      >
        dodo
      </text>
      <circle cx="108" cy="10" r="4" fill="#E6007E" />
    </svg>
  );
}

export function UnloanLogo({ className = '' }) {
  // Dark-navy lowercase "unloan" — the real mark is a rounded sans.
  return (
    <svg
      viewBox="0 0 160 48"
      className={className}
      role="img"
      aria-label="Unloan"
    >
      <text
        x="4"
        y="34"
        fontFamily="Inter, Helvetica, Arial, sans-serif"
        fontSize="26"
        fontWeight="700"
        fill="#0A1F44"
        letterSpacing="-0.8"
      >
        unloan
      </text>
    </svg>
  );
}

export function CryptoComLogo({ className = '' }) {
  // Navy monogram diamond + "crypto.com" wordmark.
  return (
    <svg
      viewBox="0 0 180 48"
      className={className}
      role="img"
      aria-label="Crypto.com"
    >
      <polygon points="20,6 36,24 20,42 4,24" fill="#0A1F44" />
      <polygon
        points="20,14 30,24 20,34 10,24"
        fill="#ffffff"
        opacity="0.14"
      />
      <text
        x="44"
        y="31"
        fontFamily="Inter, Helvetica, Arial, sans-serif"
        fontSize="20"
        fontWeight="700"
        fill="#0A1F44"
        letterSpacing="-0.4"
      >
        crypto.com
      </text>
    </svg>
  );
}

export function NowFinanceLogo({ className = '' }) {
  // Red "NOW" block next to black "FINANCE".
  return (
    <svg
      viewBox="0 0 200 48"
      className={className}
      role="img"
      aria-label="Now Finance"
    >
      <rect x="0" y="8" width="64" height="32" rx="3" fill="#D92B2B" />
      <text
        x="32"
        y="31"
        textAnchor="middle"
        fontFamily="Inter, Helvetica, Arial, sans-serif"
        fontSize="20"
        fontWeight="900"
        fill="#ffffff"
        letterSpacing="1"
      >
        NOW
      </text>
      <text
        x="72"
        y="31"
        fontFamily="Inter, Helvetica, Arial, sans-serif"
        fontSize="18"
        fontWeight="800"
        fill="#141414"
        letterSpacing="0.5"
      >
        FINANCE
      </text>
    </svg>
  );
}

// Public map: data.brand string -> logo component.
export const LOGO_BY_BRAND = {
  HBF: HbfLogo,
  Optus: OptusLogo,
  dodo: DodoLogo,
  unloan: UnloanLogo,
  'Crypto.com': CryptoComLogo,
  'Now Finance': NowFinanceLogo,
};
