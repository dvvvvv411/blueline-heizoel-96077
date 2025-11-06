
export const companyStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Treffer Heizöl",
  "alternateName": "Treffer GmbH",
  "url": "https://treffer-heizoel.de",
  "logo": "/lovable-uploads/treffer-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-221-29291090",
    "contactType": "customer service",
    "email": "info@treffer-heizoel.de",
    "availableLanguage": "German"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Anton-Jaumann-Str. 1",
    "addressLocality": "Buchdorf",
    "postalCode": "86675",
    "addressCountry": "DE"
  },
  "foundingDate": "1975",
  "numberOfEmployees": "10-50",
  "description": "Premium Heizöl ab 70 Cent pro Liter mit kostenloser Lieferung ab 2.000L deutschlandweit.",
  "areaServed": {
    "@type": "Country",
    "name": "Germany"
  },
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": "Heizöl",
      "description": "Premium Heizöl für Privat- und Geschäftskunden"
    },
    "price": "0.70",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  }
};

export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Treffer Heizöl",
  "image": "/lovable-uploads/treffer-logo.png",
  "@id": "https://treffer-heizoel.de",
  "url": "https://treffer-heizoel.de",
  "telephone": "+49-221-29291090",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Anton-Jaumann-Str. 1",
    "addressLocality": "Buchdorf",
    "postalCode": "86675",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.6734,
    "longitude": 10.8652
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "17:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "100000"
  }
};
