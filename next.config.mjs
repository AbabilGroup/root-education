/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.rooteducation.group",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "192.168.11.110",
        pathname: "/media/**",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `https://api.rooteducation.group/api/:path*`, // Your backend URL
      },
    ];
  },
};

export default nextConfig;
