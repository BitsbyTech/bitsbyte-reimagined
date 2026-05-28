import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  AlertTriangle,
  Database,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  Settings2,
  Users,
  Workflow,
  Landmark,
  HeartPulse,
  Cpu,
  Zap,
  ShoppingBag,
  Building2,
  Factory,
  GraduationCap,
  Radio,
  Flame,
  Scale,
} from "lucide-react";

const Platforms = () => {
  const capabilities = [
    {
      id: "compliance",
      icon: Shield,
      title: "Compliance",
      tagline: "Establish compliance. Monitor continuously. Strengthen resilience.",
      headline: "Continuous compliance, built around your controls",
      description:
        "Move beyond once-a-year assessments. We help you stand up frameworks that fit your business, monitor them in real time and keep evidence audit-ready, every day.",
      benefits: [
        {
          title: "Reduced regulatory exposure",
          body: "Spot control gaps as they emerge and remediate before they turn into findings, fines or reputational damage.",
        },
        {
          title: "Real-time posture visibility",
          body: "Live dashboards drawn from your actual systems — not quarterly snapshots — so leadership always knows where you stand.",
        },
        {
          title: "Audit-ready by default",
          body: "Centralised evidence collection and lifecycle tracking can cut audit preparation effort by more than half.",
        },
      ],
      frameworks: ["ISO 27001", "SOC 2", "PCI DSS", "GDPR", "HIPAA", "NIST CSF", "Data Protection Act", "Local Regulators"],
    },
    {
      id: "risk",
      icon: AlertTriangle,
      title: "Risk Management",
      tagline: "Detect risks in record time. Protect what matters most.",
      headline: "Turn control data into board-ready risk intelligence",
      description:
        "We translate operational, technology and regulatory signals into a clear, prioritised view of risk — quantified in business terms your executives and board can act on.",
      benefits: [
        {
          title: "Clearer financial exposure",
          body: "Each control gap is mapped to a quantifiable business impact, so you know what risks actually cost you.",
        },
        {
          title: "Data-driven prioritisation",
          body: "Remediation roadmaps ranked by impact and effort, helping you invest budget where it moves the needle.",
        },
        {
          title: "Stronger resilience",
          body: "Scenario modelling and continuous monitoring reduce the likelihood and severity of disruptive events.",
        },
      ],
      frameworks: ["Operational Risk", "IT & Cyber Risk", "Third-Party Risk", "Legal & Regulatory", "Strategic Risk", "Financial Risk"],
    },
    {
      id: "data",
      icon: Database,
      title: "Data Security",
      tagline: "Protect your data at every stage of its lifecycle.",
      headline: "Know where your data lives, who touches it, and how it's protected",
      description:
        "From discovery and classification to access governance and monitoring, we put consistent guardrails around your sensitive data — across cloud, on-premise and hybrid environments.",
      benefits: [
        {
          title: "End-to-end protection",
          body: "Encryption, access control and policy enforcement applied uniformly across all data repositories.",
        },
        {
          title: "Reduced breach risk",
          body: "Proactive detection of misconfigurations and risky access patterns before they become incidents.",
        },
        {
          title: "Privacy & residency compliance",
          body: "Automated alignment with GDPR, Kenya DPA and other data protection regulations relevant to your operations.",
        },
      ],
      frameworks: ["Data Discovery", "Classification", "Access Governance", "DLP", "Encryption", "Privacy by Design"],
    },
    {
      id: "audit",
      icon: ClipboardCheck,
      title: "Audit",
      tagline: "Evaluate controls. Strengthen governance. Build resilience.",
      headline: "Continuous, intelligent audit — not point-in-time scrambles",
      description:
        "We design audit programmes that stay alive between engagements: continuous control testing, automated evidence capture and clear reporting for internal audit, external auditors and the board.",
      benefits: [
        {
          title: "Always-on assurance",
          body: "Controls are tested continuously, surfacing issues in days instead of waiting for the next audit cycle.",
        },
        {
          title: "Less manual evidence chasing",
          body: "Evidence is gathered, versioned and stored automatically — freeing your team to focus on analysis and remediation.",
        },
        {
          title: "Defensible governance",
          body: "Clear ownership, traceable decisions and complete audit trails that hold up to internal and external scrutiny.",
        },
      ],
      frameworks: ["Internal Audit", "IT Audit", "Compliance Audit", "Control Testing", "Issue Tracking", "Board Reporting"],
    },
  ];

  const approach = [
    {
      icon: Users,
      title: "Discover",
      body: "We start with your business, your obligations and the systems you already have in place.",
    },
    {
      icon: Settings2,
      title: "Design",
      body: "We tailor the right blend of capabilities — compliance, risk, data security and audit — to your environment.",
    },
    {
      icon: Workflow,
      title: "Deploy",
      body: "We implement, integrate and operationalise the solution alongside your teams, with clear handover.",
    },
    {
      icon: CheckCircle2,
      title: "Evolve",
      body: "We monitor, refine and mature your posture as your business, regulations and threats change.",
    },
  ];

  const industries = [
    { icon: Landmark, title: "Financial Services", body: "Compliance, risk and data security for banks, insurers, SACCOs and fintechs." },
    { icon: HeartPulse, title: "Healthcare", body: "Patient data protection, HIPAA/DPA alignment and clinical system resilience." },
    { icon: Cpu, title: "Technology", body: "Security posture and SOC 2 readiness for SaaS, cloud and platform businesses." },
    { icon: Zap, title: "Energy & Utilities", body: "Critical infrastructure security and regulatory compliance across generation and distribution." },
    { icon: ShoppingBag, title: "Retail & E-commerce", body: "Transaction data protection, PCI DSS and customer privacy at scale." },
    { icon: Building2, title: "Government", body: "Public sector compliance, citizen data protection and secure digital services." },
    { icon: Factory, title: "Manufacturing", body: "OT/IT convergence security and supply chain risk management." },
    { icon: GraduationCap, title: "Education", body: "Student data protection and institutional compliance for schools and universities." },
    { icon: Radio, title: "Telecommunications", body: "Network compliance, subscriber data protection and CA-aligned controls." },
    { icon: Flame, title: "Oil & Gas", body: "OT/IT security across upstream, midstream and downstream operations." },
    { icon: Scale, title: "Legal Services", body: "Client data protection, privilege management and matter confidentiality." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-background overflow-hidden">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              Capabilities
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tailored solutions for
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                compliance, risk, data &amp; audit
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We don't believe in one-size-fits-all platforms. We assess your environment first, then
              assemble the right capabilities — across compliance, risk management, data security and audit —
              to fit how your business actually operates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary" onClick={() => window.open('https://calendar.app.google/vmX5upMwwYhLjdJv8', '_blank')}>
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = '/contact'}>
                Request an Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* Capability overview cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">Four Core Capabilities</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Posture management, customised to your business
              </h2>
              <p className="text-muted-foreground text-lg">
                Engage us for any one capability — or combine them into an end-to-end programme.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="group block"
                >
                  <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <c.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{c.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {c.tagline}
                      </CardDescription>
                      <div className="mt-4 text-primary text-sm font-medium inline-flex items-center group-hover:gap-2 gap-1 transition-all">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed capability sections via Tabs */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">Explore Each Capability</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What each area delivers for your organisation
              </h2>
            </div>

            <Tabs defaultValue="compliance" className="w-full max-w-6xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-transparent mb-8">
                {capabilities.map((c) => (
                  <TabsTrigger
                    key={c.id}
                    value={c.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
                  >
                    <c.icon className="h-4 w-4 mr-2" />
                    {c.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {capabilities.map((c) => (
                <TabsContent key={c.id} value={c.id} id={c.id}>
                  <Card className="border-border/50">
                    <CardContent className="p-8 md:p-12">
                      <div className="max-w-3xl">
                        <div className="text-sm uppercase tracking-wider text-primary font-medium mb-3">{c.title}</div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">{c.headline}</h3>
                        <p className="text-muted-foreground text-lg mb-10">{c.description}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {c.benefits.map((b) => (
                          <div key={b.title} className="p-6 rounded-xl bg-muted/40 border border-border/40">
                            <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
                            <h4 className="font-semibold mb-2">{b.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
                          </div>
                        ))}
                      </div>

                      <div>
                        <div className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                          Areas we cover
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {c.frameworks.map((f) => (
                            <Badge key={f} variant="secondary" className="text-sm py-1.5 px-3">
                              {f}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Our approach */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">Our Approach</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Customised after evaluation — never off-the-shelf
              </h2>
              <p className="text-muted-foreground text-lg">
                Every engagement starts with understanding your context. We then shape a solution that fits — and grows with you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {approach.map((a, idx) => (
                <Card key={a.title} className="relative hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-xs font-mono text-muted-foreground mb-3">0{idx + 1}</div>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <a.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{a.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">Industries We Serve</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Deep context across regulated sectors
              </h2>
              <p className="text-muted-foreground text-lg">
                We work across industries with distinct regulatory, operational and data realities — and bring that context into every engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {industries.map((ind) => (
                <Card
                  key={ind.title}
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50"
                >
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-11 h-11 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ind.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{ind.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{ind.body}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-10">
              Not seeing your industry? We've delivered for organisations beyond this list — <a href="/contact" className="text-primary hover:underline">tell us about yours</a>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-primary p-10 md:p-14 rounded-2xl shadow-glow max-w-5xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's design the right solution for you
              </h3>
              <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                Tell us about your environment and obligations. We'll evaluate your posture and propose a tailored
                compliance, risk, data security or audit programme — or a combination of all four.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" onClick={() => window.open('https://calendar.app.google/vmX5upMwwYhLjdJv8', '_blank')}>
                  Book a Virtual Meeting
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => window.location.href = '/contact'}>
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Platforms;
