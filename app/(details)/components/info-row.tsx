"use client";

import { useState } from "react";

import OpenUrlButton from "@/app/(home)/components/login/open-url-button";
import PasswordToggleButton from "@/app/(details)/components/password-toggle-button";
import CopyButton from "@/app/(details)/components/copy-button";

interface InfoRowProps {
  children: React.ReactNode;
  label: string;
  url?: string;
}

const InfoRow = ({ children, label, url }: InfoRowProps) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(label === "Senha");

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label className="font-medium">{label}</label>
      <div className="flex items-center justify-between rounded-lg border border-solid border-input-border bg-white p-2.5">
        <p> {label === "Senha" && isPasswordHidden ? "********" : children}</p>
        <div className="flex items-center gap-2.5">
          {url && label === "URL" && <OpenUrlButton url={url} />}
          {label === "Senha" && (
            <PasswordToggleButton
              isHidden={isPasswordHidden}
              onToggle={() => setIsPasswordHidden(!isPasswordHidden)}
            />
          )}
          {["Nome de usuário", "E-mail", "Senha"].includes(label) && (
            <CopyButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoRow;
