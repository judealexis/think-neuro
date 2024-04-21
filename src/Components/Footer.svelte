<script>
  export let locked = false;
</script>

<main>
  <div class:fixed={locked} id="footer">© Think Neuro 2024-2025</div>
</main>

<style>
  .fixed {
    position: fixed;
  }
  #footer {
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
