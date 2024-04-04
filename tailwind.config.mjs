/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			fontFamily: {
				'manrope': ['Manrope'],
				'great-warrior': ['Great-Warrior'],
				'gobold-extra2': ['Gobold-Extra2']
			},
			colors: {
				'beige': '#f2ebd8',
				'green': '#145e67',
				'light-yellow': '#f2ea9a',
				'brown': '#b28c6e',
				'gold': '#dacb37',
				'light-green': '#ABECD6',
				'light-yellow-200': '#FBED96',
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
