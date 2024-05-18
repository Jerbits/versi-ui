---
to: packages/<%= h.capitalize(name) %>/vite.config.ts
---
// @ts-nocheck
import * as path from "path";
import { getBaseConfig } from "../../vite.config";

export default getBaseConfig({
  lib: {
    entry: path.resolve(__dirname, "src/index.tsx"),
    name: "<%= h.capitalize(name) %>",
    fileName: "index",
  },
  resolve: {
    alias: {
      '@<%= h.capitalize(name) %>/components': path.resolve(__dirname, 'src/components'), 
      '@<%= h.capitalize(name) %>/hooks': path.resolve(__dirname, 'src/hooks'), 
      '@<%= h.capitalize(name) %>/mocks': path.resolve(__dirname, 'src/mocks'), 
      '@<%= h.capitalize(name) %>/helpers': path.resolve(__dirname, 'src/helpers'), 
      '@<%= h.capitalize(name) %>/types': path.resolve(__dirname, 'src/types'), 
      '@<%= h.capitalize(name) %>/icons': path.resolve(__dirname, 'src/assets/icons'), 
      '@<%= h.capitalize(name) %>/constants': path.resolve(__dirname, 'src/constants')
    }
  },
});