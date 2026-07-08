import { motion } from "framer-motion";

<<<<<<< HEAD
import bgImage from "../../../public/images/blogbanner.avif";

import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function BlogHeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="About Background"
          loading="lazy"
          className="h-full w-full object-cover"
          loading="lazy"
        />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 80, -40, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 14,
=======
import bgImage from "../../assets/breadcrumb background imager/about page bread crumb background image.webp";

export default function BlogHeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Blog Background"
          loading="lazy"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 6,
>>>>>>> 17e1716b10508daff9bbef293e492d074337b95c
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
<<<<<<< HEAD
          left-[-120px]
          top-[-120px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[rgba(1,101,63,0.25)]
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

            <span className="text-white/70">Blogs</span>
          </motion.div>

          {/* TITLE */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.8,
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
              sm:text-3xl
              md:text-4xl
              xl:text-5xl
            "
          >
            Blogs Infinity Space
          </motion.h1>

          {/* SUBTITLE */}
          <Link to="/">
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
              mt-6
              max-w-3xl
              text-sm
              font-bold
              leading-9
              text-white/90
              sm:text-xl
              md:text-2xl
            "
            >
              Creating Spaces That Feel Personal, Practical & Timeless
            </motion.h2>
          </Link>

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
    mt-12
    flex
    flex-col
    gap-5
    sm:flex-row
    sm:flex-wrap
  "
          >
            <Link to="/projects">
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
      px-[2px]
      py-[2px]
    "
              >
                {/* ANIMATED BORDER */}

                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
        absolute
        inset-[-150%]
        bg-conic-gradient
        from-[rgba(1,101,63,1)]
        via-green-400
        to-[rgba(1,101,63,1)]
      "
                />

                {/* BUTTON INNER */}

                <div
                  className="
        relative
        flex
        items-center
        gap-3
        overflow-hidden
        rounded-[20px]
        bg-[rgba(1,101,63,1)]
        px-8
        py-4
        text-sm
        font-semibold
        tracking-wide
        text-white
        shadow-[0_20px_45px_rgba(1,101,63,0.35)]
      "
                >
                  {/* GLOW */}

                  <div
                    className="
          absolute
          inset-0
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
                  >
                    <div className="absolute left-[-30%] top-[-50%] h-40 w-40 rounded-full bg-white/20 blur-3xl" />
                  </div>

                  {/* SHINE */}

                  <span
                    className="
          absolute
          left-[-120%]
          top-0
          h-full
          w-20
          rotate-12
          bg-white/20
          blur-xl
          transition-all
          duration-1000

          group-hover:left-[120%]
        "
                  />

                  <span className="relative z-10">Explore Projects</span>
                </div>
              </motion.a>
            </Link>
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
        </div>
=======
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#01653F]/30
          blur-[160px]
        "
      />

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        {/* Premium Loader */}
        <div className="mb-12 flex justify-center">
          <div className="relative flex items-center justify-center">
            {/* Outer Ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                h-24
                w-24
                rounded-full
                border-[3px]
                border-white/10
                border-t-[#01653F]
              "
            />

            {/* Inner Ring */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-14
                w-14
                rounded-full
                border-[3px]
                border-white/10
                border-b-green-400
              "
            />

            {/* Center Dot */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                absolute
                h-3
                w-3
                rounded-full
                bg-green-400
                shadow-[0_0_20px_rgba(74,222,128,0.8)]
              "
            />
          </div>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-5xl
            font-black
            text-white

            sm:text-6xl
            lg:text-7xl
          "
        >
          Blogs Coming Soon
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-white/80

            sm:text-xl
          "
        >
          We're preparing inspiring interior design articles, trends, expert
          tips, project showcases, and modern space-planning ideas for your
          dream interiors.
        </motion.p>

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
          }}
          className="
            mt-10
            inline-flex
            items-center
            rounded-full
            border
            border-white/20
            bg-white/10
            px-8
            py-3
            text-sm
            font-semibold
            uppercase
            tracking-[4px]
            text-white
            backdrop-blur-md
          "
        >
          Coming Soon
        </motion.div>

        {/* Loading Text */}
        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            mt-6
            text-sm
            uppercase
            tracking-[5px]
            text-green-300
          "
        >
          Loading Amazing Content...
        </motion.p>
>>>>>>> 17e1716b10508daff9bbef293e492d074337b95c
      </div>
    </section>
  );
}
