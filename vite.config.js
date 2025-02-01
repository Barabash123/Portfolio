import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svelteSVG from '@hazycora/vite-plugin-svelte-svg';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		}),
		svelteSVG({
			svgoConfig: {}, // See https://github.com/svg/svgo#configuration
			requireSuffix: false // Set false to accept '.svg' without the '?component',
		})
	]
});
