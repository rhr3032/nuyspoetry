import bcrypt from "bcryptjs";

import { prisma } from "../lib/prisma";

async function main() {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  if (!username || !password) {
    throw new Error("ADMIN_USERNAME and ADMIN_PASSWORD are required for seeding.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.upsert({
    where: { username },
    update: { password: hashedPassword },
    create: {
      username,
      password: hashedPassword,
    },
  });

  console.log(`Seed complete. Admin user '${username}' is ready.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
