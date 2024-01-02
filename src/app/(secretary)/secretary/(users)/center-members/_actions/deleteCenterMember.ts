"use server";

import prisma from "@/lib/prisma/prismadb";
import { revalidatePath } from "next/cache";

export async function DeleteCenterMember(memberId: string) {
  try {
    await prisma.center_Member
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
