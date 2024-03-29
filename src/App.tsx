import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import BandPage from "./pages/bandpage";
import ProjectsPage from "./pages/mainpage";
import NavBar from "./components/NavBar";
import BookingPage from "./pages/bookingpage";
import Login from "./pages/login";
import Register from "./pages/register";

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Controleer of de gebruiker is ingelogd bij het laden van de applicatie
        const checkLoginStatus = () => {
            const isLoggedInCookie = document.cookie.split(";").some((item) => item.trim().startsWith("isLoggedIn=true"));
            setIsLoggedIn(isLoggedInCookie);
        };

        checkLoginStatus();
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
        // Sla gebruikersinformatie op in een cookie
        document.cookie = "isLoggedIn=true; path=/";
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
        // Verwijder het cookie
        document.cookie = "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    return (
        <Router basename="/Band-aid/">
            <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<ProjectsPage />} />
                <Route path="/bandpage" element={<BandPage />} />
                <Route
                    path="/bookingpage"
                    element={isLoggedIn ? <BookingPage /> : <Navigate to="/login" />}
                />
                <Route
                    path="/login"
                    element={<Login onLogin={handleLogin} />}
                />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
