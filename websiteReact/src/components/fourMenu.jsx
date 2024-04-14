import { Link } from "react-router-dom";
import {OBJECTIF,ZONE,COMPOSANTES,COUTS,SCHEMA,APPROCHE} from "../routes";
import { useTranslation } from 'react-i18next';

function FourMenu() {
    const { t, i18n } = useTranslation();

    return (
        <div className="container mx-auto">
            <ul className="mx-4 text-sm font-medium text-gray-600 shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <li className="w-full focus-within:z-10">
                    <Link to={OBJECTIF}
                        className="inline-block w-full p-4 font-bold text-black bg-green hover:bg-white focus:ring-4 focus:ring-blue-300 focus:outline-none">{t("objectif du projet")}</Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={ZONE}
                        className="inline-block w-full p-4 font-bold text-black bg-green hover:bg-white focus:ring-4 focus:ring-blue-300 focus:outline-none">{t("zone d'intervention")}</Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={COMPOSANTES}
                        className="inline-block w-full p-4 font-bold text-black bg-green hover:bg-white focus:ring-4 focus:ring-blue-300 focus:outline-none">{t("composantes du projet")}</Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={COUTS}
                        className="inline-block w-full p-4 font-bold text-black bg-green hover:bg-white focus:ring-4 focus:ring-blue-300 focus:outline-none">{t("coûts du projet")}</Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={SCHEMA}
                        className="inline-block w-full p-4 font-bold text-black bg-green hover:bg-white focus:ring-4 focus:ring-blue-300 focus:outline-none">{t("schéma de financement")}</Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={APPROCHE}
                        className="inline-block w-full p-4 font-bold text-black bg-green hover:bg-white focus:ring-4 focus:ring-blue-300 focus:outline-none">{t("approche de mise en oeuvre")}</Link>
                </li>
            </ul>

        </div>
    )
}
export default FourMenu;