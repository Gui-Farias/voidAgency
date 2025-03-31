<script>
  import { t } from 'svelte-i18n';
  import { onMount } from "svelte";

  import digi01 from '$lib/assets/digi01.svg'
  import digi02 from '$lib/assets/digi02.svg'
  import digi03 from '$lib/assets/digi03.svg'
  import digi04 from '$lib/assets/digi04.svg'
  import digi05 from '$lib/assets/digi05.svg'

  
  // Lista de imagens que você quer trocar ao rolar a página
  const images = [
    digi01,
    digi02,
    digi03,
    digi04,
    digi05,
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
    threshold: .8, // O elemento precisa estar 100% visível
  };

  let lastVisibleIndex = null; // Rastreia o último elemento visível

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const index = parseInt(entry.target.getAttribute('data-index'), 10);

      if (entry.isIntersecting) {
        // Quando o elemento fica visível
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0');

        // Se existir um elemento anteriormente visível, remova sua opacidade
        if (lastVisibleIndex !== null && lastVisibleIndex !== index) {
          const previousElement = document.querySelector(`[data-index="${lastVisibleIndex}"]`);
          if (previousElement) {
            previousElement.classList.remove('opacity-100');
            previousElement.classList.add('opacity-0');
          }
        }

        // Atualize o índice do último elemento visível
        lastVisibleIndex = index;


        if(window.matchMedia("(min-width: 768px)").matches) {
          changeImage(index);
        }
      }
    });
  }, options);

    // Observa os títulos
    const targets = document.querySelectorAll('.digiText');
    targets.forEach(target => observer.observe(target));
});
</script>

<section class="md:flex md:justify-between lg:justify-evenly">
  <div class="md:w-3/5 lg:w-2/5 md:sticky md:top-[14vh] self-start ">
    <h2>{$t('about.title')}</h2>
    <img src={currentImage} alt="" aria-hidden="true" class="w-full transition-all max-w-sm mx-auto mt-[10vh] rounded-xl" />
  </div>

  <div class="text md:w-2/5 mt-40 md:pb-32">
    <p class="digiText transition-all opacity-100 pb-[25vh]" data-index="0" >{$t('about.text1')}</p>
    <p class="digiText transition-all opacity-0 pt-[12vh] pb-[15vh]" data-index="1" >{$t('about.text2')}</p>
    <p class="digiText transition-all opacity-0 pt-[10vh] pb-[15vh]" data-index="2" >{$t('about.text3')}</p>
    <p class="digiText transition-all opacity-0 pt-[12vh] pb-[20vh]" data-index="3" >{$t('about.text4')}</p>
    <div class="digiText transition-all opacity-0 md:pb-14" data-index="4">
      <p>{$t('about.text5')}</p>
      <a href="https://api.whatsapp.com/send?phone=5511910529070&text=Olá,%20estou%20vindo%20do%20seu%20site%20e%20gostaria%20..." target="_blank" rel="noopener noreferrer" class="btn block">{$t('btn.especialista')}</a>
    </div>
  </div>
</section>

<style>
  /* Estilo inicial: invisível com blur */
.opacity-0 {
  opacity: 0;
  filter: blur(10px); /* Aplica o blur inicial */
  transition: opacity 0.6s ease-in-out, filter 0.6s ease-in-out; /* Transição suave */
}

/* Estilo final: visível sem blur */
.opacity-100 {
  opacity: 1;
  filter: blur(0px); /* Remove o blur */
  transition: opacity 0.6s ease-in-out, filter 0.6s ease-in-out; /* Transição suave */
}
</style>