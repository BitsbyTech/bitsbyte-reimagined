import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Cog, Users, TrendingUp, Workflow, CheckCircle, ArrowRight, Lightbulb } from "lucide-react";

const DigitalTransformation = () => {
  const services = [
    {
      icon: Cog,
      title: "Process Automation",
      description: "Streamline your business processes with intelligent automation solutions that reduce manual work and improve efficiency.",
      features: ["Workflow Automation", "RPA Implementation", "Document Processing", "Task Automation"]
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Guide your organization through digital transformation with comprehensive change management strategies and training programs.",
      features: ["Stakeholder Engagement", "Training Programs", "Communication Strategy", "Cultural Transformation"]
    },
    {
      icon: Workflow,
      title: "Technology Integration",
      description: "Seamlessly integrate new technologies with existing systems to create a unified, efficient digital ecosystem.",
      features: ["System Integration", "API Development", "Data Migration", "Legacy Modernization"]
    },
    {
      icon: TrendingUp,
      title: "Digital Strategy",
      description: "Develop comprehensive digital strategies that align with your business goals and drive sustainable growth.",
      features: ["Digital Roadmap", "Technology Assessment", "ROI Analysis", "Innovation Planning"]
    }
  ];

  const transformationAreas = [
    "Customer Experience", "Operations", "Business Models", "Technology Infrastructure", 
    "Data & Analytics", "Employee Experience", "Security & Compliance", "Innovation Culture"
  ];

  const benefits = [
    "Enhanced operational efficiency and productivity",
    "Improved customer experience and satisfaction",
    "Reduced operational costs and waste",
    "Faster time-to-market for products and services",
    "Better data-driven decision making",
    "Increased agility and competitive advantage"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                Digital Transformation
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business for the Digital Age
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Drive innovation and growth through comprehensive digital transformation initiatives. 
                We help organizations modernize their processes, technology, and culture for sustainable success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Start Transformation
                </Button>
                <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary">
                  Digital Readiness Assessment
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformation Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital transformation services to modernize your organization and drive competitive advantage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={service.title} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Areas */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas of Transformation</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We focus on key areas that drive the most significant impact for your organization.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {transformationAreas.map((area) => (
                <Badge key={area} variant="outline" className="px-4 py-2 text-sm bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Drive Innovation and Growth
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5" />
                      <span className="text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="mt-8 bg-gradient-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Begin Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant">
                <div className="text-center">
                  <Lightbulb className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Innovation-Driven Approach</h3>
                  <p className="text-muted-foreground mb-6">
                    Our transformation methodology combines proven frameworks with innovative thinking 
                    to deliver sustainable results that drive long-term success.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">75%</div>
                      <div className="text-sm text-muted-foreground">Efficiency Gain</div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">60%</div>
                      <div className="text-sm text-muted-foreground">Cost Reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Roadmap */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformation Roadmap</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our structured approach ensures successful digital transformation with measurable outcomes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Assessment", description: "Evaluate current state and identify transformation opportunities" },
                { step: "02", title: "Strategy", description: "Develop comprehensive digital transformation roadmap" },
                { step: "03", title: "Implementation", description: "Execute transformation initiatives with agile methodology" },
                { step: "04", title: "Optimization", description: "Continuously improve and scale transformation outcomes" }
              ].map((process) => (
                <Card key={process.step} className="text-center hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                    <p className="text-sm text-muted-foreground">{process.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Focus */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Expertise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We deliver tailored transformation solutions across various industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Financial Services", description: "Digital banking, fintech innovation, regulatory compliance" },
                { title: "Healthcare", description: "Digital health platforms, telemedicine, data analytics" },
                { title: "Manufacturing", description: "Industry 4.0, IoT integration, supply chain optimization" },
                { title: "Retail & E-commerce", description: "Omnichannel experiences, customer analytics, automation" },
                { title: "Education", description: "Digital learning platforms, student engagement, administration" },
                { title: "Government", description: "Digital services, citizen engagement, process modernization" }
              ].map((industry) => (
                <Card key={industry.title} className="hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
                    <p className="text-sm text-muted-foreground">{industry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-primary p-12 rounded-2xl text-center text-white shadow-glow">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Organization?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your digital transformation journey today and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8" onClick={() => window.location.href = '/#contact'}>
                  Get Transformation Consultation
                </Button>
                <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary">
                  Download Transformation Guide
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

export default DigitalTransformation;