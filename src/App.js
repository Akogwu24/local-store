import { useState, useEffect } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  const [productItems, setProductItems] = useState([]);

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const productData = await response.json();
    console.log(productData);
    setProductItems(productData);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className=' text-center'>
      <h1 className='py-5 px-3 text-4xl font-bold'>
        These are the Items we Have for you today, Kinldy remove the ones you do
        not want
      </h1>
      {productItems.map((product) => (
        <ProductCard
          image={product.image}
          productName={`${product.title.split(' ')[0]} ${
            product.title.split(' ')[1]
          } ${product.title.split(' ')[2]}`}
          productPrice={product.price}
        />
      ))}

      <button className='mb-20 bg-green-500 py-3 px-5 text-xl rounded-lg my-5 hover:bg-green-400 ml-2 font-bold'>
        Click here to Buy All Items Above
      </button>
    </div>
  );
}

export default App;
