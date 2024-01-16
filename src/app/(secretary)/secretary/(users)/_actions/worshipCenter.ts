"use server";

import prisma from "@/lib/prisma/prismadb";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";

//Add
export const addWorshipCenter = async (formData: FormData) => {
  try {
    await prisma.center
      .create({
        data: {
          name: formData.get("name") as string,
          location: formData.get("location") as string,
          elderName: formData.get("elderName") as string,
          centerLeader: formData.get("centerLeader") as string,
          centerSize: formData.get("centerSize") as string,
          contact: formData.get("phone") as string,
        },
      })
      .finally(() => prisma.$disconnect());
    revalidatePath(`/`);
  } catch (error: any) {
    if (error.code === "P2002") {
      return {
        error: "Email already exists",
      };
    }
    return {
      error: "Something went wrong, try again",
    };
  }
};

//Update
export async function UpdateWorshipCenter(
  formData: FormData,
  memberId: string,

) {
  try {
    await prisma.center
      .update({
        where: { id: memberId },
        data: {
          name: formData.get("name") as string,
          location: formData.get("location") as string,
          elderName: formData.get("elderName") as string,
          centerLeader: formData.get("centerLeader") as string,
          centerSize: formData.get("centerSize") as string,
          contact: formData.get("phone") as string,
        },
      })
      .finally(() => {
        prisma.$disconnect(), revalidatePath(`/`);
      });
  } catch (error) {
    console.log(error)
    return {
      error: "Something went wrong, try again",
    };
  }
}

//Delete
export async function DeleteWorshipCenter(memberId: string) {
  try {
    await prisma.center
      .delete({
        where: { id: memberId },
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
