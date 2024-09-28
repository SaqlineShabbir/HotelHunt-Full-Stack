import { getAllHotels } from "@/queries";
import HotelCard from "./HotelCard";

const HotelList = async ({ checkin, checkout, destination }) => {
  const allHotels = await getAllHotels(destination, checkin, checkout);

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {allHotels.map((hotel) => (
          <HotelCard
            key={hotel._id}
            hotel={hotel}
            checkin={checkin}
            checkout={checkout}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
