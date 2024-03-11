import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <React.Fragment>
            <Navbar />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}
