const isGitHubPages =
  process.env.GITHUB_ACTIONS === 'true' &&
  process.env.GITHUB_REPOSITORY?.endsWith('/arc-bridge-capital');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGitHubPages ? '/arc-bridge-capital' : '',
  assetPrefix: isGitHubPages ? '/arc-bridge-capital/' : undefined,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
