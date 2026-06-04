import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import video1 from "../../assets/carosuel video.mp4";

export default function HomeBanner() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.loop = true;

      const playVideo = async () => {
        try {
          await video.play();
        } catch (err) {
          console.log("Autoplay blocked:", err);
        }
      };

      playVideo();

      const enableSound = () => {
        video.muted = false;
        video.volume = 1;
        video.play();
      };

      document.addEventListener("click", enableSound, { once: true });

      return () => {
        document.removeEventListener("click", enableSound);
      };
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          controls={false}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={video1} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Glow Effects */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[-10%] top-[-10%] h-[300px] w-[300px] rounded-full bg-green-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-[-10%] right-[-10%] h-[300px] w-[300px] rounded-full bg-emerald-500/20 blur-[120px]"
      />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-4 text-center">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Interior Designers in Bhubaneswar Creating Thoughtfully Designed
            Spaces
          </motion.h1>

          <motion.div
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-black shadow-lg"
              >
                Get Free Consultation
              </motion.button>
            </Link>

            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md"
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
