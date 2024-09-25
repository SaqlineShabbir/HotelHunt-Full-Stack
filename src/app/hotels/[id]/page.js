import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";
import { getHotelById } from "@/queries/hotelQuery";

const page = async ({ params: { id } }) => {
  const hotelInfo = await getHotelById(id);
  return (
    <div>
      <Summary hotelInfo={hotelInfo}></Summary>
      <Gallery gallery={hotelInfo?.gallery}></Gallery>
      <Overview overview={hotelInfo?.overview}></Overview>
    </div>
  );
};

export default page;
