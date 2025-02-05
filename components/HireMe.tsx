"use client";

import React from "react";
import { Button } from "./ui/button";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const HireMe = () => {
  const header = useTranslations("Header");
  const locale = useLocale();

  return (
    <Link href={`/${locale}/contact`} className="text-white">

      <Button
        className={`bg-green-600 hover:bg-green-700 active:scale-95
            px-7 py-[22px] rounded-full
            ${locale === "ar" ? "text-md font-semibold" : "text-lg"}`}
      >

        {header("Hire Me")}

      </Button>

    </Link>
  );
};

export default HireMe;
