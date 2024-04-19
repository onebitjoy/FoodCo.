import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

export default function NavMobile() {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0()
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {
            isAuthenticated ? <div className="flex mt-8 mb-4 gap-x-4">
              <img src={user?.picture} alt="Your profile" width={30} height={30} className="rounded-full" />
              <p className="font-bold text-black ">{user?.name}</p>
            </div> :
              <span>Welcome, user!</span>
          }
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          {
            isAuthenticated ? <MobileNavLinks /> :
              <Button className="flex-1 font-bold bg-orange-500" onClick={() => loginWithRedirect()}>Log in</Button>
          }
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}
