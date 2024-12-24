import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const NavBarSection = () => {

    const items = useSelector((state) => state.cart.items);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MiniCart</span>
                </a>
                <ul className="flex justify-center items-center gap-2">
                    <li>
                        <Link to='/' className="py-2 px-3 text-white bg-blue-700 rounded p-0" aria-current="page">Home</Link>
                    </li>
                    <li className="py-2 px-3 bg-blue-700 rounded p-0">
                        <Link to='/cart' className="relative">
                            <FaCartShopping className="text-white text-[20px]"/>
                            {
                                items.length > 0 && (
                                    <span className="absolute w-5 h-5 bg-[#FF0000] rounded-full flex items-center justify-center text-white top-[-15px] left-[18px]">{items.length}</span>
                                )
                            }
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}