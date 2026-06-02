import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Users,
  Lightbulb,
  Clock,
  Headphones,
  Award,
  Landmark,
  HeartPulse,
  Cpu,
  Zap,
  ShoppingBag,
  Building2,
  Factory,
  GraduationCap,
  Search,
  PenTool,
  Rocket,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Security-First Engineering",
    body: "Every solution we build is designed with security baked in — from architecture reviews to penetration testing before go-live.",
  },
  {
    icon: Users,
    title: "Senior, Cross-Skilled Team",
    body: "You work directly with engineers and consultants who have shipped real systems across banking, telco and the public sector.",
  },
  {
    icon: Lightbulb,
    title: "Tailored, Never Off-the-Shelf",
    body: "We assess your environment first and design a fit-for-purpose solution rather than forcing a generic platform onto your business.",
  },
  {
    icon: Clock,
    title: "Delivery That Respects Time",
    body: "Clear milestones, weekly demos and honest status updates — so you always know what's done, what's next and what needs your input.",
  },
  {
    icon: Headphones,
    title: "Local Support, Global Standards",
    body: "On-the-ground presence in Nairobi with delivery practices aligned to ISO 27001, NIST CSF and OWASP guidance.",
  },
  {
    icon: Award,
    title: "Outcomes, Not Just Output",
    body: "We measure success by what changes for your business — reduced risk, faster operations, better decisions, lower cost.",
  },
];

const valueProps = [
  { label: "Cyber Security", body: "VAPT, GRC, SOC enablement and incident response." },
  { label: "Software Engineering", body: "Web, mobile and integrations built for scale." },
  { label: "Data & Analytics", body: "Pipelines, dashboards and decision intelligence." },
  { label: "Cloud & Infrastructure", body: "Migration, automation and cost optimisation." },
];

const industries = [
  { icon: Landmark, name: "Financial Services" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Cpu, name: "Technology & SaaS" },
  { icon: Zap, name: "Energy & Utilities" },
  { icon: ShoppingBag, name: "Retail & E-commerce" },
  { icon: Building2, name: "Government" },
  { icon: Factory, name: "Manufacturing" },
  { icon: GraduationCap, name: "Education" },
];

const approach = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    body: "We sit with your team to understand goals, constraints, risks and current state — no assumptions.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    body: "We architect a tailored solution, agree scope, and document the security and quality controls.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deploy",
    body: "We build, test and roll out in controlled phases with knowledge transfer at every step.",
  },
  {
    icon: RefreshCw,
    step: "04",
    title: "Evolve",
    body: "We monitor, tune and improve — keeping you ahead of threats and ahead of your competition.",
  },
];

const LandingExtras = () => {
  return (
    <>
      {/* Value Props strip */}
      <section className="py-10 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {valueProps.map((v) => (
              <div key={v.label} className="text-center md:text-left">
                <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">
                  {v.label}
                </div>
                <p className="text-sm text-muted-foreground leading-snug">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge variant="outline" className="mb-3 px-4 py-1">Why BitsbyTech</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              A Partner Built for Serious Work
            </h2>
            <p className="text-muted-foreground">
              We help organisations modernise their technology and strengthen their digital trust posture
              — with the discipline of a consultancy and the speed of a product team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item) => (
              <Card
                key={item.title}
                className="hover:shadow-elegant transition-all hover:-translate-y-1 border-border/60"
              >
                <CardContent className="p-6">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-14 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="outline" className="mb-3 px-4 py-1">How We Work</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">A Simple, Disciplined Approach</h2>
            <p className="text-muted-foreground">
              Four stages that keep every engagement transparent, measurable and aligned to your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {approach.map((s) => (
              <Card key={s.title} className="relative overflow-hidden border-border/60">
                <CardContent className="p-6">
                  <div className="text-5xl font-bold text-primary/10 absolute top-2 right-3 select-none">
                    {s.step}
                  </div>
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" onClick={() => (window.location.href = "/our-process")}>
              See our full delivery process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="outline" className="mb-3 px-4 py-1">Industries</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Sectors We Serve</h2>
            <p className="text-muted-foreground">
              Our work spans regulated industries where precision, security and uptime are non-negotiable.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((i) => (
              <div
                key={i.name}
                className="flex items-center gap-3 p-4 rounded-lg border border-border/60 bg-card hover:border-primary/40 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <i.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-sm">{i.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center shadow-glow max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Let's scope your next move — together.
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Tell us what you're trying to achieve. We'll come back with a clear, no-obligation plan
              shaped to your context, budget and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => (window.location.href = "/contact")}
              >
                Request a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() =>
                  window.open("https://calendar.app.google/vmX5upMwwYhLjdJv8", "_blank")
                }
              >
                Book a Virtual Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingExtras;
