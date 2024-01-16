"use server";

import prisma from "@/lib/prisma/prismadb";
import { revalidatePath } from "next/cache";

//Add
export const addVideo = async (formData: FormData) => {
  try {
    await prisma.videos
      .create({
        data: {
          title: formData.get("title") as string,
          date: new Date(formData.get("date") as string),
          link: formData.get("link") as string,
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

//DeleteVideo
export async function DeleteVideo(Id: string) {
  try {
    await prisma.videos
      .delete({
        where: { id: Id },
      })
      .finally(() => {
        prisma.$disconnect(), revalidatePath(`/`);
      });
  } catch (error) {
    return {
      error: "Something went wrong, try again",
    };
  }
}