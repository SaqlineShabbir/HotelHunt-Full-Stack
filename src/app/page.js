import Activities from "@/components/home/BestDeal";
import Experience from "@/components/home/Experience";
import Search from "@/components/search/Search";
import { Suspense } from "react";
import { BiDish } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="bg-[#F6F3E9] relative h-screen max-h-screen grid place-items-center bg-[url('../assets/frank.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="max-w-7xl mx-auto w-full px-4 items-center pb-12">
          <div className="col-span-7 pt-[100px] lg:pt-0">
            <h1 className="font-bold text-3xl lg:text-5xl my-4 text-center lg:w-8/12 mx-auto">
              Hotels for unforgettable moments, brimming with deep emotions
            </h1>
            <p className="my-2 text-[#5f5e5e] text-center">
              We have 459 rooms spread throughout Indonesia with room standards
              equivalent to 5-star hotels.
            </p>
            <Search />
          </div>
        </div>
        {/* Banner card */}
        <div className="absolute lg:top-[90vh] top-[120vh] left-0 right-0 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-2 lg:mx-[150px] justify-items-center bg-white rounded-xl mt-5">
          <div className="flex flex-col justify-center items-center bg-green-50 lg:px-[80px] px-5 py-5 my-5">
            <FaCarSide className="text-green-400" size={60} />
            <p className="font-bold">Airport transfer</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-green-50 lg:px-[90px] px-5 py-5 my-5">
            <BiDish className="text-green-400" size={60} />
            <p className="font-bold">All inclusive</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-green-50 lg:px-[80px] px-5 py-5 my-5">
            <TbAirConditioning className="text-green-400" size={60} />
            <p className="font-bold">Air-conditioned</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-green-50 lg:px-[80px] px-3 py-5 my-5">
            <GiCctvCamera className="text-green-400" size={60} />
            <p className="font-bold">Under protection</p>
          </div>
        </div>
      </section>
      <section className="bg-green-50 mt-5">
        <Experience />
      </section>
      <section className="bg-green-50">
        <Activities />
      </section>
    </Suspense>
  );
};

export default Home;
