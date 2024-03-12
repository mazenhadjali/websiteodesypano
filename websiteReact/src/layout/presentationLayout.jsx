import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet } from "react-router-dom";
import PresentationMenu from '../components/presentationManu';
import RightNavigation from '../components/rightNavigation';

export default function PresentationLayout() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="container  w-full mx-auto my-2">
                <img src="/img/banner.png" className="w-full justify-center rounded-lg" alt="banner" />
            </div>
            <PresentationMenu />
            <div className="container mx-auto flex flex-wrap">

                <div className="md:w-3/4 sm:w-full">
                    <div className="container py-2">
                        <Outlet />
                    </div>
                </div>
                <div className="md:w-1/4 sm:w-full sm:mx-auto">
                    <RightNavigation />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
