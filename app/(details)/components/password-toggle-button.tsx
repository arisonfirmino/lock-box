import { EyeIcon, EyeOffIcon } from "lucide-react";

interface PasswordToggleButtonProps {
  isHidden: boolean;
  onToggle: () => void;
}

const PasswordToggleButton = ({
  isHidden,
  onToggle,
}: PasswordToggleButtonProps) => {
  return (
    <button onClick={onToggle}>
      {isHidden ? <EyeOffIcon size={14} /> : <EyeIcon size={14} />}
    </button>
  );
};

export default PasswordToggleButton;
