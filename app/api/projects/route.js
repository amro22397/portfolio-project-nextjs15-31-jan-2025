import mongoose from "mongoose";
import { Project } from "../../../models/project.js";
import { NextResponse } from "next/server.js";

export async function GET(req) {
    
    try {
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    
        const projects = await Project.find();
    
        return new NextResponse(JSON.stringify(projects), {status: 200});
    } catch (error) {
        return Response.json({ error })
    }
}


export async function DELETE(req) {
    mongoose.connect(process.env.MONGO_URL)
    const url = new URL(req.url);
    const id = url.searchParams.get('_id');

    await Project.findByIdAndDelete(id);
    return Response.json(true);
}