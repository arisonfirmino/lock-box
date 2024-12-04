interface SubmitButtonProps {
  children: React.ReactNode;
  isLoading: boolean;
}

const SubmitButton = ({ children, isLoading }: SubmitButtonProps) => {
  return (
    <button
      disabled={isLoading}
      type="submit"
      className={`w-full rounded-lg p-2.5 active:bg-background-primary active:text-black ${isLoading ? "cursor-not-allowed bg-background-primary text-black" : "bg-primary text-white"}`}
    >
      {isLoading ? "Carregando" : children}
    </button>
  );
};

export default SubmitButton;
