import React, { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import PresentationMenu from '../components/presentationMenu';
import RightNavigation from '../components/rightNavigation';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';
import { useTranslation } from 'react-i18next';

export default function PresentationLayout() {
    const { i18n } = useTranslation();

    useEffect(() => {
        const storedLang = localStorage.getItem('language');
        console.log(storedLang)
        if (storedLang) {
            i18n.changeLanguage(storedLang);
        } else {
            i18n.changeLanguage('fr');
        }
    }, []);
    return (
        <React.Fragment>
            <Navbar />
            <div className="container  w-full mx-auto my-2">
                <img src="/img/banner.png" className="w-full justify-center rounded-lg" alt="banner" />
            </div>
            <Breadcrumb />
            <PresentationMenu />
            <div className="container mx-auto flex flex-wrap">

                <div className="md:w-3/4 sm:w-full">
                    <div className="container py-2">
                        <Outlet />
                    </div>
                </div>
                <div className="md:w-1/4 px-2 sm:w-full sm:mx-auto">
                    <RightNavigation />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
