<script>
  export let prop;

  $: viewWidth = 0;
</script>

<svelte:window bind:innerWidth={viewWidth} />

<main>
  <div class="inColumn">
    {#each prop as child}
      <div id="spaced" class={viewWidth > 950 ? "inRow" : "inColumn"}>
        <svelte:component this={child[0].component} props={child[0].args} />
        <svelte:component this={child[1].component} props={child[1].args} />
      </div>
    {/each}
  </div>
</main>

<style>
  #spaced {
    align-items: center;
    column-gap: 40px;
    row-gap: 20px;
  }
</style>
