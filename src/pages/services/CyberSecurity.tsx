import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Phone,
  Globe,
  Smartphone,
  Cloud,
  Wifi,
  Server,
  Bot,
  Monitor,
  Code
} from "lucide-react";

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

  const vaptServices = [
    { number: "01", title: "Web Application VAPT", icon: Globe, description: "Identify and remediate vulnerabilities in web applications including SQL injection, XSS, and authentication flaws." },
    { number: "02", title: "Mobile Application VAPT", icon: Smartphone, description: "Security assessment for iOS and Android apps covering data storage, network communication, and authentication." },
    { number: "03", title: "Cloud Security VAPT", icon: Cloud, description: "Comprehensive testing of cloud infrastructure including AWS, Azure, and GCP configurations." },
    { number: "04", title: "IoT VAPT", icon: Wifi, description: "Security testing for Internet of Things devices and their communication protocols." },
    { number: "05", title: "API VAPT", icon: Code, description: "REST and GraphQL API security testing covering authentication, authorization, and data exposure." },
    { number: "06", title: "Network VAPT", icon: Server, description: "Internal and external network penetration testing to identify infrastructure vulnerabilities." },
    { number: "07", title: "AI/ML VAPT", icon: Bot, description: "Security assessment for AI and machine learning systems including model poisoning and adversarial attacks." },
    { number: "08", title: "Desktop Application VAPT", icon: Monitor, description: "Security testing for desktop applications including memory analysis and reverse engineering." }
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
                <Button size="lg" variant="secondary" className="px-8" onClick={() => window.location.href = '/contact'}>
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

        {/* VAPT Services Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">VAPT Services</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Types of VAPT Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive Vulnerability Assessment and Penetration Testing across all your digital assets.
              </p>
            </div>

            {/* VAPT Grid with Central Icon */}
            <div className="relative max-w-6xl mx-auto">
              {/* Central Shield Icon */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center shadow-elegant border border-primary/20">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center">
                    <Shield className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>

              {/* VAPT Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {vaptServices.map((service, index) => (
                  <div 
                    key={service.title}
                    className={`group relative ${index >= 4 ? 'lg:col-start-auto' : ''}`}
                  >
                    <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-primary/10 hover:border-primary/30">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md">
                              {service.number}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <service.icon className="h-5 w-5 text-primary" />
                              <h3 className="font-semibold text-lg">{service.title}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
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
                <Button size="lg" className="mt-8 bg-gradient-primary" onClick={() => window.location.href = '/contact'}>
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
                <Button size="lg" variant="secondary" className="px-8" onClick={() => window.location.href = '/contact'}>
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