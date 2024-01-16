import React from 'react'
import AddVideo from './AddVideo';
import VideoCard from './VideoCard';
import prisma from '@/lib/prisma/prismadb';

export default async function page() {
    const videos = await prisma.videos
      .findMany()
      .finally(() => prisma.$disconnect());

  return (
    <>
      <div className="flex py-5 justify-end">
        <AddVideo />
      </div>
      <VideoCard videos={videos} />
    </>
  );
}
