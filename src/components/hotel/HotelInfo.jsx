import Link from "next/link";
import HotelRating from "./HotelRating";
import HotelReviewCount from "./HotelReviewCount";

export const HotelInfo = ({ fromListPage, hotel, checkin, checkout }) => {
  let params = "";
  if (checkin && checkout) {
    params = `?checkin=${checkin}&checkout=${checkout}`;
  }
  return (
    <>
      <div className={fromListPage ? "flex-1" : "flex-1 container"}>
        <h2
          className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}
        >
          {hotel?.name}
        </h2>
        <p>📍 {hotel?.city}</p>
        <div className="flex gap-2 items-center my-4">
          <HotelRating id={hotel?._id} />

          <HotelReviewCount id={hotel?._id} />

          {hotel?.isBooked && <span>Sold out</span>}
        </div>
        <div>
          <span className="border text-yellow-300 font-bold rounded p-1">
            {hotel?.propertyCategory} Star Property
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-end justify-center">
        <h2 className="text-2xl font-bold text-right">
          ${(hotel?.highRate + hotel?.lowRate) / 2}
        </h2>
        <p className=" text-right">Per Night for 1 Rooms</p>
        {fromListPage ? (
          <Link
            href={`/hotels/${hotel?._id}${params}`}
            className="bg-green-400 text-white rounded-md block  font-bold  hover:shadow active:scale-95 transition-all mt-4 px-3 py-2"
          >
            Details
          </Link>
        ) : (
          <button
            className={
              hotel?.isBooked
                ? "disabled bg-gray-500 text-white px-3 py-2 rounded"
                : "bg-green-400 text-white rounded-md block  font-bold  hover:shadow active:scale-95 transition-all mt-4 px-3 py-2"
            }
          >
            Book
          </button>
        )}
      </div>
    </>
  );
};
