import { connectToDatabase } from "@/utils/db";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NextApiRequest, NextApiResponse } from "next";
import { Project } from "@/models/project";
// model import 


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    
    await connectToDatabase();
    const session = await getServerSession(req, res, authOptions);
    console.log(session?.user?.email);

    const { id } = await req.query;


    if (!session) {
        return res.status(401).json({
            message: "Unauthorized",
            success: false,
        })
    }


    if (req.method === "GET") {
        const project = await Project.findById({_id: id})
      
        return res.status(200).json({
            success: true,
            data: project,
        })
    }

    res.setHeader("Allow", ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`)


  } catch (error: any) {
    console.error('Error in handler', error);
    res.status(500).json({
        success: false,
        message: "Internal Server Error", 
        error: error.message
    })
  }
}
