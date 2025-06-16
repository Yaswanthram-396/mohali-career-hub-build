import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Users } from 'lucide-react';
import { Helmet } from 'react-helmet';

const HeroSection = () => {
  const seoData = {
    title: "EarlyJobs Mohali - Premier Recruitment & Career Development Partner",
    description: "Connect with Mohali's leading placement agency for IT, biotech, and manufacturing sectors. 500+ successful placements, personalized career guidance, and direct industry connections.",
    keywords: [
      "Mohali jobs",
      "IT placement agency Mohali",
      "career development Punjab",
      "recruitment services Mohali",
      "biotech jobs Punjab",
      "manufacturing jobs Mohali",
      "fresher jobs Mohali",
      "placement agency tricity",
      "job consultancy Mohali",
      "career guidance Punjab"
    ].join(", ")
  };

  const scrollToLeadForm = () => {
    document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />

        {/* OpenGraph Tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://earlyjobs.in/mohali/hero-image.jpg" />
        <meta property="og:url" content="https://earlyjobs.in/mohali" />
        <meta property="og:site_name" content="EarlyJobs Mohali" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content="https://earlyjobs.in/mohali/twitter-card.jpg" />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmploymentAgency",
            "name": "EarlyJobs Mohali",
            "description": seoData.description,
            "url": "https://earlyjobs.in/mohali",
            "logo": "https://earlyjobs.in/mohali/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sector 80",
              "addressLocality": "Mohali",
              "addressRegion": "Punjab",
              "postalCode": "160080",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.704649",
              "longitude": "76.717873"
            },
            "areaServed": {
              "@type": "City",
              "name": "Mohali"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "500"
            }
          })}
        </script>
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative container mx-auto max-w-7xl px-4 py-12 md:py-16 lg:pb-24 lg:pt:16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200 transition-colors inline-flex">
                  <MapPin className="w-3 h-3 mr-1" />
                  Mohali's Trusted Recruitment Partner
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  EarlyJobs 
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent block mt-2">
                    Mohali
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  Your Local Partner in Hiring and Career Growth
                </p>
                <p className="text-base md:text-lg text-gray-200 max-w-xl mx-auto lg:mx-0">
                  Connecting Mohali's job-ready talent with the region's fastest-growing industries and employers across IT, biotech, and manufacturing sectors.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  onClick={scrollToLeadForm}
                  className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-white text-orange-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  Start with EarlyJobs Mohali
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </div>

              <div className="flex items-center gap-4 md:gap-8 pt-4 md:pt-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map((i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-100 border-2 border-orange-600 flex items-center justify-center"
                      >
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-orange-600" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm md:text-base">
                      500+ Students Placed
                    </p>
                    <p className="text-xs md:text-sm text-gray-200">This Year</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0 hidden lg:block">
              <div className="absolute -inset-4 bg-orange-600/20 blur-2xl rounded-full"></div>
              <img 
                src="https://i.ibb.co/N2xbPqKn/Resume-folder-pana.png" 
                alt="Mohali professionals"
                className="relative rounded-3xl shadow-2xl w-full max-w-xl mx-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;