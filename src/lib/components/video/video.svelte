<script>
  import videoPc from '$lib/assets/voidAgency.mp4'
  import videoPcWeb from '$lib/assets/voidAgency.webm'
  import videoCel from '$lib/assets/voidAgencyMobile.mp4'
  import videoCelWeb from '$lib/assets/voidAgencyMobile.webm'
  import poster from '$lib/assets/poster.webp'

  import { onMount } from "svelte";
</script>

<section class="flex justify-center my-44">
  <video controls poster={poster} playsinline class="w-full max-h-[80vh] rounded-2xl shadow-lg mx-auto">
    <source src={videoCel} type="video/mp4" media="(max-width: 640px)" />
    <source src={videoCelWeb} type="video/webm" media="(max-width: 640px)" />
    <source src={videoPc} type="video/mp4" />
    <source src={videoPcWeb} type="video/webm" />
    <track kind="captions" src="" srclang="pt" label="PT" />
    Seu navegador não suporta vídeos.
  </video>
</section>