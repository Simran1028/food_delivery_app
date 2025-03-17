import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodModel";
import { restaurantsSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await mongoose.connect(connectionStr)
    const details = await restaurantsSchema.findOne({ _id: id })
    const foodItems = await foodSchema.find({ restro_id: id })
    return NextResponse.json({ success: true, details, foodItems });
}