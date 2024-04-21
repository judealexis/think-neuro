<script>
  export let prop;

  let three = true;

  try {
    three = prop[0].three;
  } catch {}

  $: viewWidth = 0;

  // let columns = 3;
  // $: columns = viewWidth > 1110 ? 3 : viewWidth > 680 ? 2 : 1;

  let children = [];
  let tempList = [];

  function tabulate(columns) {
    children = [];
    console.log(children);
    for (let i = 0; i < prop.length; i++) {
      tempList.push(prop[i]);

      if (tempList.length == columns || prop.length - i < columns) {
        children.push(tempList);
        tempList = [];
      }
    }
  }

  $: tabulate(viewWidth > 1050 && three ? 3 : viewWidth > 680 ? 2 : 1);
</script>

<svelte:window bind:innerWidth={viewWidth} />

<main>
  {#each children as child}
    <div id={viewWidth < 680 ? "centered" : ""} class="inRow">
      {#each child as comp}
        <svelte:component this={comp.component} props={comp.args} />
      {/each}
    </div>
  {/each}
</main>

<style>
  #centered {
    justify-content: center;
  }
</style>
