import ProfileInfo from "@/components/booking/ProfileInfo";
import { auth } from "../../../auth";

const page = async () => {
  const session = await auth();
  return (
    <div>
      <ProfileInfo session={session} />
    </div>
  );
};

export default page;
