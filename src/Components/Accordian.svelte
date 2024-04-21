<script>
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
        <p>
          {#if item.answer == "αβγ"}
            All applications are reviewed periodically. We typically have two
            review rounds and encourage early submissions. To gauge
            competitiveness of previous cohorts, please review our <a
              href="https://www.instagram.com/p/CyT3kuyvMLX/?img_index=1"
              >Fall 2023 Internship Admission Statistics.</a
            >
          {:else if item.answer == "αβδ"}
            You can find past oral and posters presented at the Think Neuro
            Research Symposium under the “Programs” section of our website. For
            research and scholarship testimonials, please follow our social
            media
            <a href="https://www.instagram.com/thinkneuro.usa/"
              >(thinkneuro.usa).</a
            >
          {:else}
            {item.answer}
          {/if}
        </p>
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
    padding: 0px;
    margin: 0px;
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
