"use client"

import Link from "next/link";
import { useState } from "react";
import Footer from "./Footer";
// import Noty from "noty";
// import 'noty/lib/noty.css';
// import "noty/lib/themes/semanticui.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Noty js notification
    // const successNoty = new Noty({
    //     text: "Login Successful!",
    //     type: "success",
    //     theme: "semanticui",
    //     timeout: 3000,
    // });
    // const errorNoty = new Noty({
    //     text: "Incorrect email or password!",
    //     type: "error",
    //     theme: "semanticui",
    //     timeout: 3000,
    // });

    const handleLogin = async () => {

    };

    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen gap-4">
                <h1 className="text-white text-2xl mt-8 mb-3">Login</h1>
                <form className="flex flex-col gap-5 w-64">
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter your email"
                        className="border-b-2 outline-none px-1 bg-transparent text-md "
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter your password here"
                        className="border-b-2 outline-none px-1 bg-transparent text-md"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button" onClick={handleLogin} className="px-8 p-2 baseline rounded-full border-2 border-transparent bg-blue-600 hover:bg-blue-700 mt-4 transition-all">Login</button>
                </form>
                <div className="links">
                    <p>
                        Don't have an account? <Link href="/auth/signup" className="text-blue-500 hover:text-blue-600 transition-all">Sign up</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;