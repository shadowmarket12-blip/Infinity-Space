import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

/* ================= IMAGES ================= */

import img1 from "../../assets/service1.jpg";
import img2 from "../../assets/service1.jpg";
import img3 from "../../assets/service1.jpg";
import img4 from "../../assets/service1.jpg";
import img5 from "../../assets/service1.jpg";

/* ================= DATA ================= */

const services = [
  {
    image: img1,
    title: "Residential Interior Design",
    description:
      "Thoughtfully planned home interiors for apartments, villas, duplexes, and independent houses.",
    bg: "bg-[#F4F8F5]",
  },

  {
    image: img2,
    title: "Modular Kitchen Design",
    description:
      "Modern modular kitchens designed for smart storage, functionality, and seamless everyday usability.",
    bg: "bg-[#F8F6F1]",
  },

  {
    image: img3,
    title: "Commercial Interior Design",
    description:
      "Professional office interiors, retail spaces, clinics, and workspace solutions designed for productivity and visual appeal.",
    bg: "bg-[#F4F7FB]",
  },

  {
    image: img4,
    title: "Customized Furniture Solutions",
    description:
      "Wardrobes, TV units, storage concepts, and personalized furniture solutions designed according to your space requirements.",
    bg: "bg-[#FAF4F4]",
  },

  {
    image: img5,
    title: "Turnkey Interior Solutions",
    description:
      "Complete planning, execution, installation, and finishing services managed under one roof.",
    bg: "bg-[#F5F4FA]",
  },
];

export default function InteriorExpertiseSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-20">
      {/* ===================================== */}
      {/* BACKGROUND */}
      {/* ===================================== */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[320px] w-[320px] rounded-full bg-green-100 blur-[120px] opacity-40" />

        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-emerald-100 blur-[120px] opacity-40" />
      </div>

      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ===================================== */}
      {/* CONTENT */}
      {/* ===================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* ===================================== */}
        {/* HEADER */}
        {/* ===================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-black/10
              bg-white
              px-5
              py-2.5
              text-sm
              font-semibold
              text-green-700
              shadow-md
            "
          >
            Our Expertise
          </div>

          <h2
            className="
              mt-7
              text-4xl
              font-black
              leading-tight
              text-black
              sm:text-5xl
              lg:text-6xl
            "
          >
            Our Interior Design Expertise
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-base
              leading-8
              text-gray-600
              sm:text-lg
            "
          >
            Premium residential and commercial interior solutions crafted with
            functionality, elegance, and modern luxury aesthetics.
          </p>
        </motion.div>

        {/* ===================================== */}
        {/* SERVICES */}
        {/* ===================================== */}

        <div className="mt-20 space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 90,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.25, 1, 0.5, 1],
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              whileHover={{
                y: -6,
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-[42px]
                border
                border-black/10
                shadow-[0_25px_80px_rgba(0,0,0,0.07)]
                transition-all
                duration-500
                ${service.bg}
              `}
            >
              {/* BLACK BORDER DESIGN */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[12px]
                  rounded-[34px]
                  border
                  border-black/10
                "
              />

              {/* HOVER DARK GRADIENT */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-black/[0.02]
                  via-transparent
                  to-black/[0.03]
                "
              />

              {/* GLOW */}

              <div
                className="
                  absolute
                  -right-20
                  top-0
                  h-[220px]
                  w-[220px]
                  rounded-full
                  bg-green-200/30
                  blur-[100px]
                  opacity-0
                  transition-all
                  duration-700
                  group-hover:opacity-100
                "
              />

              {/* CONTENT */}

              <div
                className={`
                  grid
                  items-center
                  lg:grid-cols-2
                  ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
                `}
              >
                {/* ===================================== */}
                {/* IMAGE */}
                {/* ===================================== */}

                <div className="relative p-4 sm:p-5">
                  <div
                    className="
                      overflow-hidden
                      rounded-[34px]
                      border
                      border-black/10
                    "
                  >
                    <motion.img
                      whileHover={{
                        scale: 1.05,
                      }}
                      transition={{
                        duration: 0.6,
                      }}
                      src={service.image}
                      alt={service.title}
                      className="
                        h-[320px]
                        w-full
                        object-cover
                        sm:h-[420px]
                        lg:h-[480px]
                      "
                    />
                  </div>

                  {/* IMAGE SHADOW */}

                  <div
                    className="
                      absolute
                      bottom-5
                      left-10
                      h-20
                      w-20
                      rounded-full
                      bg-black/10
                      blur-[50px]
                    "
                  />
                </div>

                {/* ===================================== */}
                {/* TEXT */}
                {/* ===================================== */}

                <div className="relative p-8 sm:p-12 lg:p-16">
                  {/* MINI BADGE */}

                  <div
                    className="
                      inline-flex
                      items-center
                      rounded-full
                      border
                      border-black/10
                      bg-white/80
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[2px]
                      text-black/70
                      backdrop-blur-xl
                    "
                  >
                    Interior Solution
                  </div>

                  {/* TITLE */}

                  <motion.h3
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
                      mt-7
                      text-3xl
                      font-black
                      leading-tight
                      text-black
                      sm:text-4xl
                    "
                  >
                    {service.title}
                  </motion.h3>

                  {/* DESCRIPTION */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="
                      mt-6
                      max-w-xl
                      text-base
                      leading-8
                      text-gray-600
                    "
                  >
                    {service.description}
                  </motion.p>

                  {/* BUTTON */}

                  <motion.button
                    whileHover={{
                      x: 5,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="
                      group/btn
                      mt-10
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      border
                      border-black
                      bg-black
                      px-7
                      py-4
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-green-700
                      hover:border-green-700
                    "
                  >
                    Learn More
                    <FaArrowRight
                      className="
                        transition-transform
                        duration-300
                        group-hover/btn:translate-x-1
                      "
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
