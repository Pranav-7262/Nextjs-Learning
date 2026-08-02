"use client";

import { Todo } from "@/types/type";
import { getUnCompletedTodos } from "../actions/todo.actions";
import { useEffect, useState } from "react";

const page = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const completedTodos = await getUnCompletedTodos();
        setTodos(completedTodos);
      } catch (error) {
        console.error("Error fetching completed todos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading uncompleted todos...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Uncompleted Todos</h1>

      {todos.length === 0 ? (
        <p className="text-lg">No uncompleted todos found.</p>
      ) : (
        <div className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="p-4 rounded-lg border bg-green-50 border-green-300 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-green-800">
                {todo.title}
              </h2>

              <p className="text-sm text-gray-500">
                Updated:{" "}
                {new Date(todo.updated_at).toLocaleString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
