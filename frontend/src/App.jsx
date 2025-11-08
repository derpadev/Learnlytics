import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import React from "react";
import "./style.css";
import { Feature } from "./pages/Feature";
import { About } from "./pages/About";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Dashboard } from "./pages/Dashboard";
import { Landing } from "./pages/Landing";
import { Navbar } from "./components/Navbar";

console.log(import.meta.env.VITE_SUPABASE_URL);

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isLanding = location.pathname === "/";

  useEffect(() => {
    // 1. check if someone is logged in
    supabase.auth
      .getUser()
      .then(({ data: { user } }) => setUser(user))
      .finally(() => setLoading(false));

    // 2. listen for login/logout
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {!isLanding && <Navbar/>}
      <Routes>
        {/* Public Routes */}
        <Route index element={<Landing />} />
        <Route
          path="/Signup"
          element={!user ? <Signup /> : <Navigate to="/Dashboard" />}
        />
        <Route
          path="/Signin"
          element={!user ? <Signin /> : <Navigate to="/Dashboard" />}
        />

        {/* Protected Routes */}
        <Route
          path="/Dashboard"
          element={user ? <Dashboard /> : <Navigate to="/Signin" />}
        />
        <Route path="/Home" element={<Home />} />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/About" element={<About />} />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
