<script>
    import { onMount } from "svelte";

    let starCount = 80; 
    let stars = [];

    function updateStars() {
        starCount = window.innerWidth < 768 ? 40 : 80;
        stars = Array.from({ length: starCount }, () => ({
            size: Math.random() * 5 + 3,
            top: Math.random() * 100,  
            left: Math.random() * 100,  
            delay: Math.random() * 13
        }));
    }

    onMount(() => {
        updateStars();
        window.addEventListener("resize", updateStars);

        return () => window.removeEventListener("resize", updateStars);
    });
</script>

<span class="fixed top-0 left-0 -z-10 w-screen h-screen overflow-hidden">
    {#each stars as star}
      <div 
        class="star absolute bg-[#e6e6e6] rounded-full" 
        style="width: {star.size}px; height: {star.size}px; top: {star.top}%; left: {star.left}%; animation-delay: {star.delay}s;">
      </div>
    {/each}
</span>

<style>
.star {
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    animation: animStar 20s linear infinite;
    opacity: 0.35;
}

@keyframes animStar {
    0% {
        transform: translateY(100vh);
        opacity: 0.35;
    }
    100% {
        transform: translateY(-100vh);
        opacity: 0.35;
    }
}
</style>