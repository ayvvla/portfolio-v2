import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SideWidget from "@/components/SideWidget";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      {/* <div className="mx-auto max-w-[100rem]"> */}
        <About />
        <Skills />
        <Projects />
        <Contact />
      {/* </div> */}
      <Footer />
    </main>
  );
}
