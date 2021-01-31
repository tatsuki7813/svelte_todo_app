export const loadTodos = () => {
  const rawTodos = sessionStorage.getItem('todos');
  return rawTodos ? JSON.parse(rawTodos) : [];
}

export const saveTodos = (todos) => {
  sessionStorage.setItem('todos', JSON.stringify(todos));
  console.log(sessionStorage.getItem('todos'));
}

export const addTodo = (todo) => {
  const currentTodos = loadTodos();
  const newTodos = [...currentTodos, todo];
  saveTodos(newTodos);
}

export const updateTodo = (todoId, todo) => {
  const currentTodos = loadTodos();
  currentTodos[todoId] = todo;
  const newTodos = currentTodos;
  saveTodos(newTodos);
}