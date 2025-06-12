
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, Laptop } from "lucide-react";
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
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="w-fit">Mohali's Trusted Recruitment Partner</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                EarlyJobs Mohali – Your Local Partner in 
                <span className="text-primary"> Hiring and Career Growth</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Connecting Mohali's job-ready talent with the region's fastest-growing industries and employers across IT, biotech, and manufacturing sectors.
              </p>
              <Button size="lg" className="text-lg px-8 py-6">
                Start with EarlyJobs Mohali
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Mohali business hub and professionals working"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About EarlyJobs Mohali */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">About EarlyJobs Mohali</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              EarlyJobs is an AI-enabled, human-backed recruitment platform that supports the industrial and educational strengths of Mohali, including IT, biotech, and manufacturing sectors. Our local franchise provides personalized support and deep understanding of the regional job market.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Benefits for Everyone</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Students */}
            <Card className="h-full">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">For Students</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Apply for verified internships and job roles in Mohali
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Resume review and career guidance
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Weekly job alerts and walk-in interview updates
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Colleges */}
            <Card className="h-full">
              <CardHeader className="text-center">
                <Laptop className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">For Colleges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Drive campus hiring through EarlyJobs platform
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Track student placements and progress
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Partner on local skill-development initiatives
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Employers */}
            <Card className="h-full">
              <CardHeader className="text-center">
                <Briefcase className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">For Employers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Hire locally for roles in IT, logistics, biotech, sales
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Screened candidate pool from across Mohali and nearby areas
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Fast turnaround and zero subscription cost
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">1</div>
              <h3 className="text-xl font-semibold">Register</h3>
              <p className="text-muted-foreground">Register on the EarlyJobs Mohali portal with your details</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">2</div>
              <h3 className="text-xl font-semibold">Upload</h3>
              <p className="text-muted-foreground">Upload your job requirements or resume to our platform</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">3</div>
              <h3 className="text-xl font-semibold">Get Matched</h3>
              <p className="text-muted-foreground">Get matched, interviewed, and placed through our AI-powered platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">What Mohali Says About Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 italic">
                  "I got my first internship through EarlyJobs Mohali. The team really understood the local market and connected me with the perfect company."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold">Arjun Sharma</p>
                    <p className="text-sm text-muted-foreground">Engineering Student, Mohali</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 italic">
                  "EarlyJobs Mohali has been instrumental in our campus hiring. Their local presence makes all the difference."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    P
                  </div>
                  <div>
                    <p className="font-semibold">Dr. Priya Gupta</p>
                    <p className="text-sm text-muted-foreground">Placement Head, Local College</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Connect with EarlyJobs Mohali</CardTitle>
              <CardDescription>
                Ready to start your journey? Fill out the form below and we'll get in touch with you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  required
                />
                <Select onValueChange={(value) => setFormData({...formData, role: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose Your Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="college">College Representative</SelectItem>
                    <SelectItem value="employer">Employer</SelectItem>
                  </SelectContent>
                </Select>
                <Input value="Mohali" disabled className="bg-secondary" />
                <Button type="submit" className="w-full">
                  Connect with EarlyJobs Mohali
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Upcoming Events & Updates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Badge className="w-fit">Job Drive</Badge>
                <CardTitle className="text-lg">Mohali IT Job Fair 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Join us for the biggest IT job fair in Mohali with 50+ companies hiring.</p>
                <p className="text-sm text-primary mt-2">Coming Soon</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge className="w-fit">Partnership</Badge>
                <CardTitle className="text-lg">College Tie-up Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Expanding our network with local engineering and management colleges.</p>
                <p className="text-sm text-primary mt-2">Ongoing</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge className="w-fit">Skill Session</Badge>
                <CardTitle className="text-lg">Resume Building Workshop</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Free workshop on creating industry-ready resumes for freshers.</p>
                <p className="text-sm text-primary mt-2">Every Saturday</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is EarlyJobs Mohali open for walk-ins?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Yes, we welcome walk-ins during business hours. Our office is located in the heart of Mohali's business district for easy accessibility.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Which sectors are covered here?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We cover IT, biotechnology, manufacturing, logistics, sales, and various other sectors that are prominent in the Mohali region.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I register if I'm from Chandigarh or Panchkula?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Absolutely! We serve the entire Tricity area including Chandigarh, Mohali, and Panchkula. Our network covers opportunities across the region.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EarlyJobs Mohali</h3>
              <p className="mb-4">Your trusted local partner for hiring and career growth in Mohali and the Tricity area.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Details</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Franchise Owner: [Name]</p>
                <p>Phone: +91-XXXXX-XXXXX</p>
                <p>Email: mohali@earlyjobs.in</p>
                <p>Address: [Mohali Business Address]</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Google Business Listing</p>
                <p>EarlyJobs Social Media</p>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-primary-foreground/20" />
          <div className="text-center text-primary-foreground/60">
            <p>&copy; 2024 EarlyJobs Mohali. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
