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

export async function DELETE(request,content){
    const id=content.params.id;
    let success=false;
    await mongoose.connect(connectionStr)
    let result=await foodSchema.deleteOne({_id:id})
    if(result.deletedCount>0){
        success=true;
    }
    return NextResponse.json({result,success})
}