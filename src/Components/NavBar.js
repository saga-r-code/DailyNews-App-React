import React, { useState } from 'react';
import Category from './Category';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [showCategory, setShowCategory] = useState(false);

  const toggleMode = () => {
    setShowCategory(!showCategory);
  };

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-2 px-4 text-lg text-gray-700 2xl:w-[80%] m-auto">
        <div className="flex items-center">
          <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="#f5f5f5" stroke="#333" strokeWidth="2" />
            <path d="M6 8h12" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 12h6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 16h4" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="14" y="12" width="4" height="4" fill="#333" rx="1" ry="1" />
          </svg>
          <span className="text-xl font-bold">DailyNews</span>
        </div>
        <ul className={`hidden font-semibold left-0 top-20 text-base sm:bg-transparent sm:static sm:flex sm:items-center`}>
          <li>
            <Link className="py-2 px-4 hover:text-gray-900" to="/">Home</Link>
          </li>
          <li>
            <Link className="py-2 px-4 hover:text-gray-900" to="/about">About</Link>
          </li>
          <li className="block py-2 px-4 hover:text-gray-900 cursor-pointer" onClick={toggleMode}>News &darr;</li>
        </ul>
        <button className="menu-bar sm:hidden flex items-center px-3 py-2 rounded text-gray-600 hover:text-gray-900 cursor-pointer" id="menu-button" onClick={toggleMode}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      <hr className='border-2' />
      {showCategory && <Category toggleMode={toggleMode} />}
    </>
  );
};

export default NavBar;
