import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Video, BarChart3, BookOpen, Lightbulb, Database, Search, ArrowRight } from "lucide-react";

type Resource = {
  type: string;
  icon: any;
  title: string;
  description: string;
};

const resources: Resource[] = [
  {
    type: "Whitepaper",
    icon: FileText,
    title: "Building a Secure Digital Foundation in East Africa",
    description: "A practical guide to strengthening your security posture across cloud and on-premise environments.",
  },
  {
    type: "Report",
    icon: BarChart3,
    title: "Measuring Digital Trust: KPIs that Matter",
    description: "Key performance indicators every executive should track to quantify digital trust and resilience.",
  },
  {
    type: "Use Case",
    icon: Lightbulb,
    title: "Modernising Financial Services with Secure APIs",
    description: "How financial institutions can launch new digital products faster without compromising security.",
  },
  {
    type: "eBook",
    icon: BookOpen,
    title: "Zero Trust Fundamentals for the Modern Enterprise",
    description: "Core principles and a realistic roadmap for adopting zero trust in distributed organisations.",
  },
  {
    type: "Datasheet",
    icon: Database,
    title: "BitsbyTech Vulnerability Assessment & Penetration Testing",
    description: "Methodology, scope and deliverables for our VAPT engagements across web, mobile and infrastructure.",
  },
  {
    type: "Video",
    icon: Video,
    title: "Cloud Migration in 90 Days — A Walkthrough",
    description: "Watch how we move workloads to the cloud safely while keeping operations running.",
  },
  {
    type: "Whitepaper",
    icon: FileText,
    title: "Data Analytics for Executive Decision-Making",
    description: "Turning fragmented data into clear, trusted insights that drive boardroom decisions.",
  },
  {
    type: "Use Case",
    icon: Lightbulb,
    title: "Incident Response: A First 72 Hours Playbook",
    description: "A field-tested playbook for containing, investigating and recovering from security incidents.",
  },
];

const Resources = () => {
  const [query, setQuery] = useState("");

  const filtered = resources.filter(
    (r) =>
      r.title.toLowerCase().includes(query.toLowerCase()) ||
      r.type.toLowerCase().includes(query.toLowerCase())
  );

  const requestResource = (r: Resource) => {
    const subject = encodeURIComponent(`Resource Request: ${r.title}`);
    const body = encodeURIComponent(
      `Hello BitsbyTech team,\n\nI'd like to access the following resource:\n\nType: ${r.type}\nTitle: ${r.title}\n\nMy details:\nName:\nCompany:\nRole:\n\nThank you.`
    );
    window.location.href = `mailto:info@bitsbytech.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <Badge variant="outline" className="mb-6 px-4 py-2">Resource Centre</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insights to help you
              <span className="block bg-gradient-primary bg-clip-text text-transparent">build with confidence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Whitepapers, reports, playbooks and field notes from our work with leading organisations.
            </p>
          </div>
        </section>

        {/* Search */}
        <section className="py-10 border-b border-border/50">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 h-12"
              />
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground">No resources match your search.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((r) => (
                  <Card
                    key={r.title}
                    className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
                    onClick={() => requestResource(r)}
                  >
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="text-xs">{r.type}</Badge>
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <r.icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {r.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{r.description}</p>
                      <Button
                        variant="ghost"
                        className="mt-5 justify-start px-0 hover:bg-transparent group-hover:text-primary"
                      >
                        Request resource
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
