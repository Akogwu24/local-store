import React from 'react';
import grocery from '../assets/images/download.jpg';

const ProductCard = () => {
  return (
    <div className='p-10'>
      <div className='text-center bg-red-200 p-10'>
        <div className='mb-5'>
          <img
            src={grocery}
            alt='product'
            className='img mx-auto rounded-2xl'
          />
        </div>
        <div>
          <h3 className='font-bold text-4xl'>product name</h3>
          <h3 className='font-bold my-5 text-2xl'>price</h3>
          <button className='bg-red-500 py-3 px-5 text-2xl rounded-lg my-5 hover:bg-red-400'>
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
