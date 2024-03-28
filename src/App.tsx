import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import BandPage from "./pages/bandpage";
import ProjectsPage from "./pages/mainpage";
import NavBar from "./components/NavBar";
import BookingPage from "./pages/bookingpage";
import Login from "./pages/login";
import Register from "./pages/register";

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <Router basename="/Band-aid/">
            <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<ProjectsPage />} />
                <Route path="/bandpage" element={<BandPage />} />
                <Route path="/bookingpage" element={isLoggedIn ? <BookingPage /> : <Navigate to="/login" />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
