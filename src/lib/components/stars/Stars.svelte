<script>
    const starCount = 80; // Número de estrelas
    
    const stars = Array.from({ length: starCount }, () => ({
        size: Math.random() * 10 + 1, // Tamanho 
        top: Math.random() * 100,   // Posição vertical (%)
        left: Math.random() * 100,  // Posição horizontal (%)
    }));
</script>


<span class="fixed top-0 left-0 -z-10 w-screen h-screen overflow-hidden">
    {#each stars as star}
      <div class="star absolute bg-[#e6e6e6] opacity-0 rounded-full"style="width: {star.size}px; height: {star.size}px; top: {star.top}%; left: {star.left}%;"></div>
      <div class="star2 absolute bg-[#e6e6e6] rounded-full "style="width: {star.size}px; height: {star.size}px; top: calc({star.top}% + 2%); left: {star.left}%;"></div>

      <div class="star0-5 absolute bg-[#e6e6e6] opacity-0 rounded-full"style="width: calc({star.size}px + 2px); height: calc( {star.size}px + 2px); top: calc( {star.top}% + 3px); left: calc({star.left}% + 5px);"></div>
      <div class="star2-5 absolute bg-[#e6e6e6] rounded-full"style="width: calc({star.size}px + 2px); height: calc( {star.size}px + 2px); top: calc( {star.top}% + 3px); left: calc({star.left}% + 5px);"></div>
    {/each}
</span>
  
<style>
.star {
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    animation: animStar 120s linear infinite;
    transition: all;
}
.star2 {
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    animation: animStarStart 60s linear, animStar 120s linear 60s infinite;
    transition: all;
}

.star0-5 {
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    animation: animStar 60s linear infinite;
    transition: all;
}
.star2-5 {
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    animation: animStarStart 30s linear, animStar 60s linear 30s infinite;
    transition: all;
}


@keyframes animStar {
    0% {
      transform: translateY(100vh); /* Começa abaixo da tela */
      opacity: 0;
    }
    1%{
        opacity: 0.22;
    }
    100% {
      transform: translateY(-100vh); /* Sai pelo topo da tela */
      opacity: 0.22;
    }
}

@keyframes animStarStart {
0% {
    transform: translateY(0vh); /* Começa abaixo da tela */
    opacity: 0.22;
}
1%{
    opacity: 0.22;
}
100% {
    transform: translateY(-100vh); /* Sai pelo topo da tela */
    opacity: 0.22;
}
}

</style>