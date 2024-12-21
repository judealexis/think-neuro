<script>
  export let prop;

  let href = "#";

  let text = prop[0];
  let button = prop[1];
  let buttonActive = prop[2];
  let buttonText = prop[3];

  try {
    href = prop[4];
  } catch {}
</script>

<main>
  <div id="text">
    {#if text == "αβγ"}
      ThinkNeuro offers clinical research projects pertaining to bibliometrics,
      the study of productivity within medical literature in neuroscience and
      related disciplines. By enrolling in our Student Research Internship
      Program, you will learn how to analyze relevant healthcare data using the
      R programming language and navigate the Web of Science Core Collection
      (WoSCC) software. All researchers have their names listed on a research
      poster at our Fall Symposium as well as deliver an oral presentation of
      their work. If you are a high school or undergraduate student interested
      in our Student Research Internship Program, please watch our free seminar
      <a href="https://www.youtube.com/watch?v=v1k6_G6ecE0">here</a>
      to gauge if this program is a good fit for you and your career aspirations.
      If so, please reference this
      <a href="https://www.youtube.com/watch?v=FC_UtrEdwYw"> guide </a>
      created by our staff to fill out the application below.
    {:else}
      {text}
    {/if}
  </div>
  {#if button}
    <button id={buttonActive}>
      <a {href} id="internalBtn" class="inRow">
        <div id="buttonText">{buttonText}</div>
        <svg
          id="arrow"
          class="icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
          />
        </svg>
      </a>
    </button>
  {/if}
</main>

<style>
  @font-face {
    font-family: thinkP;
    src: url("../fonts/analogue55regular.ttf");
  }
  #internalBtn {
    text-decoration: none;
  }
  #text {
    font-size: 23px;
    text-align: left;
    font-family: thinkP;
  }
  #click {
    margin-top: 25px;
    background-color: #3498db;
    border: 2px solid #3498db;
    border-radius: 10px;
    padding: 15px;
    color: white;
    cursor: pointer;
    transition-duration: 0.4s;
  }
  #clickDisabled {
    margin-top: 25px;
    background-color: #3498db;
    border: 2px solid #3498db;
    border-radius: 10px;
    padding: 15px;
    color: white;
    opacity: 0.6;
    cursor: not-allowed;
  }
  #buttonText {
    font-size: 18px;
    color: white;
    margin-right: 10px;
  }
  #arrow {
    fill: white;
  }
  #click:hover {
    background-color: white;
  }
  #click:hover > .inRow > #buttonText {
    color: black;
  }
  #click:hover > .inRow > #arrow {
    fill: black;
  }
  @media (max-width: 600px) {
    #text {
      font-size: 4vw;
    }
    #buttonText {
      font-size: 3vw;
    }
    #click {
      padding: 2.5vw;
    }
    #clickDisabled {
      padding: 2.5vw;
    }
  }
  @media (max-width: 400px) {
    #arrow {
      width: 4vw !important;
    }
  }
  @media (max-width: 500px) {
    #click {
      margin-top: 5vw;
    }
    #clickDisabled {
      margin-top: 5v;
    }
  }
</style>
