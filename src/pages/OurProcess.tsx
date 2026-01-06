import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Shield, 
  Users, 
  FileText, 
  Lightbulb, 
  Handshake, 
  FileSignature, 
  Target, 
  Rocket, 
  RefreshCw, 
  CheckCircle2, 
  Gift,
  ArrowRight
} from "lucide-react";

const OurProcess = () => {
  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We begin with a discovery call to understand your business challenges, goals, and vision. This is where we listen intently and ask the right questions to fully grasp your requirements.",
      icon: MessageSquare,
      details: ["Free consultation call", "Requirements gathering", "Project scope discussion"],
    },
    {
      step: 2,
      title: "Confidentiality Agreement",
      description: "Your ideas and data are valuable. We sign a comprehensive Non-Disclosure Agreement (NDA) to ensure complete confidentiality and build a foundation of trust.",
      icon: Shield,
      details: ["NDA signing", "Legal protection", "Secure communication channels"],
    },
    {
      step: 3,
      title: "Requirements Workshop",
      description: "Our senior developers and technical leads conduct an in-depth session to thoroughly understand your technical needs, user expectations, and business objectives.",
      icon: Users,
      details: ["Technical deep-dive", "User story mapping", "Feature prioritization"],
    },
    {
      step: 4,
      title: "Proposal & Strategy",
      description: "Based on our analysis, we craft a detailed proposal outlining our recommended approach, technology stack, timeline, and investment required for your project.",
      icon: FileText,
      details: ["Detailed project proposal", "Technology recommendations", "Clear pricing structure"],
    },
    {
      step: 5,
      title: "Research & Solution Design",
      description: "Our team conducts thorough research to validate our approach and develops a tailored solution architecture that addresses your specific challenges effectively.",
      icon: Lightbulb,
      details: ["Market research", "Technical feasibility study", "Solution architecture"],
    },
    {
      step: 6,
      title: "Terms Negotiation",
      description: "We work together to finalize pricing, timelines, and deliverables. Our transparent approach ensures both parties are aligned and satisfied with the agreement.",
      icon: Handshake,
      details: ["Pricing finalization", "Timeline agreement", "Milestone definition"],
    },
    {
      step: 7,
      title: "Contract Signing",
      description: "With all terms agreed upon, we formalize our partnership through a comprehensive contract that protects both parties and sets clear expectations.",
      icon: FileSignature,
      details: ["Legal contract execution", "Payment terms confirmation", "Project authorization"],
    },
    {
      step: 8,
      title: "Milestone Mapping",
      description: "Our project managers create a detailed roadmap with specific milestones, deliverables, and timelines to ensure transparent progress tracking throughout the project.",
      icon: Target,
      details: ["Sprint planning", "Deliverable scheduling", "Resource allocation"],
    },
    {
      step: 9,
      title: "Project Kickoff",
      description: "Development begins! Our team sets up the development environment, establishes communication channels, and starts building your solution with precision.",
      icon: Rocket,
      details: ["Environment setup", "Development initiation", "Architecture implementation"],
    },
    {
      step: 10,
      title: "Regular Updates",
      description: "Stay informed with weekly progress updates, demos, and review sessions. We maintain open communication to ensure the project aligns with your expectations.",
      icon: RefreshCw,
      details: ["Weekly status calls", "Progress demonstrations", "Feedback integration"],
    },
    {
      step: 11,
      title: "Quality Assurance",
      description: "Rigorous testing is integrated throughout development. We conduct comprehensive QA to ensure your solution is robust, secure, and performs flawlessly.",
      icon: CheckCircle2,
      details: ["Continuous testing", "Security audits", "Performance optimization"],
    },
    {
      step: 12,
      title: "Delivery & Handover",
      description: "Your completed solution is deployed and handed over with full documentation, training, and ongoing support to ensure your success.",
      icon: Gift,
      details: ["Production deployment", "Documentation & training", "Post-launch support"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 px-6 py-2 text-sm">
                How We Work
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Project
                <span className="block text-primary">Delivery Process</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                From initial consultation to final delivery, we follow a proven methodology 
                that ensures transparency, quality, and successful project outcomes. 
                Here's how we transform your vision into reality.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:bg-primary/90"
                onClick={() => window.location.href = '/contact'}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                12 Steps to Success
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our structured approach ensures every project is delivered with excellence, 
                on time, and within budget.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line - Desktop */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary h-full" />

              <div className="space-y-12 lg:space-y-0">
                {processSteps.map((step, index) => (
                  <div 
                    key={step.step}
                    className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                      index !== processSteps.length - 1 ? 'lg:mb-16' : ''
                    }`}
                  >
                    {/* Timeline Node - Desktop */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary rounded-full items-center justify-center z-10 shadow-glow">
                      <span className="text-xl font-bold text-primary-foreground">{step.step}</span>
                    </div>

                    {/* Content Card */}
                    <div className={`${index % 2 === 0 ? 'lg:pr-20' : 'lg:col-start-2 lg:pl-20'}`}>
                      <Card className="border-border/50 hover:shadow-elegant transition-all duration-300 group">
                        <CardContent className="p-6">
                          {/* Mobile Step Number */}
                          <div className="flex lg:hidden items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow">
                              <span className="text-lg font-bold text-primary-foreground">{step.step}</span>
                            </div>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="hidden lg:flex w-14 h-14 bg-primary/10 rounded-xl items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                              <step.icon className="h-7 w-7 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="hidden lg:block text-xl font-bold mb-3">{step.title}</h3>
                              <p className="text-muted-foreground mb-4 leading-relaxed">
                                {step.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {step.details.map((detail) => (
                                  <Badge 
                                    key={detail} 
                                    variant="secondary" 
                                    className="text-xs"
                                  >
                                    {detail}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Empty space for alternating layout */}
                    {index % 2 === 1 && <div className="hidden lg:block lg:col-start-1" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
          <div className="container mx-auto px-4">
            <Card className="border-primary/20 bg-gradient-primary shadow-glow overflow-hidden">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss your project and show you how our proven process 
                  can deliver exceptional results for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="text-primary font-semibold"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get A Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => window.location.href = '/projects'}
                  >
                    View Our Work
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurProcess;
