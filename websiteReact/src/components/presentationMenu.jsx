import { Link } from "react-router-dom";
import { CREATION, ORGANISATION, HISTORIQUE,CHAMPSINTERVENTION,DIRECTIONGENARALE,ZONEINTERVENTION,GROUPECIBLE } from "../routes";
import { useTranslation } from 'react-i18next';


function PresentationMenu() {
    const { t, i18n } = useTranslation();

    return (
        <div className="container mx-auto">
            <ul
                className="mx-4 rounded-lg text-sm font-medium text-gray-600 shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                <li className="w-full focus-within:z-10">
                    <Link to={CREATION}
                        className="inline-block w-full p-4 hover:text-black bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        {t("creation")}
                    </Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={CHAMPSINTERVENTION}
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        {t("Champs d'Intervention")}
                    </Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={HISTORIQUE}
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        {t("historique")}
                    </Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={ORGANISATION}
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        {t("organisation")}
                    </Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={DIRECTIONGENARALE}
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        {t("Les Directions Régionales")}
                    </Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={ZONEINTERVENTION}
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        {t("zone d'intervention")}
                    </Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={GROUPECIBLE}
                        className="inline-block w-full p-4 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        {t("Groupe Cible")}
                    </Link>
                </li>
            </ul>

        </div>
    )
}
export default PresentationMenu;