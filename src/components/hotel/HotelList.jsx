import { getAllHotels } from "@/queries/hotelQuery";
import HotelCard from "./HotelCard";

const HotelList = async ({ checkin, checkout, destination }) => {
  const allHotels = await getAllHotels(checkin, checkout, destination);

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {allHotels.map((hotel) => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
