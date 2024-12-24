import { useEffect, useMemo, useState } from "react";
import { FaRupeeSign } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../store/slices/cartSlice";

export const CartSection = () => {

    const items = useSelector((state) => state.cart.items);
    useEffect(() => {}, [items])
    
    const dispatch = useDispatch();
    const findTheTotalCalculation = useMemo(() => {
        let totalValue = items.reduce((acc, item) => {
            return acc + item.quantity * item.price;
        }, 0);
        return totalValue
    }, [items])

    function handleQuantityChange(item, parameter) {
        if(parameter === 'increment') {
            dispatch({
                type: 'cart/addItemToCart',
                payload: item,
                meta: {type: 'increment'}
            });
        }
        else {
            dispatch({
                type: 'cart/addItemToCart',
                payload: item,
                meta: {type: 'decrement'}
            });
        }
    }

    function handleRemove(id) {
        console.log(id);
        dispatch(removeItemFromCart(id))
    }

    return (
        // <div className="cart-section mt-5 px-5 py-2">
        //     <div className="flex gap-3 bg-slate-100">
        //         <div className="p-2 flex-1">
        //             <div className="flex items-center justify-between">
        //                 <h3 className="text-xl font-bold">Products added to Cart</h3>
        //                 <h3 className="text-xl font-bold">{items.length} Items</h3>
        //             </div>
        //             <hr className="mt-5 mb-5 text-slate-800" />
        //             <div>
        //                 <table className="border border-collapse w-full border-gray-200">
        //                     <thead>
        //                         <tr className="bg-gray-100">
        //                             <th className="border border-gray-300 px-4 py-2 w-2/4 uppercase">
        //                                 Product Details
        //                             </th>
        //                             <th className="border border-gray-300 px-4 py-2 w-1/6 uppercase">
        //                                 Quantity
        //                             </th>
        //                             <th className="border border-gray-300 px-4 py-2 w-1/6 uppercase">
        //                                 Price
        //                             </th>
        //                             <th className="border border-gray-300 px-4 py-2 w-1/6 uppercase">
        //                                 Total
        //                             </th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         {items.map((ele, index) => (
        //                             <tr key={index}>
        //                                 <td className="p-2">
        //                                     <span className="ml-4 font-[600] text-blue-800 text-[18px]">
        //                                         {ele.name}
        //                                     </span>
        //                                 </td>
        //                                 <td className="p-2 text-center">
        //                                     <span className="font-[600] text-blue-800 text-[18px]">
        //                                         {ele.quantity}
        //                                     </span>
        //                                 </td>
        //                                 <td className="p-2 text-center">
        //                                     <span className="font-[600] text-blue-800 text-[18px]">
        //                                         {ele.price}
        //                                     </span>
        //                                 </td>
        //                                 <td className="p-2 text-center">
        //                                     <span className="font-[600] text-blue-800 text-[18px]">
        //                                         {ele.quantity * ele.price}
        //                                     </span>
        //                                 </td>
        //                             </tr>
        //                         ))}
        //                     </tbody>
        //                 </table>
        //             </div>
        //         </div>

        //         <div className="bg-[#CBC3E3] flex-1">
        //             <div>
        //                 <h3 className="text-xl font-bold mt-2 px-2">Order Summary</h3>
        //                 <hr className="mt-5 mb-5 border-gray-500 mx-2" />
        //             </div>
        //             <div className="text-[16px] px-2 font-bold flex justify-between items-center">
        //                 <span>ITEMS {items.length}</span>
        //                 <span className="flex items-center justify-center">
        //                     {findTheTotalCalculation} <FaRupeeSign />
        //                 </span>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        //new
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6 text-center">Shopping Cart</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Cart Items Section */}
                <div className="lg:col-span-2">
                    {items.length > 0 ? (
                        items.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between border rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-20 w-20 object-contain"
                                />
                                <div className="flex-1 mx-4">
                                    <h2 className="font-semibold text-lg mb-1">{item.title}</h2>
                                    <p className="text-gray-600">Price: ${item.price}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        disabled={item.quantity === 1 ? true : false}
                                        onClick={() => handleQuantityChange(item, 'decrement')}
                                        className="px-2 py-1 disabled:bg-gray-200 disabled:cursor-not-allowed border rounded hover:bg-gray-200"
                                    >
                                        -
                                    </button>
                                    <span className="font-semibold">{item.quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange(item, 'increment')}
                                        className="px-2 py-1 border rounded hover:bg-gray-200"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="text-red-500 hover:text-red-700 ml-4"
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Your cart is empty.</p>
                    )}
                </div>

                {/* Order Summary Section */}
                <div className="border rounded-lg p-4 shadow-sm">
                    <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                    <div className="flex justify-between mb-2">
                        <p className="text-gray-600">Subtotal</p>
                        <p className="font-semibold">${findTheTotalCalculation.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between mb-4">
                        <p className="text-gray-600">Shipping</p>
                        <p className="font-semibold">$5.00</p>
                    </div>
                    <hr className="mb-4" />
                    <div className="flex justify-between text-lg font-bold">
                        <p>Total</p>
                        <p>${(findTheTotalCalculation + 5).toFixed(2)}</p>
                    </div>
                    <button
                        className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}