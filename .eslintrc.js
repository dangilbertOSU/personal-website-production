module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ["plugin:react/recommended", "airbnb"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"react/react-in-jsx-scope": "off",
		"arrow-body-style": 0,
		// Indent with 4 spaces
		indent: [2, "tab"],
		"no-tabs": 0,
		// Indent JSX with 4 spaces
		"react/jsx-indent": ["error", "tab"],
		// Indent props with 4 spaces
		"react/jsx-indent-props": ["error", "tab"],
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
		"jsx-a11y/anchor-is-valid": [
			"error",
			{
				components: ["Link"],
				specialLink: ["hrefLeft", "hrefRight"],
				aspects: ["invalidHref", "preferButton"],
			},
		],
		quotes: [2, "double", { avoidEscape: true }],
	},
};
