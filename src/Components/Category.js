import React, { Component } from "react";

export default class Category extends Component {
  render() {
    return (
      <div className="menu w-[80%] m-auto  ">
        <ul className="z-10 flex flex-col gap-5 justify-end items-center px-7 py-3 md:flex-row md:gap-8">
          <li>
            <a href="/">business</a>
          </li>
          <li>
            <a href="/">entertainment</a>
          </li>
          <li>
            <a href="/">general</a>
          </li>
          <li>
            <a href="/">health</a>
          </li>
          <li>
            <a href="/">science</a>
          </li>
          <li>
            <a href="/">sports</a>
          </li>
          <li>
            <a href="/">technology</a>
          </li>
        </ul>
      </div>
    );
  }
}
