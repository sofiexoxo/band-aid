import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BandPage from "./pages/bandpage";
import ProjectsPage from "./pages/mainpage";
import Navbar from "./components/NavBar";
import BookingPage from "./pages/bookingpage";
import Login from "./pages/login";
import Register from "./pages/register";

const App: React.FC = () => {
    return (
        <Router basename="/Band-aid/">
            <Navbar />
            <Routes>
                <Route path="/" element={<ProjectsPage />} />
                <Route path="/bandpage" element={<BandPage />} />
                <Route path="/bookingpage" element={<BookingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}
export default App;