<script context="module">
  export const prerender = true;
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
  export let post;
</script>

<div>{post.product_name}</div>
