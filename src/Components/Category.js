import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Category extends Component {
  render() {
    return (
      <div className="menu w-[80%] m-auto">
        <ul className="z-10 flex flex-col gap-5 justify-end items-center 2xl:px-7 py-3 md:flex-row md:gap-1">
        <li><Link className="block md:hidden py-2 px-4 hover:text-gray-900" to="/">Home</Link></li>
        <li> <Link className="block md:hidden py-2 px-4 hover:text-gray-900" to="/About">About</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/business">Business</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/entertainment">Entertainment</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/general">General</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/health">Health</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/science">Science</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/sports">Sports</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/technology">Technology</Link></li>
        </ul>
      </div>
    );
  }
}
