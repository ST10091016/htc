"use server";

import prisma from "@/lib/prisma/prismadb";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";

//Add
export const addWorshipCenter = async (formData: FormData, date: any) => {
  try {
    await prisma.center
      .create({
        data: {
          title: formData.get("title") as string,
          firstName: formData.get("firstName") as string,
          lastName: formData.get("lastName") as string,
          address: formData.get("address") as string,
          postalCode: formData.get("postalCode") as string,
          phone: formData.get("phone") as string,
          email: formData.get("email") as string,
          gender: formData.get("gender") as string,
          birthDate: date as string,
          baptism:
            (formData.get("baptism") as string) === "true" ? true : false,
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
export async function UpdateWorshipCenter(
  formData: FormData,
  memberId: string,
  date: any
) {
  try {
    await prisma.center
      .update({
        where: { id: memberId },
        data: {
          title: formData.get("title") as string,
          firstName: formData.get("firstName") as string,
          lastName: formData.get("lastName") as string,
          address: formData.get("address") as string,
          postalCode: formData.get("postalCode") as string,
          phone: formData.get("mobile") as string,
          email: formData.get("email") as string,
          gender: formData.get("gender") as string,
          birthDate: date as string,
          baptism:
            (formData.get("baptism") as string) === "true" ? true : false,
          centerId: formData.get("centerId") as string,
          hashedPassword: await bcrypt.hash(
            formData.get("password") as string,
            10
          ),
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
