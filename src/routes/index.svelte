<script>
  import collections from '../collections'
</script>

<div class="container">
  <h1>Trade on<br>the cheap seas</h1>

  <h2>Featured collections</h2>
  {#each Object.keys(collections) as address}
    <a href='/collections/{address}'>{collections[address].name}</a>
  {/each}

</div>

<img alt="Captain Poop" src="/ocean.jpg">


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
