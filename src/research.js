import Research from './Research.svelte';

const app = new Research({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;