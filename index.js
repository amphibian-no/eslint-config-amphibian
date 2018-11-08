module.exports = {
	rules: {
		strict: 0,
		'unicorn/no-process-exit': 0,
		'operator-linebreak': [
			2,
			'before'
		],
		'capitalized-comments': 0,
		'arrow-parens': [
			2,
			'always'
		],
		'import/extensions': [
			2,
			'never',
			{
				json: 'always'
			}
		],
		'jsx-tag-spacing': [
			2,
			{
				"closingSlash": "never",
				"beforeSelfClosing": "always",
				"afterOpening": "never",
				"beforeClosing": "never"
			}
		]
	}
};
