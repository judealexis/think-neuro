<script>
  import SmartText from "./SmartText.svelte";
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
        <div class="btn-text">{item.question}</div>
        <div class="icon-wrapper">
          <svg
            class="down-icon"
            fill="#444"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style="transform: rotate({item.isOpen ? 180 : 0}deg)"
          >
            <path
              d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"
            />
          </svg>
        </div>
      </button>

      <div
        style={item.isOpen ? "height: fit-content;" : "height: 0px;"}
        class="accordion-content"
      >
        <SmartText text={item.answer} />
      </div>
    </div>
  {/each}
</main>

<style>
  .accordion-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f0f0f0;
    color: #444;
    padding: 10px;
    border: none;
    outline: none;
    width: 80%;
    cursor: pointer;
    margin: 0;
  }

  .btn-text {
    flex: 1;
    font-size: 15px;
    text-align: left;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    margin-left: 10px;
  }

  .down-icon {
    width: 20px;
    height: 20px;
    transition: transform 0.2s ease;
  }

  .accordion-content {
    padding: 0;
    margin: 0;
    line-height: 1.8;
    overflow: hidden;
    width: 80%;
    font-size: 15px;
  }

  /* Responsive behavior */
  @media (max-width: 800px) {
    .accordion-header,
    .accordion-content {
      width: 100%;
    }

    .btn-text {
      font-size: 1.8vw;
    }

    .accordion-content {
      font-size: 1.8vw;
    }

    .down-icon {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 500px) {
    .btn-text,
    .accordion-content {
      font-size: 10px;
    }

    .down-icon {
      width: 16px;
      height: 16px;
    }
  }
</style>
