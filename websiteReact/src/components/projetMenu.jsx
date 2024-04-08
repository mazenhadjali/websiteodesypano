import { Link } from "react-router-dom";
import { PROJETODYSEPANO, OBJECTIF } from "../routes";
import { useTranslation } from 'react-i18next';


function ProjetMenu() {
    const { t, i18n } = useTranslation();

    return (
        <div className="container mx-auto">
            <ul
                className="mx-4 rounded-lg text-sm font-medium text-gray-600 shadow grid grid-cols-1 md:grid-cols-2 ">
                <li className="w-full focus-within:z-10">
                    <Link to={PROJETODYSEPANO}
                        className="inline-block w-full p-4 hover:text-black bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        projet de l'Odesypano
                    </Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={OBJECTIF}
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        Quaterieme Projet
                    </Link>
                </li>
                
            </ul>

        </div>
    )
}
export default ProjetMenu;