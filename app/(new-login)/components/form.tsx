"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import CancelButton from "@/app/components/cancel-button";
import InputForm from "@/app/components/input-form";
import SubmitButton from "@/app/components/submit-button";
import { createNewLogin } from "@/app/actions/login";

const schema = yup.object({
  name: yup.string().required("Este campo é obrigatório."),
  URL: yup
    .string()
    .required("Este campo é obrigatório.")
    .url("Insira uma URL válida."),
  username: yup.string(),
  email: yup.string().email("Por favor, insira um e-mail válido."),
  password: yup.string().required("Este campo é obrigatório."),
});

type FormData = yup.InferType<typeof schema>;

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { data: session } = useSession();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    if (session) {
      setIsLoading(true);

      await createNewLogin({
        userId: session.user.id,
        name: data.name,
        email: data.email,
        username: data.username,
        password: data.password,
        URL: data.URL,
      });

      reset();
      setIsLoading(false);
      router.replace("/");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2.5">
      <InputForm
        label="Nome"
        register={{ ...register("name") }}
        error={errors.name}
      />
      <InputForm
        label="URL"
        register={{ ...register("URL") }}
        error={errors.URL}
      />
      <InputForm
        label="Nome de usuário"
        register={{ ...register("username") }}
        error={errors.username}
      />
      <InputForm
        label="E-mail"
        register={{ ...register("email") }}
        error={errors.email}
      />
      <InputForm
        label="Senha"
        type="password"
        register={{ ...register("password") }}
        error={errors.password}
      />
      <SubmitButton isLoading={isLoading}>Cadastrar</SubmitButton>
      <CancelButton />
    </form>
  );
};

export default Form;
