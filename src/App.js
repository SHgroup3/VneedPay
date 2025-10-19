import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import MakePayments from "./pages/MakePayments";
import RateAndFee from "./pages/RateAndFee";
import HelpCenter from "./pages/HelpCenter";
import Security from "./pages/security";
import Privacy from "./pages/Privacy";
import Agreement from "./pages/Agrement";
import License from "./pages/lisence";
import AccessibilityStatement from "./pages/accessibility";


export default function App(){
  return (
    <Router>
        {/* Navbar - fixed top */}
      <Navbar />
    <div className="font-sans">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payments" element={<MakePayments />} />
        <Route path="/loans" element={<RateAndFee />}/>
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/security" element={<Security />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/licenses" element={<License />} />
        <Route path="/accessibility" element={<AccessibilityStatement />} />
       </Routes>
            {/* Hero Section */}
             </div>
      
        {/* Footer - fixed bottom or just persistent */}
      <Footer />
        </Router>
       
  )
}


