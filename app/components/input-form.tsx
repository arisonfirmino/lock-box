import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputFormProps {
  label: string;
  type?: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

const InputForm = ({
  label,
  type = "text",
  register,
  error,
}: InputFormProps) => {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label className="font-medium">{label}</label>
      <input
        type={type}
        {...register}
        className={`w-full rounded-lg border border-solid bg-background-secondary p-2.5 outline-none focus:ring-1 ${error ? "border-red-600 ring-red-600 focus:border-red-600" : "border-input-border ring-primary focus:border-primary"}`}
      />
      {error && <p className="text-xs text-red-600">{error.message}</p>}
    </div>
  );
};

export default InputForm;
