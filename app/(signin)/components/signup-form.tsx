"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import InputForm from "@/app/components/input-form";
import SubmitButton from "@/app/components/submit-button";

const schema = yup.object({
  firstName: yup
    .string()
    .required("Este campo é obrigatório.")
    .min(3, "Este campo precisa ter pelo menos 3 caracteres.")
    .matches(
      /^[a-zA-Z\s]+$/,
      "Este campo não pode conter caracteres especiais.",
    ),
  lastName: yup
    .string()
    .required("Este campo é obrigatório.")
    .min(3, "Este campo precisa ter pelo menos 3 caracteres.")
    .matches(
      /^[a-zA-Z\s]+$/,
      "Este campo não pode conter caracteres especiais.",
    ),
  username: yup
    .string()
    .required("Este campo é obrigatório.")
    .min(3, "Este campo precisa ter pelo menos 3 caracteres.")
    .matches(
      /^[a-zA-Z\s]+$/,
      "Este campo não pode conter caracteres especiais.",
    ),
  email: yup
    .string()
    .required("Este campo é obrigatório.")
    .email("Por favor, insira um e-mail válido."),
  password: yup
    .string()
    .required("Este campo é obrigatório.")
    .min(6, "A senha precisa ter pelo menos 6 caracteres."),
  passwordConfirmation: yup
    .string()
    .required("Este campo é obrigatório.")
    .oneOf([yup.ref("password")], "Por favor, confirme a senha corretamente."),
});

type FormData = yup.InferType<typeof schema>;

const SignUpForm = () => {
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
      <div className="flex gap-5">
        <InputForm
          label="Nome"
          register={{ ...register("firstName") }}
          error={errors.firstName}
        />
        <InputForm
          label="Sobrenome"
          register={{ ...register("lastName") }}
          error={errors.lastName}
        />
      </div>
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
      <InputForm
        label="Confirmação de senha"
        type="password"
        register={{ ...register("passwordConfirmation") }}
        error={errors.passwordConfirmation}
      />
      <SubmitButton>Enviar</SubmitButton>
    </form>
  );
};

export default SignUpForm;
