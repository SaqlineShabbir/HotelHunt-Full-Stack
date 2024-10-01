import { getAllHotels } from "@/queries";
import HotelCard from "./HotelCard";
import NoHotels from "./NoHotels";

const HotelList = async ({ checkin, checkout, destination, category }) => {
  const allHotels = await getAllHotels(
    destination,
    checkin,
    checkout,
    category
  );

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {allHotels.length > 0 ? (
          allHotels.map((hotel) => (
            <HotelCard
              key={hotel._id}
              hotel={hotel}
              checkin={checkin}
              checkout={checkout}
            />
          ))
        ) : (
          <NoHotels />
        )}
      </div>
    </div>
  );
};

export default HotelList;
