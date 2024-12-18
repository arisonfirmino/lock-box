import UserInfo from "@/app/(home)/components/user-info";
import SignOutButton from "@/app/(home)/components/signout-button";

import { User } from "@prisma/client";

interface HeaderProps {
  user: Pick<User, "firstName" | "lastName" | "username" | "email">;
}

const Header = ({ user }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between">
      <UserInfo user={user} />
      <SignOutButton />
    </header>
  );
};

export default Header;
