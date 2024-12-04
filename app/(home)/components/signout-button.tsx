"use client";

import { LogOutIcon } from "lucide-react";

import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button onClick={() => signOut()} className="hover:text-red-600">
      <LogOutIcon size={16} />
    </button>
  );
};

export default SignOutButton;
