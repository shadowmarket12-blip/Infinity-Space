import React from "react";
import ServiceHeroSection from "./Servicebanner";
import MainLayout from "../Layout";
import ServiceFAQ from "./Servicefaq";
import MyService from "./Myservice";
import ServiceContent from "./ServiceContent";
import AffordableInteriorSection from "./Servicequality";
import WhyChooseAffordable from "./Choose";
import Servicecta from "./ServiceCta";
import { Helmet } from "react-helmet-async";
import ServiceAreaSection from "./ClientService";

function ServicePage() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>
          Affordable Interior Design Services in Bhubaneswar | Infinity Space
        </title>

        <meta
          name="description"
          content="Looking for affordable interior design services in Bhubaneswar? Infinity Space offers budget-friendly home interiors, modular kitchens, office interiors, customized furniture, and turnkey interior solutions with smart space planning and modern designs."
        />

        <meta
          name="keywords"
          content="affordable interior design Bhubaneswar, budget interior designers Bhubaneswar, low cost interior design Bhubaneswar, interior designers Bhubaneswar price, affordable home interiors Bhubaneswar, modular kitchen budget Bhubaneswar, office interior design cost Bhubaneswar, cheap interior designers Bhubaneswar, cost effective interior design Odisha, residential interior design Bhubaneswar, commercial interior design Bhubaneswar, turnkey interior solutions Bhubaneswar, customized furniture Bhubaneswar, wardrobe design Bhubaneswar, TV unit design Bhubaneswar, false ceiling design Bhubaneswar, modular kitchen designers Bhubaneswar, interior designers in Cuttack, interior designers in Khordha, Infinity Space interior design, budget home interiors Odisha, small home interior design Bhubaneswar, space saving interior design Bhubaneswar, modern affordable interiors Bhubaneswar"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Affordable Interior Design Services in Bhubaneswar | Infinity Space"
        />
        <meta property="og:type" content="website" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://infinityspaceodisha.com/services/overview"
        />

        {/* ✅ FULL FAQ SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How much do interior design services cost in Bhubaneswar?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Interior design costs depend on space size, material preferences, customization requirements, and execution scope. Smart planning and practical material selection help create functional and visually appealing interiors within different budget ranges.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can affordable interior design still look premium?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, thoughtful layouts, balanced lighting, smart material selection, and efficient space planning can create interiors that feel elegant and visually refined without excessive spending.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do interior designers help reduce unnecessary interior expenses?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Professional interior planning helps avoid poor space utilization, material wastage, impractical layouts, and execution mistakes that often increase project costs later.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why is space planning important for modern homes?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Good space planning improves storage efficiency, movement flow, functionality, organization, and overall living comfort within the available area.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I get a modular kitchen within a reasonable budget?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, modular kitchens can be designed within practical budget ranges by choosing suitable layouts, materials, finishes, and storage solutions according to your space and requirements.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are turnkey interior solutions better for project management?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Turnkey interior execution improves coordination, reduces delays, simplifies communication, and helps manage the project more efficiently from planning to completion.",
                    },
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>
      <MainLayout>
        <div className="overflow-hidden">
          <ServiceHeroSection />
          <ServiceContent />
          <AffordableInteriorSection />
          <MyService />
          <WhyChooseAffordable />
          {/* <ServiceAreaSection /> */}
          <ServiceFAQ />
          <Servicecta />
        </div>
      </MainLayout>
    </>
  );
}

export default ServicePage;
