import React from "react";
import { motion } from "framer-motion";
import TrustMetricsSection from "./Trustmatics";
import InteriorScrollSection from "./ScrollTrust";
import PromoVideoSection from "./Promovideo";
import InteriorServicesSection from "./HomeService";
import InteriorProcessSection from "./Process";
import TestimonialsSection from "./WhatClient";
import HomeCTASection from "./Cta";
import HomeFAQ from "./FAQHome";
import ElegantHome from "./Elegant";
import WhyChooseUsCircle from "./Whytwo";
import CompanyOverview from "./Overview";
import HomeBanner from "./HomeBanner";
import { Helmet } from "react-helmet-async";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function SectionWrapper({ children, className = "" }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  );
}

function HomePage() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Best Interior Designers in Bhubaneswar | Infinity Space</title>

        <meta
          name="description"
          content="Looking for the best interior designers in Bhubaneswar? Infinity Space specializes in modern home interiors, modular kitchens, office interiors, customized furniture, false ceiling concepts, and turnkey interior solutions across Bhubaneswar, Cuttack, and Khordha."
        />

        <meta
          name="keywords"
          content="interior designers in Bhubaneswar, best interior designers Bhubaneswar, interior design company Bhubaneswar, home interior design Bhubaneswar, modular kitchen Bhubaneswar, office interior designers Bhubaneswar, residential interior design Odisha, commercial interior design Bhubaneswar, wardrobe design Bhubaneswar, TV unit design Bhubaneswar, false ceiling design Bhubaneswar, turnkey interior solutions Bhubaneswar, customized furniture Bhubaneswar, luxury home interiors Bhubaneswar, interior designers in Cuttack, interior designers in Khordha, modern interior design Bhubaneswar, space planning interior design, 3D interior design Bhubaneswar, Infinity Space interior design"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Best Interior Designers in Bhubaneswar | Infinity Space"
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Infinity Space",
            url: "https://infinityspaceodisha.com",
            logo: "https://infinityspaceodisha.com/logo.png",
            image: "https://infinityspaceodisha.com/logo.png",
            description:
              "Infinity Space provides residential and commercial interior design services in Bhubaneswar, Cuttack, and Khordha.",
            telephone: "+91-7077797720",
            address: {
              "@type": "PostalAddress",
              streetAddress: "FA 1/63, Barabhuja Market Complex, Khandagiri",
              addressLocality: "Bhubaneswar",
              addressRegion: "Odisha",
              postalCode: "751030",
              addressCountry: "IN",
            },
            areaServed: ["Bhubaneswar", "Cuttack", "Khordha"],
            sameAs: [
              "https://www.facebook.com/profile.php?id=61587564103214",
              "https://www.instagram.com/infinityspace.co/",
              "https://share.google/8pVAVX8LUqbzVwBlB",
              "https://www.youtube.com/@InfinitySpaceOfficial",
              "https://www.linkedin.com/company/infinity-space-odisha/?viewAsMember=true",
              "https://x.com/InfinitySpaceCo",
              "https://in.pinterest.com/infinityspaceodisha/",
            ],
          })}
        </script>

        {/* Canonical */}
        <link rel="canonical" href="https://infinityspaceodisha.com/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Why choose Infinity Space for interior design in Bhubaneswar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We create modern, functional, and customized interiors tailored to your lifestyle, space requirements, and design preferences with complete planning and execution support.",
                },
              },
              {
                "@type": "Question",
                name: "What interior design services do you provide?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our services include residential interiors, modular kitchens, office interiors, wardrobe design, TV units, false ceiling concepts, customized furniture, and turnkey interior solutions.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide modular kitchen design services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we design modern modular kitchens with smart layouts, optimized storage, premium finishes, and functional space planning for contemporary homes.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide office interior design services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we design office spaces, workstations, retail interiors, clinics, showrooms, and commercial spaces focused on functionality, branding, and productivity.",
                },
              },
              {
                "@type": "Question",
                name: "What is the cost of interior design in Bhubaneswar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Interior design costs depend on space size, material selection, customization requirements, and project scope. Pricing varies based on design preferences and execution needs.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer turnkey interior solutions?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, complete turnkey solutions are available including planning, 3D design, civil work, electrical work, carpentry, furniture installation, lighting, and final execution.",
                },
              },
              {
                "@type": "Question",
                name: "How long does an interior project take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Project timelines vary depending on the size, customization, and scope of work. Most projects are completed within a planned timeline after design approval.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide customized wardrobe and TV unit designs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, customized wardrobes, TV units, modular storage, and furniture concepts are designed according to your space and interior theme.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide 3D interior design visualization?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, detailed 3D concepts and layout plans are provided before execution to help visualize the final interior design.",
                },
              },
            ],
          })}
        </script>
      </Helmet>
      <main className="overflow-hidden  text-black">
        <HomeBanner />
        <SectionWrapper className="relative">
          <InteriorScrollSection />
          <TrustMetricsSection />
        </SectionWrapper>

        <SectionWrapper className="relative">
          <ElegantHome />
        </SectionWrapper>
        <InteriorServicesSection />
        <WhyChooseUsCircle />
        <CompanyOverview />
        <InteriorProcessSection />

        <PromoVideoSection />
        <TestimonialsSection />
        <HomeFAQ />
        <HomeCTASection />
      </main>
    </>
  );
}

export default HomePage;
