import { Navbar } from "../components/NavBar";
import { useEffect, useState } from "react";
import React from "react";
// import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {

    const [message, setMessage] = useState("");
    
    useEffect(() => {
        fetch("http://localhost:5000/").then((res) => res.text()).then((data) => setMessage(data));
    }, []);

  return (
    <div>
      {/* Theme Toggle */}
      {/* Background Effects*/}
      {/* Nav Bar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <h1> Learnlytics </h1>
        <p>{message}</p>
      </main>

      {/* Footer */}
    </div>
  );
};
