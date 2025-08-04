<script>
  import SmartText from "./SmartText.svelte";
  export let prop; // [introText, ...[[images[], text, alignment]]]
  let filler = prop.shift(); // First short text
</script>

<main class="textImgListCont">
  <div class="textHolderIntro">
    <SmartText text={filler} />
  </div>

  {#each prop as [images, text, alignment], index}
    <main class={"textImageHolder " + alignment} key={index}>
      {#if images.length > 1}
        <div class="imageGroupMulti">
          {#each images as image}
            <img id="txtImg" src={image} alt="illustration" class="image" />
          {/each}
        </div>
      {:else}
        <div class="imageGroup">
          <img id="txtImg" src={images[0]} alt="illustration" class="image" />
        </div>
      {/if}
      <div class="textHolder">
        <SmartText {text} />
      </div>
    </main>
  {/each}
</main>

<style>
  .textImgListCont {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }
  .textImageHolder {
    display: flex;
    flex-direction: row;
    column-gap: 14px;
    align-items: center;
  }
  .left {
    display: flex;
    flex-direction: row;
  }
  .right {
    display: flex;
    flex-direction: row-reverse;
  }
  #txtImg {
    width: 100%;
    height: auto;
    object-fit: block;
  }
  .imageGroup {
    display: flex;
    align-items: center;
    width: 300px;
    height: 300px;
  }
  .imageGroupMulti {
    display: grid;
    align-items: center;
    width: 300px;
    height: 300px;
    column-gap: 10px;
    row-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }
  .textHolder {
    font-size: 19px;
    width: 70%;
  }
  .textHolderIntro {
    font-size: 19px;
    width: 90%;
  }

  @media (max-width: 1000px) {
    .imageGroup {
      width: 220px;
      height: 220px;
    }
    .imageGroupMulti {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      width: 220px;
      height: auto;
      row-gap: 10px;
    }
    .textHolder {
      font-size: 18px;
      width: 100%;
    }
    .textHolderIntro {
      font-size: 18px;
      width: 100%;
    }
  }

  @media (max-width: 500px) {
    .textImageHolder {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      row-gap: 14px;
    }
    .imageGroup {
      width: 45vw;
      height: 45vw;
    }
    .imageGroupMulti {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 240px;
    }
    .textHolder {
      font-size: 4vw;
      width: 100%;
    }
    .textHolderIntro {
      font-size: 4vw;
      width: 100%;
    }
  }

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
</style>
