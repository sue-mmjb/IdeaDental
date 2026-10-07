import type { NextConfig } from "next";

// GitHub Pages serves this project from https://ethabrooks90.github.io/IdeaDental3/, not the domain
// root. The Pages workflow sets PAGES_BASE_PATH ("/IdeaDental3"); when it's present we build a fully
// static export under that sub-path. Local dev and Vercel leave it unset and keep the defaults.
const pagesBasePath = process.env.PAGES_BASE_PATH;

const nextConfig: NextConfig =
  pagesBasePath !== undefined
    ? {
        output: "export",
        basePath: pagesBasePath,
        trailingSlash: true,
        env: { NEXT_PUBLIC_BASE_PATH: pagesBasePath },
        // No image-optimisation server on Pages: the loader just adds the sub-path to /images/... URLs.
        images: { loader: "custom", loaderFile: "./src/lib/image-loader.ts" },
      }
    : {};

export default nextConfig;
