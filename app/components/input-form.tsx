interface InputFormProps {
  label: string;
  type?: string;
}

const InputForm = ({ label, type = "text" }: InputFormProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-medium">{label}</label>
      <input
        type={type}
        className="border-input-border w-full rounded-lg border border-solid bg-background-secondary p-2.5 outline-none ring-primary focus:border-primary focus:ring-1"
      />
    </div>
  );
};

export default InputForm;
