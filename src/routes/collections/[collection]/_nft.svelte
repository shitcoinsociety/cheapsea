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

<div class="nft col-xs-4">
  {#if id}
  <a class="box" href="/collections/{collection}/{id}">
     {id}</a>
  {:else}
    <div class="box">
      Loading...
    </div>
  {/if}
  
</div>

<style>
  .box {
    display: block;
    margin-bottom: 1em;
    height: 200px;
    border: 1px solid #eee;
  }
</style>