import InputForm from "@/app/components/input-form";
import SubmitButton from "@/app/components/submit-button";

const SignUpForm = () => {
  return (
    <form className="space-y-5 px-2.5 pb-2.5">
      <div className="flex gap-5">
        <InputForm label="Nome" />
        <InputForm label="Sobrenome" />
      </div>
      <InputForm label="Nome de usuário" />
      <InputForm label="Email" />
      <InputForm label="Senha" type="password" />
      <InputForm label="Confirmação de senha" type="password" />
      <SubmitButton>Enviar</SubmitButton>
    </form>
  );
};

export default SignUpForm;
