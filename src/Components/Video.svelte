<script>
  export let props;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<iframe id="video" src={props}> </iframe>

<style>
  #video {
    width: 300px;
    height: 225px;
    object-fit: contain;
  }
  @media (max-width: 350px) {
    #video {
      width: 80vw;
      height: 60vw;
      object-fit: contain;
    }
  }
</style>
