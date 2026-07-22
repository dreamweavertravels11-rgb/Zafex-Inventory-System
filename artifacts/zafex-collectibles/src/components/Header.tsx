import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Search, User, ShoppingBag, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { NAV_CATEGORIES, type NavCategory } from '@/data/categories';

/* ── Split 17 items into two rows (8 + 9) ─────────────────────────── */
const ROW1 = NAV_CATEGORIES.slice(0, 8);  // Chainmail → Viking Collection
const ROW2 = NAV_CATEGORIES.slice(8);     // Shields → Resources

/* ─── Dropdown panel ─────────────────────────────────────────────── */
function CategoryDropdown({ cat }: { cat: NavCategory }) {
  return (
    <div className="absolute top-full left-0 bg-[#f0ebe3] border border-[#c8bfb0] shadow-lg z-50 min-w-[220px] py-2">
      <div className="px-5 pt-1 pb-3 border-b border-[#d4cdc4] mb-1">
        <Link
          href={`/cat/${cat.slug}`}
          className="font-serif text-[11px] uppercase tracking-[2px] text-[#8b6914] hover:text-[#5a3e00] transition-colors"
        >
          {cat.label} →
        </Link>
      </div>
      {cat.subs.map((s) => (
        <Link
          key={s.slug}
          href={`/cat/${cat.slug}/${s.slug}`}
          className="block font-sans text-[12px] text-[#2a2016] hover:text-[#8b6914] hover:bg-[#e8e0d4] px-5 py-2 whitespace-nowrap transition-colors"
        >
          {s.label}
        </Link>
      ))}
    </div>
  );
}

/* ─── Single nav item ────────────────────────────────────────────── */
function NavItem({
  cat,
  active,
  onEnter,
  onLeave,
  isOpen,
}: {
  cat: NavCategory;
  active: boolean;
  onEnter: (slug: string) => void;
  onLeave: () => void;
  isOpen: boolean;
}) {
  return (
    <div
      className="relative flex-shrink-0"
      onMouseEnter={() => onEnter(cat.slug)}
      onMouseLeave={onLeave}
    >
      <Link
        href={`/cat/${cat.slug}`}
        className={`flex items-center gap-[2px] font-sans text-[10px] font-medium uppercase tracking-[0.4px] px-[7px] py-[6px] whitespace-nowrap transition-colors border-b-2 ${
          active
            ? 'text-[#5a3e00] border-[#5a3e00]'
            : 'text-[#2a2016] border-transparent hover:text-[#5a3e00]'
        }`}
      >
        {cat.label}
        <ChevronDown size={8} strokeWidth={2.5} className="opacity-50 mt-px flex-shrink-0" />
      </Link>

      {isOpen && (
        <div onMouseEnter={() => onEnter(cat.slug)} onMouseLeave={onLeave}>
          <CategoryDropdown cat={cat} />
        </div>
      )}
    </div>
  );
}

