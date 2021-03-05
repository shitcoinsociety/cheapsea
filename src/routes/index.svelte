<script>
  import collections from '../collections'
</script>

<div class="container">
<h1>Join us on the cheap seas</h1>

<h2>The first NFT browser for Ethereum's cheapnet.</h2>
</div>

<img alt="Captain Poop" src="/ocean.jpg">

<div class="container">
  <h2>Featured collections</h2>
  {#each Object.keys(collections) as address}
  <a href='/collections/{address}'>{collections[address].name}</a>
  {/each}
</div>

<style>
  .container {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  img {
    width: 100%;

    margin: 0 0 1em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
