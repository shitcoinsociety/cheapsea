<script>
  import { stores } from '@sapper/app';
  const { page } = stores();
</script>

Address: {$page.params.collection}
ID: {$page.params.id}