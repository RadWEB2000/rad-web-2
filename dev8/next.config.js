/** @type {import('next').NextConfig} */
const nextConfig = {
     webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
            name: '[name].[ext]'
          },
        },
      });
    }

    return config;
  },
}

module.exports = nextConfig
