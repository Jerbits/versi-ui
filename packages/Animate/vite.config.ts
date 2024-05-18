// @ts-nocheck
import * as path from 'path';
import { getBaseConfig } from '../../vite.config';

export default getBaseConfig({
	lib: {
		entry: path.resolve(__dirname, 'src/index.tsx'),
		name: 'Animate',
		fileName: 'index'
	},
	resolve: {
		alias: {
			'@animate/components': path.resolve(__dirname, 'src/components'),
			'@animate/hooks': path.resolve(__dirname, 'src/hooks'),
			'@animate/mocks': path.resolve(__dirname, 'src/mocks'),
			'@animate/helpers': path.resolve(__dirname, 'src/helpers'),
			'@animate/types': path.resolve(__dirname, 'src/types'),
			'@animate/icons': path.resolve(__dirname, 'src/assets/icons'),
			'@animate/constants': path.resolve(__dirname, 'src/constants')
		}
	}
});
