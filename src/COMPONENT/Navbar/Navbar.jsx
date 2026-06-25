import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Link, useLocation } from "react-router-dom";

import { FiMenu, FiX, FiArrowRight, FiInstagram } from "react-icons/fi";

import { FaFacebookF, FaPinterestP, FaYoutube } from "react-icons/fa";

import { RiTwitterXLine } from "react-icons/ri";

import logo from "../../assets/logo.png";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  /* ================= NAVLINKS ================= */

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "About Us",
      path: "/about-us",
    },

    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Projects",
      path: "/projects",
    },

    {
      name: "Blogs",
      path: "/blogs",
    },

    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const primaryColor = "#01653F";

  /* ================= SOCIAL ICONS ================= */

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/profile.php?id=61587564103214",
    },
    {
      icon: <FiInstagram />,
      link: "https://www.instagram.com/infinityspace.co/",
    },
    {
      icon: <RiTwitterXLine />,
      link: "https://x.com/InfinitySpaceCo",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@InfinitySpaceOfficial",
    },
    {
      icon: <FaPinterestP />,
      link: "https://in.pinterest.com/infinityspaceodisha/",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= BODY LOCK ================= */

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);

  return (
    <>
      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      <header
        className={`
          fixed
          top-0
          left-0
          z-50
          w-full
          border-b
          transition-all
          duration-500
          ${
            scrolled
              ? "border-black/10 bg-white shadow-sm backdrop-blur-xl"
              : "border-black/5 bg-white/95 backdrop-blur-xl"
          }
        `}
      >
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
          <div
            className="
            flex
    h-[70px]
    items-center
    justify-between

    sm:h-[75px]

    lg:h-[100px]
            "
          >
            {/* ================================================= */}
            {/* LOGO */}
            {/* ================================================= */}

            <Link
              to="/"
              className="
                flex
                items-center
              "
            >
              <motion.img
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.3,
                }}
                src={logo}
                alt="Infinity Space"
                className="
                w-[105px]
  object-contain
  sm:w-[130px]
  lg:w-[135px]
                "
              />
            </Link>

            {/* ================================================= */}
            {/* DESKTOP NAV */}
            {/* ================================================= */}

            <nav
              className="
                hidden
                items-center
                gap-2
                lg:flex
              "
            >
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={index}
                    to={link.path}
                    className={`
                      relative
                      rounded-full
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-green-50 text-green-700"
                          : "text-gray-700 hover:bg-black/[0.04]"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* ================================================= */}
            {/* DESKTOP SOCIAL ICONS */}
            {/* ================================================= */}

            <div
              className="
    hidden
    items-center
    gap-3
    lg:flex
  "
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                    rotate: 5,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
        flex
        h-11
        w-11
        items-center
        justify-center

        rounded-full

        border
        border-green-100

        bg-white

        text-[#01653F]

        shadow-[0_8px_20px_rgba(0,0,0,0.06)]

        transition-all
        duration-300

        hover:border-[#01653F]
        hover:bg-[#01653F]
        hover:text-white

        hover:shadow-[0_15px_35px_rgba(1,101,63,0.25)]
      "
                >
                  <span className="text-[18px]">{social.icon}</span>
                </motion.a>
              ))}
            </div>

            {/* ================================================= */}
            {/* MOBILE MENU BUTTON */}
            {/* ================================================= */}

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                border
                border-black/10
                bg-[#f8f8f8]
                text-black
                shadow-sm
                transition-all
                duration-300

                active:scale-95

                lg:hidden
              "
            >
              {mobileMenu ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ================================================= */}
      {/* MOBILE MENU */}
      {/* ================================================= */}

      <AnimatePresence>
        {mobileMenu && (
          <>
            {/* BACKDROP */}

            <motion.div
              onClick={() => setMobileMenu(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
          fixed
          inset-0
          z-40
          bg-black/30
          backdrop-blur-sm
          lg:hidden
        "
            />

            {/* RIGHT DRAWER */}

            <motion.div
              initial={{ x: 350 }}
              animate={{ x: 0 }}
              exit={{ x: 350 }}
              transition={{
                duration: 0.25,
              }}
              className="
          fixed
          right-0
          top-[70px]

          z-50

          h-[calc(100vh-70px)]

          w-[85%]
          max-w-[340px]

          overflow-y-auto

          border-l
          border-black/5

          bg-white

          shadow-[0_20px_60px_rgba(0,0,0,0.12)]

          lg:hidden
        "
            >
              {/* NAVIGATION */}

              <div className="p-5">
                <div className="space-y-3">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;

                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setMobileMenu(false)}
                        className={`
                    flex
                    items-center
                    justify-between

                    rounded-2xl

                    px-3
                    py-3

                    font-small

                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-green-50 text-green-700 border border-green-100"
                        : "bg-[#f8f8f8] text-gray-700 border border-transparent"
                    }
                  `}
                      >
                        {link.name}

                        <FiArrowRight />
                      </Link>
                    );
                  })}
                </div>

                {/* SOCIAL ICONS */}

                <div
                  className="
              mt-8

              flex
              justify-center

              gap-3

              flex-wrap
            "
                >
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="
                  flex
                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-green-100

                  bg-white

                  text-[#01653F]

                  shadow-sm

                  transition-all
                  duration-300

                  hover:bg-[#01653F]
                  hover:text-white
                "
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
