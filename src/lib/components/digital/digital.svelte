<script>
  import { onMount } from "svelte";
  import { t } from 'svelte-i18n';

  import digi01 from '$lib/assets/digi01.svg'
  import digi02 from '$lib/assets/digi02.svg'
  import digi03 from '$lib/assets/digi03.svg'
  import digi04 from '$lib/assets/digi04.svg'
  import digi05 from '$lib/assets/digi05.svg'

  const images = [digi01, digi02, digi03, digi04, digi05];
  let currentImage = images[0];  
  let isVisible = null;
  let elements = [];

  const changeImage = (index) => {
    currentImage = images[index];
  };

 onMount(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: isDesktop ? 0.8 : 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute('data-index'), 10);
        if (entry.isIntersecting) {
          isVisible = index;
          if (isDesktop) {
            changeImage(index);
          }
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));
  });
</script>

<section class="md:flex md:justify-between lg:justify-evenly -mt-20">
  <div class="md:w-3/5 lg:w-2/5 md:sticky md:top-[14vh] self-start ">
    <h2>{$t('about.title')}</h2>
    <img src={currentImage} alt="" aria-hidden="true" class="w-full transition-all max-w-sm mx-auto mt-[10vh] rounded-xl" />
  </div>


  <div class="text md:w-2/5 mt-40 md:pb-32">
    {#each [0, 1, 2, 3, 4] as index}
      <p bind:this={elements[index]} class="digiText transition-all pt-[10vh] pb-[20vh]  {index == 0 && 'pt-0'} {index == 4 && 'pb-0'}" data-index={index}
         class:opacity-100={isVisible === index} class:opacity-0={isVisible !== index}>
        {$t(`about.text${index + 1}`)}
      </p>
      {#if index == 4} 
        <a href="https://api.whatsapp.com/send?phone=5511910529070&text=Olá,%20estou%20vindo%20do%20seu%20site%20e%20gostaria%20..." target="_blank" rel="noopener noreferrer" class:opacity-100={isVisible === index} class:opacity-0={isVisible !== index} class="btn block">{$t('btn.especialista')}</a>
      {/if}
    {/each}
  </div>


  <!-- <div class="text md:w-2/5 mt-40 md:pb-32">
    <p class="digiText transition-all opacity-100 pb-[25vh]" data-index="0" >{$t('about.text1')}</p>
    <p class="digiText transition-all opacity-0 pt-[12vh] pb-[15vh]" data-index="1" >{$t('about.text2')}</p>
    <p class="digiText transition-all opacity-0 pt-[10vh] pb-[15vh]" data-index="2" >{$t('about.text3')}</p>
    <p class="digiText transition-all opacity-0 pt-[12vh] pb-[20vh]" data-index="3" >{$t('about.text4')}</p>
    <div class="digiText transition-all opacity-0 md:pb-14" data-index="4">
      <p>{$t('about.text5')}</p>
      <a href="https://api.whatsapp.com/send?phone=5511910529070&text=Olá,%20estou%20vindo%20do%20seu%20site%20e%20gostaria%20..." target="_blank" rel="noopener noreferrer" class="btn block">{$t('btn.especialista')}</a>
    </div>
  </div> -->
</section>

<style>
.opacity-0 {
  opacity: 0;
  filter: blur(10px); 
  transition: opacity 0.6s ease-in-out, filter 0.6s ease-in-out;
}

.opacity-100 {
  opacity: 1;
  filter: blur(0px); 
  transition: opacity 0.6s ease-in-out, filter 0.6s ease-in-out;
}
</style>


