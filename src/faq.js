import Faq from './Faq.svelte';

const app = new Faq({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;