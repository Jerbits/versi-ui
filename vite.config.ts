
import path from "path";
import { defineConfig } from "vite";
import pluginReact from "@vitejs/plugin-react-swc";
import dts from 'vite-plugin-dts'

const isExternal = (id: string) => !id.startsWith(".") && !path.isAbsolute(id);

export const getBaseConfig = ({ plugins = [], lib }) =>
  defineConfig({
    plugins: [pluginReact(), dts({ rollupTypes: true }), ...plugins],
    build: {
      lib,
      rollupOptions: {
        external: isExternal,
        output: {
          globals: {
            react: "React",
          },
        },
      },
    },
  });