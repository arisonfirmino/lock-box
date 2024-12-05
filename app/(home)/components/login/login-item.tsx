import LoginIcon from "@/app/(home)/components/login/login-icon";

import { Login } from "@prisma/client";
import { SquarePenIcon } from "lucide-react";

interface LoginItemProps {
  login: Login;
}

const LoginItem = ({ login }: LoginItemProps) => {
  return (
    <div className="relative flex items-center gap-2.5 rounded-lg bg-white p-1 duration-200 hover:shadow">
      <LoginIcon login={login} />
      <div>
        <h3 className="font-semibold">{login.name}</h3>
        <p className="text-sm lowercase text-gray-600">
          {login.name.replace(/\s+/g, "").toLowerCase()}user
        </p>
      </div>
      <button className="absolute right-2.5 top-2.5 text-primary">
        <SquarePenIcon size={14} />
      </button>
    </div>
  );
};

export default LoginItem;
