import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Server, Shield, Zap, Database, CheckCircle, ArrowRight, Layers } from "lucide-react";

const CloudComputing = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamlessly migrate your existing infrastructure and applications to the cloud with minimal downtime and maximum efficiency.",
      features: ["Assessment & Planning", "Data Migration", "Application Migration", "Legacy System Migration"]
    },
    {
      icon: Server,
      title: "Infrastructure Setup",
      description: "Design and implement robust cloud infrastructure that scales with your business needs and ensures optimal performance.",
      features: ["Virtual Machines", "Load Balancers", "Auto Scaling", "Network Configuration"]
    },
    {
      icon: Zap,
      title: "Scalable Solutions",
      description: "Build cloud-native applications and services that automatically scale based on demand, ensuring consistent performance.",
      features: ["Microservices Architecture", "Containerization", "Serverless Computing", "API Gateways"]
    },
    {
      icon: Shield,
      title: "Cost Optimization",
      description: "Optimize your cloud spending through intelligent resource management, right-sizing, and automated cost controls.",
      features: ["Resource Monitoring", "Cost Analysis", "Reserved Instances", "Automated Scaling"]
    }
  ];

  const platforms = [
    "AWS", "Microsoft Azure", "Google Cloud", "DigitalOcean", "Kubernetes", "Docker",
    "Terraform", "CloudFormation", "Jenkins", "GitLab CI", "Prometheus", "Grafana"
  ];

  const benefits = [
    "Reduced infrastructure costs and operational overhead",
    "Enhanced scalability and flexibility",
    "Improved disaster recovery and business continuity",
    "Access to cutting-edge cloud services",
    "24/7 monitoring and support",
    "Faster time-to-market for applications"
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
                Cloud Computing
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Scale Your Business with Cloud Solutions
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Embrace the power of cloud computing with our comprehensive migration, optimization, 
                and management services. Build scalable, secure, and cost-effective cloud infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8" onClick={() => window.location.href = '/contact'}>
                  Get Cloud Assessment
                </Button>
                <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary">
                  Migration Calculator
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cloud Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive cloud solutions to modernize your infrastructure and accelerate digital transformation.
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

        {/* Cloud Platforms Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cloud Platforms & Tools</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We work with leading cloud providers and tools to deliver the best solutions for your needs.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {platforms.map((platform) => (
                <Badge key={platform} variant="outline" className="px-4 py-2 text-sm bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                  {platform}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant">
                <div className="text-center">
                  <Layers className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Multi-Cloud Strategy</h3>
                  <p className="text-muted-foreground mb-6">
                    We help you leverage multiple cloud providers to avoid vendor lock-in, 
                    optimize costs, and ensure maximum reliability and performance.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime SLA</div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">50%</div>
                      <div className="text-sm text-muted-foreground">Cost Savings</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Cloud Services?
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5" />
                      <span className="text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="mt-8 bg-gradient-primary" onClick={() => window.location.href = '/contact'}>
                  Start Cloud Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cloud Migration Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our proven migration methodology ensures smooth transition with minimal business disruption.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Assessment", description: "Evaluate current infrastructure and define migration strategy" },
                { step: "02", title: "Planning", description: "Create detailed migration plan with timelines and milestones" },
                { step: "03", title: "Migration", description: "Execute migration with continuous monitoring and support" },
                { step: "04", title: "Optimization", description: "Fine-tune performance and optimize costs post-migration" }
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

        {/* CTA Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-primary p-12 rounded-2xl text-center text-white shadow-glow">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Move to the Cloud?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let our cloud experts help you design and implement a cloud strategy that drives efficiency and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8" onClick={() => window.location.href = '/contact'}>
                  Get Free Cloud Assessment
                </Button>
                <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary">
                  Download Migration Guide
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

export default CloudComputing;