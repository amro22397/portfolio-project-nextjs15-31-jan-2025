'use client'

import { useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const AddProject = ({email, locale}) => {


    // const session = useSession();
    // console.log(session.data?.user?.email)

    const projectsPage = useTranslations('ProjectsPage')

  return (
    <>
    {email && email === "amroalmutasim22@gmail.com" && (

        <Link href={`/${locale}/add-project`}
        className='bg-yellow-600 px-4 py-[6px] text-white dark:text-white rounded-sm
        max-sm:mx-2 hover:bg-yellow-500 active:scale-95
        '
        >
        {projectsPage('Add Project')}
        </Link>
    )}
    
    </>
    
  )
}

export default AddProject