/* ─── Mobile drawer ─────────────────────────────────────────────── */
function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[200] flex">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative ml-auto w-[300px] h-full bg-[#f0ebe3] flex flex-col overflow-y-auto shadow-2xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#d4cdc4]">
          <span className="font-serif text-[13px] uppercase tracking-[2px] text-[#2a2016]">MENU</span>
          <button onClick={onClose} className="text-[#2a2016] hover:text-[#8b6914]">
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col py-2">
          <Link href="/" onClick={onClose} className="font-sans text-[12px] uppercase tracking-[1.5px] text-[#2a2016] hover:text-[#8b6914] hover:bg-[#e8e0d4] px-5 py-3 border-b border-[#e0d8ce] transition-colors">
            Home
          </Link>
          {NAV_CATEGORIES.map((cat) => (
            <div key={cat.slug} className="border-b border-[#e0d8ce]">
              <button
                onClick={() => setExpanded((p) => (p === cat.slug ? null : cat.slug))}
                className="w-full flex items-center justify-between font-sans text-[12px] uppercase tracking-[1.5px] text-[#2a2016] hover:text-[#8b6914] hover:bg-[#e8e0d4] px-5 py-3 transition-colors"
              >
                {cat.label}
                <ChevronDown size={13} className={`text-[#8b6914] transition-transform ${expanded === cat.slug ? 'rotate-180' : ''}`} />
              </button>
              {expanded === cat.slug && (
                <div className="bg-[#e8e0d4] flex flex-col pb-1">
                  <Link href={`/cat/${cat.slug}`} onClick={onClose} className="font-sans text-[11px] uppercase tracking-[1.5px] text-[#8b6914] hover:text-[#5a3e00] px-8 py-2 transition-colors">
                    All {cat.label} →
                  </Link>
                  {cat.subs.map((s) => (
                    <Link key={s.slug} href={`/cat/${cat.slug}/${s.slug}`} onClick={onClose} className="font-sans text-[11px] text-[#3a3028] hover:text-[#8b6914] px-8 py-2 transition-colors">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

/* ─── Main Header ───────────────────────────────────────────────── */
const Header = () => {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [location]);

  const handleMouseEnter = (slug: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveDropdown(slug);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const navRows = (
    <nav className="hidden lg:flex flex-col justify-center h-full">
      {/* Row 1 */}
      <div className="flex items-center">
        {ROW1.map((cat) => (
          <NavItem
            key={cat.slug}
            cat={cat}
            active={location.startsWith(`/cat/${cat.slug}`)}
            onEnter={handleMouseEnter}
            onLeave={handleMouseLeave}
            isOpen={activeDropdown === cat.slug}
          />
        ))}
      </div>
      {/* Row 2 */}
      <div className="flex items-center">
        {ROW2.map((cat) => (
          <NavItem
            key={cat.slug}
            cat={cat}
            active={location.startsWith(`/cat/${cat.slug}`)}
            onEnter={handleMouseEnter}
            onLeave={handleMouseLeave}
            isOpen={activeDropdown === cat.slug}
          />
        ))}
      </div>
    </nav>
  );

  return (
    <>
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="sticky top-0 z-50 w-full">

        {/* ── Announcement bar ───────────────────────────────── */}
        <div className="bg-[#9c1c1c] h-[34px] flex items-center justify-center overflow-hidden whitespace-nowrap">
          <div className="animate-[scroll-marquee_28s_linear_infinite] flex items-center text-white font-sans text-[11px] uppercase tracking-[2px]">
            <span className="mx-8">FREE SHIPPING ON ORDERS ABOVE ₹5,000 &nbsp;·&nbsp; AUTHENTIC QUALITY GUARANTEED &nbsp;·&nbsp; HANDCRAFTED IN MEERUT, INDIA</span>
            <span className="mx-8">FREE SHIPPING ON ORDERS ABOVE ₹5,000 &nbsp;·&nbsp; AUTHENTIC QUALITY GUARANTEED &nbsp;·&nbsp; HANDCRAFTED IN MEERUT, INDIA</span>
            <span className="mx-8">FREE SHIPPING ON ORDERS ABOVE ₹5,000 &nbsp;·&nbsp; AUTHENTIC QUALITY GUARANTEED &nbsp;·&nbsp; HANDCRAFTED IN MEERUT, INDIA</span>
          </div>
          <style>{`
            @keyframes scroll-marquee {
              0%   { transform: translateX(0%); }
              100% { transform: translateX(-33.333%); }
            }
          `}</style>
        </div>

        {/* ── Main header — CSS Grid: [logo] [nav rows] [icons] ── */}
        {/*    Logo and icons each span both nav rows vertically    */}
        <header
          className="bg-[#c8b89a] border-b border-[#b0a088] px-5"
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            gridTemplateRows: 'auto auto',
            alignItems: 'center',
          }}
        >
          {/* Logo — spans both rows */}
          <div style={{ gridColumn: '1', gridRow: '1 / 3', alignSelf: 'center' }} className="pr-4">
            <Link href="/" className="flex items-center gap-2.5 group py-3">
              <div className="w-[36px] h-[36px] border-2 border-[#2a2016] flex items-center justify-center flex-shrink-0">
                <span className="font-serif font-bold text-[12px] text-[#2a2016] leading-none">ZC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-[15px] text-[#2a2016] leading-tight tracking-wide group-hover:text-[#5a3e00] transition-colors whitespace-nowrap">
                  ZAFEX COLLECTIBLES
                </span>
                <span className="font-sans text-[8.5px] text-[#5a4a30] tracking-[1.5px] uppercase">
                  BRAND: ZAFS · EST. MEERUT
                </span>
              </div>
            </Link>
          </div>

          {/* Nav rows — desktop only, spans center column both rows */}
          <div
            style={{ gridColumn: '2', gridRow: '1 / 3', alignSelf: 'stretch' }}
            className="hidden lg:flex flex-col justify-center"
          >
            {/* Row 1 */}
            <div className="flex items-center">
              {ROW1.map((cat) => (
                <NavItem
                  key={cat.slug}
                  cat={cat}
                  active={location.startsWith(`/cat/${cat.slug}`)}
                  onEnter={handleMouseEnter}
                  onLeave={handleMouseLeave}
                  isOpen={activeDropdown === cat.slug}
                />
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex items-center">
              {ROW2.map((cat) => (
                <NavItem
                  key={cat.slug}
                  cat={cat}
                  active={location.startsWith(`/cat/${cat.slug}`)}
                  onEnter={handleMouseEnter}
                  onLeave={handleMouseLeave}
                  isOpen={activeDropdown === cat.slug}
                />
              ))}
            </div>
          </div>

          {/* Icons — spans both rows */}
          <div
            style={{ gridColumn: '3', gridRow: '1 / 3', alignSelf: 'center' }}
            className="flex items-center gap-4 pl-4"
          >
            {/* Language — hidden on smaller desktops to save space */}
            <button className="hidden xl:flex items-center gap-1.5 text-[#2a2016] hover:text-[#5a3e00] transition-colors whitespace-nowrap" aria-label="Language">
              <Globe size={15} strokeWidth={1.8} />
              <span className="font-sans text-[11px] tracking-[0.4px]">India / EN</span>
            </button>
            <button className="text-[#2a2016] hover:text-[#5a3e00] transition-colors" aria-label="Account">
              <User size={18} strokeWidth={1.8} />
            </button>
            <button className="text-[#2a2016] hover:text-[#5a3e00] transition-colors" aria-label="Search">
              <Search size={18} strokeWidth={1.8} />
            </button>
            <button className="relative text-[#2a2016] hover:text-[#5a3e00] transition-colors" aria-label="Cart">
              <ShoppingBag size={18} strokeWidth={1.8} />
              <span className="absolute -top-1.5 -right-1.5 bg-[#9c1c1c] text-white w-[14px] h-[14px] flex items-center justify-center rounded-full text-[8px] font-bold">
                0
              </span>
            </button>
            {/* Hamburger — mobile only */}
            <button
              className="lg:hidden text-[#2a2016] hover:text-[#5a3e00] transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={1.8} />
            </button>
          </div>
        </header>

      </div>
    </>
  );
};

export default Header;
