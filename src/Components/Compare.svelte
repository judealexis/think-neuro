<script>
  export let prop;

  //prop[0]: title
  //prop[1]: image
  //prop[2]: [points]
</script>

<main>
  {#if prop.length == 1}
    <div
      id="compareGridSingle"
      style="display: grid; grid-template-columns: auto auto"
    >
      <div id="compareColumn" class="inColumn">
        <img id="image" src={prop[0].image} alt="comparison" />
      </div>
      <div id="compareColumn" class="inColumn">
        <div id="title">{prop[0].title}</div>
        <ul id="bullets">
          {#each prop[0].points as point}
            <li>{point}</li>
          {/each}
        </ul>
      </div>
    </div>
  {:else}
    <div
      id="compareGrid"
      style="display: grid; grid-template-columns: {'auto '.repeat(
        prop.length
      )}"
    >
      {#each prop as item}
        <div id="compareColumn" class="inColumn">
          <img id="image" src={item.image} alt="comparison" />
          <div id="title">{item.title}</div>
          <ul id="bullets">
            {#each item.points as point}
              <li>{point}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  {/if}
</main>

<style>
  @font-face {
    font-family: thinkSmart;
    src: url("../fonts/yoxallbold.ttf");
  }
  @font-face {
    font-family: thinkPs;
    src: url("../fonts/analogue45light.ttf");
  }
  #compareColumn {
    width: 350px;
  }
  #bullets {
    text-align: left;
    font-size: 20px;
    font-family: thinkPs;
  }
  #compareGrid {
    width: 75%;
    margin: 0 auto;
    align-items: normal;
    justify-content: space-between;
  }
  #compareGridSingle {
    width: 60%;
    margin: 0 auto;
    align-items: normal;
    justify-content: space-between;
  }
  #image {
    object-fit: contain;
    width: 290px;
    margin-bottom: 20px;
  }
  #title {
    color: #809abf;
    font-family: thinkSmart;
    font-size: 25px;
  }
  @media (max-width: 1000px) {
    #image {
      width: 30vw;
    }
    #compareColumn {
      width: 35vw;
    }
    #title {
      font-size: 2.5vw;
    }
    #bullets {
      font-size: 2vw;
    }
    ul {
      padding-left: 4vw;
    }
  }
</style>
