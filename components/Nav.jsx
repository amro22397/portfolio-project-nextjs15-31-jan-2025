

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
        {links.map((link, index) => {
            const path = `/${locale}${link.path}`;

            return (
                <Link href={path} key={index} className={`${path === pathname &&
                    "border-b-2 text-gray-950 border-gray-950 dark:text-white dark:border-slate-200"
                    } text-gray-800 hover:text-gray-900 dark:text-slate-100 dark:hover:text-slate-200
                    transition-all duration-500
                    ${locale === 'ar' ? 'text-[14.5px]' : 'text-[18px]'}`}>
                    {pathname.includes("en") ? link.name : link.arName}
                </Link>
            )
        })}
    </nav>
  )
}

export default Nav
