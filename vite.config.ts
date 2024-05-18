import path, { join, resolve } from 'path';
import { defineConfig } from 'vite';
import pluginReact from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

const isExternal = (id: string) => !id.startsWith('.') && !path.isAbsolute(id);
const gloablResolverDefault = {
	alias: {
		'@animate/components': path.resolve(__dirname, 'packages/Animate/src/components'),
		'@animate/hooks': path.resolve(__dirname, 'packages/Animate/src/hooks'),
		'@animate/mocks': path.resolve(__dirname, 'packages/Animate/src/mocks'),
		'@animate/helpers': path.resolve(__dirname, 'packages/Animate/src/helpers'),
		'@animate/types': path.resolve(__dirname, 'packages/Animate/src/types'),
		'@animate/icons': path.resolve(__dirname, 'packages/Animate/src/assets/icons'),
		'@animate/constants': path.resolve(__dirname, 'packages/Animate/src/constants'),
		'@typography/components': path.resolve(__dirname, 'packages/Typography/src/components'),
		'@typography/hooks': path.resolve(__dirname, 'packages/Typography/src/hooks'),
		'@typography/mocks': path.resolve(__dirname, 'packages/Typography/src/mocks'),
		'@typography/helpers': path.resolve(__dirname, 'packages/Typography/src/helpers'),
		'@typography/types': path.resolve(__dirname, 'packages/Typography/src/types'),
		'@typography/icons': path.resolve(__dirname, 'packages/Typography/src/assets/icons'),
		'@typography/constants': path.resolve(__dirname, 'packages/Typography/src/constants'),
		'@forms/components': path.resolve(__dirname, 'packages/Forms/src/components'),
		'@forms/hooks': path.resolve(__dirname, 'packages/Forms/src/hooks'),
		'@forms/mocks': path.resolve(__dirname, 'packages/Forms/src/mocks'),
		'@forms/helpers': path.resolve(__dirname, 'packages/Forms/src/helpers'),
		'@forms/types': path.resolve(__dirname, 'packages/Forms/src/types'),
		'@forms/icons': path.resolve(__dirname, 'packages/Forms/src/assets/icons'),
		'@forms/constants': path.resolve(__dirname, 'packages/Forms/src/constants')
	}
};
export const getBaseConfig = ({ plugins = [], lib, resolve = gloablResolverDefault }) =>
	defineConfig({
		plugins: [pluginReact(), dts({ rollupTypes: true }), libInjectCss(), ...plugins],
		build: {
			lib,
			rollupOptions: {
				external: isExternal,
				output: {
					globals: {
						react: 'React'
					}
				}
			}
		},
		resolve
	});

export default getBaseConfig;
