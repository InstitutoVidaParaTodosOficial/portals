/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "pt-BR"],
    defaultLocale: "pt-BR"
  },
  compiler: {
    styledComponents: true
  },
  pageExtensions: ["page.tsx"]
}

export default nextConfig
