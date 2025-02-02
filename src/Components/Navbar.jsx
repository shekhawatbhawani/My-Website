import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
const Navbar = ({user}) => {

  const auth = getAuth()
   let navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let handelLogOut = async ()=>{
    try {
      await signOut(auth); // Sign the user out
      console.log("User signed out successfully");
      navigate('/')
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  
  } 

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://files.oaiusercontent.com/file-4gc2ZfGrvNV4ykHbh5mLnk?se=2025-02-01T10%3A09%3A21Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D788d2c61-fb1d-4425-98dd-f59f4d2aeeaf.webp&sig=P7tTuqpcjz2DvVcW4fJ44j4hrOfsVokbPTtt/FY0c3M%3D"
            className="h-8 rounded-xl"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Projects
          </span>
        </a>
        {/* Toggle Button (Visible on Small Screens) */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* Menu List (Visible on Large Screens) */}
        <div className="hidden w-full md:flex md:items-center md:w-auto">
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium mt-4 md:mt-0">
            <li>
             <Link  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" to="/">Home</Link>
            </li>
            <li>
            <Link  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" to="/service">   Services</Link>
            </li>
            <li>
            <Link  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" to="/contact">Contact</Link>
            </li>
            <li>
            <Link  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" to="/">Sig In</Link>
            </li>
            <li>
            <Link  className="block py-2 px-3 text-white bg-gray-900 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" onClick={handelLogOut}>Log out</Link>
            </li>
          </ul>
        </div>
        {/* Hamburger Menu (Visible on Small Screens) */}
        <div className={`w-full md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <li>
            <Link  className="block py-2 px-3 text-white bg-gray-900 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" to="/">Home</Link>
            </li>
            <li>
            <Link  className="block py-2 px-3 text-white bg-gray-900 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"to="/service">Services</Link>
            </li>
    
            <li>
            <Link  className="block py-2 px-3 text-white bg-gray-900 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" to="/contact">Contact</Link>            </li>
            <li>
            <Link  className="block py-2 px-3 text-white bg-gray-900 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" to="/">Sig In</Link>            </li>

            <li>
            <Link  className="block py-2 px-3 text-white bg-gray-900 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" onClick={handelLogOut}>Log out</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
