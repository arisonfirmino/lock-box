import { db } from "@/app/lib/prisma";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

import { redirect } from "next/navigation";

import Header from "@/app/(home)/components/header";
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
    <>
      <div className="px-5 pt-2.5">
        <Header user={user} />
      </div>
      <div className="px-5 pt-2.5">
        <hr className="border-input-border" />
      </div>
      <div className="pt-2.5">
        <h2 className="text-center text-xl font-bold text-primary">Logins</h2>
      </div>
      <div className="p-2.5">
        <LoginsList logins={user.logins} />
      </div>
    </>
  );
};

export default Home;
