import React from "react";
import { BiChevronRight } from "react-icons/bi";
const NavSm = () => {
return (

<>
    <div className="text-white">
        <div>
        <h3>
            It All starts Here! </h3>
            <span className="text-grey-400 text-xs">
            Delhi <BiChevronRight />
             </span>
        </div>
    </div>
    </>
);
};
const NavMd = () => {};
const NavLg = () => {};
const Navbar= () => {
return (
    <>
        <nav>
        <div className="md:hidden"> 
        </div>
        <div className="hidden md:flex lg:hidden"> 
        </div>
        <div classname="hidden lg:flex"> </div>
        </nav>
        </>


);
};
export default Navbar;