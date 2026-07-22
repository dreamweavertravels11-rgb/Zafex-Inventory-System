import React from 'react';
import { Link, useLocation } from 'wouter';
import { Search, MessageCircle, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [location] = useLocation();
  const isShopPage = location.startsWith('/shop');

  const navLinks = [
    { label: 'HOME', href: '/' },
    { 
      label: 'WEAPONRY ▾', 
      href: '/shop?cat=weaponry',
      dropdown: [
        { label: 'Swords', href: '/shop?cat=weaponry&sub=swords' },
        { label: 'Axes & Hammers', href: '/shop?cat=weaponry&sub=axes-hammers' },
        { label: 'Daggers', href: '/shop?cat=weaponry&sub=daggers' },
        { label: 'Bows & Arrows', href: '/shop?cat=weaponry&sub=bows-arrows' },
        { label: 'Training Weapons', href: '/shop?cat=weaponry&sub=training-weapons' }
      ]
    },
    { 
      label: 'ARMOUR ▾', 
      href: '/shop?cat=armour',
      dropdown: [
        { label: 'Breastplates', href: '/shop?cat=armour&sub=breastplates' },
        { label: 'Helmets', href: '/shop?cat=armour&sub=helmets' },
        { label: 'Chainmail', href: '/shop?cat=armour&sub=chainmail' },
        { label: 'Shields', href: '/shop?cat=armour&sub=shields' }
      ]
    },
    { 
      label: 'CLOTHING ▾', 
      href: '/shop?cat=clothing',
      dropdown: [
        { label: 'Tabards', href: '/shop?cat=clothing&sub=tabards' },
        { label: 'Tunics', href: '/shop?cat=clothing&sub=tunics' },
        { label: 'Cloaks & Robes', href: '/shop?cat=clothing&sub=cloaks-robes' }
      ]
    },
    { 
      label: 'ACCESSORIES ▾', 
      href: '/shop?cat=accessories',
      dropdown: [
        { label: 'Belts', href: '/shop?cat=accessories&sub=belts' },
        { label: 'Bags & Pouches', href: '/shop?cat=accessories&sub=bags-pouches' },
        { label: 'Jewellery', href: '/shop?cat=accessories&sub=jewellery' }
      ]
    },
    { label: 'SHOP ALL', href: '/shop' },
    { label: 'NEW IN', href: '/shop?badge=new' }
  ];

  return (
    <div className="sticky top-0 z-50 flex flex-col w-full">
      {isShopPage && (
        <div className="bg-[#9c1c1c] overflow-hidden h-[36px] flex items-center relative whitespace-nowrap">
          <div className="animate-[scroll-marquee_20s_linear_infinite] flex items-center text-white font-serif text-[11px] uppercase tracking-[2px]">
            <span className="mx-4">▶ FREE SHIPPING ON ORDERS ABOVE ₹5,000  ●  AUTHENTIC QUALITY GUARANTEED</span>
            <span className="mx-4">▶ FREE SHIPPING ON ORDERS ABOVE ₹5,000  ●  AUTHENTIC QUALITY GUARANTEED</span>
            <span className="mx-4">▶ FREE SHIPPING ON ORDERS ABOVE ₹5,000  ●  AUTHENTIC QUALITY GUARANTEED</span>
            <span className="mx-4">▶ FREE SHIPPING ON ORDERS ABOVE ₹5,000  ●  AUTHENTIC QUALITY GUARANTEED</span>
          </div>
          <style>{`
            @keyframes scroll-marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      )}

      <header className="h-[64px] bg-[#1a1208] border-b border-[#333] flex items-center justify-between px-8 text-[#f5f0e8]">
        {/* Logo Left */}
        <div className="flex items-center gap-3">
          <div className="w-[36px] h-[36px] bg-[#d4af37] flex items-center justify-center text-[#1a1208] font-serif font-bold text-lg">
            ZC
          </div>
          <div className="flex flex-col">
            <Link href="/" className="font-serif font-semibold text-[16px] leading-tight hover:text-[#d4af37] transition-colors">
              ZAFEX COLLECTIBLES
            </Link>
            <span className="font-serif text-[9px] text-[#d4af37]/80 tracking-[1px] uppercase">
              BRAND: ZAFS · EST. MEERUT
            </span>
          </div>
        </div>

        {/* Center NavLinks */}
        <nav className="flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <div key={link.label} className="relative h-full flex items-center group">
              <Link 
                href={link.href}
                className={`font-serif text-[11px] uppercase tracking-[1.5px] hover:text-[#d4af37] transition-colors ${
                  location === link.href ? 'text-[#d4af37] border-b border-[#d4af37]' : 'text-[#f5f0e8]'
                }`}
              >
                {link.label}
              </Link>
              
              {link.dropdown && (
                <div className="absolute top-[64px] left-1/2 -translate-x-1/2 bg-[#1a0d00] border border-[#333] hidden group-hover:flex flex-col py-2 min-w-[200px] shadow-xl">
                  {link.dropdown.map((subLink) => (
                    <Link 
                      key={subLink.label} 
                      href={subLink.href}
                      className="font-serif text-[11px] uppercase tracking-[2px] text-[#f5f0e8] hover:text-[#d4af37] hover:bg-[#1a1208] px-6 py-3 whitespace-nowrap transition-colors"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <button className="text-[#f5f0e8] hover:text-[#d4af37] transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <Link href="/contact" className="text-[#f5f0e8] hover:text-[#d4af37] transition-colors">
            <MessageCircle size={20} strokeWidth={1.5} />
          </Link>
          <button className="text-[#f5f0e8] hover:text-[#d4af37] transition-colors relative flex items-center">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-1.5 bg-[#1a0d00] text-[#f5f0e8] border border-[#d4af37] w-[16px] h-[16px] flex items-center justify-center rounded-full text-[9px] font-sans">
              0
            </span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
