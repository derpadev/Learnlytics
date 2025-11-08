import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { supabase } from "../../supabaseClient";
import StudentGrades from "./StudentGrades";

export const Dashboard = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
    };

    getSession();
  }, []);

  return (
    <div>
      {/* Main Content */}
      <div className="min-h-screen flex p-4 gap-4">
        {/* Side Card */}
        <div className="w-1/4 border border-gray-200 shadow-sm rounded-lg bg-[#F5F5F5] p-6 hover:bg-gray-200">
          <h5>Card 1</h5>
          {session ? (
            <p>Logged in as: {session.user.email}</p>
          ) : (
            <p>No active session</p>
          )}
        </div>
        {/* Main Card */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="max-w-screen h-1/4 border border-gray-200 shadow-sm rounded-lg bg-[#F5F5F5] p-6 hover:bg-gray-200">
            <h5 className="font-bold text-8xl">Hello <span className="text-blue-500">{session?.user?.user_metadata?.full_name},</span></h5>
            <h5>Your Last Login: {session?.user?.last_sign_in_at ? new Date(session?.user?.last_sign_in_at).toLocaleString() : "N/A"}</h5>
          </div>
          <div className="max-w-screen border border-gray-200 shadow-sm rounded-lg bg-[#F5F5F5] p-6 hover:bg-gray-200">
            <div><StudentGrades/></div>
          </div>
        </div>
      </div>
    </div>
  );
};
