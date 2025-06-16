import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const seoData = {
    title: "Page Not Found - EarlyJobs Mohali | 404 Error",
    description:
      "The page you're looking for doesn't exist. Return to EarlyJobs Mohali's homepage for job placements, career guidance, and recruitment services.",
    keywords: [
      "404 error",
      "page not found",
      "EarlyJobs Mohali",
      "career services",
      "job placement agency",
      "recruitment services Punjab",
    ].join(", "),
  };

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

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
        <meta
          property="og:url"
          content={`https://earlyjobs.in${location.pathname}`}
        />
        <meta property="og:site_name" content="EarlyJobs Mohali" />

        {/* Technical SEO */}
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://earlyjobs.in" />

        {/* Error Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://earlyjobs.in",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "404 Not Found",
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-md mx-auto px-4 py-8">
          <div className="text-center space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900">404</h1>
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Page Not Found
              </h2>
              <p className="text-gray-600">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Homepage
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
