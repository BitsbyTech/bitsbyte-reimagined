import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, TrendingUp, Globe2, ShieldCheck } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import LogoMarquee from "@/components/LogoMarquee";

const Partners = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    country: "",
    industry: "",
    offerings: "",
    challenges: "",
  });

  const benefits = [
    {
      icon: TrendingUp,
      title: "Grow Together",
      body: "Tap into new revenue streams by co-delivering technology and digital trust solutions to your clients.",
    },
    {
      icon: ShieldCheck,
      title: "Proven Expertise",
      body: "Lean on our engineers, security specialists and data team to strengthen every engagement.",
    },
    {
      icon: Globe2,
      title: "Regional Reach",
      body: "Extend your footprint across East Africa and beyond with a partner already on the ground.",
    },
    {
      icon: Handshake,
      title: "Real Partnership",
      body: "Joint enablement, deal support and a relationship built on transparency — not just a referral link.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Partnership Enquiry — ${form.company || form.firstName}`);
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company}\nJob Title: ${form.jobTitle}\nCountry: ${form.country}\nIndustry: ${form.industry}\n\nCurrent offerings:\n${form.offerings}\n\nChallenges to solve:\n${form.challenges}`
    );
    window.location.href = `mailto:info@bitsbytech.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client", description: "We'll be in touch within 2 business days." });
  };

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <Badge variant="outline" className="mb-6 px-4 py-2">Partner Programme</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Become a
              <span className="block bg-gradient-primary bg-clip-text text-transparent">BitsbyTech Partner</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Join our partner ecosystem and grow your business with us. Together we deliver exceptional
              technology, security and data solutions to organisations across the region.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b) => (
                <Card key={b.title} className="hover:shadow-elegant transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <b.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Logo Marquee */}
        <LogoMarquee />





        {/* Form */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Tell us about your business</h2>
              <p className="text-muted-foreground">
                Share a few details and our partnerships team will reach out within two business days.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required value={form.firstName} onChange={(e) => update('firstName', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required value={form.lastName} onChange={(e) => update('lastName', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email *</Label>
                      <Input id="email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" required value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input id="company" required value={form.company} onChange={(e) => update('company', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title *</Label>
                      <Input id="jobTitle" required value={form.jobTitle} onChange={(e) => update('jobTitle', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country / Region</Label>
                      <Input id="country" value={form.country} onChange={(e) => update('country', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Input id="industry" value={form.industry} onChange={(e) => update('industry', e.target.value)} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="offerings">Current products / services offered *</Label>
                    <Textarea id="offerings" required rows={3} value={form.offerings} onChange={(e) => update('offerings', e.target.value)} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="challenges">What challenges are you trying to solve? *</Label>
                    <Textarea id="challenges" required rows={4} value={form.challenges} onChange={(e) => update('challenges', e.target.value)} />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    By submitting this form you agree we may contact you about your partnership enquiry. We handle your
                    information in line with our Privacy Policy.
                  </p>

                  <Button type="submit" size="lg" className="w-full bg-gradient-primary">
                    Submit Partnership Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
