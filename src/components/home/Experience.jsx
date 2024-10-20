import Image from "next/image";
import img from "../../assets/frank-mckenna.jpg";
const Experience = () => {
  return (
    <div className=" pt-[480px] lg:pt-[150px]  lg:py-20 py-0">
      <div className="main grid lg:grid-cols-2 gap-10 relative  lg:mx-[150px] bg-white  border-[20px] border-white rounded-xl ">
        <div>
          <Image className="rounded-tl-xl" src={img} height={800} width={800} />
        </div>
        <div className="flex flex-col justify-center space-y-7 lg:px-5">
          <h3 className="text-4xl font-bold">
            We have 17+ years <br /> of Experience
          </h3>
          <p className="leading-7">
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem. Laborum accusantium libero
            commodi id officiis itaque esse adipisci, necessitatibus asperiores,
            illo odio.
          </p>
          <button className="bg-green-300 py-3 w-1/2 px-10 rounded font-bold">
            More About Us
          </button>
        </div>
        <div className="flex flex-col justify-center space-y-7 lg:px-5">
          <h3 className="text-4xl font-bold">
            Start your Amazing <br /> Adventure!
          </h3>
          <p className="leading-7">
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem. Laborum accusantium libero
            commodi id officiis itaque esse adipisci, necessitatibus asperiores,
            illo odio.
          </p>
          <button className="bg-green-300 py-3 w-1/2 px-10 rounded font-bold ">
            Book Our Hotels
          </button>
        </div>
        <div>
          {" "}
          <Image className="rounded-br-xl" src={img} height={800} width={800} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
