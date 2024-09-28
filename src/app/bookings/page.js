import PastBooking from "@/components/booking/PastBooking";
import ProfileInfo from "@/components/booking/ProfileInfo";
import UpcomingBooking from "@/components/booking/UpcomingBooking";
import { getBookingsByUser, getUserByEmail } from "@/queries";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";

const page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const loggedInUser = await getUserByEmail(session?.user?.email);

  const bookings = await getBookingsByUser(loggedInUser?._id);

  console.log(bookings);
  const pastBookings = bookings.filter((booking) => {
    return new Date().getTime() > new Date(booking.checkin).getTime();
  });

  const upcomingBookings = bookings.filter((booking) => {
    return new Date().getTime() < new Date(booking.checkin).getTime();
  });

  return (
    <>
      <section className="mt-[100px]">
        <div className="max-w-7xl mx-auto w-full px-4">
          <ProfileInfo />
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PastBooking bookings={pastBookings} />
            <UpcomingBooking bookings={upcomingBookings} />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
