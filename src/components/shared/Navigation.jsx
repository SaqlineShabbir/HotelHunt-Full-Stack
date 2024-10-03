import { auth } from "../../../auth";
import NavigationClient from "./NavigationClient";

const Navigation = async () => {
  const session = await auth(); // Fetch session on the server-side

  return <NavigationClient session={session} />;
};

export default Navigation;
