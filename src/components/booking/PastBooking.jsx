"use client";
import Card from "./Card";

const PastBooking = ({ bookings, fetchBookings }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">🕛️ Past Bookings</h2>

      {bookings?.map((booking) => (
        <Card
          key={booking?._id}
          booking={booking}
          checkin={booking?.checkin}
          checkout={booking?.checkout}
          fetchBookings={fetchBookings}
        />
      ))}
    </div>
  );
};

export default PastBooking;
