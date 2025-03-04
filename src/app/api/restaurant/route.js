import { connectionStr } from "@/app/lib/db";
import { restaurantsSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr);
  const data = await restaurantsSchema.find();
  return NextResponse.json({ result: data });
}

export async function POST(request) {
  let payload = await request.json();
  let result;
  await mongoose.connect(connectionStr);

  if (payload.login) {
    result = await restaurantsSchema.findOne({
      email: payload.email,
      password: payload.password,
    });
  } else {
    const restaurant = new restaurantsSchema(payload);
    result = await restaurant.save();
  }
  return NextResponse.json({ result, success: true });
}
