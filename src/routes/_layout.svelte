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

<Nav {segment}/>

<slot></slot>

<div class="container">
  <hr>
  Copyright 2021 <a href="https://shitcoinsociety.com">Shitcoin Society</a> | CheapSea is an <a href="https://github.com/shitcoinsociety/cheapsea">open source</a> NFT browser for your favourite networks.
</div>
