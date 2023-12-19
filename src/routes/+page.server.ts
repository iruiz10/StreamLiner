import prisma from '$lib/prisma';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
  const response = await prisma.post.findMany({
    include: { author: true },
  })
  
  return { feed: response };
};