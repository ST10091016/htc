"use server";

import prisma from "@/lib/prisma/prismadb";
import { revalidatePath } from "next/cache";

//Add
export const addEvent = async (formData: FormData) => {
  try {
    await prisma.event
      .create({
        data: {
          name: formData.get("name") as string,
          date: new Date( formData.get("date") as string),
          time: formData.get("time") as string,
          location: formData.get("location") as string,
          description: formData.get("description") as string,
          sizeLimit: parseInt(formData.get("sizeLimit")as string),
        },
      })
      .finally(() => prisma.$disconnect());
    revalidatePath(`/`);
  } catch (error: any) {
    console.log(error)
    return {
      error: "Something went wrong, try again",
    };
  }}

export async function UpdateEvent(
  formData: FormData,
  Id: string
  // date: any
) {
  try {
    await prisma.event
      .update({
        where: { id: Id },
        data: {
          name: formData.get("name") as string,
          date: new Date(formData.get("date") as string),
          time: formData.get("time") as string,
          location: formData.get("location") as string,
          description: formData.get("description") as string,
          sizeLimit: parseInt(formData.get("sizeLimit") as string),
        },
      })
      .finally(() => {
        prisma.$disconnect(), revalidatePath(`/`);
      });
  } catch (error) {
        console.log(error); 
    return {
      error: "Something went wrong, try again",
    };
  }
};

//DeleteNews
export async function DeleteEvent(Id: string) {
  try {
    await prisma.event
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
