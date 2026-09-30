import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    // Enables React's <ViewTransition> (see src/components/view-transition.tsx).
    viewTransition: true,
  },
}

export default nextConfig
