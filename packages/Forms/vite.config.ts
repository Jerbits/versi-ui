// @ts-nocheck
import * as path from "path";
import { getBaseConfig } from "../../vite.config";

export default getBaseConfig({
  lib: {
    entry: path.resolve(__dirname, "src/index.tsx"),
    name: "Forms",
    fileName: "index",
  },
  resolve: {
    alias: {
      '@forms/components': path.resolve(__dirname, 'src/components'), 
      '@forms/hooks': path.resolve(__dirname, 'src/hooks'), 
      '@forms/mocks': path.resolve(__dirname, 'src/mocks'), 
      '@forms/helpers': path.resolve(__dirname, 'src/helpers'), 
      '@forms/types': path.resolve(__dirname, 'src/types'), 
      '@forms/icons': path.resolve(__dirname, 'src/assets/icons'), 
      '@forms/constants': path.resolve(__dirname, 'src/constants')
    }
  },
});