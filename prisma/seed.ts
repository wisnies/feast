import { PrismaClient } from '@prisma/client';
import { events } from '../src/libs/data/events.data';

const prisma = new PrismaClient();

async function main() {
  console.log('DELETE EVENTS');
  await prisma.event.deleteMany();
  console.log('CREATE EVENTS');

  events.forEach(async (event) => {
    await prisma.event.create({
      data: event,
    });
  });
}
main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => prisma.$disconnect());
