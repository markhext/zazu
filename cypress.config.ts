import { defineConfig } from "cypress";
import path from "path";

export default defineConfig({
  viewportWidth: 1536,
  viewportHeight: 960,
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
      webpackConfig: {
        resolve: {
          alias: {
            "@components": path.resolve(__dirname, "./src/components"),
          },
        },
      },
    },
  },

  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
