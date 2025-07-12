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
  return {
    message: "title must be longer",
  };
  //   // Validate user input
  //   const title = formData.get("title") as string;
  //   const code = formData.get("code") as string;

  //   // Create a new DataBase record
  //   const snippet = await db.snippet.create({
  //     data: {
  //       title,
  //       code,
  //     },
  //   });

  //   console.log(snippet);

  //   // Redirect user to back to home
  //   redirect("/");
}
