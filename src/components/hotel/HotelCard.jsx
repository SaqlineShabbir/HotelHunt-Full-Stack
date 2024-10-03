import Image from "next/image";
import { HotelInfo } from "./HotelInfo";

const HotelCard = ({ hotel, checkin, checkout }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 border border-gray/20 p-4 rounded-md">
      <Image
        className="max-h-[162px] w-full md:max-h-[162px] md:max-w-[240px] object-cover rounded-md"
        src={hotel?.thumbNailUrl}
        height={162}
        width={240}
        alt={hotel?.name} // Adding alt for accessibility
      />
      <HotelInfo
        fromListPage={true}
        hotel={hotel}
        checkin={checkin}
        checkout={checkout}
      />
    </div>
  );
};

export default HotelCard;
