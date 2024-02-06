import React from 'react'
import ConvertTable from './convertTable'
import prisma from '@/lib/prisma/prismadb'

export default async function page() {
    const converts = await prisma.convert.findMany()
    const centers = await prisma.center.findMany()
    return (
        <>
            <ConvertTable converts={converts} centers={centers} />
        </>
    )
}
