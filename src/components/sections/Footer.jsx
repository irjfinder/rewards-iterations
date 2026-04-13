import FinderLogo from '../ui/FinderLogo.jsx';

const COLUMNS = [
  {
    heading: 'Products',
    links: ['Credit cards', 'Home loans', 'Personal loans', 'Savings accounts', 'Insurance'],
  },
  {
    heading: 'Company',
    links: ['About us', 'Careers', 'Media room', 'Partnerships', 'Contact'],
  },
  {
    heading: 'Support',
    links: ['Help centre', 'Privacy', 'Terms', 'Editorial guidelines'],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-ink-main px-4 py-12 text-white">
      <div className="mx-auto max-w-[1160px]">
        <div className="flex items-center gap-2 pb-8">
          <div className="rounded-sm bg-white px-2 py-1">
            <FinderLogo />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="pb-3 text-[14px] font-extrabold uppercase tracking-[0.08em] text-white/80">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] text-white/80 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-[12px] leading-5 text-white/60">
          <p>© 2026 Hive Empire Pty Ltd. ABN 18 118 785 121.</p>
          <p className="pt-2">
            Finder is a financial comparison site. We provide general, not
            personal, advice. This prototype is a faithful recreation of the
            Figma design for development purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
