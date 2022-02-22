// ESLint doesn't follow sharable-configs 'extends' properly, here is a patch to enable this
// https://github.com/eslint/eslint/issues/3458#issuecomment-516716165

require("@rushstack/eslint-config/patch/modern-module-resolution");
