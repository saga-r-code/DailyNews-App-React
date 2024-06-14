import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
  let {title, description} = this.props
    return (
      <div className="relative flex w-full max-w-[26rem] mt-4 flex-col rounded-xl bg-white text-gray-700 shadow-lg">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 text-white shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
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
    
        
      </div>
    </div>
    
    );
  }
}

export default Newsitem;
