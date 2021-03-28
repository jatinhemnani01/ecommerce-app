<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/card.min.css"
    integrity="sha512-u5E5vOHVsB0blcZniDNfaRkTfqdgjxIgLX17YlG0vjQyos7Z7b1BXLuhHZbF2JOVRrfNNd8P6v7fw87JaFw/Rg=="
    crossorigin="anonymous"
  />
</svelte:head>

<div class="ui card">
  <div class="image">
    <img
      src="https://pngimg.com/uploads/running_shoes/running_shoes_PNG5827.png"
      alt="cart"
    />
  </div>
  <div class="content">
    <a class="header" href="/" id="title">Kristy</a>
    <div class="meta">
      <strong>$10</strong>
    </div>
    <div class="description">Kristy is an art director living in New York.</div>
  </div>
</div>

<style>
  #title {
    text-decoration: none;
  }
  strong {
    font-size: 1.4em;
  }
</style>
