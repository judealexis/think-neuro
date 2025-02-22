<script>
  import { clickOutside } from "./clickOutside.js";

  export let headbar = true;

  $: viewWidth = 0;
  let open = false;

  let choices = [
    "Research",
    "Policy",
    "Computer Science",
    "Advocacy",
    "Service",
  ];
  let typedText = "";
  let typeCursor = "typeCursorVisible";
  let state = "typing";
  let index = 0;

  function typer() {
    let curbed_index = index % choices.length;

    if (state == "typing") {
      typeCursor = "typeCursorVisible";
      if (choices[curbed_index].length != typedText.length) {
        typedText = choices[curbed_index].slice(0, typedText.length + 1);
      } else {
        state = "waitDown";
      }
    } else if (state == "waitDown") {
      typeCursor = "typeCursorInvisible";
      state = "waitUp";
    } else if (state == "waitUp") {
      typeCursor = "typeCursorVisible";
      state = "delete";
    } else if (state == "delete") {
      if (typedText.length >= 1) {
        typedText = typedText.slice(0, -1);
        typeCursor =
          typedText.length == 0 ? "typeCursorInvisible" : "typeCursorVisible";
      } else {
        state = "typing";
        index++;
      }
    }
  }

  setInterval(typer, 200);

  let pages = [
    { name: "Home", href: "/index", children: [] },
    { name: "About", href: "/about", children: [] },
    { name: "Volunteer", href: "/volunteer", children: [] },
    {
      name: "Internship",
      href: "#",
      children: [
        { name: "Bibliometrics", href: "/research" },
        { name: "Other", href: "/internship" },
      ],
    },
    // {
    //   name: "Articles",
    //   href: "#",
    //   children: [
    //     { name: "Newsletter", href: "/newsletter" },
    //     { name: "Resources", href: "https://think-neuro.ck.page/profile" },
    //   ],
    // },
    { name: "FAQs", href: "/faq", children: [] },
  ];
</script>

<svelte:window bind:innerWidth={viewWidth} />

<main>
  <div id="navbar">
    {#if viewWidth >= 500}
      <div class="inRow">
        {#each pages as page}
          {#if page.children.length > 0}
            <div class="linkContainer" id="dropdownParent">
              <div class="inRow">
                <div id="linkTitle">{page.name}</div>
                <svg
                  id="downIcon"
                  fill="white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"
                  /></svg
                >
              </div>
              <div id="dropdown">
                <div id="dropdownContent">
                  {#each page.children as childpage}
                    <a id="dropdownLinkContainer" href={childpage.href}>
                      <div id="dropdownLinkTitle">
                        {childpage.name}
                      </div>
                    </a>
                  {/each}
                </div>
              </div>
            </div>
          {:else}
            <a class="linkContainer" href={page.href}>
              <div class="link">{page.name}</div>
            </a>
          {/if}
        {/each}
      </div>
    {:else}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        use:clickOutside
        on:click_outside={() => {
          open = false;
        }}
      >
        <svg
          id="hamburger"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          on:click={() => {
            open = !open;
          }}
          transform="rotate({open ? '90' : '0'})"
        >
          <path
            d="M20 7L4 7"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M20 12L4 12"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M20 17L4 17"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>

        {#if open}
          <div class="inColumn">
            {#each pages as page}
              {#if page.children.length > 0}
                <a id="horizontalLinkContainer" href={page.href}>
                  <div class="link">{page.name}</div>
                </a>
                {#each page.children as subpage}
                  <a id="horizontalLinkContainerChild" href={subpage.href}>
                    <div id="horizontalChildClickable">
                      <div class="link">| {subpage.name}</div>
                    </div>
                  </a>
                {/each}
              {:else}
                <a id="horizontalLinkContainer" href={page.href}>
                  <div class="link">{page.name}</div>
                </a>
              {/if}
            {/each}
          </div>
        {/if}
      </div>
    {/if}
  </div>

  {#if headbar}
    <div id="header">
      <img id="logo" src="assets/logo.png" alt="logo" />
      <div id="titleHolder" class="inColumn">
        <div class="title">ThinkNeuro,</div>

        <div class="inRow">
          <div class="title">Think {typedText}</div>
          <div class="title" id={typeCursor}>|</div>
        </div>
      </div>
    </div>
  {/if}
</main>

<style>
  @font-face {
    font-family: think;
    src: url("../fonts/analogue65medium.ttf");
  }
  #downIcon {
    object-fit: fill;
    width: 16px;
    height: 12px;
  }
  #typeCursorVisible {
    opacity: 100%;
  }
  #typeCursorInvisible {
    opacity: 0%;
  }
  .title {
    font-size: 35px;
    font-family: think;
    white-space: nowrap;
  }
  #logo {
    object-fit: contain;
    margin-right: 20px;
    width: 100px;
  }
  #header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px;
    background-image: linear-gradient(to bottom right, #a9caf9, #6f947d);
    color: white;
  }
  #horizontalLinkContainer {
    width: 100%;
    padding: 12px;
    text-decoration: none;
    background-color: grey;
  }
  #horizontalLinkContainerChild {
    padding-left: 22px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    background-color: grey;
    cursor: default;
  }
  #horizontalChildClickable {
    width: 100%;
    padding: 12px;
    background-color: grey;
    cursor: pointer;
  }
  #horizontalChildClickable:hover {
    background-color: red;
  }
  #horizontalLinkContainer:hover {
    background-color: red;
  }
  #hamburger {
    object-fit: contain;
    width: 36px;
    cursor: pointer;
  }
  #navbar {
    background-color: #333;
    height: fit-content;
  }
  #linkTitle {
    font-size: 16px;
    color: white;
  }
  #dropdownLinkTitle {
    font-size: 16px;
    color: black;
  }
  #dropdown {
    position: relative;
    display: none;
  }
  #dropdownParent:hover > #dropdown {
    display: block;
  }
  #dropdownContent {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 1;
    width: 100%;
    left: -12px;
    top: 12px;
  }
  #dropdownLinkContainer {
    padding: 12px;
    width: 100%;
    background-color: white;
    text-decoration: none;
  }
  #dropdownLinkContainer:hover {
    background-color: whitesmoke;
  }
  .linkContainer {
    padding: 12px;
    text-decoration: none;
    width: fit-content;
  }
  .link {
    font-size: 16px;
    color: white;
  }
  .linkContainer:hover {
    background-color: red;
  }
  @media (max-width: 600px) {
    .title {
      font-size: 5.3vw;
    }
    #logo {
      width: 14vw;
      margin-right: 2vw;
    }
  }
</style>
