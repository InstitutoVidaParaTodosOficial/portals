/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "es", "fr", "ko", "pt"],
    defaultLocale: "en"
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.institutovidaparatodos.org.br"
      }
    ]
  },
  compiler: {
    styledComponents: true
  },
  pageExtensions: ["page.tsx"]
}

export default nextConfig
