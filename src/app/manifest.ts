import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'flash-card',
    short_name: 'flash-card',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    // theme_color: '#000000',
    icons: [
      {
        src: '/flash-card-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/flash-card-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}