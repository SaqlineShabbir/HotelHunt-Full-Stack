import Image from "next/image";
import Link from "next/link";
import { auth } from "../../../auth";
import logo from "../../assets/green-house-logo.png";
import Logout from "../auth/Logout";
const Navigation = async () => {
  const session = await auth();

  return (
    <nav className="max-w-7xl flex mx-auto justify-between px-4 py-4 fixed top-0 w-full left-0 right-0 z-50">
      <Link className="flex justify-center items-center" href="/">
        <Image src={logo} alt="Stay Swift Logo" width={90} height={80} />
        <span className="pt-4 font-bold">HOTELHUNT</span>
      </Link>

      <ul className="hidden md:flex items-center gap-6">
        <li>
          <Link href="#">Recommended Places</Link>
        </li>
        <li>
          <Link href="#">About Us</Link>
        </li>
        <li>
          <Link href="#">Contact Us</Link>
        </li>
        <li>
          <Link href="/bookings">Bookings</Link>
        </li>
        <li>
          {session?.user ? (
            <div>
              <Image
                className=" border-2 border-green-400 rounded-full"
                src={session?.user?.image}
                height={40}
                width={40}
              />
              <span>
                <Logout></Logout>
              </span>
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-green-300 px-6 py-3 text-white font-bold rounded-md"
            >
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
