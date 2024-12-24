import { useMemo, useState } from "react";
import { FaRupeeSign } from "react-icons/fa"
import { useSelector } from "react-redux";

export const CartSection = () => {

    const items = useSelector((state) => state.cart.items);

    const findTheTotalCalculation = useMemo(() => {
        let totalValue = items.reduce((acc, item) => {
            return acc + item.quantity * item.price;
        }, 0);
        return totalValue
    }, [items])

    return (
        <div className="cart-section mt-5 px-5 py-2">
            <div className="flex gap-3 bg-slate-100">
                <div className="p-2 flex-1">
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

                <div className="bg-[#CBC3E3] flex-1">
                    <div>
                        <h3 className="text-xl font-bold mt-2 px-2">Order Summary</h3>
                        <hr className="mt-5 mb-5 border-gray-500 mx-2" />
                    </div>
                    <div className="text-[16px] px-2 font-bold flex justify-between items-center">
                        <span>ITEMS {items.length}</span>
                        <span className="flex items-center justify-center">
                            {findTheTotalCalculation} <FaRupeeSign />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}