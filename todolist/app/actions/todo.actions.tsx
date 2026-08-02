"use server";
import { db } from "@/lib/db";
import { Todo } from "@/types/type";
import { revalidatePath } from "next/cache";

export const createTodo = async (formData: FormData) => {
  try {
    const title = formData.get("title")?.toString().trim();
    if (!title) {
      throw new Error("Title is required");
    }
    await db.query("INSERT INTO todos (title, completed) VALUES (?, ?)", [
      title,
      false,
    ]);
    console.log("Data addded successfully");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};

export const getTodos = async () => {
  try {
    const [data] = (await db.query(
      "SELECT * FROM todos ORDER BY created_at DESC",
    )) as [Todo[], unknown];
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const updateTodo = async (title: string, id: number) => {
  try {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      throw new Error("Title is required");
    }
    await db.query("UPDATE todos SET title = ? WHERE id = ?", [
      trimmedTitle,
      id,
    ]);
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};
export const toggleTodo = async (id: number, completed: boolean) => {
  try {
    await db.query("UPDATE todos SET completed = ? WHERE id = ?", [
      completed,
      id,
    ]);

    revalidatePath("/");

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};
export const deleteTodo = async (id: number) => {
  try {
    await db.query("DELETE FROM todos  WHERE id = ?", [id]);
    console.log("Todo deleted");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};
export const getCompletedTodos = async () => {
  try {
    const [data] = (await db.query(
      "SELECT * FROM todos WHERE completed = 1 ORDER BY updated_at DESC",
    )) as [Todo[], unknown];
    revalidatePath("/completed");
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const getUnCompletedTodos = async () => {
  try {
    const [data] = (await db.query(
      "SELECT * FROM todos WHERE completed = 0 ORDER BY created_at DESC",
    )) as [Todo[], unknown];
    revalidatePath("/completed");
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const getTodoById = async (id: number) => {
  try {
    const [rows] = await db.query("SELECT * FROM todos WHERE id = ?", [id]);

    const data = rows as Todo[];
    console.log("sql :", data[0]);

    if (data.length === 0) {
      return null;
    }

    return data[0];
  } catch (error) {
    console.error("Error fetching todo:", error);
    return null;
  }
};
