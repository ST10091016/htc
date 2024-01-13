"use server";

import prisma from "@/lib/prisma/prismadb";
import { revalidatePath } from "next/cache";

//Visitor RSVP
export const EventRSVP = async (formData: FormData, eventID : string) => {
  try {
    await prisma.rsvp
      .create({
        data: {
          firstName: formData.get("firstName") as string,
          lastName: formData.get("lastName") as string,
          email: formData.get("email") as string,
          phone: formData.get("phone") as string,
          attendees: parseInt(formData.get("attendees") as string),
          eventId: eventID,
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
