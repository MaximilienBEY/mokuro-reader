<script lang="ts">
  import { totalStats } from '$lib/settings';
  import { parseTime } from "$lib/util/time";
  import { AccordionItem } from 'flowbite-svelte';
</script>

<AccordionItem>
  <span slot="header">Stats</span>
  <div>
    <p>Completed volumes: {$totalStats?.completed || 0}</p>
    <p>Pages read: {$totalStats?.pagesRead || 0}</p>
    <p>Characters read: {$totalStats?.charsRead || 0}</p>
    <p>Minutes read: {parseTime($totalStats?.minutesRead || 0)}</p>
  </div>
</AccordionItem>
