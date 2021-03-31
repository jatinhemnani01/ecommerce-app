<script>
  import { isAdmin } from "$lib/store/isAdmin";
  import { products } from "$lib/store/products";
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  let name;
  let price;
  let desc;
  let rating;
  let image;

  async function addProduct() {
    let newProduct = {
      product_name: name,
      product_price: price,
      product_desc: desc,
      product_rating: rating,
      product_image: image,
    };

    await fetch("https://stormy-spire-31713.herokuapp.com/add", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        console.log("Success");
        getProducts();
      })
      .catch((e) => console.log(e));

    name = "";
    price = null;
    desc = "";
    rating = null;
    image = "";
  }

  async function getProducts() {
    let res = await fetch("https://stormy-spire-31713.herokuapp.com/");
    $products = await res.json();
  }

  async function deleteProduct(id) {
    await fetch(`https://stormy-spire-31713.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then(() => console.log("Deleted"))
      .catch((e) => console.log(e));
    getProducts();
  }

  onMount(() => {
    getProducts();
  });
</script>

{#if $isAdmin}
  <div class="add-product">
    <form on:submit|preventDefault={addProduct}>
      <input type="text" placeholder="Name" bind:value={name} />
      <input type="number" placeholder="Price" bind:value={price} />
      <input type="number" placeholder="Rating" bind:value={rating} />
      <input type="text" placeholder="Description" bind:value={desc} />
      <input type="text" placeholder="Image Link" bind:value={image} />
      <input type="submit" />
    </form>
  </div>
{:else}
  <h2>You Are Not Logged In. Log In <a href="/admin">Here</a></h2>
{/if}

{#each $products as product (product._id)}
  <div transition:fade={{ duration: 320 }} animate:flip={{ duration: 500 }}>
    <h3>{product.product_name}</h3>
    <button on:click={() => deleteProduct(product._id)}>Delete</button>
  </div>
{/each}

<style>
  .add-product {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  input {
    margin: 5px;
    font-size: 17px;
  }
</style>
