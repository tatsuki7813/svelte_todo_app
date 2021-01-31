<script>
  import { url } from '@roxi/routify';
  import { loadTodos } from './_components/assets/storage';
  const todoList = loadTodos();
</script>

<h2>TODOリスト</h2>
{#each todoList as todo}
<div class=todo_item>
  <h3>{todo.title}</h3>
  <h4>{todo.content}</h4>
</div>
{/each}
<a href={$url('./new')}>TODOを追加する</a>

<style>
  .todo_item {
    background-color: darkgray;
    margin: 10px 0;
  }
</style>