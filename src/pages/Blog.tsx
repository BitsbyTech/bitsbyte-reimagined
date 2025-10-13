import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Cybersecurity in 2024: Emerging Threats and Solutions",
      excerpt: "Explore the evolving landscape of cybersecurity threats and how organizations can prepare for the challenges ahead. Learn about AI-powered security solutions and zero-trust architecture.",
      author: "Dennis Wambugu",
      date: "January 15, 2024",
      category: "Cybersecurity",
      readTime: "8 min read",
      image: "/api/placeholder/400/240"
    },
    {
      id: 2,
      title: "Cloud Migration Strategies: A Complete Guide for Enterprise Success",
      excerpt: "Discover proven strategies for successful cloud migration. From planning and assessment to execution and optimization, learn how to navigate your cloud transformation journey.",
      author: "Steve Njuguna",
      date: "December 20, 2023",
      category: "Cloud Computing",
      readTime: "12 min read",
      image: "/api/placeholder/400/240"
    },
    {
      id: 3,
      title: "Data Analytics Trends: Transforming Business Intelligence in 2024",
      excerpt: "Uncover the latest trends in data analytics and business intelligence. Learn how machine learning and AI are revolutionizing data-driven decision making.",
      author: "Steve Njuguna",
      date: "December 5, 2023",
      category: "Data Analytics",
      readTime: "10 min read",
      image: "/api/placeholder/400/240"
    },
    {
      id: 4,
      title: "Digital Transformation: Lessons Learned from Successful Implementations",
      excerpt: "Real-world insights from successful digital transformation projects. Understand the key success factors and common pitfalls to avoid in your transformation journey.",
      author: "Adeny Joakim",
      date: "November 28, 2023",
      category: "Digital Transformation",
      readTime: "15 min read",
      image: "/api/placeholder/400/240"
    },
    {
      id: 5,
      title: "The ROI of Software Development: Measuring Success in Tech Investments",
      excerpt: "Learn how to measure and maximize the return on investment for your software development projects. Key metrics and best practices for technology leaders.",
      author: "Samuel King'ori",
      date: "November 10, 2023",
      category: "Software Development",
      readTime: "9 min read",
      image: "/api/placeholder/400/240"
    },
    {
      id: 6,
      title: "Building Resilient IT Infrastructure: Best Practices for Modern Enterprises",
      excerpt: "Essential strategies for building robust and resilient IT infrastructure. From redundancy planning to disaster recovery, ensure your systems can handle any challenge.",
      author: "Moses Wanjohi",
      date: "October 25, 2023",
      category: "IT Infrastructure",
      readTime: "11 min read",
      image: "/api/placeholder/400/240"
    }
  ];

  const categories = ["All", "Cybersecurity", "Cloud Computing", "Data Analytics", "Digital Transformation", "Software Development", "IT Infrastructure"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                Tech Insights & Expertise
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                BitsbyTech Blog
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Stay informed with the latest insights, trends, and best practices in technology. 
                Our experts share their knowledge to help you navigate the digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card overflow-hidden">
                  <div className="aspect-video bg-muted/30 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="text-4xl mb-2">📝</div>
                      <p>Blog Image</p>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {post.date}
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="w-full group hover:bg-primary hover:text-primary-foreground transition-colors" onClick={() => window.open('https://www.linkedin.com/company/bitsbytech-limited/', '_blank')}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-primary p-12 rounded-2xl text-center text-white shadow-glow max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated with Tech Insights
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Subscribe to our newsletter and get the latest technology insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 bg-white/95 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button size="lg" variant="secondary" className="px-8 whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Topics */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Topics</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our most popular technology topics and insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { topic: "AI & Machine Learning", count: "12 Articles" },
                { topic: "Cloud Security", count: "8 Articles" },
                { topic: "DevOps", count: "15 Articles" },
                { topic: "Data Privacy", count: "6 Articles" }
              ].map((topic) => (
                <Card key={topic.topic} className="text-center hover:shadow-card transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{topic.topic}</h3>
                    <p className="text-sm text-muted-foreground">{topic.count}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-card p-12 rounded-2xl text-center shadow-elegant">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Have a Topic Suggestion?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We'd love to hear what technology topics you'd like us to cover. 
                Reach out with your suggestions or questions.
              </p>
              <Button size="lg" className="bg-gradient-primary" onClick={() => window.location.href = '/contact'}>
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;