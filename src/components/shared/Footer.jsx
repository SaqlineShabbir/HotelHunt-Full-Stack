import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Stay Connected Section */}
          <div>
            <h2 className="font-semibold mb-4">STAY CONNECTED</h2>
            <p className="mb-4">
              Join over 10,500 people who receive bi-weekly web marketing tips.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full py-2 px-4 rounded-l-md border border-green-300 focus:outline-none"
              />
              <button className="bg-green-300 text-white px-4 py-2 rounded-r-md hover:bg-green-400 transition">
                Sign Up
              </button>
            </div>
            {/* Social Icons */}
            <div className="mt-4 flex space-x-4 text-green-300">
              <a href="#" className="hover:text-green-400">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-green-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-green-400">
                <FaGooglePlusG />
              </a>
              <a href="#" className="hover:text-green-400">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Committed to Chicago Section */}
          <div>
            <h2 className="font-semibold mb-4">COMMITTED TO CHICAGO</h2>
            <p>
              Orbit is a proud member of the Chicago community. We strive to
              educate and collaborate with like-minded businesses to make a
              difference environmentally and socially.
            </p>
            <a
              href="#"
              className="text-green-300 hover:text-green-400 block mt-4"
            >
              More About Our BCorp Status
            </a>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="font-semibold mb-4">NAVIGATE</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  Web Design & Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h2 className="font-semibold mb-4">CONTACT</h2>
            <address className="not-italic">
              Orbit Media Studios
              <br />
              4043 N Ravenswood Ave
              <br />
              Suite 316, Chicago, IL 60613
              <br />
              <a href="#" className="text-green-300 hover:text-green-400">
                Map
              </a>
            </address>
            <p className="mt-2">
              Main: (773) 348-4581
              <br />
              Support: (773) 353-8314
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-green-300 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2024 Orbit Media Studios. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-green-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
