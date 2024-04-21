<script>
  export let children;
  export let noAlternate = false;
  export let noSpacing = false;
</script>

<main>
  {#each children as child, i}
    <div
      id={noSpacing ? "unSpacedBG" : "background"}
      class:grey={i % 2 == 1 || noAlternate}
    >
      <div id="content">
        {#if !noAlternate || !noSpacing}
          <div id="title" class={child.orientation}>
            {child.title}
          </div>
        {/if}
        <svelte:component this={child.component} prop={child.prop} />
      </div>
    </div>
  {/each}
</main>

<style>
  @font-face {
    font-family: thinkLight;
    src: url("../fonts/analogue35thin.ttf");
  }
  #background {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
  }
  #unSpacedBG {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10;
    width: 100%;
  }
  .grey {
    background-color: #f2f2f2;
  }
  #content {
    width: 70%;
    padding: 10px;
  }
  #title {
    font-size: 17px;
    font-family: thinkLight;
    padding-bottom: 10px;
  }
  .left {
    text-align: left;
  }
  .center {
    text-align: center;
  }
  .right {
    text-align: right;
  }
  @media (max-width: 1100px) {
    #content {
      width: 80%;
    }
  }
  @media (max-width: 500px) {
    #content {
      width: 95%;
    }
    #title {
      font-size: 3vw;
    }
    #background {
      padding-top: 4vw;
      padding-bottom: 4vw;
    }
  }
</style>
