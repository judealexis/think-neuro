<script>
  import { interpret } from "./interpreter.js";
  export let prop;
</script>

<main>
  {#each prop as item}
    <div class="accordion">
      <button
        on:click={() => {
          item.isOpen = !item.isOpen;
        }}
        class="accordion-header"
      >
        <div id="btnTxt">{item.question}</div>
        {#if item.isOpen}
          <div id="iconWrapper">
            <svg
              id="downIcon"
              fill="#444"
              viewBox="0 0 24 24"
              style="transform: rotate(180deg)"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"
              /></svg
            >
          </div>
        {:else}
          <div id="iconWrapper">
            <svg
              id="downIcon"
              fill="#444"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"
              /></svg
            >
          </div>
        {/if}
      </button>

      <div
        style={item.isOpen ? "height: fit-content;" : "height: 0px;"}
        class="accordion-content"
      >
        {#each interpret(item.answer) as textElem}
          {#if textElem.label == "break"}
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
    </div>
  {/each}
</main>

<style>
  #iconWrapper {
    display: flex;
    flex-direction: row;
    justify-content: right;
  }
  #downIcon {
    object-fit: fill;
    width: 16px;
    height: 12px;
    transform: translate(0, 5px);
  }
  #btnTxt {
    float: left;
  }
  .accordion-header {
    background: #f0f0f0;
    color: #444;
    padding: 10px;
    border: none;
    outline: none;
    width: 80%;
    text-align: left;
    cursor: pointer;
    margin: 0px;
  }
  .accordion-content {
    padding: 00px;
    margin: 0px;
    line-height: 1.8;
    overflow: hidden;
    width: 80%;
    font-size: 15px;
  }
  #btnTxt {
    font-size: 15px;
  }
  @media (max-width: 800px) {
    .accordion-content {
      font-size: 1.8vw;
      width: 100%;
    }
    #btnTxt {
      font-size: 1.8vw;
    }
    .accordion-header {
      padding: 10px;
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    .accordion-content {
      font-size: 10px;
    }
    #btnTxt {
      font-size: 10px;
    }
  }
</style>
