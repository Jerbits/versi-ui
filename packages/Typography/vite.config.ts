// @ts-nocheck
import * as path from "path";
import { getBaseConfig } from "../../vite.config";

export default getBaseConfig({
  lib: {
    entry: path.resolve(__dirname, "src/index.tsx"),
    name: "Typography",
    fileName: "index",
  },
  resolve: {
    alias: {
      '@typography/components': path.resolve(__dirname, 'src/components'), 
      '@typography/hooks': path.resolve(__dirname, 'src/hooks'), 
      '@typography/mocks': path.resolve(__dirname, 'src/mocks'), 
      '@typography/helpers': path.resolve(__dirname, 'src/helpers'), 
      '@typography/types': path.resolve(__dirname, 'src/types'), 
      '@typography/icons': path.resolve(__dirname, 'src/assets/icons'), 
      '@typography/constants': path.resolve(__dirname, 'src/constants')
    }
  },
});