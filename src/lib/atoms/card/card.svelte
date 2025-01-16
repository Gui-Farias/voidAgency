<script>
  export let title = "";
  export let text = "";
</script>


<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<div class="card group max-w-1/3 w-full bg-[#F5F5F5] relative rounded-xl overflow-hidden mb-5 pb-3 break-inside-avoid transition-all">
  <div class="text-left mb-3 bg-[#8C3BF0] p-6 flex flex-col group-hover:flex-row justify-center group-hover:justify-start gap-4 items-center absolute w-full h-full group-hover:h-[100px] transition-all">
    <div class="scale-125 group-hover:scale-100 flex flex-col group-hover:flex-row justify-center group-hover:justify-start gap-4 items-center">

      <slot></slot>
      <h3>{title}</h3>
    </div>
  </div>
  <p class="text-black px-8 pb-4 text-left pt-[120px]">{text}</p>
</div>
