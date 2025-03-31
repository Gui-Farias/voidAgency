<script>
  import videoPc from '$lib/assets/voidAgency.mp4'
  import videoPcWeb from '$lib/assets/voidAgency.webm'
  import videoCel from '$lib/assets/voidAgencyMobile.mp4'
  import videoCelWeb from '$lib/assets/voidAgencyMobile.webm'

  import { onMount } from "svelte";
  let isTouchDevice = false;
  let isMobile = false;

  onMount(() => {
    isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    isMobile = window.matchMedia("(max-width: 768px)").matches;
  });

</script>

<section class="flex justify-center mt-28 mb-44">
<video controls playsinline class="w-full max-h-[80vh] rounded-2xl shadow-lg mx-auto">
  {#if isMobile}
    {#if isTouchDevice}
      <source src="{videoCel}" type="video/mp4" media="(max-width: 768px)" />
      <source src="{videoCelWeb}" type="video/webm" media="(max-width: 768px)" />
    {:else}
      <source src="{videoPc}" type="video/mp4" />
      <source src="{videoPcWeb}" type="video/webm" />
    {/if}
  {:else}
    <source src="{videoPc}" type="video/mp4" />
    <source src="{videoPcWeb}" type="video/webm" />
  {/if}

  <track kind="captions" src="" srclang="pt" label="PT" />
  Seu navegador não suporta vídeos.
</video>
</section>
