'use client'

import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

const BackToProjects = () => {
    const locale = useLocale();

  return (
    <Link
      href={`/${locale}/projects`}
      className="mb-5 flex flex-row justify-start items-start content-start"
    >
      <button
        className="bg-yellow-500 px-4 py-[6px] text-whites rounded-sm
                border-2 border-black
                font-semibold hover:bg-yellow-400 active:bg-yellow-700 transition-all duration-500"
      >
        Back to projects
      </button>
    </Link>
  );
};

export default BackToProjects;
