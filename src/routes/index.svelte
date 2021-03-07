<script>
  import collections from '../collections'
  import { goto } from '@sapper/app';

  let address
</script>

<div class="container">
  <h1>Trade on<br>the cheap seas</h1>

  <div class="form">
    <input bind:value={address} placeholder="Paste Address"><button disabled={!address} on:click={() => goto(`/collections/${address}`)}>Browse</button>
  </div>

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

  button {
    padding: 12px 24px;
  }
  input {
    padding: 12px;
    width: 300px;
  }
  .form {
    margin-bottom: 2em;
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
