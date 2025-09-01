import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Code, BarChart3, Cloud, Zap, Calculator, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Cyber Security Solutions",
      description: "Comprehensive security solutions including vulnerability assessments, penetration testing, threat intelligence, and incident response to protect your digital assets.",
      features: ["Vulnerability Assessment", "Penetration Testing", "Threat Intelligence", "Incident Response"],
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950/20",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software applications for web and mobile platforms, built with innovative and scalable solutions to enhance operational efficiency.",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Advanced data analytics using cutting-edge tools to extract meaningful insights from large volumes of data for informed decision-making.",
      features: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Machine Learning"],
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Scalable cloud infrastructure solutions for data storage and application deployment, ensuring flexibility, efficiency, and cost-effectiveness.",
      features: ["Cloud Migration", "Infrastructure Setup", "Scalable Solutions", "Cost Optimization"],
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Comprehensive digital transformation initiatives through technology, process optimization, and change management for competitive advantage.",
      features: ["Process Automation", "Change Management", "Technology Integration", "Digital Strategy"],
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
    },
    {
      icon: Calculator,
      title: "Finance & IT Consulting",
      description: "Strategic finance and IT consulting services, including technology evaluation, IT roadmap development, and optimization for maximum ROI.",
      features: ["IT Strategy", "Technology Evaluation", "Financial Planning", "ROI Optimization"],
      color: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We Are Specialists In
            <span className="block text-primary">What We Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business with our comprehensive technology solutions. 
            We provide integrated services across multiple domains to drive your digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-8 rounded-2xl shadow-glow max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-white/90 mb-6">
              Let's discuss how our expertise can drive your success forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;