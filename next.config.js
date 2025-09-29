/** next.config.js — allowing external images from picsum.photos
 *  Backup is next.config.js.bak if it existed.
 *
 *  If you already had custom settings in next.config.js, check the backup
 *  and merge manually (don't lose custom build settings).
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos']
    // If you need more granular control, use remotePatterns:
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'picsum.photos', port: '', pathname: '/**' }
    // ]
  }
};

module.exports = nextConfig;
