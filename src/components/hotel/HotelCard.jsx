import Image from "next/image";
import { HotelInfo } from "./HotelInfo";
const HotelCard = ({ hotel, checkin, checkout }) => {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        className="max-h-[162px] max-w-[240px]"
        src={hotel?.thumbNailUrl}
        height={162}
        width={240}
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
