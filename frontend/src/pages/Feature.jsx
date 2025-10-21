import React from "react"
import { Navbar } from "../components/Navbar";

export const Feature = () => {
    return (
        <div>
            {/* Nav Bar */}
            <Navbar />
            {/* Main Content */}
            <main className="flex items-center justify-center text-9xl">
                <h1>Feature</h1>
            </main>
        </div>
        );
};