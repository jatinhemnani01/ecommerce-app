<script>
  import { cartCount } from "$lib/store/cartCount";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
</svelte:head>

<nav>
  <div class="left-side">
    <a class="nav-item" href="/">Home</a>
    <a class="nav-item" href="/">Offers</a>
    <a class="nav-item" href="/">Latest</a>
    <a class="nav-item" href="/admin">Admin Panel</a>
  </div>
  <div class="right-side">
    <div class="cart">
      <i class="fa fa-shopping-cart" style="font-size:48px;" />
      <div class="cart-count">{$cartCount}</div>
    </div>
  </div>
</nav>

<style>
  nav {
    cursor: pointer;
    background-color: #34495e;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .left-side {
    padding: 0.7em;
  }
  .nav-item {
    list-style-type: none;
    margin: 10px;
    text-decoration: none;
    color: white;
    font-size: 1.1em;
    transition: ease 200ms;
  }
  .nav-item:hover {
    color: #f5f934;
  }
  .cart {
    display: flex;
    padding: 0.2em;
    justify-content: center;
    align-items: center;
  }
  .cart i {
    margin-right: 10px;
    color: #9f1def;
  }
  .right-side div {
    font-size: 1.4em;
    color: yellow;
    text-align: center;
  }

  @media screen and (max-width: 310px) {
    nav {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
