import { motion } from "framer-motion";

import bgImage from "../../assets/breadcrumb background imager/service page bread crumb background image.webp";

import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ServiceHeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND IMAGE */}

      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Service Background"
          className="h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ANIMATED GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 80, -40, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-120px]
          top-[-120px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[rgba(1,101,63,0.25)]
          blur-[120px]
        "
      />

      {/* SECOND GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -80, 50, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-120px]
          right-[-100px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-[rgba(255,255,255,0.10)]
          blur-[120px]
        "
      />

      {/* CONTENT */}

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-[1450px] items-center px-4 py-28 sm:px-6 lg:px-14">
        <div className="max-w-4xl">
          {/* BREADCRUMB */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-3
              text-sm
              font-medium
              text-white
              backdrop-blur-md
            "
          >
            <Link to="/">
              <span className="cursor-pointer transition hover:text-white/80">
                Home
              </span>
            </Link>

            <FiChevronRight className="text-sm" />

            <span className="text-white/70">Services</span>
            <FiChevronRight className="text-sm" />
            <span className="text-white/70">Overview</span>
          </motion.div>

          {/* HEADING */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.9,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-8
              text-2xl
              font-black
              leading-tight
              tracking-[-0px]
              text-white
              sm:text-5xl
              md:text-5xl
              xl:text-5xl
            "
          >
            Affordable Interior Design Services in Bhubaneswar
          </motion.h1>

          {/* SUBTEXT */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-7
              max-w-3xl
              text-base
              leading-8
              text-white/85
              sm:text-lg
              sm:leading-9
            "
          >
            Budget-Friendly Interior Design Solutions That Balance Style,
            Comfort & Practical Living
          </motion.h2>

          {/* BUTTONS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-10
              flex
              flex-col
              gap-5
              sm:flex-row
            "
          >
            {/* BUTTON 1 */}
            <Link to="/projects">
              <motion.a
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                href="#"
                className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[rgba(1,101,63,1)]
                px-8
                py-4
                text-sm
                font-semibold
                tracking-wide
                text-white
                shadow-[0_15px_40px_rgba(1,101,63,0.35)]
                transition-all
                duration-300
              "
              >
                Explore Projects
              </motion.a>
            </Link>

            {/* BUTTON 2 */}
            <Link to="/contact">
              <motion.a
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="#"
                className="
      group
      relative
      inline-flex
      items-center
      justify-center
      overflow-hidden
      rounded-[22px]
      border
      border-white/20
      bg-white/10
      px-8
      py-4
      text-sm
      font-semibold
      text-white
      backdrop-blur-xl
    "
              >
                {/* HOVER BACKGROUND */}

                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  whileHover={{
                    scale: 8,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="
        absolute
        h-10
        w-10
        rounded-full
        bg-white
      "
                />

                {/* TEXT */}

                <span
                  className="
        relative
        z-10
        transition-all
        duration-500
        group-hover:text-white
      "
                >
                  Get Free Consultation
                </span>

                {/* SMALL DOT */}
              </motion.a>
            </Link>
          </motion.div>

          {/* BOTTOM FLOATING INFO */}
        </div>
      </div>
    </section>
  );
}
