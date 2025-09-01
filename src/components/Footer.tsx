import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  Shield,
  Code,
  BarChart3,
  Cloud
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Cyber Security Solutions", icon: Shield },
    { name: "Software Development", icon: Code },
    { name: "Data Analytics", icon: BarChart3 },
    { name: "Cloud Computing", icon: Cloud },
  ];

  const quickLinks = [
    "About Us",
    "Our Services", 
    "Portfolio",
    "Case Studies",
    "Blog",
    "Careers",
    "Privacy Policy",
    "Terms of Service"
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/bitsbytech", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/bitsbytech", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/bitsbytech", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/bitsbytech", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold">BitsbyTech</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transform your business with integrated solutions in Cyber Security, 
              Data Analytics, and Software Development. Your trusted partner for 
              digital transformation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                <span>BitsbyTech Labs, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                <span>+254 793-656-644</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                <span>info@bitsbytech.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={`#${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <service.icon className="h-4 w-4 mr-3 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-3">Specializations</h4>
              <div className="space-y-2">
                <Badge variant="outline" className="mr-2 mb-2">Digital Transformation</Badge>
                <Badge variant="outline" className="mr-2 mb-2">Finance & IT Consulting</Badge>
                <Badge variant="outline" className="mr-2 mb-2">API Development</Badge>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest insights on technology trends 
              and digital transformation strategies.
            </p>
            
            <div className="flex flex-col space-y-3 mb-6">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-background border-border focus:border-primary"
              />
              <Button className="bg-gradient-primary hover:bg-primary/90 w-full">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-border/50" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} BitsbyTech Labs. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Made with</span>
            <span className="text-red-500">❤️</span>
            <span className="text-sm text-muted-foreground">in Nairobi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;