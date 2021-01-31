<script>
  export let title;
  export let content;
</script>

<input type="text" placeholder="タイトル" bind:value={title}>
<textarea placeholder="内容" bind:value={content}></textarea>