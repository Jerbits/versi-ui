/** @type {import('tailwindcss').Config} */
const { join } = require('node:path');
module.exports = {
	content: [join(__dirname, './src/**/*.{js,ts,jsx,tsx}')],
	theme: {
		extend: {
			screens: {
				'mobile-landscape': { max: '900px' }
			},
		}
	},
	plugins: [],
	prefix: 'vui-'
};
