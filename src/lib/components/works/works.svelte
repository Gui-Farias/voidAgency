<script>
  import pcDani from '$lib/assets/pcDani.webp'
  import pcJoao from '$lib/assets/pcJoao.webp'
  import pcGui from '$lib/assets/pcGui.webp'
  import pcOcta from '$lib/assets/pcOcta.webp'
  import phoneDani from '$lib/assets/daniPhone.webp'
  import phoneJoao from '$lib/assets/joaoPhone.webp'
  import phoneGui from '$lib/assets/guiPhone.webp'
  import phoneOcta from '$lib/assets/octaPhone.webp'
  import Work from '$lib/atoms/work/work.svelte';

  import { onMount } from "svelte";

  let works = [
    { title: "Psicóloga Daniela Alves", link: 'https://danielapsicologia.com.br', imgDesk: pcDani, imgPhone: phoneDani, text: 'A saúde mental é muito importante e algo que todos nós precisamos. Este site é o primeiro passo para você agendar uma conversa com a psicóloga Daniela Alves.'},
    { title: "Joao Goes nutricionista", link: 'https://joao-goes.vercel.app',  imgDesk: pcJoao, imgPhone: phoneJoao, text: 'Crie planos alimentares para alcançar a sua saúde e corpo dos sonhos, conte com o João Goes nutricionista para te orientar e acompanhar nessa jornada.'},
    { title: "Octa Estúdio", link: 'https://octa-estudio.vercel.app', imgDesk: pcOcta, imgPhone: phoneOcta, text: 'Com o principal objetivo de dar espaço para novos artistas e contribuir para o crescimento de artistas independentes, Octa estúdio foi criada e está pronta para te ajudar!'},
    { title: "Gui Farias", link: 'https://guifarias.com.br', imgDesk: pcGui, imgPhone: phoneGui, text: 'Criar um portfólio online onde você possa mostrar seus trabalhos e serviços é sempre uma boa opção para encontrar um emprego ou atrair novos clientes.'}
  ];

  // Função para embaralhar o array
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  onMount(() => {
    works = shuffle(works);
  });
</script>


<section class="flex flex-col gap-20 md:gap-52 max-w-6xl pb-72 lg:pb-0">
  <h2 class="-mt-14 md:-mb-24">Projetos</h2>
  {#each works as work, index}
    <Work reverse={index % 2 === 1} title={work.title} link={work.link} imgDesk={work.imgDesk} imgPhone={work.imgPhone} text={work.text} />      
  {/each}
</section>
