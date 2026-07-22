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

  const pageTitle = sub ? sub.label : (category?.label ?? 'Category');
  const parentLabel = category?.label ?? '';

  return (
    <div className="flex flex-col w-full min-h-[100dvh] bg-[#f5f0e8]">
      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className="relative w-full h-[260px] bg-[#1a1a18] overflow-hidden flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-[#000]/55 z-10" />
        {/* decorative pattern overlay */}
        <div
          className="absolute inset-0 opacity-10 z-[5]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg,#d4af37 0,#d4af37 1px,transparent 0,transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative z-20 flex flex-col items-center">
          {/* breadcrumb */}
          <div className="font-serif text-[10px] uppercase tracking-[2.5px] text-[#d4af37]/80 mb-4 flex items-center gap-2 flex-wrap justify-center">
            <Link href="/" className="hover:text-[#d4af37] transition-colors text-white/60">
              HOME
            </Link>
            <span className="text-white/30">/</span>
            {sub ? (
              <>
                <Link
                  href={`/cat/${categorySlug}`}
                  className="hover:text-[#d4af37] transition-colors text-white/60"
                >
                  {parentLabel}
                </Link>
                <span className="text-white/30">/</span>
                <span className="text-[#d4af37]">{sub.label.toUpperCase()}</span>
              </>
            ) : (
              <span className="text-[#d4af37]">{parentLabel}</span>
            )}
          </div>

          <h1 className="font-serif text-[44px] sm:text-[56px] font-bold text-white uppercase leading-none tracking-tight">
            {pageTitle}
          </h1>

          {!sub && category && (
            <p className="font-sans text-[13px] text-white/60 mt-4 max-w-md">
              Browse our full range of {category.label.toLowerCase()} — handcrafted with historical
              accuracy and premium materials.
            </p>
          )}
        </div>
      </section>

      {/* ── Category-level: show subcategory tiles ──────────────── */}
      {!sub && category && (
        <section className="w-full max-w-[1280px] mx-auto px-6 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.subs.map((s) => (
              <Link
                key={s.slug}
                href={`/cat/${category.slug}/${s.slug}`}
                className="group relative bg-[#1a1a18] overflow-hidden flex flex-col items-center justify-center text-center px-4 py-10 border border-[#333] hover:border-[#d4af37] transition-colors duration-300"
              >
                {/* gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#d4af37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="font-serif text-[13px] uppercase tracking-[1.5px] text-[#f5f0e8] group-hover:text-[#d4af37] transition-colors leading-snug">
                  {s.label}
                </span>
                <span className="mt-4 font-serif text-[10px] uppercase tracking-[2px] text-[#d4af37]/60 group-hover:text-[#d4af37] transition-colors">
                  SHOP →
                </span>
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
      <section className="w-full bg-[#1a1a18] py-12 mt-auto">
        <div className="max-w-[1280px] mx-auto px-6">
          <p className="font-serif text-[10px] uppercase tracking-[3px] text-[#d4af37]/60 mb-6 text-center">
            EXPLORE MORE CATEGORIES
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {NAV_CATEGORIES.filter((c) => c.slug !== categorySlug).map((c) => (
              <Link
                key={c.slug}
                href={`/cat/${c.slug}`}
                className="font-serif text-[10px] uppercase tracking-[1.5px] text-[#f5f0e8]/60 hover:text-[#d4af37] transition-colors px-3 py-1 border border-transparent hover:border-[#d4af37]/30"
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
