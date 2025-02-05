'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { useLocale, useTranslations } from 'next-intl'

const LogIn = () => {

    const locale = useLocale();

      const header = useTranslations("Header");
    
  return (
    <Link href={`/${locale}/login`} className="text-white">
              <Button
                className={`bg-orange-700 hover:bg-orange-800 active:scale-95
            px-7 py-[22px] rounded-full
             ${locale === "ar" ? "text-md font-semibold" : "text-lg"}`}
              >
                {header("Log In")}
              </Button>
            </Link>
  )
}

export default LogIn
