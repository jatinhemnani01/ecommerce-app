<script context="module">
  export async function load({ page, fetch }) {
    const res = await fetch(
      `https://stormy-spire-31713.herokuapp.com/${page.params.id}`
    );
    return {
      props: {
        post: await res.json(),
      },
    };
  }
</script>

<script>
  import Animation from "$lib/components/Animation.svelte";

  export let post;
</script>

<!-- <Animation> -->
<div>{post.product_name}</div>
<!-- </Animation> -->
