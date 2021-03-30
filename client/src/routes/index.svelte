<script>
  import Card from "$lib/components/Card.svelte";
  import { products } from "$lib/store/products";
  import { onMount } from "svelte";

  async function getProducts() {
    let res = await fetch("https://stormy-spire-31713.herokuapp.com/");
    $products = await res.json();
  }

  onMount(() => {
    getProducts();
  });
</script>

<div class="card-cont">
  <Card />
</div>

<style>
  .card-cont {
    padding: 1em;
    display: flex;
  }
</style>
