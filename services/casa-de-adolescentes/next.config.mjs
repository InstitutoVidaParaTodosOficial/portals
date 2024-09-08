/** @type {import('next').NextConfig} */
const nextConfig = {
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
