import { getDayDifference } from "@/utils/data-util";
import CardDiv from "./CardDiv";

const Card = ({ booking, checkin, checkout, fetchBookings }) => {
  const days = getDayDifference(checkin, checkout);
  const totalCost =
    ((booking?.hotelId?.highRate + booking?.hotelId?.lowRate) / 2) * days;

  return (
    <div className="bg-[#ebf6e9] p-4 rounded-md">
      <CardDiv
        name={booking?.hotelId?.name}
        hotelId={booking?._id}
        fetchBookings={fetchBookings}
      />
      <div className="flex justify-between items-center ">
        <div>
          <div className="text-sm text-gray-600 my-4">
            <p>Check In: {checkin}</p>
            <p>Check Out: {checkout}</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-right">${totalCost}</h3>
          <p className="text-sm text-gray-600">{`${
            totalCost / days
          } per night x ${days} days`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
