import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Target, Heart, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Safety",
      description: "Safeguarding your digital assets with unwavering commitment. We prioritize work safety, employing advanced measures to protect against cyber threats.",
      color: "text-green-500",
    },
    {
      icon: Heart,
      title: "Customer Service",
      description: "Exceeding expectations with exceptional customer service. We deliver personalized experiences and provide timely support throughout your journey.",
      color: "text-red-500",
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Upholding unwavering integrity at every step. We conduct business with honesty, transparency, and ethical practices.",
      color: "text-blue-500",
    },
    {
      icon: Users,
      title: "Team of Professionals",
      description: "Our dynamic team brings deep expertise and passion for turning innovative ideas into reality for your business success.",
      color: "text-purple-500",
    },
  ];

  const achievements = [
    { label: "Reputation for Excellence", description: "Years of proven track record" },
    { label: "Build Partnerships", description: "Long-lasting client relationships" },
    { label: "Guided by Commitment", description: "Dedicated to your success" },
    { label: "Professional Team", description: "Expert engineers and consultants" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <Badge variant="outline" className="mb-4 px-4 py-2">
              About BitsbyTech Labs
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Transformation with a
              <span className="block text-primary">Holistic Approach</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Transform your business with BitsbyTech Labs. We provide integrated solutions 
              in Cyber Security, Data Analytics, and Software Development domains. 
              Our team has ambitious tech projects and aspirations, with deep expertise 
              and a passion for turning ideas into reality.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement) => (
                <div key={achievement.label} className="text-center p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-primary mb-1">{achievement.label}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-gradient-primary hover:bg-primary/90">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant">
              <div className="aspect-video bg-muted/30 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <Target className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Years of Excellence in Tech Industry</p>
                </div>
              </div>
              <blockquote className="text-lg font-medium text-center">
                "We deal with your failures and turn them into the foundation 
                for achieving extraordinary success."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We prioritize protecting your digital assets with unwavering dedication. 
              Trust BitsbyTech Labs for a safe and reliable partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-muted/20 flex items-center justify-center`}>
                    <value.icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted/30 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            We Understand Your Needs on Technology
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Looking to innovate and disrupt industries with technology? 
            We have a visionary team eager to collaborate and drive transformative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 bg-gradient-primary">
              Request Quote
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;