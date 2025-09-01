import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const categories = [
    "All Projects",
    "Security Compliance",
    "App Development", 
    "Data Analysis",
    "Software Development",
    "Web Development",
    "API Development"
  ];

  const projects = [
    {
      id: 1,
      title: "DATA-SASA Ltd",
      category: "Data Analysis",
      description: "Comprehensive data analytics platform providing real-time insights and business intelligence for enterprise clients.",
      technologies: ["Python", "React", "PostgreSQL", "AWS"],
      image: "/api/placeholder/400/300",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "TUBONGE Chat App",
      category: "App Development",
      description: "Real-time messaging application with end-to-end encryption and advanced security features.",
      technologies: ["React Native", "Node.js", "Socket.io", "MongoDB"],
      image: "/api/placeholder/400/300",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "SecureBank Platform",
      category: "Security Compliance",
      description: "Banking security assessment and compliance management system with real-time threat monitoring.",
      technologies: ["Java", "Spring Boot", "Angular", "Oracle"],
      image: "/api/placeholder/400/300",
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "CloudMigrate Pro",
      category: "Software Development",
      description: "Enterprise cloud migration tool with automated assessment and deployment capabilities.",
      technologies: ["Python", "Django", "Docker", "Kubernetes"],
      image: "/api/placeholder/400/300",
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "E-Commerce Analytics",
      category: "Web Development",
      description: "Modern e-commerce platform with advanced analytics and AI-powered recommendations.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
      image: "/api/placeholder/400/300",
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Payment Gateway API",
      category: "API Development",
      description: "Secure payment processing API with multi-currency support and fraud detection.",
      technologies: ["Node.js", "Express", "Redis", "PostgreSQL"],
      image: "/api/placeholder/400/300",
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work of Excellence
            <span className="block text-primary">Recent Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects across various industries. 
            From security solutions to mobile applications, we deliver results that matter.
          </p>
        </div>

        {/* Category Filters */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-12 bg-card">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="text-xs md:text-sm whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            {/* Featured Projects */}
            {activeCategory === "All Projects" && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {projects.filter(p => p.featured).map((project) => (
                    <Card key={project.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 bg-gradient-card">
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <div className="text-center">
                            <h4 className="text-2xl font-bold text-primary mb-2">{project.title}</h4>
                            <Badge className="bg-primary/20 text-primary border-primary/30">
                              {project.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 flex gap-2">
                          <Button size="icon" variant="secondary" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="secondary" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Github className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          View Project Details
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* All Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="group overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-primary mb-1">{project.title}</h4>
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 flex gap-1">
                      <Button size="icon" variant="secondary" className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                      <Button size="icon" variant="secondary" className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Github className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs px-2 py-1">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs px-2 py-1">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <Button size="sm" variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-8 rounded-2xl shadow-glow max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-lg text-white/90 mb-6">
              Let's discuss how we can bring your vision to life with our expertise and innovative solutions.
            </p>
            <Button size="lg" variant="secondary" className="px-8">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;