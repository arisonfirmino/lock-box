"use server";

import { db } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

interface CreateNewUserProps {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export const createNewUser = async ({
  firstName,
  lastName,
  username,
  email,
  password,
}: CreateNewUserProps) => {
  if (!email) {
    throw new Error("Por favor, forneça um e-mail válido.");
  }

  const isEmailExist = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (isEmailExist) {
    throw new Error("Este e-mail já está em uso. Tente outro.");
  }

  if (!username) {
    throw new Error("Por favor, forneça um nome de usuário.");
  }

  const isUsernameExist = await db.user.findUnique({
    where: {
      username,
    },
  });

  if (isUsernameExist) {
    throw new Error("Este nome de usuário já está em uso. Escolha outro.");
  }

  if (!firstName || !lastName || !username || !email || !password) {
    throw new Error("Todos os campos obrigatórios precisam ser preenchidos.");
  }

  await db.user.create({
    data: {
      firstName,
      lastName,
      username,
      email,
      password,
    },
  });

  revalidatePath("/");
};
