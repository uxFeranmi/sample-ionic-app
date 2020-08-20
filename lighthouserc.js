module.exports = {
	ci: {
		collect: {
			//startServerCommand: 'npm run start',
			//startServerReadyPattern: "listen|ready|server\srunning",
			//startServerReadyTimeout: 20000,
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

/* Store the token as LHCI_GITHUB_APP_TOKEN in your build environment.

bV32DSmicFvUPcq:11347526:xAUKYWBSv
*/