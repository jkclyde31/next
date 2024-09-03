// siteConfigContext.js
'use client'

import React, { createContext, useContext } from 'react';

const SiteConfigContext = createContext();

export const siteConfig = {
  // General info
  companyName: "Arizona Interior Construction",
  phone: "602-509-1242",
  email: "arizonainteriorconstruction@gmail.com",
  address: "Litchfield Park, AZ, United States, Arizona",

  // Email related
  siteKey: "6LczFa8bAAAAAE_n_a2d59-7L8Fj8eyR6i5LZ82s",
  secretKey: "6LczFa8bAAAAACIRA4CjTP6nUdw0ccTVNqJ8SH8-",
  emailFrom: "mailer@domain.com",
  emailFromName: "",
  emailBcc: "",
  emailCc: "",

  // Social media links
  socialLinks: {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    tiktok: "https://tiktok.com/",
    tumblr: "https://tumblr.com",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
    linkedin: "https://www.linkedin.com/",
    yelp: "https://yelp.com/",
    pinterest: "https://pinterest.com/",
    rss: "https://rss.com/",
    in: "https://linkedin.com/",
  },

  // SEO
  gaTrackingId: '',

  // Privacy policy link
  policyLink: 'privacy-policy',

  // Cookie
  cookieEnabled: true,
  saveForm: false,

  // Suspension
  suspended: false,
};

export function SiteConfigProvider({ children }) {
  return (
    <SiteConfigContext.Provider value={siteConfig}>
      {children}
    </SiteConfigContext.Provider>
  );
}

export function useSiteConfig() {
  const context = useContext(SiteConfigContext);
  if (context === undefined) {
    throw new Error('useSiteConfig must be used within a SiteConfigProvider');
  }
  return context;
}

// URL configuration (using environment variables)
export const urlConfig = {
  protocol: process.env.NEXT_PUBLIC_URL_PROTOCOL || 'http://',
  domain: process.env.NEXT_PUBLIC_URL_DOMAIN || 'localhost:3000',
  subFolder: process.env.NEXT_PUBLIC_URL_SUB_FOLDER || '',
};

export const baseUrl = `${urlConfig.protocol}${urlConfig.domain}${urlConfig.subFolder}`;