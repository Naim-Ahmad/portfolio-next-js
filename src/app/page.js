import About from "@/components/about";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import Reviews from "@/components/reviews";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
