import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/librelogos' : '',
  assetPrefix: isProd ? '/librelogos/' : '',
  output: "export",
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;