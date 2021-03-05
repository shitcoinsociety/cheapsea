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

</style>

<svelte:head>
	<title>Shitcoin Society</title>
</svelte:head>

<Nav {segment}/>

<slot></slot>

<div class="container">
  <hr>
  Copyright 2021 <a href="https://shitcoinsociety.com">Shitcoin Society</a> | CheapSea is <a href="https://github.com/shitcoinsociety/cheapsea">open source</a> and runs on the <a href="https://cheapeth.org">cheapnet</a>.
</div>
