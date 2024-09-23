export const HotelInfo = ({ fromListPage, hotel }) => {
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
          <div className="bg-green-400 w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
            5.3
          </div>
          <span className="font-medium">Very Good</span>
          <span>232 Reviews</span>
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
          <button className="bg-green-400 text-white rounded-md block  font-bold  hover:shadow active:scale-95 transition-all mt-4 px-3 py-2">
            Details
          </button>
        ) : (
          <button className="bg-green-400 px-3 py-2 rounded-md block  font-bold  hover:shadow active:scale-95 transition-all w-full mt-4">
            Book
          </button>
        )}
      </div>
    </>
  );
};
