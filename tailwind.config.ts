import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'node_modules/preline/dist/*.js',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary: {
					900: '#006064',
					800: '#00838F',
					700: '#0097A7',
					600: '#00ACC1',
					500: '#00BCD4',
					400: '#26C6DA',
					300: '#4DD0E1',
					200: '#80DEEA',
					100: '#B2EBF2',
					50: '#E0F7FA',
				},
			},
		},
	},
	plugins: [require('preline/plugin')],
};
export default config;
