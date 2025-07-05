<script>
  import SmartText from "./SmartText.svelte";
  export let prop;

  $: viewWidth = 0;
</script>

<svelte:window bind:innerWidth={viewWidth} />

<main>
  {#each prop as group}
    <div class="title" id="medium">{group.category}</div>
    {#each group.members as people}
      <div class={viewWidth > 800 ? "inRow" : "inColumn"} id="card">
        <div
          id={viewWidth > 800 ? "borderRight" : "borderDown"}
          class="basicInfo"
        >
          <img id="profileIcon" src={people.image} alt={people.name} />
          <div class="title" id="big">{people.name}</div>
          <div class="paragraph" id="medium">{people.title}</div>
        </div>
        <div id={viewWidth > 800 ? "horizBounded" : ""} class="description">
          <div class="descriptiveParagraph" id="medium">
            <SmartText text={people.description} />
          </div>
        </div>
      </div>
    {/each}
  {/each}
</main>

<style>
  @font-face {
    font-family: thinkHard;
    src: url("../fonts/analogue75bold.ttf");
  }
  @font-face {
    font-family: thinkP;
    src: url("../fonts/analogue55regular.ttf");
  }
  .description {
    display: flex;
    padding: 10px;
    align-content: center;
    justify-content: center;
  }
  #horizBounded {
    width: 70%;
  }
  .title {
    font-family: thinkHard;
    color: black;
    margin: 2.5px;
  }
  .paragraph {
    font-family: thinkP;
    color: grey;
    margin: 2.5px;
  }
  .descriptiveParagraph {
    font-family: thinkP;
    color: black;
    margin: 2.5px;
  }
  #big {
    font-size: 20px;
  }
  #medium {
    font-size: 16px;
  }
  #card {
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 10px;
  }
  .basicInfo {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 10px;
    align-items: center;
  }
  #borderRight {
    width: 30%;
    border-right: 1px solid #e5e5e5;
  }
  #borderDown {
    border-bottom: 1px solid #e5e5e5;
  }

  #profileIcon {
    object-fit: cover;
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }

  @media (max-width: 500px) {
    #big {
      font-size: 4.5vw;
    }
    #medium {
      font-size: 3.5vw;
    }
    #profileIcon {
      width: 20vw;
      height: 20vw;
    }
  }
</style>
