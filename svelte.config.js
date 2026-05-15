import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter(),
		paths: {
			base: '/gulrez-org-kashmiri-language',
			// Root-relative /gulrez-org-kashmiri-language/_app/... so JS/CSS work on both
			// /repo/page and /repo/page/ (GitHub Pages trailing-slash quirks).
			relative: false
		},
		prerender: {
			handleMissingId: 'warn',
			handleHttpError: 'warn'
		}
	}
};

export default config;
