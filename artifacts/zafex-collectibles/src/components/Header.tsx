import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { NAV_CATEGORIES, type NavCategory } from '@/data/categories';

/* ─── Dropdown panel ─────────────────────────────────────────────────── */
function CategoryDropdown({ cat }: { cat: NavCategory }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 bg-[#f0ebe3] border border-[#c8bfb0] shadow-lg z-50 min-w-[220px] py-2">
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

/* ─── Mobile drawer ──────────────────────────────────────────────────── */
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

/* ─── Main Header ────────────────────────────────────────────────────── */
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

  return (
    <>
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="sticky top-0 z-50 flex flex-col w-full">

        {/* ── Announcement bar ─────────────────────────────────── */}
        <div className="bg-[#9c1c1c] h-[36px] flex items-center justify-center overflow-hidden relative whitespace-nowrap">
          <div className="animate-[scroll-marquee_25s_linear_infinite] flex items-center text-white font-sans text-[11px] uppercase tracking-[2px]">
            <span className="mx-8">FREE SHIPPING ON ORDERS ABOVE ₹5,000 &nbsp;·&nbsp; AUTHENTIC QUALITY GUARANTEED &nbsp;·&nbsp; HANDCRAFTED IN MEERUT, INDIA</span>
            <span className="mx-8">FREE SHIPPING ON ORDERS ABOVE ₹5,000 &nbsp;·&nbsp; AUTHENTIC QUALITY GUARANTEED &nbsp;·&nbsp; HANDCRAFTED IN MEERUT, INDIA</span>
            <span className="mx-8">FREE SHIPPING ON ORDERS ABOVE ₹5,000 &nbsp;·&nbsp; AUTHENTIC QUALITY GUARANTEED &nbsp;·&nbsp; HANDCRAFTED IN MEERUT, INDIA</span>
          </div>
          <style>{`
            @keyframes scroll-marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-33.333%); }
            }
          `}</style>
        </div>

        {/* ── Row 1: Logo + Icons ──────────────────────────────── */}
        <header className="h-[64px] bg-[#c8b89a] border-b border-[#b0a088] flex items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-[38px] h-[38px] border-2 border-[#2a2016] flex items-center justify-center">
              <span className="font-serif font-bold text-[13px] text-[#2a2016] tracking-tight leading-none">ZC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-[16px] text-[#2a2016] leading-tight tracking-wide group-hover:text-[#5a3e00] transition-colors">
                ZAFEX COLLECTIBLES
              </span>
              <span className="font-sans text-[9px] text-[#5a4a30] tracking-[1.5px] uppercase">
                BRAND: ZAFS · EST. MEERUT
              </span>
            </div>
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <button className="text-[#2a2016] hover:text-[#8b6914] transition-colors" aria-label="Search">
              <Search size={19} strokeWidth={1.8} />
            </button>
            <button className="hidden sm:block text-[#2a2016] hover:text-[#8b6914] transition-colors" aria-label="Account">
              <User size={19} strokeWidth={1.8} />
            </button>
            <button className="relative text-[#2a2016] hover:text-[#8b6914] transition-colors" aria-label="Cart">
              <ShoppingBag size={19} strokeWidth={1.8} />
              <span className="absolute -top-1.5 -right-1.5 bg-[#9c1c1c] text-white w-[15px] h-[15px] flex items-center justify-center rounded-full text-[8px] font-sans font-bold">
                0
              </span>
            </button>
            <button
              className="lg:hidden text-[#2a2016] hover:text-[#8b6914] transition-colors ml-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={21} strokeWidth={1.8} />
            </button>
          </div>
        </header>

        {/* ── Row 2: Category Nav ──────────────────────────────── */}
        <nav
          className="hidden lg:flex bg-[#b5a48c] border-b border-[#9e9080] overflow-x-auto"
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
                className={`flex items-center gap-1 font-sans text-[11.5px] font-medium uppercase tracking-[0.8px] px-4 py-3 whitespace-nowrap transition-colors border-b-2 ${
                  location.startsWith(`/cat/${cat.slug}`)
                    ? 'text-[#5a3e00] border-[#5a3e00] bg-[#a89478]'
                    : 'text-[#2a2016] border-transparent hover:text-[#5a3e00] hover:bg-[#a89478]'
                }`}
              >
                {cat.label}
                <ChevronDown size={11} strokeWidth={2} className="opacity-60 mt-px" />
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
