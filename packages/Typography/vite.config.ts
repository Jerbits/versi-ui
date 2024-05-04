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
      '@': path.resolve(__dirname, 'src'),
      '@Components': path.resolve(__dirname, 'src/components'), 
      '@Hooks': path.resolve(__dirname, 'src/hooks'), 
      '@Mocks': path.resolve(__dirname, 'src/mocks'), 
      '@Helpers': path.resolve(__dirname, 'src/helpers'), 
      '@Types': path.resolve(__dirname, 'src/types'), 
      '@Icons': path.resolve(__dirname, 'src/assets/icons'), 
      '@Constants': path.resolve(__dirname, 'src/constants')
    }
  },
});