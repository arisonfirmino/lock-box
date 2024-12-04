"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import InputForm from "@/app/components/input-form";
import SubmitButton from "@/app/components/submit-button";

const schema = yup.object({
  username: yup.string().required("Este campo é obrigatório."),
  password: yup.string().required("Este campo é obrigatório."),
});

type FormData = yup.InferType<typeof schema>;

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    reset();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 px-2.5 pb-2.5">
      <InputForm
        label="Email ou nome de usuário"
        register={{ ...register("username") }}
        error={errors.username}
      />
      <InputForm
        label="Senha"
        type="password"
        register={{ ...register("password") }}
        error={errors.password}
      />
      <SubmitButton>Entrar</SubmitButton>
    </form>
  );
};

export default SignInForm;
