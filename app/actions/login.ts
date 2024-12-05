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

export const deleteLogin = async ({ id }: { id: string }) => {
  if (!id) {
    throw new Error("Por favor, forneça o ID.");
  }

  const login = await db.login.findUnique({
    where: {
      id,
    },
  });

  if (!login) {
    throw new Error("Login não encontrado.");
  }

  await db.login.delete({
    where: {
      id: login.id,
    },
  });

  revalidatePath("/");
};
