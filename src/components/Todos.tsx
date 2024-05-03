import { signal, computed } from "@preact/signals";

const todos = signal([
  { text: "todo 1", completed: true },
  { text: "todo 2", completed: false },
  { text: "todo 3", completed: false },
]);
const text = signal("");
const Todos = () => {
  function addTodo() {
    todos.value = [...todos.value, { text: text.value, completed: false }];
    text.value = "";
  }
  const onInput = (event: Event | any) =>
    (text.value = event?.currentTarget.value);

  function removeTodo(todo: object) {
    todos.value = todos.value.filter((val) => val !== todo);
  }

  const completedCount = computed(() => {
    return todos.value.filter((todo) => todo.completed).length;
  });
  return (
    <div>
      <input
        value={text.value}
        onInput={onInput}
        style={{ height: "30px", marginRight: "10px" }}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.value.map((todo) => (
          <li>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onInput={() => {
                  todo.completed = !todo.completed;
                  todos.value = [...todos.value];
                }}
              />
              {todo.completed ? <s>{todo.text}</s> : todo.text}
            </label>
            <button onClick={() => removeTodo(todo)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Completed count: {completedCount.value}</p>
    </div>
  );
};

export default Todos;
