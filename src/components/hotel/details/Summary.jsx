import { HotelInfo } from "../HotelInfo";

const Summary = ({ hotelInfo }) => {
  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex max-w-7xl mx-auto w-full px-4">
        <HotelInfo source="details" hotel={hotelInfo} />
      </div>
    </section>
  );
};

export default Summary;
