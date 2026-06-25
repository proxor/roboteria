// Google Consent Mode v2 & Analytics Consent Management
(function() {
  const CONSENT_KEY = 'roboteria-analytics-consent';
  const BANNER_ID = 'consent-banner';

  // Initialize Google Consent Mode (default: analytics denied for EWR compliance)
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('consent', 'default', {
    'analytics_storage': 'denied'
  });

  // Check for existing consent preference
  function getConsent() {
    const stored = localStorage.getItem(CONSENT_KEY);
    return stored ? JSON.parse(stored) : null;
  }

  // Save consent preference
  function setConsent(allowed) {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ allowed, timestamp: Date.now() }));
    gtag('consent', 'update', {
      'analytics_storage': allowed ? 'granted' : 'denied'
    });
    hideBanner();
  }

  // Show consent banner
  function showBanner() {
    const banner = document.getElementById(BANNER_ID);
    if (banner) banner.style.display = 'block';
  }

  // Hide consent banner
  function hideBanner() {
    const banner = document.getElementById(BANNER_ID);
    if (banner) banner.style.display = 'none';
  }

  // Initialize on DOM ready
  function init() {
    const consent = getConsent();
    if (!consent) {
      showBanner();
    } else if (consent.allowed) {
      // Reload Google Analytics script if consent was previously given
      loadAnalytics();
    }
  }

  // Load Google Analytics script
  function loadAnalytics() {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-1JX6H2Y4NQ';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-1JX6H2Y4NQ');
  }

  // Set up event listeners
  document.addEventListener('DOMContentLoaded', function() {
    init();

    const acceptBtns = document.querySelectorAll('.consent-accept');
    const rejectBtns = document.querySelectorAll('.consent-reject');

    acceptBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        setConsent(true);
        loadAnalytics();
      });
    });

    rejectBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        setConsent(false);
      });
    });
  });

  // Expose to global scope if needed
  window.roboteriaConsent = {
    getConsent: getConsent,
    setConsent: setConsent,
    showBanner: showBanner,
    hideBanner: hideBanner
  };
})();
