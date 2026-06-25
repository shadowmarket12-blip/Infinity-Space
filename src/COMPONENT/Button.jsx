import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingContactButtons() {
  return (
    <div
      className="
        fixed
        bottom-5
        right-4
        z-[9999]
        flex
        flex-col
        items-center
        gap-4

        sm:bottom-6
        sm:right-6
      "
    >
      {/* ====================================================== */}
      {/* WHATSAPP */}
      {/* ====================================================== */}

      <a
        href="https://wa.me/917077797720"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_10px_35px_rgba(37,211,102,0.5)]
          transition-all
          duration-300

          hover:scale-110
          hover:rotate-6

          sm:h-16
          sm:w-16
        "
      >
        {/* ICON */}

        <FaWhatsapp className="relative z-10 text-[28px] sm:text-[32px]" />
      </a>

      {/* ====================================================== */}
      {/* CALL BUTTON */}
      {/* ====================================================== */}

      <a
        href="tel:+917077797720"
        className="
          group
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-white
          text-black
        
          transition-all
          duration-300

          hover:scale-110
          hover:-rotate-6

          sm:h-16
          sm:w-16
        "
      >
        {/* PING */}

        {/* ICON */}

        <FaPhoneAlt className="relative z-10 text-[22px] sm:text-[24px]" />
      </a>
    </div>
  );
}
