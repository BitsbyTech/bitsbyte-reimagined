import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, MapPin } from "lucide-react";
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
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
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
              {/* <Button variant="outline" size="sm" className="bg-primary text-primary-foreground border-primary hover:bg-primary/90" onClick={() => window.location.href = '/contact'}>
                Get A Quote
              </Button> */}
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
              <img src={logo} alt="BitsbyTech Logo" className="h-[65px] w-[40px] object-contain" />
              <span className="text-xl font-bold">BitsbyTech</span>
            </a>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="/">
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
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href={service.href}
                        >
                          <div className="text-sm font-medium leading-none">{service.title}</div>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="/projects">
                    Projects
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="/about">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="/blog">
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="/contact">
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
                <SheetContent side="right">
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
                    <a href="/projects" className="text-lg font-medium hover:text-primary">Projects</a>
                    <a href="/about" className="text-lg font-medium hover:text-primary">About</a>
                    <a href="/blog" className="text-lg font-medium hover:text-primary">Blog</a>
                    <a href="/contact" className="text-lg font-medium hover:text-primary">Contact</a>
                    <Button className="mt-4 bg-gradient-primary" onClick={() => window.location.href = '/contact'}>Get Started</Button>
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
