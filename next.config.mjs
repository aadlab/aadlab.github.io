// Static export for GitHub Pages. The repo is an org-level Pages site
// (aadlab.github.io) served from the root, so no basePath is needed.
// `images.unoptimized` is required because the static export doesn't
// run the Next.js image optimisation server at request time.
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Emit /support/ as /support/index.html so GitHub Pages routes
  // cleanly without needing a redirect file.
  trailingSlash: true,
};

export default nextConfig;
