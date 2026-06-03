import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

export default function Footer() {
  const socialLinks = [
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/people/Infinity-Space/61587564103214/",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/infinityspace.co/",
    },
    {
      icon: FaXTwitter,
      link: "https://x.com/InfinitySpaceCo",
    },
    {
      icon: FaYoutube,
      link: "https://www.youtube.com/@InfinitySpaceOfficial",
    },
    {
      icon: FaPinterestP,
      link: "https://in.pinterest.com/infinityspaceodisha/",
    },
  ];
  return (
    <footer className="relative mt-24 overflow-hidden bg-[rgba(1,101,63,1)] text-white">
      {/* TOP CURVE */}
      <div
        className="
          absolute
          -top-24
          left-0
          h-32
          w-full
          rounded-b-[100px]
          bg-white
        "
      />

      {/* GLOW EFFECTS */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          bg-white/10
          blur-[150px]
        "
      />

      <div
        className="
          absolute
          left-[-100px]
          top-20
          h-[250px]
          w-[250px]
          rounded-full
          bg-white/10
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-[-100px]
          h-[250px]
          w-[250px]
          rounded-full
          bg-white/10
          blur-[120px]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div
          className="
            grid
            gap-10

            sm:gap-12

            md:grid-cols-2

            xl:grid-cols-4
          "
        >
          {/* LOGO SECTION */}
          <div>
            <div
              className="
                inline-flex
                rounded-3xl
                bg-white
                p-4
                shadow-[0_0_60px_rgba(255,255,255,0.2)]
              "
            >
              <img
                src={logo}
                alt="Logo"
                className="
                  h-20
                  w-auto
                  object-contain

                  sm:h-24
                  md:h-28
                "
              />
            </div>

            <p
              className="
                mt-6
                max-w-full
                text-sm
                leading-7
                text-white/80

                lg:max-w-xs
              "
            >
              Premium interior design solutions with luxury aesthetics,
              functional layouts, modern living spaces and personalized
              experiences crafted for modern families.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xl font-bold tracking-wide">Quick Links</h4>

            <ul className="mt-5 space-y-3 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Blogs", path: "/blogs" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="
                      text-white/80
                      transition-all
                      duration-300
                      hover:pl-2
                      hover:text-white
                    "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OFFICE */}
          <div>
            <h4 className="text-xl font-bold tracking-wide">Office</h4>

            <div className="mt-5 space-y-3 text-sm text-white/80">
              <p>Barabhuja market complex, FA 1/63, Khandagiri, </p>

              <p>Bhubaneswar,Odisha 751003</p>

              <p>infinityspaceodisha@gmail.com</p>

              <p>
                +91 7077797720 | 7077797703
                <br />
                7077797729
              </p>
            </div>
          </div>

          {/* MAP + SOCIAL */}
          <div>
            <h4 className="text-xl font-bold tracking-wide">Find Us</h4>

            {/* MAP */}
            <div
              className="
                mt-5
                overflow-hidden
                rounded-2xl
                border
                border-white/20
                shadow-lg
              "
            >
              <iframe
                title="Company Location"
                src="https://www.google.com/maps?q=Bhubaneswar,Odisha&output=embed"
                loading="lazy"
                allowFullScreen
                className="
                  h-[180px]
                  w-full

                  sm:h-[200px]

                  md:h-[220px]

                  lg:h-[200px]
                "
              />
            </div>

            {/* SOCIAL ICONS */}
            <div
              className="
    mt-5
    flex
    flex-wrap
    items-center
    gap-3
  "
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
          flex
          h-9
          w-9

          sm:h-10
          sm:w-10

          items-center
          justify-center
          rounded-full
          bg-white
          text-[rgba(1,101,63,1)]

          shadow-md

          transition-all
          duration-300

          hover:-translate-y-1
          hover:scale-105
        "
                  >
                    <Icon className="text-sm sm:text-base" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-14 border-t border-white/20 pt-8">
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-5

              lg:flex-row
            "
          >
            <p className="text-center text-sm text-white/70">
              © {new Date().getFullYear()} Your Company Name. All Rights
              Reserved.
            </p>

            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-3
                text-sm
                text-white/70
              "
            >
              <Link
                to="/privacypolicy"
                className="transition hover:text-green-400"
              >
                Privacy Policy
              </Link>

              <span className="text-white/30">|</span>

              <Link to="/terms" className="transition hover:text-green-400">
                Terms & Conditions
              </Link>
            </div>

            <p className="text-center text-sm text-white/70">
              Designed & Developed By{" "}
              <a
                href="https://growwyldtech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-gradient-to-r
                  from-green-400
                  to-emerald-500
                  bg-clip-text
                  font-semibold
                  text-transparent
                  transition-opacity
                  duration-300
                  hover:opacity-80
                "
              >
                Growwyld
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
