import { motion } from "framer-motion";
import {
  ArrowRight,
  PhoneCall,
  Eye,
  MapPin,
  Sparkles,
  Play,
  MessageCircle,
} from "lucide-react";

import heroImage from "../../assets/hbanner1.avif";
import heroVideo from "../../assets/v1.mp4";

export default function InteriorHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 text-black sm:py-20 lg:min-h-screen lg:py-0">
      <div className="absolute inset-0 overflow-hidden">
        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>
      </div>

      {/* ===================================================== */}
      {/* MAIN */}
      {/* ===================================================== */}

      <div className="relative z-10 mx-auto flex max-w-7xl items-center px-5 sm:px-6 lg:min-h-screen lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ===================================================== */}
          {/* LEFT CONTENT */}
          {/* ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center lg:text-left"
          >
            {/* BADGE */}

            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[rgba(1,101,63,0.12)]
                bg-[rgba(1,101,63,0.05)]
                px-5
                py-3
                text-xs
                font-semibold
                uppercase
                tracking-[2px]
                text-[rgba(1,101,63,1)]
                backdrop-blur-xl
              "
            >
              <Sparkles size={15} />
              Premium Interior Design Studio
            </motion.div>

            {/* HEADING */}

            <h1
              className="
                mt-7
                text-[24px]
                font-black
                leading-[1.1]
                tracking-[-1px]
                sm:text-[26px]
                lg:text-[48px]
              "
            >
              Interior Designers
              <br />
              <span className="text-[rgba(1,101,63,1)]">Creating Elegant</span>
              <br />
              Spaces in Bhubaneswar
            </h1>

            {/* PARAGRAPH 1 */}

            <p
              className="
                mx-auto
                mt-7
                max-w-2xl
                text-[15px]
                leading-8
                text-black
                sm:text-[16px]
                lg:mx-0
              "
            >
              Infinity Space is a trusted interior design company in
              Bhubaneswar, Odisha offering tailored residential and commercial
              interior solutions that combine aesthetics, comfort, and
              functionality. From modular kitchens and luxury living rooms to
              office interiors, wardrobe designs, TV units, false ceiling
              concepts, and turnkey execution, every space is designed with
              attention to detail and practical usability.
            </p>

            {/* PARAGRAPH 2 */}

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-[15px]
                leading-8
                text-black
                sm:text-[16px]
                lg:mx-0
              "
            >
              Our experienced interior designers in Bhubaneswar focus on smart
              space planning, premium finishes, modern layouts, and organized
              execution to create interiors that reflect your lifestyle and
              everyday needs. We proudly serve homeowners and businesses across
              Bhubaneswar, Cuttack, and Khordha with personalized interior
              solutions designed for contemporary living.
            </p>

            {/* LOCATION */}

            {/* <div className="mt-8 flex justify-center lg:justify-start">
              <motion.div
                whileHover={{
                  y: -3,
                }}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[rgba(1,101,63,0.10)]
                  bg-white
                  px-5
                  py-3
                  text-sm
                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                "
              >
                <MapPin size={18} className="text-[rgba(1,101,63,1)]" />
                Bhubaneswar • Cuttack • Khordha
              </motion.div>
            </div> */}

            {/* BUTTONS */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                items-center
                justify-center
                gap-4
                lg:justify-start
              "
            >
              {/* BUTTON 1 */}

              <motion.a
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="#"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  bg-[rgba(1,101,63,1)]
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[1px]
                  text-white
                  shadow-[0_20px_45px_rgba(1,101,63,0.25)]
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-white/20
                    transition-all
                    duration-700
                    group-hover:translate-x-0
                  "
                />

                <span className="relative z-10 flex items-center gap-3">
                  <PhoneCall size={17} />
                  Get Free Consultation
                  <ArrowRight
                    size={17}
                    className="
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </span>
              </motion.a>

              {/* BUTTON 2 */}

              <motion.a
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                href="#"
                className="
                  group
                  rounded-full
                  border
                  border-[rgba(1,101,63,0.12)]
                  bg-white
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[1px]
                  text-[rgba(1,101,63,1)]
                  shadow-[0_12px_30px_rgba(0,0,0,0.05)]
                  transition-all
                  duration-300
                  hover:border-[rgba(1,101,63,1)]
                  hover:bg-[rgba(1,101,63,0.05)]
                "
              >
                <span className="flex items-center gap-3">
                  <Eye
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                  View Projects
                </span>
              </motion.a>

              {/* BUTTON 3 */}

              <motion.a
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                href="#"
                className="
                  group
                  rounded-full
                  border
                  border-[rgba(1,101,63,0.12)]
                  bg-[rgba(1,101,63,0.06)]
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[1px]
                  text-[rgba(1,101,63,1)]
                  transition-all
                  duration-300
                  hover:bg-[rgba(1,101,63,1)]
                  hover:text-white
                "
              >
                <span className="flex items-center gap-3">
                  <MessageCircle
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                  Book Site Visit
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* ===================================================== */}
          {/* RIGHT SIDE */}
          {/* ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative flex justify-center"
          >
            {/* MAIN IMAGE */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                w-full
                max-w-[520px]
              "
            >
              {/* IMAGE CARD */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[35px]
                  border
                  border-[rgba(1,101,63,0.10)]
                  bg-white
                  p-4
                  shadow-[0_25px_70px_rgba(0,0,0,0.08)]
                "
              >
                <img
                  src={heroImage}
                  alt="Interior"
                  className="
                    h-[350px]
                    w-full
                    rounded-[28px]
                    object-cover
                    sm:h-[480px]
                    lg:h-[580px]
                  "
                />

                {/* TOP CARD */}

                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    left-5
                    top-5
                    rounded-3xl
                    border
                    border-[rgba(1,101,63,0.10)]
                    bg-white
                    px-5
                    py-4
                    shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                  "
                >
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-[rgba(1,101,63,1)]
                    "
                  >
                    Smart Interiors
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Elegant Living Spaces
                  </p>
                </motion.div>
              </div>

              {/* VIDEO CARD */}

              <motion.div
                animate={{
                  y: [0, 14, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -bottom-10
                  -right-2
                  w-[85%]
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-[rgba(1,101,63,0.12)]
                  bg-white
                  p-3
                  shadow-[0_25px_70px_rgba(0,0,0,0.12)]
                  sm:-right-8
                  sm:w-[380px]
                "
              >
                {/* VIDEO */}

                <div className="relative overflow-hidden rounded-[24px]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="
                      h-[220px]
                      w-full
                      object-cover
                      sm:h-[260px]
                    "
                  >
                    <source src={heroVideo} type="video/mp4" />
                  </video>
                </div>

                {/* TEXT */}

                <div className="p-4">
                  <h3 className="text-lg font-bold text-black">
                    Luxury Interior Experience
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Elegant • Functional • Modern
                  </p>
                </div>
              </motion.div>

              {/* GLOW */}

              <div
                className="
                  absolute
                  -right-10
                  top-20
                  -z-10
                  h-[240px]
                  w-[240px]
                  rounded-full
                  bg-[rgba(1,101,63,0.12)]
                  blur-[100px]
                "
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
