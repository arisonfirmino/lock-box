import LoginItem from "@/app/(home)/components/login/login-item";

import { Login } from "@prisma/client";

interface LoginsListProps {
  logins: Login[];
}

const LoginsList = ({ logins }: LoginsListProps) => {
  return (
    <ul>
      {logins.map((login) => (
        <li key={login.id}>
          <LoginItem login={login} />
        </li>
      ))}
    </ul>
  );
};

export default LoginsList;
