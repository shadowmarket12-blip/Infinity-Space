import React from "react";
import { Link } from "react-router-dom";

export default function AboutContentSection() {
  const paragraphs = [
    `At Infinity Space, we believe great interior design is not just about decorating a space — it is about creating an environment that improves the way people live, work, and experience everyday life. As trusted interior designers in Bhubaneswar, we focus on designing thoughtfully planned homes and workspaces that combine comfort, elegance, smart functionality, and personalized aesthetics.`,
    `Every home has a story, and every workspace reflects a vision. Our goal is to create spaces that feel warm, refined, organized, and comfortable while ensuring every detail serves a meaningful purpose. Whether it is a modern apartment, luxury villa, office workspace, retail showroom, modular kitchen, or customized furniture solution, our team works closely with clients to transform ideas into beautifully designed environments.`,
    `Infinity Space is a trusted interior design company in Bhubaneswar specializing in residential interior design, commercial interiors, modular kitchen design, wardrobe solutions, TV unit concepts, false ceiling design, customized furniture, and turnkey interior solutions. From concept planning and 3D visualization to material selection and final execution, every stage is managed with professional coordination, attention to detail, and quality craftsmanship.`,
    `We understand that designing a home or workspace is a personal journey. That is why we focus on listening carefully to our clients, understanding their lifestyle needs, space preferences, and functional requirements before creating a design concept. Instead of using repetitive templates, we believe every project deserves a tailored approach that reflects individuality, comfort, and practicality.`,
    `As experienced home interior designers in Bhubaneswar, we create spaces that maximize natural flow, improve usability, optimize storage, and maintain visual balance. Our design philosophy combines contemporary styling, intelligent layouts, premium textures, balanced lighting, and space-efficient planning to create interiors that feel sophisticated yet comfortable for modern living.`,
    `Over the years, we have worked on apartments, villas, office interiors, retail spaces, clinics, modular kitchens, and commercial projects across Bhubaneswar, Cuttack, and Khordha. Our commitment to transparent communication, organized project execution, premium materials, and finishing quality has helped us build long-term relationships with homeowners and businesses looking for reliable interior designers in Bhubaneswar.`,
    `What truly sets us apart is our practical approach to design. We do not focus only on visual appeal — we create spaces that support everyday functionality, comfort, organization, and productivity. From compact urban homes to large commercial spaces, every project is planned with creativity, precision, and thoughtful execution.`,
    `Our office is located at Barabhuja Market Complex, Khandagiri, Bhubaneswar, Odisha, where clients can connect with our team to discuss residential interiors, modular kitchen planning, office interior design, turnkey execution, and personalized interior solutions designed around their vision and budget.`,
    `At Infinity Space, we believe interior design should feel meaningful, long-lasting, and deeply connected to the people who use the space every day. Whether you are renovating your home, designing a modern office, planning a modular kitchen, or creating a new living environment from scratch, our team is dedicated to delivering spaces that combine beauty, comfort, functionality, and timeless design.`,
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* Background */}

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

      {/* Blur Light */}

      <div className="absolute left-[-120px] top-[-120px] h-[280px] w-[280px] rounded-full bg-black/[0.03] blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[280px] w-[280px] rounded-full bg-black/[0.03] blur-[120px]" />

      {/* Container */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Paragraph Layout */}

        <div className="grid gap-x-14 gap-y-14 lg:grid-cols-2">
          {paragraphs.map((text, index) => (
            <div key={index} className="relative">
              {/* Vertical Line */}

              <div
                className="
                  absolute
                  left-0
                  top-1
                  h-full
                  w-[2px]
                  bg-black
                "
              />

              {/* Content */}

              <div className="pl-8">
                {/* Small Dot */}

                <div
                  className="
                    absolute
                    left-[-5px]
                    top-0
                    h-3
                    w-3
                    rounded-full
                    bg-black
                  "
                />

                {/* Paragraph */}
                <Link to="/">
                  <p
                    className="
                    text-[15px]
                    leading-9
                    text-gray-700
                    sm:text-[17px]
                  "
                  >
                    {text}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
