/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "es", "fr", "ko", "pt"],
    defaultLocale: "en"
  },
  compiler: {
    styledComponents: true
  },
  pageExtensions: ["page.tsx"]
}

export default nextConfig
