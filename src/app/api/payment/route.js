import { dbConnect } from "@/connectDb/DbConnect";
import { bookingModel } from "@/models/bookingModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { hotelId, userId, checkin, checkout } = await request.json();

  await dbConnect();

  const payload = {
    hotelId: new mongoose.Types.ObjectId(hotelId),
    userId: new mongoose.Types.ObjectId(userId),
    checkin,
    checkout,
  };

  try {
    await bookingModel.create(payload);
    return new NextResponse("Booked Successfully", {
      status: 201,
    });
  } catch (error) {
    return NextResponse(error.message, {
      status: 500,
    });
  }
};
