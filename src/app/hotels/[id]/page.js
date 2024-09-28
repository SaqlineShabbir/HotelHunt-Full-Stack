import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";
import { getHotelById } from "@/queries";

const page = async ({
  params: { id },
  searchParams: { checkin, checkout },
}) => {
  const hotelInfo = await getHotelById(id, checkin, checkout);
  return (
    <div>
      <Summary
        hotelInfo={hotelInfo}
        checkin={checkin}
        checkout={checkout}
      ></Summary>
      <Gallery gallery={hotelInfo?.gallery}></Gallery>
      <Overview overview={hotelInfo?.overview}></Overview>
    </div>
  );
};

export default page;
