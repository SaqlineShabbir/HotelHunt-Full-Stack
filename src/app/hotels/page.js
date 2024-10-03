import HotelList from "@/components/hotel/HotelList";
import ListAndFilter from "@/components/hotel/ListAndFilter";
import Search from "@/components/search/Search";

const refineCategory = (category) => {
  const decodedCategory = decodeURI(category);
  return decodedCategory === "undefined" ? "" : decodedCategory;
};

const Page = ({
  searchParams: { destination, checkin, checkout, category, sort },
}) => {
  return (
    <>
      <section className="bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
        <div className="max-w-7xl mx-auto w-full px-4 items-center py-12">
          <Search
            fromList={true}
            checkin={checkin}
            checkout={checkout}
            destination={destination}
          />
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-12 gap-4">
          <div className="md:col-span-3 col-span-12">
            <ListAndFilter />
          </div>

          {/* Hotel List */}
          <div className="md:col-span-9 col-span-12">
            <HotelList
              checkin={checkin}
              checkout={checkout}
              destination={destination}
              category={refineCategory(category)}
              sort={sort}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
