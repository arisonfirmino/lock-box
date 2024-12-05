"use client";

import { useState } from "react";

import ActionButton from "@/app/components/action-button";

import { Trash2Icon } from "lucide-react";

import { deleteLogin } from "@/app/actions/login";

const DeleteButton = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteClick = async () => {
    setIsLoading(true);

    await deleteLogin({ id });

    setIsLoading(false);
  };

  return (
    <ActionButton handleCLick={handleDeleteClick} isLoading={isLoading}>
      <Trash2Icon size={14} />
    </ActionButton>
  );
};

export default DeleteButton;
