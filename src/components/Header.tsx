import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { title: "Cyber Security Solutions", href: "/services/cyber-security" },
    { title: "Software Development", href: "/services/software-development" },
    { title: "Data Analytics", href: "/services/data-analytics" },
    { title: "Cloud Computing", href: "/services/cloud-computing" },
    { title: "Digital Transformation", href: "/services/digital-transformation" },
    { title: "Finance & IT Consulting", href: "/services/finance-it-consulting" },
    { title: "Platforms", href: "/platforms" },
  ];

  const company = [
    { title: "About Us", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Our Process", href: "/our-process" },
    { title: "Resources", href: "/resources" },
    { title: "Careers", href: "/careers" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-y-2">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>BitsbyTech Labs, Nairobi</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+254 793-656-644</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@bitsbytech.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>Open: 09:00am – 05:00pm</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
        isScrolled && "shadow-md"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <img src={logo} alt="BitsbyTech Logo" className="h-[68px] w-[42px] object-contain" />
              <span className="text-xl font-bold">BitsbyTech Labs</span>
            </a>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground" href="/">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      {services.map((service) => (
                        <NavigationMenuLink
                          key={service.title}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          href={service.href}
                        >
                          <div className="text-sm font-medium leading-none">{service.title}</div>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground" href="/platforms">
                    Platforms
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[320px] gap-2 p-4">
                      {company.map((item) => (
                        <NavigationMenuLink
                          key={item.title}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          href={item.href}
                        >
                          <div className="text-sm font-medium">{item.title}</div>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground" href="/partners">
                    Partners
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground" href="/blog">
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground" href="/contact">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button className="hidden md:inline-flex bg-gradient-primary hover:bg-primary/90 animate-glow-pulse" onClick={() => window.location.href = '/contact'}>
                Get Started
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="overflow-y-auto">
                  <nav className="flex flex-col space-y-4 mt-4">
                    <a href="/" className="text-lg font-medium hover:text-primary">Home</a>
                    <div>
                      <p className="text-lg font-medium mb-2">Services</p>
                      <div className="ml-4 space-y-2">
                        {services.map((service) => (
                          <a key={service.title} href={service.href} className="block text-muted-foreground hover:text-primary">
                            {service.title}
                          </a>
                        ))}
                      </div>
                    </div>
                    <a href="/platforms" className="text-lg font-medium hover:text-primary">Platforms</a>
                    <div>
                      <p className="text-lg font-medium mb-2">Company</p>
                      <div className="ml-4 space-y-2">
                        {company.map((item) => (
                          <a key={item.title} href={item.href} className="block text-muted-foreground hover:text-primary">
                            {item.title}
                          </a>
                        ))}
                      </div>
                    </div>
                    <a href="/partners" className="text-lg font-medium hover:text-primary">Partners</a>
                    <a href="/blog" className="text-lg font-medium hover:text-primary">Blog</a>
                    <a href="/contact" className="text-lg font-medium hover:text-primary">Contact</a>
                    <div className="flex items-center space-x-2 pt-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Open: 09:00am – 05:00pm</span>
                    </div>
                    <Button className="mt-4 bg-gradient-primary" onClick={() => window.open('https://calendar.app.google/vmX5upMwwYhLjdJv8', '_blank')}>
                      Book a Virtual Meeting
                    </Button>
                    <Button className="bg-gradient-primary" onClick={() => window.location.href = '/contact'}>Get Started</Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
