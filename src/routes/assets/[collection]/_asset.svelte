<script>
  import web3 from '../../../web3'
  
  import { onMount } from 'svelte'

  export let collection;
  export let index;
  export let id;

  onMount(async() => {
    const sig = web3.utils.sha3('tokenByIndex(uint256)').slice(0,10)
    const params = index.toString(16).padStart(64, '0')
    const data = sig + params
    const result = await web3.eth.call({
      to: collection,
      data
    })
    id = web3.utils.hexToNumberString(result)
  })
</script>

<div class="asset">
  {#if id}
    <a href="/assets/{collection}/{id}">{id}</a>
  {:else}
    Loading...
  {/if}
</div>