<script context="module">
  import web3 from '../../../web3'
  
  export async function preload(page, session) {
    const data = web3.utils.sha3('totalSupply()').slice(0,10)
    const result = await web3.eth.call({
      to: page.params.collection,
      data
    })
    const totalSupply = web3.utils.hexToNumberString(result)
    
    return {totalSupply}
  }
</script>

<script>
  import collections from '../../../collections'
  import NFT from './_nft.svelte'
  import { stores } from '@sapper/app';

  export let totalSupply

  function nav(params) {
    const oldParams = $page.params
    const newParams = Object.assign(oldParams, params)
    
  }

  const { page } = stores();

  let perPage = 12
  const url = collections[$page.params.collection].url
  
  $: currentPage = Number($page.query.page) || 0
  $: startIndex = currentPage * perPage
  $: isLastPage = (currentPage + 1) * perPage >= totalSupply
  $: isFirstPage = (currentPage - 1) * perPage < 0
</script>

<div class="container">
<h1>{$page.params.collection}</h1>

<div class="details">
  Visit <a target="_blank" href="{url}">{url}</a> for more information
</div>


Showing {startIndex} - {startIndex + perPage} of {totalSupply}<br>
{#if !isFirstPage}
  <a href="/collections/{$page.params.collection}?page={currentPage - 1}">Prev Page</a>
{/if}
{#if !isLastPage}
  <a href="/collections/{$page.params.collection}?page={currentPage + 1}">Next Page</a>
{/if}


<div class="row">
  {#each Array(perPage) as _, i (i + startIndex + 1)}
    <NFT collection={$page.params.collection} index={i + startIndex + 1} />
  {/each}
</div>

</div>

<style>

</style>
