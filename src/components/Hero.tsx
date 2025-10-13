import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Zap, Shield, Database, Cloud, Code, BarChart3 } from "lucide-react";

const Hero = () => {
  const techIcons = [
    { icon: Shield, label: "Security", delay: "0s" },
    { icon: Code, label: "Development", delay: "0.2s" },
    { icon: Database, label: "Analytics", delay: "0.4s" },
    { icon: Cloud, label: "Cloud", delay: "0.6s" },
    { icon: BarChart3, label: "Insights", delay: "0.8s" },
    { icon: Zap, label: "Performance", delay: "1s" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {techIcons.map((item, index) => (
          <div
            key={item.label}
            className="absolute animate-float"
            style={{
              left: `${15 + (index * 15)}%`,
              top: `${20 + (index % 3) * 25}%`,
              animationDelay: item.delay,
            }}
          >
            <div className="p-4 bg-card/20 backdrop-blur-sm rounded-full border border-border/20">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-6 px-6 py-2 text-sm bg-card/50 backdrop-blur-sm border-primary/20">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              Digital Transformation Experts
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Transform Your Business
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Digitally with BitsbyTech
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            We specialize in cyber security, software development, data analytics, and cloud computing solutions. 
            Let our visionary team drive transformative results for your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="px-8 py-6 text-lg bg-gradient-primary hover:bg-primary/90 shadow-glow group" onClick={() => window.location.href = '/contact'}>
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-primary/20 hover:bg-primary/10 group" onClick={() => window.location.href = '/projects'}>
              <Play className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Expert Engineers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">3</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;