import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Mike',
    email: 'michael@gmail.com',
    posts: {
      create: [
        {
          title: 'Mike\'s Schedule',
          content: 'Biology midterm on March 5, English essay due March 7',
          //published: true,
        },
      ],
    },
  },
  {
    name: 'Frank',
    email: 'frank@gmail.com',
    posts: {
      create: [
        {
          title: 'Frank\'s Workout Plan',
          content: 'Cardio every day for 30 minutes, arm exercises Monday Wednesday and Friday for 30 minutes, leg exercises Tuesday Thursday and Saturday for 30 minutes',
          //published: true,
        },
      ],
    },
  },
  {
    name: 'Trevor',
    email: 'trevor@yahoo.com',
    posts: {
      create: [
        {
          title: 'Trevor\'s Vacation Itinerary',
          content: 'Hit the beach at noon for three hours, visit the aquarium for two hours, then grab dinner',
          //published: true,
        },
      ],
    },
  },
]

async function main() {
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
