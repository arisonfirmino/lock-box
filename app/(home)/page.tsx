import { db } from "@/app/lib/prisma";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

import { redirect } from "next/navigation";

import Header from "@/app/(home)/components/header";
import Search from "@/app/(home)/components/search";
import NewLoginLink from "@/app/(home)/components/new-login-link";
import LoginsList from "@/app/(home)/components/login/logins-list";

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  const user = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      logins: {
        orderBy: {
          created_at: "desc",
        },
      },
    },
  });

  if (!user) {
    redirect("/signin");
  }

  return (
    <div className="space-y-2.5 p-2.5">
      <Header user={user} />
      <hr className="border-input-border" />
      <h2 className="text-center text-xl font-bold text-primary">Logins</h2>
      <Search />
      <NewLoginLink />
      <div className="pt-2.5">
        <LoginsList logins={user.logins} />
      </div>
    </div>
  );
};

export default Home;
