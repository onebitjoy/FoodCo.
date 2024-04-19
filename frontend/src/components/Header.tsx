import { Link } from "react-router-dom";
import NavMobile from "./NavMobile";
import NavMain from "./NavMain";

export default function Header() {
  return (
    <div className="flex items-center justify-between py-4 mx-2 mb-16 ">
      <div className="text-3xl font-bold">FoodCo<span className="text-4xl text-orange-500">.</span></div>
      <div className="flex gap-x-4">
        <div className="flex items-center gap-x-4">
          <Link className="hidden md:block" to="/">Home</Link>
          <Link className="hidden md:block" to="/user-profile">Profile</Link>
        </div>
        <div className="md:hidden">
          <NavMobile />
        </div>
        <div className="hidden md:block">
          <NavMain />
        </div>
      </div>
    </div>
  )
}
