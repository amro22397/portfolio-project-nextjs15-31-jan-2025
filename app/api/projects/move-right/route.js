import mongoose from "mongoose";
import { Project } from "../../../../models/project";

export async function PUT(req) {
    mongoose.connect(process.env.MONGO_URL)
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    const project = await Project.updateOne({_id: id},
        { $inc: { x: 1, y: -1 } },
      { new: true }
     )

     if (!project) {
        console.log('item not found');
        return null;
     }

     return Response.json(project);

}