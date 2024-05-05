module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
		'plugin:import/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json']
	},
	plugins: ['react', '@typescript-eslint'],
	settings: {
		'import/resolver': {
			typescript: {
				project: './tsconfig.json'
			}
		},
		react: {
			version: '17.x'
		}
	},
	ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts', 'tsconfig.json'],
	rules: {
		'linebreak-style': 'off',
		'prettier/prettier': [
			'error',
			{
				arrowParens: 'always',
				semi: true,
				singleQuote: true,
				printWidth: 120,
				tabWidth: 4,
				proseWrap: 'always',
				bracketSpacing: true,
				useTabs: true,
				jsxSingleQuote: true,
				bracketSameLine: false,
				trailingComma: 'none',
				plugins: ['prettier-plugin-tailwindcss'],
				"tailwindFunctions": ["cn"]
			}
		],
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: true,
				types: {
					'{}': false
				}
			}
		],
		'import/no-unresolved': [2, { caseSensitive: false }],
		'react-hooks/exhaustive-deps': 'off',
		'object-shorthand': 'error',
		'no-console': 'warn',
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: false
			}
		],
		'@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true }]
	}
};
