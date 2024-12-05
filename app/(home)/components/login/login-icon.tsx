import Image from "next/image";

import { Login } from "@prisma/client";

interface LoginIconProps {
  login: Pick<Login, "URL" | "name">;
}

const LoginIcon = ({ login }: LoginIconProps) => {
  const favicon = `https://www.google.com/s2/favicons?sz=64&domain=${login.URL}`;

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-solid border-input-border bg-background-secondary">
      <Image src={favicon} alt={login.name} height={16} width={16} />
    </div>
  );
};

export default LoginIcon;
