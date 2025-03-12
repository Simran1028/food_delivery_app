import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request,content){
    const id=content.params.id;
    let success=false;
    await mongoose.connect(connectionStr);
    const result=await foodSchema.find({restro_id:id})
    if (result){
        success=true;
    }
return NextResponse.json({result,success})
}