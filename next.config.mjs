/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.rooteducation.group",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
