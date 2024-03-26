import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BandPage from "./pages/bandpage";
import ProjectsPage from "./pages/mainpage";
import Navbar from "./components/NavBar";
import BookingPage from "./pages/bookingpage";

const App: React.FC = () => {
    return (
        <Router basename="/Band-aid/">
            <Navbar />
            <Routes>
                <Route path="/mainpage" element={<ProjectsPage />} />
                <Route path="/bandpage" element={<BandPage />} />
                <Route path="/bookingpage" element={<BookingPage />} />
            </Routes>
        </Router>
    );
}
export default App;