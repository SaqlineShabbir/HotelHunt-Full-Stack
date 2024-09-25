import { bookingModel } from "@/models/bookingModel";
import { hotelModel } from "@/models/hotelModel";
import { ratingModel } from "@/models/ratingModel";
import { reviewModel } from "@/models/reviewModel";
import mongoose from "mongoose";

export async function getAllHotels(destination, checkin, checkout) {
  const regex = new RegExp(destination, "i");
  const hotelsByDestination = await hotelModel
    .find({ city: { $regex: regex } })
    .select([
      "thumbNailUrl",
      "name",
      "highRate",
      "lowRate",
      "city",
      "propertyCategory",
    ])
    .lean();

  let allHotels = hotelsByDestination;

  if (checkin && checkout) {
    allHotels = await Promise.all(
      allHotels.map(async (hotel) => {
        const found = await findBooking(hotel._id, checkin, checkout);
        console.log(found);
        if (found) {
          hotel["isBooked"] = true;
        } else {
          hotel["isBooked"] = false;
        }
        return hotel;
      })
    );
  }

  return allHotels;
}

async function findBooking(hotelId, checkin, checkout) {
  const matches = await bookingModel
    .find({ hotelId: hotelId.toString() })
    .lean();

  const found = matches.find((match) => {
    return (
      isDateInbetween(checkin, match.checkin, match.checkout) ||
      isDateInbetween(checkout, match.checkin, match.checkout)
    );
  });
  console.log(found);

  return found;
}

export async function getHotelById(hotelId) {
  const hotel = await hotelModel.findById(hotelId).lean();
  return hotel;
}

export async function getRatingsForAHotel(hotelId) {
  const ratings = await ratingModel.find({ hotelId: hotelId }).lean();
  return ratings;
}

export async function getAllReviewsForAHotel(hotelId) {
  console.log("frommmm", hotelId);
  const all = await reviewModel.find();

  console.log("Type of hotelId:", typeof hotelId);
  console.log("hotelId being queried:", hotelId);
  const testHotelId = new mongoose.Types.ObjectId("66263526f50c2e548501f285");

  const reviews = await reviewModel.find({ hotelId: testHotelId }).lean();
  console.log("Reviews found:", reviews);
  console.log(all);
  return reviews;
}
