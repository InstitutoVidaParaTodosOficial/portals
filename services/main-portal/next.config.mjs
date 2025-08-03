/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en"
  },
  compiler: {
    styledComponents: true
  },
  pageExtensions: ["page.tsx"]
}

export default nextConfig
