import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, Target, Shield, Lightbulb, CheckCircle, ArrowRight, DollarSign } from "lucide-react";

const FinanceITConsulting = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "IT Strategy",
      description: "Develop comprehensive IT strategies that align with your business objectives and drive digital transformation initiatives.",
      features: ["Digital Roadmap", "Technology Assessment", "Vendor Selection", "Risk Management"]
    },
    {
      icon: Calculator,
      title: "Technology Evaluation",
      description: "Assess and evaluate technology solutions to ensure optimal fit for your organization's needs and budget constraints.",
      features: ["Cost-Benefit Analysis", "Technology Comparison", "Implementation Planning", "Performance Metrics"]
    },
    {
      icon: DollarSign,
      title: "Financial Planning",
      description: "Strategic financial planning for IT investments, budget optimization, and maximizing return on technology investments.",
      features: ["Budget Planning", "Investment Analysis", "Cost Forecasting", "Financial Modeling"]
    },
    {
      icon: Target,
      title: "ROI Optimization",
      description: "Maximize your technology investments through strategic optimization and performance improvement initiatives.",
      features: ["Performance Analysis", "Efficiency Improvement", "Cost Reduction", "Value Creation"]
    }
  ];

  const consultingAreas = [
    "IT Governance", "Technology Strategy", "Financial Analysis", "Risk Assessment",
    "Vendor Management", "Project Management", "Digital Strategy", "Innovation Planning"
  ];

  const benefits = [
    "Strategic alignment of IT with business goals",
    "Optimized technology investments and spending",
    "Reduced operational costs and improved efficiency",
    "Enhanced risk management and compliance",
    "Improved decision-making through data insights",
    "Accelerated digital transformation initiatives"
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
                Finance & IT Consulting
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Strategic Finance & IT Advisory Services
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Optimize your technology investments and financial performance with expert consulting services. 
                We help organizations make informed decisions that drive growth and maximize ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get Strategic Consultation
                </Button>
                <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary">
                  ROI Assessment
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Consulting Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert advisory services to optimize your technology investments and financial performance.
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

        {/* Consulting Areas */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas of Expertise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive consulting across all aspects of finance and IT strategy.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {consultingAreas.map((area) => (
                <Badge key={area} variant="outline" className="px-4 py-2 text-sm bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                  {area}
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
                  <Lightbulb className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Strategic Advisory</h3>
                  <p className="text-muted-foreground mb-6">
                    Our experienced consultants provide strategic guidance to help you make informed 
                    decisions about technology investments and financial planning.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">45%</div>
                      <div className="text-sm text-muted-foreground">Cost Savings</div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">3x</div>
                      <div className="text-sm text-muted-foreground">ROI Improvement</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Drive Strategic Value
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
                  Get Strategic Advice
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Consulting Approach</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A systematic approach to delivering strategic insights and actionable recommendations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "Understand your business objectives and current challenges" },
                { step: "02", title: "Analysis", description: "Conduct thorough analysis of your technology and financial landscape" },
                { step: "03", title: "Strategy", description: "Develop strategic recommendations and implementation roadmap" },
                { step: "04", title: "Execution", description: "Support implementation and provide ongoing advisory services" }
              ].map((process) => (
                <Card key={process.step} className="text-center hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                    <p className="text-sm text-muted-foreground">{process.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our consulting services deliver measurable outcomes that drive business success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { metric: "200+", label: "Projects Completed", description: "Successfully delivered consulting engagements" },
                { metric: "$50M+", label: "Cost Savings", description: "Total savings achieved for clients" },
                { metric: "95%", label: "Client Satisfaction", description: "Client satisfaction rate" },
                { metric: "24/7", label: "Support", description: "Ongoing advisory support" }
              ].map((stat) => (
                <Card key={stat.label} className="text-center hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                    <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-primary p-12 rounded-2xl text-center text-white shadow-glow">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Optimize Your Technology Investments?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get expert advice on how to maximize your technology ROI and drive strategic business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8" onClick={() => window.location.href = '/#contact'}>
                  Schedule Strategic Consultation
                </Button>
                <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary">
                  Download ROI Calculator
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

export default FinanceITConsulting;