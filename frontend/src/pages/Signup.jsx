import React from "react";
import { Navbar } from "../components/Navbar";
import { supabase } from "../../supabaseClient";
import { useState } from "react";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    // 1. Sign up w supabase auth
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name }
      }
    });

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    // 2. insert users into 'users' table
    const { error: profileError } = await supabase
      .from("users")
      .update({ name, role })
      .eq("id", data.user.id);

    if (profileError) {
      setError(profileError.message);
      return;
    }

    setMessage("Sign-up successful! Please check your email to confirm.");
    setError("");
  };

  return (
    <div>
      <main className="flex items-center justify-center w-screen h-screen">
        <div className="w-[509px] h-[617px] bg-[#F0F7FF] rounded-xl flex flex-col items-center shadow-lg">
          <h1 className="font-semibold text-4xl m-10">Sign Up</h1>
          <form onSubmit={handleSignUp} className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="bg-[#F5F5F5] border w-[343px] h-[66px] rounded pl-4"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="bg-[#F5F5F5] border w-[343px] h-[66px] rounded pl-4"
              >
                <option value={"student"}>Student</option>
                <option value={"teacher"}>Teacher</option>
              </select>
            </div>
            <button
              type="submit"
              className="border bg-[#46B8FF] w-[343px] h-[66px] rounded hover:bg-blue-500"
            >
              <span className="text-[#F5F5F5] text-xl">Sign Up</span>
            </button>
            {error && <p className="text-red-500">{error}</p>}
            {message && <p className="text-green-500">{message}</p>}
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
