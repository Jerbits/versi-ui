// @ts-nocheck
import * as path from "path";
import { getBaseConfig } from "../../vite.config";

export default getBaseConfig({
  lib: {
    entry: path.resolve(__dirname, "src/index.tsx"),
    name: "Base",
    fileName: "index",
  },
  resolve: {
    alias: {
      '@Base/components': path.resolve(__dirname, 'src/components'), 
      '@Base/hooks': path.resolve(__dirname, 'src/hooks'), 
      '@Base/mocks': path.resolve(__dirname, 'src/mocks'), 
      '@Base/helpers': path.resolve(__dirname, 'src/helpers'), 
      '@Base/types': path.resolve(__dirname, 'src/types'), 
      '@Base/icons': path.resolve(__dirname, 'src/assets/icons'), 
      '@Base/constants': path.resolve(__dirname, 'src/constants')
    }
  },
});