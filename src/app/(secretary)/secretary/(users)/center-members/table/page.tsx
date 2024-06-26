import React from 'react'
import CenterMemberTable from "./center-member-Table";
import prisma from '@/lib/prisma/prismadb'

export default async function page() {
    const centerMember = await prisma.center_Member.findMany();
        const centers = await prisma.center.findMany();
    return (
      <>
        <CenterMemberTable centerMember={centerMember} centers={centers} />
      </>
    );
}
