"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
  console.log("edit snipper called", { id, code });

  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  redirect("/");
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  // Validate user input
  const title = formData.get("title");
  const code = formData.get("code");

  // Validation Checks
  if (typeof title !== "string" || title.length < 3) {
    return {
      message: "Title must be longer",
    };
  }
  if (typeof code !== "string" || code.length < 10) {
    return {
      message: "Code must be longer",
    };
  }
  // Create a new DataBase record
  const snippet = await db.snippet.create({
    data: {
      title,
      code,
    },
  });

  console.log(snippet);

  // Redirect user to back to home
  redirect("/");
}
