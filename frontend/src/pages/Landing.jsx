import { LandingNavbar } from "../components/LandingNavbar";
import React from "react";

export const Landing = () => {
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

        <div>
          <section
            id="Explore"
            className="border relative min-h-screen flex flex-col items-center justify-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Explore
            </h1>
          </section>
        </div>
        <div>
          <section
            id="Product"
            className="border relative min-h-screen flex flex-col items-center justify-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Product
            </h1>
          </section>
        </div>
        <div>
          <section
            id="Developer"
            className="border relative min-h-screen flex flex-col items-center justify-center px-4"
          >
            <div className="max-w-4xl mx-auto text-center z-10">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Devin Hua
                </h1>

                <p className="text-lg md:text-xl max-2-2xl mx-auto">
                  UC Irvine senior passionate about computers, programming, and
                  education. Beyond the classroom, I enjoy exploring new cafes
                  and teaching coding, math, and even flag football!
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
};
