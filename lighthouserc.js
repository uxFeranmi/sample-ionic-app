module.exports = {
	ci: {
		collect: {
			staticDistDir: './www',
			url: ['http://localhost', 'http://localhost/tabs/tab2'],
			numberOfRuns: 3,
			isSinglePageApplication: true
		},
		assert: {
		  assertions: {
			'categories:performance': ['error', {minScore: 1}],
			'categories:accessibility': ['warn', {minScore: 1}]
		  }
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
};
