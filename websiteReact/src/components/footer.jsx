import { Link } from "react-router-dom";
import { CONTACT, FAQ, HOME } from "../routes";
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t, i18n } = useTranslation();
    return (
        <footer className="bg-green rounded-t-lg container mx-auto ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="home.html" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/img/logo.png" className="w-10" alt="logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Odesypano</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-bold text-black sm:mb-0 ">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">{t("Privacy Policy")}</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">{t("Licensing")}</a>
                        </li>
                        <li>
                            <Link to={CONTACT} href="#" className="hover:underline">{t("contact")}</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-2" />
                <span className="block text-sm text-black sm:text-center ">© 2024 <a href="home.html"
                    className="hover:underline">Odesypano™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer