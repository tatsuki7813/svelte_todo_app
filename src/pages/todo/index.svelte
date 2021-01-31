<script>
  import { url } from '@roxi/routify'

  const dummyTodoList = [
    { title: 'サンバの練習をする', content: '明日の13時に駅の公園でサンバの練習をする' },
    { title: '蛇ヶ池にいく', content: '幻の古代魚を見にいく' }
  ]
</script>

<h2>TODOリスト</h2>
{#each dummyTodoList as dummyTodo}
<div class=todo_item>
  <h3>{dummyTodo.title}</h3>
  <h4>{dummyTodo.content}</h4>
</div>
{/each}
<a href={$url('./new')}>TODOを追加する</a>

<style>
  .todo_item {
    background-color: darkgray;
    margin: 10px 0;
  }
</style>