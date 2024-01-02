"use server";

import prisma from "@/lib/prisma/prismadb";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";

export const addCenterMember = async (formData: FormData, date: any) => {
  try {
    await prisma.center
      .create({
        data: {
          member: formData.get("member") as string,
          location: formData.get("location") as string,
          elderName: formData.get("elderName") as string,
          centerLeader: formData.get("centerLeader") as string,
          centerSize: formData.get("centerSize") as string,
          phone: formData.get("phone") as string
        
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
