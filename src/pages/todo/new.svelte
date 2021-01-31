<script>
  import { url } from '@roxi/routify';
  import Editor from './_components/Editor.svelte';
  import { addTodo } from './_components/assets/storage';
  let title = '';
  let content = '';
  const onSave = () => {
    addTodo({title, content});
  }
</script>

<Editor bind:title={title} bind:content={content}></Editor>

<button onclick="location.href={$url('./index')}" on:click={onSave}>保存</button>
<button onclick="location.href={$url('./index')}">戻る</button>