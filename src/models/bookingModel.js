import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
  hotelId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "hotels",
  },
  userId: {
    required: true,
    type: ObjectId,
  },
  checkin: {
    required: true,
    type: String,
  },
  checkout: {
    required: true,
    type: String,
  },
});

export const bookingModel =
  mongoose.models.bookings ?? mongoose.model("bookings", bookingSchema);
