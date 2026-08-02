"use client";
import { deleteTodo, toggleTodo, updateTodo } from "@/app/actions/todo.actions";
import { Todo } from "@/types/type";
import { Check, Pencil, Trash2, X, Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface TodoItemProps {
  todo: Todo;
}
const TodoItem = ({ todo }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleUpdate = async () => {
    if (title.trim() === "") return;

    await updateTodo(title, todo.id);
    setIsEditing(false);
  };
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-900 p-4">
      <div className="flex flex-1 items-center gap-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id, !todo.completed)}
        />

        {isEditing ? (
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none focus:border-violet-500"
            autoFocus
          />
        ) : (
          <span
            className={`text-lg ${
              todo.completed ? "text-slate-500 line-through" : "text-white"
            }`}
          >
            {todo.title}
          </span>
        )}
      </div>
      <div className="ml-4 flex items-center gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleUpdate}
              className="rounded-lg p-2 text-green-400 transition hover:bg-green-500/10"
              title="Save"
            >
              <Check size={20} />
            </button>

            <button
              onClick={() => {
                setTitle(todo.title);
                setIsEditing(false);
              }}
              className="rounded-lg p-2 text-gray-400 transition hover:bg-slate-700"
              title="Cancel"
            >
              <X size={20} />
            </button>
          </>
        ) : (
          <>
            <Link
              href={`/todos/${todo.id}`}
              className="rounded-lg p-2 text-blue-400 transition hover:bg-blue-500/10"
              title="View Details"
            >
              <Eye size={20} />
            </Link>
            <button
              onClick={() => setIsEditing(true)}
              className="rounded-lg p-2 text-blue-400 transition hover:bg-blue-500/10"
              title="Edit"
            >
              <Pencil size={20} />
            </button>

            <button
              onClick={() => deleteTodo(todo.id)}
              className="rounded-lg p-2 text-red-400 transition hover:bg-red-500/10"
              title="Delete"
            >
              <Trash2 size={20} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
