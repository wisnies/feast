import { PrismaClient } from '@prisma/client';
import { events } from '../src/libs/data/events.data';

const prisma = new PrismaClient();

async function main() {
  console.log('DELETE EVENTS');
  await prisma.event.deleteMany();
  console.log('CREATE EVENTS');

  events.forEach(async (event) => {
    await prisma.event.create({
      data: {
        title: event.title,
        slug: event.slug,
        thumbnail: event.thumbnail,
        date: event.date,
        description: event.description,
        header: event.header,
        body: JSON.stringify(event.body),
        pricing: JSON.stringify(event.pricing),
        timeline: JSON.stringify(event.timeline),
      },
    });
  });
}
main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => prisma.$disconnect());
