import React, { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/Home" },
  { name: "Feature", href: "/Feature" },
  { name: "About", href: "/About" },
  { name: "Dashboard", href: "/Dashboard" },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const handleSignout = async () => {
    await supabase.auth.signOut();
    navigate("/", { replace: true });
  };

  return (
    <nav className="">
      <div className=" container mx-auto px-4 flex items-center justify-between py-4 font-semibold">
        <div className="">
          <a className="text-5xl">LearnLytics</a>
        </div>
        <div className="p-6 space-x-8 text-3xl">
          {navItems.map((item, key) => (
            <a key={key} href={item.href} className="">
              {item.name}
            </a>
          ))}
        </div>
        <button
          onClick={handleSignout}
          className="bg-white px-8 py-2 rounded-lg hover:bg-gray-500 hover:scale-105 active:scale-95"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
};
