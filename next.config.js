module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
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
