import React from 'react';

const AnnouncementBar = () => {
  return (
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
  );
};

export default AnnouncementBar;
