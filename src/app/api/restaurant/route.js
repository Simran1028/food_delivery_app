import { connectionStr } from "@/app/lib/db";
import { restaurantsSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr);
  const data = await restaurantsSchema.find();
  return NextResponse.json({ result: data });
}
