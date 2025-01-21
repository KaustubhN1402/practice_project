import React from "react";
import { NavbarMenu } from "../../MockData/data";
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";



const Navbar = () => {

    return(
        <nav>
            <div className="container">
                {/*logo section */}
                <div className="text-2xl flex items-center gap-2 font-bold py-8">
                    <FaDumbbell/>
                    <p>coders</p>
                    <p className="text-secondary">gym</p>
                </div>
                {/*Menu section */}
                {/*Icon section */}
                {/*mobile menu section */}
            </div>
        </nav>
    )


};

export default Navbar ; 