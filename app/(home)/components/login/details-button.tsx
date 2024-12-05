"use client";

import { useRouter } from "next/navigation";
import ActionButton from "@/app/components/action-button";
import { LockKeyholeOpenIcon } from "lucide-react";

const DetailsButton = ({ id }: { id: string }) => {
  const router = useRouter();

  return (
    <ActionButton handleCLick={() => router.push(`/details/${id}`)}>
      <LockKeyholeOpenIcon size={14} />
    </ActionButton>
  );
};

export default DetailsButton;
