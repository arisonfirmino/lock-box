"use client";

import { useState } from "react";
import SignInSection from "../components/signin-section";
import SignUpSection from "../components/signup-section";

const SignInPage = () => {
  const [activeSection, setActiveSection] = useState("signup");

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="space-y-5 p-2.5">
      <SignInSection
        isVisible={activeSection === "signin"}
        onActivate={() => handleSectionChange("signin")}
      />
      <SignUpSection
        isVisible={activeSection === "signup"}
        onActivate={() => handleSectionChange("signup")}
      />
    </div>
  );
};

export default SignInPage;
