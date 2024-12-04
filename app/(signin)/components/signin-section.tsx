import SignInForm from "./signin-form";
import ToggleButton from "./toggle-button";

interface SignInSectionProps {
  isVisible: boolean;
  onActivate: () => void;
}

const SignInSection = ({ isVisible, onActivate }: SignInSectionProps) => {
  return (
    <section className="rounded-lg bg-white">
      <ToggleButton isVisible={isVisible} onActivate={onActivate}>
        Login
      </ToggleButton>
      {isVisible && <SignInForm />}
    </section>
  );
};

export default SignInSection;
