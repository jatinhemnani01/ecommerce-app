<script>
  export let title;
  export let price;
  export let rating;
  export let image;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/card.min.css"
    integrity="sha512-u5E5vOHVsB0blcZniDNfaRkTfqdgjxIgLX17YlG0vjQyos7Z7b1BXLuhHZbF2JOVRrfNNd8P6v7fw87JaFw/Rg=="
    crossorigin="anonymous"
  />
</svelte:head>

<div id="card" class="ui card">
  <div class="image">
    <img id="image" loading="lazy" src={image} alt={title} />
  </div>
  <div id="content" class="content">
    <a class="header" href="/" id="title">{title}</a>
    <div class="meta">
      <strong>₹ {price}</strong>
    </div>
    <div style="float:right;bottom:0;position:absolute; right:0; padding:1em;">
      ⭐{rating}/10
    </div>
  </div>
</div>

<style>
  #card {
    cursor: pointer;
    margin: 0.5em;
    transition: ease 200ms;
  }
  #card:hover {
    transform: scale(1.1);
  }
  #content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #title {
    text-decoration: none;
  }
  strong {
    font-size: 1.4em;
  }
</style>
