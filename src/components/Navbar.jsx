
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";



const Navbar = () => {



  return (
    <div className="flex w-screen h-auto fixed justify-center z-10 nav_border bg-white py-4" >
      <nav className="flex justify-between items-center w-3/4  max-w-6xl mx-auto ">

        <NavLink to="/">
          <div className="ml-5">
            <img src="../formlogo.png" className="h-14" />
          </div>
        </NavLink>


        <NavLink to="/">
          <p className="text_nav">Home</p>
        </NavLink>
        <NavLink to="/Result">
          <p className="_nav">Result</p>
        </NavLink>
        <NavLink to="/FAQ">
          <p className="_nav">FAQ</p>
        </NavLink>
        <NavLink to="/Aboutus">
          <p className="_nav">AboutUs</p>
        </NavLink>
        <NavLink to="/Contactus">
          <p className="_nav">ContactUs</p>
        </NavLink>

        <div className="flex  item-center h-[30px] w-[250px] bord relative">

          <CiSearch className="absolute top-2 left-2 w-[16px] h-[16px] text-[#9F9F9F] " />
          <p className="_nev_text absolute top-2 left-9">
            Search exams here
          </p>
        </div>
        <div>
        <CiBellOn className="_nav_bell w-[30px] h-[30px] text-[#246BFD] " />
        </div>
        <div className="px-3">
            <img src="../Ellipse1.png" className="_nev_image" />
          </div>




      </nav>
    </div>
  )
};

export default Navbar;
