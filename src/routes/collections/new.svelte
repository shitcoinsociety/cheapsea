<script>
import wallet from '../../wallet'
import web3 from '../../web3'


let name = 'ERC1155'

function deploy() {
  const bytecode = fetch(`/eth/erc1155/bytecode?name=${name}&owner=0xBLABLABLA`)
  alert('Coming soon')
}

</script>

<div class="container">

<h1>New NFT Contract</h1>
<p>
  Here you can deploy your own ERC1155 contract to the network and download the source code for verification.
</p>

<p>
  Your own contract allows you to mint your own unique NFTs and sell them on any decentralized marketplace.
</p>

<p>
  Contract Name:
  <input bind:value={name}><br>
</p>

<button disabled={!name} on:click={deploy}>Deploy now</button>
<!--  or <a href="/eth/erc1155/source">download source code</a> -->
</div>