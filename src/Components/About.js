import React from 'react';

const About = () => {
  return (
    <div className="container p-4 mx-auto">
      <h1 className="text-4xl font-bold mb-4">About DailyNews</h1>
      <p className="text-lg mb-4">
        Welcome to DailyNews, your one-stop destination for the latest headlines and stories from around the world. Our mission is to provide you with up-to-date, accurate, and comprehensive news coverage on a wide range of topics.
      </p>
      <h2 className="text-2xl font-bold mb-2">Our Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Breaking News: Stay informed with the latest breaking news as it happens.</li>
        <li>Wide Range of Categories: From business and technology to health and entertainment, we cover it all.</li>
        <li>Infinite Scroll: Enjoy a seamless reading experience with our infinite scroll feature.</li>
        <li>Responsive Design: Access DailyNews on any device, anywhere, anytime.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
      <p className="text-lg mb-4">
        At DailyNews, we believe in the power of information. Our goal is to keep you informed about the events shaping the world around you. We strive to be your trusted source for news, providing content that is both informative and engaging.
      </p>
      
    </div>
  );
}

export default About;
