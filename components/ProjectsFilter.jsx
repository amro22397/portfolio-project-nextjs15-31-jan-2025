'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import AddProject from './AddProject';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import axios from 'axios'
import { useTranslations } from 'next-intl';



const ProjectsFilter = ({allProjects, frontEndProjects, fullStackProjects, email, locale}) => {

const [projects, setProjects] = useState(fullStackProjects);


// const handleRight = (id) => {
//         try {
//             axios.put(`/api/projects/move-right?=id=${id}`)

//             alert("Project moved right");

//             window.location.reload();
//         } catch (error) {
//             alert(`Error: ${error}`)
//         }
//       }
    
//       const handleLeft = (index) => {
//         if (index > 0) {
//           const updatedTaskList = [...taskList];
//           [updatedTaskList[index], updatedTaskList[index - 1]] =
//           [updatedTaskList[index - 1], updatedTaskList[index]];
//           setTaskList(updatedTaskList); 
//         } else {
//           alert("You can't move left");
//         }
//       }
     
      const projectsPage = useTranslations('ProjectsPage')

  return (

    <>
    <div className="flex-row justify-start gap-7 items-center
       text-xl max-sm:mx-2" style={{fontFamily: "sans-serif"}}>

<div className="flex sm:flex-row flex-col gap-5 sm:gap-0
 justify-between items-center">

<AddProject email={email} locale={locale}  />


<div className="flex flex-row gap-5">
<div id="filter-key"
onClick={() => setProjects(allProjects)}>
    {projectsPage('All')}
</div>

<div id="filter-key"
onClick={() => setProjects(fullStackProjects)}>
    {projectsPage('Fullstack')}
</div>

<div id="filter-key"
 onClick={() => setProjects(frontEndProjects)}>
    {projectsPage('Frontend')}
</div>
</div>

</div>
            
        </div>

<div className="grid grid-cols-3 gap-x-7 gap-y-12 mt-10
max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-2">

    {projects.length > 0 && projects.map((project, index) => (
        <Link key={index} href={`/${locale}/projects/${project._id}`}
        className=''>
         <div key={index} className="flex flex-col justify-start items-center
        bg-[#232329]/90 dark:bg-stone-700 gap-3 shadow-lg mb-3 transform hover:scale-[1.01] transition-all duration-300 ease-in-out
        cursor-pointer h-[460px] max-w-[370px] mx-auto
        max-sm:max-w-full relative" id="project-card">
            
            <Image src={project.imageUrls[0]} alt={project.title}
            className='object-fill w-full max-sm:w-full max-sm:h-[50%]' width={420} height={200} />

            {/* {email && email === "amroalmutasim22@gmail.com" && (
                <div className="absolute top-2 right-[10px]
                flex flex-row gap-3 items-center text-xl bg-green-600/95 rounded-full px-2 py-1">
                    <FaArrowLeft onClick={() => handleLeft(project._id)} />
                    <FaArrowRight onClick={() => handleRight(project._id)} />
                </div>
            )} */}
            

            <h2 className="text-2xl font-semibold text-orange-400">{project.title}</h2>

            <button className="bg-yellow-600 px-2 py-0 border-solid
                w-[150px] text-white cursor-auto font-semibold">
                {project.category}
                </button>

            <div className="flex flex-col justify-between items-center
             mb-4 gap-4 px-6 py-2 overflow-hidden hover:overflow-auto">

                <p className="text-sm text-white
                " style={{fontFamily: "sans-serif"}}>{project.description}</p>

            
            </div>

            
        </div>
        </Link>
       
    ))}
</div>
    </>
   
  )
}

export default ProjectsFilter
