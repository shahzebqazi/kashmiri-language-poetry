import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter(),
		paths: {
			base: '/kashmiri-language-poetry',
			// Root-relative /kashmiri-language-poetry/_app/... so JS/CSS work on both
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
