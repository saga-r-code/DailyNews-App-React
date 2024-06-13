import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <div>
         <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-2 px-4 text-lg text-gray-700 b">
  <div className="flex items-center">
  <svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="#f5f5f5" stroke="#333" stroke-width="2"/>
  <path d="M6 8h12" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6 12h6" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 16h4" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="14" y="12" width="4" height="4" fill="#333" rx="1" ry="1"/>
</svg>


    <span className="text-xl font-bold">DailyNews</span>
  </div>
  <ul className="hidden md:flex md:items-center md:w-auto">
    <li>
      <a className="block py-2 px-4 hover:text-gray-900" href="/">Home</a>
    </li>
    <li>
      <a className="block py-2 px-4 hover:text-gray-900" href="/">News</a>
    </li>
    <li>
      <a className="block py-2 px-4 hover:text-gray-900" href="/">About</a>
    </li>
    <li>
      <a className="block py-2 px-4 hover:text-gray-900" href="/">Contact</a>
    </li>
  </ul>
  <button className="md:hidden flex items-center px-3 py-2 rounded text-gray-600 hover:text-gray-900" id="menu-button">
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</nav>
<hr className='border-2 '/>
      </div>
    )
  }
}

export default NavBar
