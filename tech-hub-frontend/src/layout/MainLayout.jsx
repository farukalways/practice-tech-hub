import { Outlet } from "react-router-dom";
import Navber from "./../componentes/Navber";

const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto min-h-screen bg-[#F8F6F1]">
      <Navber />
      <Outlet />
    </div>
  );
};

export default MainLayout;
