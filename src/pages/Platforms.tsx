import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Activity,
  Database,
  ClipboardCheck,
  Users,
  BarChart3,
  Cloud,
  Code,
  Workflow,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Platforms = () => {
  const pillars = [
    {
      icon: Shield,
      title: "Security Posture",
      stat: "24/7",
      statLabel: "Continuous Visibility",
      description:
        "Monitor your organisation's security posture in real time. Detect drift, misconfigurations and exposure before they become incidents.",
    },
    {
      icon: Activity,
      title: "Risk Intelligence",
      stat: "9x",
      statLabel: "Faster Detection",
      description:
        "Identify, score and prioritise operational, technology and third-party risk with a single, context-aware view.",
    },
    {
      icon: Database,
      title: "Data Intelligence",
      stat: "100%",
      statLabel: "Auditable Pipelines",
      description:
        "Centralise, govern and analyse your data. Turn fragmented sources into decisions executives can trust.",
    },
    {
      icon: ClipboardCheck,
      title: "Compliance & Audit",
      stat: "70%",
      statLabel: "Less Manual Work",
      description:
        "Automate evidence collection, control monitoring and reporting across the frameworks that matter to your business.",
    },
  ];

  const roles = [
    {
      icon: Shield,
      title: "Security Officers",
      headline: "Always on. Always aware.",
      body: "Continuously monitor controls, enforce policy and respond to threats from one operational view.",
    },
    {
      icon: Activity,
      title: "Risk & Compliance Leads",
      headline: "Audit-ready by default.",
      body: "Automate control testing, evidence gathering and gap analysis across multiple frameworks.",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics Teams",
      headline: "From raw data to decisions.",
      body: "Build trusted dashboards, predictive models and executive reporting on governed data.",
    },
    {
      icon: Code,
      title: "Engineering Leaders",
      headline: "Ship faster, safely.",
      body: "Modern delivery pipelines, secure-by-design architecture and observable cloud workloads.",
    },
  ];

  const integrations = [
    { icon: Cloud, label: "Cloud Platforms" },
    { icon: Users, label: "Identity & Access" },
    { icon: Shield, label: "Security Tools" },
    { icon: Workflow, label: "ERP & ITSM" },
    { icon: ClipboardCheck, label: "GRC Tools" },
    { icon: Database, label: "Data Sources" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-background overflow-hidden">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              The BitsbyTech Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              One platform.
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Every layer of digital trust.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              A unified environment for security, risk, data and engineering teams to build,
              govern and grow with confidence — across cloud and on-premise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary" onClick={() => window.open('https://calendar.app.google/vmX5upMwwYhLjdJv8', '_blank')}>
                Book a Platform Walkthrough
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = '/contact'}>
                Talk to Our Team
              </Button>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">Unified Platform</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Holistic posture management, all in one place
              </h2>
              <p className="text-muted-foreground text-lg">
                Build and maintain stakeholder trust with significantly less effort across every business function.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((p) => (
                <Card key={p.title} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <p.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{p.title}</CardTitle>
                    <div className="pt-2">
                      <div className="text-2xl font-bold text-primary">{p.stat}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">{p.statLabel}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">{p.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Roles */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">Built for Leaders</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                One platform. Four critical roles.
              </h2>
              <p className="text-muted-foreground text-lg">
                Unified workflows. No silos. No spreadsheets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roles.map((r) => (
                <Card key={r.title} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8 flex gap-5">
                    <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                      <r.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm uppercase tracking-wider text-muted-foreground mb-1">{r.title}</div>
                      <h3 className="text-xl font-semibold mb-2">{r.headline}</h3>
                      <p className="text-muted-foreground">{r.body}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">API-First</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Connects to the tools you already use
              </h2>
              <p className="text-muted-foreground text-lg">
                Bi-directional data flow with real-time synchronisation across your assets and data ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {integrations.map((i) => (
                <div key={i.label} className="flex flex-col items-center text-center p-6 rounded-xl border border-border/50 hover:border-primary/40 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <i.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium">{i.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-primary p-10 md:p-14 rounded-2xl shadow-glow max-w-5xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                See the platform in action
              </h3>
              <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                Get a tailored walkthrough of how BitsbyTech can unify security, risk, data and engineering across your organisation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" onClick={() => window.open('https://calendar.app.google/vmX5upMwwYhLjdJv8', '_blank')}>
                  Book a Virtual Meeting
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => window.location.href = '/contact'}>
                  Contact Sales
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
