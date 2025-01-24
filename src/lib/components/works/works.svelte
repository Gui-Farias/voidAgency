<script>
 import pcDani from '$lib/assets/pcDani.webp'
 import pcJoao from '$lib/assets/pcJoao.webp'
 import pcGui from '$lib/assets/pcGui.webp'
 import pcOcta from '$lib/assets/pcOcta.webp'
 import phoneDani from '$lib/assets/daniPhone.webp'
  import phoneJoao from '$lib/assets/joaoPhone.webp'
  import phoneGui from '$lib/assets/guiPhone.webp'
  import phoneOcta from '$lib/assets/octaPhone.webp'
</script>


<section class="flex flex-col gap-52 max-w-6xl pb-80 lg:pb-0">
  <h2 class="-mt-14 -mb-24">Projetos</h2>
  <div class="work md:flex md:items-start lg:items-center gap-10 lg:gap-24">
    <div class="md:w-1/2 lg:w-3/5">
      <h3 class="mb-6">Psicóloga Daniela Alves</h3>
      <p>A saúde mental é muito importante e algo que todos nós precisamos. Este site é o primeiro passo para você agendar uma conversa com a psicóloga Daniela Alves.</p>
      <a href="https://danielapsicologia.com.br" target="_blank" rel="noopener noreferrer" class="btn">Visitar o site</a>
    </div>
    <div class="relative md:w-1/2 lg:w-2/5 mt-16 md:mt-0">
      <img src={phoneDani} alt="Imagem aleatória" class="max-w-[33%] md:max-w-[50%] lg:max-w-64 max-h-80  absolute -bottom-24 md:-right-10" />
      <img src={pcDani} alt="Imagem aleatória" class="max-w-lg w-full" />
    </div>
  </div>
  <div class="work flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-24">
    <div class="relative md:w-1/2 lg:w-2/5">
      <img src={phoneJoao} alt="Imagem aleatória" class="max-w-[33%] md:max-w-[50%] lg:max-w-64 max-h-80  absolute -bottom-24 md:-left-10" />
      <img src={pcJoao} alt="Imagem aleatória" class="max-w-lg w-full" />
    </div>
    <div class="md:w-1/2 lg:w-3/5">
      <h3 class="mb-6">Joao Goes nutricionista</h3>
      <p>Crie planos alimentares para alcançar a sua meta, cuide da sua saúde com a orientação do nutricionista João Goes. </p>
      <a href="https://joao-goes.vercel.app" target="_blank" rel="noopener noreferrer" class="btn">Visitar o site</a>
    </div>
  </div>
  <div class="work md:flex items-center gap-10 lg:gap-24">
    <div class="md:w-1/2 lg:w-3/5">
      <h3 class="mb-6">Octa Studio</h3>
      <p>Temos como principais objetivos incentivar e dar espaço para novos artistas, contribuir para o crescimento de artistas independentes e, além disso, auxiliar todos aqueles que querem viver da música.</p>
      <a href="https://octa-estudio.vercel.app" target="_blank" rel="noopener noreferrer" class="btn">Visitar o site</a>
    </div>
    <div class="relative md:w-1/2 lg:w-2/5 mt-16 md:mt-0">
      <img src={phoneOcta} alt="Imagem aleatória" class="max-w-[33%] md:max-w-[50%] lg:max-w-64 max-h-80  absolute -bottom-24 md:-right-10" />
      <img src={pcOcta} alt="Imagem aleatória" class="max-w-lg w-full" />
    </div>
  </div>
  <div class="work flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-24">
    <div class="relative md:w-1/2 lg:w-2/5">
      <img src={phoneGui} alt="Imagem aleatória" class="max-w-[33%] md:max-w-[50%] lg:max-w-64 max-h-80  absolute -bottom-24 md:-left-10" />
      <img src={pcGui} alt="Imagem aleatória" class="max-w-lg w-full" />
    </div>
    <div class="md:w-1/2 lg:w-3/5">
      <h3 class="mb-6">Gui Farias</h3>
      <p>Criar um portfólio online onde você possa mostrar seu portfólio e serviços é sempre uma boa opção para encontrar um emprego ou atrair novos clientes.</p>
      <a href="https://guifarias.com.br" target="_blank" rel="noopener noreferrer" class="btn">Visitar o site</a>
    </div>
  </div>
</section>
