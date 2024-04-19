import { useAuth0 } from "@auth0/auth0-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Link } from "react-router-dom"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

export default function UserMenu() {
  const { user, logout } = useAuth0()

  return (
    <DropdownMenu >
      <DropdownMenuTrigger className="flex items-center text-orange-400 gap-x-2 me-2" >
        <img src={user?.picture} alt="Your profile" width={30} height={30} className="rounded-full" />
        <p className="font-bold text-black hover:text-orange-500">{user?.name}</p>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[200px] mt-2">
        <Link to="/user-profile" className="w-full ">
          <DropdownMenuItem className="cursor-pointer">
            User Profile
          </DropdownMenuItem>
        </Link>

        <Separator></Separator>

        <DropdownMenuItem >
          <Button className="flex flex-1 font-bold hover:bg-orange-400 " onClick={() => logout()}>Log out</Button>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
