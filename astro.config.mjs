// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY;
const [username, repoName] = GITHUB_REPOSITORY
  ? GITHUB_REPOSITORY.split("/")
  : ["", ""];

// Check if this is a User/Org site (root) or a Project site (subfolder)
const isRootPages = repoName === `${username}.github.io`;

export default defineConfig({
  site: GITHUB_REPOSITORY
    ? `https://${username}.github.io`
    : "http://localhost:4321",

  base: GITHUB_REPOSITORY && !isRootPages ? `/${repoName}/` : "/",

  vite: {
    plugins: [tailwindcss()],
  },
});
