
export const companyStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AHI-Energie",
  "alternateName": "AHI Energie KG",
  "url": "https://ahi-energie.de",
  "logo": "/lovable-uploads/treffer-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "info@ahi-energie.de",
    "availableLanguage": "German"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Louis-Krages-Str. 32",
    "addressLocality": "Bremen",
    "postalCode": "28237",
    "addressCountry": "DE"
  },
  "foundingDate": "2002",
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
  "name": "AHI-Energie",
  "image": "/lovable-uploads/treffer-logo.png",
  "@id": "https://ahi-energie.de",
  "url": "https://ahi-energie.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Louis-Krages-Str. 32",
    "addressLocality": "Bremen",
    "postalCode": "28237",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.0793,
    "longitude": 8.8017
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
