import React from 'react';
import { Helmet } from 'react-helmet';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Instagram, Facebook, ExternalLink } from 'lucide-react';

const Footer = () => {
  const businessInfo = {
    name: "EarlyJobs Mohali",
    phone: "+91-98765-43210",
    email: "mohali@earlyjobs.in",
    address: {
      street: "Sector 80",
      city: "Mohali",
      state: "Punjab",
      country: "India"
    },
    social: {
      facebook: "https://www.facebook.com/earlyjobsmohali",
      instagram: "https://www.instagram.com/earlyjobsmohali",
      linkedin: "https://www.linkedin.com/company/earlyjobs-mohali"
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact EarlyJobs Mohali - Your Local Career Growth Partner | Punjab</title>
        <meta 
          name="description" 
          content="Connect with EarlyJobs Mohali - Your trusted placement and career development partner. Located in Sector 80, serving Mohali, Chandigarh, and Panchkula regions with expert recruitment solutions."
        />
        <meta 
          name="keywords" 
          content="EarlyJobs Mohali, job placement Mohali, career counseling Punjab, recruitment agency tricity, IT jobs Mohali, placement services Punjab, career guidance Mohali, job consultancy Chandigarh, hiring solutions Punjab, campus placement partner"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="EarlyJobs Mohali - Premier Career Development Center" />
        <meta property="og:description" content="Your local partner for career growth and professional development in Mohali and Tricity area. Expert placement services, career guidance, and recruitment solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://earlyjobs.in/mohali" />
        <meta property="og:image" content="https://earlyjobs.in/mohali/office-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="EarlyJobs Mohali" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@EarlyJobsMohali" />
        <meta name="twitter:title" content="EarlyJobs Mohali - Career Development Center" />
        <meta name="twitter:description" content="Premier placement and career development services in Mohali and Tricity area." />
        <meta name="twitter:image" content="https://earlyjobs.in/mohali/twitter-card.jpg" />

        {/* Additional SEO Tags */}
        <link rel="canonical" href="https://earlyjobs.in/mohali" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="EarlyJobs Mohali" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="geo.region" content="IN-PB" />
        <meta name="geo.placename" content="Mohali" />
        <meta name="geo.position" content="30.704649;76.717873" />
        <meta name="ICBM" content="30.704649, 76.717873" />

        {/* Organization Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://earlyjobs.in/mohali",
            "name": businessInfo.name,
            "image": "https://earlyjobs.in/mohali/office-image.jpg",
            "url": "https://earlyjobs.in/mohali",
            "telephone": businessInfo.phone,
            "email": businessInfo.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": businessInfo.address.street,
              "addressLocality": businessInfo.address.city,
              "addressRegion": businessInfo.address.state,
              "addressCountry": businessInfo.address.country,
              "postalCode": "160080"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.704649",
              "longitude": "76.717873"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              businessInfo.social.facebook,
              businessInfo.social.instagram,
              businessInfo.social.linkedin
            ]
          })}
        </script>
      </Helmet>

      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">EarlyJobs</h3>
                  <p className="text-gray-400 text-sm">Mohali</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted local partner for hiring and career growth in Mohali and the Tricity area.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/earlyjobsmohali" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/earlyjobsmohali" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Google Business Listing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">EarlyJobs Social Media</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Use</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="font-medium">Franchise Owner</p>
                    <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors duration-300">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:mohali@earlyjobs.in" className="text-gray-400 hover:text-white transition-colors duration-300">
                      mohali@earlyjobs.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <p className="font-medium">Office Address</p>
                    <p className="text-gray-400">
                      Sector 80, Mohali<br />
                      Punjab, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps / Directions */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Find Us</h4>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Google Maps</p>
                    <p className="text-gray-500 text-xs">Interactive map coming soon</p>
                  </div>
                </div>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <span className="text-sm">Get Directions</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 EarlyJobs Mohali. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Additional Badge */}
          <div className="mt-8 text-center">
            <Badge className="bg-blue-900 text-blue-200 hover:bg-blue-900">
              <MapPin className="w-4 h-4 mr-2" />
              Proudly Serving Mohali & Tricity Area
            </Badge>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
