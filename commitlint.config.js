module.exports = {
    extends: ['@commitlint/config-conventional'],
    parserPreset: {
           parserOpts: {
              headerPattern: /^[A-Z]{1,4}-[0-9]{1,4}: (\w*)\((\w*)\): (.*)$/,
              headerCorrespondence: ["type", "scope", "subject"],
              issuePrefixes: ["^[A-Z]{1,4}-[0-9]{1,4}"],
              referenceActions: ["xx-"] // (!!)
            }
      },
    rules: {
        'references-empty': [2, 'never'],
		'body-leading-blank': [1, 'always'],
		'body-max-line-length': [2, 'always', 100],
		'footer-leading-blank': [1, 'always'],
		'footer-max-line-length': [2, 'always', 100],
		'header-max-length': [2, 'always', 100],
		'scope-case': [2, 'always', 'lower-case'],
		'subject-case': [
			2,
			'never',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case']
		],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		'scope-enum': [
            2, 
            'always',
            [
                'adf',
                'trigger',
                'config',
                'notebook'
            ]
        ],
		'type-enum': [
			2,
			'always',
			[
				'docs',
				'add',
				'remove',
				'modify',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'test'
			]
		]
	}
};
