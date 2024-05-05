---
to: packages/<%= h.capitalize(name) %>/tailwind.config.js
---
/** @type {import('tailwindcss').Config} */
const path = require('path');
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			
		}
	},
	plugins: [],
	prefix: 'vui-'
};
