import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import LandingExtras from "@/components/LandingExtras";
import LogoMarquee from "@/components/LogoMarquee";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <LandingExtras />
        <LogoMarquee title="Trusted Technologies & Industries We Work With" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
