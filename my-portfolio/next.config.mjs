// next.config.mjs
import next from 'next';
import svgr from '@svgr/webpack';

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [svgr],
    });
    return config;
  },
};

export default nextConfig;
