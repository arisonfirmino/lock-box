"use server";

import { db } from "@/app/lib/prisma";

export const isEmailAvailable = async (email: string) => {
  if (!email) {
    throw new Error("O e-mail é obrigatório");
  }

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  return !existingUser;
};

export const isUsernameAvailable = async (username: string) => {
  if (!username) {
    throw new Error("O nome de usuário é obrigatório");
  }

  const existingUsername = await db.user.findUnique({
    where: {
      username,
    },
  });

  return !existingUsername;
};

export const findUserByEmailOrUsername = async (emailOrUsername: string) => {
  if (!emailOrUsername) {
    throw new Error("Por favor, forneça um e-mail ou nome de usuário.");
  }

  const user = await db.user.findFirst({
    where: {
      OR: [{ email: emailOrUsername }, { username: emailOrUsername }],
    },
  });

  return user;
};

export const comparePassword = async (
  emailOrUsername: string,
  password: string,
) => {
  if (!password) {
    throw new Error("Por favor, forneça uma senha.");
  }

  const user = await findUserByEmailOrUsername(emailOrUsername);

  if (!user) {
    return false;
  }

  return user.password === password;
};
