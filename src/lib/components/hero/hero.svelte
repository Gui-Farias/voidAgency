<script>
    import Logo from '$lib/atoms/Logo/Logo.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    if (window.innerWidth > 640) {
      const canvas = document.getElementById('canvasTitle');
      if (!canvas) return;

      const ctx = canvas.getContext('2d');

      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Ajuste dinâmico do tamanho da fonte
      const baseFontSize = 172;
      const baseWidth = 1512;
      const fontSize = (canvas.width / baseWidth) * baseFontSize;

      // Classe Particle
      // svelte-ignore perf_avoid_nested_class
      class Particle {
        constructor(effect, x, y, color) {
          this.effect = effect;
          this.x = Math.random() * this.effect.canvasWidth;
          this.y = 0;
          this.color = color;
          this.originX = x;
          this.originY = y;
          this.size = this.effect.gap + 0.2;
          this.distanceX = 0;
          this.distanceY = 0;
          this.velocityX = 0;
          this.velocityY = 0;
          this.force = 0;
          this.angle = 0;
          this.distance = 0;
          this.friction = Math.random() * 0.6 + 0.15;
          this.ease = Math.random() * 0.1 + 0.005;
        }

        draw() {
          this.effect.context.fillStyle = this.color;
          this.effect.context.fillRect(this.x, this.y, this.size, this.size);
        }

        update() {
          this.distanceX = this.effect.mouse.x - this.x;
          this.distanceY = this.effect.mouse.y - this.y;
          this.distance = this.distanceX * this.distanceX + this.distanceY * this.distanceY;
          this.force = -this.effect.mouse.radius / this.distance;

          if (this.distance < this.effect.mouse.radius) {
            this.angle = Math.atan2(this.distanceY, this.distanceX);
            this.velocityX += this.force * Math.cos(this.angle);
            this.velocityY += this.force * Math.sin(this.angle);
          }

          this.x += (this.velocityX *= this.friction) + (this.originX - this.x) * this.ease;
          this.y += (this.velocityY *= this.friction) + (this.originY - this.y) * this.ease;
        }
      }


      // svelte-ignore perf_avoid_nested_class
      // Classe Effect
      class Effect {
        constructor(context, canvasWidth, canvasHeight) {
          this.context = context;
          this.canvasWidth = canvasWidth;
          this.canvasHeight = canvasHeight;
          this.titleX = this.canvasWidth / 2;
          this.titleY = this.canvasHeight / 2;
          this.particles = [];
          this.gap = 4;
          this.mouse = { radius: 2500, x: 0, y: 0 };

          window.addEventListener('mousemove', (e) => {
            if (!canvas) return;
            this.mouse.x = e.x - canvas.getBoundingClientRect().x;
            this.mouse.y = e.y - canvas.getBoundingClientRect().y;
          });
        }

        drawTitle(title) {
          this.context.fillStyle = '#8C3BF0';
          this.context.font = `${fontSize}px Nasalization`;
          this.context.textAlign = 'center';
          this.context.textBaseline = 'middle';
          this.context.fillText(title, this.titleX, this.titleY);
          this.convertToParticles();
        }

        convertToParticles() {
          const pixelData = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
          this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

          for (let y = 0; y < this.canvasHeight; y += this.gap) {
            for (let x = 0; x < this.canvasWidth; x += this.gap) {
              const index = (y * this.canvasWidth + x) * 4;
              const alpha = pixelData[index + 3];

              if (alpha > 0) {
                const red = pixelData[index];
                const green = pixelData[index + 1];
                const blue = pixelData[index + 2];
                const color = `rgb(${red}, ${green}, ${blue})`; // Corrigido

                this.particles.push(new Particle(this, x, y, color));
              }
            }
          }
        }

        render() {
          this.particles.forEach((particle) => {
            particle.update();
            particle.draw();
          });
        }
      }

      // Criar efeito e iniciar animação
      const effect = new Effect(ctx, canvas.width, canvas.height);
      effect.drawTitle('VOID Agency');

      
      let animationFrameId = null;
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.render();
        animationFrameId = requestAnimationFrame(animate);
      }

      // Inicia apenas quando o mouse interage
      window.addEventListener('mousemove', () => {
        if (!animationFrameId) {
          animate();
        }
      });

      // Para a animação quando o mouse sai
      window.addEventListener('mouseleave', () => {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      });
    }
  });

  import logo from '$lib/assets/logoMin.webp'

</script>



<img src="{logo}" alt="" srcset="" class="relative md:absolute left-1/2 -translate-x-1/2 top-8 max-w-[300px] w-full">
<canvas
id="canvasTitle"
class="hidden md:flex relative justify-center items-start w-screen h-[320px] md:h-[820px] font-[Nasalization]"
aria-label="VOID Agency"
>
</canvas>
<h1 class="block sm:hidden text-[#8C3BF0] mt-32 mb-36 font-[Nasalization]">VOID Agency</h1>