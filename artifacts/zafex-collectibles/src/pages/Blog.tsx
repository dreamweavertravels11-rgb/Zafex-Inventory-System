import Layout from '@/components/layout/Layout';
import { Link } from 'wouter';

const ARTICLES = [
  {
    id: 1,
    title: "Preserving Steel: The Complete Armor Maintenance Guide",
    excerpt: "Carbon steel is magnificent, but it demands respect. Learn our workshop's proven methods for oiling, polishing, and preventing rust on your historical replicas.",
    category: "Care & Maintenance",
    date: "October 12, 2023",
    image: "/images/breastplates.png"
  },
  {
    id: 2,
    title: "The Anatomy of a Gothic Plate Harness",
    excerpt: "Fluting isn't just for aesthetics. We break down the engineering genius behind 15th-century Gothic armor and why it remains the pinnacle of plate design.",
    category: "Historical Analysis",
    date: "September 28, 2023",
    image: "/images/full-body-armor.png"
  },
  {
    id: 3,
    title: "Riveted vs. Butted Chainmail: What You Need to Know",
    excerpt: "A deep dive into the construction methods of maille, and how to choose the right type of rings based on whether you're fighting, acting, or displaying.",
    category: "Craftsmanship",
    date: "August 15, 2023",
    image: "/images/chainmail-shirt.png"
  },
  {
    id: 4,
    title: "Preparing Your Kit for a Weekend LARP Event",
    excerpt: "Comfort is survival. From breaking in your leather gambeson to balancing the weight of your pauldrons, here is how to survive a 48-hour immersive event.",
    category: "Event Prep",
    date: "July 04, 2023",
    image: "/images/leather-armor-set.png"
  }
];

export default function Blog() {
  return (
    <Layout>
      <div className="bg-[hsl(var(--bg-deep))] py-16 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white uppercase tracking-widest mb-4">
            The Armoury Blog
          </h1>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto">
            Dispatches from the forge. Guides, history, and craftsmanship.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {ARTICLES.map(article => (
            <article key={article.id} className="group bg-card border border-border overflow-hidden flex flex-col hover:border-primary/50 transition-colors">
              <div className="h-64 bg-muted relative overflow-hidden flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-0"></div>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 relative z-10"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-serif uppercase tracking-widest text-muted-foreground mb-4">
                  <span className="text-primary font-bold">{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${article.id}`}>{article.title}</Link>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {article.excerpt}
                </p>
                <Link href={`/blog/${article.id}`} className="font-serif font-bold text-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors inline-flex items-center gap-2">
                  Read Dispatch →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}