"use server";

import prisma from "@/lib/prisma/prismadb";
import { revalidatePath } from "next/cache";

//Add
export const addNews = async (formData: FormData) => {
  try {
    await prisma.news
      .create({
        data: {
          title: formData.get("title") as string,
          date: new Date(formData.get("date") as string),
          content: formData.get("content") as string,
        },
      })
      .finally(() => prisma.$disconnect());
    revalidatePath(`/`);
  } catch (error: any) {
    return {
      error: "Something went wrong, try again",
    };
  }
};
