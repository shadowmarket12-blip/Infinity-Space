// ======================================================
// NEXT LEVEL PREMIUM SHOWCASE
// Mouse Move Animation + Scroll Reveal + 3D Motion
// React + TailwindCSS + Framer Motion
// ======================================================

import React, { useEffect, useRef, useState } from "react";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";

// ================= IMAGES =================

import img1 from "../../assets/ser2.webp";
import img2 from "../../assets/service1.webp";
import img3 from "../../assets/ser2.webp";

import img4 from "../../assets/service1.webp";
import img5 from "../../assets/ser2.webp";
import img6 from "../../assets/service1.webp";

// ================= VIDEO =================

import bgVideo from "../../assets/v1.mp4";

export default function NextLevelPremiumShowcase() {
  const sectionRef = useRef(null);

  // ======================================================
  // IMAGE SETS
  // ======================================================

  const imageSets = [
    [img1, img2, img3],
    [img4, img5, img6],
  ];

  const [activeSet, setActiveSet] = useState(0);

  // ======================================================
  // MOUSE ANIMATION
  // ======================================================

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), {
    stiffness: 120,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), {
    stiffness: 120,
    damping: 20,
  });

  // ======================================================
  // SCROLL CHANGE IMAGE
  // ======================================================

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const section = sectionRef.current;

          if (!section) return;

          const rect = section.getBoundingClientRect();

          if (rect.top < window.innerHeight * 0.2) {
            setActiveSet(1);
          } else {
            setActiveSet(0);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ======================================================
  // SCROLL EFFECTS
  // ======================================================

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
  });

  const y1 = useTransform(smooth, [0, 1], [0, -80]);
  const y2 = useTransform(smooth, [0, 1], [0, -130]);
  const y3 = useTransform(smooth, [0, 1], [0, -180]);

  const textY = useTransform(smooth, [0, 1], [80, -40]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={(e) => {
        const rect = sectionRef.current.getBoundingClientRect();

        mouseX.set(e.clientX - rect.width / 2);
        mouseY.set(e.clientY - rect.height / 2);
      }}
      className="
        relative
        overflow-hidden
        bg-black
        py-16
        sm:py-20
        lg:py-32
      "
      style={{
        perspective: "2000px",
      }}
    >
      {/* ====================================================== */}
      {/* VIDEO BACKGROUND */}
      {/* ====================================================== */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          scale-110
        "
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />

      {/* ====================================================== */}
      {/* ANIMATED GLOW */}
      {/* ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          left-[-10%]
          top-[-10%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-green-500/20
          blur-[140px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[-10%]
          right-[-10%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-emerald-500/20
          blur-[140px]
        "
      />

      {/* ====================================================== */}
      {/* CONTENT */}
      {/* ====================================================== */}

      <div className="relative z-20 mx-auto max-w-[1700px] px-4 sm:px-6">
        {/* ====================================================== */}
        {/* HEADER */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-white/10
              bg-white/10
              px-5
              py-2
              text-[10px]
              font-bold
              uppercase
              tracking-[4px]
              text-white
              backdrop-blur-md
              sm:text-xs
            "
          >
            Ultra Premium Experience
          </span>

          <h2
            className="
              mt-7
              text-4xl
              font-black
              leading-tight
              text-white
              sm:text-5xl
              lg:text-7xl
            "
          >
            Cinematic
            <span
              className="
                block
                bg-gradient-to-r
                from-green-300
                via-emerald-400
                to-green-500
                bg-clip-text
                text-transparent
              "
            >
              Mouse 3D Animation
            </span>
          </h2>
        </motion.div>

        {/* ====================================================== */}
        {/* IMAGE GRID */}
        {/* ====================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSet}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="
              mt-14
              grid
              grid-cols-1
              gap-4
              md:grid-cols-3
              lg:mt-24
              lg:gap-6
            "
          >
            {imageSets[activeSet].map((image, index) => (
              <motion.div
                key={index}
                style={{
                  y: index === 0 ? y1 : index === 1 ? y2 : y3,
                }}
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -20,
                  scale: 1.02,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  shadow-[0_20px_80px_rgba(0,0,0,0.45)]

                  ${index === 1 ? "lg:mt-10" : index === 2 ? "lg:mt-20" : ""}
                `}
              >
                {/* IMAGE */}

                <div
                  className="
                    relative
                    h-[420px]
                    overflow-hidden
                    sm:h-[580px]
                    lg:h-[850px]
                  "
                >
                  <motion.img
                    src={image}
                    alt="Interior"
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 1,
                    }}
                  />

                  {/* OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* SHINE EFFECT */}

                  <div
                    className="
                      absolute
                      -left-40
                      top-0
                      h-full
                      w-20
                      rotate-12
                      bg-white/20
                      blur-2xl
                      transition-all
                      duration-700
                      group-hover:left-[120%]
                    "
                  />

                  {/* GLOW */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-52
                      w-52
                      -translate-x-1/2
                      rounded-full
                      bg-green-500/20
                      blur-[100px]
                    "
                  />

                  {/* CONTENT */}

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
                      duration: 0.8,
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true }}
                    className="
                      absolute
                      bottom-8
                      left-6
                      right-6
                      z-20
                    "
                  >
                    <div
                      className="
                        inline-flex
                        rounded-full
                        bg-white/10
                        px-4
                        py-2
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[3px]
                        text-white
                        backdrop-blur-md
                      "
                    >
                      Modern Interior
                    </div>

                    <h3
                      className="
                        mt-5
                        text-3xl
                        font-black
                        text-white
                        sm:text-4xl
                      "
                    >
                      Luxury Space
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-sm
                        text-sm
                        leading-7
                        text-white/70
                        sm:text-base
                      "
                    >
                      Smooth cinematic interior animation with immersive luxury
                      modern UI experience.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ====================================================== */}
        {/* REVEAL TEXT */}
        {/* ====================================================== */}

        <motion.div
          style={{ y: textY }}
          className="
            mx-auto
            mt-24
            max-w-5xl
            text-center
            lg:mt-36
          "
        >
          <motion.h2
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="
              text-4xl
              font-black
              leading-tight
              text-white
              sm:text-5xl
              lg:text-7xl
            "
          >
            Scroll + Mouse
            <span
              className="
                block
                bg-gradient-to-r
                from-green-300
                to-emerald-500
                bg-clip-text
                text-transparent
              "
            >
              Interactive Experience
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="
              mx-auto
              mt-7
              max-w-3xl
              text-sm
              leading-8
              text-white/70
              sm:text-base
              lg:text-lg
            "
          >
            Advanced mouse movement animation, smooth 3D interaction,
            lightweight cinematic transitions, premium scrolling effects, and
            immersive modern interior experience.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
