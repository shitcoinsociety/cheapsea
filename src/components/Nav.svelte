<script>
	import collections from '../collections'
	import web3 from '../web3'
	import wallet from '../wallet'
  export let segment;

</script>

<nav>
	{#if $wallet.address}
	  <div class="connect_wallet">
			{$wallet.address}
		</div>
	{:else}
		<div on:click={wallet.connect} class="connect_wallet">
			Connect Wallet
		</div>
	{/if}
  <ul>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>🤘 CheapSea</a></li>
		{#each Object.keys(collections) as address}
	  	<li><a class='{segment === "collections" ? "selected" : ""}' href='/collections/{address}'>{collections[address].name}</a></li>
		{/each}
  </ul>
</nav>


<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}
	.connect_wallet {
		float: right;
		text-decoration: none;
    padding: 1em 0.5em;
    display: block;
		cursor: pointer;
	}
	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>