import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function CustomForging() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Commission Request Sent",
      description: "Our master armorer will review your specifications and contact you shortly with a quote.",
    });
  };

  return (
    <Layout>
      <div className="bg-[hsl(var(--bg-deep))] py-20 border-b-4 border-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/breastplates.png')] bg-center bg-no-repeat bg-contain opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white uppercase tracking-widest mb-6">
            Custom Forging
          </h1>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto text-lg">
            Commission bespoke armor and weaponry tailored exactly to your measurements, specifications, and historical era.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="font-serif font-bold text-3xl tracking-widest uppercase mb-8 text-primary border-b border-border pb-4">The Commission Process</h2>
            
            <div className="space-y-12">
              <div className="relative pl-8 border-l-2 border-muted">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <h3 className="font-serif font-bold text-xl uppercase tracking-widest mb-3">1. Consultation</h3>
                <p className="text-muted-foreground leading-relaxed">Submit your concept, reference images, and requirements. Our armorers will discuss the historical accuracy, materials, and structural feasibility of your piece.</p>
              </div>

              <div className="relative pl-8 border-l-2 border-muted">
                <div className="absolute w-4 h-4 bg-secondary rounded-full -left-[9px] top-1"></div>
                <h3 className="font-serif font-bold text-xl uppercase tracking-widest mb-3">2. Measurement & Blueprinting</h3>
                <p className="text-muted-foreground leading-relaxed">We will provide you with a detailed measurement chart. Precision is paramount; we design the blueprint around your unique physiology and intended padding.</p>
              </div>

              <div className="relative pl-8 border-l-2 border-muted">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <h3 className="font-serif font-bold text-xl uppercase tracking-widest mb-3">3. The Forge</h3>
                <p className="text-muted-foreground leading-relaxed">With a 50% deposit secured, the steel is cut, shaped, fluted, and articulated. We provide progress photos during key milestones.</p>
              </div>

              <div className="relative pl-8 border-l-2 border-transparent">
                <div className="absolute w-4 h-4 bg-secondary rounded-full -left-[9px] top-1"></div>
                <h3 className="font-serif font-bold text-xl uppercase tracking-widest mb-3">4. Final Polish & Dispatch</h3>
                <p className="text-muted-foreground leading-relaxed">The final strapping, riveting, and polishing occurs. Upon your approval of the finished photos and receipt of the final payment, your armor is carefully crated and shipped globally.</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-card border border-border">
              <h4 className="font-serif font-bold uppercase tracking-widest mb-2 text-sm">Typical Timelines</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Single pieces (Helmets, Gauntlets): 3 - 6 weeks</li>
                <li>• Partial Sets (Cuirass, Arms/Legs): 6 - 10 weeks</li>
                <li>• Full Plate Harnesses: 12 - 16+ weeks</li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card p-8 md:p-10 border border-border shadow-lg">
            <h2 className="font-serif font-bold text-2xl tracking-widest uppercase mb-8 border-b border-border pb-4">Start Your Commission</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-serif text-xs font-bold tracking-widest uppercase text-muted-foreground">First Name</label>
                  <Input required className="bg-background rounded-none border-border" />
                </div>
                <div className="space-y-2">
                  <label className="font-serif text-xs font-bold tracking-widest uppercase text-muted-foreground">Last Name</label>
                  <Input required className="bg-background rounded-none border-border" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-serif text-xs font-bold tracking-widest uppercase text-muted-foreground">Email Address</label>
                <Input type="email" required className="bg-background rounded-none border-border" />
              </div>
              <div className="space-y-2">
                <label className="font-serif text-xs font-bold tracking-widest uppercase text-muted-foreground">Project Type</label>
                <select className="flex h-10 w-full bg-background border border-border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-none">
                  <option>Full Armor Set</option>
                  <option>Individual Armor Piece</option>
                  <option>Custom Weapon</option>
                  <option>Leatherwork / Gambeson</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-serif text-xs font-bold tracking-widest uppercase text-muted-foreground">Intended Use</label>
                <select className="flex h-10 w-full bg-background border border-border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-none">
                  <option>Display / Collector</option>
                  <option>Cosplay / Theatrical</option>
                  <option>LARP (Light Combat)</option>
                  <option>HEMA / Buhurt (Heavy Combat)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-serif text-xs font-bold tracking-widest uppercase text-muted-foreground">Detailed Description & Historical Period</label>
                <Textarea required placeholder="Please describe what you are looking for in as much detail as possible..." className="min-h-[150px] bg-background rounded-none border-border resize-none" />
              </div>
              <Button type="submit" className="w-full rounded-none font-serif font-bold tracking-widest uppercase py-6 text-white hover:bg-primary/90 transition-colors">
                Submit Request
              </Button>
            </form>
          </div>
          
        </div>
      </div>
    </Layout>
  );
}