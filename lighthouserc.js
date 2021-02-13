module.exports = {
	ci: {
		collect: {
			staticDistDir: './www',
			url: ['http://localhost', 'http://localhost/tabs/tab2'],
			numberOfRuns: 3,
			isSinglePageApplication: true,
			settings: {
				extraHeaders: JSON.stringify({authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTgwMTg4MTIsInN1YiI6ImM1YWNjMDAxLTBhYWMtNDJmYS1iMjIwLWE3OGJlMTlhODM5MyJ9.l1yPPetijSpesKoJ_pEMDd__HWIpT3l9DIKhuaET0R4'}),
			},
		},
		assert: {
		  assertions: {
			'categories:performance': ['error', {minScore: 1}],
			'categories:accessibility': ['error', {minScore: 90}]
		  }
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
};
