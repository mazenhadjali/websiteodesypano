import { Link } from "react-router-dom";
import { CREATION, APPROCHEDEDEV, DOMAINEACTIVITE,PARTENARIAT,OUTILDEGESTION,TEMOINAGE,ACCESINFO, PROJETODYSEPANO } from "../routes";
import { useTranslation } from 'react-i18next';

function HomeMenu() {
    const { t, i18n } = useTranslation();

    return (
        <div className="container mx-auto">
            <ul className="mx-4 text-sm font-medium text-gray-600 shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                <li className="w-full focus-within:z-10">
                    <Link to={CREATION}
                        className="inline-block w-full p-4 font-bold text-black bg-green hover:bg-white focus:ring-4 focus:ring-blue-300 focus:outline-none">{t('presentation')}</Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={PROJETODYSEPANO}
                        className="inline-block w-full p-4 font-bold text-black bg-green hover:bg-white focus:ring-4 focus:ring-blue-300 focus:outline-none">{t('projet')}</Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={DOMAINEACTIVITE}
                        className="inline-block w-full p-4 font-bold text-black bg-green hover:bg-white focus:ring-4 focus:ring-blue-300 focus:outline-none">{t("Domaine d'activité")}</Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={APPROCHEDEDEV}
                        className="inline-block w-full p-4 font-bold text-black bg-green hover:bg-white focus:ring-4 focus:ring-blue-300 focus:outline-none">{t("Approches de développement")}</Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={PARTENARIAT}
                        className="inline-block w-full p-4 font-bold text-black bg-green hover:bg-white focus:ring-4 focus:ring-blue-300 focus:outline-none">{t("Partenariat")}</Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={OUTILDEGESTION}
                        className="inline-block w-full p-4 font-bold text-black bg-green hover:bg-white focus:ring-4 focus:ring-blue-300 focus:outline-none">{t("Outils de gestion")}</Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={TEMOINAGE}
                        className="inline-block w-full p-4 font-bold text-black bg-green hover:bg-white focus:ring-4 focus:ring-blue-300 focus:outline-none">{t("Témoignages")}</Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link to={ACCESINFO}
                        className="inline-block w-full p-4 font-bold text-black bg-green hover:bg-white focus:ring-4 focus:ring-blue-300 focus:outline-none">{t("Accès à l'information")}</Link>
                </li>
            </ul>

        </div>
    )
}
export default HomeMenu;