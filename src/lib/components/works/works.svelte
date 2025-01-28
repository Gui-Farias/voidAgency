<script>
  import { t, json } from 'svelte-i18n';
  import Work from '$lib/atoms/work/work.svelte';

  // Função para embaralhar o array
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
</script>


<section class="flex flex-col gap-20 md:gap-52 max-w-6xl pb-72 lg:pb-0">
  <h2 class="-mt-14 md:-mb-24">{$t('work.title')}</h2>
  {#each shuffle($json('work.proj') || []) as work, index}
    <Work reverse={index % 2 === 1} title={work.title} link={work.link} imgDesk={work.imgDesk} imgPhone={work.imgPhone} text={work.text} />      
  {/each}
</section>
