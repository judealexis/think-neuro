<script>
  import SmartText from "./SmartText.svelte";
  export let prop; // [introText, ...[[images[], text, alignment]]]
  let filler = prop.shift(); // First short text
</script>

<!-- Top Intro Text -->
<main class="mainHolderIntro">
  <div class="textHolderIntro">
    <SmartText text={filler} />
  </div>
</main>

<!-- Main Items -->
{#each prop as [images, text, alignment], index}
  <main class={"mainHolder " + alignment} key={index}>
    {#if alignment === "left"}
      <div class="imageGroup">
        {#each images as image}
          <img src={image} alt="illustration" class="image" />
        {/each}
      </div>
      <div class="textHolder">
        <SmartText {text} />
      </div>
    {:else}
      <div class="textHolder">
        <SmartText {text} />
      </div>
      <div class="imageGroup">
        {#each images as image}
          <img src={image} alt="illustration" class="image" />
        {/each}
      </div>
    {/if}
  </main>
{/each}

<style>
  @font-face {
    font-family: think;
    src: url("../fonts/analogue65medium.ttf");
  }
  @font-face {
    font-family: thinkSmart;
    src: url("../fonts/yoxallbold.ttf");
  }
  @font-face {
    font-family: thinkSlick;
    src: url("../fonts/unb_pro_light.otf");
  }

  .mainHolder {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    width: 100%;
    flex-wrap: nowrap;
    gap: 20px;
  }

  .mainHolder.left {
    flex-direction: row;
  }

  .mainHolder.right {
    flex-direction: row-reverse;
  }

  .mainHolder.center {
    justify-content: center;
    text-align: center;
  }

  .imageGroup {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    width: 35%;
    min-width: 200px;
  }

  .image {
    width: 100%;
    max-width: 150px;
    height: auto;
    object-fit: contain;
  }

  .textHolder {
    font-size: 20px;
    width: 60%;
    min-width: 300px;
    padding: 0 15px;
  }

  .mainHolderIntro {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 15px 0;
  }

  .textHolderIntro {
    font-size: 20px;
    width: 90%;
    padding: 0 15px;
    text-align: left;
  }

  @media (max-width: 1000px) {
    .mainHolder,
    .mainHolder.left,
    .mainHolder.right,
    .mainHolder.center,
    .mainHolderIntro {
      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;
      text-align: center !important;
    }

    .textHolder,
    .textHolderIntro {
      width: 90%;
      order: 1;
      font-size: 2.5vw;
      padding: 0;
      text-align: center;
    }

    .imageGroup {
      width: 90%;
      order: 0;
      justify-content: center;
    }

    .image {
      width: 30vw;
      max-width: none;
    }
  }

  @media (max-width: 500px) {
    .textHolder {
      font-size: 4vw;
    }

    .textHolderIntro {
      font-size: 3.5vw;
    }

    .mainHolder {
      padding-top: 5px;
      padding-bottom: 5px;
    }

    .image {
      width: 40vw;
    }
  }
</style>
