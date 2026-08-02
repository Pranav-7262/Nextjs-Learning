"use server";
import { db } from "@/config/db";
import { redirect } from "next/navigation";
export const contactAction = async (previousState, formData) => {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const message = formData.get("message");
  await db.execute(
    `INSERT INTO contact (fullName,email,message) VALUES (?,?,?)`,
    [fullName, email, message],
  );
  console.log("data inserted successfully");
  // return { success: true, message: "Data inserted successfully" };
  redirect("/"); //only used in server components and server actions to redirect the user to a different page after the action is completed.
};
