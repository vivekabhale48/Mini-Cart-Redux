import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { products } from './utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './store/slices/cartSlice';
import { FaRupeeSign } from 'react-icons/fa';

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
          <div className="flex gap-3 bg-slate-100">
            <div className="p-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Products added to Cart</h3>
                <h3 className="text-xl font-bold">{items.length} Items</h3>
              </div>
              <hr className="mt-5 mb-5 text-slate-800" />
              <div>
                <table className="border border-collapse w-full border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 w-2/4 uppercase">
                        Product Details
                      </th>
                      <th className="border border-gray-300 px-4 py-2 w-1/6 uppercase">
                        Quantity
                      </th>
                      <th className="border border-gray-300 px-4 py-2 w-1/6 uppercase">
                        Price
                      </th>
                      <th className="border border-gray-300 px-4 py-2 w-1/6 uppercase">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((ele, index) => (
                      <tr key={index}>
                        <td className="p-2">
                          <span className="ml-4 font-[600] text-blue-800 text-[18px]">
                            {ele.name}
                          </span>
                        </td>
                        <td className="p-2 text-center">
                          <span className="font-[600] text-blue-800 text-[18px]">
                            {ele.quantity}
                          </span>
                        </td>
                        <td className="p-2 text-center">
                          <span className="font-[600] text-blue-800 text-[18px]">
                            {ele.price}
                          </span>
                        </td>
                        <td className="p-2 text-center">
                          <span className="font-[600] text-blue-800 text-[18px]">
                            {ele.quantity * ele.price}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-[#CBC3E3] w-full">
              <div>
                <h3 className="text-xl font-bold mt-2 px-2">Order Summary</h3>
                <hr className="mt-5 mb-5 border-gray-500 mx-2" />
              </div>
              <div className="text-[16px] px-2 font-bold flex justify-between items-center">
                <span>ITEMS {items.length}</span>
                <span className="flex items-center justify-center">
                  {totalValue} <FaRupeeSign />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
