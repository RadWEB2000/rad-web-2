module.exports = {
  rewrites: async () => [
    {
      source: "/admin/:path*",
      destination: "/:path*",
    },
  ],
};
