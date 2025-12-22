import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://octacore.web.id';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Folder yang tidak boleh muncul di Google
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}