module.exports = {
	env: {
		browser: true,
		jest: true,
	},
	extends: [
		'airbnb-base',
		'plugin:react/recommended',
		'plugin:security/recommended',
		'react-app',
	],
	globals: {
		afterEach: true,
		beforeEach: true,
		browser: true,
		by: true,
		console: true,
		describe: true,
		document: true,
		element: true,
		ENV: true,
		expect: true,
		it: true,
		jest: true,
		window: true,
	},
	parserOptions: { ecmaVersion: 10 },
	plugins: [
		'import',
		'jest',
		'react',
		'security',
	],
	rules: {
		'arrow-parens': ['error', 'as-needed'],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		indent: ['error', 'tab'],
		'jsx-quotes': ['error', 'prefer-single'],
		'no-mixed-operators': [
			'error',
			{
				groups: [
					['+', '-', '*', '/', '%', '**'],
					['&', '|', '^', '~', '<<', '>>', '>>>'],
					['==', '!=', '===', '!==', '>', '>=', '<', '<='],
					['&&', '||'],
					['in', 'instanceof'],
				],
			},
		],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxEOF: 1,
			},
		],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-unused-expressions': ['error', {
			allowShortCircuit: true,
			allowTernary: true,
		}],
	},
	settings: {
		react: { version: 'detect' },
	},
};
