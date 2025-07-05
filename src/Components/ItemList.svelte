<script>
  import SmartText from "./SmartText.svelte";

  export let prop = [];

  let height;
  let textContainer;
  $: viewWidth = 0;
</script>

<svelte:window bind:innerWidth={viewWidth} />

<main>
  {#each prop as item}
    <div id="card" class="inColumn">
      <div id="header">{item.title}</div>
      <div id="holder" class="inRow">
        <div id="imageWrapper" bind:clientHeight={height}>
          <img
            id="cardImage"
            src={(viewWidth > 500
              ? "assets/projects/"
              : "assets/projects/stretched/") + item.image}
            alt={item.title}
          />
        </div>
        <div
          id="textDisc"
          bind:this={textContainer}
          class="inColumn"
          style="max-height: {height}px"
        >
          <!-- delegate all formatting + lists to SmartText -->
          <SmartText text={item.body} />
        </div>
      </div>
    </div>
  {/each}
</main>

<style>
  @font-face {
    font-family: thinkSlick;
    src: url("../fonts/unb_pro_light.otf");
  }
  @font-face {
    font-family: thinkP;
    src: url("../fonts/analogue55regular.ttf");
  }

  @font-face {
    font-family: thinkHard;
    src: url("../fonts/analogue75bold.ttf");
  }
  @font-face {
    font-family: thinkFast;
    src: url("../fonts/unb_pro_regular.otf");
  }
  #holder {
    align-items: normal;
    padding: 3px;
  }
  #header {
    margin-bottom: 9px;
    text-align: center;
    font-family: thinkFast;
    font-size: 19px;
    font-weight: bold;
  }
  #break {
    height: 8px;
  }
  #title {
    font-family: thinkSlick;
    font-size: 16px;
    margin: 2px;
  }
  #body {
    font-family: thinkP;
    font-size: 15px;
  }
  #emphasis {
    font-family: thinkHard;
    font-size: 15px;
  }
  #card {
    display: flex;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 10px;
  }
  #cardImage {
    display: flex;
    align-items: center;
    object-fit: contain;
    width: 100%;
  }
  #imageWrapper {
    height: fit-content;
    padding: 15px;
    width: 40%;
  }
  #textDisc {
    width: 60%;
    overflow-y: scroll;
  }

  /* Styling for Webkit browsers like Chrome, Safari */
  #textDisc::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  #textDisc::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
  #seemore {
    color: white;
    font-size: 13px;
    background-color: #007bff;
    width: fit-content;
    border-radius: 10px;
    align-self: center;
  }
  #seemore:hover {
    background-color: #0056b3;
  }
  .lineAdjustment {
    padding-left: 0px;
  }
  ul {
    margin-left: 20px;
    list-style-image: url("data:image/svg+xml,<svg transform='scale(.5,.5) translate(0,10)' width='20' height='20' xmlns='http://www.w3.org/2000/svg'><circle cx='10' cy='10' r='9' fill='black'/></svg>");
  }
  @media (max-width: 1100px) {
    ul {
      margin-left: 20px;
      list-style-image: url("data:image/svg+xml,<svg transform='scale(.3,.3) translate(0,10)' width='20' height='20' xmlns='http://www.w3.org/2000/svg'><circle cx='10' cy='10' r='9' fill='black'/></svg>");
    }
    #header {
      font-size: 2vw;
    }
    #title {
      font-size: 1.6vw;
    }
    #body {
      font-size: 1.5vw;
    }
    #emphasis {
      font-size: 1.5vw;
    }
    .lineAdjustment {
      line-height: 1.3vw;
      margin-top: 2px;
    }
    #seemore {
      font-size: 1.5vw;
    }
  }
  @media (max-width: 500px) {
    #header {
      font-size: 2.6vw;
      margin-bottom: 2px;
    }
    #title {
      font-size: 2.2vw;
    }
    #body {
      font-size: 2.1vw;
    }
    #emphasis {
      font-size: 2.1vw;
    }
    #card {
      margin: 5px;
      padding: 5px;
    }
    #imageWrapper {
      width: 30%;
    }
    #textDisc {
      width: 70%;
    }
    #imageWrapper {
      padding: 5px;
    }
    li {
      margin-top: 0px;
      padding-top: 0px;
    }
    ul {
      margin-left: 20px;
      list-style-image: url('data:image/svg+xml,<svg width="5" height="5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="5" fill="black" /></svg>');
    }
    li span {
      font-size: 1px;
    }
    .lineAdjustment {
      line-height: 1.5vw;
      margin-top: 1px;
    }
  }
  @media (max-width: 350px) {
    ul {
      margin-left: 15px;
      list-style-image: url('data:image/svg+xml,<svg width="3" height="3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="5" fill="black" /></svg>');
    }
    .lineAdjustment {
      line-height: 0.4vw;
      margin-top: 0.5px;
    }
  }
</style>
