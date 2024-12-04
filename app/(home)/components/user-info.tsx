import { DotIcon } from "lucide-react";

import { User } from "@prisma/client";

interface UserInfoProps {
  user: Pick<User, "firstName" | "lastName" | "username" | "email">;
}

const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <div>
      <div className="flex items-center">
        <h3 className="text-base font-semibold">
          {user.firstName} {user.lastName}
        </h3>
        <DotIcon size={20} />
        <p className="text-sm text-gray-600">{user.username}</p>
      </div>
      <p className="text-sm text-gray-600">{user.email}</p>
    </div>
  );
};

export default UserInfo;
