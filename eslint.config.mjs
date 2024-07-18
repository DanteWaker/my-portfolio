// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
)
	.prepend(
	)
	.override('nuxt/typescript/rules', {
		rules: {
			'@typescript-eslint/ban-types': 'off',
		},
	});
