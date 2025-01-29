<script>
  import { t, json } from 'svelte-i18n';
  import Card from "$lib/atoms/card/card.svelte";

  // Função para embaralhar o array
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

</script>

<section class="mt-24">
  <h2>{$json('services.title')}</h2>

  <div class="md:columns-2 lg:columns-3 mt-24">
    {#each shuffle($json('services.list') || []) as service, index}
      <Card title={service.title} text={service.text} >
        {@html service.img}
      </Card>
    {/each}
  </div>
</section>

