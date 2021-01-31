<script>
  export let todoId;
  import { url } from '@roxi/routify';
  import Editor from './_components/Editor.svelte';
  import { loadTodos, updateTodo } from './_components/assets/storage';
  const todo = loadTodos()[todoId];
  let title = todo.title;
  let content = todo.content;
  const onSave = () => {
    updateTodo(todoId, {title, content});
  }
</script>

<Editor bind:title={title} bind:content={content}></Editor>

<button onclick="location.href={$url('./index')}" on:click={onSave}>更新</button>
<button onclick="location.href={$url('./index')}">戻る</button>