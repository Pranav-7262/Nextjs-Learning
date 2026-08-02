import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import Image from "next/image";
import { getTodos } from "./actions/todo.actions";

export default async function Home() {
  const todos = await getTodos();
  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-white">
          My Todo App
        </h1>

        <TodoForm />

        <TodoList todos={todos} />
      </div>
    </main>
  );
}
