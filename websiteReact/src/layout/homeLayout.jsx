import React, { useEffect } from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Outlet } from "react-router-dom";
import Carousel from '../components/carousel';
import HomeMenu from '../components/homeMenu';
import RightNavigation from '../components/rightNavigation';
import Breadcrumb from '../components/breadcrumb';
import { useTranslation } from 'react-i18next';

export default function HomeLayout() {

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
            <Carousel />
            <Breadcrumb />
            <HomeMenu />
            <div className="container mx-auto flex flex-wrap">
                <div className="md:w-3/4 sm:w-full">
                    <Outlet />
                </div>
                <div className="md:w-1/4 px-2 sm:w-full sm:mx-auto">
                    <RightNavigation />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
