const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const countries = await prisma.country.findMany({
    select: {
      country_id: true,
      country: true,
    },
    take: 10,
  });
  console.log(countries);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
