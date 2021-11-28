module.exports = {
  async redirects() {
    return [
      {
        source: '/project',
        destination: '/projects',
        permanent: true,
      },
    ];
  },
};
