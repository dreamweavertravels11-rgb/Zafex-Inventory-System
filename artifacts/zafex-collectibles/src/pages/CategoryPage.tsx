import React from 'react';
import { Link } from 'wouter';
import { NAV_CATEGORIES } from '@/data/categories';

interface CategoryPageProps {
  categorySlug: string;
  subSlug?: string;
}

const CategoryPage = ({ categorySlug, subSlug }: CategoryPageProps) => {
  const category = NAV_CATEGORIES.find((c) => c.slug === categorySlug);
  const sub = subSlug ? category?.subs.find((s) => s.slug === subSlug) : null;
  const isCollections = categorySlug === 'collections';
  const collectionVisuals = [
    { image: '/images/full-body-armor.png', eyebrow: '01', description: 'Iconic pieces chosen by our collectors.' },
    { image: '/images/sword.png', eyebrow: '02', description: 'Freshly forged pieces from the latest drop.' },
    { image: '/images/leather-breastplates.png', eyebrow: '03', description: 'Craftsman favourites with a distinctive edge.' },
    { image: '/images/gambeson.png', eyebrow: '04', description: 'Made slowly, carefully, and entirely by hand.' },
    { image: '/images/horn-mug.png', eyebrow: '05', description: 'Rare finds for discerning enthusiasts.' },
    { image: '/images/viking-shield.png', eyebrow: '06', description: 'Festival-ready details and bold character.' },
    { image: '/images/gladitor-helmet.png', eyebrow: '07', description: 'Inspired by cinema, grounded in history.' },
    { image: '/images/chainmail-shirt.png', eyebrow: '08', description: 'Faithful recreations for modern collectors.' },
  ];

  const pageTitle = sub ? sub.label : (category?.label ?? 'Category');
  const parentLabel = category?.label ?? '';

  return (
    <div className="flex flex-col w-full min-h-[100dvh] bg-[#f5f0e8]">
      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className="w-full bg-[#cec3b5] flex min-h-[190px] flex-col items-center justify-center text-center px-4 py-14 sm:min-h-[220px]">
        {/* breadcrumb */}
        <div className="font-sans text-[10px] uppercase tracking-[2.5px] text-[#5a4a30]/70 mb-6 flex items-center gap-2 flex-wrap justify-center">
          <Link href="/" className="hover:text-[#2a2016] transition-colors">
            HOME
          </Link>
          <span className="text-[#5a4a30]/40">/</span>
          {sub ? (
            <>
              <Link
                href={`/cat/${categorySlug}`}
                className="hover:text-[#2a2016] transition-colors"
              >
                {parentLabel.toUpperCase()}
              </Link>
              <span className="text-[#5a4a30]/40">/</span>
              <span className="text-[#2a2016]">{sub.label.toUpperCase()}</span>
            </>
          ) : (
            <span className="text-[#2a2016]">{parentLabel.toUpperCase()}</span>
          )}
        </div>

        <h1 className="font-serif text-[48px] sm:text-[60px] font-light text-[#1a1208] uppercase leading-none tracking-[0.1em]">
          {pageTitle}
        </h1>
      </section>

      {/* ── Category-level: show subcategory tiles ──────────────── */}
      {!sub && category && (
        <section className={`w-full max-w-[1280px] mx-auto px-6 ${isCollections ? 'py-20 sm:py-24' : 'py-16'}`}>
          {isCollections && (
            <div className="mb-12 max-w-2xl">
              <p className="font-serif text-[11px] uppercase tracking-[3px] text-[#b58a16]">CURATED FOR YOU</p>
              <p className="mt-4 font-sans text-[15px] leading-relaxed text-[#625b51]">
                Explore our considered edit of Zafex pieces — from new releases and staff favourites to historically faithful reproductions.
              </p>
            </div>
          )}
          <div className={isCollections ? 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4' : 'grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'}>
            {category.subs.map((s, index) => (
              <Link
                key={s.slug}
                href={`/cat/${category.slug}/${s.slug}`}
                className={isCollections
                  ? 'group relative flex min-h-[265px] overflow-hidden border border-[#bdb2a2] bg-[#29231d] p-6 text-left shadow-[0_10px_30px_rgba(40,27,12,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#b58a16] hover:shadow-[0_18px_38px_rgba(40,27,12,0.18)]'
                  : 'group relative flex flex-col items-center justify-center overflow-hidden border border-[#d4cdc4] bg-[#e8e0d4] px-4 py-10 text-center transition-colors duration-300 hover:border-[#8b6914]'}
              >
                {isCollections ? (
                  <>
                    <img src={collectionVisuals[index].image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140f0b] via-[#140f0b]/45 to-transparent" />
                    <span className="relative z-10 font-serif text-[12px] tracking-[2px] text-[#d8b75f]">{collectionVisuals[index].eyebrow}</span>
                    <div className="relative z-10 mt-auto">
                      <span className="font-serif text-[19px] font-medium uppercase tracking-[1px] text-white">{s.label}</span>
                      <p className="mt-2 max-w-[210px] font-sans text-[11px] leading-relaxed text-white/70">{collectionVisuals[index].description}</p>
                      <span className="mt-4 inline-block border-b border-[#d8b75f] pb-1 font-sans text-[10px] font-bold uppercase tracking-[2px] text-[#d8b75f]">Explore →</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 bg-[#8b6914] transition-transform duration-300 group-hover:scale-x-100" />
                    <span className="font-sans text-[11px] font-medium uppercase tracking-[1.5px] leading-snug text-[#2a2016] transition-colors group-hover:text-[#5a3e00]">{s.label}</span>
                    <span className="mt-3 font-sans text-[10px] uppercase tracking-[2px] text-[#8b6914]/60 transition-colors group-hover:text-[#8b6914]">SHOP →</span>
                  </>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Subcategory-level: product grid area ────────────────── */}
      {sub && (
        <section className="w-full max-w-[1280px] mx-auto px-6 py-16">
          {/* subcategory sibling links */}
          {category && (
            <div className="flex flex-wrap gap-2 mb-12">
              {category.subs.map((s) => (
                <Link
                  key={s.slug}
                  href={`/cat/${category.slug}/${s.slug}`}
                  className={`font-serif text-[11px] uppercase tracking-[1.5px] px-4 py-2 border transition-colors ${
                    s.slug === subSlug
                      ? 'bg-[#1a1a18] text-[#d4af37] border-[#1a1a18]'
                      : 'border-[#c8c4bc] text-[#4a4a4a] hover:border-[#1a1a18] hover:text-[#1a1a18]'
                  }`}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          {/* empty-state product grid placeholder */}
          <div className="border border-dashed border-[#c8c4bc] rounded-none py-28 flex flex-col items-center justify-center text-center px-4">
            <div className="w-[48px] h-[3px] bg-[#d4af37] mb-8" />
            <h3 className="font-serif text-[22px] text-[#1a1a18] mb-3">
              {sub.label}
            </h3>
            <p className="font-sans text-[14px] text-[#6b6b6b] max-w-sm leading-relaxed mb-8">
              Our artisans are preparing this collection. New pieces are added regularly — check
              back soon or contact us for bespoke commissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/shop"
                className="bg-[#1a1a18] text-white font-serif text-[11px] uppercase font-bold tracking-[2px] px-8 py-3.5 hover:bg-[#d4af37] hover:text-[#1a1a18] transition-colors"
              >
                BROWSE ALL PRODUCTS
              </Link>
              <Link
                href="/contact"
                className="border border-[#1a1a18] text-[#1a1a18] font-serif text-[11px] uppercase font-bold tracking-[2px] px-8 py-3.5 hover:bg-[#1a1a18] hover:text-white transition-colors"
              >
                ENQUIRE NOW
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Other categories ────────────────────────────────────── */}
      <section className="w-full bg-[#e8e0d4] border-t border-[#d4cdc4] py-10 mt-auto">
        <div className="max-w-[1280px] mx-auto px-6">
          <p className="font-sans text-[10px] uppercase tracking-[3px] text-[#5a4a30]/60 mb-5 text-center">
            EXPLORE MORE CATEGORIES
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {NAV_CATEGORIES.filter((c) => c.slug !== categorySlug).map((c) => (
              <Link
                key={c.slug}
                href={`/cat/${c.slug}`}
                className="font-sans text-[10px] font-medium uppercase tracking-[1.5px] text-[#5a4a30] hover:text-[#2a2016] transition-colors px-3 py-1 border border-[#c8bfb0] hover:border-[#5a4a30]"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
