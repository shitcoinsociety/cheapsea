<script context="module">
  import web3 from '../../../web3'
  

</script>

<script>
  import { stores } from '@sapper/app';
  import { onMount }from 'svelte'
  
  const { page } = stores();

  onMount(() => {
    
  })

</script>

Showing collection {$page.params.collection}
<br><br>
Coming soon....