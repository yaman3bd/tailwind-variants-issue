import react from "@vitejs/plugin-react";
import path from "node:path";
import {URL, fileURLToPath} from "url";
import {defineConfig} from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

const theme = {
  lib: {
    entry: path.resolve(__dirname, "src/theme/index.ts"),
    name: "theme",
    formats: ["cjs"],
    fileName: (format) => `theme.${format}`
  },
  outDir: "./dist/theme"
};
const abjad = {
  lib: {
    entry: path.resolve(__dirname, "src/index.tsx"),
    name: "tailwind-variants-issue",
    formats: ["es", "umd"],
    fileName: (format) => `tailwind-variants-issue.${format}.js`
  }
};
const config = {
  theme,
  abjad
};
const currentConfig = config[process.env.LIB_NAME];

export default defineConfig({
  publicDir: false,
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    }),
    tsconfigPaths()
  ],
  resolve: {
    alias: [{find: "@/theme", replacement: fileURLToPath(new URL("./src/theme", import.meta.url))}
      , {
        find: "@/components",
        replacement: fileURLToPath(new URL("./src/components", import.meta.url))
      }
    ]
  },
  build: {
    ...currentConfig,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
