import React from 'react';

const ProductCard = ({ image, productName, productPrice }) => {
  return (
    <div className='p-10'>
      <div className='text-center p-10'>
        <div className='image-container mb-5'>
          <img src={image} alt='product' className='img mx-auto rounded-2xl' />
        </div>
        <div>
          <h3 className='font-bold text-4xl'>{productName}</h3>
          <h3 className='font-bold my-5 text-2xl'>$ {productPrice}</h3>

          {/* <button className='w-42 bg-green-500 py-3 px-5 text-xl rounded-lg my-5 hover:bg-green-400 ml-2 font-bold'> */}
          {/* Buy Items */}
          {/* </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
