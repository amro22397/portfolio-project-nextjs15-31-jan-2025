
/* import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { useSession } from 'next-auth/react' 
import "swiper/css"; */


import { getSession } from '@/actions/getUser';
import { headers } from "next/headers";
import ProjectById from './ProjectById';
import { Project } from '@/models/project';
import mongoose from 'mongoose';
import { getLocale } from 'next-intl/server';




// type PageProps = {
//     params: {
//         id: string;
//     }
// };

export default async function page(/*props: PageProps*/) {
    // const id = props.params.id

//     const header = await headers();
// const pathname = header.get('referer')

// const id = pathname?.split('/')[4]




    // 

    // const project = await Project.findById({_id: id})
    // const jProject = JSON.parse(JSON.stringify(project))

    mongoose.connect(process.env.MONGO_URL as string)

    const allProjects = await Project.find({}, {}, {sort: {createdAt: -1}})

    const jAllProjects = JSON.parse(JSON.stringify(allProjects));

    // const project = jAllProjects.find((project: any) => project._id === id);
    // const jProject = JSON.parse(JSON.stringify(project));


    // // console.log(project)

     const session = await getSession();
      console.log(session?.user?.email)

      const locale = await getLocale();

  return (
    

    <>
    <ProjectById /* id={id} jProject={jProject} */ email={session?.user?.email} projects={jAllProjects}
    locale={locale}  />

    {/* <pre className="">{id}</pre> */}
    {/* <pre>{JSON.stringify(jProject, null, 2)}</pre> */}
    <pre className="hidden">{JSON.stringify(jAllProjects, null, 2)}</pre>
    </>
  )
}
