module.exports = {
	ci: {
		collect: {
			startServerCommand: 'npx http-server',
			startServerReadyPattern: "Available",
            numberOfRuns: 3,
			startServerReadyTimeout: 10000,
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
