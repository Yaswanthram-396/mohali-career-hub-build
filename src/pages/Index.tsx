
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, Laptop, MapPin, Phone, Mail, Calendar, ArrowRight, CheckCircle, Star, Building2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    role: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted Successfully!",
      description: "We'll contact you within 24 hours.",
    });
    setFormData({ name: "", email: "", mobile: "", role: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-orange-soft"></div>
        <div className="relative container mx-auto max-w-7xl px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                  <MapPin className="w-3 h-3 mr-1" />
                  Mohali's Trusted Recruitment Partner
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  EarlyJobs 
                  <span className="text-gradient block">Mohali</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Your Local Partner in Hiring and Career Growth
                </p>
                <p className="text-lg text-muted-foreground max-w-xl">
                  Connecting Mohali's job-ready talent with the region's fastest-growing industries and employers across IT, biotech, and manufacturing sectors.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                  Start with EarlyJobs Mohali
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/5">
                  Learn More
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold">500+ Students Placed</p>
                    <p className="text-sm text-muted-foreground">This Year</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Mohali business hub and professionals working"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold">4.8/5</span>
                </div>
                <p className="text-sm">Trusted by 100+ Companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="border-primary text-primary">About EarlyJobs Mohali</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              AI-Powered, <span className="text-gradient">Human-Backed</span> Recruitment
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              EarlyJobs is an innovative recruitment platform that supports the industrial and educational strengths of Mohali, including IT, biotech, and manufacturing sectors. Our local franchise provides personalized support and deep understanding of the regional job market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "Local Expertise", desc: "Deep understanding of Mohali's business ecosystem" },
              { icon: Users, title: "Community Focus", desc: "Supporting local talent and businesses" },
              { icon: CheckCircle, title: "Proven Results", desc: "500+ successful placements this year" }
            ].map((item, i) => (
              <Card key={i} className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-b from-background to-muted/20">
                <item.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Benefits for <span className="text-gradient">Everyone</span>
            </h2>
            <p className="text-xl text-muted-foreground">Tailored solutions for students, colleges, and employers</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Students */}
            <Card className="overflow-hidden border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-center py-8">
                <Users className="w-16 h-16 mx-auto mb-4" />
                <CardTitle className="text-2xl">For Students</CardTitle>
                <CardDescription className="text-primary-foreground/80">Launch your career in Mohali</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Apply for verified internships and job roles in Mohali",
                    "Resume review and career guidance",
                    "Weekly job alerts and walk-in interview updates",
                    "Free skill development workshops"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Colleges */}
            <Card className="overflow-hidden border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground text-center py-8">
                <Laptop className="w-16 h-16 mx-auto mb-4" />
                <CardTitle className="text-2xl">For Colleges</CardTitle>
                <CardDescription className="text-secondary-foreground/80">Enhance placement outcomes</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Drive campus hiring through EarlyJobs platform",
                    "Track student placements and progress",
                    "Partner on local skill-development initiatives",
                    "Access to employer network"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Employers */}
            <Card className="overflow-hidden border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-br from-primary/80 to-secondary text-primary-foreground text-center py-8">
                <Briefcase className="w-16 h-16 mx-auto mb-4" />
                <CardTitle className="text-2xl">For Employers</CardTitle>
                <CardDescription className="text-primary-foreground/80">Find the right talent fast</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Hire locally for roles in IT, logistics, biotech, sales",
                    "Screened candidate pool from across Mohali",
                    "Fast turnaround and zero subscription cost",
                    "Dedicated account management"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground">Simple, fast, and effective</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "1", title: "Register", desc: "Register on the EarlyJobs Mohali portal with your details", color: "bg-primary" },
              { num: "2", title: "Upload", desc: "Upload your job requirements or resume to our platform", color: "bg-secondary" },
              { num: "3", title: "Get Matched", desc: "Get matched, interviewed, and placed through our AI-powered platform", color: "gradient-orange" }
            ].map((step, i) => (
              <div key={i} className="text-center space-y-6 relative">
                <div className={`w-20 h-20 ${step.color} text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto shadow-lg`}>
                  {step.num}
                </div>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{step.desc}</p>
                {i < 2 && (
                  <ArrowRight className="hidden md:block absolute top-10 -right-4 w-8 h-8 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl mb-4">
                Connect with <span className="text-gradient">EarlyJobs Mohali</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Ready to start your journey? Fill out the form below and we'll get in touch with you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="h-12 text-lg"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="h-12 text-lg"
                />
                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  required
                  className="h-12 text-lg"
                />
                <Select onValueChange={(value) => setFormData({...formData, role: value})}>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="Choose Your Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="college">College Representative</SelectItem>
                    <SelectItem value="employer">Employer</SelectItem>
                  </SelectContent>
                </Select>
                <Input value="Mohali" disabled className="bg-muted h-12 text-lg" />
                <Button type="submit" className="w-full h-12 text-lg bg-primary hover:bg-primary/90 shadow-lg">
                  Connect with EarlyJobs Mohali
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What <span className="text-gradient">Mohali Says</span> About Us
            </h2>
            <p className="text-xl text-muted-foreground">Real stories from our community</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "I got my first internship through EarlyJobs Mohali. The team really understood the local market and connected me with the perfect company.",
                name: "Arjun Sharma",
                role: "Engineering Student, Mohali",
                avatar: "A"
              },
              {
                quote: "EarlyJobs Mohali has been instrumental in our campus hiring. Their local presence makes all the difference.",
                name: "Dr. Priya Gupta",
                role: "Placement Head, Local College",
                avatar: "P"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="p-8 shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="space-y-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Upcoming <span className="text-gradient">Events & Updates</span>
            </h2>
            <p className="text-xl text-muted-foreground">Stay connected with the latest opportunities</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { badge: "Job Drive", title: "Mohali IT Job Fair 2024", desc: "Join us for the biggest IT job fair in Mohali with 50+ companies hiring.", status: "Coming Soon", icon: Briefcase },
              { badge: "Partnership", title: "College Tie-up Program", desc: "Expanding our network with local engineering and management colleges.", status: "Ongoing", icon: Building2 },
              { badge: "Skill Session", title: "Resume Building Workshop", desc: "Free workshop on creating industry-ready resumes for freshers.", status: "Every Saturday", icon: Calendar }
            ].map((event, i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-primary/10 text-primary border-primary/20">{event.badge}</Badge>
                    <event.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl leading-tight">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{event.desc}</p>
                  <Badge variant="outline" className="border-primary text-primary">{event.status}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">Everything you need to know</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "Is EarlyJobs Mohali open for walk-ins?",
                a: "Yes, we welcome walk-ins during business hours. Our office is located in the heart of Mohali's business district for easy accessibility."
              },
              {
                q: "Which sectors are covered here?",
                a: "We cover IT, biotechnology, manufacturing, logistics, sales, and various other sectors that are prominent in the Mohali region."
              },
              {
                q: "Can I register if I'm from Chandigarh or Panchkula?",
                a: "Absolutely! We serve the entire Tricity area including Chandigarh, Mohali, and Panchkula. Our network covers opportunities across the region."
              }
            ].map((faq, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-left">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">EarlyJobs Mohali</h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Your trusted local partner for hiring and career growth in Mohali and the Tricity area.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Contact Details</h4>
              <div className="space-y-4 text-secondary-foreground/80">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91-XXXXX-XXXXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>mohali@earlyjobs.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>[Mohali Business Address]</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Quick Links</h4>
              <div className="space-y-3 text-secondary-foreground/80">
                <p className="hover:text-primary cursor-pointer transition-colors">Google Business Listing</p>
                <p className="hover:text-primary cursor-pointer transition-colors">EarlyJobs Social Media</p>
                <p className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</p>
                <p className="hover:text-primary cursor-pointer transition-colors">Terms of Use</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-12 bg-secondary-foreground/20" />
          
          <div className="text-center text-secondary-foreground/60">
            <p>&copy; 2024 EarlyJobs Mohali. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
