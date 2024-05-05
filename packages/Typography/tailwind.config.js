/** @type {import('tailwindcss').Config} */
const path = require('path');
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				'mobile-landscape': { max: '900px' }
			}
		}
	},
	plugins: [],
	prefix: 'vui-'
};
