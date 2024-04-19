import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Separator } from "./ui/separator";

export default function MobileNavLinks() {
  const { logout } = useAuth0()
  return <div className="flex flex-col w-full mt-4 gap-y-4">
    <Separator />
    <Link to="/user-profile" className="font-bold text-black">User Profile</Link>
    <Button onClick={() => logout()}
      className="font-bold hover:text-white hover:bg-orange-500 ">Log out</Button>
  </div>
}
