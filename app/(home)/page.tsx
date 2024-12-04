import { db } from "@/app/lib/prisma";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

import { redirect } from "next/navigation";

import Header from "@/app/(home)/components/header";

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  const user = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (!user) {
    redirect("/signin");
  }

  return (
    <>
      <Header user={user} />
    </>
  );
};

export default Home;
