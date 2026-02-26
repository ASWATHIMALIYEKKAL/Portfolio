import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portfolio/",
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});