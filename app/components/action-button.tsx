"use client";

import { LoaderCircleIcon } from "lucide-react";

interface ActionButtonProps {
  children: React.ReactNode;
  handleCLick: () => void;
  isLoading?: boolean;
}

const ActionButton = ({
  children,
  handleCLick,
  isLoading,
}: ActionButtonProps) => {
  return (
    <button
      disabled={isLoading}
      onClick={handleCLick}
      className="flex h-7 w-7 items-center justify-center rounded-lg border border-solid border-input-border bg-background-secondary text-primary"
    >
      {isLoading ? (
        isLoading ? (
          <LoaderCircleIcon size={14} className="animate-spin" />
        ) : (
          children
        )
      ) : (
        children
      )}
    </button>
  );
};

export default ActionButton;
