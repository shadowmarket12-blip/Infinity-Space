import React from "react";
import MainLayout from "../Layout";
import ProjectsHeroSection from "./ProjectBanner";

export default function ProjectsPage() {
  return (
    <MainLayout>
      <main className="overflow-hidden text-black">
        <ProjectsHeroSection />
      </main>
    </MainLayout>
  );
}
