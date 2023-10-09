"use client"

import Link from "next/link";
import { useState } from "react";

// Font Awesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'


const Header = ({ showLogin }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    // Toggle Nav Menu button for smaller screen
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <nav className="container relative mx-auto p-5">
            <div className="flex items-center justify-between gap-x-3 bg-bgcolor rounded-full border-dashed border-stone-300 border-2 px-5 py-2">
                <Link href="/" className="text-xl">
                    <FontAwesomeIcon icon={faCompactDisc} className="text-blue-500" /> Cine-X
                </Link>
                <div className="space-x-5 hidden md:flex">
                    <Link href="/movies" className="hover:text-blue-600 transition-all">
                        Movies
                    </Link>
                    <Link href="/shows" className="hover:text-blue-600 transition-all">
                        Shows
                    </Link>
                </div>

                {/* In case user is not logged in, show login button (*Not the best approach) */}
                {showLogin && <div className="hidden space-x-3 md:flex">
                    <Link
                        href="/auth/login"
                        className="px-8 p-2 baseline rounded-full border-2 border-transparent bg-blue-600 hover:bg-blue-700 transition-all"
                    >
                        Login
                    </Link>
                </div>}
                <button
                    type="button"
                    onClick={toggleMenu}
                    className={`text-2xl md:hidden transition-all ${menuVisible ? "-rotate-45" : ""}`}
                >
                    &lt;--
                </button>
            </div>

            {/* Nav Menu (for smaller screens) */}
            <div
                className={`md:hidden ${menuVisible ? "flex" : "hidden"
                    } flex-col bg-bgColor items-center text-center self-center transition-all mt-10 py-5 space-y-5`}
            >
                <Link href="/movies" className="hover:text-blue-600 transition-all">
                    Movies
                </Link>
                <Link href="/shows" className="hover:text-blue-600 transition-all">
                    Shows
                </Link>

                {/* Login button in header for unauthenicated user */}
                {showLogin && <Link
                    href="/auth/login"
                    className="px-8 p-2 baseline rounded-full border-2 border-transparent text-secondColor bg-blue-600 hover:bg-blue-700 transition-all"
                >
                    Login
                </Link>}
            </div>
        </nav>
    );
};

export default Header;
