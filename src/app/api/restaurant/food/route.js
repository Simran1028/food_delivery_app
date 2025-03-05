import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request){
    let payload= await request.json();
    await mongoose.connect(connectionStr);
    const food=new foodSchema(payload)
    const result=await food.save();
    return NextResponse.json({result,success:true})
}