import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock } from "lucide-react";

const Careers = () => {
  const positions = [
    {
      title: "Cybersecurity Engineer",
      department: "Security",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description: "Lead our security initiatives and protect our clients' digital assets with cutting-edge solutions.",
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build scalable web applications using modern technologies and best practices.",
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description: "Transform data into actionable insights and drive data-driven decision making.",
    },
    {
      title: "Cloud Solutions Architect",
      department: "Infrastructure",
      location: "Hybrid",
      type: "Full-time",
      description: "Design and implement robust cloud infrastructure solutions for our clients.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Build the future of technology with BitsbyTech. We're looking for talented individuals who are passionate about innovation and excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Work With Us?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Innovation First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Work with cutting-edge technologies and shape the future of digital solutions.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Growth & Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Continuous learning opportunities and career development programs.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Great Culture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Collaborative environment with a diverse team of experts.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Open Positions */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
              <div className="space-y-6">
                {positions.map((position, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                          <CardDescription>{position.description}</CardDescription>
                        </div>
                        <Button onClick={() => window.location.href = '/contact'}>Apply Now</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-4">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {position.department}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {position.location}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {position.type}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
