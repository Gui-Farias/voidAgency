<script>
  import { t } from 'svelte-i18n';
  import impacto from '$lib/assets/impacto.webp'
</script>

<section class="md:flex justify-between items-center gap-8 mt-24 mb-44">
  <div class="text md:w-1/2 relative px-4">
    <h3 class="mb-8 md:mb-6">{$t('impact.title')}</h3>
    <p>{$t('impact.text')}</p>
    <div class="absolute right-1/2 -bottom-24 translate-x-1/2">
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" class="animate-bounceDown">
        <path d="M12 16L6 10H18L12 16Z" fill="currentColor" />
        <rect x="11" y="0" width="2" height="12" fill="currentColor" />
      </svg>
    </div>
  </div>

  <div class="md:w-1/2 max-w-lg hidden md:block">
    <img src={impacto} alt="Imagem aleatória" class="w-full mt-10 rounded-xl" />
  </div>

</section>
