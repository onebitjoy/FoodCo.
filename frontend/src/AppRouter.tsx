import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HeroComp from "./components/HeroComp";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HeroComp /></Layout>} />
      <Route path="/user-profile" element={<span>User profile</span>} />
      <Route path="*" element={<span> Page not found!</span>} />
    </Routes>
  )
}