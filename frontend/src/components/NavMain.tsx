import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserMenu from "./UserMenu";

export default function NavMain() {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  return isAuthenticated ? <UserMenu /> : (<Button
    variant="ghost"
    className="font-bold hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500 active:text-white active:bg-orange-500"
    onClick={async () => {
      await loginWithRedirect()
    }}
  > Log in </Button >
  )

}
