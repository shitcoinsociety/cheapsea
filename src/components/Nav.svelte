<script>
	export let segment;
</script>


<nav>
  <ul>
	<li><a class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>
	<li><a class='{segment === "assets" ? "selected" : ""}' href='/assets/0x3f5d0741aa517ab75da3ca8d8d33ec9e1ac79c87'>geopogs</a></li>
  </ul>
</nav>


<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
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