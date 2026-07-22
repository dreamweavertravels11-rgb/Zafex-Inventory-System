import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';

import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import CategoryPage from '@/pages/CategoryPage';
import CustomForging from '@/pages/CustomForging';
import Blog from '@/pages/Blog';

gsap.registerPlugin(ScrollTrigger);

/* ── Simple content wrapper ─────────────────────────────────────────── */
function ContentPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f0e8] flex flex-col">
      <section className="w-full bg-[#cec3b5] flex flex-col items-center justify-center text-center px-4 py-14">
        <h1 className="font-serif text-[48px] sm:text-[60px] font-light text-[#1a1208] uppercase leading-none tracking-[0.1em]">
          {title}
        </h1>
      </section>
      <div className="container mx-auto px-8 py-16 max-w-3xl">
        <div className="prose prose-stone font-sans text-[#4a4a4a] leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

/* ── Static policy / info pages ─────────────────────────────────────── */
const Faqs = () => (
  <ContentPage title="FAQs">
    {[
      ['Do you ship internationally?', 'Yes. We ship worldwide using trusted international courier partners.'],
      ['Can I request a custom product?', 'Yes. We specialize in custom-made medieval armor, chainmail, leather goods, and historical costumes.'],
      ['How long does production take?', 'Ready-made items generally ship within 2–5 business days. Custom orders usually require 7–21 business days.'],
      ['Which payment methods do you accept?', 'We accept major credit and debit cards and other secure payment methods available during checkout.'],
      ['Will I receive tracking information?', 'Yes. Tracking details are emailed once your order has been shipped.'],
      ['Are import duties included?', 'No. Buyers are responsible for any customs duties, VAT, GST, or import taxes required by their country.'],
      ['Do you offer wholesale pricing?', 'Yes. We welcome wholesale and bulk manufacturing inquiries.'],
    ].map(([question, answer]) => (
      <section key={question} className="border-b border-[#d4cfc7] py-5">
        <h3 className="mb-2 font-serif text-xl text-[#1a1a18]">{question}</h3>
        <p>{answer}</p>
      </section>
    ))}
  </ContentPage>
);
const SizeGuide = () => (
  <ContentPage title="Size Guide">
    <p>Detailed sizing charts for standard apparel coming soon. For custom armour commissions, our artisan team will provide a specific measurement template requiring over 15 points of measure to ensure a perfect fit.</p>
  </ContentPage>
);
const Maintenance = () => (
  <ContentPage title="Care & Maintenance">
    <h3 className="font-serif text-xl text-[#1a1a18] mt-8 mb-4">Steel Armour & Weapons</h3>
    <p>Always oil your carbon steel pieces after use or handling to prevent rust. Renaissance wax or mineral oil works best. Store in a dry, climate-controlled environment.</p>
    <h3 className="font-serif text-xl text-[#1a1a18] mt-8 mb-4">Leather Goods</h3>
    <p>Do not leave leather in direct sunlight or extreme heat. Treat periodically with a high-quality leather conditioner or mink oil.</p>
  </ContentPage>
);
const Safety   = () => <ContentPage title="Product Safety"><p>Our historical replicas are accurate and can be inherently dangerous. They are sold strictly for display, theatrical, or supervised sporting use only. LARP weapons should be checked for core damage or foam tears before every event.</p></ContentPage>;
const Privacy  = () => (
  <ContentPage title="Privacy Policy">
    <p>At Zafex Collectibles, we respect your privacy and are committed to protecting your personal information.</p>
    <h3 className="mt-8 mb-4 font-serif text-xl text-[#1a1a18]">Information We Collect</h3>
    <p>We may collect:</p>
    <ul>
      <li>Name</li>
      <li>Email address</li>
      <li>Phone number</li>
      <li>Billing and shipping address</li>
      <li>Order details</li>
      <li>Payment information (processed securely by third-party payment providers)</li>
      <li>Website usage information through cookies</li>
    </ul>
    <h3 className="mt-8 mb-4 font-serif text-xl text-[#1a1a18]">How We Use Your Information</h3>
    <p>We use your information to:</p>
    <ul>
      <li>Process and fulfill orders</li>
      <li>Provide customer support</li>
      <li>Send shipping updates</li>
      <li>Improve our website and services</li>
      <li>Prevent fraud and unauthorized transactions</li>
    </ul>
    <h3 className="mt-8 mb-4 font-serif text-xl text-[#1a1a18]">Data Protection</h3>
    <p>We implement appropriate security measures to protect your personal information from unauthorized access, misuse, or disclosure.</p>
    <h3 className="mt-8 mb-4 font-serif text-xl text-[#1a1a18]">Third-Party Services</h3>
    <p>We may use trusted third-party providers such as payment gateways, shipping companies, and analytics services to operate our business efficiently.</p>
    <h3 className="mt-8 mb-4 font-serif text-xl text-[#1a1a18]">Cookies</h3>
    <p>Our website uses cookies to improve user experience, remember preferences, and analyze website traffic.</p>
    <h3 className="mt-8 mb-4 font-serif text-xl text-[#1a1a18]">Your Rights</h3>
    <p>You may request access to, correction of, or deletion of your personal information by contacting us.</p>
    <h3 className="mt-8 mb-4 font-serif text-xl text-[#1a1a18]">Contact</h3>
    <p>If you have any questions regarding this Privacy Policy, please contact us using the information provided on our Contact page.</p>
  </ContentPage>
);
const Shipping = () => <ContentPage title="Shipping Policy"><p>Worldwide shipping is available on all items. Please note that customs duties, import taxes, and clearance fees are the sole responsibility of the buyer. We are not responsible for delays caused by local customs authorities.</p></ContentPage>;
const Refund   = () => <ContentPage title="Refund Policy"><p>We offer a 14-day return window for standard catalog items from the date of delivery. Items must be unused and in original packaging. Custom commissions are non-refundable once the forging process has commenced.</p></ContentPage>;
const Terms    = () => <ContentPage title="Terms & Conditions"><p>By purchasing from Zafex Collectibles & Zafs, you agree that you are of legal age to purchase bladed replicas in your jurisdiction. The buyer assumes all responsibility for compliance with local laws regarding the import and ownership of swords, armour, and related items.</p></ContentPage>;

