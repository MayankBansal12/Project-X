"use client"

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/supabse";
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
    const router = useRouter();

    // Function to authenticate user using Supabase
    const handleLogin = async () => {
        try {
            const { user, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) {
                // Authentication error
                console.error('Authentication error:', error.message);
                alert("Incorrect Email or Password!")
            } else {
                // Authentication successful, redirect to movies page
                console.log('Authenticated user:', user);
                router.push("/movies", { replace: true });
            }
        } catch (error) {
            alert("Error! Try again!")
            console.error('Unexpected error:', error.message);
        }
    };


    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen gap-4">
                <h1 className="text-white text-2xl mt-8 mb-3">Login</h1>
                <form className="flex flex-col gap-5 w-64">
                    <input
                        type="email"
                        value={email}
                        placeholder="user@gmail.com"
                        className="border-b-2 outline-none px-1 bg-transparent text-md "
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        value={password}
                        placeholder="user123"
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