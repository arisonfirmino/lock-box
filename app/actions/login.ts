"use server";

import { db } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

interface CreateNewLoginProps {
  userId: string;
  name: string;
  email?: string;
  username?: string;
  password: string;
  URL: string;
}

export const createNewLogin = async ({
  userId,
  name,
  email,
  username,
  password,
  URL,
}: CreateNewLoginProps) => {
  if (!userId) {
    throw new Error("Por favor, forneça um ID de usuário.");
  }

  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("Usuário não encontrado.");
  }

  await db.login.create({
    data: {
      userId: user.id,
      name,
      email,
      username,
      password,
      URL,
    },
  });

  revalidatePath("/");
};
