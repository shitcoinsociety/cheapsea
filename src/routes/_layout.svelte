<script>
	import NProgress from 'nprogress';
	import Nav from '../components/Nav.svelte';
	import { stores } from '@sapper/app';

	export let segment;

	const { preloading } = stores()

	NProgress.configure({
		minimum: 0.16,
		showSpinner: false,
	})

	$: {
		if ($preloading) {
			NProgress.start()
		}

		if (!$preloading) {
			NProgress.done()
		}
	}

</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
	<hr>
Copyright 2021 <a href="https://shitcoinsociety.com">Shitcoin Society</a> | CheapSea is <a href="https://github.com/shitcoinsociety/cheapsea">open source</a> and runs on Ethereum's very own <a href="https://cheapeth.org">cheapnet</a>

</main>
