import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Component for managing page meta tags
 * @param {string} title - Page title
 * @param {string} description - Meta description for SEO
 * @param {string} keywords - Meta keywords for SEO
 * @param {string} url - Canonical URL of the page
 * @param {string} image - OG image URL (optional)
 */
const SEO = ({ 
  title = "Optimal Classes - Best Coaching Institute in Varanasi", 
  description = "Optimal Classes – Top-rated coaching in Varanasi for CBSE, ICSE, ISC, IIT-JEE & NEET. Best PCM, PCB & Board exam coaching near BLW, Kakarmatta, Lanka & Sunderpur.",
  keywords = "coaching institute varanasi, best coaching in varanasi, CBSE coaching, ICSE coaching, IIT JEE coaching, NEET coaching",
  url = "https://optimalclasses.in/",
  image = "https://optimalclasses.in/images/companylogo.png"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Optimal Classes" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Optimal Classes" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Varanasi" />
      <meta name="geo.position" content="25.3176;82.9739" />
      <meta name="ICBM" content="25.3176, 82.9739" />
    </Helmet>
  );
};

export default SEO;

