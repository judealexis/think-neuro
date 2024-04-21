import Internship from './Internship.svelte';

const app = new Internship({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;