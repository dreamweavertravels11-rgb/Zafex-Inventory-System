import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Search, MessageCircle, ShoppingBag, Menu, X } from 'lucide-react';
import { NAV_CATEGORIES, type NavCategory } from '@/data/categories';

/* ─── Dropdown panel for one category ───────────────────────────────── */
function CategoryDropdown({ cat }: { cat: NavCategory }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 bg-[#1a0d00] border border-[#333] shadow-2xl z-50 min-w-[220px] py-2">
      {/* heading */}
      <div className="px-5 pt-1 pb-3 border-b border-[#333] mb-1">
        <Link
          href={`/cat/${cat.slug}`}
          className="font-serif text-[11px] uppercase tracking-[2px] text-[#d4af37] hover:text-white transition-colors"
        >
          {cat.label} →
        </Link>
      </div>
      {cat.subs.map((s) => (
        <Link
          key={s.slug}
          href={`/cat/${cat.slug}/${s.slug}`}
          className="block font-serif text-[11px] uppercase tracking-[1.5px] text-[#c8c4bc] hover:text-[#d4af37] hover:bg-[#1a1208] px-5 py-2.5 whitespace-nowrap transition-colors"
        >
          {s.label}
        </Link>
      ))}
    </div>
  );
}

/* ─── Mobile drawer ──────────────────────────────────────────────────── */
function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />
      {/* panel */}
      <div className="relative ml-auto w-[300px] h-full bg-[#1a0d00] flex flex-col overflow-y-auto">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#333]">
          <span className="font-serif text-[13px] uppercase tracking-[2px] text-[#d4af37]">
            MENU
          </span>
          <button onClick={onClose} className="text-[#f5f0e8] hover:text-[#d4af37]">
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col py-2">
          <Link
            href="/"
            onClick={onClose}
            className="font-serif text-[11px] uppercase tracking-[2px] text-[#f5f0e8] hover:text-[#d4af37] px-5 py-3 border-b border-[#2a1a08] transition-colors"
          >
            HOME
          </Link>

          {NAV_CATEGORIES.map((cat) => (
            <div key={cat.slug} className="border-b border-[#2a1a08]">
              <button
                onClick={() =>
                  setExpanded((prev) => (prev === cat.slug ? null : cat.slug))
                }
                className="w-full flex items-center justify-between font-serif text-[11px] uppercase tracking-[2px] text-[#f5f0e8] hover:text-[#d4af37] px-5 py-3 transition-colors"
              >
                {cat.label}
                <span className="text-[#d4af37]/60 text-[10px]">
                  {expanded === cat.slug ? '▲' : '▼'}
                </span>
              </button>

              {expanded === cat.slug && (
                <div className="bg-[#120900] flex flex-col pb-2">
                  <Link
                    href={`/cat/${cat.slug}`}
                    onClick={onClose}
                    className="font-serif text-[10px] uppercase tracking-[1.5px] text-[#d4af37] hover:text-white px-8 py-2 transition-colors"
                  >
                    All {cat.label} →
                  </Link>
                  {cat.subs.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/cat/${cat.slug}/${s.slug}`}
                      onClick={onClose}
                      className="font-serif text-[10px] uppercase tracking-[1.5px] text-[#c8c4bc] hover:text-[#d4af37] px-8 py-2 transition-colors"
                    >
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

/* ─── Main Header ────────────────────────────────────────────────────── */
const Header = () => {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // close dropdown when route changes
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

  return (
    <>
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="sticky top-0 z-50 flex flex-col w-full">
        {/* ── Row 1: Logo + Icons ──────────────────────────────── */}
        <header className="h-[64px] bg-[#1a1208] border-b border-[#2a1a08] flex items-center justify-between px-6 text-[#f5f0e8]">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-[36px] h-[36px] bg-[#d4af37] flex items-center justify-center text-[#1a1208] font-serif font-bold text-lg flex-shrink-0">
              ZC
            </div>
            <div className="flex flex-col">
              <Link
                href="/"
                className="font-serif font-semibold text-[15px] leading-tight hover:text-[#d4af37] transition-colors whitespace-nowrap"
              >
                ZAFEX COLLECTIBLES
              </Link>
              <span className="font-serif text-[9px] text-[#d4af37]/80 tracking-[1px] uppercase">
                BRAND: ZAFS · EST. MEERUT
              </span>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <button className="text-[#f5f0e8] hover:text-[#d4af37] transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <Link
              href="/contact"
              className="text-[#f5f0e8] hover:text-[#d4af37] transition-colors"
            >
              <MessageCircle size={20} strokeWidth={1.5} />
            </Link>
            <button className="text-[#f5f0e8] hover:text-[#d4af37] transition-colors relative flex items-center">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-1.5 bg-[#1a0d00] text-[#f5f0e8] border border-[#d4af37] w-[16px] h-[16px] flex items-center justify-center rounded-full text-[9px] font-sans">
                0
              </span>
            </button>
            {/* hamburger — mobile */}
            <button
              className="lg:hidden text-[#f5f0e8] hover:text-[#d4af37] transition-colors ml-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </header>

        {/* ── Row 2: Category Nav ──────────────────────────────── */}
        <nav
          ref={navRef}
          className="hidden lg:flex bg-[#120900] border-b border-[#2a1a08] overflow-x-auto scrollbar-none"
          style={{ scrollbarWidth: 'none' }}
        >
          {NAV_CATEGORIES.map((cat) => (
            <div
              key={cat.slug}
              className="relative flex-shrink-0"
              onMouseEnter={() => handleMouseEnter(cat.slug)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={`/cat/${cat.slug}`}
                className={`block font-serif text-[10.5px] uppercase tracking-[1.2px] px-4 py-3 whitespace-nowrap transition-colors border-b-2 ${
                  location.startsWith(`/cat/${cat.slug}`)
                    ? 'text-[#d4af37] border-[#d4af37]'
                    : 'text-[#c8c4bc] hover:text-[#d4af37] border-transparent hover:border-[#d4af37]/50'
                }`}
              >
                {cat.label}
              </Link>

              {activeDropdown === cat.slug && (
                <div
                  onMouseEnter={() => handleMouseEnter(cat.slug)}
                  onMouseLeave={handleMouseLeave}
                >
                  <CategoryDropdown cat={cat} />
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
