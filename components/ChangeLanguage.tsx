"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ChangeLanguage = () => {
  const locale = useLocale();
  const pathName = usePathname();
  console.log(pathName);

  const afterLocale = pathName?.split(locale)[1];
  console.log(afterLocale);

  return (
    <Link
      href={`${locale === "ar" ? `/en${afterLocale}` : `/ar${afterLocale}`}`}
      className={`font-sans font-semibold text-black/70 dark:text-white/95 text-lg
        ${locale === "en" && "text-2xl"}`}
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >

      <button className={`${locale === "en" && "text-xl"}`}>
        {locale === "ar" ? "English" : "العربية"}
      </button>

    </Link>
  );
};

export default ChangeLanguage;
