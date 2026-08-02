"use client";

import { Pencil, Trash2, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";
import type { Todo } from "@/types/type";
import { deleteTodo } from "@/app/actions/todo.actions";

interface Props {
  todo: Todo | null;
}

export default function TodoDetailsContent({ todo }: Props) {
  if (!todo) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl text-slate-500">Todo not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 px-4 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl bg-slate-900 p-8 shadow-xl">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">{todo.title}</h1>

            <div className="mt-3">
              {todo.completed ? (
                <span className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={18} />
                  Completed
                </span>
              ) : (
                <span className="flex items-center gap-2 text-yellow-400">
                  <Clock size={18} />
                  Pending
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <Link
              href={`/todos/${todo.id}/edit`}
              className="rounded-lg bg-blue-500/10 p-3 text-blue-400 transition hover:bg-blue-500/20"
            >
              <Pencil size={20} />
            </Link>

            <button
              onClick={() => deleteTodo(todo.id)}
              type="button"
              className="rounded-lg bg-red-500/10 p-3 text-red-400 transition hover:bg-red-500/20"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        <div className="space-y-4 rounded-xl bg-slate-800 p-5 text-white">
          <div className="flex justify-between">
            <span className="text-slate-400">ID</span>
            <span>{todo.id}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Created</span>
            <span>{new Date(todo.created_at).toLocaleString("en-IN")}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Updated</span>
            <span>{new Date(todo.updated_at).toLocaleString("en-IN")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
