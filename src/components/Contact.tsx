import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const openEmailClient = (isQuote: boolean = false) => {
    const { name, email, subject, message } = formData;
    
    // Validate required fields
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    const emailSubject = isQuote 
      ? `Quote Request from ${name}` 
      : subject.trim() || `Inquiry from ${name}`;
    
    const emailBody = `Name: ${name}
Email: ${email}

Message:
${message}

---
Sent via BitsbyTech Contact Form`;

    const mailtoLink = `mailto:info@bitsbytech.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Email App Opened!",
      description: "Your message has been prepared. Please click send in your email app.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openEmailClient(false);
  };

  const handleRequestQuote = () => {
    openEmailClient(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: ["BitsbyTech Labs", "Nairobi, Kenya"],
      color: "text-red-500",
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+254 793-656-644", "Available 24/7"],
      color: "text-green-500",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@bitsbytech.com", "Quick response guaranteed"],
      color: "text-blue-500",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Weekend support available"],
      color: "text-purple-500",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Start a 
            <span className="block text-primary">Conversation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology solutions? 
            Get in touch with our team of experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  We're here to help you succeed. Reach out to us through any of the following channels.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card key={info.title} className="border-border/50 hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg bg-muted/20 flex items-center justify-center flex-shrink-0`}>
                        <info.icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className={`text-sm ${idx === 0 ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Actions */}
              <div className="bg-gradient-primary p-6 rounded-xl shadow-glow">
                <h4 className="text-xl font-bold text-white mb-4">Need Immediate Assistance?</h4>
                <p className="text-white/90 mb-4 text-sm">
                  For urgent inquiries or technical support, call us directly.
                </p>
                <Button variant="secondary" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: +254 793-656-644
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MessageSquare className="mr-3 h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium mb-2 block">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      required
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="flex-1 bg-gradient-primary hover:bg-primary/90 h-12"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg" 
                      className="flex-1 h-12"
                      onClick={handleRequestQuote}
                    >
                      Request Quote
                    </Button>
                  </div>
                </form>

                <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. 
                    We'll respond within 24 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map/Additional Info Section */}
        <div className="mt-16">
          <Card className="border-border/50">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Visit Our Office</h3>
                  <p className="text-muted-foreground mb-6">
                    Located in the heart of Nairobi, our office is equipped with the latest technology 
                    and staffed by our expert team. Schedule a visit to discuss your project in person.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 text-primary mr-3" />
                      <span>BitsbyTech Labs, Nairobi, Kenya</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 text-primary mr-3" />
                      <span>Monday - Friday: 8:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                  <Button className="mt-6" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Schedule a Visit
                  </Button>
                </div>
                <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;