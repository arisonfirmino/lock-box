import LoginItem from "@/app/(home)/components/login/login-item";

import { Login } from "@prisma/client";

interface LoginsListProps {
  logins: Login[];
}

const LoginsList = ({ logins }: LoginsListProps) => {
  return (
    <ul className="space-y-2.5">
      {logins.map((login) => (
        <li key={login.id}>
          <LoginItem login={login} />
        </li>
      ))}
    </ul>
  );
};

export default LoginsList;
