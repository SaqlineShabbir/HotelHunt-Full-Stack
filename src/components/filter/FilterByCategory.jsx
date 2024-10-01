const FilterByCategory = () => {
  return (
    <div>
      <h3 className="font-bold text-lg">Star Category</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        <label for="fiveStar">
          <input
            className="mx-1"
            type="checkbox"
            name="fiveStar"
            id="fiveStar"
          />
          5 Star
        </label>

        <label for="fourStar">
          <input
            className="mx-1"
            type="checkbox"
            name="fourStar"
            id="fourStar"
          />
          4 Star
        </label>

        <label for="threeStar">
          <input
            className="mx-1"
            type="checkbox"
            name="threeStar"
            id="threeStar"
          />
          3 Star
        </label>

        <label for="twoStar">
          <input className="mx-1" type="checkbox" name="twoStar" id="twoStar" />
          2 Star
        </label>

        <label for="oneStar">
          <input className="mx-1" type="checkbox" name="oneStar" id="oneStar" />
          1 Star
        </label>
      </form>
    </div>
  );
};

export default FilterByCategory;
