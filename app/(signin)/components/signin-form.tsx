import InputForm from "@/app/components/input-form";
import SubmitButton from "@/app/components/submit-button";

const SignInForm = () => {
  return (
    <form className="space-y-5 px-2.5 pb-2.5">
      <InputForm label="Email ou nome de usuário" />
      <InputForm label="Senha" type="password" />
      <SubmitButton>Entrar</SubmitButton>
    </form>
  );
};

export default SignInForm;
