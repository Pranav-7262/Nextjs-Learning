"use server";
import { prisma } from "@/lib/prisma";
import { Todo } from "@/types/type";
import { revalidatePath } from "next/cache";

export const createTodo = async (formData: FormData) => {
  try {
    const title = formData.get("title") as string;
    if (!title || title.trim() === "") {
      throw new Error("Title is required");
    }
    await prisma.todos.create({
      data: {
        title: title.trim(),
        completed: false,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error creating todo:", error);

    return {
      success: false,
      message: "Failed to create todo",
    };
  }
};

export const getTodos = async () => {
  try {
    const todos = await prisma.todos.findMany({
      orderBy: {
        created_at: "desc",
      },
    });

    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};
export const updateTodo = async (title: string, id: number) => {
  try {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      throw new Error("Title is required");
    }
    await prisma.todos.update({
      where: { id },
      data: { title: trimmedTitle },
    });
    console.log("Todo updated");
    revalidatePath("/");
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};
export const toggleTodo = async (id: number, completed: boolean) => {
  try {
    await prisma.todos.update({
      where: { id },
      data: { completed },
    });

    revalidatePath("/");
  } catch (error) {
    console.error(error);
  }
};
export const deleteTodo = async (id: number) => {
  try {
    await prisma.todos.delete({
      where: { id },
    });
    console.log("Todo deleted");
    revalidatePath("/");
  } catch (error) {
    console.error(error);
  }
};
export const getCompletedTodos = async () => {
  try {
    const data = (await prisma.todos.findMany({
      where: { completed: true },
      orderBy: {
        updated_at: "desc",
      },
    })) as [Todo[], unknown];
    revalidatePath("/completed");
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const getUnCompletedTodos = async () => {
  try {
    const data = (await prisma.todos.findMany({
      where: {
        completed: false,
      },
      orderBy: {
        updated_at: "desc",
      },
    })) as [Todo[], unknown];
    revalidatePath("/uncompleted");
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const getTodoById = async (id: number) => {
  try {
    const rows = await prisma.todos.findFirst({
      where: { id },
    });
    console.log(rows);
    return rows;
  } catch (error) {
    console.error("Error fetching todo:", error);
    return null;
  }
};
