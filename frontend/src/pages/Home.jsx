import { LandingNavbar } from "../components/LandingNavbar";
import { Navbar } from "../components/Navbar";
import React from "react";

export const Home = () => {

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav Bar */}
      <LandingNavbar />
      {/* Main Content */}
      <main>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
          <div className="text-center">
            <h1 className="text-9xl font-semibold">Track.</h1>
            <h1 className="text-9xl font-semibold">Learn.</h1>
            <h1 className="text-9xl font-semibold">Improve.</h1>
          </div>
          <div className="m-5 font-semibold text-2xl text-center">
            <p>Monitor your performance, identify strengths, and improve</p>
            <p>your learning outcomes - all in one dashboard.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
};
