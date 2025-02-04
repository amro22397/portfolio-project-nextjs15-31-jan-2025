import Social from '../components/Social'
import { Button } from '../components/ui/button'
import { FiDownload } from 'react-icons/fi' 
import React from 'react'
import Photo from '../components/Photo'
import Stats from '../components/Stats'
import mongoose from 'mongoose'
import { Project } from '../models/project'
import { revalidatePath } from 'next/cache'
import { skills } from '../public/Constants'


import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiJquery } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss, SiGithub } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { SiReactquery } from "react-icons/si";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

import { Edit, User } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl';



const page = async () => {

  mongoose.connect(process.env.MONGO_URL as string)

    const projects = await Project.find({}, {}, {sort: {createdAt: -1}});
    const jProjects = JSON.parse(JSON.stringify(projects));

    // revalidatePath('/');

    console.log(projects)

  return (
    <section className=''>
      <div className="mx-auto h-full flex justify-center flex-col
      ">
        <div className="flex flex-col xl:flex-row items-center justify-between
         xl:pt-8 xl:pb-24 xl:mx-14">
          <div className="flex flex-col gap-7 text-center xl:text-left order-2 xl:order-none
           max-xl:ml-0">
            <h1 className="text-6xl font-semibold flex flex-col max-xl:hidden">
              Hello I am ...
            </h1>
            <span className='text-red-700 dark:text-red-400  text-5xl'>
                
                Amro El-Mutasim</span>

            <span className='text-gray-600 dark:text-zinc-100 text-3xl'>Full Stack Web Developer</span>

            <div className="mt-2 max-sm:mt-4">
              <div className="grid md:grid-cols-8 lg:grid-cols-11 lg:gap-y-8 xl:grid-cols-7
               grid-cols-3 gap-2 xl:gap-y-4 text-4xl gap-y-4
              text-gray-800 mb-8">
              {skills.skillList.map((skill, index) => (
                <div key={index}
                className='flex flex-col items-center
                hover:transform hover:scale-105 hover:text-gray-900
                dark:text-slate-100 dark:hover:text-slate-200'>

                <span className="">{skill.icon}</span>
                <span className='text-sm font-semibold
                text-black dark:text-white'>{skill.name}</span>

                </div>

              ))}
              </div>
            

            <div className="flex flex-col xl:items-start justify-center gap-6 mt-2
            items-center">    
              
              <Button 
              variant='outline'
              size='lg'
              className="uppercase flex items-center gap-2
              dark:bg-green-600 border-none dark:hover:bg-green-700
              bg-green-500 hover:bg-green-600
               active:scale-95 py-6 rounded-full
              text-white"
              >
                <Link href="/resume-22-oct.pdf" target='_blank'>Download CV</Link>
                <FiDownload className='text-xl' />
              </Button>
                        
            </div>

            
              
            </div>
          </div>

          <div className='order-1 xl:order-none mb-8 xl:mb-0 px-0'>
          <Photo />
          </div>
          
        </div>

        <Stats allProjects={jProjects} />
      </div>
    
      <div className=""></div>
    </section>
  )
}

export default page
