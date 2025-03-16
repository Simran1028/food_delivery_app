
import { connectionStr } from "@/app/lib/db";
import { restaurantsSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
    let queryParams = request.nextUrl.searchParams
    console.log(queryParams.get('location'))
    let filter = {}
    if (queryParams.get('location')) {
        let city = queryParams.get('location');
        filter = { city: { $regex: new RegExp(city, 'i') } }
    } else if (queryParams.get('restaurant')) {
        let restaurantName = queryParams.get('restaurant');
        filter = { restaurantName: { $regex: new RegExp(restaurantName, 'i') } }
    }
    await mongoose.connect(connectionStr)
    //filter -case sensitive(delhi and Delhi-different) therefore need to use regex to make it case insensitive
    let result = await restaurantsSchema.find(filter)
    return NextResponse.json({ result, success: true })
}