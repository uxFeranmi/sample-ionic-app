module.exports = {
	ci: {
		collect: {
			startServerCommand: 'npx http-server',
			startServerReadyPattern: "listen|ready|server\srunning",
			numberOfRuns: 3
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
