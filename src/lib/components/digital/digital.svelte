<script>
  import { onMount } from "svelte";
  import digi01 from '$lib/assets/digi01.webp'
  import digi02 from '$lib/assets/digi02.webp'
  import pcJoao from '$lib/assets/pcJoao.webp'
  import pcGui from '$lib/assets/pcGui.webp'
  import pcOcta from '$lib/assets/pcOcta.webp'

  
  // Lista de imagens que você quer trocar ao rolar a página
  const images = [
    digi01,
    digi02,
    pcJoao,
    pcGui,
    pcOcta
  ];

  let currentImage = images[0];  // A imagem inicial

  // Função para lidar com a mudança de imagem
  const changeImage = (index) => {
    currentImage = images[index];
  };

  onMount(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index'), 10);
          changeImage(index);
        }
      });
    }, options);

    // Observa os títulos
    const targets = document.querySelectorAll('.digiText');
    targets.forEach(target => observer.observe(target));
  });
</script>

<section class="digitalSection md:flex justify-between">
  <div class="md:w-2/5 md:sticky md:top-10 self-start ">
    <h2 class="text-6xl">Contruimos o seu digital do zero</h2>
    <img src={currentImage} alt="Imagem aleatória" class="w-full  max-w-[75%] mx-auto mt-10 rounded-xl" />
  </div>

  <div class="text md:w-2/5 mt-40 pb-32">
    <p class="digiText" data-index="0" >Na Void Agency, transformamos ideias em presença digital de impacto! 🚀 Da criação de sites modernos e lojas virtuais a estratégias de tráfego pago e identidade visual marcante.</p>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <p class="digiText" data-index="1" >Aqui acreditamos que cada projeto começa ouvindo. Primeiro, entendemos suas dores e metas, depois traçamos estratégias personalizadas.</p>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <p class="digiText" data-index="2" >Apresentamos as soluções personalizadas. Se necessário, ajustamos tudo em parceria com você para garantir que o resultado final esteja alinhado com o esperado!</p>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <p class="digiText" data-index="3" >A Void segue com o desenvolvimento completo, aplicando práticas de performance e acessibilidade para garantir uma experiência digital de alto nível.</p>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <p class="digiText" data-index="4" >Tambem cuidamos da publicação do projeto e oferecemos suporte contínuo, garantindo a manutenção e a evolução do seu ambiente digital.</p>
    <br /><br />
    <a href="http://" target="_blank" rel="noopener noreferrer" class="btn bg-[#8C3BF0] px-8 py-4 rounded-xl mt-10 w-fit mx-auto block font-bold text-lg">Falar com um especialista</a>

  </div>
</section>

