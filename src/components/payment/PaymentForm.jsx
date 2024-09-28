"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const PaymentForm = ({ checkin, checkout, loggedInUser, hotelInfo, cost }) => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const hotelId = hotelInfo?._id;
      const userId = loggedInUser?._id;
      const checkinValue = formData.get("checkin");
      const checkoutValue = formData.get("checkout");
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hotelId,
          userId,
          checkin: checkinValue,
          checkout: checkoutValue,
        }),
      });

      if (response.status == 201) {
        router.push("/bookings");
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <form className="my-8" onSubmit={handleSubmit}>
      <div className="my-4 space-y-2">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={loggedInUser?.name || ""}
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          readOnly
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={loggedInUser?.email || ""}
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          readOnly
        />
      </div>

      <div className="my-4 space-y-2">
        <span>Check in</span>
        <h4 className="mt-2">
          <input value={checkin} type="date" name="checkin" id="checkin" />
        </h4>
      </div>

      <div className="my-4 space-y-2">
        <span>Checkout</span>
        <h4 className="mt-2">
          <input type="date" value={checkout} name="checkout" id="checkout" />
        </h4>
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="card" className="block">
          Card Number
        </label>
        <input
          type="text"
          id="card"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="expiry" className="block">
          Expiry Date
        </label>
        <input
          type="text"
          id="expiry"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="cvv" className="block">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>
      <span className="text-red-500">{error}</span>
      <button
        type="submit"
        className="bg-green-500 w-full py-2 text-white hover:bg-green-600 cursor-pointer"
      >
        Pay Now (${cost})
      </button>
    </form>
  );
};

export default PaymentForm;
