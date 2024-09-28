import PaymentForm from "@/components/payment/PaymentForm";
import { getHotelById, getUserByEmail } from "@/queries";
import { getDayDifference } from "@/utils/data-util";
import { redirect } from "next/navigation";
import { auth } from "../../../../../auth";

const page = async ({
  params: { id },
  searchParams: { checkin, checkout },
}) => {
  console.log("lol", checkin);
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const loggedInUser = await getUserByEmail(session?.user?.email);
  const hotelInfo = await getHotelById(id, checkin, checkout);
  console.log(loggedInUser);
  const hasCheckinCheckout = checkin && checkout;
  let cost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;
  if (hasCheckinCheckout) {
    const days = getDayDifference(checkin, checkout);
    cost = cost * days;
  }
  return (
    <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
        <h2 className="font-bold text-2xl">Payment Details</h2>
        <p className="text-gray-600 text-sm pt-2">
          You have picked <b className="text-green-500">{hotelInfo?.name}</b>{" "}
          and base price is <b>${cost}</b>
          {hasCheckinCheckout &&
            ` for ${getDayDifference(checkin, checkout)} days`}
        </p>
        <PaymentForm
          checkin={checkin}
          checkout={checkout}
          loggedInUser={loggedInUser}
          hotelInfo={hotelInfo}
        />
      </div>
    </section>
  );
};

export default page;
