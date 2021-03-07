<script>
  import web3 from '../../../web3'
  
  import { onMount } from 'svelte'

  export let collection, index, id;
  export let owner, metadata, title;

  let loaded = false
  let error = false
  onMount(async() => {
    if (owner) {
      id = await web3.getInt(collection, 'tokenOfOwnerByIndex(address,uint256)', owner, index)
    }
    else {
      try {
        id = await web3.getInt(collection, 'tokenByIndex(uint256)', index)
      }
      catch {
        error = "tokenByIndex(uint256) failed"
      }
    }
    if (!id) return
    const tokenUri = await web3.getString(collection, 'tokenURI(uint256)', id)
    if (!owner) owner = await web3.getAddress(collection, 'ownerOf(uint256)', id)
    if (!metadata) metadata = await fetch(tokenUri).then(res => res.json())
    if (!title) title = metadata.title || metadata.name || metadata.memo
    loaded = true
  })

  function ipfs(url) {
    return url.replace('ipfs://','https://ipfs.infura.io/')
  }
</script>

<div class="nft col-xs-4">
  {#if error}
    <div class="box">{error}</div>
  {:else if loaded}
    <a class="box" href="/collections/{collection}/{id}">
      <img src="{ipfs(metadata.image)}" alt="{title}"><br>
      <div class="title">
        {title}
      </div>
    </a>
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
    
    position: relative;
  }
  .box img {
    max-width: 100%;
    max-height: 100%;
  }
  .box .title {
    text-align: center;
  }
</style>