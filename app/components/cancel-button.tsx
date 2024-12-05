import Link from "next/link";

const CancelButton = () => {
  return (
    <Link
      href="/"
      prefetch
      className="rounded-lg border border-solid border-primary p-2.5 text-center"
    >
      Cancelar
    </Link>
  );
};

export default CancelButton;
