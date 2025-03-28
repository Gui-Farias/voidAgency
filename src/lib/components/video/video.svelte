<script>
  import videoPc from '$lib/assets/voidAgencyMkt.mp4'
</script>


<section class="flex justify-center my-44">
  <video controls playsinline class="w-full max-h-[80vh] rounded-2xl shadow-lg mx-auto">
    <!-- <source src={joaoVideoMobile} type="video/mp4" media="(max-width: 768px)" /> -->
    <!-- <source src={joaoVideoMobileWeb} type="video/webm" media="(max-width: 768px)" /> -->
    <source src={videoPc} type="video/mp4" />
    <!-- <source src={joaoVideoWeb} type="video/webm" /> -->
    <track kind="captions" src="" srclang="pt" label="PT" />
    Seu navegador não suporta vídeos.
  </video>
</section>
