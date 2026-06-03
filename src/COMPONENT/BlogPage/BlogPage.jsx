import React from "react";
import MainLayout from "../Layout";
import BlogHeroSection from "./BlogHero";

export default function BlogPage() {
  return (
    <MainLayout>
      <main className="overflow-hidden text-black">
        <BlogHeroSection />
      </main>
    </MainLayout>
  );
}
