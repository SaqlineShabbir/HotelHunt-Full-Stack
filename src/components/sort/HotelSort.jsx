"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const HotelSort = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  const handleSortChange = (e) => {
    const { value } = e.target;

    // Set the sort parameter to either "highToLow" or "lowToHigh"
    params.set("sort", value);

    // Replace the current URL with updated parameters
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    // Any effect needed based on the sorting change can be added here.
  }, [searchParams]);

  return (
    <div>
      <h3 className="font-bold text-lg">Sort By</h3>
      <form className="flex flex-col gap-2 mt-2">
        <label
          htmlFor="highToLow"
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            type="radio"
            name="sort"
            id="highToLow"
            value="highToLow"
            onChange={handleSortChange}
            checked={params.get("sort") === "highToLow"}
            className="hidden" // Hides the native radio button
          />
          <span
            className={`w-3 h-3 border border-gray-600 rounded-sm flex items-center justify-center ${
              params.get("sort") === "highToLow"
                ? "bg-blue-500 border-blue-500"
                : ""
            }`}
          >
            {params.get("sort") === "highToLow" && (
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </span>
          Price High to Low
        </label>

        <label
          htmlFor="lowToHigh"
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            type="radio"
            name="sort"
            id="lowToHigh"
            value="lowToHigh"
            onChange={handleSortChange}
            checked={params.get("sort") === "lowToHigh"}
            className="hidden" // Hides the native radio button
          />
          <span
            className={`w-3 h-3 border border-gray-500 rounded-sm flex items-center justify-center ${
              params.get("sort") === "lowToHigh"
                ? "bg-blue-500 border-blue-500"
                : ""
            }`}
          >
            {params.get("sort") === "lowToHigh" && (
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </span>
          Price Low to High
        </label>
      </form>
    </div>
  );
};

export default HotelSort;
