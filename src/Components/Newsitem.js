import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
  let {title, description, imageUrl, newsUrl} = this.props
    return (
      <div className="relative flex w-full max-w-[26rem] mt-4 flex-col rounded-xl bg-white text-gray-700 shadow-lg">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 text-white shadow-lg">
        <img
        src={imageUrl}
          alt="Wooden House, Florida"
        />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        <button
          className="absolute top-4 right-4 h-8 w-8 rounded-full text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30"
          type="button"
        >
          
        </button>
      </div>
    
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h5 className="text-xl font-medium text-blue-gray-900">
           {title}
          </h5>
          
        </div>
        <p className="text-base text-gray-700">
         {description}
        </p>
    
        <div className="my-3">
        <a href={newsUrl} rel="noreferrer" target="_blank"
							className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Read more
							<svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"></path>
							</svg>
						</a>
        </div>

      </div>
    </div>
    
    );
  }
}

export default Newsitem;