const NotFound = () => (
  <div className="min-h-screen bg-[#f5f0e8] flex flex-col items-center justify-center text-center px-4">
    <h1 className="font-serif text-6xl font-bold text-[#1a1a18] mb-4">404</h1>
    <p className="font-sans text-[#6b6b6b] mb-8">This path has been lost to history.</p>
    <a href="/" className="bg-[#1a1a18] text-white font-serif text-[12px] uppercase font-bold tracking-[2px] px-8 py-4 hover:bg-[#d4af37] transition-colors">
      RETURN TO THE KEEP
    </a>
  </div>
);

const queryClient = new QueryClient();

function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    lenis.on('scroll', () => ScrollTrigger.update());

    const tickerFn = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerFn);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Switch>
          {/* ── Core pages ── */}
          <Route path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/shop/:id" component={ProductDetail} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

          {/* ── Named /cat/* overrides — MUST come before the generic :category catch-all ── */}
          <Route path="/cat/about-us" component={About} />
          <Route path="/cat/about-us/:sub" component={About} />
          <Route path="/cat/custom-orders" component={CustomForging} />
          <Route path="/cat/custom-orders/:sub" component={CustomForging} />
          <Route path="/cat/resources/medieval-blog" component={Blog} />

          {/* ── Dynamic category + subcategory routes ── */}
          <Route path="/cat/:category">
            {(params) => <CategoryPage categorySlug={params.category} />}
          </Route>
          <Route path="/cat/:category/:sub">
            {(params) => (
              <CategoryPage categorySlug={params.category} subSlug={params.sub} />
            )}
          </Route>

          {/* ── Static info pages ── */}
          <Route path="/faqs" component={Faqs} />
          <Route path="/size-guide" component={SizeGuide} />
          <Route path="/blog" component={Blog} />
          <Route path="/custom-forging" component={CustomForging} />
          <Route path="/product-maintenance" component={Maintenance} />
          <Route path="/product-safety" component={Safety} />
          <Route path="/privacy-policy" component={Privacy} />
          <Route path="/shipping-policy" component={Shipping} />
          <Route path="/refund-policy" component={Refund} />
          <Route path="/terms-and-conditions" component={Terms} />

          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}>
        <SmoothScrollProvider>
          <ScrollProgress />
          <Router />
        </SmoothScrollProvider>
      </WouterRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
