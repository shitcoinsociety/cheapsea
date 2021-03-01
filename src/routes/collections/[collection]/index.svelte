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

  let startIndex = 0
  let perPage = 12
  const { page } = stores();
  const url = collections[$page.params.collection].url

</script>

<h1>{$page.params.collection}</h1>

<div class="details">
Visit <a target="_blank" href="{url}">{url}</a> for more information
</div>

Showing {startIndex} - {startIndex + perPage} of {totalSupply}

{#each Array(perPage) as _, i}
  <NFT collection={$page.params.collection} index={i + 1} />
{/each}


