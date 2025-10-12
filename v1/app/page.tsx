import Hero from "@/sections/Hero/hero";
import FeaturedWork from "@/sections/FeaturedWork/featuredWork";
import AboutMe from "@/sections/AboutMe/aboutMe";
import LabsShowcase from "@/sections/LabsShowcase/labsShowcase";
import ContactCTA from "@/sections/ContactCTA/contactCTA";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Image from "next/image";



export default function Home() {
  return (
    <div className="w-ful ">
      <main className="w-full px-3 flex flex-col items-center gap-2 py-3">
        <Hero />
        <FeaturedWork />
        <AboutMe />
        <LabsShowcase />
        <ContactCTA />
      </main>
      <footer className="w-full px-3">
        <Footer />
      </footer>
    </div>
  );
}
