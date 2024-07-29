// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	typescript: {
		typeCheck: true,
	},
	css: ['~/assets/css/main.css'],
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
		},
	},
	devtools: { enabled: false },
	vite: {
		vue: {
			customElement: true,
		},
		vueJsx: {
			mergeProps: true,
		},
	},
	modules: ['@nuxt/ui', '@nuxt/eslint', 'nuxt-icon', '@nuxt/fonts', '@nuxt/image'],
	image: {
		provider: process.env.NUXT_PROVIDER,
		domains: ['devbydenner.com', 'https://devbydenner.com/',
			'https://www.devbydenner.com/', 'localhost', 'http://localhost:3000/'],
	},
	fonts: {
		defaults: {
			weights: [100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
			styles: ['normal', 'italic'],
			subsets: [
				'cyrillic-ext',
				'cyrillic',
				'greek-ext',
				'greek',
				'vietnamese',
				'latin-ext',
				'latin',
			],
		},
	},
	eslint: {
		checker: {
			configType: 'eslintrc', // <--- (consider migrating to flat config if possible)
		},
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},
	colorMode: {
		preference: 'light',
	},
	ui: {
		global: true,
		icons: ['mdi', 'simple-icons'],
	},
});
