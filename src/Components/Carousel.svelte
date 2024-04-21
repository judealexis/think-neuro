<script>
  export let prop;

  let imageNumber = prop[0];
  let directory = prop[1];

  let pause = false;

  let imageFiles = [];
  for (let x = 0; imageNumber > x; x++) {
    imageFiles.push(directory + x.toString() + ".png");
  }

  let delta = 50;

  let state = "holding";
  let accumulated = 0;
  let threshold = 4000;
  let index = 0;

  let dots = Array(imageNumber);

  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  function updateDots() {
    index = mod(index, imageNumber);
    dots.forEach(function (dot, i) {
      if (i == index) {
        dot.id = "active";
      } else {
        dot.id = "inactive";
      }
    });
  }

  function mainloop() {
    index = mod(index, imageNumber);

    if (state == "holding") {
      accumulated += delta;

      if (accumulated >= threshold && !pause) {
        accumulated = 0;
        state = "forward";
      }
    } else if (state == "forward") {
      index++;
      state = "holding";
      updateDots();
    }
  }

  function setIndex(i) {
    index = i;
    index = mod(index, imageNumber);
    updateDots();
  }

  setInterval(mainloop, 50);
</script>

<main>
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div
    on:mouseenter={() => {
      pause = true;
    }}
    on:mouseleave={() => {
      pause = false;
    }}
    id="carouselBody"
  >
    <div id="testimonialContainer" class="inRow">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <svg
        on:click={() => {
          accumulated = 0;
          setIndex(index - 1);
        }}
        id="arrow"
        fill="black"
        width="50"
        height="50"
        style="transform: scale(2.5,2.5)"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><path d="M14 7l-5 5l5 5V7z" fill="black" /></svg
      >
      <div class="inRow" id="testimonialContent">
        {#each imageFiles as image}
          <img
            id="testimonial"
            alt="testimonial"
            src={image}
            style="transform: translate({index * -100}%)"
          />
        {/each}
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <svg
        on:click={() => {
          accumulated = 0;
          setIndex(index + 1);
        }}
        id="arrow"
        fill="black"
        width="50"
        height="50"
        style="transform: scale(2.5,2.5)"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><path d="M10 17l5-5l-5-5v10z" fill="black" /></svg
      >
    </div>
    <div id="dotContainer" class="inRow">
      {#each { length: imageNumber } as _, i}
        {#if i == 0}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            bind:this={dots[i]}
            on:click={() => {
              setIndex(i);
            }}
            id="active"
            class="dot"
          ></div>
        {:else}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            bind:this={dots[i]}
            on:click={() => {
              setIndex(i);
            }}
            id="inactive"
            class="dot"
          ></div>
        {/if}
      {/each}
    </div>
  </div>
</main>

<style>
  #testimonial {
    width: 100%;
    transition-duration: 0.4s;
    object-fit: contain;
  }
  #testimonialContent {
    width: 300px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    overflow: hidden;
  }
  #arrow {
    object-fit: fill;
    width: 16px;
    height: 12px;
    cursor: pointer;
  }
  #carouselBody {
    padding: 20px;
  }
  #testimonialContainer {
    justify-content: center;
    align-content: center;
  }
  #dotContainer {
    justify-content: center;
    margin-bottom: 20px;
  }
  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    border-radius: 50%;
    cursor: pointer;
  }
  #inactive {
    background-color: #bbb;
  }
  #active {
    background-color: #333 !important;
  }
  @media (max-width: 500px) {
    .dot {
      width: 2vw;
      height: 2vw;
      margin-right: 2vw;
    }
    #testimonialContent {
      min-width: 100px;
      margin-left: 2vw;
      margin-right: 2vw;
      margin-bottom: 2vw;
      overflow: hidden;
    }
    #carouselBody {
      padding: 4.5vw;
    }
    #dotContainer {
      margin-bottom: 5vw;
    }
  }
</style>
