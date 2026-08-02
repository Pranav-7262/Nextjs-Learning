"use client";

import { createTodo } from "@/app/actions/todo.actions";

const TodoForm = () => {
  async function formAction(formData: FormData) {
    await createTodo(formData);

    const form = document.forms.namedItem("todoForm");
    form?.reset();
  }

  return (
    <form
      name="todoForm"
      action={formAction}
      className="mx-auto mb-8 flex w-full max-w-3xl items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/70 p-3 shadow-xl backdrop-blur"
    >
      <input
        type="text"
        name="title"
        placeholder="✨ What needs to be done?"
        required
        autoComplete="off"
        className="flex-1 rounded-xl bg-slate-800 px-5 py-3 text-white placeholder:text-slate-400 outline-none transition focus:ring-2 focus:ring-violet-500"
      />

      <button
        type="submit"
        className="rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-violet-500 hover:to-indigo-500 active:scale-95"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
