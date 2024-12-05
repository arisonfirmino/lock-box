import LoginIcon from "@/app/(home)/components/login/login-icon";
import DetailsButton from "@/app/(home)/components/login/details-button";
import OpenUrlButton from "@/app/(home)/components/login/open-url-button";
import DeleteButton from "@/app/(home)/components/login/delete-button";

import { SquarePenIcon } from "lucide-react";

import { Login } from "@prisma/client";

interface LoginItemProps {
  login: Login;
}

const LoginItem = ({ login }: LoginItemProps) => {
  return (
    <div className="space-y-2.5 rounded-lg bg-white p-1 duration-200 hover:shadow">
      <div className="relative flex items-center gap-2.5">
        <LoginIcon login={login} />
        <div className="space-y-1 leading-none">
          <h3 className="font-semibold">{login.name}</h3>
          <p className="text-xs lowercase text-gray-600">
            {login.name.replace(/\s+/g, "").toLowerCase()}user
          </p>
        </div>
        <button className="absolute right-2.5 top-2.5 text-primary">
          <SquarePenIcon size={14} />
        </button>
      </div>

      <div className="flex gap-1.5">
        <OpenUrlButton url={login.URL} />
        <DetailsButton id={login.id} />
        <DeleteButton id={login.id} />
      </div>
    </div>
  );
};

export default LoginItem;
