import Newsletter from './Newsletter.svelte';

const app = new Newsletter({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;