/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "pt"
  },
  compiler: {
    styledComponents: true
  },
  pageExtensions: ["page.tsx"]
}

export default nextConfig
