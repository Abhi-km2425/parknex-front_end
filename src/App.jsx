import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import AuthForm from "./pages/AuthForm";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import ParkingPage from "./pages/ParkingPage";
import BookingHistoryPage from "./pages/BookingHistoryPage";
import AboutPage from "./pages/AboutPage";
import AdminHome from "./admin/pages/AdminHome";
import BookingManagement from "./admin/pages/BookingManagement";
import ParkingManagement from "./admin/pages/ParkingManagement";
import ContactPage from "./pages/ContactPage";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, []);

  return (
    <>
      <Routes>
        {/* user side */}
        <Route path="/" element={isLoading ? <LandingPage /> : <Preloader />} />
        <Route path="/parking" element={<ParkingPage />} />
        <Route path="/booking" element={<BookingHistoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/authform" element={<AuthForm />} />
        <Route path="/contact" element={<ContactPage/>}/>
        {/* admin side */}
        <Route path="/admin-home" element={<AdminHome/>}/>
        <Route path="/admin-booking" element={<BookingManagement/>}/>
        <Route path="/admin-parking" element={<ParkingManagement />}/>
      </Routes>
    </>
  );
}

export default App;
