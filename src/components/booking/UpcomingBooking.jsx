import Card from "./Card";

const UpcomingBooking = ({ bookings }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">⌛️ Upcomming Bookings</h2>

      {bookings.map((booking) => (
        <Card
          key={booking?._id}
          hotelId={booking?.hotelId}
          checkin={booking?.checkin}
          checkout={booking?.checkout}
        />
      ))}
    </div>
  );
};

export default UpcomingBooking;
