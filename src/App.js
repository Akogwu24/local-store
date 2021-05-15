import { useState, useEffect } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  const [productItems, setProductItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const productData = await response.json();
    console.log(productData);
    setProductItems(productData);
    setisLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleRemove = (id) => {
    let productRemaining = productItems.filter((product) => product.id !== id);
    setProductItems(productRemaining);
  };

  const handleBuy = () => {
    setProductItems([]);
  };

  return (
    <div className=' text-center'>
      <h1 className='py-5 px-3 text-4xl font-bold'>
        These are the Items we Have for you today, Kinldy remove the ones you do
        not want
      </h1>
      {isLoading && <p className='text-4xl'>Loading Products...</p>}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 '>
        {productItems?.map((product) => {
          return (
            <div className=''>
              <ProductCard
                key={product.id}
                image={product.image}
                productName={`${product.title.split(' ')[0]} ${
                  product.title.split(' ')[1]
                } ${product.title.split(' ')[2]}`}
                productPrice={product.price}
              />
              <button
                onClick={() => handleRemove(product.id)}
                className='w-42 bg-red-500 py-3 px-5 text-xl rounded-lg my-5 hover:bg-red-400 mr-2 font-bold'
              >
                Remove Item
              </button>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleBuy}
        className='mb-20 bg-green-500 py-3 px-5 text-xl rounded-lg my-5 hover:bg-green-400 ml-2 font-bold'
      >
        Click here to Buy All Items Above
      </button>
      <button
        className='mb-20 bg-green-500 py-3 px-5 text-xl rounded-lg my-5 hover:bg-green-400 ml-2 font-bold'
        onClick={() => setProductItems()}
      >
        Reload Products
      </button>
    </div>
  );
}

export default App;
