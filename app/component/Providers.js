// app/components/Providers.js
'use client'

import { CookiesProvider } from 'react-cookie'
import { SiteConfigProvider } from "../siteConfigContext"

export function Providers({ children }) {
  return (
    <CookiesProvider>
      <SiteConfigProvider>
        {children}
      </SiteConfigProvider>
    </CookiesProvider>
  )
}