"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = ({ fromList, destination, checkin, checkout }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [searchTerm, setSearchTerm] = useState({
    destination: destination || "Puglia",
    checkin: checkin,
    checkout: checkout,
  });

  const [allowSearch, setAllowSearch] = useState(true);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const state = { ...searchTerm, [name]: value };

    if (
      new Date(state.checkin).getTime() > new Date(state.checkout).getTime()
    ) {
      setAllowSearch(false);
    } else {
      setAllowSearch(true);
    }
    setSearchTerm(state);
  };

  function doSearch(event) {
    const params = new URLSearchParams(searchParams);

    params.set("destination", searchTerm?.destination || "all");
    if (searchTerm?.checkin && searchTerm?.checkout) {
      params.set("checkin", searchTerm?.checkin);
      params.set("checkout", searchTerm?.checkout);
    }

    if (pathname.includes("hotels")) {
      replace(`${pathname}?${params.toString()}`);
    } else {
      replace(`${pathname}hotels?${params.toString()}`);
    }
  }

  return (
    <>
      <div className="mt-6 lg:max-h-[250px]">
        <div className="bg-white w-full h-full py-10 lg:py-12 px-4 lg:px-8 rounded-xl border border-black/10 shadow-lg flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0">
          <div className="flex-1">
            <span className="font-bold">Destination</span>
            <h4 className="mt-2">
              <select
                className="w-[170px] lg:w-full h-12 px-4 rounded-md border border-black/20 bg-transparent"
                name="destination"
                id="destination"
                defaultValue={searchTerm?.destination}
                onChange={handleInputs}
              >
                <option value="Puglia">Puglia</option>
                <option value="Catania">Catania</option>
                <option value="Palermo">Palermo</option>
                <option value="Frejus">Frejus</option>
                <option value="Paris">Paris</option>
              </select>
            </h4>
          </div>

          <div className="flex-1">
            <span className="font-bold">Check in</span>
            <h4 className="mt-2">
              <input
                className="w-full h-12 px-4 rounded-md border border-black/20 bg-transparent"
                type="date"
                name="checkin"
                id="checkin"
                value={searchTerm?.checkin}
                onChange={handleInputs}
              />
            </h4>
          </div>

          <div className="flex-1">
            <span className="font-bold">Checkout</span>
            <h4 className="mt-2">
              <input
                className="w-full h-12 px-4 rounded-md border border-black/20 bg-transparent"
                type="date"
                name="checkout"
                id="checkout"
                value={searchTerm?.checkout}
                onChange={handleInputs}
              />
            </h4>
          </div>
        </div>
      </div>

      <button
        onClick={doSearch}
        disabled={!allowSearch}
        className="bg-green-300 disabled:bg-gray-500 px-8 py-3 rounded-md block mx-auto text-white font-bold my-4 shadow-lg hover:shadow-primary/50 active:scale-95 transition-all"
      >
        Search🔍️
      </button>
    </>
  );
};

export default Search;
