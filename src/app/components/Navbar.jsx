"use client"
import Link from "next/link";
import React, {useState} from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return(
        <nav className="fixed top-0 left-0 right-0 z-10 bg-primary-200 bg-opacity-50">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto p-4 px-4">
                <Link href={'/'} className="text-2xl md:text-5xl text-black font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to bg-primary-500">
                    YW
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                        onClick={() => setNavbarOpen(true)}
                        className="flex items-center px-3 py-2  border rounded border-black hover:text-primary-500 hover:border-primary-300">
                            <Bars3Icon className="h-5 w-5"/>
                        </button>
                    ):(
                        <button
                        onClick={() => setNavbarOpen(false)}
                        className="flex items-center px-3 py-2  border rounded border-black hover:text-primary-500 hover:border-primary-300">
                            <XMarkIcon className="h-5 w-5"/>
                        </button>
                    )}
                </div>
                <div
                    className="menu hidden md:block md:w-auto"
                    id="navbar">
                    <ul className="flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
        </nav>
    )
}

export default Navbar