import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";

const page = () => {
  return (
    <div>
      <Summary></Summary>
      <Gallery></Gallery>
      <Overview></Overview>
    </div>
  );
};

export default page;
