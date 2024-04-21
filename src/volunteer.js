import Volunteer from './Volunteer.svelte';

const app = new Volunteer({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;