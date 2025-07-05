<!-- SmartText.svelte -->
<script>
  import { interpret } from "./interpreter.js";
  export let text = "";
  // parse into a tree of nodes
  let nodes = interpret(text);
</script>

{#each nodes as node}
  {#if node.label === "break"}
    <br />
  {:else if node.label === "link"}
    <a href={node.text.split("θ")[0]}>{node.text.split("θ")[1]}</a>
  {:else if node.label === "list"}
    <ul>
      {#each node.children as item}
        <li>
          {#if item.children.length > 0}
            {#each item.children as sub}
              {#if sub.label === "link"}
                <a href={sub.text.split("θ")[0]}>{sub.text.split("θ")[1]}</a>
              {:else}
                <span id={sub.label}>{sub.text}</span>
              {/if}
            {/each}
          {:else}
            {item.text}
          {/if}
        </li>
      {/each}
    </ul>
  {:else if node.children.length > 0}
    <span id={node.label}>
      {#each node.children as child}
        <span id={child.label}>{child.text}</span>
      {/each}
    </span>
  {:else}
    <span id={node.label}>{node.text}</span>
  {/if}
{/each}

<style>
  #blue {
    font-family: thinkSmart;
    color: #809abf;
  }
  #white {
    font-family: think;
    color: white;
  }
  #black {
    font-family: thinkPs;
  }
  #emphasis {
    font-family: think;
    color: black;
  }
  #italic {
    font-style: italic;
  }
  #textIt {
    /* whatever custom styling you like */
  }
  #tabbed {
    margin-left: 2em;
  }
  /* ensure break still gives visual space */
  #break {
    display: block;
    height: 1em;
  }
  a {
    color: #007acc;
    text-decoration: underline;
  }
</style>
