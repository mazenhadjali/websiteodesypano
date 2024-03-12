import { Link } from "react-router-dom";
import { CONTACT, FAQ, HOME } from "../routes";

const Navbar = () => {
    return (
        <div className="w-full ">
            <div className="bg-secondgreen flex flex-wrap items-center justify-between mx-auto rounded-b-lg md:px-10 px-4">
                <a href="home.html" className="flex items-center space-x-3 rtl:space-x-reverse">

                    <span className="self-center text-2xl  font-bold whitespace-nowrap ">Odesypano</span>
                </a>
                <div className="flex items-center lg:order-2 space-x-1 lg:space-x-0 rtl:space-x-reverse">
                    <button type="button" data-dropdown-toggle="language-dropdown-menu"
                        className="inline-flex items-center font-medium justify-center px-4 py-5 text-md text-black cursor-pointer hover:bg-green ">
                        Français
                    </button>

                    <div className="z-50 hidden my-4 text-base list-none bg-gray-100 divide-y divide-gray-100 rounded-lg shadow "
                        id="language-dropdown-menu">
                        <ul className="py-2 font-medium" role="none">
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green "
                                    role="menuitem">
                                    <div className="inline-flex items-center">
                                        English
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green "
                                    role="menuitem">
                                    <div className="inline-flex items-center">
                                        Français
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green "
                                    role="menuitem">
                                    <div className="inline-flex items-center">
                                        العربية
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-language" type="button"
                        className="inline-flex items-center mx-1 p-2 w-10 h-10 justify-center text-sm text-black-500 rounded-lg hover:bg-white lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-language" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
                    id="navbar-language">
                    <ul
                        className="flex flex-col font-medium p-4 lg:p-0 bg-tansparent lg:space-x-8 rtl:space-x-reverse lg:flex-row ">
                        <li>
                            <Link to={HOME} className="block px-3 py-5 text-black font-bold hover:bg-white" aria-current="page">Acceuil</Link>
                        </li>
                        <li>
                            <Link to={CONTACT} className="block px-3 py-5 text-black font-bold hover:bg-white">Contact</Link>
                        </li>
                        <li>
                            <Link to={FAQ} className="block px-3 py-5 text-black font-bold hover:bg-white ">FAQ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;