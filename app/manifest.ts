import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IndusTech - Industrial Manufacturing Solutions",
    short_name: "IndusTech",
    description:
      "Specialized in conveyor systems, electrical panels, and pharmaceutical machinery for Pharma and FMCG industries.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0c2273",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

