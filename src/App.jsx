import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { products } from './utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './store/slices/cartSlice';
import { FaRupeeSign } from 'react-icons/fa';
import { CartSection } from './components/CartSection';

function App() {
  const dispatch = useDispatch();
  const [totalValue, setTotalValue] = useState(null);
  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    findTheTotal();
  }, [items]);

  function handleAddToCartClick(ele) {
    dispatch(addItemToCart(ele));
  }

  function findTheTotal() {
    let totalValue = items.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    setTotalValue(totalValue);
  }

  return (
    <div>
      <div className="products-section">
        <h1 className="text-3xl font-bold text-center">Products</h1>
        <div className="mt-5">
          {products.map((ele, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 shadow mb-2"
            >
              <div className="flex items-center justify-center">
                <span className="flex justify-center items-center w-6 h-6 shadow rounded-full mr-5">
                  {ele.id}
                </span>
                <span className="bg-slate-200 p-2 rounded font-bold">
                  {ele.name}
                </span>
              </div>
              <div className="flex gap-3">
                <span>{ele.price} Rs</span>
                <button
                  onClick={() => handleAddToCartClick(ele)}
                  className="flex justify-center items-center font-bold w-5 h-5 shadow rounded-full cursor-pointer hover:bg-slate-200"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cart-section mt-5 px-5 py-2">
        {items.length > 0 && (
            <CartSection items={items} totalValue={totalValue}/>
        )}
      </div>
    </div>
  );
}

export default App;
