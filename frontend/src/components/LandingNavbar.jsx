import React from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "#Explore" },
  { name: "Product", href: "#Product" },
  { name: "Developer", href: "#Developer" },
];

export const LandingNavbar = () => {
  return (
    <nav>
      <div className="container  mx-auto px-4 flex items-center justify-between py-4">
        <div>
            <a className="font-semibold text-5xl">LearnLytics</a>
        </div>
        <div className="p-6 space-x-8 font-semibold text-3xl">
          {navItems.map((item, key) => (
            <a key={key} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="mx-20 p-6 space-x-6 font-semibold text-lg">
          <a className=" bg-white px-8 py-2 rounded-lg" href="/Signin">Sign in</a>
          <a className="text-white bg-[#1E1E1E] px-8 py-2 rounded-lg"  href="/Signup">Sign up</a>
        </div>
      </div>
    </nav>
  );
};
