import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://octacore.web.id'; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1, // Prioritas Tertinggi (Halaman Utama)
    },
    {
      url: `${baseUrl}/serviceLaptop`,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Sering berubah (karena ada promo/harga)
      priority: 0.8,
    },
    // Jika nanti halaman lain sudah dibuat, tambahkan disini:
    // {
    //   url: `${baseUrl}/web-development`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}