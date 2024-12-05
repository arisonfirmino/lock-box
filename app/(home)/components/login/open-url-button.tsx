"use client";

import ActionButton from "@/app/components/action-button";

import { SquareArrowOutUpRightIcon } from "lucide-react";

const OpenUrlButton = ({ url }: { url: string }) => {
  const handleOpenUrlClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <ActionButton handleCLick={handleOpenUrlClick}>
      <SquareArrowOutUpRightIcon size={14} />
    </ActionButton>
  );
};

export default OpenUrlButton;
