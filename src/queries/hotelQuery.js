import { hotelModel } from "@/models/hotelModel";

export async function getAllHotels() {
  const hotels = await hotelModel.find().lean();
  return hotels;
}
