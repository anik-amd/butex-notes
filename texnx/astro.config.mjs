import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkMermaid from "astro-diagram/remark-mermaid";

const site = "https://texnx.pages.dev/";

// https://astro.build/config
export default defineConfig({
  site: "https://texnx.pages.dev/",
  integrations: [
    // mdx(),
    starlight({
      title: "TexNx",
      description:
        "Syllabus, notes on class lectures, question banks, suggestions and other resources for Textile Engineering.",
      social: {
        github: "https://github.com/anik-amd/butex-notes",
        threads: "https://threads.net/anik_amd",
      },
      head: [
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
          },
        },
        {
          tag: "link",
          attrs: {
            href: "https://fonts.googleapis.com/css2?family=Philosopher:wght@700&display=swap",
            rel: "stylesheet",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
            integrity:
              "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
            crossOrigin: "anonymous",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: site + "og.jpg?v=1",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: site + "og.jpg?v=1",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "google-site-verification",
            content: "jZfi26mSRYix6gJuBfE1PIiONkIb26wl7AFE070pvUw",
          },
        },
        // {
        //   tag: "link",
        //   attrs: {
        //     rel: "sitemap",
        //     href: "/sitemap-index.xml",
        //   },
        // },

        // added from cloudflare pages settings
        // {
        //   tag: "script",
        //   attrs: {
        //     src: "https://static.cloudflareinsights.com/beacon.min.js",
        //     "data-cf-beacon": "{'token': 'f5b59f8e7d0442e3bf7b5a79ae9db493'}",
        //     defer: true,
        //   },
        // },
      ],

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
  markdown: {
    remarkPlugins: [remarkMath, remarkMermaid],
    rehypePlugins: [rehypeKatex],
  },
});
