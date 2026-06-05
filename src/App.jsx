import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./COMPONENT/Navbar/Navbar";
import HomePage from "./COMPONENT/HomePage/HomePage";
import AboutPage from "./COMPONENT/About/About";
import ServicePage from "./COMPONENT/Service/Service";
import ScrollToTop from "./COMPONENT/ScrollTop";
import FloatingContactButtons from "./COMPONENT/Button";
import TermsConditions from "./COMPONENT/TermsCondition/TermsCondition";
import PrivacyPolicy from "./COMPONENT/PrivacyPolicy/PrivacyPolicy";
import BlogPage from "./COMPONENT/BlogPage/BlogPage";
import ProjectsPage from "./COMPONENT/Projects/Projects";
import ContactSection from "./COMPONENT/Contactus/ContactUs";
import Footer from "./COMPONENT/Footer/Footer";
import { Suspense } from "react";

function App() {
  return (
    <>
      <ScrollToTop />
      <FloatingContactButtons />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;

C:\Infinity Space\src\App.jsx
