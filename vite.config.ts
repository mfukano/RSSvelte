import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()], 
    server: {
        cors: true,
        open: '/',
    },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
