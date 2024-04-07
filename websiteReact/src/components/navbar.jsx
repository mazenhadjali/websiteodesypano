import { Link } from "react-router-dom";
import { CONTACT, FAQ, HOME } from "../routes";
import { useTranslation } from "react-i18next";

const Navbar = () => {

    const { t, i18n } = useTranslation();


    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); 
        localStorage.setItem('language', lng);
    };


    return (
        <div className="w-full ">
            <div className="bg-secondgreen flex flex-wrap items-center justify-between mx-auto rounded-b-lg md:px-10 px-4">
                <a href="home.html" className="flex items-center space-x-3 rtl:space-x-reverse">

                    <Link to={HOME} className="self-center text-2xl  font-bold whitespace-nowrap ">Odesypano</Link>
                </a>
                <div className="flex items-center lg:order-2 space-x-1 lg:space-x-0 rtl:space-x-reverse">
                
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