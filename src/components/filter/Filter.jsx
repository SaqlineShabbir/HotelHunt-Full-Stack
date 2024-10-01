import HotelSort from "../sort/HotelSort";
import FilterByAmenities from "./FilterByAmenities";
import FilterByCategory from "./FilterByCategory";
import FilterByRange from "./FilterByRange";

const Filter = () => {
  return (
    <>
      <div className="col-span-3 space-y-4">
        <div>
          <HotelSort />
        </div>

        <FilterByRange />

        <FilterByCategory />

        <FilterByAmenities />
      </div>
    </>
  );
};

export default Filter;
