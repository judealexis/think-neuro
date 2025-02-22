<script>
  import { interpret } from "./interpreter.js";

  export let prop;

  $: viewWidth = 0;

  let processedText = interpret(prop[0]);
  let textPosition = prop[1];
  let image = prop[2];
  let centered = prop[3];
</script>

<svelte:window bind:innerWidth={viewWidth} />

<main>
  <div
    id={textPosition == "rightLeft" ? "rightLeftHolder" : "leftRightHolder"}
    class={centered ? "centeredContent" : ""}
  >
    <img
      id="smartImage"
      src={image + (viewWidth <= 1100 ? "Stretch.jpeg" : ".jpeg")}
      alt="diversity"
    />

    <div
      id="smartText"
      style={"text-align: " + (textPosition == "rightLeft" ? "left" : "right")}
    >
      {#each processedText as textElem}
        {#if textElem.label == "break"}
          <br />
        {:else if textElem.label == "link"}
          <a href={textElem.text.split("θ")[0]}>
            {textElem.text.split("θ")[1]}
          </a>
        {:else}
          <span class="reduced_space" id={textElem.label}>{textElem.text}</span>
        {/if}
      {/each}
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

  .centeredContent {
    justify-content: center;
  }

  #image {
    width: 40%;
    margin-right: 20px;
    object-fit: contain;
    border-radius: 15px;
  }

  #smartText {
    font-family: thinkPs;
    line-height: 1.5;
  }

  @media (min-width: 1100px) {
    #smartText {
      font-size: 23px;
    }
    #smartImage {
      min-width: 200px;
    }
  }
  @media (max-width: 1100px) {
    #smartText {
      font-size: 2.5vw;
    }
    #smartImage {
      min-width: 200px;
    }
  }
  @media (max-width: 850px) {
    #smartText {
      font-size: 18px;
    }
    #smartImage {
      min-width: 180px;
    }
  }
  @media (max-width: 500px) {
    #smartText {
      font-size: 3.5vw;
    }
    #smartImage {
      min-width: 50px;
    }
    #juxtapose {
      margin-bottom: 5vw;
    }
  }
</style>
