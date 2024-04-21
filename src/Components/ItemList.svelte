<script>
  let height;

  let textContainer;

  $: viewWidth = 0;

  export let prop;

  let rubric = [
    ["λ", "Λ", "list"],
    ["π", "Π", "point"],
    ["ε", "Ε", "emphasis"],
    ["τ", "Τ", "title"],
    ["β", "Β", "body"],
    ["ρ", "Ρ", "break"],
  ];

  function sortNestedArray(array) {
    array.sort((a, b) => a.order - b.order);

    array.forEach((item) => {
      if (item.children && item.children.length > 0) {
        sortNestedArray(item.children);
      }
    });
  }

  function interpret(inText, shift) {
    let matches = [];
    let childList = []; // This will eventually hold the top-level nodes only

    // First, collect all matches
    for (let y = 0; y < rubric.length; y++) {
      let matchA = rubric[y][0];
      let matchB = rubric[y][1];
      let regexPattern = new RegExp(
        `(?<=${matchA})[^${matchA}${matchB}]*?(?=${matchB})`,
        "g"
      );

      let match;
      while ((match = regexPattern.exec(inText)) !== null) {
        matches.push({
          start: match.index + shift,
          end: match.index + shift + match[0].length,
          text: match[0],
          label: rubric[y][2],
          children: [],
        });
      }
    }

    // Sort matches by start index, then by length (descending)
    matches.sort(
      (a, b) => a.start - b.start || b.end - a.end - (a.end - a.start)
    );

    // Build hierarchy
    for (let i = 0; i < matches.length; i++) {
      let placed = false;
      for (let j = i - 1; j >= 0; j--) {
        if (
          matches[i].start >= matches[j].start &&
          matches[i].end <= matches[j].end
        ) {
          matches[j].children.push(matches[i]);
          placed = true;
          break;
        }
      }
      if (!placed) {
        childList.push(matches[i]);
      }
    }

    // Optionally interpret children recursively
    childList.forEach((node) => {
      if (node.children.length > 0) {
        node.children = interpret(node.text, node.start);
      }
    });

    return childList;
  }

  let items = [];
  for (let x = 0; x < prop.length; x++) {
    let current = interpret(prop[x].body, 0);
    sortNestedArray(current);
    // console.log(prop[x].body);
    items.push({ image: prop[x].image, title: prop[x].title, text: current });
  }

  //   console.log(items);

  //   writer(text, 0);
</script>

<svelte:window bind:innerWidth={viewWidth} />

<main>
  {#each items as item}
    <div id="card" class="inColumn">
      <div id="header">{item.title}</div>
      <div id="holder" class="inRow">
        <div id="imageWrapper" bind:clientHeight={height}>
          <img
            id="cardImage"
            src={(viewWidth > 500
              ? "assets/projects/"
              : "assets/projects/stretched/") + item.image}
            alt="Card"
          />
        </div>
        <div
          id="textDisc"
          bind:this={textContainer}
          class="inColumn"
          style="max-height: {height}px"
        >
          {#each item.text as txt}
            {#if txt.children.length > 0}
              {#if txt.label == "list"}
                <ul class="lineAdjustment">
                  {#each txt.children as child}
                    <li>
                      {#each child.children as textElem}
                        <span id={textElem.label}>{textElem.text}</span>
                      {/each}
                    </li>
                  {/each}
                </ul>
              {:else}
                <div id={txt.label}>
                  {#each txt.children as child}
                    <div class="lineAdjustment" id={child.label}>
                      {#if child.children.length > 0}
                        {#each child.children as textElem}
                          <span id={textElem.label}>{textElem.text}</span>
                        {/each}
                      {:else}
                        <div id={child.label}>{child.text}</div>
                      {/if}
                    </div>
                  {/each}
                </div>
              {/if}
            {:else}
              <div id={txt.label}>{txt.text}</div>
            {/if}
          {/each}
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
