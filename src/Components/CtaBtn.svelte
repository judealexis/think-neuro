<script>
  import SmartText from "./SmartText.svelte";
  import { interpret } from "./interpreter.js";
  export let prop;
  // export let button = true;

  let text = interpret(prop[0]);
  let ctaText = prop[1];
  let ctaLink = prop[2];
</script>

<main id="container">
  <!-- <div id="textHolder">
    {#each text as textElem}
      <span id={textElem.label}>{textElem.text}</span>
    {/each}
  </div> -->
  <div id="textHolder">
    <SmartText text={prop[0]} />
  </div>
  <a href={ctaLink} class="ctaBtn">{ctaText}</a>
</main>

<style>
  @font-face {
    font-family: thinkP;
    src: url("../fonts/analogue55regular.ttf");
  }
  .ctaBtn {
    padding: 5px 70px; /* Increase padding to make the button taller */
    border: none; /* Remove any default border */
    background-color: #809abf; /* Set a default background color */
    color: white; /* Set text color */
    cursor: pointer; /* Change the cursor on hover */
    font-size: 20px; /* Set a font size */
    font-family: thinkP;
    transition: background-color 0.3s; /* Smooth transition for hover effect */
    border-radius: 20px; /* Add some rounded corners */
    border: 2px solid #809abf;
    width: fit-content;
    text-decoration: none;
    margin: 0 auto;
  }
  .ctaBtn:hover {
    background-color: white;
    color: #809abf;
  }
  #textHolder {
    width: fit-content;
    align-self: center;
    justify-self: center;
    font-size: 35px;
    padding-bottom: 20px;
  }
  #container {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-content: center;
    background-color: #19304c;
    width: 100%;
    padding-top: 70px;
    padding-bottom: 70px;
  }

  @media (max-width: 1100px) {
    .ctaBtn {
      font-size: 1.5vw; /* Set a font size */
    }
    #textHolder {
      font-size: 3.3vw;
    }
    #container {
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }
  @media (max-width: 700px) {
    .ctaBtn {
      padding: 0px 30px;
      font-size: 10px; /* Set a font size */
    }
    #textHolder {
      padding-bottom: 10px;
    }
  }
  @media (max-width: 500px) {
    .ctaBtn {
      padding: 0px 20px;
      font-size: 2vw; /* Set a font size */
    }
    #textHolder {
      font-size: 3.3vw;
    }
    #container {
      padding-top: 3vw;
      padding-bottom: 3vw;
    }
  }
</style>
