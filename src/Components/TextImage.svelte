<script>
  import { interpret } from "./interpreter.js";

  export let prop;
  let smartSrc = true;
  let interpretText = false;

  $: viewWidth = 0;

  let processedText = [];
  let text = prop[0];
  let textPosition = prop[1];
  let image = prop[2];

  try {
    smartSrc = prop[3];
    interpretText = prop[4];
  } catch {}

  if (interpretText) {
    processedText = interpret(prop);
  }
</script>

<svelte:window bind:innerWidth={viewWidth} />

<main>
  <div id={interpretText ? "unSpacedJuxtapose" : "juxtapose"} class="inRow">
    {#if textPosition == "right"}
      <img
        id={interpretText ? "smartImage" : "image"}
        src={smartSrc
          ? image + (viewWidth <= 1100 ? "Stretch.jpeg" : ".jpeg")
          : image}
        alt="diversity"
      />

      {#if interpretText}
        <div id="smartText" style="text-align: right;">
          {#each processedText as textElem}
            <span class="reduced_space" id={textElem.label}
              >{textElem.text}</span
            >
          {/each}
        </div>
      {:else}
        <div id="text">{text}</div>
      {/if}
    {:else}
      {#if interpretText}
        <div id="smartText" style="text-align: left;">
          {#each processedText as textElem}
            <span class="reduced_space" id={textElem.label}
              >{textElem.text}</span
            >
          {/each}
        </div>
      {:else}
        <div id="text">{text}</div>
      {/if}
      <img
        id={interpretText ? "smartImage" : "image"}
        src={smartSrc
          ? image + (viewWidth <= 1100 ? "Stretch.jpeg" : ".jpeg")
          : image}
        alt="diversity"
      />
    {/if}
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
  #juxtapose {
    margin-bottom: 50px;
  }
  #unspacedJuxtapose {
    margin-bottom: 0px;
  }
  #image {
    width: 40%;
    margin-right: 20px;
    object-fit: contain;
    border-radius: 15px;
  }
  #text {
    font-size: 23px;
    font-family: thinkP;
  }
  #italic {
    font-family: "Times New Roman", Times, serif;
    font-style: italic;
  }
  #blue {
    font-family: thinkSmart;
    color: #809abf;
  }
  #white {
    font-family: think;
    color: white;
  }
  #black {
    font-family: thinkPs;
  }
  #emphasis {
    font-family: think;
    color: black;
  }
  #break {
    height: 10px;
  }
  @media (max-width: 600px) {
    #text {
      font-size: 4vw;
    }
  }
  @media (max-width: 1100px) {
    #image {
      width: 30%;
    }
    #text {
      width: 70%;
    }
    #smartText {
      font-size: 2.5vw;
    }
    #smartImage {
      min-width: 200px;
    }
  }
  @media (max-width: 850px) {
    #image {
      width: 40%;
    }
    #text {
      width: 60%;
    }
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
    #image {
      margin-right: 4vw;
    }
    #juxtapose {
      margin-bottom: 5vw;
    }
  }
</style>
