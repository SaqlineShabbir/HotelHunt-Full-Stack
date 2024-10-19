import { bookingModel } from "@/models/bookingModel";
import { hotelModel } from "@/models/hotelModel";
import { ratingModel } from "@/models/ratingModel";
import { reviewModel } from "@/models/reviewModel";
import { userModel } from "@/models/userModel";
import { isDateInbetween } from "@/utils/data-util";

export async function getAllHotels(
  destination,
  checkin,
  checkout,
  category,
  sort
) {
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

  if (category) {
    const categoriesToMatch = category.split("|");
    allHotels = allHotels.filter((hotel) => {
      return categoriesToMatch.includes(hotel.propertyCategory.toString());
    });
  }

  // Sort based on the user's selection: highRate or lowRate
  if (sort === "highToLow") {
    allHotels.sort((a, b) => b.highRate - a.highRate);
  } else if (sort === "lowToHigh") {
    allHotels.sort((a, b) => a.lowRate - b.lowRate);
  }

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

export async function getHotelById(hotelId, checkin, checkout) {
  const hotel = await hotelModel.findById(hotelId).lean();

  if (checkin && checkout) {
    const found = await findBooking(hotel._id, checkin, checkout);
    if (found) {
      hotel["isBooked"] = true;
    } else {
      hotel["isBooked"] = false;
    }
  }
  return hotel;
}

export async function getRatingsForAHotel(hotelId) {
  const ratings = await ratingModel.find({ hotelId: hotelId }).lean();
  return ratings;
}

export async function getAllReviewsForAHotel(hotelId) {
  const reviews = await reviewModel.find({ hotelId: hotelId }).lean();

  return reviews;
}

export async function getUserByEmail(email) {
  const user = await userModel.find({ email: email }).lean();
  return user[0];
}
export async function getBookingsByUser(userId) {
  try {
    // Fetch bookings from the database by userId
    const bookings = await bookingModel.find({ userId }).lean();

    // Return the bookings data
    return bookings;
  } catch (error) {
    // Handle any errors that occur during the query
    console.error("Error fetching bookings for user:", error);
    throw new Error("Could not fetch bookings");
  }
}

export async function deleteBooking(id) {
  try {
    const deleteBooking = await bookingModel.deleteOne({ id });
    return deleteBooking;
  } catch (error) {
    throw new Error(error.message);
  }
}
