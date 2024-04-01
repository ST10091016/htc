import React from "react";
import RegisterForm from "./components/registerForm";
import prisma from "@/lib/prisma/prismadb";

export default async function Page() {
  const centers = await prisma.center.findMany().finally(() => {
    prisma.$disconnect();
  });

  return (
    <section className="bg-center bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/946186/pexels-photo-946186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-gray-500 bg-blend-multiply">
      <div className="flex items-center justify-center h-screen">
        <div className="w-full mx-4 max-w-sm p-4 align-middle bg-white bg-opacity-20 rounded-lg shadow-xl hover:shadow-2xl sm:p-6 md:p-8 transition-all ease-in-out">
          <RegisterForm centers={centers} />
        </div>
      </div>
    </section>
  );
}
