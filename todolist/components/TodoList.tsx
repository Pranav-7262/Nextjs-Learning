import { Todo } from "@/types/type";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div className="mt-10 rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 p-10 text-center">
        <h2 className="text-xl font-semibold text-slate-200">
          No tasks yet 🎉
        </h2>
        <p className="mt-2 text-slate-400">
          Add your first task to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
