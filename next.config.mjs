/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old WordPress slugs that no longer have a page of their own.
      { source: '/paperback', destination: '/#get-the-book', permanent: true },
      { source: '/paperback/:rest*', destination: '/#get-the-book', permanent: true },
    ];
  },
};

export default nextConfig;
