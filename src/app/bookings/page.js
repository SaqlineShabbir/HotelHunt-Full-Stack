import BookingMain from "@/components/booking/BookingMain";
import ProfileInfo from "@/components/booking/ProfileInfo";
import { getUserByEmail } from "@/queries";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";

const page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const loggedInUser = await getUserByEmail(session?.user?.email);

  return (
    <>
      <section className="mt-[100px]">
        <div className="max-w-7xl mx-auto w-full px-4">
          <ProfileInfo />
        </div>
      </section>
      <section>
        <BookingMain userId={loggedInUser?._id} />
      </section>
    </>
  );
};

export default page;
