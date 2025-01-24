<script>
  export let title = "";
  export let text = "";
  export let imgDesk = "";
  export let imgPhone = "";
  export let link = "";
  export let reverse = false;
</script>


{#if reverse}
<div class="work flex flex-col-reverse md:flex-row items-center gap-2 lg:gap-24">
  <div class="relative md:w-1/2 lg:w-2/5 mt-8 md:mt-0">
    <img src={imgPhone} alt="Imagem aleatória" class="max-w-[33%] md:max-w-[50%] lg:max-w-64 max-h-80 mx-auto absolute bottom-[5vh] -left-[2vw] md:-bottom-24 md:-left-10" />
    <img src={imgDesk} alt="Imagem aleatória" class="max-w-lg mx-auto w-full" />
    <a href={link} target="_blank" rel="noopener noreferrer" class="btn absolute bottom-0 -right-10 block md:hidden">Visitar o site</a>
  </div>
  <div class="md:w-1/2 lg:w-3/5">
    <h3 class="mb-6">{title}</h3>
    <p>{text} </p>
    <a href={link} target="_blank" rel="noopener noreferrer" class="btn hidden md:block">Visitar o site</a>
  </div>
</div>
{:else}
<div class="work flex flex-col md:flex-row items-center gap-2 lg:gap-24">
  <div class="md:w-1/2 lg:w-3/5">
    <h3 class="mb-6">{title}</h3>
    <p>{text}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" class="btn hidden md:block">Visitar o site</a>
  </div>
  <div class="relative md:w-1/2 lg:w-2/5 mt-8 md:mt-0">
    <img src={imgPhone} alt="Imagem aleatória" class="max-w-[33%] md:max-w-[50%] lg:max-w-64 max-h-80 mx-auto absolute bottom-[5vh] -left-[2vw] md:-bottom-24 md:-right-10" />
    <img src={imgDesk} alt="Imagem aleatória" class="max-w-lg mx-auto w-full" />
    <a href={link} target="_blank" rel="noopener noreferrer" class="btn absolute bottom-0 -right-10 block md:hidden">Visitar o site</a>
  </div>
</div>
{/if}


