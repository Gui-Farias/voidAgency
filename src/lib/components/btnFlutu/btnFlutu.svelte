<script>
  import { t, locale } from 'svelte-i18n';

let showButtons = false;

  function toggleButtons() {
    showButtons = !showButtons;
  }
</script>

<style>
  /* Estilo para o botão flutuante principal */
  .floating-button {
    position: fixed;
    right: 2vw;
    bottom: 6.5vh;
    transform: translateY(-50%);
    background-color: #8C3BF0;
    color: white;
    border: none;
    border-radius: 50%;
    width: 68px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    z-index: 10000;
  }

  /* Botões extras */
  .extra-buttons {
    position: fixed;
    right: 2vw;
    bottom: 5vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 10000;
  }

  .extra-buttons button,
  .extra-buttons a {
    background-color: #fff;
    color: #8C3BF0;
    border: none;
    border-radius: 9999px;
    padding: 9px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    z-index: 10000;
  }

.extra-buttons a:nth-child(1) {
  right: -15px;
  bottom: 128px;
}
.extra-buttons a:nth-child(2) {
  right: 50px;
  bottom: 110px;
}
.extra-buttons a:nth-child(3) {
  right: 78px;
  bottom: 48px;
}
.extra-buttons button:nth-child(4) {
  right: 50px;
  bottom: -15px;
}
.extra-buttons button:nth-child(5) {
  right: -15px;
  bottom: -30px;
}
/* @media (min-width: 768px) {
  .extra-buttons button:nth-child(5) {
  transform: translate(3vw, 30px);
}
} */
</style>

