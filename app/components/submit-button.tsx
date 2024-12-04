interface SubmitButtonProps {
  children: React.ReactNode;
}

const SubmitButton = ({ children }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      className="w-full rounded-lg bg-primary p-2.5 text-white active:bg-background-primary active:text-black"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
