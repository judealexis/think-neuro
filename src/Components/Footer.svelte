<script>
  export let locked = false;
</script>

<main>
  <div class:fixed={locked} id="footer">
    <div id="item">© ThinkNeuro 2025-2026</div>
    <a id="item" href="privacy.pdf">Privacy</a>
    <a id="item" href="tos.pdf">Terms of Service</a>
  </div>
</main>

<style>
  #item {
    margin-right: 5px;
  }
  .fixed {
    position: fixed;
  }
  #footer {
    gap: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    left: 0;
    bottom: 0;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    text-align: center;
    color: white;
    background-image: linear-gradient(to bottom right, #a9caf9, #6f947d);
  }
  @media (max-width: 400px) {
    #footer {
      font-size: 3.5vw;
    }
  }
</style>
