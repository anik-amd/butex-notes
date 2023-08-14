import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "TexNx",
      description:
        "Syllabus, notes on class lectures, question banks, suggestions and other resources for Textile Engineering.",
      social: {
        github: "https://github.com/anik-amd/butex-notes",
        threads: "https://threads.net/anik_amd",
      },
      editLink: {
        baseUrl: "https://github.com/anik-amd/butex-notes/edit/main/texnx/",
      },
      sidebar: [
        {
          label: "Get Start",
          link: "/start",
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   {
          //     label: "Example Guide",
          //     link: "/guides/example/",
          //   },
          // ],
        },
        {
          label: "L3-T1",
          autogenerate: {
            directory: "L3-T1",
          },
          collapsed: true,
        },
      ],
      lastUpdated: true,
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
    }),

    tailwind({
      applyBaseStyles: false,
    }),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
