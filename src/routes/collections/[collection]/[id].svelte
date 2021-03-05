<script context="module">
  import web3 from '../../../web3';

  export async function preload(page, session) {
    const collection = page.params.collection
    const id = Number(page.params.id)

    const tokenUri = await web3.getString(collection, 'tokenURI(uint256)', id)
    const owner = await web3.getAddress(collection, 'ownerOf(uint256)', id)
    const metadata = await this.fetch(tokenUri).then(res => res.json())
    const title = metadata.title || metadata.name || metadata.memo
    return {metadata, title, owner}
  }

</script>

<script>
  import { stores } from '@sapper/app';
  const { page } = stores();
  
  export let title, metadata, owner
</script>

<svelte:head>
  <title>{title}</title>
	<meta name="description" content="{title} is on cheap Ethereum" />
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@shitcoinsociety">
	<meta name="twitter:creator" content="@shitcoinsociety">
	<meta name="twitter:title" content="{title}">
	<meta name="twitter:description" content="">
	<meta name="twitter:image" content="{metadata.image}">
	<meta property="og:title" content="{title}">
	<meta property="og:description" content="{title} on cheap Ethereum">
	<meta property="og:type" content="website">
	<meta property="og:image" content="{metadata.image}">
</svelte:head>

<h1>{title}</h1>

<div class="owner">
  Owned by {owner}
</div>

<a href="/collections/{$page.params.collection}">Back to collection</a>

<table>
  {#each Object.keys(metadata) as field}
    <tr>
      <th>{field}</th>
      <td>{metadata[field]}</td>
    </tr>
  {/each}
</table>