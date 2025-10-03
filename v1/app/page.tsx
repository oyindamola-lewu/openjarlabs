import Hero from "@/sections/Hero/hero";
import FeaturedWork from "@/sections/FeaturedWork/featuredWork";
import AboutMe from "@/sections/AboutMe/aboutMe";
import LabsShowcase from "@/sections/LabsShowcase/labsShowcase";
import ContactCTA from "@/sections/ContactCTA/contactCTA";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div>
      <header><Navbar/></header>
      <main>
        <Hero />
        <FeaturedWork />
        <AboutMe />
        <LabsShowcase />
        <ContactCTA />
      </main>
      <footer><Footer/></footer>
    </div>
  );
}
