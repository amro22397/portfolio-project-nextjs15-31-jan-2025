'use client'

import { signOut } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const LogOut = () => {

    const locale = useLocale();
    const header = useTranslations("Header");

  return (
    <button
      onClick={() => {
        signOut({ callbackUrl: `/${locale}/` });
      }}
      className="text-red-600 hover:underline
              dark:text-red-300 
              active:scale-95"
    >
      {header("Logout")}
    </button>
  );
};

export default LogOut;
