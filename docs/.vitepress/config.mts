import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config

const vitePressOptions = {
  title: "my-doc-site",
  description: "My personal documentation that could be useful to everyone",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "content/about.html" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/nahuel11500/my-doc-site" },
    ],
  },
};

const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  documentRootPath: "/docs",
  collapsed: false,
  capitalizeFirst: true,
};

export default defineConfig(
  withSidebar(vitePressOptions, vitePressSidebarOptions)
);
