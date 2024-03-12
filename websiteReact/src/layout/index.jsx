import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="container  w-full mx-auto my-2">
                <img src="/img/banner.png" className="w-full justify-center rounded-lg" alt="banner" />
            </div>
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}
