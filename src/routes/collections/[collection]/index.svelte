<script context="module">
  import web3 from '../../../web3'
  
  export async function preload(page, session) {
    let totalTokens
    const [collection, owner] = page.params.collection.split(':')
    
    if (owner) {
      totalTokens = await web3.getInt(collection, 'balanceOf(address)', owner)
    }
    else {
      totalTokens = await web3.getInt(collection, 'totalSupply()')
    }
    const name = await web3.getString(collection, 'name()')

    return {totalTokens, name, collection, owner}
  }
</script>

<script>
  import collections from '../../../collections'

  import NFT from './_nft.svelte'
  import { stores } from '@sapper/app';

  export let totalTokens, name, owner, collection

  const { page } = stores();

  let perPage = 12
  const url = collections[collection].url

  $: currentPage = Number($page.query.page) || 0
  $: startIndex = currentPage * perPage
  $: isLastPage = (currentPage + 1) * perPage >= totalTokens
  $: isFirstPage = (currentPage - 1) * perPage < 0
  $: numOnPage = Math.min(perPage, totalTokens - startIndex)
</script>

<svelte:head>
  <title>NFTs on {name}</title>
</svelte:head>

<div class="container">
<h1>
  {name} 
  <span>{collection}</span>
</h1>

<div class="details">
  Collection website: <a target="_blank" href="{url}">{url}</a>
</div>

<div class="filter">
  {#if owner}
    Filtered by Owner: {owner}
  {/if}
</div>

Showing {startIndex} - {startIndex + numOnPage} of {totalTokens}<br>
{#if !isFirstPage}
  <a href="/collections/{collection}?page={currentPage - 1}">Prev Page</a>
{/if}
{#if !isLastPage}
  <a href="/collections/{collection}?page={currentPage + 1}">Next Page</a>
{/if}


<div class="row">
  {#each Array(numOnPage) as _, i (i + startIndex + 1)}
    <NFT collection={collection} {owner} index={i + startIndex} />
  {/each}
</div>

</div>

<style>
  h1 span {
    font-size: 0.4em;
  }
</style>
