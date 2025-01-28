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

<style>
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }

  .error-title {
    font-size: 2rem;
    color: #ff6b6b;
  }

  .error-message {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
</style>

<div class="error-container">
  <h1 class="error-title">Essa pagina não existe!</h1>
  <p class="error-message">Você será redirecionado em breve...</p>
</div>