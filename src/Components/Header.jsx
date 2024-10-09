import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="bg-white text-black shadow  flex justify-between items-center text-4xl py-2 px-4">
                <div className="flex items-center">
                    <img
                        className="sm:w-[70px] sm:h-[50px] w-[50px] h-[50px] rounded"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrzaA4y2sOqL_zGU03oHTTs-lI0cOsLTB73g&s"
                        alt="Logo"
                    />
                    <h1 className="text-4xl font-bold">Hafso<span className="text-[#EE0000]">Xilwanag</span></h1>
                </div>
                
                <div className="hidden md:flex">
                    <ul className="flex gap-10 text-2xl font-semibold mr-16">
                        <NavLink to='/'><li>Home</li></NavLink>
                        <NavLink to='/About'><li>About Me</li></NavLink>
                        <NavLink to='/skil'><li>My Skills</li></NavLink>
                        <NavLink to='/pro'><li> My Projects</li></NavLink>
                        <NavLink to='con'><li>Contact</li></NavLink>
                    </ul>
                    <a href="Resume.pdf"><button className="w-[110px] h-[40px] ml-[50px] sm:ml-0 bg-[#243642] rounded text-white text-2xl font-semibold  ">Resume</button></a>

                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow">
                    <ul className="flex flex-col text-2xl font-semibold p-4">
                        <NavLink to='/'><li>Home</li></NavLink>
                        <NavLink to='/About'><li>About Me</li></NavLink>
                        <NavLink to='/skil'><li>My Skills</li></NavLink>
                        <NavLink to='/pro'><li>Projects</li></NavLink>
                        <NavLink to='con'><li>Contact</li></NavLink>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Header;
