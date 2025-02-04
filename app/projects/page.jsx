import React from 'react'
import './page.css'

import mongoose from 'mongoose';
import { Project } from '../../models/project';
import AddProject from '../../components/AddProject'
import ProjectFilter from '../../components/ProjectsFilter'
import { revalidatePath } from 'next/cache';
import { getSession } from '@/actions/getUser';


const page = async () => {

    mongoose.connect(process.env.MONGO_URL)

    const frontEndProjects = await Project.find({category: {$in: ["Frontend"]}}, {}, {sort: {createdAt: -1}})
    const jfrontEndProjects = JSON.parse(JSON.stringify(frontEndProjects));

    const fullStackProjects = await Project.find({category: {$in: ["Fullstack"]}}, {}, {sort: {createdAt: -1}})
    const jfullStackProjects = JSON.parse(JSON.stringify(fullStackProjects));

    const allProjects = await Project.find({}, {}, {sort: {createdAt: -1}})

    const jAllProjects = JSON.parse(JSON.stringify(allProjects));

    // revalidatePath('/');

    const session = await getSession();
      console.log(session?.user?.email)
  
      

  return (
     
    <div className="container mx-auto overflow-x-hidden">

        
            
                
    
    <ProjectFilter allProjects={jAllProjects} frontEndProjects={jfrontEndProjects}
                fullStackProjects={jfullStackProjects} email={session?.user?.email}
                 />
        
       




        
    </div>
        
  )
}

export default page
