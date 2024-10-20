"use client";
import { useEffect, useState } from "react";
import PastBooking from "./PastBooking";
import UpcomingBooking from "./UpcomingBooking";

const BookingMain = ({ userId }) => {
  const [bookings, setBookings] = useState(null);

  const pastBookings = bookings?.filter((booking) => {
    return new Date().getTime() > new Date(booking?.checkin).getTime();
  });

  const upcomingBookings = bookings?.filter((booking) => {
    return new Date().getTime() < new Date(booking?.checkin).getTime();
  });
  const fetchBookings = async () => {
    try {
      // Ensure userId is provided
      if (!userId) {
        throw new Error("userId is required");
      }

      // Make the fetch request to your API endpoint
      const response = await fetch(`/api/payment?userId=${userId}`);

      // Parse the JSON response
      const data = await response.json();
      setBookings(data?.bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error.message);
      throw error;
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [userId]);
  return (
    <div className="max-w-7xl mx-auto w-full px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PastBooking bookings={pastBookings} fetchBookings={fetchBookings} />
        <UpcomingBooking
          bookings={upcomingBookings}
          fetchBookings={fetchBookings}
        />
      </div>
    </div>
  );
};

export default BookingMain;
