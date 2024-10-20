"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterByCategory = () => {
  const [query, setQuery] = useState([]);
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  const handleChange = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const checked = e.target.checked;

    if (checked) {
      setQuery((prev) => [...prev, name]);
    } else {
      const filterd = query.filter((item) => item !== name);
      setQuery(filterd);
    }
  };

  useEffect(() => {
    const category = params.get("category");
    if (category) {
      const decodedCategory = decodeURI(category);
      const queryInCategory = decodedCategory.split("|");

      setQuery(queryInCategory);
    }
  }, []);
  useEffect(() => {
    if (query.length > 0) {
      params.set("category", encodeURI(query.join("|")));
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [query]);
  return (
    <div>
      <h3 className="font-bold text-lg">Star Category</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        <label htmlFor="fiveStar">
          <input
            onChange={handleChange}
            className="mx-1"
            type="checkbox"
            name="5"
            id="fiveStar"
            checked={query.includes("5")}
          />
          5 Star
        </label>

        <label htmlFor="fourStar">
          <input
            onChange={handleChange}
            className="mx-1"
            type="checkbox"
            name="4"
            id="fourStar"
            checked={query.includes("4")}
          />
          4 Star
        </label>

        <label htmlFor="threeStar">
          <input
            onChange={handleChange}
            className="mx-1"
            type="checkbox"
            name="3"
            id="threeStar"
            checked={query.includes("3")}
          />
          3 Star
        </label>

        <label htmlFor="twoStar">
          <input
            onChange={handleChange}
            className="mx-1"
            type="checkbox"
            name="2"
            id="twoStar"
            checked={query.includes("2")}
          />
          2 Star
        </label>

        <label htmlFor="oneStar">
          <input
            onChange={handleChange}
            className="mx-1"
            type="checkbox"
            name="1"
            id="oneStar"
            checked={query.includes("1")}
          />
          1 Star
        </label>
      </form>
    </div>
  );
};

export default FilterByCategory;
