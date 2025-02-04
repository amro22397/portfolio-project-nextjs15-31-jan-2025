'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const AddProject = ({email}) => {


    // const session = useSession();
    // console.log(session.data?.user?.email)

  return (
    <>
    {email && email === "amroalmutasim22@gmail.com" && (

        <Link href="/add-project"
        className='bg-yellow-600 px-4 py-[6px] text-white dark:text-white rounded-sm
        max-sm:mx-2 hover:bg-yellow-500 active:scale-95
        '
        >
        Add Project
        </Link>
    )}
    
    </>
    
  )
}

export default AddProject
