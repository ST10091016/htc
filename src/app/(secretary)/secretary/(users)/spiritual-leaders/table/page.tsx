import React from 'react'
import SpiritualLeader from './spiritualLeaderTable'
import prisma from '@/lib/prisma/prismadb'

export default async function page() {
    const leader = await prisma.spiritual_leader.findMany()
    return (
        <>
            <SpiritualLeader spiritualLeader={leader} />
        </>
    )
}
