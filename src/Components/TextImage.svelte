<script>
  import SmartText from "./SmartText.svelte";
  import Carousel from "./Carousel.svelte";

  export let prop;

  $: viewWidth = 0;

  let textPosition = prop[1];
  let image = prop[2]; //feed in prop list for carousel
  let centered = prop[3];
  let useCarousel = false;

  try {
    useCarousel = prop[4];
  } catch {}
</script>

<svelte:window bind:innerWidth={viewWidth} />

<main>
  <div
    id={(textPosition == "rightLeft" ? "rightLeftHolder" : "leftRightHolder") +
      (useCarousel ? "C" : "")}
    class:centeredContent={centered}
  >
    {#if useCarousel}
      <Carousel prop={image} />
    {:else}
      <img
        id="smartImage"
        src={image + (viewWidth <= 1100 ? "Stretch.jpeg" : ".jpeg")}
        alt="diversity"
      />
    {/if}
    <div
      id={"smartText" + (useCarousel ? "C" : "")}
      class="reduced_space"
      style={"text-align: " + (textPosition == "rightLeft" ? "left" : "right")}
    >
      <SmartText text={prop[0]} />
    </div>
  </div>
</main>

<style>
  .reduced_space {
    line-height: 1em;
  }
  #smartText {
    width: 50%;
    font-size: 30px;
    font-family: thinkPs;
    line-height: 1.5;
  }
  #smartTextC {
    width: 30%;
    font-size: 15px;
    font-family: thinkPs;
    line-height: 1.5;
  }
  #smartImage {
    width: 28%;
    margin-right: 20px;
    margin-left: 20px;
    padding: 1%;
    object-fit: contain;
    border-radius: 15px;
    min-width: 240px;
  }

  #rightLeftHolder {
    display: flex;
    flex-direction: row;
  }
  #leftRightHolder {
    display: flex;
    flex-direction: row-reverse;
  }

  #rightLeftHolderC {
    display: flex;
    flex-direction: row;
  }
  #leftRightHolderC {
    display: flex;
    flex-direction: row-reverse;
  }

  .centeredContent {
    justify-content: center;
    align-items: center;
  }

  #image {
    width: 40%;
    margin-right: 20px;
    object-fit: contain;
    border-radius: 15px;
  }

  @media (min-width: 1100px) {
    #smartText {
      font-size: 23px;
    }
    #smartImage {
      min-width: 200px;
    }
  }
  @media (max-width: 850px) {
    #smartText {
      font-size: 18px;
    }
    #smartTextC {
      width: fit-content;
    }
    #smartImage {
      min-width: 180px;
    }
    #rightLeftHolderC {
      display: flex;
      flex-direction: column;
    }
    #leftRightHolderC {
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 500px) {
    #smartText {
      font-size: 3.5vw;
    }
    #smartTextC {
      font-size: 2.5vw;
    }
    #smartImage {
      min-width: 50px;
    }
    #juxtapose {
      margin-bottom: 5vw;
    }
  }
</style>
