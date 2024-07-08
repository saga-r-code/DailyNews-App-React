import React from "react";
import { Link } from "react-router-dom";

const Category = ({toggleMode}) =>{
    
    return (
      <div className="z-10 menu 2xl:w-[80%] 2xl:m-auto bg-sky-950 text-white md:bg-transparent md:text-black"> 
        <ul className=" flex flex-col gap-5 justify-end items-center px-5 2xl:px-7 py-3 md:flex-row md:gap-1">
        <li><Link className="block sm:hidden py-2 px-4 hover:text-gray-900" to="/" onClick={toggleMode}>Home</Link></li>
        <li> <Link className="block sm:hidden py-2 px-4 hover:text-gray-900" to="/About" onClick={toggleMode}>About</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/business" onClick={toggleMode}>Business</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/entertainment" onClick={toggleMode}>Entertainment</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/general" onClick={toggleMode}>General</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/health" onClick={toggleMode}>Health</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/science" onClick={toggleMode}>Science</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/sports" onClick={toggleMode}>Sports</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/technology" onClick={toggleMode}>Technology</Link></li>
        </ul>
      </div>
    );
}

export default Category;
