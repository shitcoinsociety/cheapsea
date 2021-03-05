<script>
  import collections from '../collections'
</script>

<h1>Everything is cheap</h1>

<figure>
  <img alt="yeah.png" src='yeah.png'>
  <figcaption>The first NFT browser for Ethereum cheapnet. Currently in development.</figcaption>
</figure>

<h2>Featured collections</h2>
{#each Object.keys(collections) as address}
<a href='/collections/{address}'>{collections[address].name}</a>
{/each}

<style>
  h1, figure {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
