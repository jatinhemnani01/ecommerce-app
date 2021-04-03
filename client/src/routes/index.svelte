<script>
  import Card from "$lib/components/Card.svelte";
  import Loading from "$lib/components/Loading.svelte";
  import { products } from "$lib/store/products";
  import { onMount } from "svelte";
  import { loading } from "$lib/store/loading";

  async function getProducts() {
    let res = await fetch("https://stormy-spire-31713.herokuapp.com/");
    if (res.ok) {
      $products = await res.json();
      $loading = false;
    }
  }

  onMount(() => {
    getProducts();
  });
</script>

<div class="card-cont">
  {#if $loading}
    <Loading />
  {/if}
  {#each $products as product}
    <Card
      image={product.product_image}
      price={product.product_price}
      title={product.product_name}
      rating={product.product_rating}
      id={product._id}
    />
  {/each}
</div>

<style>
  .card-cont {
    padding: 1em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
  }
</style>
