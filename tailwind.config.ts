import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
	content: [
		'docs/content/**/*.md',
	],
	theme: {
		screens: {
			'tablet': '640px',
			// => @media (min-width: 640px) { ... }

			'laptop': '1024px',
			// => @media (min-width: 1024px) { ... }

			'desktop': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2kDesktop': '1536px',
		},
		extend: {
			animation: {
				'spin-slow': 'scroll 20s linear infinite',
			},
			keyframes: {
				scroll: {
					'0%, 100%': { transform: 'translateX(-33%)' },
					'50%': { transform: 'translateX(-66%)' },
				},
			},
			colors: {
				customPrimary: {
					200: '#C5C5C5',
					400: '#2C2D2D',
					900: '#000000',
				},
				customBackground: {
					400: '#F5F5F5',
					500: '#DCE0DD',
					600: '#D2D2D2',
					900: '#000000',
				},
			},
			aspectRatio: {
				auto: 'auto',
				square: '1 / 1',
				video: '16 / 9',
			},
		},
	},
};
