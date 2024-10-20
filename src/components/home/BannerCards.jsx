import { BiDish } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";

const BannerCards = () => {
  return (
    <div className="fixed bottom-24 left-0 right-0 z-10 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:mx-[150px] justify-items-center bg-white rounded-xl">
      <div className="flex flex-col justify-center items-center bg-green-50 px-[80px] py-5 my-5">
        <FaCarSide className="text-green-400" size={60} />
        <p className="font-bold">Airport transfer</p>
      </div>
      <div className="flex flex-col justify-center items-center bg-green-50 px-[90px] py-5 my-5">
        <BiDish className="text-green-400" size={60} />
        <p className="font-bold">All inclusive</p>
      </div>
      <div className="flex flex-col justify-center items-center bg-green-50 px-[80px] py-5 my-5">
        <TbAirConditioning className="text-green-400" size={60} />
        <p className="font-bold">Air-conditioned</p>
      </div>
      <div className="flex flex-col justify-center items-center bg-green-50 px-[80px] py-5 my-5">
        <GiCctvCamera className="text-green-400" size={60} />
        <p className="font-bold">Under protection</p>
      </div>
    </div>
  );
};

export default BannerCards;
