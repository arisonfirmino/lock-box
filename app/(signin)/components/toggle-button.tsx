"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

interface ToggleButtonProps {
  children: React.ReactNode;
  isVisible: boolean;
  onActivate: () => void;
}

const ToggleButton = ({
  children,
  isVisible,
  onActivate,
}: ToggleButtonProps) => {
  return (
    <button
      onClick={onActivate}
      className={`flex w-full items-center justify-between space-y-5 p-2.5 ${isVisible ? "font-semibold text-primary" : ""}`}
    >
      {children}
      {isVisible ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
    </button>
  );
};

export default ToggleButton;
