import React from 'react';
import { Link } from 'wouter';
import { Facebook, Instagram, MessageCircle, Twitter } from 'lucide-react';
import { SiPinterest } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#1a0d00] text-[#f5f0e8] pt-[64px] pb-[32px]">
      <div className="container mx-auto px-8">
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-[64px]">
          {/* Col 1 - Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] bg-[#d4af37] flex items-center justify-center text-[#1a1208] font-serif font-bold text-xl">
                ZC
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-[14px] leading-tight text-white uppercase">
                  ZAFEX COLLECTIBLES
                </span>
                <span className="font-serif text-[10px] text-white/70 tracking-[1px] uppercase">
                  BRAND: ZAFS
                </span>
              </div>
            </div>
            
            <p className="font-sans text-[13px] text-[#f5f0e8]/70 leading-relaxed">
              Handcrafted armour, weaponry, cloaks, and fantasy artefacts for film, LARP, cosplay, and collectors. Every piece carries a story from ages past.
            </p>

            <div className="flex items-center gap-2">
              <a href="#" className="w-[32px] h-[32px] bg-[#2a1a08] rounded-md flex items-center justify-center text-[#f5f0e8] hover:text-[#d4af37] hover:border hover:border-[#d4af37] transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-[32px] h-[32px] bg-[#2a1a08] rounded-md flex items-center justify-center text-[#f5f0e8] hover:text-[#d4af37] hover:border hover:border-[#d4af37] transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-[32px] h-[32px] bg-[#2a1a08] rounded-md flex items-center justify-center text-[#f5f0e8] hover:text-[#d4af37] hover:border hover:border-[#d4af37] transition-all">
                <SiPinterest size={16} />
              </a>
              <a href="#" className="w-[32px] h-[32px] bg-[#2a1a08] rounded-md flex items-center justify-center text-[#f5f0e8] hover:text-[#d4af37] hover:border hover:border-[#d4af37] transition-all">
                <MessageCircle size={16} />
              </a>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <span className="border border-[#444] bg-[#111] text-[#f5f0e8] font-serif text-[10px] uppercase px-[10px] py-[4px] rounded-full">PAYONEER</span>
              <span className="border border-[#444] bg-[#111] text-[#f5f0e8] font-serif text-[10px] uppercase px-[10px] py-[4px] rounded-full">PAYPAL</span>
              <span className="border border-[#444] bg-[#111] text-[#f5f0e8] font-serif text-[10px] uppercase px-[10px] py-[4px] rounded-full">BANK PAY</span>
            </div>
          </div>

          {/* Col 2 - Company & Products */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-[10px] uppercase text-[#d4af37] tracking-[2px]">COMPANY & PRODUCTS</h4>
            <div className="flex flex-col gap-3">
              {['Home', 'Shop All Gear', 'About Us', 'Contact Support', 'New Arrivals', 'Custom Orders'].map(link => (
                <Link key={link} href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/ /g, '-')}`} className="font-sans text-[13px] text-[#f5f0e8]/70 hover:text-[#d4af37] transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 - Community & Policies */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-[10px] uppercase text-[#d4af37] tracking-[2px]">COMMUNITY & POLICIES</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Terms & Conditions', href: '/terms-and-conditions' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Shipping Policy', href: '/shipping-policy' },
                { label: 'Refund Policy', href: '/refund-policy' },
                { label: 'Product Care Guide', href: '/product-maintenance' },
                { label: 'FAQs', href: '/faqs' }
              ].map(link => (
                <Link key={link.label} href={link.href} className="font-sans text-[13px] text-[#f5f0e8]/70 hover:text-[#d4af37] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4 - Browse Categories */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-[10px] uppercase text-[#d4af37] tracking-[2px]">BROWSE CATEGORIES</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Weaponry Collection', href: '/shop?cat=weaponry' },
                { label: 'Clothing Collection', href: '/shop?cat=clothing' },
                { label: 'Armour Collection', href: '/shop?cat=armour' },
                { label: 'Accessories Catalog', href: '/shop?cat=accessories' },
                { label: 'Limited Editions', href: '/shop?badge=limited' },
                { label: 'Sale Items', href: '/shop?sale=true' }
              ].map(link => (
                <Link key={link.label} href={link.href} className="font-sans text-[13px] text-[#f5f0e8]/70 hover:text-[#d4af37] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2a1a08] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[12px] text-[#f5f0e8]/50 text-center md:text-left">
            © 2026 Zafex Enterprises. All Rights Reserved. Designed for LARP, Reenactment & Film under Brand: Zafs
          </p>
          <div className="font-sans text-[12px] text-[#f5f0e8]/50 flex flex-wrap justify-center gap-2 items-center text-center">
            <span>Meerut – 250002, UP, India</span>
            <span>|</span>
            <span>+91-8273506540</span>
            <span>|</span>
            <a href="mailto:zafexcollectibles@gmail.com" className="text-[#d4af37] hover:underline">zafexcollectibles@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
