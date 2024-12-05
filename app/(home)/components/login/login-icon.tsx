import Image from "next/image";

import { Login } from "@prisma/client";

interface LoginIconProps {
  login: Pick<Login, "URL" | "name">;
}

const LoginIcon = ({ login }: LoginIconProps) => {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-solid border-input-border bg-background-secondary">
      <Image
        src={`${login.URL}/favicon.ico`}
        alt={login.name}
        height={20}
        width={20}
      />
    </div>
  );
};

export default LoginIcon;
