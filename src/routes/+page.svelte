<script>
  import Digital from "$lib/components/digital/digital.svelte";
  import Footer from "$lib/components/footer/footer.svelte";
  import Hero from "$lib/components/hero/hero.svelte";
  import Services from "$lib/components/services/services.svelte";
  import Video from "$lib/components/video/video.svelte";
  import Works from "$lib/components/works/works.svelte";
  import Impacto from "$lib/components/impacto/impacto.svelte";
  import GoldDivision from "$lib/components/goldDivision/goldDivision.svelte";
    import Stars from "$lib/components/stars/Stars.svelte";
    import BtnFlutu from "$lib/components/btnFlutu/btnFlutu.svelte";
  
</script>

<svelte:head>
  <title>Agência Digital Void Agency | Sites, Lojas Virtuais e Marketing Digital</title>

  <meta name="description" content="Transformamos ideias em soluções digitais completas. Desenvolvimento de sites, e-commerce, identidade visual e marketing com foco em performance, SEO e acessibilidade." />

  <meta name="keywords" content="Void Agency, agência digital, criação de sites, e-commerce, lojas virtuais, identidade visual, marketing digital, SEO, acessibilidade, performance web, desenvolvimento web, design gráfico, gestão de redes sociais, campanhas de tráfego pago, edição de vídeo, soluções digitais, suporte técnico, manutenção de sites">

  <meta name="author" content="Void Agency" />
  <meta name="robots" content="index, follow" />

  <!-- Tags sociais -->
  <meta property="og:title" content="Agência Digital Void Agency | Sites, Lojas Virtuais e Marketing Digital" />
  <meta property="og:description" content="Transformamos ideias em soluções digitais completas. Desenvolvimento de sites, e-commerce, identidade visual e marketing com foco em performance, SEO e acessibilidade." />
  <!-- <meta property="og:image" content="URL_DA_IMAGEM_DE_DESTAQUE" /> -->
  <meta property="og:url" content="https://voidagency.com.br" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Agência Digital Void Agency | Sites, Lojas Virtuais e Marketing Digital" />
  <meta name="twitter:description" content="Transformamos ideias em soluções digitais completas. Desenvolvimento de sites, e-commerce, identidade visual e marketing com foco em performance, SEO e acessibilidade." />
  <!-- <meta name="twitter:image" content="URL_DA_IMAGEM_DE_DESTAQUE" /> -->
</svelte:head>

<Stars/>
<BtnFlutu/>

<Hero />
<Digital />
<Video/>
<Works />
<GoldDivision/>
<Services />
<Impacto/>
<Footer />
