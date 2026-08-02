import { getTodoById } from "@/app/actions/todo.actions";
import TodoDetailsContent from "@/components/TodoDetailsContent";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const todo = await getTodoById(Number(id));

  return <TodoDetailsContent todo={todo} />;
}