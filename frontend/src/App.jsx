import { useState } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import { WavyBackground } from "./components/ui/WaveBackground";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <WavyBackground>
        <div className="p-4 h-screen flex items-center justify-center">
          <Routes>
            <Route
              path="/"
              element={authUser ? <Home /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/login"
              element={authUser ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/signup"
              element={authUser ? <Navigate to="/" /> : <SignUp />}
            />
          </Routes>
          <Toaster />
        </div>
      </WavyBackground>
    </>
  );
}

export default App;
