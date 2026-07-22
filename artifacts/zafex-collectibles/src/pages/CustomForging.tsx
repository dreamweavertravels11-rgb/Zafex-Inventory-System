import React from 'react';
import { Link } from 'wouter';
import { Mail, Phone, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PRODUCTS_WE_CUSTOMIZE = [
  'Chainmail Armor',
  'Chainmail Shirts & Hauberks',
  'Chainmail Coifs',
  'Medieval Helmets',
  'Viking Helmets',
  'Leather Armor',
  'Gambesons',
  'Medieval Clothing',
  'Leather Boots',
  'Belts & Accessories',
  'Shields',
  'Swords Scabbards & Holders',
  'LARP Equipment',
  'Cosplay Costumes',
  'Historical Reenactment Gear',
];

const REQUEST_CHECKLIST = [
  'Product photos, sketches, or reference images',
  'Required measurements or size chart',
  'Material preference',
  'Color requirements',
  'Quantity required',
  'Shipping destination',
  'Any special customization details',
];

const WHAT_WE_PROVIDE = [
  'Product quotation',
  'Manufacturing timeline',
  'Shipping options',
  'Estimated delivery date',
];

export default function CustomForging() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Request Received',
      description: "Our team will review your specifications and get back to you with a quote.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-[#f5f0e8] min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#cec3b5] flex flex-col items-center justify-center text-center px-4 py-16">
        <div className="font-sans text-[10px] uppercase tracking-[2.5px] text-[#5a4a30]/70 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-[#2a2016] transition-colors">HOME</Link>
          <span className="text-[#5a4a30]/40">/</span>
          <span className="text-[#2a2016]">CUSTOM ORDERS</span>
        </div>
        <h1 className="font-serif text-[48px] sm:text-[62px] font-light text-[#1a1208] uppercase leading-none tracking-[0.1em] mb-6">
          Custom Orders
        </h1>
        <p className="font-serif text-[17px] sm:text-[20px] font-light text-[#5a4a30] italic max-w-2xl">
          Handcrafted medieval products built exactly to your specifications
        </p>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────── */}
      <section className="max-w-[860px] mx-auto px-6 py-16 text-center">
        <p className="font-sans text-[15px] sm:text-[16px] text-[#4a4a4a] leading-[1.9]">
          At Zafex Collectibles, we specialize in manufacturing custom medieval products built according to your exact specifications. Whether you need a single bespoke piece or large-volume wholesale production, our artisans are ready to bring your vision to life.
        </p>
      </section>

      {/* ── What We Can Customize ─────────────────────────────────────── */}
      <section className="bg-[#e8e0d4] py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="mb-10 text-center">
            <span className="font-sans text-[10px] uppercase tracking-[3px] text-[#8b6914] block mb-3">BESPOKE MANUFACTURING</span>
            <h2 className="font-serif text-[34px] sm:text-[40px] font-light text-[#1a1208] uppercase leading-none tracking-[0.06em]">
              We Can Customize
            </h2>
            <div className="w-[40px] h-[2px] bg-[#8b6914] mt-5 mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {PRODUCTS_WE_CUSTOMIZE.map((item) => (
              <div
                key={item}
                className="bg-[#f5f0e8] border border-[#d4cdc4] px-4 py-4 text-center font-sans text-[11px] uppercase tracking-[1px] text-[#2a2016] leading-snug hover:border-[#8b6914] hover:bg-[#ede9e3] transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────── */}
      <section className="max-w-[1100px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* What to provide */}
          <div>
            <div className="mb-8">
              <span className="font-sans text-[10px] uppercase tracking-[3px] text-[#8b6914] block mb-3">WHAT YOU SEND US</span>
              <h2 className="font-serif text-[30px] sm:text-[36px] font-light text-[#1a1208] uppercase leading-none tracking-[0.06em]">
                To Request a Custom Order
              </h2>
              <div className="w-[40px] h-[2px] bg-[#8b6914] mt-5" />
            </div>
            <p className="font-sans text-[14px] text-[#4a4a4a] leading-[1.9] mb-6">
              Please provide the following so we can prepare an accurate quotation:
            </p>
            <ul className="space-y-3">
              {REQUEST_CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-[14px] text-[#4a4a4a] leading-relaxed">
                  <CheckCircle2 size={16} className="text-[#8b6914] flex-shrink-0 mt-[3px]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What we provide */}
          <div>
            <div className="mb-8">
              <span className="font-sans text-[10px] uppercase tracking-[3px] text-[#8b6914] block mb-3">OUR RESPONSE</span>
              <h2 className="font-serif text-[30px] sm:text-[36px] font-light text-[#1a1208] uppercase leading-none tracking-[0.06em]">
                What We Provide
              </h2>
              <div className="w-[40px] h-[2px] bg-[#8b6914] mt-5" />
            </div>
            <p className="font-sans text-[14px] text-[#4a4a4a] leading-[1.9] mb-6">
              Once we receive your request, our team will review the specifications and provide:
            </p>
            <ul className="space-y-3 mb-8">
              {WHAT_WE_PROVIDE.map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-[14px] text-[#4a4a4a] leading-relaxed">
                  <CheckCircle2 size={16} className="text-[#8b6914] flex-shrink-0 mt-[3px]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-[14px] text-[#4a4a4a] leading-[1.9] italic border-l-2 border-[#8b6914] pl-5">
              We welcome both individual custom orders and bulk wholesale manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact + Request Form ─────────────────────────────────────── */}
      <section className="bg-[#1a1208] py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-sans text-[10px] uppercase tracking-[3px] text-[#8b6914] block mb-3">GET IN TOUCH</span>
            <h2 className="font-serif text-[36px] sm:text-[44px] font-light text-white uppercase leading-none tracking-[0.08em]">
              Contact for Custom Orders
            </h2>
            <div className="w-[40px] h-[1px] bg-[#8b6914] mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Contact details */}
            <div>
              <p className="font-serif text-[20px] font-light text-[#d4af37] mb-8">Zafex Collectibles</p>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-[#8b6914] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[2px] text-[#8b6914] mb-1">Email</p>
                    <a href="mailto:zafexcollectibles@gmail.com" className="font-sans text-[14px] text-[#c8bdb0] hover:text-white transition-colors">
                      zafexcollectibles@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-[#8b6914] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[2px] text-[#8b6914] mb-1">Phone / WhatsApp</p>
                    <a href="tel:+918273506540" className="font-sans text-[14px] text-[#c8bdb0] hover:text-white transition-colors">
                      +91-8273506540
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:zafexcollectibles@gmail.com"
                  className="inline-flex items-center justify-center gap-2 bg-[#d4af37] text-[#1a1208] font-sans text-[11px] uppercase tracking-[2px] px-8 py-4 hover:bg-white transition-colors font-semibold"
                >
                  <Mail size={14} />
                  EMAIL US
                </a>
                <a
                  href="https://wa.me/918273506540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#d4af37] text-[#d4af37] font-sans text-[11px] uppercase tracking-[2px] px-8 py-4 hover:bg-[#d4af37] hover:text-[#1a1208] transition-colors"
                >
                  <Phone size={14} />
                  WHATSAPP
                </a>
              </div>
            </div>

            {/* Quick enquiry form */}
            <div className="bg-[#2a1a08] border border-[#3a2a18] p-8">
              <h3 className="font-serif text-[20px] font-light text-white uppercase tracking-[0.06em] mb-6 pb-4 border-b border-[#3a2a18]">
                Quick Enquiry
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-sans text-[10px] uppercase tracking-[1.5px] text-[#8b6914] block mb-2">Name</label>
                    <input required type="text" className="w-full h-[44px] bg-[#1a1208] border border-[#3a2a18] px-4 font-sans text-[13px] text-white focus:outline-none focus:border-[#8b6914] transition-colors" />
                  </div>
                  <div>
                    <label className="font-sans text-[10px] uppercase tracking-[1.5px] text-[#8b6914] block mb-2">Email</label>
                    <input required type="email" className="w-full h-[44px] bg-[#1a1208] border border-[#3a2a18] px-4 font-sans text-[13px] text-white focus:outline-none focus:border-[#8b6914] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="font-sans text-[10px] uppercase tracking-[1.5px] text-[#8b6914] block mb-2">Product Type</label>
                  <input required type="text" placeholder="e.g. Chainmail Hauberk, Viking Helmet…" className="w-full h-[44px] bg-[#1a1208] border border-[#3a2a18] px-4 font-sans text-[13px] text-white placeholder:text-white/30 focus:outline-none focus:border-[#8b6914] transition-colors" />
                </div>
                <div>
                  <label className="font-sans text-[10px] uppercase tracking-[1.5px] text-[#8b6914] block mb-2">Details & Requirements</label>
                  <textarea required rows={4} placeholder="Describe your requirements, measurements, material preferences, quantity…" className="w-full bg-[#1a1208] border border-[#3a2a18] p-4 font-sans text-[13px] text-white placeholder:text-white/30 focus:outline-none focus:border-[#8b6914] transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full h-[48px] bg-[#8b6914] text-white font-sans text-[11px] uppercase tracking-[2px] hover:bg-[#d4af37] hover:text-[#1a1208] transition-colors font-semibold">
                  SEND ENQUIRY
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
