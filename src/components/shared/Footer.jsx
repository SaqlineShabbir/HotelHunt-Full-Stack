import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"; // Import the icons
import bgImage from "../../assets/hero-bg.jpg"; // Replace with your actual background image path

const Footer = () => {
  return (
    <div
      className="relative bg-gray-900 text-white"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(40, 30, 19, 0.9)", // Adjust the opacity here
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 lg:px-[150px] lg:py-[100px] px-5 py-5">
        {/* Left Section */}
        <div className="">
          <h2 className="text-3xl font-bold mb-10">HotelHunt</h2>
          <p className="text-gray-100 mb-6 leading-relaxed">
            Sequi dolores ratione eos eveniet provident soluta. Omnis nesciunt
            sit eos at, eius voluptatum rem corporis. Doloremque labore
            assumenda explicabo velit illo, soluta, inventore hic.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:text-gray-400">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-white hover:text-gray-400">
              <FaFacebookF />
            </Link>
            <Link href="#" className="text-white hover:text-gray-400">
              <FaYoutube />
            </Link>
            <Link href="#" className="text-white hover:text-gray-400">
              <FaInstagram />
            </Link>
            <Link href="#" className="text-white hover:text-gray-400">
              <FaLinkedin />
            </Link>
          </div>
        </div>

        {/* Center Menu Section */}
        <div className="lg:pl-10">
          <h3 className="text-xl font-semibold mb-10">Menu</h3>
          <ul className="text-gray-100 space-y-5">
            <li>
              <Link href="#" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Rooms
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Meet Kinsley Section */}
        <div>
          <h3 className="text-xl font-semibold mb-10">Meet HotelHunt</h3>
          <ul className="text-gray-100 space-y-5">
            <li>
              <Link href="#" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Menu
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Restaurant
              </Link>
            </li>
          </ul>
        </div>

        {/* Instagram Section */}
        <div>
          <h3 className="text-xl font-semibold mb-10">Instagram</h3>
          <div className="grid grid-cols-3 gap-2">
            {/* Replace these with actual Instagram photos */}
            <Image
              src={bgImage}
              alt="Instagram image 1"
              className="rounded-md  h-20"
            />
            <Image
              src={bgImage}
              alt="Instagram image 2"
              className="rounded-md h-20"
            />
            <Image
              src={bgImage}
              alt="Instagram image 3"
              className="rounded-md h-20"
            />
            <Image
              src={bgImage}
              alt="Instagram image 4"
              className="rounded-md h-20"
            />
            <Image
              src={bgImage}
              alt="Instagram image 5"
              className="rounded-md h-20"
            />
            <Image
              src={bgImage}
              alt="Instagram image 6"
              className="rounded-md h-20"
            />
          </div>
        </div>
      </div>

      {/* Footnote */}
      <div className="mt-12 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0 lg:px-[150px] py-5 px-0">
        <p className="text-gray-400 text-sm">
          © 2023 HotelHunt. All Rights Reserved.
        </p>
        <p className="text-gray-400 text-sm">
          Developed by: <span className="text-white">Sabbir Hossain</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
