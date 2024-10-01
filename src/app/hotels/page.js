import Filter from "@/components/filter/Filter";
import HotelList from "@/components/hotel/HotelList";
import Search from "@/components/search/Search";

const page = ({ searchParams: { destination, checkin, checkout } }) => {
  console.log("paramsss", checkin, checkout);
  return (
    <>
      <section className=" bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
        <div className="max-w-7xl mx-auto w-full px-4 items-center py-12 ">
          <Search
            fromList={true}
            checkin={checkin}
            checkout={checkout}
            destination={destination}
          />
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-12">
          <Filter />
          <HotelList
            checkin={checkin}
            checkout={checkout}
            destination={destination}
          />
        </div>
      </section>
    </>
  );
};

export default page;
