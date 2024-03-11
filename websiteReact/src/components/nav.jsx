import React from 'react'
import {useState} from 'react'
const nav = () => {
    const [toggle , setToggle] = useState(false);
    const [langToggle , setLangToggle] = useState(false);
    
    function openMenu(){
        setToggle(true);
    }

    function closeMenu(){
        setToggle(false);
    }
    function openLanguage(){
        setLangToggle(true);
    }
    
    function closeLanguage(){
        setLangToggle(false);
    }
    return (
        <div class="w-full ">
            <div class="bg-secondgreen flex flex-wrap items-center justify-between mx-auto rounded-b-lg md:px-10 px-4">
                <a href="home.html" class="flex items-center space-x-3 rtl:space-x-reverse">

                    <span class="self-center text-2xl  font-bold whitespace-nowrap ">Odesypano</span>
                </a>
                <div class="flex items-center lg:order-2 space-x-1 lg:space-x-0 rtl:space-x-reverse">
                    <button type="button" data-dropdown-toggle="language-dropdown-menu"
                        class="inline-flex items-center font-medium justify-center px-4 py-5 text-md text-black cursor-pointer hover:bg-green ">
                        Français
                    </button>

                    <div class="z-50 hidden my-4 text-base list-none bg-gray-100 divide-y divide-gray-100 rounded-lg shadow "
                        id="language-dropdown-menu">
                        <ul class="py-2 font-medium" role="none">
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-green "
                                    role="menuitem">
                                    <div class="inline-flex items-center">
                                        English
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-green "
                                    role="menuitem">
                                    <div class="inline-flex items-center">
                                        Français
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-green "
                                    role="menuitem">
                                    <div class="inline-flex items-center">
                                        العربية
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-language" type="button"
                        class="inline-flex items-center mx-1 p-2 w-10 h-10 justify-center text-sm text-black-500 rounded-lg hover:bg-white lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-language" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
                    id="navbar-language">
                    <ul
                        class="flex flex-col font-medium p-4 lg:p-0 bg-tansparent lg:space-x-8 rtl:space-x-reverse lg:flex-row ">
                        <li>
                            <a href="#" class="block px-3 py-5 text-black font-bold hover:bg-white"
                                aria-current="page">Acceuil</a>
                        </li>
                        <li>
                            <a href="#" class="block px-3 py-5 text-black font-bold hover:bg-white">Contact</a>
                        </li>
                        <li>
                            <a href="#" class="block px-3 py-5 text-black font-bold hover:bg-white ">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default nav