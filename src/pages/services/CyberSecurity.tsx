import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, AlertTriangle, Users, CheckCircle, ArrowRight, Phone } from "lucide-react";

const CyberSecurity = () => {
  const services = [
    {
      icon: Shield,
      title: "Vulnerability Assessment",
      description: "Comprehensive security testing to identify vulnerabilities in your systems, networks, and applications before attackers can exploit them.",
      features: ["Network Scanning", "Web Application Testing", "Database Security", "Infrastructure Assessment"]
    },
    {
      icon: Lock,
      title: "Penetration Testing",
      description: "Ethical hacking services that simulate real-world attacks to test your security defenses and provide actionable recommendations.",
      features: ["External Testing", "Internal Testing", "Web App Penetration", "Wireless Security"]
    },
    {
      icon: Eye,
      title: "Threat Intelligence",
      description: "Advanced threat monitoring and intelligence services to stay ahead of emerging cybersecurity threats and protect your organization.",
      features: ["24/7 Monitoring", "Threat Analysis", "Risk Assessment", "Security Alerts"]
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid response services to contain, investigate, and recover from security incidents with minimal business disruption.",
      features: ["Emergency Response", "Forensic Analysis", "Recovery Planning", "Post-Incident Review"]
    }
  ];

  const benefits = [
    "Protect against cyber threats and data breaches",
    "Ensure compliance with industry regulations",
    "Reduce security risks and vulnerabilities",
    "24/7 monitoring and support",
    "Expert incident response team",
    "Comprehensive security assessments"
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
                Cyber Security Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Protect Your Digital Assets with Advanced Security
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Comprehensive cybersecurity solutions to safeguard your business from evolving threats. 
                Our expert team provides cutting-edge security services tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get Security Assessment
                </Button>
                <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency Response
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Security Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive cybersecurity solutions designed to protect your organization from modern threats.
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

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Cybersecurity Services?
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
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant">
                <div className="text-center">
                  <Users className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Expert Security Team</h3>
                  <p className="text-muted-foreground mb-6">
                    Our certified cybersecurity professionals have years of experience protecting organizations 
                    from sophisticated cyber threats.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Monitoring</div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-primary p-12 rounded-2xl text-center text-white shadow-glow">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don't wait for a security breach. Contact our experts today for a comprehensive security assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8" onClick={() => window.location.href = '/#contact'}>
                  Get Free Security Consultation
                </Button>
                <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary">
                  Download Security Guide
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

export default CyberSecurity;