"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/sections/about";
import { CtaSection } from "@/components/sections/cta"

export default function AboutPageClient() {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        {/* CTA Section */}
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
