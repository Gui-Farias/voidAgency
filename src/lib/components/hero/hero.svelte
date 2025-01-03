<script>
  import { onMount } from "svelte";
  class Particle {
    constructor(effect, x, y, color) {
      this.effect = effect;
      this.x = Math.random() * this.effect.canvasWidth;
      this.y = 0;
      this.color = color;
      this.originX = x;
      this.originY = y;
      this.size = this.effect.gap;
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
  class Effect {
    constructor(context, canvasWidth, canvasHeight) {
      this.context = context;
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.particles = [];
      this.gap = 3;
      this.mouse = {
        radius: 2000,
        x: 0,
        y: 0,
      };
      window.addEventListener("mousemove", (e) => {
        this.mouse.x = e.x;
        this.mouse.y = e.y;
      });
    }

    drawTitle(texts) {
      this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      texts.forEach(({ text, x, y }) => {
        this.context.fillStyle = "rgb(140, 59, 240)";
        this.context.font = "150px Gill Sans";
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.fillText(text, x, y);
      });
      this.convertToParticles();
    }

    convertToParticles() {
      const pixel = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
      this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      for (let y = 0; y < this.canvasHeight; y += this.gap) {
        for (let x = 0; x < this.canvasWidth; x += this.gap) {
          const index = (y * this.canvasWidth + x) * 4;
          const alpha = pixel[index + 3];
          if (alpha > 0) {
            const red = pixel[index];
            const green = pixel[index + 1];
            const blue = pixel[index + 2];
            const color = `rgb(${red}, ${green}, ${blue})`;
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

  let canvas;
  let ctx;

  onMount(() => {
    // Configuração inicial do canvas
    canvas.width = window.innerWidth;
    canvas.height = 500;

    ctx = canvas.getContext("2d");

    const effect = new Effect(ctx, canvas.width, canvas.height);
    const texts = [
      { text: "VOID Agency", x: canvas.width / 2, y: 350 },
      //   { text: "void", x: canvas.width / 2, y: canvas.height / 2 - 50 },
      //   { text: "agency", x: canvas.width / 2, y: canvas.height / 2 + 50 },
    ];

    effect.drawTitle(texts);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      effect.render();
      requestAnimationFrame(animate);
    }

    animate();
  });
</script>

<canvas bind:this={canvas}></canvas>

<style>
  canvas {
    display: block;
    width: 100%;
    margin-bottom: 250px;
  }
</style>
