'use client'

import { useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const EditDeleteButtons = ({id, email, locale}) => {

    const route = useRouter();

    const handleProjectDelete = async () => {
        const result = confirm('Are you sure you want to delete this project?')

        if (!result) return

        
            const res = await fetch('/api/projects?_id='+id, {
                method: 'DELETE'
            });

            if (res.ok) {
                route.push(`/${locale}/projects`);
            } else {
                alert('Error deleting')
                console.log(res)
            }

            const path = window.location.pathname;
        console.log(path)

        if (path !== `/${locale}/projects/${id}`) {
            window.location.reload();
        }
        }


        // const session = useSession();
        // console.log(session.data?.user?.email)
        
        const projectById = useTranslations('ProjectByIdPage')

  return (
    <>
    {email && email === "amroalmutasim22@gmail.com" && (
        <div className="flex flex-row gap-7
        mr-[6px]">


        <Link href={`/${locale}/edit-project/${id}`}
        className='text-green-600 text-xl font-bold'
        >{projectById('Edit')}</Link>

        <button onClick={handleProjectDelete}
        className='text-red-600 text-xl font-bold'>
            {projectById('Delete')}
        </button>
    </div>
    )}

    </>
  )
}

export default EditDeleteButtons
