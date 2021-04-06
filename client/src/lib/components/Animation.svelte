<script>
  import { fly } from "svelte/transition";
</script>

<div in:fly={{ duration: 300, x: 300 }} out:fly={{ duration: 500, x: 300 }}>
  <slot />
</div>

<style>
  div {
    position: absolute;
  }
</style>
