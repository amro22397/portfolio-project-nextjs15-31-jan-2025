'use client'

import { signOut } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import React from "react";

const LogOut = () => {

    const locale = useLocale();
    const header = useTranslations("Header");

    const pathname = usePathname();
    console.log(pathname)

    console.log(pathname?.split(locale))

    let afterLocale = pathname?.split(locale)[1];

    console.log(pathname?.split('/'))

    console.log(afterLocale?.includes(locale));

    if (afterLocale?.includes(locale)) {
      afterLocale = `/${pathname?.split('/')[2]}`
      console.log(afterLocale);
    }

  return (
    <button
      onClick={() => {
        signOut({ callbackUrl: `/${locale}${afterLocale}` });
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
