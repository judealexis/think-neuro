import About from './About.svelte';

const app = new About({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;