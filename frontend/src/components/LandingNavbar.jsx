import React from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Feature", href: "/Feature" },
  { name: "About", href: "/About" }
];

export const LandingNavbar = () => {
  return (
    <nav className="border border-black">
      <div className="border border-black container  mx-auto px-4 flex items-center justify-between py-4">
        <div className="border border-black">
            <a className="font-semibold text-5xl">LearnLytics</a>
        </div>
        <div className="border border-black p-6 space-x-8 font-semibold text-3xl">
          {navItems.map((item, key) => (
            <a key={key} href={item.href} className="">
              {item.name}
            </a>
          ))}
        </div>
        <div className="border border-black mx-20 p-6 space-x-6 font-semibold text-lg">
          <button className=" bg-white px-8 py-2 rounded-lg">Sign in</button>
          <button className="text-white bg-[#1E1E1E] px-8 py-2 rounded-lg">Sign up</button>
        </div>
      </div>
    </nav>
  );
};
