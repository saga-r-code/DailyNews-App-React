import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="relative flex w-full max-w-[26rem] mt-4 flex-col rounded-xl  text-gray-700 shadow-xl"> 
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 text-white shadow-lg">
         <span className="absolute top-1 left-3 rounded-full bg-red-700 p-1 px-2 text-sm text-red-50">{source}</span>
         <Link to={newsUrl}  rel="noreferrer" target="_blank"><img src={imageUrl} alt="News Photos" /></Link>
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center justify-between">
            <h5 className="text-xl font-semibold text-black">{title}</h5>
          </div>
          <p className="mt-3 text-base font-medium text-gray-800">{description}</p>
          <h5 className="font-medium mt-6 text-gray-400 hover:text-gray-600">By {author} on {new Date(date).toUTCString()}</h5> 
          {/*  {new Date(date).toUTCString()}- new Date(date) is create the new object and toUTCString() for the formate string*/}
          <div className="my-3">
            <Link
              to={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-slate-800 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
            <svg className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg" >
              <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
