<script>
  import { onMount } from 'svelte';

  // Redirecionar usando JavaScript puro
  onMount(() => {
    // Exemplo: Redirecionar para a página inicial após 3 segundos
    setTimeout(() => {
      window.location.href = '/'; // Altere para a rota desejada
    }, 1200);
  });
</script>

<div class="flex flex-col items-center justify-center h-screen text-center">
  <h1 class="text-[#ff6b6b] text-4xl">Essa pagina não existe!</h1>
  <p class="mt-4 text-xl">Você será redirecionado em breve...</p>
</div>