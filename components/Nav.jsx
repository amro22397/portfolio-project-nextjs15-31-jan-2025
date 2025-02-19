

import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import { links } from '../public/Constants'



const Nav = ({ locale }) => {
    const pathname = usePathname();
    console.log(pathname);

    
  return (
    <nav className={`flex flex-row justify-center items-center
    ${locale === 'ar' ? 'xl:gap-9 gap-[10px] ' : 'gap-8'}`}>
        <div className={`${locale === 'ar' ? 'grid grid-cols-2 gap-x-12 gap-y-[17px] xl:flex xl:flex--row justify-center items-center 2xl:gap-8 xl:gap-5 text-center' : 'flex flex-row justify-center items-center gap-8 text-center'}`}>
        {links.map((link, index) => {
            const path = `/${locale}${link.path}`;

            return (
                <Link href={path} key={index} className={`${path === pathname &&
                    "border-b-2 text-gray-950 border-gray-950 dark:text-white dark:border-slate-200"
                    } text-gray-800 hover:text-gray-900 dark:text-slate-100 dark:hover:text-slate-200
                    transition-all duration-500
                    ${locale === 'ar' ? 'text-[14.5px] 2xl:text-[16px] xl:text-[13px] sm:text-[22px]' : 'text-[18px]'}`}>
                    {pathname.includes("en") ? link.name : link.arName}
                </Link>
            )
        })}
        </div>
    </nav>
  )
}

export default Nav
