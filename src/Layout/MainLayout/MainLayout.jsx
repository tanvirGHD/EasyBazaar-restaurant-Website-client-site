import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const MainLayout = () => {
  const location = useLocation();
  return (
    <>
      <Navbar></Navbar>
      <div className={`${location.pathname === "/" ? "w-full" : "max-w-7xl"} mx-auto`}>
        <Outlet></Outlet>
      </div>
      <div className="mt-36">
        <Footer></Footer> 
      </div>
    </>
  );
};

export default MainLayout;
