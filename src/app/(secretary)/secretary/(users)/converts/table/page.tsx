import React from 'react'
import ConvertTable from './convertTable'
import prisma from '@/lib/prisma/prismadb'

export default async function page() {
    const converts = await prisma.convert.findMany()
    return (
        <>
            <ConvertTable converts={converts} />
        </>
    )
}
