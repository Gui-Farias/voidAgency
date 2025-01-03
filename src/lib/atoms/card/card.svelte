<script>
  export let title = "";
  export let text = "";
</script>

<div class="card max-w-60 bg-slate-400 rounded-xl px-2 py-4">
  <div class="flex items-center gap-4 mb-3">
    <img src="https://picsum.photos/80/80" alt="Imagem aleatória" />
    <h3>{title}</h3>
  </div>
  <p>{text}</p>
</div>
