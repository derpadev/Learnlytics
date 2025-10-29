import React from "react";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

export const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault() //prevent browser from refreshing
    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      setError(error.message)
    }
    else {
      console.log("Logged in:", data)
      navigate("/Dashboard")
    }
  }

  return (
    <div>
      <main className="flex items-center justify-center w-screen h-screen">
        <div className="w-[509px] h-[617px] bg-[#F0F7FF] rounded-xl flex flex-col items-center shadow-lg">
          <h1 className="font-semibold text-4xl m-10">Sign In</h1>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                id="email"
                name="email"
                required
                className="bg-[#F5F5F5] border w-[343px] h-[66px] rounded pl-4"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="bg-[#F5F5F5] border w-[343px] h-[66px] rounded pl-4"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="border bg-[#46B8FF] w-[343px] h-[66px] rounded hover:scale-105 active:scale-95 hover:bg-[#009DFF] "
              onClick={handleSignin}
            >
              <span className="text-[#F5F5F5] text-xl">Sign In</span>
            </button>
            {error && <p>{error}</p>}
          </form>
        </div>
      </main>
    </div>
  );
};
