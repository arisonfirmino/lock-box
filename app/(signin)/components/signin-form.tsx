"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import InputForm from "@/app/components/input-form";
import SubmitButton from "@/app/components/submit-button";

import { signIn } from "next-auth/react";
import {
  comparePassword,
  findUserByEmailOrUsername,
} from "@/app/helpers/existingUser";

const schema = yup.object({
  emailOrUsername: yup.string().required("Este campo é obrigatório."),
  password: yup.string().required("Este campo é obrigatório."),
});

type FormData = yup.InferType<typeof schema>;

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    const userExist = await findUserByEmailOrUsername(data.emailOrUsername);
    const isPasswordValid = await comparePassword(
      data.emailOrUsername,
      data.password,
    );

    if (!userExist) {
      setError("emailOrUsername", {
        type: "manual",
        message: "Usuário não cadastrado.",
      });

      setIsLoading(false);
      return;
    }

    if (!isPasswordValid) {
      setError("password", {
        type: "manual",
        message: "Senha incorreta.",
      });

      setIsLoading(false);
      return;
    }

    await signIn("credentials", {
      redirect: false,
      emailOrUsername: data.emailOrUsername,
      password: data.password,
    });

    reset();
    setIsLoading(false);
    router.replace("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 px-2.5 pb-2.5">
      <InputForm
        label="Email ou nome de usuário"
        register={{ ...register("emailOrUsername") }}
        error={errors.emailOrUsername}
      />
      <InputForm
        label="Senha"
        type="password"
        register={{ ...register("password") }}
        error={errors.password}
      />
      <SubmitButton isLoading={isLoading}>Entrar</SubmitButton>
    </form>
  );
};

export default SignInForm;
