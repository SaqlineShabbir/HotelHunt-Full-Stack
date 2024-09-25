import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
  hotelId: {
    required: true,
    type: ObjectId,
    ref: "hotelModel",
  },
  userId: {
    required: true,
    type: ObjectId,
    ref: "userModel",
  },
  review: {
    required: true,
    type: Number,
  },
});

export const reviewModel =
  mongoose.models.reviews ?? mongoose.model("reviews", reviewSchema);
