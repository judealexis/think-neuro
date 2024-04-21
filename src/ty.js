import Ty from './Ty.svelte';

const app = new Ty({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;