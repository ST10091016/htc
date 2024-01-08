"use server";

import prisma from "@/lib/prisma/prismadb";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";

//Add
export const addConvert = async (formData: FormData, date: any) => {
  try {
    await prisma.convert
      .create({
        data: {
          firstName: formData.get("firstName") as string,
          lastName: formData.get("lastName") as string,
          phone: formData.get("phone") as string,
          email: formData.get("email") as string,
          gender: formData.get("gender") as string,
          centerId: formData.get("centerId") as string,
          hashedPassword: await bcrypt.hash(
            formData.get("password") as string,
            10
          ),
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
export async function UpdateConvert(formData: FormData, memberId: string) {
  try {
    await prisma.convert
      .update({
        where: { id: memberId },
        data: {
          firstName: formData.get("firstName") as string,
          lastName: formData.get("lastName") as string,
          phone: formData.get("phone") as string,
          email: formData.get("email") as string,
          gender: formData.get("gender") as string,
          status: formData.get("status") as string,
          followUp: formData.get("followUp") as string,
          actions: formData.get("actions") as string,
          centerId: formData.get("centerId") as string,
        },
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

//Delete
export async function DeleteConvert(Id: string) {
  try {
    await prisma.convert
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
