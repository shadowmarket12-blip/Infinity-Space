import React, { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./COMPONENT/Navbar/Navbar";
import ScrollToTop from "./COMPONENT/ScrollTop";
import FloatingContactButtons from "./COMPONENT/Button";
import Footer from "./COMPONENT/Footer/Footer";
import ScrollToHash from "./Scrolltohash";
import Loading from "../Loading";
<<<<<<< HEAD
const ResidentialPage = lazy(
  () => import("./COMPONENT/DropdownServices/ResidentialPage"),
);

const BlogDetailPage = lazy(
  () => import("./COMPONENT/BlogPage/BlogDetailPage"),
);
=======

>>>>>>> 17e1716b10508daff9bbef293e492d074337b95c
const HomePage = lazy(() => import("./COMPONENT/HomePage/HomePage"));
const AboutPage = lazy(() => import("./COMPONENT/About/About"));
const ServicePage = lazy(() => import("./COMPONENT/Service/Service"));
const BlogPage = lazy(() => import("./COMPONENT/BlogPage/BlogPage"));
const ProjectsPage = lazy(() => import("./COMPONENT/Projects/Projects"));
const ContactSection = lazy(() => import("./COMPONENT/Contactus/ContactUs"));
const TermsConditions = lazy(
  () => import("./COMPONENT/TermsCondition/TermsCondition"),
);
const PrivacyPolicy = lazy(
  () => import("./COMPONENT/PrivacyPolicy/PrivacyPolicy"),
);

function App() {
<<<<<<< HEAD
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1800);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }
=======
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
>>>>>>> 17e1716b10508daff9bbef293e492d074337b95c

  return (
    <>
      <ScrollToTop />
      <FloatingContactButtons />
      <Navbar />

<<<<<<< HEAD
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/services/overview" element={<ServicePage />} />
        <Route
          path="/services/residential-interior-design"
          element={<ResidentialPage />}
        />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
      {/* <Suspense fallback={<Loading />}></Suspense> */}
=======
      <Suspense fallback={<Loading />}>
        <ScrollToHash />
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
>>>>>>> 17e1716b10508daff9bbef293e492d074337b95c

      <Footer />
    </>
  );
}

export default App;
