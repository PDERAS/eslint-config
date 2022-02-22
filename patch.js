// ESLint doesn't follow sharable-configs 'extends' properly, here is a patch to enable this
// https://github.com/eslint/eslint/issues/3458#issuecomment-516716165

require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
	plugins: ['@rushstack/eslint-config'],
	extends: [
		"plugin:@rushstack/eslint-config/profile/node",
		"plugin:@rushstack/eslint-config/mixins/packlets"
		// "@rushstack/eslint-config/mixins/friendly-locals" // TODO: activate this rule
	],
	parserOptions: { tsconfigRootDir: __dirname }
};