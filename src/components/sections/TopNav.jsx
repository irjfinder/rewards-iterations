import { Menu, Search, Bell } from 'lucide-react';
import IconCircleButton from '../ui/IconCircleButton.jsx';
import FinderLogo from '../ui/FinderLogo.jsx';

export default function TopNav() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="flex items-center gap-2 pl-3 pr-4 py-3">
        <button
          type="button"
          aria-label="Open menu"
          className="-ml-1 inline-flex h-8 w-8 items-center justify-center rounded-sm hover:bg-surface-secondary"
        >
          <Menu className="h-6 w-6 text-ink-main" strokeWidth={2} />
        </button>
        <FinderLogo />

        <div className="ml-auto flex items-center gap-3">
          <div className="flex items-center gap-2">
            <IconCircleButton ariaLabel="Search">
              <Search className="h-5 w-5" strokeWidth={2} />
            </IconCircleButton>
            <IconCircleButton ariaLabel="Notifications" withDot>
              <Bell className="h-5 w-5" strokeWidth={2} />
            </IconCircleButton>
          </div>
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#ffd23b] to-[#db2420]">
            <span className="absolute inset-0 flex items-center justify-center text-[13px] font-extrabold text-white">
              IJ
            </span>
            <span className="absolute right-0 top-0 block h-[10px] w-[10px] rounded-full border-2 border-white bg-accent-red" />
          </div>
        </div>
      </div>
    </header>
  );
}