<div>
  <!-- Botão Flutuante -->
  <button class="floating-button " on:click={toggleButtons} aria-label="Abrir Menu">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M1 2h21v16h-8l-8 4v-4H1zm5 8h1v1H6zm5 0h1v1h-1zm5 0h1v1h-1z"/></svg>
  </button>

  <!-- Botões Adicionais -->
  {#if showButtons}
    <div class="extra-buttons">
      <a href="https://www.instagram.com/_void_agency/" target="_blank" rel="noopener noreferrer" aria-label="Contato pelo WhatsApp">
        <svg width="44" height="44" viewBox="0 0 64 63" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M61.2255 30.6231C61.2255 22.3083 61.1909 21.2636 61.0422 17.9961C60.8934 14.7373 60.3745 12.5129 59.6169 10.5652C58.8474 8.52315 57.6448 6.67199 56.0917 5.13903C54.5606 3.58285 52.7089 2.37874 50.6655 1.61038C48.7213 0.849297 46.4899 0.330378 43.2346 0.181622C39.9689 0.0345946 38.9224 0 30.611 0C22.2945 0 21.2532 0.0345946 17.9926 0.183351C14.7304 0.332108 12.5059 0.851027 10.5617 1.60865C8.51685 2.37514 6.66429 3.57948 5.13384 5.1373C3.57629 6.66865 2.37098 8.52087 1.60173 10.5652C0.844108 12.5129 0.328649 14.7373 0.183351 17.9978C0.0345946 21.2636 0 22.3083 0 30.6249C0 38.9397 0.0345946 39.9827 0.183351 43.2519C0.328649 46.5107 0.844108 48.7351 1.60173 50.6828C2.37036 52.7269 3.57577 54.5787 5.13384 56.109C6.66429 57.6668 8.51685 58.8711 10.5617 59.6376C12.5059 60.397 14.7304 60.9159 17.9926 61.0646C21.2549 61.2134 22.2945 61.248 30.611 61.248C38.9241 61.248 39.9689 61.2134 43.2346 61.0646C46.4899 60.9159 48.7213 60.397 50.6655 59.6376C52.7089 58.8693 54.5606 57.6651 56.0917 56.109C57.6454 54.5766 58.8482 52.7253 59.6169 50.6828C60.3745 48.7351 60.8934 46.5107 61.0422 43.2502C61.1909 39.9844 61.2255 38.9397 61.2255 30.6231ZM46.3325 30.6231C46.3325 39.3098 39.2925 46.3516 30.611 46.3516C21.9312 46.3516 14.8878 39.3098 14.8878 30.6231C14.8878 21.9399 21.9312 14.8964 30.611 14.8964C39.2943 14.8964 46.3325 21.9382 46.3325 30.6231ZM50.6275 14.2772C50.6277 15.2516 50.2408 16.1862 49.552 16.8753C48.8632 17.5645 47.9288 17.9518 46.9544 17.952C45.98 17.9522 45.0454 17.5654 44.3563 16.8765C43.6671 16.1877 43.2798 15.2533 43.2796 14.2789C43.2793 13.3045 43.6662 12.37 44.355 11.6808C45.0439 10.9916 45.9783 10.6043 46.9526 10.6041C47.927 10.6039 48.8616 10.9907 49.5508 11.6796C50.2399 12.3684 50.6272 13.3028 50.6275 14.2772ZM40.8164 30.6231C40.8164 29.2827 40.5524 27.9554 40.0395 26.717C39.5265 25.4786 38.7747 24.3534 37.8268 23.4056C36.879 22.4578 35.7538 21.7059 34.5154 21.193C33.277 20.68 31.9497 20.416 30.6093 20.416C29.2689 20.416 27.9416 20.68 26.7032 21.193C25.4648 21.7059 24.3396 22.4578 23.3918 23.4056C22.4439 24.3534 21.6921 25.4786 21.1791 26.717C20.6662 27.9554 20.4022 29.2827 20.4022 30.6231C20.4022 33.3302 21.4776 35.9265 23.3918 37.8407C25.306 39.7549 27.9022 40.8303 30.6093 40.8303C33.3164 40.8303 35.9126 39.7549 37.8268 37.8407C39.741 35.9265 40.8164 33.3302 40.8164 30.6231Z" />
        </svg>
      </a>
      <a href="https://api.whatsapp.com/send?phone=5511910529070&text=Olá,%20estou%20vindo%20do%20seu%20site%20e%20gostaria%20..." target="_blank" rel="noopener noreferrer" aria-label="Contato pelo Insta">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path fill="currentColor" d="M21.99 6.547a11 11 0 0 0-.103-1.282a4.3 4.3 0 0 0-.363-1.09A3.85 3.85 0 0 0 19.83 2.48a4.3 4.3 0 0 0-1.083-.362a11 11 0 0 0-1.292-.105c-.183-.007-.42-.01-.53-.01L7.077 2c-.11 0-.347.003-.53.01a11 11 0 0 0-1.282.103a4.3 4.3 0 0 0-1.09.363A3.85 3.85 0 0 0 2.48 4.17a4.3 4.3 0 0 0-.362 1.083a11 11 0 0 0-.106 1.292c-.006.183-.01.42-.01.53L2 16.923c0 .11.003.347.01.53a11 11 0 0 0 .103 1.282a4.3 4.3 0 0 0 .363 1.09A3.85 3.85 0 0 0 4.17 21.52a4.3 4.3 0 0 0 1.083.362a11 11 0 0 0 1.292.105c.183.007.42.01.53.01l9.848.002c.11 0 .347-.003.53-.01a11 11 0 0 0 1.282-.103a4.3 4.3 0 0 0 1.09-.363a3.85 3.85 0 0 0 1.696-1.694a4.3 4.3 0 0 0 .362-1.083a11 11 0 0 0 .106-1.292c.006-.183.01-.42.01-.53L22 7.077c0-.11-.003-.347-.01-.53m-9.773 12.41h-.003a7.1 7.1 0 0 1-3.407-.868l-3.78.991l1.012-3.693a7.13 7.13 0 1 1 6.178 3.57"/><path fill="currentColor" d="M12.22 5.901a5.927 5.927 0 0 0-5.023 9.076l.141.224l-.599 2.186l2.243-.588l.216.128a5.9 5.9 0 0 0 3.016.826h.003A5.926 5.926 0 0 0 12.219 5.9Zm3.484 8.47a1.83 1.83 0 0 1-1.202.847a2.44 2.44 0 0 1-1.122-.07a10 10 0 0 1-1.015-.376a7.94 7.94 0 0 1-3.043-2.689a3.46 3.46 0 0 1-.728-1.842a2 2 0 0 1 .624-1.485a.66.66 0 0 1 .475-.223c.118 0 .237 0 .341.006c.11.005.256-.042.4.306c.15.356.506 1.233.55 1.322a.33.33 0 0 1 .015.312a1.2 1.2 0 0 1-.178.297c-.09.104-.187.232-.267.312c-.09.089-.182.185-.079.363a5.4 5.4 0 0 0 .991 1.234a4.9 4.9 0 0 0 1.433.884c.178.09.282.074.386-.045s.445-.52.564-.698s.237-.148.4-.089s1.04.49 1.218.58s.297.133.341.207a1.5 1.5 0 0 1-.104.847"/></svg>
      </a>
      <a href="mailto:contato@voidagency.com.br" aria-label="Contato pelo Email">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 20 20"><path fill="currentColor" d="M19 14.5v-9c0-.83-.67-1.5-1.5-1.5H3.49c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5H17.5c.83 0 1.5-.67 1.5-1.5m-1.31-9.11c.33.33.15.67-.03.84L13.6 9.95l3.9 4.06c.12.14.2.36.06.51c-.13.16-.43.15-.56.05l-4.37-3.73l-2.14 1.95l-2.13-1.95l-4.37 3.73c-.13.1-.43.11-.56-.05c-.14-.15-.06-.37.06-.51l3.9-4.06l-4.06-3.72c-.18-.17-.36-.51-.03-.84s.67-.17.95.07l6.24 5.04l6.25-5.04c.28-.24.62-.4.95-.07"/></svg>
      </a>
      <button on:click={() => ($locale = 'pt')} aria-label="language pt-BR" lang="pt-BR">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 512 512"><mask id="circleFlagsBr0"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#circleFlagsBr0)"><path fill="#6da544" d="M0 0h512v512H0z"/><path fill="#ffda44" d="M256 100.2L467.5 256L256 411.8L44.5 256z"/><path fill="#eee" d="M174.2 221a87 87 0 0 0-7.2 36.3l162 49.8a88.5 88.5 0 0 0 14.4-34c-40.6-65.3-119.7-80.3-169.1-52z"/><path fill="#0052b4" d="M255.7 167a89 89 0 0 0-41.9 10.6a89 89 0 0 0-39.6 43.4a181.7 181.7 0 0 1 169.1 52.2a89 89 0 0 0-9-59.4a89 89 0 0 0-78.6-46.8M212 250.5a149 149 0 0 0-45 6.8a89 89 0 0 0 10.5 40.9a89 89 0 0 0 120.6 36.2a89 89 0 0 0 30.7-27.3A151 151 0 0 0 212 250.5"/></g></svg>
      </button>
      <button on:click={() => ($locale = 'en')} aria-label="language en" lang="en">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 512 512"><mask id="circleFlagsGb0"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#circleFlagsGb0)"><path fill="#eee" d="m0 0l8 22l-8 23v23l32 54l-32 54v32l32 48l-32 48v32l32 54l-32 54v68l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0l-22 8l-23-8h-23l-54 32l-54-32h-32l-48 32l-48-32h-32l-54 32L68 0z"/><path fill="#0052b4" d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"/><path fill="#d80027" d="M0 0v45l131 131h45zm208 0v208H0v96h208v208h96V304h208v-96H304V0zm259 0L336 131v45L512 0zM176 336L0 512h45l131-131zm160 0l176 176v-45L381 336z"/></g></svg>
      </button>
    </div>
  {/if}
</div>