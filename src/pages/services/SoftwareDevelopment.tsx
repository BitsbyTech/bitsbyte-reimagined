import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Database, Zap, CheckCircle, ArrowRight, Rocket } from "lucide-react";

const SoftwareDevelopment = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Applications",
      description: "Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.",
      features: ["React/Next.js Development", "Full-Stack Solutions", "Progressive Web Apps", "E-commerce Platforms"]
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android devices.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"]
    },
    {
      icon: Database,
      title: "API Development",
      description: "Robust and scalable APIs that power your applications and enable seamless integration with third-party services.",
      features: ["RESTful APIs", "GraphQL", "Microservices", "API Documentation"]
    },
    {
      icon: Zap,
      title: "System Integration",
      description: "Seamless integration of disparate systems and applications to create unified, efficient business processes.",
      features: ["Legacy System Integration", "Third-party APIs", "Data Migration", "Workflow Automation"]
    }
  ];

  const technologies = [
    "React", "Node.js", "Python", "TypeScript", "Next.js", "Vue.js", 
    "Express", "Django", "PostgreSQL", "MongoDB", "AWS", "Docker"
  ];

  const benefits = [
    "Custom solutions tailored to your business needs",
    "Scalable architecture for future growth",
    "Modern development practices and technologies",
    "Agile development methodology",
    "Ongoing support and maintenance",
    "Quality assurance and testing"
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
                Software Development
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Custom Software Solutions That Drive Innovation
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transform your ideas into powerful software applications. Our expert development team 
                creates scalable, efficient solutions tailored to your unique business requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8" onClick={() => window.location.href = '/contact'}>
                  Start Your Project
                </Button>
                <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary">
                  View Our Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive software development services from concept to deployment and beyond.
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

        {/* Technologies Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We leverage the latest technologies and frameworks to build robust, scalable applications.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="px-4 py-2 text-sm bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                  {tech}
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
                  <Rocket className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Agile Development</h3>
                  <p className="text-muted-foreground mb-6">
                    We follow agile methodologies to ensure rapid development, continuous feedback, 
                    and delivery of high-quality software solutions.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">2-4</div>
                      <div className="text-sm text-muted-foreground">Week Sprints</div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-muted-foreground">Test Coverage</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Development Services?
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
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-primary p-12 rounded-2xl text-center text-white shadow-glow">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build Your Next Application?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's transform your ideas into powerful software solutions that drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8" onClick={() => window.location.href = '/contact'}>
                  Get Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary" onClick={() => window.location.href = '/contact'}>
                  Request Quote
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

export default SoftwareDevelopment;