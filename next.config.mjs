/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.rooteducation.group",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "192.168.11.110",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
