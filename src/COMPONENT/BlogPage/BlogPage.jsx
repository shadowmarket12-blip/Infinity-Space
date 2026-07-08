import React from "react";
import MainLayout from "../Layout";
import BlogHeroSection from "./BlogHero";
import BlogPageMain from "./BlogPageMain";

export default function BlogPage() {
  return (
    <MainLayout>
      <main className="overflow-hidden">
        <BlogHeroSection />
        <BlogPageMain />
      </main>
    </MainLayout>
  );
}
