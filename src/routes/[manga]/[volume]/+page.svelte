<script lang="ts">
  import { page } from '$app/stores';
  import Reader from '$lib/components/Reader/Reader.svelte';
  import Timer from '$lib/components/Reader/Timer.svelte';
  import { initializeVolume, isActive, settings, startCount, volumeSettings, volumes } from '$lib/settings';
  import { onMount } from 'svelte';

  const volumeId = $page.params.volume;
  let count: undefined | number = undefined;

  onMount(() => {
    if (!$volumes?.[volumeId]) {
      initializeVolume(volumeId);
    }

    count = startCount(volumeId);

    window.addEventListener("message", function(event) {
      if (event.source !== window || event.data.source !== "YOMITAN") return
      const type = event.data.type

      if (type === "window_active") isActive.set(true)
      else if (type === "window_inactive") isActive.set(false)
  });

    return () => {
      clearInterval(count);
      count = undefined;
    };
  });
</script>

{#if $volumeSettings[volumeId]}
  {#if $settings.showTimer}
    <Timer />
  {/if}
  <Reader volumeSettings={$volumeSettings[volumeId]} />
{/if}
