/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "103.17.37.8",
        port: "8004",
        pathname: "/**",
      },
      // {
      //   protocol: "http",
      //   hostname: "103.17.37.8",
      //   port: "8004",
      //   pathname: "/media/job_opportunity/**",
      // },
    ],
  },
};

export default nextConfig;
