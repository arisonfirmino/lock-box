import SignUpForm from "./signup-form";
import ToggleButton from "./toggle-button";

interface SignUpSectionProps {
  isVisible: boolean;
  onActivate: () => void;
}

const SignUpSection = ({ isVisible, onActivate }: SignUpSectionProps) => {
  return (
    <section className="rounded-lg bg-white">
      <ToggleButton isVisible={isVisible} onActivate={onActivate}>
        Cadastrar
      </ToggleButton>
      {isVisible && <SignUpForm />}
    </section>
  );
};

export default SignUpSection;
