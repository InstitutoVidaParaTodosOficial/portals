/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "pt-BR"],
    defaultLocale: "pt-BR"
  },
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com"
      }
    ]
  },
  pageExtensions: ["page.tsx"]
}

export default nextConfig
