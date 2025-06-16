import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, Laptop, MapPin, Phone, Mail, Calendar, ArrowRight, CheckCircle, Star, Building2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import FAQSection from "@/components/faq";
import Footer from "@/components/footer"; 
import HeroSection from "@/components/hero";
import { Helmet } from 'react-helmet';

const Index = () => {
  const seoData = {
    title: "EarlyJobs Mohali - Leading Job Placement & Career Development Center",
    description: "Premier recruitment agency in Mohali offering IT, biotech & manufacturing job placements. Get personalized career guidance, skill development & direct industry connections. 500+ successful placements.",
    keywords: [
      "job placement Mohali",
      "IT jobs Mohali",
      "biotech jobs Punjab",
      "manufacturing jobs Mohali",
      "career guidance Mohali",
      "recruitment agency Punjab",
      "placement services tricity",
      "fresher jobs Mohali",
      "skill development Punjab",
      "campus placement partner",
      "job consultancy Mohali",
      "IT recruitment Mohali",
      "career development center",
      "employment agency Punjab",
      "industrial jobs Mohali"
    ].join(", "),
    url: "https://earlyjobs.in/mohali",
    imageUrl: "https://earlyjobs.in/mohali/og-image.jpg"
  };

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
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        
        {/* Essential Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="EarlyJobs Mohali" />
        <link rel="canonical" href={seoData.url} />

        {/* OpenGraph Tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:image" content={seoData.imageUrl} />
        <meta property="og:site_name" content="EarlyJobs Mohali" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.imageUrl} />

        {/* Geo Tags */}
        <meta name="geo.region" content="IN-PB" />
        <meta name="geo.placename" content="Mohali" />
        <meta name="geo.position" content="30.704649;76.717873" />
        <meta name="ICBM" content="30.704649, 76.717873" />

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "EarlyJobs Mohali",
            "url": seoData.url,
            "logo": "https://earlyjobs.in/mohali/logo.png",
            "description": seoData.description,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sector 80",
              "addressLocality": "Mohali",
              "addressRegion": "Punjab",
              "postalCode": "160080",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["en", "hi", "pa"]
            },
            "sameAs": [
              "https://facebook.com/earlyjobsmohali",
              "https://instagram.com/earlyjobsmohali",
              "https://linkedin.com/company/earlyjobs-mohali"
            ]
          })}
        </script>

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmploymentAgency",
            "name": "EarlyJobs Mohali",
            "serviceType": ["Job Placement", "Career Guidance", "Skill Development"],
            "areaServed": {
              "@type": "City",
              "name": "Mohali"
            },
            "provider": {
              "@type": "Organization",
              "name": "EarlyJobs Mohali"
            },
            "audience": {
              "@type": "Audience",
              "audienceType": ["Job Seekers", "Students", "Employers"]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
              <Badge variant="outline" className="border-primary text-primary">About EarlyJobs Mohali</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                AI-Powered, <span className="text-gradient">Human-Backed</span> Recruitment
              </h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                EarlyJobs is an innovative recruitment platform that supports the industrial and educational strengths of Mohali, including IT, biotech, and manufacturing sectors. Our local franchise provides personalized support and deep understanding of the regional job market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
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
        <section className="py-12 md:py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Benefits for <span className="text-gradient">Everyone</span>
              </h2>
              <p className="text-base md:text-xl text-muted-foreground">Tailored solutions for students, colleges, and employers</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                How It <span className="text-gradient">Works</span>
              </h2>
              <p className="text-base md:text-xl text-muted-foreground">Simple, fast, and effective</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "Register", desc: "Register on the EarlyJobs Mohali portal with your details", color: "bg-primary" },
                { num: "2", title: "Upload", desc: "Upload your job requirements or resume to our platform", color: "bg-secondary" },
                { num: "3", title: "Get Matched", desc: "Get matched, interviewed, and placed through our AI-powered platform", color: "gradient-orange" }
              ].map((step, i) => (
                <div key={i} className="text-center space-y-4 md:space-y-6 relative">
                  <div className={`w-16 h-16 md:w-20 md:h-20 ${step.color} text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold mx-auto shadow-lg`}>
                    {step.num}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">{step.title}</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{step.desc}</p>
                  {i < 2 && (
                    <ArrowRight className="hidden md:block absolute top-10 -right-4 w-6 h-6 md:w-8 md:h-8 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <section id = "lead-capture" className="py-12 md:py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-2xl">
            <Card className="shadow-2xl border-0">
              <CardHeader className="text-center pb-6 md:pb-8">
                <CardTitle className="text-2xl md:text-3xl mb-3 md:mb-4">
                  Connect with <span className="text-gradient">EarlyJobs Mohali</span>
                </CardTitle>
                <CardDescription className="text-base md:text-lg">
                  Ready to start your journey? Fill out the form below and we'll get in touch with you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
                  <Button type="submit" className="w-full h-12 text-base md:text-lg bg-primary hover:bg-primary/90 shadow-lg">
                    <span className="truncate">EarlyJobs Mohali</span>
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        {/* <section className="py-20 px-4">
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
        </section> */}

        {/* Events Section */}
        <section className="py-12 md:py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Upcoming <span className="text-gradient">Events & Updates</span>
              </h2>
              <p className="text-base md:text-xl text-muted-foreground">Stay connected with the latest opportunities</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
      < FAQSection/>



        {/* Footer */}
       < Footer />
      </div>
    </>
  );
};

export default Index;
