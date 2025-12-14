import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/libre-logos' : '',
  },
  basePath: isProd ? '/libre-logos' : '',
  assetPrefix: isProd ? '/libre-logos/' : '',
  output: "export",
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;