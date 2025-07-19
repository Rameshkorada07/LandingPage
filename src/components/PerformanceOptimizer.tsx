import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/logo.png',
        '/favicon.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Lazy load non-critical images
    const setupIntersectionObserver = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
          const imgElement = img as HTMLImageElement;
          imgElement.src = imgElement.dataset.src || '';
        });
      }
    };

    // Optimize font loading
    const optimizeFontLoading = () => {
      // Add font-display: swap to improve CLS
      const style = document.createElement('style');
      style.innerHTML = `
        @font-face {
          font-family: 'Inter';
          font-display: swap;
        }
      `;
      document.head.appendChild(style);
    };

    // Setup performance monitoring
    const setupPerformanceMonitoring = () => {
      // Monitor Core Web Vitals
      if ('web-vital' in window) {
        import('web-vitals').then(({ getLCP, getFID, getCLS, getTTFB, getFCP }) => {
          getLCP(console.log);
          getFID(console.log);
          getCLS(console.log);
          getTTFB(console.log);
          getFCP(console.log);
        }).catch(() => {
          // Silently fail if web-vitals is not available
        });
      }
    };

    // Prefetch important pages
    const prefetchImportantPages = () => {
      const importantPaths = [
        '/resume-builder',
        '/interview-coach',
        '/job-tracker'
      ];

      importantPaths.forEach(path => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = path;
        document.head.appendChild(link);
      });
    };

    // Critical resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com',
        'https://api.jobspring.ai'
      ];

      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    setupIntersectionObserver();
    optimizeFontLoading();
    setupPerformanceMonitoring();
    prefetchImportantPages();
    addResourceHints();

    // Service Worker registration for caching
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

  }, []);

  return null; // This component doesn't render anything visible
};

export default PerformanceOptimizer; 