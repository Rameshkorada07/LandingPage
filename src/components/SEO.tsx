import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "JobSpring - AI Resume Builder & Job Search Platform",
  description = "Transform your job search with JobSpring's AI-powered tools. Get tailored resumes, interview coaching, automated job tracking, and land your dream job faster. Trusted by 100K+ job seekers.",
  keywords = "AI resume builder, job search platform, interview coach, automated job tracking, career development, job application, resume optimization, interview preparation, job seeker, career platform, AI job tools, professional development, job hunting, career advancement, employment assistance, job placement, resume writing, interview skills, job market, career coaching, ATS optimization, job application tracker, career advancement platform, dream job, job search engine, resume templates, cover letter builder, job alerts, career guidance, job board, employment opportunities, job finder, career coach, job search tips, resume scanner, applicant tracking system, job interview, career planning, job search strategy, professional resume, job matching, career services, job search assistance, online job search, job search tools, career development platform, job search website, employment platform, job portal, career advancement tools, job search optimization, professional networking, career growth, job search resources, employment solutions, job search automation",
  image = "https://jobspring.ai/images/jobspring-og-image.jpg",
  url = "https://jobspring.ai",
  type = "website",
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        "url": url,
        "name": "JobSpring",
        "description": "AI-Powered Job Search Platform",
        "publisher": {
          "@id": `${url}/#organization`
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${url}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        "name": "JobSpring",
        "url": url,
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": `${url}/#/schema/logo/image/`,
          "url": `${url}/logo.png`,
          "contentUrl": `${url}/logo.png`,
          "width": 512,
          "height": 512,
          "caption": "JobSpring"
        },
        "image": {
          "@id": `${url}/#/schema/logo/image/`
        },
        "sameAs": [
          "https://www.linkedin.com/company/jobspring",
          "https://twitter.com/jobspring",
          "https://www.facebook.com/jobspring",
          "https://www.instagram.com/jobspring"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "areaServed": "US",
          "availableLanguage": "en"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        "url": url,
        "name": title,
        "isPartOf": {
          "@id": `${url}/#website`
        },
        "about": {
          "@id": `${url}/#organization`
        },
        "description": description,
        "breadcrumb": {
          "@id": `${url}/#breadcrumb`
        },
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": [url]
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "JobSpring",
        "description": "AI-powered job search platform with resume builder and interview coach",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "10000",
          "bestRating": "5",
          "worstRating": "1"
        },
        "featureList": [
          "AI Resume Builder",
          "Interview Coach",
          "Job Tracking",
          "ATS Score Optimization",
          "Career Analytics"
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Career Services",
        "provider": {
          "@id": `${url}/#organization`
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "JobSpring Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Resume Builder",
                "description": "Generate tailored resumes with AI recommendations"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "AI Interview Coach",
                "description": "Practice interviews with AI-powered feedback"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Job Tracking",
                "description": "Automated job application tracking and management"
              }
            }
          ]
        }
      },
      {
        "@type": "JobPosting",
        "title": "Find Your Dream Job with JobSpring",
        "description": "Discover thousands of job opportunities with our AI-powered job search platform",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "JobSpring Platform"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          }
        },
        "employmentType": "FULL_TIME"
      }
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="JobSpring" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Enhanced search engine directives */}
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="slurp" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="JobSpring - AI-Powered Job Search Platform" />
      <meta property="og:site_name" content="JobSpring" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards - Fixed Implementation */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jobspring" />
      <meta name="twitter:creator" content="@jobspring" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="JobSpring - AI-Powered Job Search Platform" />
      
      {/* LinkedIn */}
      <meta property="linkedin:owner" content="jobspring" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="application-name" content="JobSpring" />
      <meta name="apple-mobile-web-app-title" content="JobSpring" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Enhanced search optimization */}
      <meta name="subject" content="Job Search Platform, AI Resume Builder, Career Development" />
      <meta name="topic" content="Employment, Career, Job Search, Resume Building, Interview Preparation" />
      <meta name="summary" content="AI-powered job search platform helping job seekers land their dream jobs faster" />
      <meta name="classification" content="Business, Career, Employment, Technology" />
      <meta name="designer" content="JobSpring Team" />
      <meta name="copyright" content="JobSpring" />
      <meta name="reply-to" content="support@jobspring.ai" />
      <meta name="owner" content="JobSpring" />
      <meta name="directory" content="submission" />
      <meta name="category" content="Job Search, Career Development, AI Tools" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.jobspring.ai" />
      
      {/* DNS prefetch for better performance */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional meta tags for better indexing */}
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 day" />
      <meta name="coverage" content="worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="320" />
      
      {/* Rich snippets hints */}
      <meta name="page-topic" content="Career Development, Job Search, AI Tools" />
      <meta name="page-type" content="Landing Page" />
      <meta name="audience" content="Job Seekers, Career Professionals, Students" />
      
      {/* Additional search engine optimization */}
      <meta name="allow-search" content="yes" />
      <meta name="expires" content="never" />
      <meta name="pragma" content="no-cache" />
      <meta name="cache-control" content="no-cache" />
    </Helmet>
  );
};

const SEOProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <HelmetProvider>
      {children}
    </HelmetProvider>
  );
};

export { SEO, SEOProvider }; 