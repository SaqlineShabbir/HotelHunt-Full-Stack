import mongoose, { Schema } from "mongoose";
const ratingSchma = new Schema({
  hotelId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "hotelModel",
  },
  userId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "userModel",
  },
  rating: {
    required: true,
    type: Number,
  },
});

export const ratingModel =
  mongoose.models.ratings ?? mongoose.model("ratings", ratingSchma);
