<script>
  import { interpret } from "./interpreter.js";
  export let prop;

  let text = interpret(prop[0]);
  let alignment = prop[1];
</script>

<main id={"mainHolder" + alignment}>
  <div id="textHolder">
    {#each text as textElem}
      {#if textElem.label == "break"}
        <br />
        <br />
      {:else if textElem.label == "link"}
        <a href={textElem.text.split("θ")[0]}>
          {textElem.text.split("θ")[1]}
        </a>
      {:else}
        <span id={textElem.label}>{textElem.text}</span>
      {/if}
    {/each}
  </div>
</main>

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

  #mainHolderleft {
    display: flex;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    justify-content: left;
  }
  #mainHoldercenter {
    display: flex;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
    justify-content: center;
  }
  #textHolder {
    font-size: 20px;
    width: 90%;
  }

  @media (max-width: 1100px) {
    #textHolder {
      font-size: 2vw;
    }
  }
  @media (max-width: 700px) {
    #textHolder {
      font-size: 20px;
    }
  }
  @media (max-width: 500px) {
    #textHolder {
      font-size: 4vw;
    }
    #mainHolderleft {
      display: flex;
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;
      justify-content: left;
    }
    #mainHoldercenter {
      display: flex;
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;
      text-align: center;
      justify-content: center;
    }
  }
</style>
