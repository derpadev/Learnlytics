import React from "react";
import { Navbar } from "../components/Navbar";

export const Signup = () => {
  return (
    <div>
      <Navbar />
      <main className="flex items-center justify-center w-screen h-screen">
        <div className="w-[509px] h-[617px] bg-[#F0F7FF] rounded-xl flex flex-col items-center shadow-lg">
          <h1 className="font-semibold text-4xl m-10">Sign Up</h1>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="bg-[#F5F5F5] border w-[343px] h-[66px] rounded pl-4"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="text"
                id="email"
                name="email"
                required
                className="bg-[#F5F5F5] border w-[343px] h-[66px] rounded pl-4"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="text"
                id="password"
                name="password"
                required
                className="bg-[#F5F5F5] border w-[343px] h-[66px] rounded pl-4"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="border bg-[#46B8FF] w-[343px] h-[66px] rounded"
            >
              <span className="text-[#F5F5F5] text-xl">Sign Up</span>
            </button>
          </form>
          <p className="mt-2">
            Already have an account?{" "}
            <a href="/Signin" className="text-[#46B8FF]">
              Log In
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};
