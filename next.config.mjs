/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  experimental: {
    reactCompiler: true,
    //ppr: 'incremental'
  },
};

export default nextConfig;
