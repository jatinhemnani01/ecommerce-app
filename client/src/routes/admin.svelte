<script context="module">
  export const prerender = true;
</script>

<script>
  import { goto } from "$app/navigation";
  import { isAdmin } from "$lib/store/isAdmin.js";
  let username;
  let password;
  let errors = "";

  function auth() {
    if (username === "admin" && password === "admin.") {
      $isAdmin = true;
      goto("/panel");
    } else {
      errors = "Wrong Username Or Password";
    }
    username = "";
    password = "";
  }
</script>

{#if $isAdmin}
  <h1>You Are Logged In</h1>
  <h3>Go To <a href="/panel">Panel</a></h3>
{:else}
  <form on:submit|preventDefault={auth}>
    <input type="text" placeholder="Username" bind:value={username} />
    <input type="password" placeholder="Password" bind:value={password} />
    <input type="submit" />
  </form>
{/if}

<h1>{errors}</h1>
