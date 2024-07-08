import React from 'react';
import loader from '../Assets/loader.gif';

const Spinner = () => {
  return (
    <div className='2xl:w-[80%] 2xl:m-auto'>
      <img src={loader} alt="loading..." className='mx-[50%] my-3' />
    </div>
  );
};

export default Spinner;
