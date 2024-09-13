<script lang="ts">
  import { page } from '$app/stores';
  import Reader from '$lib/components/Reader/Reader.svelte';
  import Timer from '$lib/components/Reader/Timer.svelte';
  import { initializeVolume, isActive, settings, startCount, volumeSettings, volumes } from '$lib/settings';
  import { onMount } from 'svelte';

  const volumeId = $page.params.volume;
  let count: undefined | number = undefined;
  let yomitanOpen = false;

  onMount(() => {
    if (!$volumes?.[volumeId]) {
      initializeVolume(volumeId);
    }

    count = startCount(volumeId);


    function updateFocus() {
      isActive.set(document.hasFocus());
    }
    window.addEventListener("message", function(event) {
      if (event.source !== window || event.data.source !== "YOMITAN") return
      const type = event.data.type

      if (type === "visible") yomitanOpen = true
      else if (type === "hidden") yomitanOpen = false
  });

    // Attach event listeners to track focus and blur events
    window.addEventListener('focus', () => {
      isActive.set(true);
    });
    window.addEventListener('blur', () => {
      if (yomitanOpen) return
      isActive.set(false);
    });
    document.addEventListener('visibilitychange', () => updateFocus());

    // Initialize the focus state
    updateFocus();

    return () => {
      clearInterval(count);
      count = undefined;
    };
  });
</script>

{#if $volumeSettings[volumeId]}
  {#if $settings.showTimer}
    <Timer bind:count {volumeId} />
  {/if}
  <Reader volumeSettings={$volumeSettings[volumeId]} />
{/if}
