import React from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Feature", href: "/Feature" },
  { name: "About", href: "/About" }
];

export const Navbar = () => {
  return (
    <nav className="">
      <div className=" container  mx-auto px-4 flex items-center justify-between py-4">
        <div className="">
            <a className="font-semibold text-5xl">LearnLytics</a>
        </div>
        <div className="p-6 space-x-8 font-semibold text-3xl">
          {navItems.map((item, key) => (
            <a key={key} href={item.href} className="">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
