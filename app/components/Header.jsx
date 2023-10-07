"use client"

import Link from "next/link";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <nav className="container relative mx-auto p-5">
            <div className="flex items-center justify-between gap-x-3 bg-black rounded-full border-solid border-2 px-5 py-2">
                <div className="text-xl">
                    <FontAwesomeIcon icon={faCompactDisc} /> Cine-X
                </div>
                <div className="space-x-5 hidden md:flex">
                    <Link href="/" className="hover:text-blue-500 transition-all">
                        Movies
                    </Link>
                    <Link href="/" className="hover:text-blue-500 transition-all">
                        Shows
                    </Link>
                </div>

                <div className="hidden space-x-3 md:flex">
                    <Link
                        href="/"
                        className="px-8 p-2 baseline rounded-full border-2 border-transparent text-secondColor bg-blue-500 hover:bg-blue-600 transition-all"
                    >
                        Login
                    </Link>
                </div>
                <button
                    type="button"
                    onClick={toggleMenu}
                    className={`text-2xl md:hidden transition-all ${menuVisible ? "-rotate-45" : ""}`}
                >
                    &lt;--
                </button>
            </div>

            <div
                className={`md:hidden ${menuVisible ? "flex" : "hidden"
                    } flex-col bg-zinc-950 items-center text-center self-center transition-all mt-10 py-5 space-y-5`}
            >
                <Link href="/" className="hover:text-blue-500 transition-all">
                    Movies
                </Link>
                <Link href="/" className="hover:text-blue-500 transition-all">
                    Shows
                </Link>
                <Link
                    href="/"
                    className="px-8 p-2 baseline rounded-full border-2 border-transparent text-secondColor bg-blue-500 hover:bg-blue-600 transition-all"
                >
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default Header;
