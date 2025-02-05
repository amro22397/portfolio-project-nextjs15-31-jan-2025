"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { links } from "../public/Constants.js";

import { usePathname } from "next/navigation";
import Social from "./Social";

import { useSession, signOut } from "next-auth/react";
import ThemeSwitch from "./ThemeSwitch";
import { useTranslations } from "next-intl";
import ChangeLanguage from "./ChangeLanguage";
import HireMe from "./HireMe";
import LogIn from "./LogIn";
import LogOut from "./LogOut";

const Header = ({ email, locale }) => {
  // const session = useSession();
  // console.log(session)

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const header = useTranslations("Header");

  return (
    <>
      <header className="py-8 xl:py-12 text-white hidden xl:flex flex-row items-center justify-between">
        <div className="container mx-auto flex flex-row items-center justify-between">
          <div
            className="flex flex-row items-center gap-8 text-gray-700 dark:text-white
            font-sans font-semibold w-full"
          >
            <Nav locale={locale} />
          </div>
        </div>

        <div className="w-full">
          {email && (
            <div
              className="flex flex-row text-black dark:text-white mx-10 font-semibold
            gap-4"
            >
              <p>{email}</p>

              <LogOut />
            </div>
          )}
        </div>

        <div
          className=" flex flex-row gap-[17.75px] items-center
        xl:mb-0 mt-1 mb-8"
        >
          {!email && !pathname.includes("login") && (
            <LogIn />
          )}


          <Social
            containerStyles="flex gap-4 mx-[5px] hidden"
            iconStyles="text-[33.35px] flex
                justify-center items-center hover:transform hover:scale-110
                hover:transition-all duration-500"
          />

          <div className="flex-row justify-center items-center gap-[8.5px] hidden">
            
              <HireMe />
            
          </div>

          <div className="flex flex-row gap-4">
            <ChangeLanguage />
            <ThemeSwitch />
          </div>
        </div>
      </header>

      <div className="block xl:hidden mx-5 mt-6 mb-2">
        <div className="mb-7">
          <Nav locale={locale} />
        </div>

        {email && (
          <div
            className="flex flex-row text-black dark:text-white justify-center mb-4 font-semibold
            gap-4 mx-auto"
          >
            <p>{email}</p>

            <LogOut />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
