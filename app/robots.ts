import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://peperudabulgaria.com/sitemap.xml",
    host: "https://peperudabulgaria.com",
  }
}
