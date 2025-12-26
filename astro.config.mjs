// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY;
const [username, repoName] = GITHUB_REPOSITORY
  ? GITHUB_REPOSITORY.split("/")
  : ["", ""];

// https://astro.build/config
export default defineConfig({
  site: GITHUB_REPOSITORY
    ? `https://${username}.github.io`
    : "http://localhost:4321",
  // If in GitHub Actions, use /repo-name/ as the subpath
  base: GITHUB_REPOSITORY ? `/${repoName}/` : "",

  vite: {
    plugins: [tailwindcss()],
  },
});
