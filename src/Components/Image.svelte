<script>
  export let props;
</script>

<img id="img" alt="poster" src={props} />

<style>
  #img {
    width: 500px;
    height: 300px;
    padding: 10px;
    object-fit: contain;
  }
  @media (max-width: 525px) {
    #img {
      width: 90vw;
      height: 50vw;
      object-fit: contain;
    }
  }
</style>
