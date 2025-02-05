"use client";
import React from "react";
import Social from "./Social";
import Link from "next/link";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import ThemeSwitch from "./ThemeSwitch";
import HireMe from "./HireMe";
import ChangeLanguage from "./ChangeLanguage";
import LogIn from "./LogIn";

const Footer = ({ email }) => {
  // const session = useSession();

  return (
    <footer
      className="flex flex-col xl:flex-row gap-7 items-center mt-6 xl:mt-8
        xl:mb-0 mb-8 mx-auto justify-center"
      dir="ltr"
    >
      <div className="flex flex-row items-center gap-[13.20px]">
        <Social
          containerStyles="flex gap-4 justify-center mx-auto"
          iconStyles="text-4xl flex
                justify-center items-center hover:transform hover:scale-110
                hover:transition-all duration-500"
        />

        

      </div>

      <div className="flex flex-row items-center gap-[12px]" dir="rtl">

      <div className="xl:hidden">
      {!email && (
          <LogIn />
        )}
      </div>

        <Link href="/contact" className="text-white">
          <HireMe />
        </Link>

      </div>

      <div className="xl:hidden flex flex-row gap-3 items-center">
          <ChangeLanguage />
          <ThemeSwitch />
        </div>

    </footer>
  );
};

export default Footer;
