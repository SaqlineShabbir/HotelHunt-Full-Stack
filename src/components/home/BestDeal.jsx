import Image from "next/image";
import img from "../../assets/frank.jpg"; // Replace this with your actual image imports

const Activities = () => {
  return (
    <div className="container mx-auto py-10  lg:px-[100px]">
      <h2 className="text-center text-3xl font-bold mb-4">
        Explore the Wonders of the Surroundings
      </h2>
      <p className="text-center mb-10 text-gray-600">
        From the tranquility of nature to exciting adventures, here are some of
        the nearby activities you can enjoy:
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
        {/* Card 1 */}
        <div className="relative group p-4">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src={img}
                alt="Visits to National Parks"
                width={600}
                height={800}
                className="h-[500px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2 p-1 bg-white text-green-400 font-bold text-lg shadow-md">
                €180 / Once / Per Guest
              </div>
              {/* Title with transition */}
              <div className="absolute bottom-20 left-4 text-white  flex  text-lg font-semibold transition-transform duration-500 group-hover:-translate-y-2">
                Visits to National Parks
              </div>
              {/* Hover Description */}
              <div className="absolute bottom-0 w-full h-full flex items-end  transition-transform transform translate-y-full group-hover:translate-y-0 duration-500">
                <p className="text-white p-4 ">
                  Discover the serenity of nature with guided tours to the most
                  beautiful national parks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group p-4">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src={img}
                alt="Camping Adventures"
                width={400}
                height={800}
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2 p-1 bg-white text-green-400 font-bold text-lg shadow-md">
                €240 / Once / Per Guest
              </div>
              {/* Title with transition */}
              <div className="absolute bottom-20 left-4 text-white text-lg font-semibold transition-transform duration-500 group-hover:-translate-y-2">
                Camping Adventures
              </div>
              {/* Hover Description */}
              <div className="absolute bottom-0 w-full h-full flex items-end justify-center transition-transform transform translate-y-full group-hover:translate-y-0 duration-500">
                <p className="text-white p-4 ">
                  Experience the great outdoors with our guided camping
                  adventures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group p-4">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src={img}
                alt="Stargazing"
                width={600}
                height={900}
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2 p-1 rounded bg-white text-green-400 font-bold text-lg shadow-md">
                €120 / Once / Per Guest
              </div>
              {/* Title with transition */}
              <div className="absolute bottom-20 left-4 text-white text-lg font-semibold transition-transform duration-500 group-hover:-translate-y-2">
                Stargazing
              </div>
              {/* Hover Description */}
              <div className="absolute bottom-0 w-full h-full flex items-end justify-center transition-transform transform translate-y-full group-hover:translate-y-0 duration-500">
                <p className="text-white p-4 ">
                  Marvel at the beauty of the night sky in the best stargazing
                  spots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
