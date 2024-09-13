<script lang="ts">
  import { startCount, volumeStats } from '$lib/settings';
  import { parseTime } from "$lib/util/time";
</script>

<button
  class="mix-blend-difference z-10 fixed opacity-50 right-20 top-5 p-10 m-[-2.5rem]"
>
  <p>
    Minutes read: {parseTime($volumeStats?.timeReadInMinutes ?? 0)}
  </p>
</button>
