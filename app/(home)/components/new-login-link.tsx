import { PlusIcon } from "lucide-react";
import Link from "next/link";

const NewLoginLink = () => {
  return (
    <Link
      href="/new-login"
      prefetch
      className="flex items-center justify-center gap-1.5 rounded-lg bg-primary px-2.5 py-1.5 text-white"
    >
      <PlusIcon size={16} />
      Adicionar novo login
    </Link>
  );
};

export default NewLoginLink;
