import { db } from "@/app/lib/prisma";
import { redirect } from "next/navigation";
import InfoRow from "../../components/info-row";
import CancelButton from "@/app/components/cancel-button";

const Details = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params;

  const login = await db.login.findUnique({
    where: {
      id: resolvedParams.id,
    },
  });

  if (!login) {
    redirect("/");
  }

  return (
    <div className="flex flex-col gap-2.5 p-2.5">
      <h3 className="text-center text-xl font-bold text-primary">
        {login.name}
      </h3>
      <InfoRow label="URL" url={login.URL}>
        {login.URL}
      </InfoRow>
      <InfoRow label="Nome de usuário">{login.username}</InfoRow>
      <InfoRow label="E-mail">{login.email}</InfoRow>
      <InfoRow label="Senha">{login.password}</InfoRow>
      <CancelButton />
    </div>
  );
};

export default Details;
