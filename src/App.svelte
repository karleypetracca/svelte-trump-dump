<script>
	import Quote from './components/Quote.svelte';
</script>

<main>
	<h1>Trump Dump</h1>
	<h2>Do you worship Trump's words? Hear from your savior!</h2>
	<Quote/>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: crimson;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>