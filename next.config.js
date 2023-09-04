module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    concurrentFeatures: true,
  },
  swcMinify: false,
  async redirects() {
    return [
      {
        source: "/work",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
