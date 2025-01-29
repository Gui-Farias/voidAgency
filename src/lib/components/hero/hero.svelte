<script>
import { onMount } from 'svelte';

onMount(() => {
  if (window.innerWidth > 640) {
  const canvas = document.getElementById('canvasTitle');
  const ctx = canvas.getContext('2d');

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;  

  // Proporção base: Tamanho da fonte ideal para largura de 1512px
  const baseFontSize = 172; // Fonte ideal para largura de 1512px
  const baseWidth = 1512; // Largura usada como referência
  // Calcula a nova fonte proporcional à largura atual do canvas
  const fontSize = (canvas.width / baseWidth) * baseFontSize;


  // svelte-ignore perf_avoid_nested_class
  class Particle {
  constructor(effect, x, y, color) {
    this.effect = effect;
    this.x = Math.random() * this.effect.canvasWidth;
    this.y = 0;
    this.color = color;
    this.originX = x;
    this.originY = y;
    this.size = this.effect.gap + 0.4;
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
  
  draw(){
    this.effect.context.fillStyle = this.color;
    this.effect.context.fillRect(this.x, this.y, this.size, this.size);
  }
  update(){
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
  class Effect {
  constructor(context, canvasWidth, canvasHeight) {
    this.context = context;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.titleX = this.canvasWidth / 2;
    this.titleY =  this.canvasHeight / 2;

    //particles
    this.particles = [];
    this.gap = 3;
    this.mouse = {
      radius: 4200,
      x: 0,
      y: 0
    };
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.x - canvas?.getBoundingClientRect().x;
      this.mouse.y = e.y - canvas?.getBoundingClientRect().y;
    })
  }

  //Escreve o title e difine config, cor, font size, align
  drawTitle(title){
    this.context.fillStyle = '#8C3BF0';
    this.context.font = `${fontSize}px Nasalization`;
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.fillText(title, this.titleX, this.titleY);
    this.convertToParticles();
  }
  

  convertToParticles(){
    const pixel = this.context.getImageData(0, 0 ,this.canvasWidth, this.canvasHeight).data;
    this.context.clearRect(0, 0 , this.canvasWidth, this.canvasHeight);
    for (let y = 0; y < this.canvasHeight; y+=this.gap) {
      for (let x = 0; x < this.canvasWidth; x+=this.gap) {
        const index = (y * this.canvasWidth + x) * 4;
        const alpha = pixel[index + 3];
        if(alpha > 0){
          const red = pixel[index];
          const green = pixel[index+1];
          const blue = pixel[index+2];
          const color = `rgb('${red}, ${green}, ${blue}')`;
          this.particles.push(new Particle(this, x, y, color));
        }
      }
    }
  }
  
  render(){
    this.particles.forEach(particle => {
      particle.update()
      particle.draw()
    })
  }
}
  

  const effect = new Effect(ctx, canvas.width, canvas.height);

  effect.drawTitle('VOID Agency');
  effect.render();

  function animate() {
    ctx.clearRect(0, 0 , canvas.width, canvas.height);
    effect.render();
    requestAnimationFrame(animate);
  }

  animate();
}
});

  
</script>

<canvas id="canvasTitle" class="hidden sm:flex relative items-center w-screen h-[320px] md:h-[600px] font-[Nasalization]" aria-label="VOID Agency"></canvas>
<h1 class="block sm:hidden text-[#8C3BF0] mt-32 mb-36 font-[Nasalization]">VOID Agency</h1>