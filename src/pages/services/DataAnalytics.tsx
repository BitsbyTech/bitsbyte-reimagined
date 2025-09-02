import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Brain, Eye, TrendingUp, Database, CheckCircle, ArrowRight, Target } from "lucide-react";

const DataAnalytics = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with comprehensive BI solutions that drive informed decision-making across your organization.",
      features: ["Dashboard Development", "Reporting Solutions", "KPI Monitoring", "Data Visualization"]
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Leverage machine learning and statistical models to forecast trends, identify patterns, and predict future outcomes for your business.",
      features: ["Forecasting Models", "Risk Assessment", "Customer Analytics", "Demand Planning"]
    },
    {
      icon: Eye,
      title: "Data Visualization",
      description: "Create compelling visual representations of your data that make complex information easy to understand and act upon.",
      features: ["Interactive Dashboards", "Custom Charts", "Real-time Visualization", "Mobile-friendly Reports"]
    },
    {
      icon: TrendingUp,
      title: "Machine Learning",
      description: "Implement advanced ML algorithms to automate processes, enhance decision-making, and uncover hidden patterns in your data.",
      features: ["Classification Models", "Clustering Analysis", "Natural Language Processing", "Computer Vision"]
    }
  ];

  const tools = [
    "Python", "R", "Tableau", "Power BI", "SQL", "Apache Spark",
    "TensorFlow", "Pandas", "Jupyter", "AWS Analytics", "Snowflake", "dbt"
  ];

  const benefits = [
    "Data-driven decision making across all levels",
    "Improved operational efficiency and performance",
    "Enhanced customer insights and personalization",
    "Predictive capabilities for better planning",
    "Real-time monitoring and alerting",
    "Scalable analytics infrastructure"
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
                Data Analytics
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Unlock the Power of Your Data
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transform your business with advanced data analytics and machine learning solutions. 
                Extract meaningful insights from your data to drive growth and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get Data Assessment
                </Button>
                <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary">
                  View Analytics Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive data analytics solutions designed to extract maximum value from your data assets.
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

        {/* Tools Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics Tools & Technologies</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We use industry-leading tools and platforms to deliver powerful analytics solutions.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool) => (
                <Badge key={tool} variant="outline" className="px-4 py-2 text-sm bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Transform Your Business with Data
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
                  Start Analytics Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant">
                <div className="text-center">
                  <Target className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Data-Driven Results</h3>
                  <p className="text-muted-foreground mb-6">
                    Our analytics solutions help organizations make better decisions, optimize operations, 
                    and achieve measurable business outcomes.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">85%</div>
                      <div className="text-sm text-muted-foreground">Faster Insights</div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">40%</div>
                      <div className="text-sm text-muted-foreground">Cost Reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Analytics Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A structured approach to delivering impactful analytics solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Data Discovery", description: "Understand your data landscape and business objectives" },
                { step: "02", title: "Data Preparation", description: "Clean, transform, and prepare data for analysis" },
                { step: "03", title: "Analysis & Modeling", description: "Apply advanced analytics and machine learning techniques" },
                { step: "04", title: "Insights & Action", description: "Deliver actionable insights and recommendations" }
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

        {/* CTA Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-primary p-12 rounded-2xl text-center text-white shadow-glow">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Harness Your Data?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let our data experts help you uncover valuable insights and drive business growth through analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8" onClick={() => window.location.href = '/#contact'}>
                  Get Free Data Assessment
                </Button>
                <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary">
                  Schedule Demo
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

export default DataAnalytics;