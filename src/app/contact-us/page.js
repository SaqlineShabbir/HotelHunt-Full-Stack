const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start md:space-x-10 p-8 py-[150px]  min-h-screen">
      {/* Left - Contact Form */}
      <div className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-lg border-t-4">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="First Name"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Email"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Message"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="additional-details"
            >
              Additional Details
            </label>
            <textarea
              id="additional-details"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Additional Details"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Right - How Can We Help Section */}
      <div className="w-full md:w-1/3 mt-10 lg:mt-[100px] md:mt-0">
        <h2 className="text-2xl font-bold mb-6">How Can We Help?</h2>
        <p className="text-gray-700 mb-4">
          Please select a topic below related to your inquiry. If you don’t find
          what you need, fill out our contact form.
        </p>

        <ul className="space-y-4">
          <li>
            <a href="#" className="block text-green-500 hover:underline">
              Book a Demo
            </a>
            <p className="text-gray-500 text-sm">
              Request a demo from one of our conversion specialists.
            </p>
          </li>
          <li>
            <a href="#" className="block text-green-500 hover:underline">
              Get Inspired
            </a>
            <p className="text-gray-500 text-sm">
              Discover the many ways in which our customers use our service.
            </p>
          </li>
          <li>
            <a href="#" className="block text-green-500 hover:underline">
              Become a Partner
            </a>
            <p className="text-gray-500 text-sm">
              Join our Partner Program and earn commissions.
            </p>
          </li>
        </ul>

        {/* Chat bubble icon (optional) */}
        <div className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-green-600">
          <span className="text-xs font-bold">Chat</span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
