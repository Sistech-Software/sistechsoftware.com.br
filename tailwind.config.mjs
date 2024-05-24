/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './*.{html,js,astro}'],
	safelist: [
		{
			pattern: /col-span-.+/
		}	
	],
	theme: {
		extend: {
			colors: {
				'primary-color': '#0C0047',
				'secundary-color': '#343434',
				'tertiary-color': '#969696',
				'quaternary-color': '#143CA1',
				'neutral-color': '#F2F2FF',
				'button1':'#143CA1',
				'neutral':'#EAEAEA',
				'footer':'#081840',
				'footer-gradient':'#143CA1',
				'font-btn':'#6A4BFF'
		},
		fontFamily: {
			'be-vietnam': ['Be Vietnam', 'sans-serif'],
		}
	}
},
	variants: {},
	plugins: [],
}
