import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Category extends Component {
  render() {
    
    return (
      <div className="z-10 menu 2xl:w-[80%] 2xl:m-auto"> 
        <ul className=" flex flex-col gap-5 justify-end items-center  px-5 2xl:px-7 py-3 md:flex-row md:gap-1">
        <li><Link className="block sm:hidden py-2 px-4 hover:text-gray-900" to="/" onClick={this.props.toggleMode}>Home</Link></li>
        <li> <Link className="block sm:hidden py-2 px-4 hover:text-gray-900" to="/About" onClick={this.props.toggleMode}>About</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/business" onClick={this.props.toggleMode}>Business</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/entertainment" onClick={this.props.toggleMode}>Entertainment</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/general" onClick={this.props.toggleMode}>General</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/health" onClick={this.props.toggleMode}>Health</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/science" onClick={this.props.toggleMode}>Science</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/sports" onClick={this.props.toggleMode}>Sports</Link></li>
        <li><Link  className="block py-2 px-4 hover:text-gray-900" to="/technology" onClick={this.props.toggleMode}>Technology</Link></li>
        </ul>
      </div>
    );
  }
}
