import React from 'react';
import { Link } from 'wouter';

const About = () => {
  return (
    <div className="bg-[#f5f0e8] min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[40vh] min-h-[300px] bg-[#1a1a18] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#000]/70 z-10"></div>
        <img src="/images/swords.png" alt="Workshop" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        
        <div className="relative z-20">
          <div className="font-serif text-[11px] uppercase tracking-[2px] text-[#d4af37] mb-4 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">HOME</Link>
            <span className="text-white/50">/</span>
            <span className="text-white">ABOUT US</span>
          </div>
          <h1 className="font-script text-[72px] text-white leading-none mb-2">Our Heritage</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-[100px] container mx-auto px-4 max-w-[800px]">
        <div className="text-center mb-16">
          <span className="font-serif text-[11px] text-[#d4af37] tracking-[4px] uppercase block">THE WORKSHOP</span>
          <h2 className="font-serif text-[42px] font-bold text-[#1a1a18] mt-2 uppercase leading-none">CRAFTING HISTORY</h2>
          <div className="w-[40px] h-[3px] bg-[#9c1c1c] mx-auto mt-4 mb-3"></div>
        </div>

        <div className="prose prose-stone mx-auto font-sans text-[16px] text-[#4a4a4a] leading-[1.8]">
          <p className="mb-6">
            Based in the historic city of Meerut, India, <strong>Zafex Enterprises</strong> was founded with a singular vision: to revive the lost arts of ancient metalworking, leathercraft, and tailoring for the modern world. Operating under our flagship brand <strong>Zafex Collectibles & Zafs</strong>, we have grown from a small artisan workshop into a globally recognized purveyor of historical replicas and LARP gear.
          </p>
          <p className="mb-6">
            Our region has a rich, centuries-old tradition of metal fabrication and craftsmanship. We tap into this ancestral knowledge, employing multi-generational artisans who still use traditional forging, hammering, and riveting techniques. However, we balance this with modern quality control and materials engineering to ensure our products are not just beautiful displays, but functional, durable pieces ready for the rigors of reenactment.
          </p>
          
          <img src="/images/breastplates.png" alt="Armour detailing" className="w-full h-[400px] object-cover my-12" />
          
          <h3 className="font-serif text-[24px] font-bold text-[#1a1a18] uppercase tracking-[1px] mt-12 mb-6">Our Commitment</h3>
          <p className="mb-6">
            Whether you are a film production looking for authentic costume armour, a LARP enthusiast needing safe but realistic weaponry, or a collector seeking that perfect centrepiece for your study, we approach every commission with the same dedication. 
          </p>
          <ul className="list-disc pl-6 mb-8 text-[#4a4a4a]">
            <li className="mb-2"><strong>Authenticity:</strong> We study historical artifacts, museum pieces, and manuscripts to ensure our designs remain true to the periods they represent.</li>
            <li className="mb-2"><strong>Craftsmanship:</strong> No two pieces are exactly alike. The hammer marks and minor variations are the signatures of human hands, not the flaws of a machine.</li>
            <li className="mb-2"><strong>Durability:</strong> Our armour is built with gauge thicknesses appropriate for real use, and our LARP weapons feature robust fiberglass cores and high-density foams.</li>
          </ul>

          <h3 className="font-serif text-[24px] font-bold text-[#1a1a18] uppercase tracking-[1px] mt-12 mb-6">The Road Ahead</h3>
          <p>
            As we continue to expand our catalog, we remain grounded in our roots. Every breastplate shaped, every sword tempered, and every tunic stitched carries a piece of our story. We invite you to become a part of that ongoing saga.
          </p>
        </div>
      </section>

      {/* Script Section */}
      <section className="py-[100px] bg-[#1a0d00] text-center px-4">
        <h2 className="font-script text-[96px] text-[#d4af37] leading-none">About Us</h2>
        <div className="w-[80px] border-t border-[#d4af37] mx-auto my-8"></div>
        <h3 className="font-serif text-[14px] text-[#f5f0e8]/70 tracking-[4px] uppercase mb-8">
          HONORING THE PAST, FORGING THE FUTURE
        </h3>
        <Link 
          href="/shop" 
          className="inline-block border-2 border-[#d4af37] text-[#d4af37] bg-transparent font-serif uppercase text-[12px] font-bold tracking-[2px] py-[14px] px-[40px] hover:bg-[#d4af37] hover:text-[#1a0d00] transition-colors mt-4"
        >
          EXPLORE THE ARMOURY
        </Link>
      </section>
    </div>
  );
};

export default About;
