import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container p-4 mx-auto w-[80%] m-auto text-slate-500">
      <h1 className="text-3xl font-bold mb-4 underline-offset-4 underline text-black">About NewsHub</h1>
      <p className="text-lg mb-4">
        Welcome to NewsHub, NewsHub offers latest news, breaking stories, wide topics, and seamless reading experience.
      </p>
      <h2 className="text-2xl font-bold mb-2 text-black">Our Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Breaking News: Stay informed with the latest breaking news as it happens.</li>
        <li>Wide Range of Categories: From business and technology to health and entertainment, we cover it all.</li>
        <li>Infinite Scroll: Enjoy a seamless reading experience with our infinite scroll feature.</li>
        <li>Responsive Design: Access NewsHub on any device, anywhere, anytime.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2 text-black">Our Vision</h2>
      <p className="text-lg mb-4">
      Here at NewsHub, we whole-heartedly believe in the power of information. Everything we do has to change, and our mission is keeping you up to date with what's happening in the world around you. This article is part of The Post Millennial, a new movement in media.
      </p>

      <div className="flex justify-end items-end p-2 my-6">
        <footer className="footer text-sm ">
          <p>&copy; 2024 NewsHub. All rights reserved.</p>
          <p>
            Designed and developed by&nbsp;
            <Link
              to="https://github.com/saga-r-code"
              className="cursor-pointer text-black text-base"
              target="_blank"
            >
              <b>
                <u>Sagar Shah</u>
              </b>
            </Link>
          </p>
        </footer>
      </div>
      
    </div>
  );
}

export default About;
