<script context="module">
  import web3 from '../../../web3';

  export async function preload(page, session) {
    const collection = page.params.collection
    const id = Number(page.params.id)
    const sig = web3.utils.sha3('tokenURI(uint256)').slice(0,10)
    const params = id.toString(16).padStart(64, '0')
    const data = sig + params
    const result = await web3.eth.call({
      to: collection,
      data
    })
    
    const tokenUri = web3.eth.abi.decodeParameter('string', result)
    const metadata = await this.fetch(tokenUri).then(res => res.json())
    const title = metadata.title || metadata.name || metadata.memo
    return {metadata, title}
  }

</script>

<script>
  import { stores } from '@sapper/app';
  const { page } = stores();
  export let title
  export let metadata
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

<a href="/collections/{$page.params.collection}">Back to collection</a>

<table>
{#each Object.keys(metadata) as field}
  <tr>
    <th>{field}</th>
    <td>{metadata[field]}</td>
  </tr>
{/each}
</table>