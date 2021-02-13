module.exports = {
	ci: {
		collect: {
			startServerCommand: 'npx http-server',
			startServerReadyPattern: "Available",
            numberOfRuns: 3,
			startServerReadyTimeout: 10000,
			settings: {
				extraHeaders: JSON.stringify({authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTgwMTg4MTIsInN1YiI6ImM1YWNjMDAxLTBhYWMtNDJmYS1iMjIwLWE3OGJlMTlhODM5MyJ9.l1yPPetijSpesKoJ_pEMDd__HWIpT3l9DIKhuaET0R4'}),
			},
		},
		assert: {
		  assertions: {
			'categories:performance': ['error', {minScore: 1}],
			'categories:accessibility': ['warn', {minScore: 1}],
		  },
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
};
